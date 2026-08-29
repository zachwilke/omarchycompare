"use client";

import { useMemo, useState, type KeyboardEvent } from "react";
import { Check, Minus } from "lucide-react";
import { groupByCategory, searchFeatures } from "@/lib/search";
import type { Feature, Verdict } from "@/lib/types";
import { cn } from "@/lib/utils";

const COLUMNS = [
  { id: "omarchy" as const, label: "Omarchy" },
  { id: "macos" as const, label: "macOS" },
  { id: "windows" as const, label: "Windows" },
];

function Mark({ verdict }: { verdict: Verdict }) {
  if (verdict === "better") {
    return (
      <span className="inline-flex items-center justify-center" title="Better">
        <span className="sr-only">Better</span>
        <Check className="size-4 stroke-[2.4] text-terminal-cyan" aria-hidden />
      </span>
    );
  }

  if (verdict === "has") {
    return (
      <span className="inline-flex items-center justify-center" title="Has it">
        <span className="sr-only">Has it</span>
        <Check className="size-4 stroke-[2.4] text-green" aria-hidden />
      </span>
    );
  }

  if (verdict === "different") {
    return (
      <span
        className="inline-flex items-center justify-center text-[1.1em] leading-none text-terminal-white/55"
        title="Different"
      >
        <span className="sr-only">Different</span>
        <span aria-hidden>≠</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center justify-center" title="No">
      <span className="sr-only">No</span>
      <Minus className="size-4 text-terminal-white/40" aria-hidden />
    </span>
  );
}

export function Compare() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = useMemo(() => searchFeatures(query), [query]);
  const groups = useMemo(() => groupByCategory(visible), [visible]);

  function onSearch(value: string) {
    setQuery(value);
    setOpenId(null);
  }

  return (
    <section id="compare" className="mt-[var(--space-large)] px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <label className="relative block">
          <span className="sr-only">Filter feature rows</span>
          <span
            aria-hidden
            className="pointer-events-none absolute left-[0.85em] top-1/2 -translate-y-1/2 text-terminal-cyan"
          >
            &gt;
          </span>
          <input
            type="text"
            inputMode="search"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            value={query}
            onChange={(event) => onSearch(event.currentTarget.value)}
            onInput={(event) => onSearch(event.currentTarget.value)}
            placeholder="filter features — spotlight, airdrop, tiling"
            className="omarchy-search"
          />
        </label>

        <p className="mt-3 text-terminal-white/60" aria-live="polite">
          {query.trim()
            ? `${visible.length} ${visible.length === 1 ? "row" : "rows"} match “${query.trim()}”`
            : `${visible.length} sourced rows · tap a row for one line`}
        </p>

        <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-terminal-white/60">
          <span className="inline-flex items-center gap-1.5">
            <Check className="size-3.5 stroke-[2.4] text-terminal-cyan" aria-hidden />
            Better
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="size-3.5 stroke-[2.4] text-green" aria-hidden />
            Has it
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-terminal-white/55">≠</span>
            Different
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Minus className="size-3.5 text-terminal-white/40" aria-hidden />
            No
          </span>
        </p>

        <div className="compare-sheet mt-5">
          <table className="w-full min-w-[36rem] border-collapse">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="compare-sticky-corner bg-storm px-3 py-3 text-left font-normal uppercase text-terminal-white/60"
                >
                  Feature
                </th>
                {COLUMNS.map((column) => (
                  <th
                    key={column.id}
                    scope="col"
                    className="compare-sticky-head bg-storm px-2 py-3 text-center font-normal uppercase text-terminal-blue"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            {groups.length === 0 ? (
              <tbody>
                <tr>
                  <td
                    colSpan={4}
                    className="px-3 py-14 text-center text-terminal-white/60"
                  >
                    No rows match. Try spotlight, airdrop, or tiling.
                  </td>
                </tr>
              </tbody>
            ) : (
              groups.map((group) => (
                <tbody key={group.category} className="align-middle">
                  <tr>
                    <th
                      scope="colgroup"
                      colSpan={4}
                      className="compare-sticky-col bg-storm px-3 pb-1 pt-7 text-left font-normal uppercase text-terminal-cyan"
                    >
                      {group.category}
                    </th>
                  </tr>
                  {group.rows.map((feature) => (
                    <FeatureRow
                      key={feature.id}
                      feature={feature}
                      open={openId === feature.id}
                      onToggle={() =>
                        setOpenId((current) =>
                          current === feature.id ? null : feature.id,
                        )
                      }
                    />
                  ))}
                </tbody>
              ))
            )}
          </table>
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  feature,
  open,
  onToggle,
}: {
  feature: Feature;
  open: boolean;
  onToggle: () => void;
}) {
  const detail = feature.binding
    ? `${feature.tease} ${feature.binding}.`
    : feature.tease;

  function onKeyDown(event: KeyboardEvent<HTMLTableRowElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle();
    }
  }

  return (
    <tr
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={onToggle}
      onKeyDown={onKeyDown}
      className={cn(
        "cursor-pointer border-t outline-none",
        open ? "bg-night" : "hover:bg-night/50",
      )}
      style={{ borderColor: "var(--border-color)" }}
    >
      <th
        scope="row"
        className={cn(
          "compare-sticky-col px-3 py-3 text-left font-normal",
          open ? "bg-night" : "bg-storm",
        )}
      >
        <span className="block text-terminal-white">{feature.name}</span>
        {open && (
          <span className="mt-1.5 block font-normal text-terminal-cyan">
            {detail}
          </span>
        )}
      </th>
      {COLUMNS.map((column) => (
        <td key={column.id} className="px-2 py-3 text-center">
          <Mark verdict={feature.columns[column.id].verdict} />
        </td>
      ))}
    </tr>
  );
}

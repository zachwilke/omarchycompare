"use client";

import { useMemo, useState, type KeyboardEvent } from "react";
import { Check, Minus, Search } from "lucide-react";
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
        <span className="flex size-6 items-center justify-center rounded-full bg-gold text-[#1a140c]">
          <Check className="size-3.5 stroke-[2.6]" aria-hidden />
        </span>
      </span>
    );
  }

  if (verdict === "has") {
    return (
      <span className="inline-flex items-center justify-center" title="Has it">
        <span className="sr-only">Has it</span>
        <Check className="size-4 stroke-[2.2] text-cream/85" aria-hidden />
      </span>
    );
  }

  if (verdict === "different") {
    return (
      <span
        className="inline-flex items-center justify-center font-display text-lg leading-none text-muted-foreground"
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
      <Minus className="size-4 text-muted-foreground/55" aria-hidden />
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
    <section id="compare" className="px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <label className="relative block">
          <span className="sr-only">Filter feature rows</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <input
            type="text"
            inputMode="search"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            value={query}
            onChange={(event) => onSearch(event.currentTarget.value)}
            onInput={(event) => onSearch(event.currentTarget.value)}
            placeholder="Search features — spotlight, airdrop, tiling…"
            className="h-11 w-full rounded-lg border border-white/10 bg-transparent pl-10 pr-3 text-sm text-cream outline-none placeholder:text-muted-foreground focus-visible:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/20"
          />
        </label>

        <p className="mt-3 text-xs text-muted-foreground" aria-live="polite">
          {query.trim()
            ? `${visible.length} ${visible.length === 1 ? "row" : "rows"} match “${query.trim()}”`
            : `${visible.length} sourced rows · tap a row for one line`}
        </p>

        <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-[11px] tracking-[0.04em] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="flex size-4 items-center justify-center rounded-full bg-gold text-[#1a140c]">
              <Check className="size-2.5 stroke-[2.6]" aria-hidden />
            </span>
            Better
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="size-3.5 text-cream/80" aria-hidden />
            Has it
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-sm leading-none">≠</span>
            Different
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Minus className="size-3.5 text-muted-foreground/55" aria-hidden />
            No
          </span>
        </p>

        <div className="compare-sheet mt-6">
          <table className="w-full min-w-[36rem] border-collapse text-sm">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="compare-sticky-corner bg-background px-3 py-3 text-left text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground"
                >
                  Feature
                </th>
                {COLUMNS.map((column) => (
                  <th
                    key={column.id}
                    scope="col"
                    className="compare-sticky-head bg-background px-2 py-3 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-cream"
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
                    className="px-3 py-16 text-center text-muted-foreground"
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
                      className="compare-sticky-col bg-background px-3 pb-1 pt-8 text-left text-[11px] font-medium uppercase tracking-[0.18em] text-gold"
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
        "cursor-pointer border-t border-white/[0.06] outline-none transition-colors focus-visible:bg-gold/[0.06]",
        open ? "bg-gold/[0.05]" : "hover:bg-white/[0.02]",
      )}
    >
      <th
        scope="row"
        className="compare-sticky-col bg-background px-3 py-3.5 text-left font-normal"
      >
        <span className="block text-[0.95rem] leading-snug text-cream/90">
          {feature.name}
        </span>
        {open && (
          <span className="mt-1.5 block text-[0.8rem] font-normal leading-snug text-gold/90">
            {detail}
          </span>
        )}
      </th>
      {COLUMNS.map((column) => (
        <td key={column.id} className="px-2 py-3.5 text-center">
          <Mark verdict={feature.columns[column.id].verdict} />
        </td>
      ))}
    </tr>
  );
}

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
        <Check className="size-4 stroke-[2.4] text-terminal-white/80" aria-hidden />
      </span>
    );
  }

  if (verdict === "different") {
    return (
      <span
        className="inline-flex items-center justify-center text-[1.1em] leading-none text-terminal-white/75"
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
      <Minus className="size-4 text-terminal-white/70" aria-hidden />
    </span>
  );
}

function featureDetail(feature: Feature) {
  return feature.binding ? `${feature.tease} ${feature.binding}.` : feature.tease;
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

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <section id="compare" className="compare-section">
      <div className="compare-toolbar mx-auto max-w-5xl">
        <div className="compare-search">
          <label className="compare-search-field">
            <span className="sr-only">Filter feature rows</span>
            <span aria-hidden className="compare-search-prompt">
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
              placeholder="spotlight, tiling, update"
              className="omarchy-search"
            />
          </label>
        </div>

        <div className="compare-meta">
          <p className="compare-legend">
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 stroke-[2.4] text-terminal-cyan" aria-hidden />
              Better
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 stroke-[2.4] text-terminal-white/80" aria-hidden />
              Has it
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-terminal-white/75">≠</span>
              Different
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Minus className="size-3.5 text-terminal-white/70" aria-hidden />
              No
            </span>
          </p>
          <p className="compare-count" aria-live="polite">
            {query.trim()
              ? `${visible.length} match “${query.trim()}”`
              : `${visible.length}`}
          </p>
        </div>

        {groups.length === 0 ? (
          <p className="mt-8 text-center text-terminal-white/80">
            No rows match. Try tiling, spotlight, or update.
          </p>
        ) : (
          <>
            <div className="compare-cards">
              {groups.map((group) => (
                <section key={group.category} className="compare-card-group">
                  <div className="compare-card-head">
                    <h2 className="compare-card-heading">{group.category}</h2>
                    <div className="compare-card-cols" aria-hidden>
                      {COLUMNS.map((column) => (
                        <span key={column.id}>{column.label}</span>
                      ))}
                    </div>
                  </div>
                  {group.rows.map((feature) => (
                    <FeatureCard
                      key={feature.id}
                      feature={feature}
                      open={openId === feature.id}
                      onToggle={() => toggle(feature.id)}
                    />
                  ))}
                </section>
              ))}
            </div>

            <div className="compare-sheet">
              <table className="compare-table">
                <colgroup>
                  <col className="compare-col-feature" />
                  <col className="compare-col-os" />
                  <col className="compare-col-os" />
                  <col className="compare-col-os" />
                </colgroup>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="compare-sticky-corner bg-night px-3 py-2 text-left font-normal uppercase text-terminal-white"
                    >
                      Feature
                    </th>
                    {COLUMNS.map((column) => (
                      <th
                        key={column.id}
                        scope="col"
                        className="compare-sticky-head bg-night px-2 py-2 text-center font-normal uppercase text-terminal-white/85"
                      >
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                {groups.map((group) => (
                  <tbody key={group.category} className="align-middle">
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className="compare-sticky-col compare-group-head bg-night px-3 text-left font-normal uppercase text-terminal-cyan"
                      >
                        {group.category}
                      </th>
                    </tr>
                    {group.rows.map((feature) => (
                      <FeatureRow
                        key={feature.id}
                        feature={feature}
                        open={openId === feature.id}
                        onToggle={() => toggle(feature.id)}
                      />
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  open,
  onToggle,
}: {
  feature: Feature;
  open: boolean;
  onToggle: () => void;
}) {
  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle();
    }
  }

  return (
    <article
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={onToggle}
      onKeyDown={onKeyDown}
      className={cn("compare-card", open && "is-open")}
    >
      <div className="compare-card__row">
        <h3 className="compare-card__name">{feature.name}</h3>
        <div className="compare-card__cells">
          {COLUMNS.map((column) => (
            <div key={column.id} className="compare-card__cell">
              <span className="sr-only">{column.label}</span>
              <Mark verdict={feature.columns[column.id].verdict} />
            </div>
          ))}
        </div>
      </div>
      {open && <p className="compare-card__detail">{featureDetail(feature)}</p>}
    </article>
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
        open ? "bg-night" : "hover:bg-storm/40",
      )}
      style={{ borderColor: "var(--border-color)" }}
    >
      <th
        scope="row"
        className={cn(
          "compare-sticky-col compare-row-name px-3 text-left font-normal",
          "bg-night",
        )}
      >
        <span className="block text-terminal-white">{feature.name}</span>
        {open && (
          <span className="mt-1.5 block font-normal text-terminal-cyan">
            {featureDetail(feature)}
          </span>
        )}
      </th>
      {COLUMNS.map((column) => (
        <td key={column.id} className="compare-row-mark px-2 text-center">
          <Mark verdict={feature.columns[column.id].verdict} />
        </td>
      ))}
    </tr>
  );
}

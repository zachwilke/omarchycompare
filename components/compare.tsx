"use client";

import { useMemo, useState, type KeyboardEvent } from "react";
import { ChevronRight, X } from "lucide-react";
import { MAC_COLUMN, OMARCHY_COLUMN, WINDOWS_COLUMN } from "@/lib/features";
import { groupByCategory, searchFeatures } from "@/lib/search";
import { ACTS, TOTAL_ROWS } from "@/lib/stats";
import type { Category, Feature, Platform, Verdict } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Keycaps } from "@/components/keycaps";
import { LegendMark, VerdictMark } from "@/components/verdict-mark";

const COLUMNS: { id: Platform; label: string; full: string }[] = [
  { id: "omarchy", label: "Omarchy", full: OMARCHY_COLUMN },
  { id: "macos", label: "macOS", full: MAC_COLUMN },
  { id: "windows", label: "Windows", full: WINDOWS_COLUMN },
];

const LEGEND: { verdict: Verdict; label: string }[] = [
  { verdict: "better", label: "Better" },
  { verdict: "has", label: "Has it" },
  { verdict: "different", label: "Different" },
  { verdict: "no", label: "No" },
];

const ACT_BY_CATEGORY = new Map(ACTS.map((act) => [act.category, act]));

function reach(feature: Feature, platform: Platform): string | undefined {
  if (platform === "macos") return feature.macReach;
  if (platform === "windows") return feature.windowsReach;
  return feature.binding;
}

function reachLabel(platform: Platform): string {
  return platform === "omarchy" ? "Binding" : "Closest reach";
}

/** The expanded panel — every sourced field this row carries. */
function FeatureDetail({ feature }: { feature: Feature }) {
  return (
    <div className="compare-detail">
      <p className="compare-detail__lead">{feature.omarchy}</p>

      {feature.binding && (
        <div className="compare-detail__binding">
          <span className="compare-detail__binding-label">Binding</span>
          <Keycaps keys={feature.binding} />
        </div>
      )}

      <div className="verdict-grid">
        {COLUMNS.map((column) => {
          const cell = feature.columns[column.id];
          const closest = reach(feature, column.id);
          return (
            <div
              key={column.id}
              className={cn(
                "verdict-card",
                column.id === "omarchy" && "verdict-card--omarchy",
              )}
            >
              <div className="verdict-card__top">
                <span className="verdict-card__platform">{column.full}</span>
                <VerdictMark verdict={cell.verdict} />
              </div>
              <p className="verdict-card__label">{cell.label}</p>
              <p className="verdict-card__note">{cell.note}</p>
              {column.id !== "omarchy" && closest && (
                <p className="verdict-card__reach">
                  {reachLabel(column.id)}: <b>{closest}</b>
                </p>
              )}
            </div>
          );
        })}
      </div>

      <p className="compare-detail__source">
        <b>Source</b> — {feature.source}
      </p>
    </div>
  );
}

export function Compare() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "All">("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = useMemo(() => {
    const matched = searchFeatures(query);
    return category === "All"
      ? matched
      : matched.filter((feature) => feature.category === category);
  }, [query, category]);

  const groups = useMemo(() => groupByCategory(visible), [visible]);

  function onSearch(value: string) {
    setQuery(value);
    setOpenId(null);
  }

  function onCategory(next: Category | "All") {
    setCategory(next);
    setOpenId(null);
  }

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  const filtered = query.trim() !== "" || category !== "All";

  return (
    <section id="compare" className="shell compare-section">
      <p className="section-eyebrow">The sheet</p>
      <h2 className="section-title">
        {TOTAL_ROWS} sourced rows. Five acts. Click any row for the receipts.
      </h2>
      <p className="section-sub">
        Better, has it, different, or no — for {OMARCHY_COLUMN}, {MAC_COLUMN},
        and {WINDOWS_COLUMN}. Nothing here invents a capability; each open row
        cites where the claim comes from.
      </p>

      <div className="acts">
        {ACTS.map((act) => (
          <button
            key={act.category}
            type="button"
            className="act-card"
            aria-pressed={category === act.category}
            onClick={() => onCategory(category === act.category ? "All" : act.category)}
          >
            <span className="act-card__top">
              <span className="act-card__numeral">Act {act.numeral}</span>
              <span className="act-card__score">
                {act.better}/{act.count} better
              </span>
            </span>
            <span className="act-card__name">{act.category}</span>
            <span className="act-card__blurb">{act.blurb}</span>
          </button>
        ))}
      </div>

      <div className="compare-toolbar">
        <div className="compare-controls">
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
              placeholder="agent, tiling, snapshot, spotlight…"
              className="omarchy-search"
            />
            {query !== "" && (
              <button
                type="button"
                className="compare-search-clear"
                onClick={() => onSearch("")}
                aria-label="Clear the filter"
              >
                <X className="size-4" aria-hidden />
              </button>
            )}
          </label>

          <div className="compare-filters" role="group" aria-label="Filter by act">
            <button
              type="button"
              className="filter-chip"
              aria-pressed={category === "All"}
              onClick={() => onCategory("All")}
            >
              All
            </button>
            {ACTS.map((act) => (
              <button
                key={act.category}
                type="button"
                className="filter-chip"
                aria-pressed={category === act.category}
                onClick={() => onCategory(act.category)}
              >
                {act.category}
              </button>
            ))}
          </div>
        </div>

        <div className="compare-meta">
          <p className="compare-legend">
            {LEGEND.map((item) => (
              <span key={item.verdict} className="inline-flex items-center">
                <LegendMark verdict={item.verdict} />
                {item.label}
              </span>
            ))}
          </p>
          <p className="compare-count" aria-live="polite">
            {filtered
              ? `${visible.length} of ${TOTAL_ROWS} rows`
              : `${TOTAL_ROWS} rows`}
          </p>
        </div>
      </div>

      {groups.length === 0 ? (
        <p className="compare-empty">
          No rows match. Try <b>tiling</b>, <b>spotlight</b>, <b>agent</b>, or{" "}
          <b>snapshot</b>.
        </p>
      ) : (
        <>
          <div className="compare-cards">
            {groups.map((group) => {
              const act = ACT_BY_CATEGORY.get(group.category);
              return (
                <section key={group.category} className="compare-card-group">
                  <div className="compare-card-head">
                    <h3 className="compare-card-heading">
                      <small>Act {act?.numeral}</small>
                      {group.category}
                    </h3>
                    <p className="compare-card-blurb">{act?.blurb}</p>
                    <div className="compare-card-cols" aria-hidden>
                      <span />
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
              );
            })}
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
                    className="compare-head-cell compare-head-cell--feature"
                  >
                    Feature
                  </th>
                  {COLUMNS.map((column) => (
                    <th
                      key={column.id}
                      scope="col"
                      className={cn(
                        "compare-head-cell",
                        column.id === "omarchy" && "compare-head-cell--omarchy",
                      )}
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              {groups.map((group) => {
                const act = ACT_BY_CATEGORY.get(group.category);
                return (
                  <tbody key={group.category}>
                    <tr className="compare-act-row">
                      <th scope="colgroup" colSpan={4}>
                        <span className="compare-act">
                          <span className="compare-act__numeral">
                            Act {act?.numeral}
                          </span>
                          <span className="compare-act__name">
                            {group.category}
                          </span>
                          <span className="compare-act__blurb">
                            {act?.blurb}
                          </span>
                        </span>
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
                );
              })}
            </table>
          </div>
        </>
      )}
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
  return (
    <article className={cn("compare-card", open && "is-open")}>
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="compare-card__row"
      >
        <h4 className="compare-card__name">{feature.name}</h4>
        {COLUMNS.map((column) => (
          <span
            key={column.id}
            className={cn(
              "compare-card__cell",
              column.id === "omarchy" && "compare-card__cell--omarchy",
            )}
          >
            <span className="sr-only">{column.label}</span>
            <VerdictMark verdict={feature.columns[column.id].verdict} />
          </span>
        ))}
      </button>
      {open && (
        <div className="compare-card__detail">
          <FeatureDetail feature={feature} />
        </div>
      )}
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
    <>
      <tr
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={onToggle}
        onKeyDown={onKeyDown}
        className={cn("compare-row", open && "is-open")}
      >
        <th scope="row" className="compare-row__head">
          <span className="compare-row__name">
            <ChevronRight
              className="compare-row__chevron size-3.5"
              aria-hidden
            />
            {feature.name}
          </span>
          {!open && <span className="compare-row__tease">{feature.tease}</span>}
        </th>
        {COLUMNS.map((column) => (
          <td
            key={column.id}
            className={cn(
              "compare-cell",
              column.id === "omarchy" && "compare-cell--omarchy",
            )}
          >
            <VerdictMark verdict={feature.columns[column.id].verdict} />
          </td>
        ))}
      </tr>
      {open && (
        <tr className="compare-detail-row">
          <td colSpan={4}>
            <FeatureDetail feature={feature} />
          </td>
        </tr>
      )}
    </>
  );
}

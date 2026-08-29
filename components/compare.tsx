"use client";

import { useMemo, useState } from "react";
import { Check, Minus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
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

  return (
    <section id="compare" className="px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <Input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search features — spotlight, airdrop, tiling…"
            aria-label="Filter feature rows"
            className="h-11 pl-10"
          />
        </div>

        <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-[11px] tracking-[0.04em] text-muted-foreground">
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

        <div className="compare-sheet mt-6 overflow-x-auto">
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
                        setOpenId(openId === feature.id ? null : feature.id)
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

  return (
    <>
      <tr
        className={cn(
          "cursor-pointer border-t border-white/[0.06] transition-colors",
          open ? "bg-gold/[0.04]" : "hover:bg-white/[0.02]",
        )}
      >
        <th
          scope="row"
          className="compare-sticky-col bg-background px-3 py-3.5 text-left font-normal"
        >
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            className="w-full text-left text-[0.95rem] leading-snug text-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
          >
            {feature.name}
          </button>
        </th>
        {COLUMNS.map((column) => (
          <td key={column.id} className="px-2 py-3.5 text-center">
            <button
              type="button"
              onClick={onToggle}
              aria-label={`${feature.name} on ${column.label}: ${feature.columns[column.id].verdict}`}
              className="flex w-full items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
            >
              <Mark verdict={feature.columns[column.id].verdict} />
            </button>
          </td>
        ))}
      </tr>
      {open && (
        <tr className="border-t border-white/[0.04] bg-gold/[0.03]">
          <td
            colSpan={4}
            className="px-3 py-2.5 text-[0.8rem] leading-snug text-muted-foreground"
          >
            {detail}
          </td>
        </tr>
      )}
    </>
  );
}

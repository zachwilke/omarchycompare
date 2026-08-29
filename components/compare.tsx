"use client";

import { useMemo, useState, type KeyboardEvent } from "react";
import { ComingFromToggle } from "@/components/coming-from-toggle";
import { Keybind } from "@/components/keybind";
import { Badge } from "@/components/ui/badge";
import {
  CATEGORIES,
  MAC_COLUMN,
  MAC_COLUMN_NOTE,
  OMARCHY_COLUMN,
  VERDICT_COPY,
  VERSION_BADGE,
  WINDOWS_COLUMN,
  filterFeatures,
} from "@/lib/features";
import type { Category, ComingFrom, Feature, Platform, Verdict } from "@/lib/types";
import { cn } from "@/lib/utils";

const PLATFORMS: { id: Platform; label: string }[] = [
  { id: "omarchy", label: OMARCHY_COLUMN },
  { id: "macos", label: MAC_COLUMN },
  { id: "windows", label: WINDOWS_COLUMN },
];

function verdictClass(verdict: Verdict) {
  switch (verdict) {
    case "better":
      return "border-gold/30 bg-gold/12 text-gold";
    case "has":
      return "border-white/12 bg-white/6 text-cream";
    case "different":
      return "border-white/8 bg-white/[0.03] text-muted-foreground";
    case "no":
      return "border-rose-900/40 bg-rose-950/30 text-rose-200/80";
  }
}

export function Compare({
  comingFrom,
  onComingFrom,
  features,
}: {
  comingFrom: ComingFrom;
  onComingFrom: (value: ComingFrom) => void;
  features: Feature[];
}) {
  const [category, setCategory] = useState<Category | "All">("All");
  const [openId, setOpenId] = useState<string | null>(features[0]?.id ?? null);

  const visible = useMemo(
    () => filterFeatures(features, category, comingFrom),
    [features, category, comingFrom],
  );

  const resolvedOpenId =
    openId === null
      ? null
      : visible.some((feature) => feature.id === openId)
        ? openId
        : (visible[0]?.id ?? null);

  function onListKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const ids = visible.map((feature) => feature.id);
    const current = resolvedOpenId ? ids.indexOf(resolvedOpenId) : 0;

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const delta = event.key === "ArrowDown" ? 1 : -1;
      const next = ids[(current + delta + ids.length) % ids.length];
      setOpenId(next);
      document.getElementById(`feature-${next}`)?.focus();
    }

    if (event.key === "Home") {
      event.preventDefault();
      setOpenId(ids[0]);
      document.getElementById(`feature-${ids[0]}`)?.focus();
    }

    if (event.key === "End") {
      event.preventDefault();
      const last = ids[ids.length - 1];
      setOpenId(last);
      document.getElementById(`feature-${last}`)?.focus();
    }

    if (event.key === "Escape") {
      setOpenId(null);
    }
  }

  const highlight =
    comingFrom === "mac" ? "macos" : comingFrom === "windows" ? "windows" : null;

  return (
    <section id="compare" className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 border-b border-white/8 pb-6 lg:flex-row lg:items-end lg:justify-between lg:gap-6 lg:pb-8">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
              Tap a feature
            </p>
            <h2 className="mt-3 font-display text-[2rem] tracking-tight text-cream sm:text-5xl">
              How it lands on Omarchy.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              {visible.length} sourced rows from {VERSION_BADGE}. Open one for
              the Omarchy path, the {MAC_COLUMN} ({MAC_COLUMN_NOTE}) and{" "}
              {WINDOWS_COLUMN} equivalent, and the binding — if there is one.
            </p>
          </div>
          <div className="w-full lg:max-w-md">
            <ComingFromToggle value={comingFrom} onChange={onComingFrom} />
          </div>
        </div>

        <div
          className="mt-5 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Feature groups"
        >
          {(["All", ...CATEGORIES] as const).map((item) => {
            const selected = category === item;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setCategory(item)}
                className={cn(
                  "min-h-11 shrink-0 rounded-full border px-3.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50",
                  selected
                    ? "border-gold/40 bg-gold/15 text-gold"
                    : "border-white/8 text-muted-foreground hover:border-white/20 hover:text-cream",
                )}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="mt-5 hidden grid-cols-[minmax(0,1.15fr)_repeat(3,minmax(0,0.75fr))] gap-3 px-2 text-[10px] uppercase leading-tight tracking-[0.14em] text-muted-foreground xl:grid">
          <span>Feature</span>
          {PLATFORMS.map((platform) => (
            <span
              key={platform.id}
              className={cn(
                highlight === platform.id && "text-gold",
                platform.id === "omarchy" && "text-cream",
              )}
            >
              {platform.label}
            </span>
          ))}
        </div>

        <div
          onKeyDown={onListKeyDown}
          className="mt-3 divide-y divide-white/6 overflow-hidden rounded-2xl border border-white/8 bg-[#100e0c]/80"
        >
          {visible.length === 0 ? (
            <div className="px-5 py-16 text-center">
              <p className="font-display text-2xl text-cream">Nothing in this group.</p>
              <p className="mt-2 text-muted-foreground">
                Try another category, or switch back to Either.
              </p>
            </div>
          ) : (
            visible.map((feature) => (
              <FeatureRow
                key={feature.id}
                feature={feature}
                open={resolvedOpenId === feature.id}
                highlight={highlight}
                onToggle={() =>
                  setOpenId(resolvedOpenId === feature.id ? null : feature.id)
                }
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  feature,
  open,
  highlight,
  onToggle,
}: {
  feature: Feature;
  open: boolean;
  highlight: Platform | null;
  onToggle: () => void;
}) {
  const panelId = `feature-panel-${feature.id}`;
  const omarchy = feature.columns.omarchy;

  return (
    <div className={cn(open && "bg-gold/[0.04]")}>
      <button
        id={`feature-${feature.id}`}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="grid w-full grid-cols-1 gap-3 px-4 py-5 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold/40 min-[390px]:min-h-20 xl:grid-cols-[minmax(0,1.15fr)_repeat(3,minmax(0,0.75fr))] xl:items-center xl:gap-3 xl:px-5"
      >
        <span className="flex items-start justify-between gap-3">
          <span className="min-w-0">
            <span className="flex flex-wrap items-center gap-2">
              <span className="font-display text-[1.35rem] leading-tight text-cream sm:text-2xl">
                {feature.name}
              </span>
              <Badge
                variant="outline"
                className="border-white/10 text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
              >
                {feature.category}
              </Badge>
            </span>
            <span className="mt-1.5 block text-[0.95rem] leading-relaxed text-muted-foreground">
              {feature.tease}
            </span>
            <span
              className={cn(
                "mt-3 inline-flex max-w-full rounded-full border px-2.5 py-1 text-xs xl:hidden",
                verdictClass(omarchy.verdict),
              )}
            >
              Omarchy · {VERDICT_COPY[omarchy.verdict]}
              <span className="mx-1.5 text-current/40">·</span>
              <span className="truncate">{omarchy.label}</span>
            </span>
          </span>
          <span
            aria-hidden
            className={cn(
              "mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-cream/80 xl:hidden",
              open && "bg-gold/15 text-gold",
            )}
          >
            {open ? "–" : "+"}
          </span>
        </span>
        {PLATFORMS.map((platform) => {
          const column = feature.columns[platform.id];
          return (
            <span
              key={platform.id}
              className={cn(
                "hidden xl:flex",
                highlight === platform.id && "xl:opacity-100",
                highlight && highlight !== platform.id && platform.id !== "omarchy"
                  ? "xl:opacity-55"
                  : "",
              )}
            >
              <span
                className={cn(
                  "inline-flex rounded-full border px-2.5 py-0.5 text-xs",
                  verdictClass(column.verdict),
                )}
              >
                {VERDICT_COPY[column.verdict]}
                <span className="mx-1.5 text-current/40">·</span>
                {column.label}
              </span>
            </span>
          );
        })}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="border-t border-white/6 px-4 pb-6 pt-3 xl:px-5"
      >
        {open && (
          <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr] xl:gap-6">
            <div>
              {feature.binding && (
                <p className="mb-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-[11px] uppercase tracking-[0.18em]">
                    Binding
                  </span>
                  <Keybind keys={feature.binding} />
                </p>
              )}
              <p className="max-w-2xl text-base leading-relaxed text-cream/90">
                {feature.omarchy}
              </p>
              {(feature.macReach || feature.windowsReach) && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {feature.macReach && (
                    <>
                      On a Mac you reached for{" "}
                      <span className="text-cream">{feature.macReach}</span>
                      {feature.windowsReach ? ". " : "."}
                    </>
                  )}
                  {feature.windowsReach && (
                    <>
                      On Windows,{" "}
                      <span className="text-cream">{feature.windowsReach}</span>.
                    </>
                  )}
                </p>
              )}
              <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-muted-foreground/70">
                Source · {feature.source}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {PLATFORMS.map((platform) => {
                const column = feature.columns[platform.id];
                const emphasized =
                  platform.id === "omarchy" || highlight === platform.id;
                return (
                  <article
                    key={platform.id}
                    className={cn(
                      "rounded-xl border p-4",
                      emphasized
                        ? "border-gold/25 bg-gold/[0.06]"
                        : "border-white/8 bg-white/[0.02]",
                    )}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {platform.label}
                      </p>
                      <span
                        className={cn(
                          "rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.12em]",
                          verdictClass(column.verdict),
                        )}
                      >
                        {VERDICT_COPY[column.verdict]}
                      </span>
                    </div>
                    <p className="mt-2 font-display text-xl text-cream">
                      {column.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {column.note}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

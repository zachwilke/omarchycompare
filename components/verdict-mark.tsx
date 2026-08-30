import { Check, Minus } from "lucide-react";
import { VERDICT_COPY } from "@/lib/features";
import type { Verdict } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Four visually distinct marks. "Better" is the only one that gets a filled
 * chip — the Omarchy lane should read at a glance.
 */
export function VerdictMark({ verdict }: { verdict: Verdict }) {
  const label = VERDICT_COPY[verdict];

  return (
    <span className={cn("mark", `mark--${verdict}`)} title={label}>
      <span className="sr-only">{label}</span>
      {verdict === "better" && (
        <Check className="size-3.5 stroke-[2.75]" aria-hidden />
      )}
      {verdict === "has" && <Check className="size-4 stroke-[2.2]" aria-hidden />}
      {verdict === "different" && <span aria-hidden>≠</span>}
      {verdict === "no" && <Minus className="size-4" aria-hidden />}
    </span>
  );
}

export function LegendMark({ verdict }: { verdict: Verdict }) {
  return (
    <span className={cn("legend-mark", `mark--${verdict}`, `legend-mark--${verdict}`)} aria-hidden>
      {verdict === "better" && <Check className="size-2.5 stroke-[3]" />}
      {verdict === "has" && <Check className="size-3.5 stroke-[2.2]" />}
      {verdict === "different" && <span>≠</span>}
      {verdict === "no" && <Minus className="size-3.5" />}
    </span>
  );
}

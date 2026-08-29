import { cn } from "@/lib/utils";
import type { ComingFrom } from "@/lib/types";

const OPTIONS: { id: ComingFrom; label: string; short: string }[] = [
  { id: "either", label: "Either", short: "Either" },
  { id: "mac", label: "Coming from Mac", short: "From Mac" },
  { id: "windows", label: "Coming from Windows", short: "From Windows" },
];

export function ComingFromToggle({
  value,
  onChange,
  compact = false,
}: {
  value: ComingFrom;
  onChange: (value: ComingFrom) => void;
  compact?: boolean;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Highlight a translation"
      className={cn(
        "grid w-full grid-cols-3 rounded-2xl border border-white/10 bg-white/[0.03] p-1",
        compact && "w-auto rounded-full",
      )}
    >
      {OPTIONS.map((option) => {
        const selected = value === option.id;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(option.id)}
            className={cn(
              "min-h-12 rounded-xl px-2 text-center text-xs leading-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 sm:text-sm",
              compact && "min-h-9 rounded-full text-[11px]",
              selected
                ? "bg-gold text-[#1a140c]"
                : "text-muted-foreground hover:text-cream",
            )}
          >
            <span className="sm:hidden">{option.short}</span>
            <span className="hidden sm:inline">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}

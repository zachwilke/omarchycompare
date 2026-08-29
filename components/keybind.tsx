import { cn } from "@/lib/utils";

export function Keybind({
  keys,
  className,
}: {
  keys: string;
  className?: string;
}) {
  const parts = keys.split(" · ").flatMap((group, groupIndex, groups) => {
    const chips = group.split(" + ").map((key) => (
      <kbd
        key={`${group}-${key}`}
        className="inline-flex min-w-[1.35rem] items-center justify-center rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[0.68rem] font-medium tracking-wide text-cream/90 shadow-[inset_0_-1px_0_rgba(0,0,0,0.35)]"
      >
        {key}
      </kbd>
    ));

    if (groupIndex === groups.length - 1) return chips;

    return [
      ...chips,
      <span key={`sep-${groupIndex}`} className="px-1 text-muted-foreground/70">
        ·
      </span>,
    ];
  });

  return (
    <span
      className={cn(
        "inline-flex flex-wrap items-center gap-1 align-middle",
        className,
      )}
    >
      {parts}
    </span>
  );
}

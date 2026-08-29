import { ComingFromToggle } from "@/components/coming-from-toggle";
import { buttonVariants } from "@/components/ui/button";
import { ISO_URL, MANUAL_URL, OMARCHY_URL } from "@/lib/features";
import type { ComingFrom } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SiteHeader({
  comingFrom,
  onComingFrom,
}: {
  comingFrom: ComingFrom;
  onComingFrom: (value: ComingFrom) => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/6 bg-[#0c0b0a]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-6">
        <a
          href={OMARCHY_URL}
          target="_blank"
          rel="noreferrer"
          className="group flex min-w-0 items-center gap-2.5"
        >
          <span className="flex size-7 items-center justify-center rounded-md border border-gold/30 bg-gold/10 font-display text-lg leading-none text-gold">
            O
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-tight text-cream">
              Omarchy
            </span>
            <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:tracking-[0.2em]">
              vs Tahoe · 11 25H2
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#compare" className="transition-colors hover:text-cream">
            Compare
          </a>
          <a href="#gaps" className="transition-colors hover:text-cream">
            Honest gaps
          </a>
          <a
            href={MANUAL_URL}
            className="transition-colors hover:text-cream"
            target="_blank"
            rel="noreferrer"
          >
            Official manual
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <ComingFromToggle value={comingFrom} onChange={onComingFrom} compact />
          </div>
          <a
            href={ISO_URL}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hidden h-8 text-cream sm:inline-flex",
            )}
          >
            4.0.1 ISO
          </a>
          <a
            href={OMARCHY_URL}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants(),
              "min-h-10 bg-gold px-3 text-[#1a140c] hover:bg-gold/90 sm:h-8 sm:min-h-8",
            )}
          >
            Get Omarchy
          </a>
        </div>
      </div>
    </header>
  );
}

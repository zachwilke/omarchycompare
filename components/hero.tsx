import {
  PaletteStage,
  ThemeCarouselStage,
  TilingStage,
} from "@/components/illustrations";
import { ComingFromToggle } from "@/components/coming-from-toggle";
import {
  ISO_URL,
  MAC_COLUMN,
  MANUAL_URL,
  OMACOM_ANNOUNCE_URL,
  OMARCHY_URL,
  VERSION_BADGE,
  WINDOWS_COLUMN,
} from "@/lib/features";
import type { ComingFrom } from "@/lib/types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero({
  comingFrom,
  onComingFrom,
}: {
  comingFrom: ComingFrom;
  onComingFrom: (value: ComingFrom) => void;
}) {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(232,184,109,0.14),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-gold sm:mb-5 sm:tracking-[0.28em]">
            {VERSION_BADGE}
          </p>
          <h1 className="font-display text-[2.15rem] leading-[1.08] tracking-tight text-cream sm:text-6xl lg:text-[4.25rem]">
            Omarchy has what Mac and Windows have.
            <span className="mt-3 block text-gold">
              The parts that matter, it has more of.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
            Tiling instead of a pile of windows. One menu instead of six
            launchers. One update instead of a dozen nags. Themes that follow
            you into the editor. Super is the key your thumb already knows.
            Compared with {MAC_COLUMN} and {WINDOWS_COLUMN}.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Omarchy is stewarded by the{" "}
            <a
              href={OMACOM_ANNOUNCE_URL}
              target="_blank"
              rel="noreferrer"
              className="text-cream underline-offset-4 hover:underline"
            >
              Omacom Foundation
            </a>
            , the nonprofit that holds the trademarks, funds infrastructure,
            and supports the open-source projects Omarchy depends on.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={OMARCHY_URL}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "min-h-12 w-full bg-gold px-5 text-[#1a140c] hover:bg-gold/90 sm:w-auto",
              )}
            >
              Get Omarchy
            </a>
            <a
              href={ISO_URL}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "min-h-12 w-full border-white/15 px-5 text-cream hover:bg-white/5 sm:w-auto",
              )}
            >
              4.0.1 ISO
            </a>
            <a
              href={MANUAL_URL}
              target="_blank"
              rel="noreferrer"
              className="min-h-11 text-center text-sm leading-[2.75rem] text-muted-foreground underline-offset-4 hover:text-cream hover:underline sm:leading-normal"
            >
              Coming from Mac or Windows →
            </a>
          </div>

          <div className="mt-8 lg:hidden">
            <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Translate my hands
            </p>
            <ComingFromToggle value={comingFrom} onChange={onComingFrom} />
          </div>
        </div>

        <div className="grid gap-4">
          <TilingStage />
          <div className="grid gap-4 sm:grid-cols-2">
            <PaletteStage />
            <ThemeCarouselStage />
          </div>
        </div>
      </div>
    </section>
  );
}

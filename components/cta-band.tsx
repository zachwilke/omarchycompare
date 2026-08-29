import { buttonVariants } from "@/components/ui/button";
import {
  ISO_SHA256,
  ISO_URL,
  MAC_COLUMN,
  MANUAL_URL,
  OMARCHY_URL,
  VERSION_BADGE,
  WINDOWS_COLUMN,
} from "@/lib/features";
import { cn } from "@/lib/utils";

export function CtaBand() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-gold/20 bg-[linear-gradient(180deg,rgba(232,184,109,0.12),rgba(12,11,10,0.4))] px-5 py-10 sm:px-12 sm:py-14">
        <p className="text-[11px] uppercase tracking-[0.22em] text-gold sm:tracking-[0.28em]">
          {VERSION_BADGE}
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-[2rem] tracking-tight text-cream sm:text-5xl">
          Leave the overlapping windows. Keep the muscle memory.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Arch-based desktop by DHH / Basecamp. Hyprland plus a single
          Quickshell — omarchy-shell. Super is waiting where Cmd and Win used
          to sit. Official ISO is x86-64. Turn off Secure Boot and/or TPM
          before you flash. Compared with {MAC_COLUMN} and {WINDOWS_COLUMN}.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
            omarchy-4.0.1.iso
          </a>
          <a
            href={MANUAL_URL}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "lg", variant: "ghost" }),
                "min-h-12 w-full px-5 text-cream hover:bg-white/5 sm:w-auto",
            )}
          >
            Official translation chapter
          </a>
        </div>
        <p className="mt-6 max-w-3xl break-all font-mono text-[11px] leading-relaxed text-muted-foreground/80">
          SHA256 {ISO_SHA256}
        </p>
      </div>
    </section>
  );
}

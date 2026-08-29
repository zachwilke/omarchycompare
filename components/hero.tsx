import { buttonVariants } from "@/components/ui/button";
import { OMARCHY_URL, VERSION_BADGE } from "@/lib/features";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14">
      <div className="mx-auto max-w-5xl">
        <p className="text-[11px] uppercase tracking-[0.18em] text-gold">
          {VERSION_BADGE}
        </p>
        <h1 className="mt-3 max-w-xl font-display text-[2rem] leading-tight tracking-tight text-cream sm:text-4xl">
          Omarchy, macOS, and Windows — side by side.
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
          A sourced sheet for the same jobs. Checks, not essays.
        </p>
        <a
          href={OMARCHY_URL}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-6 inline-flex min-h-11 bg-gold px-5 text-[#1a140c] hover:bg-gold/90",
          )}
        >
          Get Omarchy
        </a>
      </div>
    </section>
  );
}

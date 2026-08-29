import { buttonVariants } from "@/components/ui/button";
import { OMARCHY_URL, VERSION_BADGE } from "@/lib/features";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href={OMARCHY_URL}
          target="_blank"
          rel="noreferrer"
          className="min-w-0 text-sm tracking-tight text-cream"
        >
          <span className="font-display text-lg">Omarchy</span>
          <span className="ml-2 hidden text-muted-foreground sm:inline">
            {VERSION_BADGE}
          </span>
        </a>
        <a
          href={OMARCHY_URL}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants(),
            "h-8 bg-gold px-3 text-[#1a140c] hover:bg-gold/90",
          )}
        >
          Get Omarchy
        </a>
      </div>
    </header>
  );
}

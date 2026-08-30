import { Compare } from "@/components/compare";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function Home() {
  return (
    <>
      <div className="ambient" aria-hidden />
      <div id="top" className="site-body flex min-h-full flex-1 flex-col">
        <a
          href="#compare"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-terminal-cyan focus:px-3 focus:py-2 focus:text-night focus:no-underline"
        >
          Skip to the sheet
        </a>
        <SiteHeader />
        <main>
          <Hero />
          <Compare />
          <CtaBand />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}

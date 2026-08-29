import { Compare } from "@/components/compare";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <a
        href="#compare"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-gold focus:px-3 focus:py-2 focus:text-[#1a140c]"
      >
        Skip to compare
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Compare />
      </main>
      <SiteFooter />
    </div>
  );
}

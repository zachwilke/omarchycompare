"use client";

import { useState } from "react";
import { Compare } from "@/components/compare";
import { CtaBand } from "@/components/cta-band";
import { Gaps } from "@/components/gaps";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { features } from "@/lib/features";
import type { ComingFrom } from "@/lib/types";

export function Home() {
  const [comingFrom, setComingFrom] = useState<ComingFrom>("either");

  return (
    <div id="top" className="flex min-h-full flex-col">
      <a
        href="#compare"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-gold focus:px-3 focus:py-2 focus:text-[#1a140c]"
      >
        Skip to compare
      </a>
      <SiteHeader comingFrom={comingFrom} onComingFrom={setComingFrom} />
      <main>
        <Hero comingFrom={comingFrom} onComingFrom={setComingFrom} />
        <Compare
          comingFrom={comingFrom}
          onComingFrom={setComingFrom}
          features={features}
        />
        <Gaps />
        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}

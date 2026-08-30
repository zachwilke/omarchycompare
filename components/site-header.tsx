"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MANUAL_URL, OMARCHY_URL } from "@/lib/features";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    function onScroll() {
      setStuck(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" data-stuck={stuck}>
      <div className="shell site-header__inner">
        <Link href="/" className="site-wordmark" aria-label="omarchycompare home">
          <span className="site-wordmark__prompt" aria-hidden>
            ▍
          </span>
          omarchy<span className="site-wordmark__dim">compare</span>
        </Link>

        <nav className="site-header__links" aria-label="Site">
          <a href="#compare" className="header-link">
            The sheet
          </a>
          <a
            href={MANUAL_URL}
            target="_blank"
            rel="noreferrer"
            className="header-link"
          >
            Manual
          </a>
          <a
            href={OMARCHY_URL}
            target="_blank"
            rel="noreferrer"
            className="header-link header-link--cta"
          >
            Get Omarchy
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

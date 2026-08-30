"use client";

import { Moon, Sun } from "lucide-react";
import { THEME_COLOR, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

/**
 * Dark is the default. Light is an explicit opt-in stored per browser.
 * Which glyph shows is decided in CSS from data-theme, so the button is
 * correct on first paint and there is nothing to hydrate.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next: Theme = root.dataset.theme === "light" ? "dark" : "light";

    root.dataset.theme = next;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLOR[next]);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Private mode or blocked storage — the theme still applies for now.
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Switch between the dark and light theme"
      title="Switch theme"
    >
      <Sun className="theme-toggle__sun size-4" aria-hidden />
      <Moon className="theme-toggle__moon size-4" aria-hidden />
    </button>
  );
}

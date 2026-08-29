import type { Category, ComingFrom, Feature, Verdict } from "./types";

export const CATEGORIES: Category[] = [
  "Future desktop",
  "Keyboard OS",
  "Builder OS",
  "Own the machine",
  "Honest tradeoffs",
];

export const VERDICT_COPY: Record<Verdict, string> = {
  better: "Better",
  has: "Has it",
  different: "Different",
  no: "No",
};

export const ISO_URL = "https://iso.omarchy.org/omarchy-4.0.1.iso";
export const ISO_SHA256 =
  "69cbb4e10d98ad831c3c9f245b5757a9d1fedfd0c9592780e977d6f950dea8c3";
export const OMARCHY_URL = "https://omarchy.org";
export const MANUAL_URL = "https://omarchy.org/manual/coming-from-mac-or-windows/";
export const RELEASE_400 = "https://github.com/basecamp/omarchy/releases/tag/v4.0.0";
export const RELEASE_401 = "https://github.com/basecamp/omarchy/releases/tag/v4.0.1";
export const PLUGINS_URL = "https://omarchyplugins.com/";
export const OMACOM_URL = "https://omacom.io";
export const OMACOM_ANNOUNCE_URL =
  "https://omarchy.org/news/2026/08/omacom-foundation-launches-with-8-million";

export const VERSION_BADGE = "Omarchy 4.0.1 · Quattro";
export const MAC_COLUMN = "macOS Tahoe 26";
export const MAC_COLUMN_NOTE = "public 26.6.2";
export const WINDOWS_COLUMN = "Windows 11 25H2";
export const OMARCHY_COLUMN = "Omarchy 4.0.1";

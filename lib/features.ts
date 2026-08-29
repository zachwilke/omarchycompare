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

export const features: Feature[] = [
  {
    id: "quickshell",
    name: "One shell process",
    tease: "Bar, launcher, menus, lock, notifications — one Quickshell. Not seven Linux daemons.",
    category: "Future desktop",
    omarchy:
      "Quattro rewrote the desktop in Quickshell. The bar, launcher, menus, notifications, on-screen displays, control panels, lock screen, and polkit agent live in a single long-running process with a plugin architecture. Waybar, Walker, Mako, SwayOSD, hyprlock, hypridle, swaybg, and polkit-gnome are gone. One themed, IPC-scriptable shell. Event-driven, so an idle desktop stops burning CPU. The bar’s widgets are real surfaces — workspaces, media, tray, battery, mic, updates, DND — and Super + Ctrl + 1–9 opens the right-side panels by position.",
    macReach: "WindowServer + Control Center",
    windowsReach: "explorer.exe + Shell Experience",
    columns: {
      omarchy: {
        verdict: "better",
        label: "omarchy-shell",
        note: "One process. Plugins instead of a daemon pile.",
      },
      macos: {
        verdict: "different",
        label: "Integrated shell",
        note: "Apple’s desktop is one product — not one replaceable process.",
      },
      windows: {
        verdict: "different",
        label: "Explorer shell",
        note: "Taskbar, Start, and toasts are separate moving parts.",
      },
    },
    source: "Omarchy 4.0.0 release notes (The Quattro Release) — The Shell",
    macOrder: 1,
    windowsOrder: 1,
  },
];

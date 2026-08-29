import type { Category, ComingFrom, Feature, Verdict } from "./types";

export const CATEGORIES: Category[] = [
  "Desktop",
  "Windows",
  "Settings",
  "Apps",
  "Dev/AI",
  "Security",
  "Capture",
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
    id: "super-key",
    name: "Super is the new Cmd",
    tease: "One key carries the muscle memory. No remap required.",
    category: "Desktop",
    binding: "Super",
    omarchy:
      "Every instinct built around Cmd or the Windows key lands on Super. On a PC keyboard that is the Windows key. On an Intel Mac, Linux treats the Command key as Super, so the thumb stays where it always was. Omarchy does not remap the keyboard.",
    macReach: "Command",
    windowsReach: "Windows key",
    columns: {
      omarchy: {
        verdict: "better",
        label: "One Super key",
        note: "Anchor for nearly every hotkey. Command is Super on Intel Macs.",
      },
      macos: {
        verdict: "has",
        label: "Command",
        note: "The muscle memory Omarchy is translating.",
      },
      windows: {
        verdict: "has",
        label: "Windows key",
        note: "Same physical key. Same Super.",
      },
    },
    source: "Coming From Mac or Windows — The Omarchy Manual",
    macOrder: 1,
    windowsOrder: 2,
  },
  {
    id: "one-menu",
    name: "One menu for everything",
    tease: "Spotlight, Raycast, and Start become a single Super+Space.",
    category: "Desktop",
    binding: "Super + Space",
    omarchy:
      "Super + Space opens the Omarchy menu: a native, filterable command palette inside the shell. It launches apps, changes settings, installs software, and captures the screen. Start typing to filter. Nested search and the old launcher now live in one surface, defined in JSONC and extensible from ~/.config/omarchy/extensions/omarchy-menu.jsonc.",
    macReach: "Spotlight / Raycast",
    windowsReach: "Start menu",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Apps + settings + install + capture",
        note: "One palette. Fuzzy and acronym matching, live icons, hide unused entries.",
      },
      macos: {
        verdict: "has",
        label: "Spotlight, or Raycast",
        note: "Launches apps and files. Settings and installers stay elsewhere.",
      },
      windows: {
        verdict: "has",
        label: "Start menu",
        note: "Apps and search. Settings and the Store are other surfaces.",
      },
    },
    source: "Coming From Mac or Windows; Omarchy 4.0.0 release notes",
    macOrder: 2,
    windowsOrder: 1,
  },
  {
    id: "apps-only",
    name: "Apps-only launcher",
    tease: "When you only want to launch, Super+Alt+Space stays scoped.",
    category: "Desktop",
    binding: "Super + Alt + Space",
    omarchy:
      "The merge did not lose a dedicated app launcher. Super + Alt + Space opens an apps-only menu with the same fuzzy matching and live icon indexing — without the rest of the Omarchy command tree.",
    macReach: "Spotlight scoped to apps",
    windowsReach: "Start, apps list",
    columns: {
      omarchy: {
        verdict: "has",
        label: "Dedicated apps menu",
        note: "Same launcher quality, narrower job.",
      },
      macos: {
        verdict: "has",
        label: "Spotlight / Launchpad",
        note: "Launchpad is the grid; Spotlight is the search.",
      },
      windows: {
        verdict: "has",
        label: "Start apps list",
        note: "Pinned and all-apps views.",
      },
    },
    source: "Coming From Mac or Windows; Omarchy 4.0.0 release notes",
    macOrder: 3,
    windowsOrder: 3,
  },
  {
    id: "one-bar",
    name: "One bar. No dock. No icons.",
    tease: "The only persistent UI is a single bar you can drag to any edge.",
    category: "Desktop",
    binding: "Super + Return · Super + Shift + Return · Super + K",
    omarchy:
      "Nothing to click to launch, no icons to arrange. The terminal is Super + Return, the browser Super + Shift + Return, and Super + K lists every mapped binding. The one persistent piece of UI is the bar — what the menu bar, tray, and Notification Center used to cover. Nearly every widget does something on left, right, and middle click. Drag empty bar space to any screen edge; a ghost slab previews the dock. Double-click empty space to toggle transparency.",
    macReach: "Dock + menu bar + desktop icons",
    windowsReach: "Taskbar + desktop icons",
    columns: {
      omarchy: {
        verdict: "better",
        label: "One bar, any edge",
        note: "No dock. No desktop icons. Drag to top, bottom, left, or right.",
      },
      macos: {
        verdict: "different",
        label: "Dock + menu bar",
        note: "Always-on launch strip and a menu bar per app.",
      },
      windows: {
        verdict: "different",
        label: "Taskbar",
        note: "Pinned apps, Start, and the system tray in one strip.",
      },
    },
    source: "Coming From Mac or Windows; Omarchy 4.0.0 release notes",
    macOrder: 4,
    windowsOrder: 4,
  },
  {
    id: "quickshell",
    name: "One shell process",
    tease: "Bar, launcher, menus, lock, and polkit — one themed Quickshell.",
    category: "Desktop",
    omarchy:
      "Quattro rewrote the desktop in Quickshell. The bar, launcher, menus, notifications, on-screen displays, control panels, lock screen, and polkit agent now live in a single long-running process with a plugin architecture. Waybar, Walker, Mako, SwayOSD, hyprlock, hypridle, swaybg, and polkit-gnome are gone. One theme. One IPC-scriptable shell. Event-driven, so an idle desktop stops burning CPU.",
    macReach: "WindowServer + Control Center",
    windowsReach: "explorer.exe + Shell Experience",
    columns: {
      omarchy: {
        verdict: "better",
        label: "omarchy-shell",
        note: "One themed process. Plugins instead of a pile of daemons.",
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
    source: "Omarchy 4.0.0 release notes (The Quattro Release)",
    macOrder: 10,
    windowsOrder: 10,
  },
  {
    id: "bar-widgets",
    name: "A bar that actually does work",
    tease: "Workspaces, weather, media, tray, battery, mic, updates, DND…",
    category: "Desktop",
    binding: "Super + Ctrl + 1–9",
    omarchy:
      "Interactive widgets: workspaces, active window, clock (click for ISO week; right-click for 12-hour), weather, media (MPRIS), system tray, battery, keyboard layout, microphone, update indicator, plus manual-state indicators for do-not-disturb, night light, stay awake, screen recording, dictation, and reminders. Super + Ctrl + 1 through 9 opens the bar’s right-side panels by position. Optional service widgets cover Tailscale, Dropbox, Claude/Codex usage, and a Google Meet picture-in-picture.",
    macReach: "Control Center + menu extras",
    windowsReach: "Quick Settings + tray",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Widgets with panels",
        note: "Click opens a real control surface, not a dead icon.",
      },
      macos: {
        verdict: "has",
        label: "Menu extras",
        note: "Control Center plus a row of status items.",
      },
      windows: {
        verdict: "has",
        label: "Quick Settings",
        note: "Tray overflow and a flyout for Wi-Fi, audio, power.",
      },
    },
    source: "Omarchy 4.0.0 release notes — The Shell",
    macOrder: 11,
    windowsOrder: 11,
  },
  {
    id: "plugins",
    name: "Plugin ecosystem",
    tease: "Third-party widgets from git. Setup > Plugins. omarchyplugins.com.",
    category: "Desktop",
    omarchy:
      "A bar plugin system installs third-party widgets — and even whole replacement bars — straight from git with omarchy plugin add, then manages them from Setup > Plugins (add, clone, enable, disable, remove). The public catalog lives at omarchyplugins.com. 4.0.1 guards plugin-add against git transport-helper URLs and refuses transports Omarchy does not clone from.",
    macReach: "Menu bar extras / Shortcuts",
    windowsReach: "Taskbar widgets",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Git-native plugins",
        note: "Install from a repo. Enable from Setup. Harden the clone.",
      },
      macos: {
        verdict: "different",
        label: "App extras",
        note: "Menu bar apps and Shortcuts, not a first-party plugin bus.",
      },
      windows: {
        verdict: "different",
        label: "Widgets board",
        note: "A curated widgets pane, not git-installable shell plugins.",
      },
    },
    source: "Omarchy 4.0.0 / 4.0.1 release notes; omarchyplugins.com",
    macOrder: 16,
    windowsOrder: 16,
  },
  {
    id: "themes",
    name: "Twenty-two system-wide themes",
    tease: "A live carousel. Twenty-four color tokens generate nvim, VS Code, and btop.",
    category: "Desktop",
    binding: "Super + Shift + Ctrl + Space",
    omarchy:
      "Omarchy ships twenty-two system-wide themes — Style > Theme, or Super + Shift + Ctrl + Space. Each one styles the desktop, terminal, Neovim, btop, Chromium, and the whole shell: bar, menu, notifications, OSD, lock. Quattro expanded the color tokens from 8 to 24 so those apps generate from the same set; that 24 is tokens, not a theme count. New in 4.0: Solitude, Last Horizon, and Lupine. ~/.config/omarchy/shell.toml is a machine-level override merged over the active theme and watched, so a personal font or bar tweak survives a switch and re-flows live.",
    macReach: "Appearance / wallpaper",
    windowsReach: "Personalization",
    columns: {
      omarchy: {
        verdict: "better",
        label: "22 themes, one token set",
        note: "Shell, editor, and btop from 24 color tokens. Not 24 themes.",
      },
      macos: {
        verdict: "different",
        label: "Light / Dark + wallpaper",
        note: "Accent color and wallpaper. Apps theme themselves.",
      },
      windows: {
        verdict: "different",
        label: "Themes + contrast",
        note: "Wallpaper, color mode, and accent. Not your editor.",
      },
    },
    source: "Omarchy 4.0.0 release notes — Theming & Aesthetics",
    macOrder: 12,
    windowsOrder: 13,
  },
  {
    id: "backgrounds",
    name: "Background switcher",
    tease: "The same live-preview treatment for the current theme’s walls.",
    category: "Desktop",
    binding: "Super + Ctrl + Space",
    omarchy:
      "Backgrounds get the same visual switcher on Super + Ctrl + Space: flip through the current theme’s backgrounds — plus any you have added — and see exactly what you are picking. Extra images live in ~/.config/omarchy/backgrounds.",
    macReach: "System Settings > Wallpaper",
    windowsReach: "Settings > Personalization",
    columns: {
      omarchy: {
        verdict: "has",
        label: "Live preview carousel",
        note: "Per-theme backgrounds, including your own.",
      },
      macos: {
        verdict: "has",
        label: "Wallpaper settings",
        note: "Dynamic and still wallpapers in System Settings.",
      },
      windows: {
        verdict: "has",
        label: "Background settings",
        note: "Picture, slideshow, or accent fill.",
      },
    },
    source: "Omarchy 4.0.0 release notes; Hotkeys — The Omarchy Manual",
    macOrder: 13,
    windowsOrder: 14,
  },
  {
    id: "tiling",
    name: "Windows tile themselves",
    tease: "No overlapping. Open a second window and they split.",
    category: "Windows",
    binding: "Super + T",
    omarchy:
      "The biggest mindset shift: you do not drag windows around or snap them to halves. Open a window and it takes the whole screen. Open a second and they split. You never fish a window out from under another, because windows do not overlap. Super + T floats the active window when you genuinely need it. Super + J stacks them; Super + L switches a workspace between dwindle and scrolling. Give tiling a real chance first — the official manual calls it the heart of the whole thing.",
    macReach: "Overlapping windows / Stage Manager / Split View",
    windowsReach: "Overlapping windows / Snap Layouts",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Tiling by default",
        note: "Hyprland places every window. Float is opt-in.",
      },
      macos: {
        verdict: "different",
        label: "Freeform + Split View",
        note: "Tiling exists now; overlapping is still the default.",
      },
      windows: {
        verdict: "different",
        label: "Freeform + Snap",
        note: "Fancy Zones and Snap Layouts help. The pile remains.",
      },
    },
    source: "Coming From Mac or Windows; Navigation — The Omarchy Manual",
    macOrder: 5,
    windowsOrder: 5,
  },
  {
    id: "workspaces",
    name: "Workspaces you will actually use",
    tease: "Super+1/2/3/4 jumps. Super+Shift+N sends. Instant. No parade.",
    category: "Windows",
    binding: "Super + 1 / 2 / 3 / 4",
    omarchy:
      "Workspaces feel like macOS Spaces or Windows virtual desktops, except the bindings make them daily: Super + 1 through 4 jumps straight to one, Super + Shift + 1 through 4 sends the active window, Super + Shift + Alt + N sends without following. No animation delay — instant jumps. The official advice is that you might not even need multiple monitors. Super + Tab cycles.",
    macReach: "Spaces / Mission Control",
    windowsReach: "Virtual desktops / Task View",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Numbered, instant",
        note: "Jump and send from the keyboard. No animation parade.",
      },
      macos: {
        verdict: "has",
        label: "Spaces",
        note: "Mission Control and Control-arrow. Harder to send a window.",
      },
      windows: {
        verdict: "has",
        label: "Virtual desktops",
        note: "Win + Ctrl + D / arrows. Task View for the overview.",
      },
    },
    source: "Coming From Mac or Windows; Navigation; Hotkeys",
    macOrder: 6,
    windowsOrder: 6,
  },
  {
    id: "scratchpad",
    name: "A scratchpad, not another desktop",
    tease: "Super+S drops a workspace over whatever you are doing.",
    category: "Windows",
    binding: "Super + S · Super + Grave",
    omarchy:
      "A special scratchpad workspace drops down over whatever workspace you are on, like a Quake console. Toggle it with Super + S or Super + Grave. Place a window there with Super + Alt + S or Super + Shift + Grave. The official manual calls it especially good for a terminal running an agent, or controls you want without leaving the current workspace. Send a window off it with Super + Shift + 1 (or another numbered workspace).",
    macReach: "A hidden Space, or a scratch app",
    windowsReach: "A spare virtual desktop",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Overlay scratchpad",
        note: "Drops over the current workspace. Super + S.",
      },
      macos: {
        verdict: "different",
        label: "Another Space",
        note: "You can hide a Space. It is not an overlay.",
      },
      windows: {
        verdict: "different",
        label: "Another desktop",
        note: "Task View will hold a spare. It is not a drop-down.",
      },
    },
    source: "Navigation — The Omarchy Manual; Hotkeys",
    macOrder: 6.5,
    windowsOrder: 6.5,
  },
  {
    id: "close-quits",
    name: "Close means quit",
    tease: "No app limbo. Super+W or Super+Q and it is gone.",
    category: "Windows",
    binding: "Super + W · Super + Q",
    omarchy:
      "When you close a window, the app actually quits. There is no macOS limbo where the program keeps running with no windows. Super + W — or Super + Q, if that is the finger memory you arrived with — means gone. Ctrl + Alt + Delete closes every window.",
    macReach: "Cmd + W closes a window; Cmd + Q quits",
    windowsReach: "Alt + F4 closes a window",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Window = app",
        note: "Close is quit. Both W and Q do the same job.",
      },
      macos: {
        verdict: "different",
        label: "Window ≠ app",
        note: "The app often stays alive in the Dock after the last window.",
      },
      windows: {
        verdict: "has",
        label: "Close usually quits",
        note: "Most apps exit with the last window. Some stay in the tray.",
      },
    },
    source: "Coming From Mac or Windows; Hotkeys — The Omarchy Manual",
    macOrder: 7,
    windowsOrder: 18,
  },
  {
    id: "window-restore",
    name: "Save and restore a layout",
    tease: "Per app, per workspace. Super+Alt+Home to remember the widths.",
    category: "Windows",
    binding: "Super + Alt + Home · Super + Home",
    omarchy:
      "Quattro saves and restores window widths per app and workspace. Super + Alt + Home remembers the current widths; Super + Home puts them back. Fine (±25px) and coarse (±100px) resize tiers sit on the Super + Minus / Equal family. Hold Super and drag or right-drag to place and size by mouse when you want it.",
    macReach: "Remembered window positions",
    windowsReach: "Snap layouts / Fancy Zones",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Per-workspace restore",
        note: "Widths come back on the workspace you saved them on.",
      },
      macos: {
        verdict: "has",
        label: "App-remembered frames",
        note: "Many apps restore their last window. Not a workspace layout.",
      },
      windows: {
        verdict: "has",
        label: "Snap layouts",
        note: "Zones help place windows. Restore is less explicit.",
      },
    },
    source: "Omarchy 4.0.0 release notes — Controls; Hotkeys",
    macOrder: 17,
    windowsOrder: 17,
  },
  {
    id: "displays",
    name: "Clamshell, mirroring, brightness",
    tease: "Laptop lid, external DDC/CI, XPS speaker tunings.",
    category: "Windows",
    binding: "Super + Ctrl + Delete",
    omarchy:
      "Quattro adds much-improved clamshell handling: idempotent scale recovery, an internal-display toggle (Super + Ctrl + Delete), and display mirroring (Super + Ctrl + Alt + Delete). Brightness keys and the OSD drive the focused external display over DDC/CI; laptop panels keep using the kernel backlight. 2026 XPS 14 and 16 machines get PipeWire speaker tunings matched by DMI string.",
    macReach: "Clamshell + brightness keys",
    windowsReach: "Project / display settings",
    columns: {
      omarchy: {
        verdict: "has",
        label: "Clamshell + DDC/CI",
        note: "Mirroring, lid handling, and external brightness from the keys.",
      },
      macos: {
        verdict: "has",
        label: "Clamshell + Apple displays",
        note: "Excellent on Apple hardware. Third-party brightness varies.",
      },
      windows: {
        verdict: "has",
        label: "Project + vendor OSD",
        note: "Win + P for projection. External brightness is hit-or-miss.",
      },
    },
    source: "Omarchy 4.0.0 release notes — Controls / System",
    macOrder: 22,
    windowsOrder: 20,
  },
  {
    id: "clipboard",
    name: "Copy and paste everywhere",
    tease: "Super+C/X/V in the terminal too. History holds images.",
    category: "Capture",
    binding: "Super + C · Super + X · Super + V · Super + Ctrl + V",
    omarchy:
      "On the Mac, Cmd + C worked everywhere. On Windows, Ctrl + C worked everywhere except the terminal, where it kills the program. Omarchy gives you Super + C, Super + X, and Super + V, and they work everywhere — including the terminal. Super + Ctrl + V is clipboard history with image previews and sensitive-content exclusion. 4.0.1 also decodes UTF-16 clipboard text.",
    macReach: "Cmd + C / Universal Clipboard",
    windowsReach: "Ctrl + C · Win + V",
    columns: {
      omarchy: {
        verdict: "better",
        label: "One reflex, including the shell",
        note: "History with images. Sensitive items stay out.",
      },
      macos: {
        verdict: "has",
        label: "Cmd + C everywhere",
        note: "Universal Clipboard across Apple devices. No first-party history pane.",
      },
      windows: {
        verdict: "has",
        label: "Win + V history",
        note: "History is excellent. The terminal still wants a different reflex.",
      },
    },
    source: "Coming From Mac or Windows; Hotkeys; Omarchy 4.0.0 / 4.0.1",
    macOrder: 8,
    windowsOrder: 7,
  },
  {
    id: "setup",
    name: "Setup instead of System Settings",
    tease: "Plain config files. Version-controllable. Auto-restart when you quit.",
    category: "Settings",
    omarchy:
      "System Settings and Control Panel become Setup in the Omarchy menu. This is not a full Settings GUI. Quattro added real control panels for audio, Bluetooth, network, display, and power. Plenty of the rest still lives in text files — Hyprland in Lua, the menu in JSONC, the shell in toml. Setup drops you into the right file and restarts whatever needs restarting when you are done. Every tweak can be seen, copied to the next machine, and put in version control.",
    macReach: "System Settings",
    windowsReach: "Settings / Control Panel",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Panels + config files",
        note: "Five daily panels. The rest is a file Setup will open for you.",
      },
      macos: {
        verdict: "has",
        label: "System Settings",
        note: "A deep GUI. Harder to copy a machine’s soul to the next one.",
      },
      windows: {
        verdict: "has",
        label: "Settings app",
        note: "Plus a lingering Control Panel. Group Policy for the rest.",
      },
    },
    source: "Coming From Mac or Windows; Dotfiles — The Omarchy Manual",
    macOrder: 9,
    windowsOrder: 8,
  },
  {
    id: "panels",
    name: "Native control panels",
    tease: "Audio, Bluetooth, Network, Display, Power — keyboard-first.",
    category: "Settings",
    binding: "Super + Ctrl + A / B / W / D / P",
    omarchy:
      "Bar widgets open real panels. Audio (Super + Ctrl + A) switches output and input without killing playback. Bluetooth (B) pairs, connects, and forgets per device. Network (W) shows live throughput, ping, packet loss, a one-click speed test, DNS provider selection, Wi-Fi QR sharing, band toggle, and 802.1X. Display (D) includes a notched text-size slider, 9–20px, that moves the shell font, GTK’s text-scaling-factor, and the terminal in lockstep. Power (P) remembers the profile you picked on AC versus battery.",
    macReach: "Control Center / System Settings",
    windowsReach: "Quick Settings",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Five keyboard panels",
        note: "Ping, speed test, Wi-Fi QR, 802.1X, and one text-size knob.",
      },
      macos: {
        verdict: "has",
        label: "Control Center",
        note: "Fast toggles. Deeper work still opens System Settings.",
      },
      windows: {
        verdict: "has",
        label: "Quick Settings",
        note: "Wi-Fi, Bluetooth, audio. Speed test and QR live elsewhere.",
      },
    },
    source: "Omarchy 4.0.0 release notes — Control panels / Networking",
    macOrder: 14,
    windowsOrder: 9,
  },
  {
    id: "one-update",
    name: "One Update",
    tease: "OS and every package. Snapshot first. No nagging per-app updaters.",
    category: "Settings",
    omarchy:
      "Updates come through one command — Update > Omarchy — that updates Omarchy itself and every package on the system, taking a Snapper snapshot first. An ALPM guard routes system updates through omarchy update. It prunes the package cache before the snapshot so the space is actually reclaimed, warns when disk is low, and reports when a snapshot it expected never appeared. No per-app updaters nagging at random. Software comes from a package manager, not downloaded installers.",
    macReach: "System Settings > Software Update + App Store + each app",
    windowsReach: "Windows Update + Store + each installer",
    columns: {
      omarchy: {
        verdict: "better",
        label: "One path, snapshot first",
        note: "The OS and every package. Then you reboot on your terms.",
      },
      macos: {
        verdict: "different",
        label: "Several updaters",
        note: "System Update, the App Store, and a dozen in-app nags.",
      },
      windows: {
        verdict: "different",
        label: "Windows Update + more",
        note: "The Store, vendor suites, and the apps that update themselves.",
      },
    },
    source: "Coming From Mac or Windows; Omarchy 4.0.0 — System & Upgrade",
    macOrder: 15,
    windowsOrder: 12,
  },
  {
    id: "install",
    name: "Install instead of an App Store",
    tease: "A menu, or omarchy pkg add. No downloaded .dmg or Setup.exe.",
    category: "Apps",
    omarchy:
      "The App Store and the habit of downloading an installer become Install in the menu, or omarchy pkg add. Packages, not random binaries. Gaming, AI, development tools, and Windows itself are menu entries. Remove undoes the same path.",
    macReach: "App Store / downloaded .dmg",
    windowsReach: "Microsoft Store / Setup.exe",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Install menu + pkg",
        note: "One place to add software. One place to take it off.",
      },
      macos: {
        verdict: "has",
        label: "App Store + disk images",
        note: "Two cultures: signed store apps and whatever you drag to /Applications.",
      },
      windows: {
        verdict: "has",
        label: "Store + installers",
        note: "The Store exists. Most software still arrives as a Setup.exe.",
      },
    },
    source: "Coming From Mac or Windows — The Omarchy Manual",
    macOrder: 18,
    windowsOrder: 15,
  },
  {
    id: "localsend",
    name: "AirDrop becomes LocalSend",
    tease: "Share files from the desktop chooser. Super+Ctrl+S.",
    category: "Apps",
    binding: "Super + Ctrl + S",
    omarchy:
      "AirDrop’s job is LocalSend, opened from Super + Ctrl + S. Quattro shares files and folders through the desktop file chooser instead of an fzf pick over a find of the whole home directory. 4.0.1 lets a received Taildrop file wait to be answered.",
    macReach: "AirDrop",
    windowsReach: "Nearby sharing / a USB stick",
    columns: {
      omarchy: {
        verdict: "has",
        label: "LocalSend + Taildrop",
        note: "Cross-platform, from the file chooser. Super + Ctrl + S.",
      },
      macos: {
        verdict: "better",
        label: "AirDrop",
        note: "Unbeatable on Apple hardware. Apple-only.",
      },
      windows: {
        verdict: "different",
        label: "Nearby sharing",
        note: "Works with other Windows PCs. Phones are a different story.",
      },
    },
    source: "Coming From Mac or Windows; Omarchy 4.0.0 / 4.0.1",
    macOrder: 19,
    windowsOrder: 22,
  },
  {
    id: "default-apps",
    name: "Omawrite, Omacut, Omacalc, Foot",
    tease: "A writing app, a trimmer, a calculator, a lighter terminal.",
    category: "Apps",
    binding: "Super + Shift + W · Super + Ctrl + Q · Super + Return",
    omarchy:
      "Omawrite is the default writing tool — a dead-simple Markdown app that autosaves, bound to Super + Shift + W. Omacut trims video on a filmstrip with ffmpeg underneath. Omacalc replaces GNOME Calculator on Super + Ctrl + Q. The default terminal is Foot. ChatGPT installs as a real desktop app under Install > AI (Super + Shift + A once it is there). Moonlight ships for Sunshine game and desktop streaming.",
    macReach: "TextEdit / QuickTime / Calculator / Terminal",
    windowsReach: "Notepad / Clipchamp / Calculator / Windows Terminal",
    columns: {
      omarchy: {
        verdict: "has",
        label: "Small defaults that stay out of the way",
        note: "Markdown, trim, calc, Foot. ChatGPT is a real app, not a tab.",
      },
      macos: {
        verdict: "has",
        label: "Apple defaults",
        note: "Pages, QuickTime, Calculator, Terminal — plus a thousand others.",
      },
      windows: {
        verdict: "has",
        label: "Microsoft defaults",
        note: "Notepad, Clipchamp, Calculator, Windows Terminal.",
      },
    },
    source: "Omarchy 4.0.0 release notes — Apps & Defaults; Hotkeys",
    macOrder: 23,
    windowsOrder: 23,
  },
  {
    id: "agent",
    name: "A default coding agent",
    tease: "Claude, Codex, OpenCode, Pi, Gemini, Grok, Copilot, Crush.",
    category: "Dev/AI",
    binding: "Super + Shift + Ctrl + A",
    omarchy:
      "Pick Claude Code, Codex, OpenCode, Pi, Oh My Pi, Gemini, Grok, Copilot, or Crush under Setup > Defaults > Agent. It lazy-installs on first use, opens as its own org.omarchy.agent app, and starts in ~/Work when summoned from home so trust actually sticks. Super + Shift + Ctrl + A — or the a alias in a terminal. A bar widget watches Claude and Codex usage. When a process crashes, a toast can brief the agent on the core dump. 4.0.1 launches Claude and Codex with auto-review instead of a full bypass.",
    macReach: "Whatever you installed",
    windowsReach: "Whatever you installed",
    columns: {
      omarchy: {
        verdict: "better",
        label: "First-class agent slot",
        note: "One binding. Crash diagnosis. Auto-review for risky actions.",
      },
      macos: {
        verdict: "different",
        label: "Bring your own",
        note: "Excellent agents exist. The OS does not pick one for you.",
      },
      windows: {
        verdict: "different",
        label: "Copilot in the shell",
        note: "A Microsoft Copilot is nearby. It is not your repo agent.",
      },
    },
    source: "Omarchy 4.0.0 / 4.0.1 release notes",
    macOrder: 20,
    windowsOrder: 19,
  },
  {
    id: "mise",
    name: "Mise for every language",
    tease: "Install > Development: Rails, Node, Go, Rust, Python, and the rest.",
    category: "Dev/AI",
    omarchy:
      "Install > Development in the Omarchy menu sets up Ruby on Rails, Node.js, Bun, Deno, Laravel, Symfony, Go, Rust, Python, Java, Elixir with Phoenix, .NET, OCaml, Zig, Clojure, and Scala. The majority of those environments are managed by Mise — multiple versions of a language on one machine, like rbenv or virtualenv, across the set. mise use -g ruby installs Ruby and sets the global default; mise i in a project with a .ruby-version file is enough.",
    macReach: "Homebrew + asdf / mise / nvm",
    windowsReach: "winget + version managers",
    columns: {
      omarchy: {
        verdict: "better",
        label: "A language menu",
        note: "Rails, Node, Go, Rust, Python, and more — Mise underneath.",
      },
      macos: {
        verdict: "has",
        label: "Bring your own toolchain",
        note: "Homebrew will get you there. You assemble it.",
      },
      windows: {
        verdict: "has",
        label: "Bring your own toolchain",
        note: "winget, WSL, or an installer per language.",
      },
    },
    source: "Development Tools — The Omarchy Manual",
    macOrder: 20.5,
    windowsOrder: 19.5,
  },
  {
    id: "windows-vm",
    name: "Windows, when you still need it",
    tease: "Install > Windows. A Docker VM over RDP. No GPU passthrough.",
    category: "Apps",
    omarchy:
      "Omarchy can run Windows 11 Pro through a Docker VM from Install > Windows — the escape hatch for Office and the holdouts. It needs KVM and disk — 64GB is the sensible floor — then connects over RDP with sound, microphone, a shared clipboard, and ~/Windows as the only shared folder. Close the RDP window and the VM shuts down. There is no GPU passthrough. The official manual says it outright: not suitable for gaming or video editing. You bring your own license; omarchy windows key prints an OEM key from firmware if this machine shipped with Windows.",
    macReach: "Parallels / VMware / a second PC",
    windowsReach: "You are already here",
    columns: {
      omarchy: {
        verdict: "has",
        label: "Install > Windows",
        note: "Office and the holdouts. Not Premiere. Not Fortnite.",
      },
      macos: {
        verdict: "different",
        label: "A paid VM, or Boot Camp leftover",
        note: "Parallels or a second PC. Stay on Windows if the app is the point.",
      },
      windows: {
        verdict: "better",
        label: "Native Windows",
        note: "The apps that only run here, run here.",
      },
    },
    source: "Windows VM — The Omarchy Manual; Omarchy 4.0.1",
    macOrder: 28,
    windowsOrder: 21,
  },
  {
    id: "snapshots",
    name: "Snapshots on every update",
    tease: "Root filesystem only. Not /home. Taken before the upgrade.",
    category: "Security",
    omarchy:
      "Time Machine’s job for the system is automatic Snapper snapshots on every update. Update > Omarchy takes the snapshot first. Restore from the Limine boot loader (or omarchy-snapshot restore). Official docs are explicit: this restores the root filesystem, not /home. It reverts a broken system update. It does not recover lost personal files, and ~/.config stays as-is. If a snapshot the update expected never appeared, the update says so instead of claiming one.",
    macReach: "Time Machine",
    windowsReach: "File History / Restore points / OneDrive",
    columns: {
      omarchy: {
        verdict: "has",
        label: "Root snapshots, not /home",
        note: "System rollback. Your files in /home are not in the snapshot.",
      },
      macos: {
        verdict: "has",
        label: "Time Machine",
        note: "The gold standard for user data. System updates are a different path.",
      },
      windows: {
        verdict: "different",
        label: "Restore points + File History",
        note: "Useful, and easy to discover after you needed them.",
      },
    },
    source: "Coming From Mac or Windows; Omarchy 4.0.0 — System & Upgrade",
    macOrder: 21,
    windowsOrder: 24,
  },
  {
    id: "lock-auth",
    name: "Fingerprint, FIDO2, LUKS",
    tease: "PAM on lock, polkit, and sudo. Not Hello. Not Touch ID.",
    category: "Security",
    binding: "Super + Ctrl + L",
    omarchy:
      "The lock screen is the shell: password and fingerprint PAM. On first run, if a reader exists, Omarchy invites you to enroll a finger. Fingerprint offers on the lock screen, polkit, and sudo are gated by lid state. That is useful. It is not Windows Hello polish and it is not Touch ID. FIDO2 setup is in the tree; 4.0.1 stopped it staging an authfile at a predictable /tmp path. Privilege escalation uses pkexec/polkit with a themed prompt that shows exactly what you are authorizing.",
    macReach: "Touch ID / FileVault / Passkeys",
    windowsReach: "Windows Hello / BitLocker / Passkeys",
    columns: {
      omarchy: {
        verdict: "has",
        label: "PAM + FIDO2",
        note: "Fingerprint when a reader exists. The polish is not Hello or Touch ID.",
      },
      macos: {
        verdict: "better",
        label: "Touch ID + FileVault",
        note: "The smoothest biometric story in the industry.",
      },
      windows: {
        verdict: "better",
        label: "Hello + BitLocker",
        note: "Hello on supported hardware is the bar Omarchy is not claiming.",
      },
    },
    source: "Omarchy 4.0.0 / 4.0.1; Dual Boot Install — The Omarchy Manual",
    macOrder: 24,
    windowsOrder: 25,
  },
  {
    id: "gift-reset",
    name: "Install it for someone else. Reset it.",
    tease: "Ctrl+C on the first installer screen. Setup > Reset Computer later.",
    category: "Security",
    omarchy:
      "If you are setting up a machine for someone else, hit Ctrl + C on the first installer screen (keyboard selection). Omarchy installs now; keyboard, username, and password wait for the new owner’s first boot. The drive stays encrypted by default; the password they pick becomes the encryption password too. A machine you have already used can be handed over without a reinstall: Setup > Reset Computer, type reset, reboot. That restores the installer baseline snapshot, wipes every user account and everything in /home, and returns the first-boot wizard. Dual-boot next to Windows is a separate path (free-space install, BitLocker off). Intel Macs are not that path — the Mac install wipes macOS and does not dual-boot.",
    macReach: "Erase All Content and Settings",
    windowsReach: "Reset this PC / dual-boot",
    columns: {
      omarchy: {
        verdict: "has",
        label: "Gift install + factory reset",
        note: "Deferred first-boot, or Reset Computer. Dual-boot is Windows-only.",
      },
      macos: {
        verdict: "has",
        label: "Erase All Content",
        note: "A polished reset. Dual-boot with Linux is not an Apple feature.",
      },
      windows: {
        verdict: "has",
        label: "Reset this PC",
        note: "Dual-boot is a long Windows tradition. BitLocker is the catch.",
      },
    },
    source: "Omarchy 4.0.0; Dual Boot Install; Mac support — The Omarchy Manual",
    macOrder: 29,
    windowsOrder: 26,
  },
  {
    id: "security-401",
    name: "A security team, and a fast-follow",
    tease: "4.0.1: auto-review, no auto-root Docker, hardened themes.",
    category: "Security",
    omarchy:
      "4.0.1 is a security fast-follow validated by the new Omarchy Security team. Claude and Codex launch with auto-review instead of a full bypass. Docker no longer puts the user in the docker group — that group is passwordless root — so the daemon asks for authorization; Setup > Security > Sudoless Docker is the opt-in. An installed theme can no longer run code. Notification click actions run as safe argv. Plugin-add and git transports are guarded. If you find a problem, the disclosure path is omarchy.org/security.",
    macReach: "Rapid Security Responses",
    windowsReach: "Patch Tuesday",
    columns: {
      omarchy: {
        verdict: "has",
        label: "4.0.1 hardening",
        note: "Agents, Docker, themes, plugins. A public disclosure page.",
      },
      macos: {
        verdict: "has",
        label: "RSR + platform hardening",
        note: "A mature security organization. Locked-down by design.",
      },
      windows: {
        verdict: "has",
        label: "Patch Tuesday",
        note: "The most-attacked desktop. Also the most-patched.",
      },
    },
    source: "Omarchy 4.0.1 release notes; Development Tools — The Omarchy Manual",
    macOrder: 25,
    windowsOrder: 27,
  },
  {
    id: "defaults-hardening",
    name: "LUKS on. Inbound closed. Docker not root.",
    tease: "Default encryption, a default firewall, and 4.0.1’s Docker group change.",
    category: "Security",
    omarchy:
      "Installs default to full-disk LUKS. The official security chapter calls encryption mandatory for any machine that can be lost or stolen; Ctrl + C on disk formatting is the explicit opt-out. The inbound firewall is on by default: all incoming traffic blocked except port 53317 for LocalSend. SSH stays off until Setup > Security > SSHD. Docker is locked down with ufw-docker so containers are not accidentally exposed. As of 4.0.1 your user is not in the docker group — that group is passwordless root — so docker on the command line uses sudo, and the Docker TUI plus the Windows VM ask for authorization. Setup > Security > Sudoless Docker is the opt-in if you want the old convenience and accept the tradeoff. Bluetooth keyboards cannot type the LUKS password at boot; use a wired or 2.4 GHz keyboard.",
    macReach: "FileVault + macOS firewall",
    windowsReach: "BitLocker + Windows Firewall",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Encrypted, quiet, not auto-root",
        note: "LUKS default. Inbound closed. Docker group is opt-in as of 4.0.1.",
      },
      macos: {
        verdict: "has",
        label: "FileVault + firewall",
        note: "FileVault and a firewall you can flip. No BIOS trip required.",
      },
      windows: {
        verdict: "has",
        label: "BitLocker + firewall",
        note: "On many OEM machines. Dual-boot needs BitLocker off.",
      },
    },
    source: "Security; Getting Started; Development Tools; Omarchy 4.0.1",
    macOrder: 24.5,
    windowsOrder: 25.5,
  },
  {
    id: "install-gate",
    name: "Secure Boot and TPM must be off",
    tease: "Required to install. Official ISO is x86-64 only.",
    category: "Security",
    omarchy:
      "You must turn off Secure Boot and/or TPM in the BIOS. Getting Started is blunt: you have to turn these off to install Omarchy. The official ISO is x86-64 only. There is no official Apple Silicon image. A Bluetooth keyboard cannot type the LUKS password at the boot prompt — same as it cannot enter the BIOS — so bring a wired or 2.4 GHz keyboard. On Intel Macs the install wipes the drive; macOS will not dual-boot.",
    macReach: "Secure Boot / T2 / Apple silicon",
    windowsReach: "Secure Boot + TPM 2.0 (required for 11)",
    columns: {
      omarchy: {
        verdict: "different",
        label: "Turn the gates off",
        note: "Secure Boot and/or TPM off. x86-64 ISO. Wired keyboard for LUKS.",
      },
      macos: {
        verdict: "has",
        label: "Sealed by default",
        note: "Secure Boot and FileVault are the product. No BIOS trip.",
      },
      windows: {
        verdict: "has",
        label: "Secure Boot + TPM 2.0",
        note: "Windows 11 25H2 expects them on. Omarchy needs them off.",
      },
    },
    source: "Getting Started — The Omarchy Manual; Mac support",
    macOrder: 31.5,
    windowsOrder: 26.5,
  },
  {
    id: "capture",
    name: "Print Screen does the job",
    tease: "Screenshots, recording, color picker. Keyboard-driven region.",
    category: "Capture",
    binding: "Print Screen",
    omarchy:
      "Cmd + Shift + 4 and Win + Shift + S become Print Screen. Super + Ctrl + C opens the capture menu on keyboards without the key. Alt + Print Screen records; Super + Print Screen is a color picker. The region picker is keyboard-first: Return captures the highlighted window, Ctrl + Return the display, Tab and arrows move the selection. Recordings get a live webcam overlay, sized with Super + Alt + [ / ].",
    macReach: "Cmd + Shift + 4 / 5",
    windowsReach: "Win + Shift + S",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Screenshot + record",
        note: "One family of keys. Region picker works from the keyboard.",
      },
      macos: {
        verdict: "has",
        label: "Screenshot.app",
        note: "The screenshot UX everyone copies. Recording lives next to it.",
      },
      windows: {
        verdict: "has",
        label: "Snipping Tool",
        note: "Win + Shift + S is muscle memory. Recording is a later add-on.",
      },
    },
    source: "Coming From Mac or Windows; Hotkeys; Omarchy 4.0.0 — Capture",
    macOrder: 26,
    windowsOrder: 28,
  },
  {
    id: "ocr",
    name: "OCR to the clipboard",
    tease: "Super+Ctrl+Print extracts text from a region.",
    category: "Capture",
    binding: "Super + Ctrl + Print Screen",
    omarchy:
      "Super + Ctrl + Print Screen extracts text from the selection and puts it on the clipboard. It sits in the same capture family as Print Screen and the color picker. Super + Ctrl + C opens the capture menu on keyboards without a Print Screen key.",
    macReach: "Live Text / Screenshot markup",
    windowsReach: "Snipping Tool text actions",
    columns: {
      omarchy: {
        verdict: "has",
        label: "Region to text",
        note: "One binding. Text lands on the clipboard.",
      },
      macos: {
        verdict: "has",
        label: "Live Text",
        note: "Select text in images and screenshots.",
      },
      windows: {
        verdict: "has",
        label: "Text actions",
        note: "Snipping Tool can copy text from a capture.",
      },
    },
    source: "Hotkeys — The Omarchy Manual (Capture)",
    macOrder: 26.5,
    windowsOrder: 28.5,
  },
  {
    id: "qr-capture",
    name: "QR capture never hits disk",
    tease: "otpauth:// decodes to the clipboard and stays out of history.",
    category: "Capture",
    omarchy:
      "Select a region and a QR code inside it decodes straight to the clipboard — so an otpauth:// setup code on screen no longer needs a phone. The decoded value never touches disk and is marked sensitive, so clipboard history skips it. Super + Ctrl + E is the native emoji picker, a separate tool.",
    macReach: "Camera / Continuity Camera",
    windowsReach: "Phone Link / another app",
    columns: {
      omarchy: {
        verdict: "better",
        label: "QR stays in RAM",
        note: "Never written to disk. History skips it.",
      },
      macos: {
        verdict: "has",
        label: "Camera scan",
        note: "Scan with the phone you already carry.",
      },
      windows: {
        verdict: "different",
        label: "Another app",
        note: "QR usually wants a camera app or an add-on.",
      },
    },
    source: "Omarchy 4.0.0 release notes — Capture",
    macOrder: 27,
    windowsOrder: 29,
  },
  {
    id: "notifications",
    name: "Notification history, not a center",
    tease: "Replay the last ten, including the ones DND silenced.",
    category: "Capture",
    binding: "Super + Shift + Alt + ,",
    omarchy:
      "Notification Center becomes notification history on Super + Shift + Alt + ,. It brings back the last ten notifications exactly as they were shown, including the ones do-not-disturb silenced. Popups survive shell restarts — the kind every update performs — so critical alerts make it across. Right-click dismisses a popup. Super + , dismisses the latest; Super + Shift + , dismisses all; Super + Ctrl + , toggles silencing.",
    macReach: "Notification Center",
    windowsReach: "Notification Center",
    columns: {
      omarchy: {
        verdict: "has",
        label: "Replayable history",
        note: "Last ten, including silenced. Survive a shell restart.",
      },
      macos: {
        verdict: "has",
        label: "Notification Center",
        note: "The original. Grouped, Focus-aware, and on the lock screen.",
      },
      windows: {
        verdict: "has",
        label: "Notification Center",
        note: "Calendar and toasts in one flyout.",
      },
    },
    source: "Coming From Mac or Windows; Hotkeys; Omarchy 4.0.0 — The Shell",
    macOrder: 30,
    windowsOrder: 30,
  },
  {
    id: "intel-mac",
    name: "Runs on Intel Macs",
    tease: "Command is Super. The install wipes macOS. Official ISO is x86-64 only.",
    category: "Settings",
    omarchy:
      "Omarchy has built-in support for Intel Macs. The installer applies Broadcom Wi-Fi, SPI keyboard, and NVMe suspend fixes. T2 machines get a patched linux-t2 kernel, T2 audio, Broadcom firmware, and t2fanrd. The Command key is Super — no remap. A 2019 MacBook Pro showed 36% performance gains in Omarchy’s own simple test. There is no official Apple Silicon / M-series install. The official ISO is x86-64 only. On Mac hardware Omarchy is the only OS: the drive is wiped and macOS will not dual-boot. Internet Recovery can restore macOS later if you change your mind.",
    macReach: "This is a Mac",
    windowsReach: "Boot Camp, historically",
    columns: {
      omarchy: {
        verdict: "has",
        label: "Intel Macs, wipe-install",
        note: "x86-64 ISO. No official M-series. No dual-boot with macOS.",
      },
      macos: {
        verdict: "better",
        label: "The native OS",
        note: "Intel and Apple Silicon, with Continuity. Stay if you need that.",
      },
      windows: {
        verdict: "no",
        label: "Not a Mac OS",
        note: "Boot Camp is gone. A VM is the remaining path.",
      },
    },
    source: "Coming From Mac or Windows; Mac support — The Omarchy Manual",
    macOrder: 31,
    windowsOrder: 35,
  },
  {
    id: "gaming",
    name: "Steam, Proton, Moonlight",
    tease: "Tens of thousands of games. Not a native Xbox Game Pass client.",
    category: "Apps",
    omarchy:
      "Install > Gaming covers Steam (Proton), RetroArch, Battle.net, Lutris, Heroic, Minecraft, Xbox controllers, plus Xbox Cloud Gaming and GeForce NOW as web apps. Moonlight ships preinstalled for streaming from a Windows PC running Sunshine — the official recommendation for competitive shooters. You can host Sunshine on Omarchy too. This is Proton, streaming, and cloud. It is not a native Xbox Game Pass desktop client; the cloud web app is the Game Pass path.",
    macReach: "Apple Arcade / CrossOver / a second machine",
    windowsReach: "Native Game Pass + every store",
    columns: {
      omarchy: {
        verdict: "different",
        label: "Proton + Moonlight + cloud",
        note: "Steam Deck’s lineage. Cloud for the anti-cheat holdouts.",
      },
      macos: {
        verdict: "different",
        label: "A smaller catalog",
        note: "Apple Arcade and a thin AAA list. Many ports never arrive.",
      },
      windows: {
        verdict: "better",
        label: "The default gaming OS",
        note: "Native Game Pass, anti-cheat, and every launcher.",
      },
    },
    source: "Gaming — The Omarchy Manual; Omarchy 4.0.0 (Moonlight default)",
    macOrder: 32,
    windowsOrder: 31,
  },
  {
    id: "apple-services",
    name: "No iMessage, FaceTime, iCloud, AirDrop",
    tease: "Continuity stays on Apple. LocalSend is the file-share stand-in.",
    category: "Apps",
    binding: "Super + Shift + G",
    omarchy:
      "Omarchy does not ship iMessage, FaceTime, iCloud, or Continuity. Those are Apple services and they stay there. What it does ship, as on-demand installs, includes Signal (Super + Shift + G) and WhatsApp (Super + Shift + Alt + G). LocalSend covers the AirDrop-shaped job. If those Apple threads are the reason you stay, that is a fair reason.",
    macReach: "iMessage / FaceTime / iCloud / Continuity",
    windowsReach: "Phone Link / Your Phone",
    columns: {
      omarchy: {
        verdict: "no",
        label: "Not Apple’s garden",
        note: "Signal and WhatsApp install. iMessage does not.",
      },
      macos: {
        verdict: "better",
        label: "The only full set",
        note: "iMessage, FaceTime, iCloud, Handoff, Universal Clipboard.",
      },
      windows: {
        verdict: "no",
        label: "Not Apple’s garden either",
        note: "Phone Link can surface some iPhone features. It is not iMessage.",
      },
    },
    source: "Honest gap; Hotkeys (Signal / WhatsApp); Coming From Mac or Windows",
    macOrder: 33,
    windowsOrder: 34,
  },
  {
    id: "muscle-memory",
    name: "Give it two weeks",
    tease: "The official advice. Super+K is the only hotkey you must memorize.",
    category: "Desktop",
    binding: "Super + K",
    omarchy:
      "The official Coming From Mac or Windows chapter ends here: give it two weeks. The instincts transfer faster than you think. Skim the hotkeys chapter once, and whenever you blank, hit Super + K — it shows all of them. Tmux bindings are Super + Alt + K; Herdr is Super + Ctrl + K. The first login greets you with a toast that opens the keybindings menu. Everything happens from the keyboard. That is a real curve, not a slogan.",
    macReach: "Years of Cmd",
    windowsReach: "Years of Win and Ctrl",
    columns: {
      omarchy: {
        verdict: "different",
        label: "Keyboard-first",
        note: "Two weeks. Super + K is the safety net.",
      },
      macos: {
        verdict: "has",
        label: "Mouse-comfortable",
        note: "You can live in the Dock and never learn a binding.",
      },
      windows: {
        verdict: "has",
        label: "Mouse-comfortable",
        note: "Taskbar and Settings will wait for the pointer.",
      },
    },
    source: "Coming From Mac or Windows; Navigation; Hotkeys; Omarchy 4.0.0",
    macOrder: 34,
    windowsOrder: 32,
  },
];

export const gaps = [
  {
    title: "Secure Boot and TPM must be off",
    body: "Getting Started is not optional on this point: turn off Secure Boot and/or TPM in the BIOS or the ISO will not install. Windows 11 25H2 wants those on. Omarchy needs them off. The official ISO is x86-64 only.",
  },
  {
    title: "No Continuity, iMessage, or AirDrop",
    body: "Those stay in Apple’s garden. LocalSend (Super + Ctrl + S) is the file-share stand-in. Signal and WhatsApp install on demand. If iMessage is the reason you stay, that is a fair reason.",
  },
  {
    title: "Keyboard-first, including first boot",
    body: "The official navigation chapter: everything happens from the keyboard. First boot and the gift-install wizard still ask their questions at a keyboard. Setup is control panels plus config files — not a full Settings app. Super + K is the safety net; give it two weeks.",
  },
  {
    title: "Mixed HiDPI is weaker than macOS",
    body: "macOS Tahoe still wins on mixed-scale displays. Omarchy has a Display panel and a 9–20px text-size slider across shell, GTK, and terminal. Mixed HiDPI is a real gap, not a rounding error.",
  },
  {
    title: "Office, Adobe, native Game Pass",
    body: "Install > Windows is a Windows 11 Pro Docker VM over RDP with no GPU passthrough — Office and the holdouts, not Premiere, not Fortnite. Gaming is Steam/Proton, Moonlight, and cloud. It is not a native Xbox Game Pass client.",
  },
  {
    title: "Hello and Touch ID polish",
    body: "Fingerprint PAM is there when a reader exists — lock, polkit, sudo. That is not Windows Hello and it is not Touch ID. Bluetooth keyboards cannot type the LUKS password at boot; bring a wired or 2.4 GHz board. Snapshots restore root, not /home.",
  },
] as const;

export function filterFeatures(
  list: Feature[],
  category: Category | "All",
  comingFrom: ComingFrom,
): Feature[] {
  const next =
    category === "All" ? list : list.filter((feature) => feature.category === category);

  const sorted = [...next].sort((a, b) => {
    if (comingFrom === "mac") return a.macOrder - b.macOrder;
    if (comingFrom === "windows") return a.windowsOrder - b.windowsOrder;
    return list.indexOf(a) - list.indexOf(b);
  });

  return sorted;
}

import type { Category, ComingFrom, Feature, Verdict } from "./types";

export const CATEGORIES: Category[] = [
  "Future desktop",
  "Keyboard OS",
  "Agent-first OS",
  "Builder OS",
  "Own the machine",
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
  {
    id: "plugins",
    name: "Plugin-shaped shell",
    tease: "Install a widget — or a whole bar — from git. Setup > Plugins.",
    category: "Future desktop",
    omarchy:
      "A bar plugin system installs third-party widgets and whole replacement bars from git with omarchy plugin add, then manages them from Setup > Plugins (add, clone, enable, disable, remove). The public catalog is omarchyplugins.com. 4.0.1 guards plugin-add against git transport-helper URLs and refuses transports Omarchy does not clone from.",
    macReach: "Menu bar extras / Shortcuts",
    windowsReach: "Taskbar widgets",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Git-native plugins",
        note: "Clone a repo. Enable it. The clone path is hardened.",
      },
      macos: {
        verdict: "different",
        label: "App extras",
        note: "Menu bar apps and Shortcuts, not a first-party plugin bus.",
      },
      windows: {
        verdict: "different",
        label: "Widgets board",
        note: "A curated pane, not git-installable shell plugins.",
      },
    },
    source: "Omarchy 4.0.0 / 4.0.1 release notes; omarchyplugins.com",
    macOrder: 2,
    windowsOrder: 2,
  },
  {
    id: "themes",
    name: "22 themes. One switch.",
    tease: "Terminal, Neovim, Chromium, lock — restyled together. Backgrounds travel with the theme.",
    category: "Future desktop",
    binding: "Super + Shift + Ctrl + Space",
    omarchy:
      "Omarchy ships twenty-two system-wide themes — Style > Theme, or Super + Shift + Ctrl + Space. Each one styles the desktop, terminal, Neovim, btop, Chromium, and the whole shell: bar, menu, notifications, OSD, lock. Quattro expanded color tokens from 8 to 24 so those apps generate from the same set; that 24 is tokens, not a theme count. New in 4.0: Solitude, Last Horizon, and Lupine. Super + Ctrl + Space flips the current theme’s backgrounds (plus any you added under ~/.config/omarchy/backgrounds). ~/.config/omarchy/shell.toml is a machine-level override merged over the active theme and watched, so a personal font or bar tweak survives a switch.",
    macReach: "Appearance / wallpaper",
    windowsReach: "Personalization",
    columns: {
      omarchy: {
        verdict: "better",
        label: "22 themes, one token set",
        note: "Shell, editor, browser, lock. 24 tokens — not 24 themes.",
      },
      macos: {
        verdict: "different",
        label: "Light / Dark + wallpaper",
        note: "Accent and wallpaper. Apps theme themselves.",
      },
      windows: {
        verdict: "different",
        label: "Themes + contrast",
        note: "Wallpaper, color mode, accent. Not your editor.",
      },
    },
    source: "Omarchy 4.0.0 release notes — Theming & Aesthetics; Hotkeys",
    macOrder: 3,
    windowsOrder: 3,
  },
  {
    id: "super-key",
    name: "Super runs the machine",
    tease: "Cmd and Win land on Super. No remap. Super + K is the only binding you must memorize.",
    category: "Keyboard OS",
    binding: "Super · Super + K",
    omarchy:
      "Every instinct built around Cmd or the Windows key lands on Super. On a PC keyboard that is the Windows key. On an Intel Mac, Linux treats the Command key as Super, so the thumb stays where it always was. Omarchy does not remap the keyboard. Super + K lists every mapped binding. Tmux bindings are Super + Alt + K; Herdr is Super + Ctrl + K. The first login greets you with a toast that opens the keybindings menu.",
    macReach: "Command",
    windowsReach: "Windows key",
    columns: {
      omarchy: {
        verdict: "better",
        label: "One Super key",
        note: "Anchor for nearly every hotkey. Super + K is the index.",
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
    source: "Coming From Mac or Windows; Hotkeys; Omarchy 4.0.0",
    macOrder: 4,
    windowsOrder: 4,
  },
  {
    id: "one-menu",
    name: "One palette",
    tease: "Apps, themes, Docker DBs, network, install — one fuzzy Super + Space. Super + Alt + Space is apps-only.",
    category: "Keyboard OS",
    binding: "Super + Space · Super + Alt + Space",
    omarchy:
      "Super + Space opens the Omarchy menu: a native, filterable command palette inside the shell. Nested search merged the old launcher into one surface — apps and commands. It launches software, changes settings, installs packages, starts Docker databases (Install > Development > Docker DB), and captures the screen. Fuzzy and acronym matching, live icons, hide unused entries. Defined in JSONC and extensible from ~/.config/omarchy/extensions/omarchy-menu.jsonc. Super + Alt + Space stays scoped to apps when that is all you want.",
    macReach: "Spotlight / Raycast",
    windowsReach: "Start menu",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Apps + commands",
        note: "One palette. Themes, Docker DBs, network, install — not just apps.",
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
    source: "Coming From Mac or Windows; Omarchy 4.0.0; Development Tools — The Omarchy Manual",
    macOrder: 5,
    windowsOrder: 5,
  },
  {
    id: "one-bar",
    name: "No dock. No icons.",
    tease: "The desktop is empty on purpose. One bar, any edge. Terminal and browser are keys.",
    category: "Keyboard OS",
    binding: "Super + Return · Super + Shift + Return",
    omarchy:
      "Nothing to click to launch, no icons to arrange. The terminal is Super + Return, the browser Super + Shift + Return. The one persistent piece of UI is the bar — what the menu bar, tray, and Notification Center used to cover. Drag empty bar space to any screen edge; a ghost slab previews the dock. Double-click empty space to toggle transparency.",
    macReach: "Dock + menu bar + desktop icons",
    windowsReach: "Taskbar + desktop icons",
    columns: {
      omarchy: {
        verdict: "better",
        label: "One bar, any edge",
        note: "No dock. No desktop icons. The old launch strip is gone.",
      },
      macos: {
        verdict: "different",
        label: "Dock + menu bar",
        note: "Always-on launch strip and a menu bar per app.",
      },
      windows: {
        verdict: "different",
        label: "Taskbar",
        note: "Pinned apps, Start, and the tray in one strip.",
      },
    },
    source: "Coming From Mac or Windows; Omarchy 4.0.0 release notes",
    macOrder: 6,
    windowsOrder: 6,
  },
  {
    id: "tiling",
    name: "Tiling is the default",
    tease: "Windows do not overlap. Open a second and they split. Float is Super + T.",
    category: "Keyboard OS",
    binding: "Super + T",
    omarchy:
      "You do not drag windows around or snap them to halves. Open a window and it takes the whole screen. Open a second and they split. You never fish a window out from under another, because windows do not overlap. Super + T floats the active window when you genuinely need it. Super + J stacks them; Super + L switches a workspace between dwindle and scrolling. The official manual calls tiling the heart of the whole thing.",
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
    macOrder: 7,
    windowsOrder: 7,
  },
  {
    id: "workspaces",
    name: "Instant numbered workspaces",
    tease: "Super + 1–4 jumps. Super + Shift sends. No Mission Control parade.",
    category: "Keyboard OS",
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
    macOrder: 8,
    windowsOrder: 8,
  },
  {
    id: "scratchpad",
    name: "Scratchpad",
    tease: "Super + S drops a workspace over this one. Agents live here.",
    category: "Keyboard OS",
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
    macOrder: 9,
    windowsOrder: 9,
  },
  {
    id: "window-restore",
    name: "Save the layout",
    tease: "Per app, per workspace. Super + Alt + Home remembers the widths.",
    category: "Keyboard OS",
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
    macOrder: 10,
    windowsOrder: 10,
  },
  {
    id: "close-quits",
    name: "Close means quit",
    tease: "No Dock zombies. Super + W or Q and the process is gone.",
    category: "Keyboard OS",
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
    macOrder: 11,
    windowsOrder: 11,
  },
  {
    id: "clipboard",
    name: "One clipboard reflex",
    tease: "Super + C/X/V in the terminal too. History holds images. Sensitive stays out.",
    category: "Keyboard OS",
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
    macOrder: 12,
    windowsOrder: 12,
  },
  {
    id: "capture",
    name: "Capture from the keys",
    tease: "Print Screen grabs, records, picks color. The region picker works without a mouse.",
    category: "Keyboard OS",
    binding: "Print Screen",
    omarchy:
      "Cmd + Shift + 4 and Win + Shift + S become Print Screen. Super + Ctrl + C opens the capture menu on keyboards without the key. Alt + Print Screen records; Super + Print Screen is a color picker. Super + Ctrl + Print Screen extracts text from the selection to the clipboard. The region picker is keyboard-first: Return captures the highlighted window, Ctrl + Return the display, Tab and arrows move the selection. Recordings get a live webcam overlay, sized with Super + Alt + [ / ].",
    macReach: "Cmd + Shift + 4 / 5",
    windowsReach: "Win + Shift + S",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Screenshot + record + OCR",
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
    macOrder: 13,
    windowsOrder: 13,
  },
  {
    id: "agents-wired",
    name: "First-class coding agents",
    tease: "claude, codex, opencode, agy, copilot, crush, grok, pi, omp, ori — stubs until you run them.",
    category: "Agent-first OS",
    omarchy:
      "Every major coding-agent CLI is a lazy-loaded launcher in ~/.local/bin. Nothing downloads until first run. Wrap another with omarchy-mise-install. omarchy update keeps the stubs current.",
    macReach: "Install each CLI yourself",
    windowsReach: "Install each CLI yourself",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Pre-wired launchers",
        note: "Ten harnesses. First run fetches. Update keeps them.",
      },
      macos: {
        verdict: "no",
        label: "Bring your own CLIs",
        note: "The OS does not ship coding-agent launchers.",
      },
      windows: {
        verdict: "no",
        label: "Bring your own CLIs",
        note: "You install each CLI. The OS does not ship the launchers.",
      },
    },
    source: "AI — The Omarchy Manual",
    macOrder: 14,
    windowsOrder: 14,
  },
  {
    id: "default-agent",
    name: "A default agent. One binding.",
    tease: "Setup > Defaults > Agent. Super + Shift + Ctrl + A. a in the terminal. Theme follows.",
    category: "Agent-first OS",
    binding: "Super + Shift + Ctrl + A",
    omarchy:
      "Pick the default under Setup > Defaults > Agent. Super + Shift + Ctrl + A launches it unattended in a dedicated terminal, or the picker if unset. omarchy agent prompt \"\u2026\" starts a task. a is inline; c, cx, cy are OpenCode, Claude Code, and Codex in auto-approve modes. Themes sync to Claude Code, Pi, and OpenCode.",
    macReach: "Whatever you installed",
    windowsReach: "Whatever you installed",
    columns: {
      omarchy: {
        verdict: "better",
        label: "One slot. One key.",
        note: "Unattended. Prompt from the CLI. Theme rides along.",
      },
      macos: {
        verdict: "no",
        label: "No OS default",
        note: "You install an agent. The desktop does not pick one.",
      },
      windows: {
        verdict: "no",
        label: "No OS default",
        note: "You install an agent. The desktop does not pick one.",
      },
    },
    source: "AI — The Omarchy Manual; Hotkeys",
    macOrder: 15,
    windowsOrder: 15,
  },
  {
    id: "agents-panel",
    name: "Agents panel in the bar",
    tease: "Plan, 5-hour and weekly limits, tokens by day and model. Right-click launches.",
    category: "Agent-first OS",
    omarchy:
      "The top bar grows an agents icon after first coding-agent use. Plan, 5-hour session and weekly limits (or prepaid remaining), tokens by day and model. Claude Code, Codex, and Fireworks out of the box. Right-click launches the default agent. Usage can merge from other machines via a synced folder.",
    macReach: "Each vendor’s own site",
    windowsReach: "Each vendor’s own site",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Usage on the bar",
        note: "Limits and tokens in one panel. Sync the folder across machines.",
      },
      macos: {
        verdict: "no",
        label: "No OS usage bar",
        note: "You check each vendor. The menu bar does not.",
      },
      windows: {
        verdict: "no",
        label: "No OS usage bar",
        note: "No coding-agent usage panel on the taskbar.",
      },
    },
    source: "AI — The Omarchy Manual",
    macOrder: 16,
    windowsOrder: 16,
  },
  {
    id: "crash-agent",
    name: "Crash, then the agent",
    tease: "A coredump toast. Click it. The default agent gets the dump and diagnose-crash.",
    category: "Agent-first OS",
    omarchy:
      "Omarchy watches systemd-coredump. Click the crash notification and the default agent gets the dump plus the diagnose-crash skill. omarchy agent crash <pid> does it by hand.",
    macReach: "Crash Reporter",
    windowsReach: "WerFault",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Dump to the agent",
        note: "Notification, skill, or omarchy agent crash.",
      },
      macos: {
        verdict: "no",
        label: "Crash Reporter",
        note: "Crash Reporter files a report. It does not brief a coding agent.",
      },
      windows: {
        verdict: "no",
        label: "Windows Error Reporting",
        note: "A dump file. Not a briefed agent.",
      },
    },
    source: "AI — The Omarchy Manual",
    macOrder: 17,
    windowsOrder: 17,
  },
  {
    id: "omarchy-skill",
    name: "The Omarchy Skill",
    tease: "Symlinked into Claude Code, Codex, Pi, Antigravity, and ~/.agents/skills.",
    category: "Agent-first OS",
    omarchy:
      "A shipped skill for Hyprland, the bar, and themes. Symlinked into Claude Code, Codex, Pi, Antigravity, and ~/.agents/skills. Experimental — start in plan mode.",
    macReach: "None",
    windowsReach: "None",
    columns: {
      omarchy: {
        verdict: "better",
        label: "A skill for the desktop",
        note: "Harnesses can tailor the machine. Treat it as experimental.",
      },
      macos: {
        verdict: "no",
        label: "No OS skill",
        note: "You write your own instructions.",
      },
      windows: {
        verdict: "no",
        label: "No OS skill",
        note: "You write your own instructions.",
      },
    },
    source: "AI — The Omarchy Manual",
    macOrder: 18,
    windowsOrder: 18,
  },
  {
    id: "agent-layouts",
    name: "Agent IDE layouts",
    tease: "tdl, tds, tdlm, tsl. Super + Ctrl + Return is Herdr. Super + Shift + Ctrl + A picks.",
    category: "Agent-first OS",
    binding: "Super + Ctrl + Return",
    omarchy:
      "tdl [agent] is editor + agent + terminal. tds is editor + live diff + terminal + OpenCode. tdlm is one tdl per subdirectory. tsl N c is a swarm grid. Super + Ctrl + Return opens Herdr. Super + Shift + Ctrl + A picks an AI agent.",
    macReach: "Your tmux or IDE layout",
    windowsReach: "Your terminal layout",
    columns: {
      omarchy: {
        verdict: "better",
        label: "Layouts for a swarm",
        note: "tdl, tds, tdlm, tsl. Herdr manages the agents.",
      },
      macos: {
        verdict: "no",
        label: "Roll your own splits",
        note: "iTerm and tmux will do it. The OS does not ship these.",
      },
      windows: {
        verdict: "no",
        label: "Roll your own splits",
        note: "Windows Terminal splits. Not a swarm grid on a binding.",
      },
    },
    source: "Terminal — The Omarchy Manual; Hotkeys",
    macOrder: 19,
    windowsOrder: 19,
  },
  {
    id: "install-ai",
    name: "Local models. ChatGPT. Grok.",
    tease: "Install > AI: LM Studio, Ollama, ChatGPT desktop, Grok Bot.",
    category: "Agent-first OS",
    omarchy:
      "Install > AI recommends LM Studio and Ollama for local models. ChatGPT desktop and Grok Bot are there as graphical apps — same class of chat client macOS and Windows already ship.",
    macReach: "ChatGPT app / Ollama",
    windowsReach: "ChatGPT app / Ollama / Copilot",
    columns: {
      omarchy: {
        verdict: "different",
        label: "Install > AI",
        note: "Local models and the usual chat apps. One menu.",
      },
      macos: {
        verdict: "different",
        label: "ChatGPT, Ollama, the rest",
        note: "The chat apps exist. They are not an OS install menu.",
      },
      windows: {
        verdict: "different",
        label: "ChatGPT, Copilot, Ollama",
        note: "The chat apps exist. They are not an OS install menu.",
      },
    },
    source: "AI — The Omarchy Manual",
    macOrder: 20,
    windowsOrder: 20,
  },
  {
    id: "omarchy-agent-cli",
    name: "omarchy agent on the CLI",
    tease: "prompt, usage-update, crash — the agent can operate the machine.",
    category: "Agent-first OS",
    omarchy:
      "The omarchy agent group starts a task (prompt), refreshes usage (usage-update), and hands a coredump to the default agent (crash). An agent can run the OS, not just chat about it.",
    macReach: "None",
    windowsReach: "None",
    columns: {
      omarchy: {
        verdict: "better",
        label: "agent prompt / usage / crash",
        note: "A group on the omarchy CLI. For agents, not just humans.",
      },
      macos: {
        verdict: "no",
        label: "No OS agent CLI",
        note: "No first-class agent group on the system CLI.",
      },
      windows: {
        verdict: "no",
        label: "No OS agent CLI",
        note: "No first-class agent group on the system CLI.",
      },
    },
    source: "AI — The Omarchy Manual",
    macOrder: 21,
    windowsOrder: 21,
  },
  {
    id: "mise",
    name: "Mise for every language",
    tease: "Install > Development: Rails, Node, Go, Rust, Python, and the rest. Versions included.",
    category: "Builder OS",
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
    macOrder: 22,
    windowsOrder: 22,
  },
  {
    id: "install",
    name: "Install, not an App Store",
    tease: "A menu, or omarchy pkg add. No downloaded .dmg. No Setup.exe.",
    category: "Builder OS",
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
        note: "Signed store apps and whatever you drag to /Applications.",
      },
      windows: {
        verdict: "has",
        label: "Store + installers",
        note: "The Store exists. Most software still arrives as a Setup.exe.",
      },
    },
    source: "Coming From Mac or Windows — The Omarchy Manual",
    macOrder: 23,
    windowsOrder: 23,
  },
  {
    id: "windows-vm",
    name: "Windows when you still need it",
    tease: "Install > Windows. Office over RDP. No GPU passthrough — not Premiere, not Fortnite.",
    category: "Builder OS",
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
    macOrder: 24,
    windowsOrder: 24,
  },
  {
    id: "gaming",
    name: "Proton. Moonlight. Cloud.",
    tease: "Steam/Proton, Moonlight, cloud. Not a native Xbox Game Pass client.",
    category: "Builder OS",
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
    macOrder: 25,
    windowsOrder: 25,
  },
  {
    id: "one-update",
    name: "One Update",
    tease: "OS and every package. Snapshot first. No per-app nags.",
    category: "Own the machine",
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
    macOrder: 26,
    windowsOrder: 26,
  },
  {
    id: "snapshots",
    name: "Snapshots on every update",
    tease: "Root rollback before the upgrade. Not /home. That is the deal.",
    category: "Own the machine",
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
    macOrder: 27,
    windowsOrder: 27,
  },
  {
    id: "defaults-hardening",
    name: "LUKS. Closed. Not root.",
    tease: "Encrypted by default. Inbound closed. Docker is not passwordless root.",
    category: "Own the machine",
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
    macOrder: 28,
    windowsOrder: 28,
  },
  {
    id: "security-401",
    name: "A security team, and a fast-follow",
    tease: "4.0.1: auto-review, hardened themes, guarded plugins. omarchy.org/security.",
    category: "Own the machine",
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
    macOrder: 29,
    windowsOrder: 29,
  },
  {
    id: "setup",
    name: "Setup is files",
    tease: "Five keyboard panels. The rest is a file you can git. Setup restarts it.",
    category: "Own the machine",
    binding: "Super + Ctrl + A / B / W / D / P",
    omarchy:
      "System Settings and Control Panel become Setup in the Omarchy menu. This is not a full Settings GUI. Quattro added real control panels for audio, Bluetooth, network, display, and power — Super + Ctrl + A / B / W / D / P. Network shows live throughput, ping, packet loss, a one-click speed test, DNS, Wi-Fi QR, band toggle, and 802.1X. Display includes a notched 9–20px text-size slider that moves the shell font, GTK, and the terminal in lockstep. Plenty of the rest still lives in text files — Hyprland in Lua, the menu in JSONC, the shell in toml. Setup drops you into the right file and restarts whatever needs restarting when you are done. Every tweak can be seen, copied to the next machine, and put in version control.",
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
    source: "Coming From Mac or Windows; Dotfiles; Omarchy 4.0.0 — Control panels",
    macOrder: 30,
    windowsOrder: 30,
  },
  {
    id: "qr-capture",
    name: "Secrets stay in RAM",
    tease: "QR to clipboard, never disk. otpauth:// skips history.",
    category: "Own the machine",
    omarchy:
      "Select a region and a QR code inside it decodes straight to the clipboard — so an otpauth:// setup code on screen no longer needs a phone. The decoded value never touches disk and is marked sensitive, so clipboard history skips it.",
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
    macOrder: 31,
    windowsOrder: 31,
  },
  {
    id: "gift-reset",
    name: "Hand it over. Wipe it.",
    tease: "Gift-install waits for first boot. Reset Computer restores the baseline snapshot.",
    category: "Own the machine",
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
    macOrder: 32,
    windowsOrder: 32,
  },
];

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

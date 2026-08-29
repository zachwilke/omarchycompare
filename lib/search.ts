import { CATEGORIES, features } from "./features";
import type { Category, Feature } from "./types";

/**
 * Search aliases only. Each string maps to an existing sourced row —
 * nothing here invents a capability.
 */
export const FEATURE_ALIASES: Record<string, string[]> = {
  "super-key": ["cmd", "command", "windows key", "super", "win key"],
  "one-menu": [
    "spotlight",
    "raycast",
    "start menu",
    "launcher",
    "command palette",
    "super+space",
  ],
  "apps-only": ["spotlight", "launchpad", "app launcher"],
  "one-bar": ["dock", "taskbar", "icons", "menu bar"],
  "quickshell": ["waybar", "polybar", "omarchy-shell", "shell"],
  "bar-widgets": ["menu bar", "system tray", "status bar"],
  "plugins": ["extensions", "omarchyplugins"],
  "themes": ["theme", "theme carousel", "22 themes", "colors"],
  "backgrounds": ["wallpaper", "background"],
  tiling: ["tiling", "tile", "hyprland", "snap windows", "fancyzones"],
  workspaces: ["spaces", "virtual desktops", "desktops"],
  scratchpad: ["scratchpad", "minimize", "hidden window"],
  "close-quits": ["close", "quit", "red button"],
  "window-restore": ["layout", "session restore", "window positions"],
  displays: ["clamshell", "hidpi", "brightness", "monitor", "display"],
  clipboard: ["copy", "paste", "clipboard"],
  setup: ["settings", "system settings", "system preferences"],
  panels: ["control panel", "settings gui"],
  "one-update": ["update", "windows update", "software update"],
  install: ["app store", "brew", "winget", "package"],
  localsend: ["airdrop", "file share", "localsend"],
  "default-apps": [
    "notes",
    "calculator",
    "terminal",
    "textedit",
    "omawrite",
    "omacalc",
    "foot",
  ],
  agent: ["claude", "codex", "grok", "ai", "coding agent"],
  mise: ["asdf", "nvm", "rbenv", "languages", "runtime"],
  "windows-vm": ["vm", "office", "adobe", "windows 11 vm", "rdp"],
  snapshots: ["timeshift", "restore", "btrfs"],
  "lock-auth": [
    "touch id",
    "windows hello",
    "fingerprint",
    "fido",
    "fido2",
    "luks",
    "bitlocker",
  ],
  "gift-reset": ["factory reset", "install for someone"],
  "security-401": ["security team", "disclosure"],
  "defaults-hardening": ["firewall", "docker", "luks", "inbound"],
  "install-gate": ["secure boot", "tpm", "bios"],
  capture: ["screenshot", "print screen", "screen capture"],
  ocr: ["ocr", "text from image"],
  "qr-capture": ["qr", "qr code"],
  notifications: ["notification center", "toasts"],
  "intel-mac": ["apple silicon", "m-series", "intel mac", "dual-boot"],
  gaming: ["steam", "proton", "xbox", "game pass", "moonlight"],
  "apple-services": [
    "airdrop",
    "imessage",
    "facetime",
    "icloud",
    "continuity",
    "handoff",
  ],
  "muscle-memory": ["hotkeys", "keyboard", "two weeks", "super+k"],
};

export function searchHaystack(feature: Feature): string {
  const aliases = FEATURE_ALIASES[feature.id] ?? [];
  return [
    feature.name,
    feature.category,
    feature.tease,
    feature.binding,
    feature.columns.omarchy.label,
    feature.columns.macos.label,
    feature.columns.windows.label,
    ...aliases,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function searchFeatures(query: string): Feature[] {
  const q = query.trim().toLowerCase();
  if (!q) return features;
  return features.filter((feature) => searchHaystack(feature).includes(q));
}

export function groupByCategory(list: Feature[]): {
  category: Category;
  rows: Feature[];
}[] {
  return CATEGORIES.map((category) => ({
    category,
    rows: list.filter((feature) => feature.category === category),
  })).filter((group) => group.rows.length > 0);
}

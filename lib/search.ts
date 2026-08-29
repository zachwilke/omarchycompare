import { CATEGORIES, features } from "./features";
import type { Category, Feature } from "./types";

/**
 * Search aliases only. Each string maps to an existing sourced row —
 * nothing here invents a capability.
 */
export const FEATURE_ALIASES: Record<string, string[]> = {
  quickshell: [
    "waybar",
    "walker",
    "mako",
    "hyprlock",
    "polybar",
    "omarchy-shell",
    "shell",
    "daemon",
    "quickshell",
    "notifications",
    "lock screen",
  ],
  plugins: ["extensions", "omarchyplugins", "widgets", "plugin"],
  themes: [
    "theme",
    "theme carousel",
    "22 themes",
    "colors",
    "wallpaper",
    "background",
    "neovim",
    "chromium",
  ],
  "super-key": ["cmd", "command", "windows key", "super", "win key", "hotkeys", "super+k"],
  "one-menu": [
    "spotlight",
    "raycast",
    "start menu",
    "launcher",
    "command palette",
    "super+space",
    "docker db",
    "launchpad",
    "app launcher",
  ],
  "one-bar": ["dock", "taskbar", "icons", "menu bar", "desktop icons"],
  tiling: ["tiling", "tile", "hyprland", "snap windows", "fancyzones"],
  workspaces: ["spaces", "virtual desktops", "desktops", "mission control"],
  scratchpad: ["scratchpad", "minimize", "hidden window", "quake"],
  "window-restore": ["layout", "session restore", "window positions"],
  "close-quits": ["close", "quit", "red button"],
  clipboard: ["copy", "paste", "clipboard"],
  capture: ["screenshot", "print screen", "screen capture", "ocr"],
  agent: ["claude", "codex", "grok", "ai", "coding agent", "copilot"],
  mise: ["asdf", "nvm", "rbenv", "languages", "runtime"],
  install: ["app store", "brew", "winget", "package"],
  "windows-vm": ["vm", "office", "adobe", "windows 11 vm", "rdp"],
  gaming: ["steam", "proton", "xbox", "game pass", "moonlight"],
  "one-update": ["update", "windows update", "software update"],
  snapshots: ["timeshift", "restore", "btrfs", "time machine"],
  "defaults-hardening": ["firewall", "docker", "luks", "inbound"],
  "security-401": ["security team", "disclosure"],
  setup: ["settings", "system settings", "system preferences", "control panel", "dotfiles"],
  "qr-capture": ["qr", "qr code", "otp", "otpauth"],
  "gift-reset": ["factory reset", "install for someone"],
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

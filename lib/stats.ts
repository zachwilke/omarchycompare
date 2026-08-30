import { CATEGORIES, features } from "./features";
import type { Category, Platform, Verdict } from "./types";

export function countVerdict(platform: Platform, verdict: Verdict): number {
  return features.filter((feature) => feature.columns[platform].verdict === verdict)
    .length;
}

export const TOTAL_ROWS = features.length;
export const OMARCHY_BETTER = countVerdict("omarchy", "better");

export type ActMeta = {
  category: Category;
  numeral: string;
  count: number;
  better: number;
  blurb: string;
};

/** One line per act. Each is a summary of rows already on the sheet. */
const ACT_BLURBS: Record<Category, string> = {
  "Future desktop": "One process runs the desktop. Plugins, not daemons.",
  "Keyboard OS": "Super is the machine. The mouse is optional.",
  "Agent-first OS": "Coding agents are wired in, not bolted on.",
  "Builder OS": "A menu installs the stack. No App Store.",
  "Own the machine": "Encrypted, snapshotted, and yours to read.",
};

const NUMERALS = ["I", "II", "III", "IV", "V"];

export const ACTS: ActMeta[] = CATEGORIES.map((category, index) => {
  const rows = features.filter((feature) => feature.category === category);
  return {
    category,
    numeral: NUMERALS[index] ?? String(index + 1),
    count: rows.length,
    better: rows.filter((row) => row.columns.omarchy.verdict === "better").length,
    blurb: ACT_BLURBS[category],
  };
});

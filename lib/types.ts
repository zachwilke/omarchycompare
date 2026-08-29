export type Category =
  | "Desktop"
  | "Windows"
  | "Settings"
  | "Apps"
  | "Dev/AI"
  | "Security"
  | "Capture";

export type ComingFrom = "either" | "mac" | "windows";

export type Verdict = "better" | "has" | "different" | "no";

export type Platform = "omarchy" | "macos" | "windows";

export type FeatureColumn = {
  verdict: Verdict;
  label: string;
  note: string;
};

export type Feature = {
  id: string;
  name: string;
  tease: string;
  category: Category;
  binding?: string;
  omarchy: string;
  macReach?: string;
  windowsReach?: string;
  columns: Record<Platform, FeatureColumn>;
  source: string;
  macOrder: number;
  windowsOrder: number;
};

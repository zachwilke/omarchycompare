/* Mirrored in public/theme-init.js, which runs before React. Keep in step. */
export const THEME_STORAGE_KEY = "omarchycompare-theme";

/** Browser chrome colour per theme — kept in step with --rgb-background-night. */
export const THEME_COLOR = {
  dark: "#11151f",
  light: "#f8f9fb",
} as const;

export type Theme = keyof typeof THEME_COLOR;

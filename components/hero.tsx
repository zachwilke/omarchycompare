import {
  MANUAL_URL,
  OMARCHY_URL,
  MAC_COLUMN,
  MAC_COLUMN_NOTE,
  VERSION_BADGE,
  WINDOWS_COLUMN,
} from "@/lib/features";
import { OMARCHY_BETTER, TOTAL_ROWS } from "@/lib/stats";

function IsoIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden>
      <path
        d="m9.47 4.02c.77 0 1.4.63 1.4 1.4s-.63 1.4-1.4 1.4h-4.62c-.67 0-1.17.17-1.53.51-.34.34-.51.86-.51 1.56v14.24c0 .69.17 1.21.51 1.55.35.35.86.53 1.53.53h22.29c.66 0 1.16-.18 1.51-.53.36-.34.54-.86.54-1.55v-14.24c0-.69-.18-1.21-.54-1.56-.35-.34-.86-.51-1.51-.51h-4.62c-.77 0-1.4-.63-1.4-1.4s.63-1.4 1.4-1.4h4.81c1.54 0 2.7.39 3.49 1.17.79.78 1.18 1.94 1.18 3.47v14.71c0 1.53-.39 2.69-1.18 3.47-.79.78-1.95 1.17-3.49 1.17h-22.65c-1.54 0-2.7-.39-3.49-1.17-.79-.78-1.18-1.93-1.18-3.47v-14.71c0-1.53.39-2.69 1.18-3.47.79-.78 1.95-1.17 3.49-1.17z"
        fill="currentColor"
      />
      <path
        d="m16.01 0c.38 0 .71.14.98.41.28.27.42.59.42.95v14.25l-.12 2.25.8-.97 2.15-2.3c.25-.28.57-.42.94-.42.34 0 .64.12.88.35.25.23.38.52.38.86 0 .33-.13.64-.39.91l-4.98 4.8c-.18.17-.36.29-.53.36-.17.07-.35.11-.53.11s-.36-.04-.53-.11c-.17-.07-.35-.19-.54-.36l-4.97-4.8c-.27-.27-.41-.58-.41-.91 0-.34.12-.63.36-.86.24-.23.54-.35.88-.35.39 0 .71.14.95.42l2.16 2.3.8.97-.12-2.25v-14.25c0-.36.14-.68.41-.95.28-.27.62-.41 1-.41z"
        fill="currentColor"
      />
    </svg>
  );
}

function ManualIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden>
      <path
        d="m0 4.5c0-.4.16-.78.44-1.06s.66-.44 1.06-.44h8.51c2.45 0 4.63 1.18 6 3 .7-.93 1.6-1.69 2.65-2.21 1.04-.52 2.19-.79 3.36-.79h8.49c.4 0 .78.16 1.06.44s.44.66.44 1.06v21c0 .4-.16.78-.44 1.06s-.66.44-1.06.44h-9.01c-.59 0-1.18.12-1.72.34-.55.23-1.04.56-1.46.98l-1.24 1.24c-.28.28-.66.44-1.06.44s-.78-.16-1.06-.44l-1.24-1.24c-.42-.42-.92-.75-1.46-.98-.55-.23-1.13-.34-1.72-.34h-9.02c-.4 0-.78-.16-1.06-.44s-.44-.66-.44-1.06zm14.5 20.65.01-10.15 0-4.51c0-1.19-.48-2.34-1.32-3.18-.84-.84-1.99-1.32-3.18-1.32h-7.01v18h7.51c1.41 0 2.79.4 3.99 1.15zm3.01-14.65 0 14.64c1.19-.75 2.57-1.14 3.98-1.14h7.51v-18h-6.99c-1.19 0-2.34.47-3.18 1.32-.84.84-1.32 1.99-1.32 3.18z"
        fill="currentColor"
      />
    </svg>
  );
}

const SCORES: { value: string; unit?: string; label: string }[] = [
  {
    value: String(OMARCHY_BETTER),
    unit: `/ ${TOTAL_ROWS}`,
    label: "rows where Omarchy is better",
  },
  { value: "1", label: "shell process, not a daemon pile" },
  { value: "22", label: "themes, switched system-wide" },
  { value: "0", label: "claims without a source" },
];

export function Hero() {
  return (
    <section className="shell hero">
      <p className="pill" style={{ display: "inline-flex" }}>
        <span className="pill__dot" aria-hidden />
        {VERSION_BADGE}
      </p>

      <h1 className="hero__title">
        The dock is the past. <em>Super</em> is the machine.
        <span className="hero__cursor" aria-hidden />
      </h1>

      <p className="hero__lede">
        Omarchy is the desktop: keyboard first, windows that tile, one shell
        instead of a pile of daemons. Coding agents are first-class, not a
        sidebar. Every row below is sourced from official material.
      </p>

      <div className="hero__actions">
        <a
          href={OMARCHY_URL}
          target="_blank"
          rel="noreferrer"
          className="omarchy-button omarchy-button--primary"
        >
          <IsoIcon />
          <span>Get Omarchy</span>
        </a>
        <a
          href={MANUAL_URL}
          target="_blank"
          rel="noreferrer"
          className="omarchy-button"
        >
          <ManualIcon />
          <span>Coming from Mac or Windows</span>
        </a>
      </div>

      <p className="hero__note">
        Compared against <span className="omarchy-nowrap">{MAC_COLUMN}</span> (
        {MAC_COLUMN_NOTE})
        <span className="meta-dot" aria-hidden>
          ·
        </span>
        <span className="omarchy-nowrap">{WINDOWS_COLUMN}</span>
      </p>

      <ul className="scoreboard">
        {SCORES.map((score) => (
          <li key={score.label} className="scoreboard__cell">
            <span className="scoreboard__value">
              {score.value}
              {score.unit && <span> {score.unit}</span>}
            </span>
            <span className="scoreboard__label">{score.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

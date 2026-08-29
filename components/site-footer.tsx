import {
  OMACOM_ANNOUNCE_URL,
  OMACOM_URL,
  OMARCHY_URL,
  VERSION_BADGE,
} from "@/lib/features";

function MarkIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden>
      <rect
        x="1.5"
        y="1.5"
        width="13"
        height="13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M4 11.2 6.2 5h1.15L9.6 11.2H8.35l-.45-1.35H5.7L5.25 11.2H4zm1.95-2.35h1.7L6.85 6.2h-.1L5.95 8.85z" fill="currentColor" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="omarchy-footer">
      <p>
        <a
          href={OMARCHY_URL}
          target="_blank"
          rel="noreferrer"
          className="omarchy-footer__icon"
        >
          <MarkIcon />
          <strong>omarchy.org</strong>
        </a>
        <span className="mx-[1ch] text-[color:var(--color-terminal-black)]">·</span>
        {VERSION_BADGE}
      </p>
      <p>
        Stewarded by the{" "}
        <a
          href={OMACOM_ANNOUNCE_URL}
          target="_blank"
          rel="noreferrer"
          className="omarchy-footer__icon"
        >
          <MarkIcon />
          <strong>Omacom Foundation</strong>
        </a>
        <span className="mx-[1ch] text-[color:var(--color-terminal-black)]">·</span>
        <a
          href={OMACOM_URL}
          target="_blank"
          rel="noreferrer"
          className="omarchy-link"
        >
          omacom.io
        </a>
      </p>
    </footer>
  );
}

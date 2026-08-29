import {
  OMACOM_ANNOUNCE_URL,
  OMACOM_URL,
  OMARCHY_URL,
} from "@/lib/features";

export function SiteFooter() {
  return (
    <footer className="omarchy-footer">
      <p>
        <a href={OMARCHY_URL} target="_blank" rel="noreferrer" className="omarchy-link">
          omarchy.org
        </a>
        <span className="omarchy-meta-dot" aria-hidden>
          ·
        </span>
        <a href={OMACOM_ANNOUNCE_URL} target="_blank" rel="noreferrer" className="omarchy-link">
          Omacom Foundation
        </a>
        <span className="omarchy-meta-dot" aria-hidden>
          ·
        </span>
        <a href={OMACOM_URL} target="_blank" rel="noreferrer" className="omarchy-link">
          omacom.io
        </a>
      </p>
      <p className="omarchy-footer__disclaimer">
        Not owned or managed by Omarchy or the Omacom Foundation.
        <br />
        Just a loving user.
        <span className="omarchy-meta-dot" aria-hidden>
          ·
        </span>
        <a
          href="https://x.com/zachwilke_1"
          target="_blank"
          rel="noreferrer"
          className="omarchy-link"
        >
          @zachwilke_1
        </a>
        <span className="omarchy-meta-dot" aria-hidden>
          ·
        </span>
        <a
          href="https://github.com/zachwilke"
          target="_blank"
          rel="noreferrer"
          className="omarchy-link"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}

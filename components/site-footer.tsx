import {
  OMACOM_ANNOUNCE_URL,
  OMACOM_URL,
  OMARCHY_URL,
  VERSION_BADGE,
} from "@/lib/features";

export function SiteFooter() {
  return (
    <footer className="omarchy-footer">
      <p>
        <a href={OMARCHY_URL} target="_blank" rel="noreferrer" className="omarchy-link">
          omarchy.org
        </a>
        <span className="omarchy-footer__dot">·</span>
        {VERSION_BADGE}
      </p>
      <p>
        Stewarded by the{" "}
        <a href={OMACOM_ANNOUNCE_URL} target="_blank" rel="noreferrer" className="omarchy-link">
          Omacom Foundation
        </a>
        <span className="omarchy-footer__dot">·</span>
        <a href={OMACOM_URL} target="_blank" rel="noreferrer" className="omarchy-link">
          omacom.io
        </a>
      </p>
      <p className="omarchy-footer__disclaimer">
        Not owned or managed by Omarchy or the Omacom Foundation. Just a loving user.
      </p>
    </footer>
  );
}

import {
  OMACOM_ANNOUNCE_URL,
  OMACOM_URL,
  OMARCHY_URL,
  VERSION_BADGE,
} from "@/lib/features";

export function SiteFooter() {
  return (
    <footer
      className="mt-auto border-t px-4 py-8 sm:px-6"
      style={{ borderColor: "var(--border-color)" }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 text-[var(--color-terminal-white)]/60 sm:flex-row sm:items-baseline sm:justify-between">
        <p>
          <a
            href={OMARCHY_URL}
            target="_blank"
            rel="noreferrer"
            className="omarchy-link"
          >
            omarchy.org
          </a>
          <span className="mx-2 text-[var(--color-terminal-black)]">·</span>
          {VERSION_BADGE}
        </p>
        <p>
          Stewarded by the{" "}
          <a
            href={OMACOM_ANNOUNCE_URL}
            target="_blank"
            rel="noreferrer"
            className="omarchy-link"
          >
            Omacom Foundation
          </a>
          <span className="mx-2 text-[var(--color-terminal-black)]">·</span>
          <a
            href={OMACOM_URL}
            target="_blank"
            rel="noreferrer"
            className="omarchy-link"
          >
            omacom.io
          </a>
        </p>
      </div>
    </footer>
  );
}

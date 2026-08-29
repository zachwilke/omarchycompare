import {
  OMACOM_ANNOUNCE_URL,
  OMACOM_URL,
  OMARCHY_URL,
  VERSION_BADGE,
} from "@/lib/features";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/8 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-baseline sm:justify-between">
        <p>
          <a
            href={OMARCHY_URL}
            target="_blank"
            rel="noreferrer"
            className="text-cream underline-offset-4 hover:underline"
          >
            omarchy.org
          </a>
          <span className="mx-2 text-white/15">·</span>
          {VERSION_BADGE}
        </p>
        <p>
          Stewarded by the{" "}
          <a
            href={OMACOM_ANNOUNCE_URL}
            target="_blank"
            rel="noreferrer"
            className="text-cream underline-offset-4 hover:underline"
          >
            Omacom Foundation
          </a>
          <span className="mx-2 text-white/15">·</span>
          <a
            href={OMACOM_URL}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:text-cream hover:underline"
          >
            omacom.io
          </a>
        </p>
      </div>
    </footer>
  );
}

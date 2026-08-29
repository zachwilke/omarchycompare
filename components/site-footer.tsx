import {
  ISO_URL,
  MANUAL_URL,
  OMACOM_ANNOUNCE_URL,
  OMACOM_URL,
  OMARCHY_URL,
  PLUGINS_URL,
  RELEASE_400,
  RELEASE_401,
} from "@/lib/features";

const links = [
  { href: OMARCHY_URL, label: "omarchy.org" },
  { href: ISO_URL, label: "4.0.1 ISO" },
  { href: MANUAL_URL, label: "Coming from Mac or Windows" },
  { href: OMACOM_ANNOUNCE_URL, label: "Omacom Foundation" },
  { href: OMACOM_URL, label: "omacom.io" },
  { href: RELEASE_400, label: "v4.0.0 Quattro" },
  { href: RELEASE_401, label: "v4.0.1" },
  { href: PLUGINS_URL, label: "omarchyplugins.com" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
        <div className="max-w-lg">
          <a
            href={OMARCHY_URL}
            target="_blank"
            rel="noreferrer"
            className="font-display text-2xl text-cream transition-colors hover:text-gold"
          >
            Omarchy
          </a>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Omarchy is an open-source project at{" "}
            <a
              href={OMARCHY_URL}
              target="_blank"
              rel="noreferrer"
              className="text-cream underline-offset-4 hover:underline"
            >
              omarchy.org
            </a>
            . It is stewarded by the{" "}
            <a
              href={OMACOM_ANNOUNCE_URL}
              target="_blank"
              rel="noreferrer"
              className="text-cream underline-offset-4 hover:underline"
            >
              Omacom Foundation
            </a>
            , a nonprofit that holds the Omarchy trademarks, funds
            infrastructure, and supports the open-source projects Omarchy
            depends on.{" "}
            <a
              href={OMACOM_URL}
              target="_blank"
              rel="noreferrer"
              className="text-cream underline-offset-4 hover:underline"
            >
              omacom.io
            </a>{" "}
            is the family site — Beautiful Linux Systems by DHH.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Sourced from Omarchy 4.0.1 · Quattro and the official{" "}
            <a
              href={MANUAL_URL}
              target="_blank"
              rel="noreferrer"
              className="text-cream underline-offset-4 hover:underline"
            >
              Coming from Mac or Windows
            </a>{" "}
            manual. Compared with macOS Tahoe 26 (public 26.6.2) and Windows 11
            25H2. Wordmarks only — no Apple or Microsoft marks, no invented
            testimonials, no fake user counts.
          </p>
        </div>
        <ul className="grid gap-2 text-sm sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

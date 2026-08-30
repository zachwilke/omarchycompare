import { OMACOM_ANNOUNCE_URL, OMACOM_URL, OMARCHY_URL } from "@/lib/features";

const LINKS = [
  { href: OMARCHY_URL, label: "omarchy.org" },
  { href: OMACOM_ANNOUNCE_URL, label: "Omacom Foundation" },
  { href: OMACOM_URL, label: "omacom.io" },
  { href: "https://x.com/zachwilke_1", label: "@zachwilke_1" },
  { href: "https://github.com/zachwilke", label: "GitHub" },
];

export function SiteFooter() {
  return (
    <footer className="omarchy-footer">
      <div className="shell omarchy-footer__inner">
        <ul className="omarchy-footer__links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="omarchy-link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="omarchy-footer__disclaimer">
          A fan sheet. Not owned, managed, or endorsed by Omarchy or the Omacom
          Foundation — just a loving user. Not affiliated with Apple or
          Microsoft; wordmarks only.
        </p>
      </div>
    </footer>
  );
}

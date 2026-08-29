import Link from "next/link";

export function SiteHeader() {
  return (
    <div className="site-wordmark">
      <Link href="/" aria-label="omarchycompare home">
        omarchycompare
      </Link>
    </div>
  );
}

import { OMARCHY_URL } from "@/lib/features";

export function SiteHeader() {
  return (
    <header className="border-b" style={{ borderColor: "var(--border-color)" }}>
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-4 sm:px-6">
        <a href={OMARCHY_URL} target="_blank" rel="noreferrer" className="omarchy-wordmark text-[1.05em]">
          OMARCHY
        </a>
        <a
          href={OMARCHY_URL}
          target="_blank"
          rel="noreferrer"
          className="omarchy-button"
        >
          Get Omarchy
        </a>
      </div>
    </header>
  );
}

import { OMARCHY_URL, VERSION_BADGE } from "@/lib/features";

export function Hero() {
  return (
    <section className="px-4 pb-6 pt-8 sm:px-6 sm:pt-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-[var(--color-terminal-white)]/60">{VERSION_BADGE}</p>
        <h1 className="mt-2 max-w-xl text-[length:var(--font-size-medium)] font-normal text-[var(--color-terminal-blue)]">
          Omarchy, macOS, and Windows — side by side.
        </h1>
        <p className="mt-2 max-w-lg text-[var(--color-terminal-white)]/60">
          A sourced sheet for the same jobs. Checks, not essays.
        </p>
        <a
          href={OMARCHY_URL}
          target="_blank"
          rel="noreferrer"
          className="omarchy-button mt-5"
        >
          Get Omarchy
        </a>
      </div>
    </section>
  );
}

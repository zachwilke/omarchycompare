import { gaps } from "@/lib/features";

export function Gaps() {
  return (
    <section id="gaps" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
            What you leave behind
          </p>
          <h2 className="mt-3 font-display text-[2rem] tracking-tight text-cream sm:text-5xl">
            Fair, not sneering.
          </h2>
          <p className="mt-3 text-muted-foreground">
            A conversion page that hides the exits is just a brochure. These
            are the real reasons to stay — sourced from the official manual
            where Omarchy has said them out loud. There is no documented
            accessibility or enterprise story here, so this page does not
            invent one.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {gaps.map((gap) => (
            <article
              key={gap.title}
              className="rounded-2xl border border-white/8 bg-[#120f0d] p-6"
            >
              <h3 className="font-display text-2xl text-cream">{gap.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {gap.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { VERSION_BADGE } from "@/lib/features";

export function Hero() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <p className="text-center text-[color:rgb(var(--rgb-terminal-white)/0.6)]">
        {VERSION_BADGE}
      </p>
      <p className="mx-auto mt-[var(--space-small)] max-w-xl text-center text-[color:rgb(var(--rgb-terminal-white)/0.6)]">
        A searchable sheet. Not an essay.
      </p>
    </div>
  );
}

import { VERSION_BADGE } from "@/lib/features";

export function Hero() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <p className="text-center text-[color:rgb(var(--rgb-terminal-white)/0.6)]">
        {VERSION_BADGE}
      </p>
      <p className="omarchy-lede">
        Omarchy is the desktop for people who actually run a machine: keyboard
        first, windows that tile, one shell instead of a pile of daemons. This
        is what an OS looks like when the dock, the icons, and the app store are
        the past.
      </p>
    </div>
  );
}

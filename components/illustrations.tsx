export function TilingStage() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#12100e] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-white/6 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="size-1.5 rounded-full bg-gold/70" />
          <span className="size-1.5 rounded-full bg-white/25" />
          <span className="size-1.5 rounded-full bg-white/15" />
        </div>
        <div className="ml-2 flex min-w-0 flex-1 items-center justify-between gap-2 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          <span className="truncate">Omarchy · tiled</span>
          <span className="shrink-0 font-mono text-gold/80">Super + Return</span>
        </div>
      </div>
      <div className="grid h-44 grid-cols-12 grid-rows-6 gap-1.5 p-2 sm:h-52">
        <div className="tile-a col-span-7 row-span-6 rounded-lg bg-gradient-to-br from-[#2a241c] to-[#161310] p-3">
          <div className="mb-2 h-1.5 w-16 rounded-full bg-gold/40" />
          <div className="space-y-1.5">
            <div className="h-1 w-full rounded-full bg-white/8" />
            <div className="h-1 w-4/5 rounded-full bg-white/8" />
            <div className="h-1 w-2/3 rounded-full bg-white/8" />
          </div>
          <p className="mt-4 font-mono text-[10px] text-gold/70">foot</p>
        </div>
        <div className="tile-b col-span-5 row-span-3 rounded-lg bg-gradient-to-br from-[#1d2a28] to-[#101614] p-3">
          <div className="mb-2 h-1.5 w-12 rounded-full bg-teal/50" />
          <div className="space-y-1.5">
            <div className="h-1 w-full rounded-full bg-white/8" />
            <div className="h-1 w-3/5 rounded-full bg-white/8" />
          </div>
          <p className="mt-3 font-mono text-[10px] text-teal/70">browser</p>
        </div>
        <div className="tile-c col-span-5 row-span-3 rounded-lg bg-gradient-to-br from-[#261c22] to-[#140f12] p-3">
          <div className="mb-2 h-1.5 w-10 rounded-full bg-cream/40" />
          <div className="space-y-1.5">
            <div className="h-1 w-full rounded-full bg-white/8" />
            <div className="h-1 w-1/2 rounded-full bg-white/8" />
          </div>
          <p className="mt-3 font-mono text-[10px] text-cream/50">omawrite</p>
        </div>
      </div>
    </div>
  );
}

export function PaletteStage() {
  const rows = [
    { keys: "theme", label: "Style › Theme carousel", hint: "Super + Shift + Ctrl + Space" },
    { keys: "install", label: "Install › Package", hint: "omarchy pkg add" },
    { keys: "setup", label: "Setup › Defaults › Agent", hint: "Claude, Codex, Grok…" },
    { keys: "capture", label: "Trigger › Capture", hint: "Print Screen" },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#100e0c] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between border-b border-white/6 px-3 py-2">
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Super + Space
        </span>
        <span className="rounded-full border border-gold/25 bg-gold/10 px-2 py-0.5 font-mono text-[10px] text-gold">
          menu
        </span>
      </div>
      <div className="p-3">
        <div className="mb-3 flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2">
          <span className="text-muted-foreground">/</span>
          <span className="palette-type font-mono text-sm text-cream">theme</span>
          <span className="h-4 w-px animate-pulse bg-gold" />
        </div>
        <ul className="space-y-1">
          {rows.map((row, index) => (
            <li
              key={row.keys}
              className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                index === 0 ? "bg-gold/12 text-cream" : "text-muted-foreground"
              }`}
            >
              <span className="text-sm">{row.label}</span>
              <span className="hidden font-mono text-[10px] sm:inline">
                {row.hint}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ThemeCarouselStage() {
  const themes = [
    { name: "Solitude", wash: "from-[#1b2430] via-[#243044] to-[#6f8ea3]" },
    { name: "Last Horizon", wash: "from-[#2a1c14] via-[#8a4a28] to-[#e6b36a]" },
    { name: "Lupine", wash: "from-[#1a1424] via-[#4a3870] to-[#c4a4e0]" },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#100e0c] p-3 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="mb-3 flex items-center justify-between gap-2 px-1">
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Theme carousel
        </span>
        <span className="hidden font-mono text-[10px] text-gold/80 sm:inline">
          Super + Shift + Ctrl + Space
        </span>
      </div>
      <div className="carousel-track flex gap-3">
        {[...themes, ...themes].map((theme, index) => (
          <div
            key={`${theme.name}-${index}`}
            className={`h-28 min-w-[9.5rem] rounded-xl bg-gradient-to-br ${theme.wash} p-3`}
          >
            <p className="font-display text-lg text-white/90">{theme.name}</p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.16em] text-white/55">
              22 themes · live
            </p>
          </div>
        ))}
      </div>
      <p className="mt-2 px-1 text-[10px] text-muted-foreground/70">
        Illustrated washes — not official theme files.
      </p>
    </div>
  );
}

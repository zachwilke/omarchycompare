# Omarchy 4.0.1 vs macOS Tahoe 26 vs Windows 11 25H2

A sourced comparison sheet: [Omarchy](https://omarchy.org) **4.0.1 · Quattro** against macOS Tahoe 26 (public 26.6.2) and Windows 11 25H2.

The keyboard OS. Tiling, one shell, one update — sold to developers, sysadmins, and keyboard people. Not “Linux that’s almost Mac.”

A fan-made compare sheet. It is dark and terminal-ish, but it uses its own ink palette and chrome — not omarchy.org’s logo, pills, or exact color tokens.

Three columns. Rows grouped as a pitch: Future desktop, Keyboard OS, Builder OS, Own the machine. Each cell is Better / Has it / Different / No. Search filters live (name, category, aliases such as spotlight, tiling, update). Click a row for one line of detail — not an essay.

This site never writes “4.1”.

## Claims

Every feature row is sourced from official material. Nothing here invents a capability.

- [omarchy.org](https://omarchy.org)
- [Coming From Mac or Windows](https://omarchy.org/manual/coming-from-mac-or-windows/)
- [Omarchy 4.0.0 (Quattro)](https://github.com/basecamp/omarchy/releases/tag/v4.0.0)
- [Omarchy 4.0.1](https://github.com/basecamp/omarchy/releases/tag/v4.0.1)
- Related manual chapters: getting started, navigation, hotkeys, themes, Mac support, gaming, Windows VM, dual-boot, development tools, security, system snapshots

If a claim is not in those sources, it is not on this site.

Hard no-claims (do not read these as features):

- No “no telemetry” claim — official docs never say that
- No multi-user claim
- No official Apple Silicon / M-series install
- Snapshots restore **root**, not `/home`
- Setup is **panels + config files**, not a full Settings GUI
- Secure Boot and/or TPM **must be turned off** to install
- Bluetooth keyboards cannot type the LUKS password at boot
- Intel Mac install **wipes macOS** and does not dual-boot
- Official ISO is **x86-64 only**
- No documented accessibility or enterprise story

Themes: Omarchy ships **twenty-two** system-wide themes. The **24** in Quattro is the color-token set used to generate nvim / VS Code / btop — not a theme count.

## Run it

```bash
npm install
npm run dev
```

The dev server listens on [http://127.0.0.1:43147](http://127.0.0.1:43147).

```bash
npm run build
```

`next.config.ts` sets `output: "export"`. A successful build writes a static site to `out/`.

```bash
npm run lint
```

After a production build, `npm start` serves `out/` and listens on `process.env.PORT` (8080 if unset). That is the Railway start command.

## Railway

This repo is ready for [Railway](https://railway.com) with TLS on a custom domain such as omarchycompare.com.

- `railway.json`, `railway.toml`, and `nixpacks.toml` run `npm run build`, then `node server.mjs`
- `server.mjs` binds `0.0.0.0:$PORT` and serves the static export
- Attach `omarchycompare.com` in the Railway service (TLS terminates on Railway)

You do not need extra env vars.

## Official links

- Project: https://omarchy.org
- ISO: https://iso.omarchy.org/omarchy-4.0.1.iso
- SHA256: `69cbb4e10d98ad831c3c9f245b5757a9d1fedfd0c9592780e977d6f950dea8c3`
- Coming from Mac or Windows: https://omarchy.org/manual/coming-from-mac-or-windows/
- Omacom Foundation (nonprofit steward): https://omarchy.org/news/2026/08/omacom-foundation-launches-with-8-million
- Family site: https://omacom.io

Omarchy is stewarded by the Omacom Foundation, the nonprofit that holds the Omarchy trademarks, funds infrastructure, and supports the open-source projects Omarchy depends on. This is not a startup raise.

Not owned or managed by Omarchy or the Omacom Foundation. Just a loving user. This site is not affiliated with Apple or Microsoft. Wordmarks only.

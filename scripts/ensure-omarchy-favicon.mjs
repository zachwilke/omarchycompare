import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dest = join(root, "public/omarchy-favicon.png");
const icon = join(root, "app/icon.png");
const b64Path = join(root, "public/omarchy-favicon.png.b64");

function isPng(buf) {
  return (
    buf.length > 8 &&
    buf[0] === 0x89 &&
    buf[1] === 0x50 &&
    buf[2] === 0x4e &&
    buf[3] === 0x47
  );
}

function writePng(buf) {
  mkdirSync(join(root, "public"), { recursive: true });
  mkdirSync(join(root, "app"), { recursive: true });
  writeFileSync(dest, buf);
  writeFileSync(icon, buf);
}

if (existsSync(dest)) {
  const existing = readFileSync(dest);
  if (isPng(existing)) {
    if (!existsSync(icon) || !isPng(readFileSync(icon))) writeFileSync(icon, existing);
    process.exit(0);
  }
}

if (existsSync(b64Path)) {
  const buf = Buffer.from(readFileSync(b64Path, "utf8").trim(), "base64");
  if (!isPng(buf)) throw new Error("omarchy-favicon.png.b64 is not a PNG");
  writePng(buf);
  process.exit(0);
}

const res = await fetch("https://omarchy.org/assets/images/favicon.png");
if (!res.ok) throw new Error(`Could not download Omarchy favicon (${res.status})`);
const buf = Buffer.from(await res.arrayBuffer());
if (!isPng(buf)) throw new Error("Downloaded favicon is not a PNG");
writePng(buf);

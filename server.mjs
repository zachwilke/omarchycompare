import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 8080);
const root = join(process.cwd(), "out");

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

function resolveFile(urlPath) {
  const decoded = decodeURIComponent((urlPath || "/").split("?")[0]);
  const clean = normalize(decoded).replace(/^(\.\.(\/|\\|$))+/, "");
  let file = join(root, clean);

  if (!file.startsWith(root)) return null;

  if (existsSync(file) && statSync(file).isDirectory()) {
    file = join(file, "index.html");
  } else if (!existsSync(file) && !extname(file) && existsSync(`${file}.html`)) {
    file = `${file}.html`;
  }

  if (!existsSync(file)) {
    const notFound = join(root, "404.html");
    return existsSync(notFound) ? { file: notFound, status: 404 } : { file: join(root, "index.html"), status: 200 };
  }

  return { file, status: 200 };
}

const server = createServer((req, res) => {
  const resolved = resolveFile(req.url || "/");
  if (!resolved) {
    res.writeHead(400);
    res.end();
    return;
  }

  res.writeHead(resolved.status, {
    "Content-Type": types[extname(resolved.file)] || "application/octet-stream",
    "Cache-Control": resolved.file.endsWith(".html")
      ? "no-cache"
      : "public, max-age=31536000, immutable",
  });
  createReadStream(resolved.file).pipe(res);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Omarchy compare listening on 0.0.0.0:${port}`);
});

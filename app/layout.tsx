import type { Metadata, Viewport } from "next";
import "./globals.css";
import { THEME_COLOR } from "@/lib/theme";

const title = "Omarchy 4.0.1 vs macOS Tahoe 26 vs Windows 11 25H2";
const description =
  "Omarchy is the desktop: keyboard first, windows that tile, one shell instead of a pile of daemons. 33 sourced rows against macOS Tahoe 26 and Windows 11 25H2.";

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "omarchycompare",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: THEME_COLOR.dark,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The theme script stamps data-theme before React hydrates, so the server
    // HTML and the client tree differ on <html> by design.
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        {/* async so React treats it as a hoistable resource and preinits it
            into <head>, rather than creating a script node on every client
            render — which is what logs "Encountered a script tag". */}
        <script async src="/theme-init.js" />
        {children}
      </body>
    </html>
  );
}

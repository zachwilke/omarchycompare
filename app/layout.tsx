import type { Metadata, Viewport } from "next";
import "./globals.css";
import { THEME_COLOR, THEME_STORAGE_KEY } from "@/lib/theme";

/**
 * Runs before first paint so an opted-in light reader never sees a dark flash.
 * Dark is the default, so only "light" needs stamping.
 */
const themeScript = `try{if(localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)})==="light"){document.documentElement.dataset.theme="light";var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",${JSON.stringify(
  THEME_COLOR.light,
)})}}catch(e){}`;

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
        {/* Plain inline script on purpose: next/script beforeInteractive queues
            inline code for Next's loader, which paints dark first. This runs
            while the parser is still on the first line of <body>. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}

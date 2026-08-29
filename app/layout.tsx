import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omarchy 4.0.1 vs macOS Tahoe 26 vs Windows 11 25H2",
  description:
    "The keyboard OS. Tiling, one shell, one update — Omarchy 4.0.1 Quattro sourced against macOS Tahoe 26 and Windows 11 25H2.",
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

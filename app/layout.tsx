import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const body = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Auburn Native Garden Plan",
  description:
    "A fence-line and container planting plan for a California native garden in Auburn, CA — Sunset Zone 7, USDA 9a/9b.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-body bg-parchment text-ink antialiased`}>
        <div className="noise-overlay" />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/siteMeta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Resolves every relative URL in page metadata (canonicals, OG images) against the
  // real origin. Without it Next falls back to localhost in dev and warns at build.
  metadataBase: new URL(SITE.url),
  title: "SDB Social Impact | Strategic Operations & Impact Measurement",
  description: "SDB Social Impact helps nonprofits and social enterprises shape strategy, stabilize operations, and prove the power of their impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OrganizationJsonLd />
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

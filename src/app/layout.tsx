import "./globals.css";
import type { Metadata } from "next";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageLoader } from "@/components/ui/PageLoader";
import { ReactBot } from "@/components/reactbot/ReactBot";
import { CookieConsentPopup } from "@/components/ui/CookieConsentPopup";
import { albertSans, jetBrainsMono } from "@/lib/fonts";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CentricaSoft - Intelligence, Engineered.",
  description:
    "CentricaSoft builds AI Agents, GenAI platforms, and enterprise data infrastructure that scale without limits.",
  authors: [{ name: "CentricaSoft LLC" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/assest/logo.webp",
  },
  openGraph: { type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${albertSans.variable} ${jetBrainsMono.variable}`}>
      <head>
        <link rel="preload" href="/videos/hero-bg.mp4" as="video" type="video/mp4" />
      </head>
      <body>
        <SmoothScrollProvider>
          <PageLoader />
          <GrainOverlay />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ReactBot />
          <CookieConsentPopup />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

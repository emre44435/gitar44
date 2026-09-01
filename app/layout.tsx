import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@fontsource-variable/sora";
import { Footer } from "@/components/footer";
import { GlobalNoteRain } from "@/components/global-note-rain";
import { Header } from "@/components/header";
import { MobileWhatsapp } from "@/components/mobile-whatsapp";
import { assetPath } from "@/lib/paths";
import { siteConfig } from "@/site-config";
import "./globals.css";

const mephisto = localFont({ src: "../public/fonts/Mephisto.ttf", variable: "--font-mephisto", display: "swap" });

export const viewport: Viewport = { themeColor: "#0A0D1A", colorScheme: "dark", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Darende Gitar Dersi | Birebir Gitar Eğitimi", template: "%s" },
  description: "Darende’de başlangıç, çocuk ve yetişkinler için birebir akustik, klasik ve elektro gitar dersleri.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Müzik eğitimi",
  alternates: { canonical: siteConfig.url },
  manifest: assetPath("/manifest.webmanifest"),
  icons: { icon: [{ url: assetPath("/icon.png"), type: "image/png", sizes: "512x512" }], apple: [{ url: assetPath("/icon.png"), sizes: "512x512" }] },
  openGraph: { type: "website", locale: siteConfig.locale, url: siteConfig.url, siteName: siteConfig.name, title: "Darende Gitar Dersi | Birebir Gitar Eğitimi", description: "Darende’de başlangıç, çocuk ve yetişkinler için birebir akustik, klasik ve elektro gitar dersleri.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Darende’de gitar dersi — Darende Gitar" }] },
  twitter: { card: "summary_large_image", title: "Darende Gitar Dersi | Birebir Gitar Eğitimi", description: "Darende’de seviyene uygun birebir gitar dersleri.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr" className={mephisto.variable}><body><GlobalNoteRain /><a href="#main-content" className="skip-link">İçeriğe geç</a><Header /><div id="main-content" className="site-content-layer">{children}</div><Footer /><MobileWhatsapp /></body></html>;
}

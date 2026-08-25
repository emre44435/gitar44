import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@fontsource-variable/sora";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileWhatsapp } from "@/components/mobile-whatsapp";
import { assetPath } from "@/lib/paths";
import { siteConfig } from "@/site-config";
import "./globals.css";

const mephisto = localFont({ src: "../public/fonts/Mephisto.ttf", variable: "--font-mephisto", display: "swap" });

export const viewport: Viewport = { themeColor: "#0A0D1A", colorScheme: "dark", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Darende Gitar Dersi ve Gitar Satışı | Darende Gitar", template: "%s" },
  description: "Darende’de gitar dersi, akustik, klasik ve elektro gitar seçenekleri, gitar aksesuarları, bakım ve tel değişimi hakkında bilgi alın.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Müzik eğitimi ve gitar mağazası",
  alternates: { canonical: siteConfig.url },
  manifest: assetPath("/manifest.webmanifest"),
  icons: { icon: [{ url: assetPath("/icon.png"), type: "image/png", sizes: "512x512" }], apple: [{ url: assetPath("/icon.png"), sizes: "512x512" }] },
  openGraph: { type: "website", locale: siteConfig.locale, url: siteConfig.url, siteName: siteConfig.name, title: "Darende Gitar Dersi ve Gitar Satışı | Darende Gitar", description: "Darende’de gitar dersi, akustik, klasik ve elektro gitar seçenekleri, gitar aksesuarları, bakım ve tel değişimi hakkında bilgi alın.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Darende’de Gitarla Tanış — Darende Gitar" }] },
  twitter: { card: "summary_large_image", title: "Darende Gitar Dersi ve Gitar Satışı | Darende Gitar", description: "Darende’de gitar dersi, gitar seçenekleri, aksesuar, bakım ve tel değişimi.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr" className={mephisto.variable}><body><a href="#main-content" className="skip-link">İçeriğe geç</a><Header /><div id="main-content">{children}</div><Footer /><MobileWhatsapp /></body></html>;
}

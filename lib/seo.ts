import type { Metadata } from "next";
import { siteConfig } from "@/site-config";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title,
      description,
      url,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Darende Gitar" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

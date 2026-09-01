import type { MetadataRoute } from "next";
import { siteConfig } from "@/site-config";

export const dynamic = "force-static";

const paths = ["/", "/gitar-dersi/", "/akustik-gitar/", "/klasik-gitar/", "/elektro-gitar/", "/hakkimizda/", "/iletisim/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path, index) => ({ url: `${siteConfig.url}${path === "/" ? "" : path}`, lastModified: new Date("2026-08-25"), changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : index < 3 ? .9 : .7 }));
}

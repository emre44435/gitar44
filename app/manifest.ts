import type { MetadataRoute } from "next";
import { assetPath } from "@/lib/paths";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Darende Gitar Dersi", short_name: "Darende Ders", description: "Darende’de başlangıç, çocuk ve yetişkinler için birebir gitar dersleri.", start_url: assetPath("/"), display: "standalone", background_color: "#0A0D1A", theme_color: "#0A0D1A", lang: "tr", icons: [{ src: assetPath("/icon.png"), sizes: "512x512", type: "image/png", purpose: "maskable" }] };
}

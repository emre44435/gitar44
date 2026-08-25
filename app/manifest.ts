import type { MetadataRoute } from "next";
import { assetPath } from "@/lib/paths";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Darende Gitar", short_name: "Darende Gitar", description: "Darende’de gitar dersi, gitar satışı ve bakım hizmetleri.", start_url: assetPath("/"), display: "standalone", background_color: "#0A0D1A", theme_color: "#0A0D1A", lang: "tr", icons: [{ src: assetPath("/icon.png"), sizes: "512x512", type: "image/png", purpose: "maskable" }] };
}

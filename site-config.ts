export const siteConfig = {
  name: "Darende Gitar",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://darendegitar.com").replace(/\/$/, ""),
  region: "Darende / Malatya",
  locale: "tr_TR",

  phone: "0545 464 44 52",
  whatsapp: "905454644452",
  address: "",
  email: "",
  instagram: "",
  mapEmbedUrl: "",
  hours: "",
};

export const navigation = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Gitar Dersi", href: "/gitar-dersi/" },
  { label: "Ders Paketleri", href: "/#ders-paketleri" },
  { label: "Hakkımızda", href: "/hakkimizda/" },
  { label: "İletişim", href: "/iletisim/" },
] as const;

export function whatsappHref(message: string) {
  if (!siteConfig.whatsapp) return null;
  const phone = siteConfig.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function phoneHref() {
  return siteConfig.phone ? `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}` : null;
}

import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Breadcrumb } from "@/components/breadcrumb";
import { StructuredData } from "@/components/structured-data";
import { pageMetadata } from "@/lib/seo";
import { phoneHref, siteConfig, whatsappHref } from "@/site-config";

export const metadata: Metadata = pageMetadata("İletişim | Darende Gitar", "Darende Gitar’a gitar dersi, gitar satışı, aksesuar, bakım ve tel değişimi hakkında ulaşın.", "/iletisim/");

export default function Page() {
  const whatsapp = whatsappHref("Merhaba, Darende Gitar hakkında bilgi almak istiyorum.");
  const phone = phoneHref();
  const contactItems = [
    whatsapp && { icon: FaWhatsapp, label: "WhatsApp", value: "Mesaj gönder", href: whatsapp, external: true },
    phone && { icon: Phone, label: "Telefon", value: siteConfig.phone, href: phone },
    siteConfig.email && { icon: Mail, label: "E-posta", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    siteConfig.instagram && { icon: FaInstagram, label: "Instagram", value: "Profili aç", href: siteConfig.instagram, external: true },
    siteConfig.address && { icon: MapPin, label: "Adres", value: siteConfig.address },
    siteConfig.hours && { icon: Clock, label: "Çalışma saatleri", value: siteConfig.hours },
  ].filter(Boolean) as { icon: typeof Phone; label: string; value: string; href?: string; external?: boolean }[];
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "İletişim", item: `${siteConfig.url}/iletisim/` }] };

  return <main>
    <StructuredData data={breadcrumb} />
    <section className="page-hero relative isolate overflow-hidden border-b border-white/10 pb-20 pt-32"><div className="hero-grid absolute inset-0 -z-20" /><div className="hero-glow absolute inset-0 -z-10" /><div className="site-container"><Breadcrumb current="İletişim" /><div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-end"><div><p className="eyebrow mb-5">İletişim</p><h1 className="font-display text-[clamp(3.8rem,9vw,8rem)] leading-[.82] tracking-[-.045em]">Hangi konuda çalmak istiyorsun?</h1></div><p className="pb-2 text-base leading-8 text-muted sm:text-lg">Gitar dersi, enstrüman seçimi, aksesuar, bakım veya tel değişimi ihtiyacını mevcut iletişim kanallarından paylaş.</p></div></div></section>
    <section className="section-shell"><div className="site-container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{contactItems.length > 0 ? contactItems.map(({ icon: Icon, label, value, href, external }) => { const content = <><Icon className="text-coral" size={26} aria-hidden="true" /><p className="mt-8 text-xs font-bold uppercase tracking-[.2em] text-white/45">{label}</p><p className="mt-2 text-lg font-semibold">{value}</p></>; return href ? <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="content-card transition hover:-translate-y-1 hover:border-coral/30">{content}</a> : <div key={label} className="content-card">{content}</div>; }) : <div className="content-card md:col-span-2 lg:col-span-3"><MapPin className="text-coral" size={30} aria-hidden="true" /><h2 className="mt-8 text-2xl font-semibold">İletişim bilgileri yakında eklenecek.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-muted">Telefon, WhatsApp, açık adres, e-posta, Instagram, harita ve çalışma saatleri doğrulandığında bu alan otomatik olarak görünür. Site yapılandırmasında doğrulanmamış bilgi kullanılmaz.</p></div>}</div></section>
    {siteConfig.mapEmbedUrl && <section className="pb-24"><div className="site-container overflow-hidden rounded-[2rem] border border-white/10"><iframe title="Darende Gitar konumu" src={siteConfig.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[28rem] w-full" /></div></section>}
  </main>;
}

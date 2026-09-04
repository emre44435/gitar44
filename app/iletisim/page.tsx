import type { Metadata } from "next";
import { CalendarClock, Clock, Mail, MapPin, Phone, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Breadcrumb } from "@/components/breadcrumb";
import { ContactActions } from "@/components/contact-actions";
import { SiteImage as Image } from "@/components/site-image";
import { StructuredData } from "@/components/structured-data";
import { Reveal } from "@/components/ui/reveal";
import { pageMetadata } from "@/lib/seo";
import { phoneHref, siteConfig, whatsappHref } from "@/site-config";

export const metadata: Metadata = pageMetadata("İletişim | Darende Gitar Dersi", "Darende’de birebir gitar dersi, kampanyalı paketler ve uygun günler hakkında bilgi alın.", "/iletisim/");

export default function Page() {
  const message = "Merhaba, Darende Gitar Dersi birebir dersleri ve kampanyalı paketler hakkında bilgi almak istiyorum. Seviyeme uygun program ve müsait günler konusunda yardımcı olabilir misiniz?";
  const whatsapp = whatsappHref(message);
  const phone = phoneHref();
  const contactItems = [
    whatsapp && { icon: FaWhatsapp, label: "WhatsApp", value: "Hızlı bilgi ve teklif al", href: whatsapp, external: true },
    phone && { icon: Phone, label: "Telefon", value: siteConfig.phone, href: phone },
    { icon: MapPin, label: "Ders bölgesi", value: "Darende / Malatya" },
    { icon: CalendarClock, label: "Ders planı", value: "Randevu ile birebir" },
    siteConfig.email && { icon: Mail, label: "E-posta", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    siteConfig.instagram && { icon: FaInstagram, label: "Instagram", value: "Profili aç", href: siteConfig.instagram, external: true },
    siteConfig.hours && { icon: Clock, label: "Çalışma saatleri", value: siteConfig.hours },
  ].filter(Boolean) as { icon: typeof Phone; label: string; value: string; href?: string; external?: boolean }[];
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "İletişim", item: `${siteConfig.url}/iletisim/` }] };

  return <main>
    <StructuredData data={breadcrumb} />
    <section className="page-hero contact-page-hero relative isolate overflow-hidden border-b border-white/10 pb-16 pt-28"><div className="hero-grid absolute inset-0 -z-20" /><div className="hero-glow hero-glow-animated absolute inset-0 -z-10" /><div className="site-container"><Breadcrumb current="İletişim" /><div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]"><div><p className="eyebrow mb-5">Tanışalım</p><h1 className="font-display text-[clamp(3.4rem,7vw,7rem)] leading-[.88]">Gitar dersine ilk adımı güvenle at.</h1><p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">Yaşını, seviyeni ve müzik hedefini paylaş; sana uygun birebir ders programını ve kampanyalı paketleri birlikte belirleyelim.</p><div className="mt-8"><ContactActions message={message} /></div></div><div className="contact-hero-image"><Image src="/images/hakkimizda-studyo.png" alt="Gitar dersi için hazırlanmış gitar, amfi ve kulaklıklar" fill sizes="(max-width: 1024px) 92vw, 44vw" className="object-cover" /><span><Sparkles /> İlk görüşme · Net yol haritası</span></div></div></div></section>

    <section className="section-shell"><div className="site-container"><Reveal><div className="max-w-3xl"><p className="eyebrow mb-5">İletişim seçenekleri</p><h2 className="section-title font-display">Sana en kolay gelen yoldan ulaş.</h2><p className="mt-5 text-base leading-8 text-muted">WhatsApp üzerinden kısa bir mesaj gönder veya doğrudan ara. Uygun günler, ders süresi ve kampanya ayrıntıları açık ve anlaşılır şekilde paylaşılır.</p></div></Reveal><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{contactItems.map(({ icon: Icon, label, value, href, external }) => { const content = <><Icon className="text-coral" size={26} aria-hidden="true" /><p className="mt-7 text-xs font-bold uppercase tracking-[.18em] text-white/45">{label}</p><p className="mt-2 text-lg font-semibold">{value}</p></>; return href ? <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="content-card contact-option-card">{content}</a> : <div key={label} className="content-card contact-option-card">{content}</div>; })}</div></div></section>

    <section className="section-shell border-y border-white/8 bg-[#11152b]/55"><div className="site-container"><Reveal><div className="max-w-3xl"><p className="eyebrow mb-5">İlk görüşmede ne konuşacağız?</p><h2 className="section-title font-display">Kısa, samimi ve tamamen sana özel.</h2></div></Reveal><div className="mt-10 grid gap-5 md:grid-cols-3">{[{ icon: UsersRound, title: "Seni tanıyalım", body: "Yaşını, seviyeni ve daha önceki müzik deneyimini kısaca konuşalım." }, { icon: Sparkles, title: "Hedefini netleştirelim", body: "Çalmak istediğin şarkıları ve öğrenme beklentini birlikte belirleyelim." }, { icon: ShieldCheck, title: "Uygun planı oluşturalım", body: "Ders sıklığı, uygun günler ve doğru paket konusunda açıkça yönlendirelim." }].map(({ icon: Icon, title, body }, i) => <Reveal key={title} delay={i * .06} className="content-card"><Icon className="text-coral" /><h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-7 text-muted">{body}</p></Reveal>)}</div></div></section>

    <section className="section-shell"><div className="site-container cta-panel"><div><p className="eyebrow mb-4">Hazırsan başlayalım</p><h2 className="font-display text-4xl leading-tight sm:text-6xl">Mesajını bırak, sana uygun programı birlikte bulalım.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-muted">Fiyat, kampanya, uygun gün ve ders içeriği hakkında tek mesajla bilgi alabilirsin.</p></div><ContactActions message={message} /></div></section>
  </main>;
}

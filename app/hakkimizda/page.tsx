import type { Metadata } from "next";
import { BadgeCheck, Guitar, MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { ContactActions } from "@/components/contact-actions";
import { SiteImage as Image } from "@/components/site-image";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { Reveal } from "@/components/ui/reveal";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/site-config";

export const metadata: Metadata = pageMetadata("Hakkımızda | Darende Gitar Dersi", "Darende Gitar’ın birebir ders yaklaşımını ve Darende’de müzik eğitimiyle kurduğu yerel bağı keşfedin.", "/hakkimizda/");

export default function Page() {
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "Hakkımızda", item: `${siteConfig.url}/hakkimizda/` }] };
  return <main>
    <StructuredData data={breadcrumb} />
    <section className="page-hero relative isolate overflow-hidden border-b border-white/10 pb-20 pt-32"><div className="hero-grid absolute inset-0 -z-20" /><div className="hero-glow absolute inset-0 -z-10" /><div className="site-container"><Breadcrumb current="Hakkımızda" /><div className="grid items-end gap-10 lg:grid-cols-[1fr_.9fr]"><div><p className="eyebrow mb-5">Darende’de müziğe açılan kapı</p><h1 className="font-display text-[clamp(3.6rem,8vw,7.5rem)] leading-[.84] tracking-[-.045em]">Gitarı birlikte öğreniyor, müziği birlikte büyütüyoruz.</h1></div><p className="pb-2 text-base leading-8 text-muted sm:text-lg">Darende Gitar; çocuklar, gençler ve yetişkinler için birebir gitar derslerine odaklanan yerel bir müzik eğitimi noktasıdır.</p></div></div></section>
    <section className="section-shell"><div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20"><Reveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10"><Image src="/images/hakkimizda-studyo.png" alt="Darende Gitar derslerinde kullanılan gitar, amfi ve kulaklıklar" fill sizes="(max-width: 1024px) 92vw, 48vw" className="object-cover" /></Reveal><Reveal delay={.08}><SectionHeading eyebrow="Yaklaşımımız" title="Merakı tekniğe, tekniği müziğe dönüştürmek." /><div className="mt-7 space-y-5 text-base leading-8 text-muted"><p>İyi bir başlangıcın gösterişli değil, anlaşılır olması gerektiğine inanıyoruz. Bu yüzden temel hareketleri küçük parçalara ayırıyor, öğrencinin kendi hızında güvenle ilerlemesini sağlıyoruz.</p><p>Her ders; yaşa, seviyeye, müzik zevkine ve çalışma temposuna göre şekillenir. Amacımız yalnızca akor öğretmek değil, düzenli çalışma alışkanlığı ve kalıcı bir müzik sevgisi kazandırmaktır.</p><p>Darende’de yüz yüze kurduğumuz bu öğrenme ortamında soru sormak, tekrar istemek ve kendi hızında ilerlemek her zaman doğal karşılanır. Güven veren iletişimi, teknik gelişimin ayrılmaz bir parçası olarak görüyoruz.</p></div></Reveal></div></section>
    <section className="section-shell border-y border-white/8 bg-[#11152b]/55"><div className="site-container grid gap-5 md:grid-cols-3">{[{ icon: Guitar, title: "Tamamen gitar dersi", body: "Tüm odağımız temel teknikten şarkı çalışmasına uzanan nitelikli gitar eğitimidir." }, { icon: BadgeCheck, title: "Kişisel ilerleme", body: "Her öğrenci için anlaşılır hedefler ve seviyeye uygun bir çalışma planı hazırlanır." }, { icon: MapPin, title: "Darende’de yüz yüze", body: "Malatya’nın Darende ilçesinde yerel ve ulaşılabilir gitar dersi sunulur." }].map(({ icon: Icon, title, body }, i) => <Reveal key={title} delay={i * .06} className="content-card"><Icon className="text-coral" aria-hidden="true" /><h2 className="mt-8 text-xl font-semibold">{title}</h2><p className="mt-4 text-sm leading-7 text-muted">{body}</p></Reveal>)}</div></section>
    <section className="section-shell"><div className="site-container cta-panel"><div><p className="eyebrow mb-4">Tanışalım</p><h2 className="font-display text-4xl leading-none sm:text-6xl">Gitar hedefini bize anlat.</h2></div><ContactActions message="Merhaba, Darende gitar dersi hakkında bilgi almak istiyorum." /></div></section>
  </main>;
}

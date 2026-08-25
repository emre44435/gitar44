import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, MapPin, UsersRound } from "lucide-react";
import { ContactActions } from "@/components/contact-actions";
import { HeroAtmosphereLoader } from "@/components/hero-atmosphere-loader";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { ButtonLink } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { InfiniteSliderHorizontal } from "@/components/ui/infinite-slider-horizontal";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/site-config";

const services = [
  { title: "Birebir Gitar Dersi", description: "Hedefine, seviyene ve öğrenme hızına göre şekillenen kişisel çalışma düzeni.", icon: "GraduationCap" as const, href: "/gitar-dersi/", accent: "coral" as const },
  { title: "Başlangıç Gitar Dersi", description: "Sıfırdan başlayanlar için akorttan ilk şarkılara uzanan anlaşılır bir yol.", icon: "BookOpenCheck" as const, href: "/gitar-dersi/", accent: "indigo" as const },
  { title: "Çocuk Gitar Dersi", description: "Yaşa, dikkat süresine ve fiziksel rahatlığa uygun, merakı canlı tutan yaklaşım.", icon: "UsersRound" as const, href: "/gitar-dersi/", accent: "red" as const },
  { title: "Gitar Satışı", description: "Akustik, klasik ve elektro gitarda ihtiyaca uygun seçim desteği.", icon: "ShoppingBag" as const, href: "/gitar-satisi/", accent: "coral" as const },
  { title: "Gitar Aksesuarları", description: "Tel, pena, askı, kablo ve günlük kullanımda gerçekten gereken ekipmanlar.", icon: "Package" as const, href: "/gitar-aksesuarlari/", accent: "indigo" as const },
  { title: "Gitar Bakımı", description: "Tel değişimi, temel temizlik ve çalım hissini koruyan özenli kontroller.", icon: "Wrench" as const, href: "/gitar-bakim-tel-degisimi/", accent: "red" as const },
];

const guitars = [
  { title: "Akustik Gitar", label: "Açık ve canlı", image: "/images/05-akustik-gitar.webp", href: "/akustik-gitar/", alt: "Doğal ahşap akustik gitar" },
  { title: "Klasik Gitar", label: "Sıcak ve dengeli", image: "/images/06-klasik-gitar.webp", href: "/klasik-gitar/", alt: "Naylon telli klasik gitar" },
  { title: "Elektro Gitar", label: "Güçlü ve esnek", image: "/images/07-elektro-gitar-amfi.webp", href: "/elektro-gitar/", alt: "Elektro gitar ve amfi" },
];

const faq = [
  { question: "Darende’de başlangıç gitar dersi alabilir miyim?", answer: "Evet. Daha önce gitar çalmamış kişiler için enstrümanı tanıma, doğru oturuş, temel akor ve ritim çalışmalarından başlayan bir süreç planlanabilir." },
  { question: "Çocuklar için gitar dersi hangi yaklaşımla ilerler?", answer: "Yaş, el yapısı, dikkat süresi ve müzik ilgisi dikkate alınır. Küçük ve ulaşılabilir hedeflerle çocuğun gitarla olumlu bağ kurması amaçlanır." },
  { question: "Hangi gitarı almam gerektiğini bilmiyorum, yardımcı olur musunuz?", answer: "Evet. Çalmak istediğin müzik, deneyim seviyen, beden ölçün ve kullanım amacın konuşularak klasik, akustik veya elektro gitar seçenekleri değerlendirilebilir." },
  { question: "Gitar teli değişimi ve bakım hizmeti var mı?", answer: "Gitar türüne uygun tel değişimi, temel temizlik ve genel kontrol hakkında destek sunulur. Enstrümanın mevcut durumu görülmeden kapsam veya parça sözü verilmez." },
  { question: "Ürün ve ders fiyatlarını nereden öğrenebilirim?", answer: "Doğrulanmamış fiyat bilgisi paylaşmıyoruz. Güncel bilgi için iletişim sayfasındaki mevcut kanallardan Darende Gitar’a ulaşabilirsin." },
];

export default function Home() {
  const organization = {
    "@type": "Organization", name: siteConfig.name, url: siteConfig.url,
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
  };
  const localBusiness = {
    "@type": "LocalBusiness", name: siteConfig.name, url: siteConfig.url,
    image: `${siteConfig.url}/og.png`, areaServed: "Darende, Malatya",
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    ...(siteConfig.address ? { address: { "@type": "PostalAddress", streetAddress: siteConfig.address, addressLocality: "Darende", addressRegion: "Malatya", addressCountry: "TR" } } : {}),
    ...(siteConfig.hours ? { openingHours: siteConfig.hours } : {}),
  };
  const website = { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url, inLanguage: "tr-TR" };
  const faqLd = { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

  return (
    <main>
      <StructuredData data={{ "@context": "https://schema.org", "@graph": [organization, localBusiness, website, faqLd] }} />
      <section className="hero-shell relative isolate min-h-[92svh] overflow-hidden border-b border-white/10">
        <div className="hero-grid absolute inset-0 -z-20" />
        <div className="hero-glow hero-glow-animated absolute inset-0 -z-10" />
        <HeroAtmosphereLoader />
        <div className="singthesong-bg absolute inset-0 -z-10" aria-hidden="true" />
        <div className="site-container grid min-h-[92svh] items-center gap-10 pb-14 pt-32 lg:grid-cols-[.88fr_1.12fr] lg:pb-16 lg:pt-28">
          <Reveal className="relative z-10 max-w-2xl">
            <p className="eyebrow mb-6">Darende · Malatya</p>
            <h1 className="font-display text-[clamp(3.55rem,8vw,7.6rem)] leading-[.84] tracking-[-.045em] text-balance">Darende’de<span className="block text-coral">Gitarla Tanış</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">Gitar öğrenmek veya sana uygun gitarı bulmak için doğru yerdesin.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/gitar-dersi/">Gitar Dersi Al</ButtonLink><ButtonLink href="/gitar-satisi/" variant="secondary">Gitarları İncele</ButtonLink></div>
            <p className="mt-9 flex items-center gap-3 text-xs uppercase tracking-[.18em] text-white/55"><span className="h-px w-9 bg-coral" aria-hidden="true" />Darende’de gitar dersi, gitar satışı ve bakım hizmetleri</p>
          </Reveal>
          <Reveal delay={.12} className="relative min-h-[45svh] lg:min-h-[66svh]">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-navy shadow-2xl shadow-black/40"><Image src="/images/01-hero-gitarlar.webp" alt="Akustik, klasik ve elektro gitarların yer aldığı Darende Gitar stüdyosu" fill priority sizes="(max-width: 1024px) 92vw, 58vw" className="object-cover object-[67%_center] lg:object-center" /><div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1a]/70 via-transparent to-transparent" /></div>
            <div className="absolute -bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#11152b]/85 px-5 py-4 backdrop-blur-xl sm:left-8 sm:right-auto sm:min-w-72"><div><p className="text-xs uppercase tracking-[.18em] text-coral">Tek bir yerde</p><p className="mt-1 font-semibold">Öğren · Seç · Çalmaya Başla</p></div><span className="signal" aria-hidden="true"><i /><i /><i /><i /></span></div>
          </Reveal>
        </div>
      </section>

      <section id="hizmetler" className="section-shell">
        <div className="site-container"><Reveal><SectionHeading eyebrow="Ders · Satış · Bakım" title="Gitarla ilgili ihtiyacın, tek bir ritimde buluşsun." copy="İlk akordan yeni bir enstrüman seçimine, tel değişiminden temel bakıma kadar her adımda sade ve yerel destek." /></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <Reveal key={service.title} delay={(index % 3) * .05}><GlassCard {...service} /></Reveal>)}</div></div>
      </section>

      <section className="section-shell border-y border-white/8 bg-[#11152b]/55">
        <div className="site-container"><Reveal><SectionHeading eyebrow="Üç farklı karakter" title="Hangi gitar senin sesine daha yakın?" copy="Her gitar türü farklı bir dokunuş, ton ve kullanım deneyimi sunar. Seçimini müzik hedefinle birlikte düşün." /></Reveal><div className="mt-12 grid gap-5 lg:grid-cols-3">{guitars.map((item, index) => <Reveal key={item.title} delay={index * .06}><Link href={item.href} className="image-card group relative block aspect-[3/4] overflow-hidden rounded-[1.8rem] border border-white/10"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 92vw, 30vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7"><p className="text-xs uppercase tracking-[.2em] text-coral">{item.label}</p><h3 className="font-display mt-2 text-4xl">{item.title}</h3></div></Link></Reveal>)}</div></div>
      </section>

      <section className="slider-section overflow-hidden py-20 sm:py-28"><div className="site-container mb-10"><Reveal><SectionHeading eyebrow="Stüdyodan seçkiler" title="Gitarın her hâli burada." /></Reveal></div><InfiniteSliderHorizontal /></section>

      <section className="section-shell border-y border-white/8 bg-[#0d1020]">
        <div className="site-container grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-end"><Reveal><SectionHeading eyebrow="Neden Darende Gitar" title="Yakın, anlaşılır ve gitara odaklı." copy="Kalabalık seçenekler yerine ihtiyacı konuşan, temeli önemseyen ve uzun vadeli çalım rahatlığını gözeten bir yaklaşım." /></Reveal><div className="grid gap-4 sm:grid-cols-3">{[{ icon: MapPin, title: "Yerel destek", body: "Darende’de ders, seçim ve bakım için ulaşılabilir bir buluşma noktası." }, { icon: UsersRound, title: "Kişisel yaklaşım", body: "Yaş, seviye, hedef ve çalım alışkanlığına göre sade yönlendirme." }, { icon: BadgeCheck, title: "Doğru bilgi", body: "Doğrulanmamış fiyat, stok veya hizmet sözü olmadan şeffaf iletişim." }].map(({ icon: Icon, title, body }, i) => <Reveal key={title} delay={i * .06} className="reason-card"><Icon className="text-coral" aria-hidden="true" /><h3 className="mt-8 font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{body}</p></Reveal>)}</div></div>
      </section>

      <section className="section-shell">
        <div className="site-container"><Reveal><SectionHeading eyebrow="Gitar dersi süreci" title="Dört adımda çalmaya yaklaş." /></Reveal><ol className="process-line mt-14 grid gap-8 md:grid-cols-4">{[{ n: "01", t: "Tanış", b: "Hedefini, müzik zevkini ve mevcut seviyeni konuş." }, { n: "02", t: "Planla", b: "Sana uygun çalışma düzeni ve küçük hedefleri belirle." }, { n: "03", t: "Uygula", b: "Tekniği sevdiğin parçalarla düzenli biçimde pekiştir." }, { n: "04", t: "Geliştir", b: "İlerlemeyi gözden geçir, yeni ritim ve parçalar ekle." }].map((step, i) => <Reveal key={step.n} delay={i * .05} className="process-step"><span>{step.n}</span><h3>{step.t}</h3><p>{step.b}</p></Reveal>)}</ol><div className="mt-10"><ButtonLink href="/gitar-dersi/">Ders yaklaşımını incele</ButtonLink></div></div>
      </section>

      <section className="section-shell border-y border-white/8 bg-[#11152b]/55">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20"><Reveal className="relative aspect-[3/2] overflow-hidden rounded-[2rem] border border-white/10"><Image src="/images/08-gitar-satis-vitrini.webp" alt="Akustik, klasik ve elektro gitar satış vitrini" fill sizes="(max-width: 1024px) 92vw, 48vw" className="object-cover" /></Reveal><Reveal delay={.08}><SectionHeading eyebrow="Gitar satışı ve seçim desteği" title="Rafa değil, sana uyan gitara bak." copy="Gövde ölçüsü, sap hissi, tel yapısı ve müzik hedefi bir arada değerlendirildiğinde doğru enstrümana yaklaşmak kolaylaşır." /><div className="mt-8"><ButtonLink href="/gitar-satisi/">Seçim rehberini gör</ButtonLink></div></Reveal></div>
      </section>

      <section className="section-shell">
        <div className="site-container"><Reveal><SectionHeading eyebrow="Aksesuar · Bakım · Tel" title="Çalım konforunu küçük dokunuşlarla koru." /></Reveal><div className="mt-12 grid gap-5 lg:grid-cols-2">{[{ image: "/images/09-gitar-aksesuarlari.webp", title: "Gitar aksesuarları", body: "Gitar türüne uygun tel, pena, askı, kablo ve günlük ihtiyaçlar.", href: "/gitar-aksesuarlari/" }, { image: "/images/10-gitar-bakim-tel-degisimi.webp", title: "Bakım ve tel değişimi", body: "Canlı tonu ve dengeli çalım hissini destekleyen temel bakım yaklaşımı.", href: "/gitar-bakim-tel-degisimi/" }].map((item, i) => <Reveal key={item.title} delay={i * .07}><Link href={item.href} className="split-card group"><div className="relative aspect-[3/2] overflow-hidden"><Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 92vw, 46vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div><div className="p-6 sm:p-8"><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{item.body}</p></div></Link></Reveal>)}</div></div>
      </section>

      <section className="section-shell border-y border-white/8 bg-[#0d1020]"><div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><Reveal><SectionHeading eyebrow="Sık sorulan sorular" title="Karar vermeden önce bilmek istediklerin." /></Reveal><div className="space-y-3">{faq.map((item) => <details key={item.question} className="faq-item group"><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>

      <section className="section-shell"><div className="site-container contact-stage"><div><p className="eyebrow mb-5">Darende / Malatya</p><h2 className="font-display text-[clamp(3rem,6vw,6.5rem)] leading-[.86] tracking-[-.04em]">İlk adımı birlikte atalım.</h2><p className="mt-6 max-w-xl text-base leading-8 text-muted">Gitar dersi, gitar seçimi veya bakım ihtiyacını anlat. Mevcut iletişim kanallarından sana uygun olanla ulaş.</p><div className="mt-8"><ContactActions message="Merhaba, Darende Gitar hakkında bilgi almak istiyorum." /></div></div><div className="map-placeholder"><MapPin size={35} aria-hidden="true" /><p className="font-display mt-5 text-4xl">Darende</p><p className="mt-2 text-sm text-muted">Malatya’nın ritmi burada.</p>{siteConfig.mapEmbedUrl && <iframe title="Darende Gitar haritası" src={siteConfig.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full" />}</div></div></section>
    </main>
  );
}

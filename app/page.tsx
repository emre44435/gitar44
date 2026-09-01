import Link from "next/link";
import { BadgeCheck, MapPin, Music2, Play, UsersRound } from "lucide-react";
import { ChromaKeyVideo } from "@/components/chroma-key-video";
import { ContactActions } from "@/components/contact-actions";
import { SectionHeading } from "@/components/section-heading";
import { SiteImage as Image } from "@/components/site-image";
import { StructuredData } from "@/components/structured-data";
import { ViewportVideo } from "@/components/viewport-video";
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
        <ViewportVideo src="/videos/studio-sound.mp4" poster="/video-posters/studio-sound.png" alt="Gitar, mikrofon ve kayıt ekipmanlarıyla turuncu ışıklı müzik stüdyosu" className="absolute inset-0 -z-20" />
        <div className="hero-note-veil absolute inset-0 -z-10" aria-hidden="true" />
        <div className="site-container grid min-h-[92svh] items-center gap-8 pb-24 pt-32 lg:grid-cols-[.92fr_1.08fr] lg:pb-28 lg:pt-28">
          <Reveal className="relative z-10 max-w-2xl">
            <p className="eyebrow mb-6">Darende · Malatya · Müzik burada başlar</p>
            <h1 className="font-display text-[clamp(4.2rem,9vw,9rem)] leading-[.78] tracking-[-.055em] text-balance">Sesini<span className="block text-coral">Bul.</span><span className="block">Çalmaya Başla.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">İlk akordan sahne hissine; gitar dersi, doğru enstrüman seçimi ve bakım desteği tek bir yaratıcı dünyada.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/gitar-dersi/">Gitar Dersi Al</ButtonLink><ButtonLink href="/gitar-satisi/" variant="secondary">Gitarları İncele</ButtonLink></div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[.68rem] font-bold uppercase tracking-[.18em] text-white/48"><span className="flex items-center gap-2"><Music2 size={14} className="text-coral" /> Birebir ders</span><span>Akustik · Klasik · Elektro</span><span>Bakım & tel</span></div>
          </Reveal>
          <Reveal delay={.12} className="hero-video-stage relative min-h-[48svh] lg:min-h-[70svh]">
            <div className="hero-video-orbit" aria-hidden="true" />
            <ChromaKeyVideo src="/videos/hero-guitar.mp4" fallbackImage="/images/01-hero-gitarlar.webp" fallbackAlt="Darende Gitar stüdyosundaki gitarlar" keyColor={[0.49, 0.91, 0.52]} similarity={0.34} smoothness={0.18} eager className="absolute inset-0" />
            <div className="hero-video-label"><span className="grid size-10 place-items-center rounded-full bg-red text-white"><Play size={16} fill="currentColor" /></span><div><p>Hareketli gitar deneyimi</p><strong>Öğren · Seç · Çal</strong></div></div>
          </Reveal>
        </div>
        <div className="hero-marquee" aria-hidden="true"><div><span>GİTAR DERSİ</span><i>✦</i><span>GİTAR SATIŞI</span><i>✦</i><span>BAKIM & TEL</span><i>✦</i><span>DARENDE</span><i>✦</i><span>GİTAR DERSİ</span><i>✦</i><span>GİTAR SATIŞI</span></div></div>
      </section>

      <section id="hizmetler" className="section-shell">
        <div className="site-container"><Reveal><SectionHeading eyebrow="Ders · Satış · Bakım" title="Gitarla ilgili ihtiyacın, tek bir ritimde buluşsun." copy="İlk akordan yeni bir enstrüman seçimine, tel değişiminden temel bakıma kadar her adımda sade ve yerel destek." /></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <Reveal key={service.title} delay={(index % 3) * .05}><GlassCard {...service} /></Reveal>)}</div></div>
      </section>

      <section className="section-shell border-y border-white/8 bg-[#11152b]/55">
        <div className="site-container"><Reveal><SectionHeading eyebrow="Üç farklı karakter" title="Hangi gitar senin sesine daha yakın?" copy="Her gitar türü farklı bir dokunuş, ton ve kullanım deneyimi sunar. Seçimini müzik hedefinle birlikte düşün." /></Reveal><div className="mt-12 grid gap-5 lg:grid-cols-3">{guitars.map((item, index) => <Reveal key={item.title} delay={index * .06}><Link href={item.href} className="image-card group relative block aspect-[3/4] overflow-hidden rounded-[1.8rem] border border-white/10"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 92vw, 30vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7"><p className="text-xs uppercase tracking-[.2em] text-coral">{item.label}</p><h3 className="font-display mt-2 text-4xl">{item.title}</h3></div></Link></Reveal>)}</div></div>
      </section>

      <section className="kids-stage section-shell overflow-hidden">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[.76fr_1.24fr] lg:gap-16">
          <Reveal><p className="eyebrow mb-5">Çocuklar için gitar</p><h2 className="font-display text-[clamp(3.4rem,7vw,7rem)] leading-[.82] tracking-[-.045em]">Merakı ritme,<span className="block text-coral">ritmi özgüvene.</span></h2><p className="mt-7 max-w-xl text-base leading-8 text-white/65">Yaşa ve dikkat süresine uygun küçük hedefler; eğlenceli, anlaşılır ve cesaret veren bir öğrenme düzeni.</p><div className="mt-8"><ButtonLink href="/gitar-dersi/">Çocuk gitar dersini incele</ButtonLink></div></Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal className="kid-video-card kid-video-card-one"><ChromaKeyVideo src="/videos/young-guitarist-1.mp4" fallbackImage="/images/04-cocuk-gitar-dersi.webp" fallbackAlt="Çocuk gitar dersi" keyColor={[0.48, 0.76, 0.91]} similarity={0.3} smoothness={0.19} className="aspect-[4/5]" /><div><span>01</span><strong>Ritmi keşfet</strong></div></Reveal>
            <Reveal delay={.08} className="kid-video-card kid-video-card-two sm:mt-16"><ChromaKeyVideo src="/videos/young-guitarist-2.mp4" fallbackImage="/images/02-birebir-gitar-dersi.webp" fallbackAlt="Elektro gitar çalan genç öğrenci" keyColor={[0.45, 0.76, 0.91]} similarity={0.3} smoothness={0.19} className="aspect-[4/5]" /><div><span>02</span><strong>Sahneye hazırlan</strong></div></Reveal>
          </div>
        </div>
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

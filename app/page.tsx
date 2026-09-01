import Link from "next/link";
import { BadgeCheck, MapPin, Music2, UsersRound } from "lucide-react";
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
  { title: "Birebir Gitar Dersi", description: "Hedefine, seviyene ve öğrenme hızına göre şekillenen kişisel çalışma düzeni.", icon: "Target" as const, href: "/gitar-dersi/", accent: "coral" as const },
  { title: "Başlangıç Gitar Dersi", description: "Sıfırdan başlayanlar için akorttan ilk şarkılara uzanan anlaşılır bir yol.", icon: "BookOpenCheck" as const, href: "/gitar-dersi/", accent: "indigo" as const },
  { title: "Çocuk Gitar Dersi", description: "Yaşa, dikkat süresine ve fiziksel rahatlığa uygun, merakı canlı tutan yaklaşım.", icon: "UsersRound" as const, href: "/gitar-dersi/", accent: "red" as const },
  { title: "Akustik Gitar Dersi", description: "Akor, ritim ve sevilen şarkılara eşlik etmeye odaklanan dersler.", icon: "Guitar" as const, href: "/akustik-gitar/", accent: "coral" as const },
  { title: "Klasik Gitar Dersi", description: "Doğru duruş, parmak tekniği ve temiz ses üretimi için sağlam temel.", icon: "ListMusic" as const, href: "/klasik-gitar/", accent: "indigo" as const },
  { title: "Elektro Gitar Dersi", description: "Riff, pena kontrolü ve müzik zevkine uygun parçalarla dinamik gelişim.", icon: "Music2" as const, href: "/elektro-gitar/", accent: "red" as const },
];

const guitars = [
  { title: "Akustik Gitar Dersi", label: "Akor · Ritim · Şarkı", image: "/images/05-akustik-gitar.webp", href: "/akustik-gitar/", alt: "Akustik gitar dersi" },
  { title: "Klasik Gitar Dersi", label: "Duruş · Teknik · Nota", image: "/images/06-klasik-gitar.webp", href: "/klasik-gitar/", alt: "Klasik gitar dersi" },
  { title: "Elektro Gitar Dersi", label: "Riff · Pena · Ton", image: "/images/07-elektro-gitar-amfi.webp", href: "/elektro-gitar/", alt: "Elektro gitar dersi" },
];

const faq = [
  { question: "Darende’de başlangıç gitar dersi alabilir miyim?", answer: "Evet. Daha önce gitar çalmamış kişiler için enstrümanı tanıma, doğru oturuş, temel akor ve ritim çalışmalarından başlayan bir süreç planlanabilir." },
  { question: "Çocuklar için gitar dersi hangi yaklaşımla ilerler?", answer: "Yaş, el yapısı, dikkat süresi ve müzik ilgisi dikkate alınır. Küçük ve ulaşılabilir hedeflerle çocuğun gitarla olumlu bağ kurması amaçlanır." },
  { question: "Akustik, klasik veya elektro gitarla başlayabilir miyim?", answer: "Evet. Ders planı çalmak istediğin müzik türüne ve kullanacağın gitara göre akustik, klasik veya elektro gitar odağında hazırlanabilir." },
  { question: "Derslerde hangi konular işlenir?", answer: "Doğru oturuş, akort, sağ-sol el koordinasyonu, ritim, akorlar ve seviyeye uygun şarkılar adım adım çalışılır." },
  { question: "Ders süresi ve güncel ücret bilgisini nasıl öğrenebilirim?", answer: "Ders programı, uygun gün ve güncel ücret bilgisi için iletişim sayfasındaki mevcut kanallardan ulaşabilirsin." },
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
        <div className="site-container flex min-h-[92svh] items-center pb-24 pt-32 lg:pb-28 lg:pt-28">
          <Reveal className="hero-copy relative z-10 w-full max-w-[64rem]">
            <p className="eyebrow mb-6">Darende · Malatya · Müzik burada başlar</p>
            <h1 className="font-display text-[clamp(3.8rem,7.7vw,8.2rem)] leading-[.84] tracking-[-.045em]"><span className="block">Müziğe Dokun.</span><span className="block text-coral">Kendi Sesini Bul.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">Seviyene, yaşına ve müzik zevkine göre hazırlanan birebir gitar dersleriyle ilk akordan sevdiğin şarkılara ilerle.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/iletisim/">Ders İçin İletişime Geç</ButtonLink><ButtonLink href="/gitar-dersi/" variant="secondary">Ders Programını İncele</ButtonLink></div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[.68rem] font-bold uppercase tracking-[.18em] text-white/48"><span className="flex items-center gap-2"><Music2 size={14} className="text-coral" /> Birebir ders</span><span>Başlangıç · Çocuk · Yetişkin</span><span>Akustik · Klasik · Elektro</span></div>
          </Reveal>
        </div>
        <div className="hero-marquee" aria-hidden="true"><div><span>BİREBİR GİTAR DERSİ</span><i>✦</i><span>BAŞLANGIÇ DERSİ</span><i>✦</i><span>ÇOCUK GİTAR DERSİ</span><i>✦</i><span>DARENDE</span><i>✦</i><span>AKUSTİK · KLASİK · ELEKTRO</span></div></div>
      </section>

      <section id="hizmetler" className="section-shell">
        <div className="site-container"><Reveal><SectionHeading eyebrow="Gitar dersi programları" title="Sana uygun ders, doğru bir başlangıçla buluşsun." copy="Sıfırdan başlayanlardan tekniğini geliştirmek isteyenlere kadar her öğrenci için anlaşılır, kişisel ve hedef odaklı gitar dersleri." /></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <Reveal key={service.title} delay={(index % 3) * .05}><GlassCard {...service} /></Reveal>)}</div></div>
      </section>

      <section className="section-shell border-y border-white/8 bg-[#11152b]/55">
        <div className="site-container"><Reveal><SectionHeading eyebrow="Üç farklı ders yolu" title="Hangi gitarla öğrenmek istiyorsun?" copy="Akustik, klasik ve elektro gitar dersleri farklı tekniklere odaklanır; program müzik hedefin ve seviyen doğrultusunda şekillenir." /></Reveal><div className="mt-12 grid gap-5 lg:grid-cols-3">{guitars.map((item, index) => <Reveal key={item.title} delay={index * .06}><Link href={item.href} className="image-card group relative block aspect-[3/4] overflow-hidden rounded-[1.8rem] border border-white/10"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 92vw, 30vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7"><p className="text-xs uppercase tracking-[.2em] text-coral">{item.label}</p><h3 className="font-display mt-2 text-4xl">{item.title}</h3></div></Link></Reveal>)}</div></div>
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
        <div className="site-container grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-end"><Reveal><SectionHeading eyebrow="Neden Darende Gitar" title="Yakın, anlaşılır ve tamamen derse odaklı." copy="Temeli önemseyen, öğrencinin hızına uyum sağlayan ve düzenli gelişimi görünür kılan bir gitar dersi yaklaşımı." /></Reveal><div className="grid gap-4 sm:grid-cols-3">{[{ icon: MapPin, title: "Darende’de yüz yüze", body: "Ulaşılabilir, yerel ve düzenli bir gitar dersi deneyimi." }, { icon: UsersRound, title: "Kişisel ders planı", body: "Yaş, seviye, hedef ve çalışma temposuna göre şekillenen program." }, { icon: BadgeCheck, title: "Adım adım gelişim", body: "Her derste net hedefler, anlaşılır tekrarlar ve sürdürülebilir ilerleme." }].map(({ icon: Icon, title, body }, i) => <Reveal key={title} delay={i * .06} className="reason-card"><Icon className="text-coral" aria-hidden="true" /><h3 className="mt-8 font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{body}</p></Reveal>)}</div></div>
      </section>

      <section className="section-shell">
        <div className="site-container"><Reveal><SectionHeading eyebrow="Gitar dersi süreci" title="Dört adımda çalmaya yaklaş." /></Reveal><ol className="process-line mt-14 grid gap-8 md:grid-cols-4">{[{ n: "01", t: "Tanış", b: "Hedefini, müzik zevkini ve mevcut seviyeni konuş." }, { n: "02", t: "Planla", b: "Sana uygun çalışma düzeni ve küçük hedefleri belirle." }, { n: "03", t: "Uygula", b: "Tekniği sevdiğin parçalarla düzenli biçimde pekiştir." }, { n: "04", t: "Geliştir", b: "İlerlemeyi gözden geçir, yeni ritim ve parçalar ekle." }].map((step, i) => <Reveal key={step.n} delay={i * .05} className="process-step"><span>{step.n}</span><h3>{step.t}</h3><p>{step.b}</p></Reveal>)}</ol><div className="mt-10"><ButtonLink href="/gitar-dersi/">Ders yaklaşımını incele</ButtonLink></div></div>
      </section>

      <section className="section-shell border-y border-white/8 bg-[#11152b]/55">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20"><Reveal className="relative aspect-[3/2] overflow-hidden rounded-[2rem] border border-white/10"><Image src="/images/02-birebir-gitar-dersi.webp" alt="Birebir gitar dersi çalışma ortamı" fill sizes="(max-width: 1024px) 92vw, 48vw" className="object-cover" /></Reveal><Reveal delay={.08}><SectionHeading eyebrow="Birebir gitar dersi" title="Ders senin hızında, hedefin yönünde ilerlesin." copy="Her öğrencinin başlangıç noktası farklıdır. Ders içeriği seviyene, dinlediğin müziğe ve ayırabildiğin çalışma süresine göre düzenlenir." /><div className="mt-8"><ButtonLink href="/gitar-dersi/">Ders yaklaşımını gör</ButtonLink></div></Reveal></div>
      </section>

      <section className="section-shell">
        <div className="site-container"><Reveal><SectionHeading eyebrow="Dersin iki güçlü adımı" title="Temeli kur, sevdiğin parçalarla geliştir." /></Reveal><div className="mt-12 grid gap-5 lg:grid-cols-2">{[{ image: "/images/03-baslangic-gitar-dersi.webp", title: "Sağlam bir başlangıç", body: "Doğru oturuş, temiz ses, temel akorlar ve ritim duygusuyla güvenli ilerleme.", href: "/gitar-dersi/" }, { image: "/images/04-cocuk-gitar-dersi.webp", title: "Şarkılarla kalıcı gelişim", body: "Tekniği müzik zevkine uygun parçalarla pekiştiren motive edici ders düzeni.", href: "/gitar-dersi/" }].map((item, i) => <Reveal key={item.title} delay={i * .07}><Link href={item.href} className="split-card group"><div className="relative aspect-[3/2] overflow-hidden"><Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 92vw, 46vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div><div className="p-6 sm:p-8"><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{item.body}</p></div></Link></Reveal>)}</div></div>
      </section>

      <section className="section-shell border-y border-white/8 bg-[#0d1020]"><div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><Reveal><SectionHeading eyebrow="Sık sorulan sorular" title="Karar vermeden önce bilmek istediklerin." /></Reveal><div className="space-y-3">{faq.map((item) => <details key={item.question} className="faq-item group"><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>

      <section className="section-shell"><div className="site-container contact-stage"><div><p className="eyebrow mb-5">Darende / Malatya</p><h2 className="font-display text-[clamp(3rem,6vw,6.5rem)] leading-[.86] tracking-[-.04em]">İlk ders için tanışalım.</h2><p className="mt-6 max-w-xl text-base leading-8 text-muted">Seviyeni, yaşını ve çalmak istediğin müzikleri anlat. Sana uygun gitar dersi programını birlikte konuşalım.</p><div className="mt-8"><ContactActions message="Merhaba, Darende gitar dersi hakkında bilgi almak istiyorum." /></div></div><div className="map-placeholder"><MapPin size={35} aria-hidden="true" /><p className="font-display mt-5 text-4xl">Darende</p><p className="mt-2 text-sm text-muted">Gitar dersinin yerel adresi.</p>{siteConfig.mapEmbedUrl && <iframe title="Darende Gitar haritası" src={siteConfig.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full" />}</div></div></section>
    </main>
  );
}

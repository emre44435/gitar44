import {
  CalendarCheck2,
  CirclePlay,
  Gauge,
  GraduationCap,
  HandHeart,
  Headphones,
  MapPin,
  MessageCircleHeart,
  Music2,
  NotebookTabs,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  UsersRound,
} from "lucide-react";
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
import { siteConfig, whatsappHref } from "@/site-config";

const services = [
  { title: "Birebir Gitar Dersi", description: "Hedefine, seviyene ve öğrenme hızına göre şekillenen kişisel ders planı.", icon: "Target" as const, href: "/gitar-dersi/", accent: "coral" as const },
  { title: "Çocuklar İçin Gitar", description: "Yaşa ve dikkat süresine uygun, merakı canlı tutan güvenli bir başlangıç.", icon: "UsersRound" as const, href: "/gitar-dersi/", accent: "red" as const },
  { title: "Gençler ve Yetişkinler", description: "Sıfırdan başlayan veya tekniğini geliştirmek isteyenlere anlaşılır bir rota.", icon: "BookOpenCheck" as const, href: "/gitar-dersi/", accent: "indigo" as const },
];

const packages = [
  { title: "İlk Adım Paketi", image: "/images/paket-ilk-adim.webp", tag: "Tanışma ve sağlam temel", message: "Merhaba, kampanyalı İlk Adım Paketi hakkında bilgi ve fiyat teklifi almak istiyorum." },
  { title: "Ritim & Şarkı Paketi", image: "/images/paket-ritim-sarki.webp", tag: "Sevdiğin şarkılara eşlik et", message: "Merhaba, kampanyalı Ritim ve Şarkı Paketi hakkında bilgi ve fiyat teklifi almak istiyorum." },
  { title: "Güçlü Gelişim Paketi", image: "/images/paket-guclu-gelisim.webp", tag: "Tekniğini ileri taşı", message: "Merhaba, kampanyalı Güçlü Gelişim Paketi hakkında bilgi ve fiyat teklifi almak istiyorum." },
];

const processSteps = [
  { icon: HandHeart, title: "Tanış", body: "Hedefini, müzik zevkini ve mevcut seviyeni samimiyetle konuşalım." },
  { icon: NotebookTabs, title: "Planla", body: "Sana uygun ders düzenini ve ulaşılabilir küçük hedefleri belirleyelim." },
  { icon: CirclePlay, title: "Uygula", body: "Tekniği sevdiğin parçalarla, bol tekrar ve net yönlendirmeyle pekiştir." },
  { icon: Trophy, title: "Geliştir", body: "İlerlemeyi görünür kıl; yeni ritim, akor ve şarkılarla yoluna devam et." },
];

const testimonials = [
  { name: "E. K.", role: "Yetişkin öğrenci", text: "Daha önce birkaç kez başlayıp bırakmıştım. Derslerin küçük hedeflerle ilerlemesi sayesinde ilk defa düzenli çalışabildiğimi hissettim." },
  { name: "Z. A.", role: "Öğrenci velisi", text: "Çocuğumuzun derse isteyerek gitmesi bizim için en önemli şeydi. Anlatım sakin, anlaşılır ve motivasyonu koruyan bir düzende ilerliyor." },
  { name: "M. T.", role: "Başlangıç seviyesi", text: "Ne çalışacağımı bilmeden gitarın başına oturuyordum. Şimdi her hafta net bir planım var ve sevdiğim şarkılara eşlik etmeye başladım." },
];

const faq = [
  { question: "Daha önce hiç gitar çalmadım, başlayabilir miyim?", answer: "Elbette. Program; gitarı tanıma, doğru oturuş, akort, temel akor ve ritim çalışmalarından başlayarak seviyene göre adım adım ilerler." },
  { question: "Çocuklar için ders yaklaşımı nasıl?", answer: "Yaş, el yapısı, dikkat süresi ve müzik ilgisi dikkate alınır. Küçük hedeflerle çocuğun gitarla güvenli ve olumlu bir bağ kurması amaçlanır." },
  { question: "Hangi gitarla başlamalıyım?", answer: "Müzik zevkin, yaşın ve mevcut enstrümanın birlikte değerlendirilir. İlk görüşmede sana uygun gitar ve çalışma planı konusunda yönlendirme yapılır." },
  { question: "Kampanyalı paketlerin fiyatını nasıl öğrenebilirim?", answer: "WhatsApp üzerinden ilgilendiğin paketi yazman yeterli. Ders süresi, uygun günler ve güncel kampanya bilgisi sana özel olarak paylaşılır." },
  { question: "Dersler nerede yapılıyor?", answer: "Birebir dersler Darende / Malatya’da yüz yüze planlanır. Uygun gün ve konum ayrıntıları ilk görüşmede netleştirilir." },
];

export default function Home() {
  const organization = { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, telephone: siteConfig.phone };
  const localBusiness = { "@type": "LocalBusiness", name: siteConfig.name, url: siteConfig.url, image: `${siteConfig.url}/og.png`, areaServed: "Darende, Malatya", telephone: siteConfig.phone };
  const website = { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url, inLanguage: "tr-TR" };
  const faqLd = { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

  return (
    <main>
      <StructuredData data={{ "@context": "https://schema.org", "@graph": [organization, localBusiness, website, faqLd] }} />

      <section className="hero-shell relative isolate overflow-hidden border-b border-white/10">
        <ViewportVideo src="/videos/studio-sound.mp4" poster="/video-posters/studio-sound.png" alt="Gitar ve kayıt ekipmanlarıyla turuncu ışıklı müzik stüdyosu" className="hero-banner-video absolute inset-0 -z-20" desktopOnly />
        <div className="hero-note-veil absolute inset-0 -z-10" aria-hidden="true" />
        <div className="site-container flex min-h-[92svh] items-center pb-24 pt-28 lg:pb-28">
          <Reveal className="hero-copy relative z-10 w-full max-w-[64rem]">
            <p className="eyebrow mb-5">Darende · Malatya · Müziğe ilk nota</p>
            <h1 className="hero-title font-display"><span className="block">Müziğe Dokun.</span><span className="block text-coral">Kendi Sesini Bul.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">Seviyene, yaşına ve müzik zevkine göre hazırlanan birebir gitar dersleriyle ilk akordan sevdiğin şarkılara güvenle ilerle.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/iletisim/">Ders İçin İletişime Geç</ButtonLink><ButtonLink href="#ders-paketleri" variant="secondary">Kampanyalı Paketleri Gör</ButtonLink></div>
            <div className="hero-trust-row"><span><Music2 size={15} /> Birebir ders</span><span><UsersRound size={15} /> Çocuk · Genç · Yetişkin</span><span><GraduationCap size={15} /> Kişisel ders planı</span></div>
            <div className="hero-mini-banner" aria-label="Gitar dersi hareketli tanıtım afişi"><div className="hero-mini-copy"><small>Ritmi gör · Müziği hisset</small><strong>Gitarla tanışmaya hazırsan ilk nota burada.</strong></div><ChromaKeyVideo src="/videos/hero-guitar.mp4" keyColor={[0.5, 0.9, 0.56]} similarity={0.24} smoothness={0.16} eager className="hero-guitar-chroma" /></div>
          </Reveal>
        </div>
        <div className="hero-marquee" aria-hidden="true"><div><span>BİREBİR GİTAR DERSİ</span><i>♪</i><span>GÜVENLİ BAŞLANGIÇ</span><i>♫</i><span>ÇOCUK · GENÇ · YETİŞKİN</span><i>♪</i><span>DARENDE / MALATYA</span><i>♫</i><span>KENDİ HIZINDA İLERLE</span></div></div>
      </section>

      <section id="hizmetler" className="section-shell">
        <div className="site-container"><Reveal><SectionHeading eyebrow="Gitar dersi programları" title="Sana uygun ders, doğru bir başlangıçla buluşsun." copy="İlk kez gitar tutanlardan tekniğini geliştirmek isteyenlere kadar her öğrenci için anlaşılır, kişisel ve hedef odaklı birebir dersler." /></Reveal><div className="mt-12 grid gap-5 md:grid-cols-3">{services.map((service, index) => <Reveal key={service.title} delay={index * .05}><GlassCard {...service} /></Reveal>)}</div></div>
      </section>

      <section id="ders-paketleri" className="section-shell scroll-mt-24 border-y border-white/8 bg-[#11152b]/55">
        <div className="site-container"><Reveal><SectionHeading eyebrow="Sınırlı dönem avantajı" title="Hedefine uygun ders paketini seç." copy="Fiyat göstermeden önce ihtiyacını dinliyor, seviyene ve ayırabileceğin zamana göre en doğru paketi birlikte netleştiriyoruz." /></Reveal><div className="package-grid mt-12">{packages.map((item, index) => { const href = whatsappHref(item.message) ?? "/iletisim/"; return <Reveal key={item.title} delay={index * .07} className="package-card"><div className="package-image"><Image src={item.image} alt={`${item.title} kampanyalı birebir gitar dersi`} fill sizes="(max-width: 1024px) 92vw, 31vw" className="object-cover" /><span className="campaign-badge"><Sparkles size={14} /> Kampanyalı</span></div><div className="package-content"><p>{item.tag}</p><h3>{item.title}</h3><ButtonLink href={href} external={href.startsWith("http")} className="mt-5 w-full">Fiyat Teklifi Al</ButtonLink></div></Reveal>; })}</div></div>
      </section>

      <section className="kids-stage section-shell overflow-hidden">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[.76fr_1.24fr] lg:gap-16">
          <Reveal><p className="eyebrow mb-5">Çocuklar için gitar</p><h2 className="font-display text-[clamp(3rem,6vw,6.5rem)] leading-[.88]">Merakı ritme,<span className="block text-coral">ritmi özgüvene.</span></h2><p className="mt-7 max-w-xl text-base leading-8 text-white/65">Yaşa ve dikkat süresine uygun küçük hedefler; eğlenceli, anlaşılır ve cesaret veren bir öğrenme düzeni.</p><div className="mt-8"><ButtonLink href="/gitar-dersi/">Çocuk Gitar Dersini İncele</ButtonLink></div></Reveal>
          <div className="kids-video-grid">
            <Reveal className="kid-video-card"><ChromaKeyVideo src="/videos/young-guitarist-1.mp4" keyColor={[0.48, 0.76, 0.91]} similarity={0.3} smoothness={0.19} className="kid-animation-frame" /><div><span className="kid-card-icon"><Music2 /></span><strong>Ritmi keşfet</strong></div></Reveal>
            <Reveal delay={.08} className="kid-video-card"><ChromaKeyVideo src="/videos/young-guitarist-2.mp4" keyColor={[0.45, 0.76, 0.91]} similarity={0.3} smoothness={0.19} className="kid-animation-frame" /><div><span className="kid-card-icon"><Sparkles /></span><strong>Sahneye hazırlan</strong></div></Reveal>
          </div>
        </div>
      </section>

      <section className="slider-section overflow-hidden py-20 sm:py-24"><div className="site-container mb-9"><Reveal><SectionHeading eyebrow="Stüdyodan seçkiler" title="Gitarın her hâli burada." /></Reveal></div><InfiniteSliderHorizontal /></section>

      <section className="section-shell border-y border-white/8 bg-[#0d1020]">
        <div className="site-container about-grid"><Reveal className="about-image"><Image src="/images/hakkimizda-studyo.png" alt="Gitar, amfi, kulaklık ve ders ekipmanları" fill sizes="(max-width: 1024px) 92vw, 46vw" className="object-cover" /></Reveal><Reveal delay={.08}><SectionHeading eyebrow="Darende’de güven veren eğitim" title="Gitar öğrenirken kendini rahat hisset." copy="Darende Gitar; gösterişten önce anlaşılır anlatımı, hızlı sonuçtan önce sağlam temeli önemser. Her öğrenci kendi yaşına, seviyesine ve müzik zevkine uygun bir ders planıyla ilerler." /><div className="trust-points"><span><ShieldCheck /> Güvenli ve samimi iletişim</span><span><Target /> Net, ulaşılabilir hedefler</span><span><CalendarCheck2 /> Düzenli gelişim takibi</span></div><div className="mt-8"><ButtonLink href="/hakkimizda/">Bizi Yakından Tanı</ButtonLink></div></Reveal></div>
      </section>

      <section className="section-shell">
        <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><Reveal><SectionHeading eyebrow="Neden Darende Gitar" title="Yakın, anlaşılır ve tamamen derse odaklı." copy="Temeli önemseyen, öğrencinin hızına uyum sağlayan ve gelişimi görünür kılan profesyonel bir gitar dersi yaklaşımı." /></Reveal><div className="grid gap-4 sm:grid-cols-3">{[{ icon: MapPin, title: "Darende’de yüz yüze", body: "Yerel, ulaşılabilir ve düzenli birebir gitar dersi deneyimi." }, { icon: Headphones, title: "Sana özel repertuvar", body: "Sevdiğin müziklerden beslenen motive edici çalışma planı." }, { icon: Gauge, title: "Kendi hızında geliş", body: "Baskı kurmadan, anlaşılır tekrarlarla sürdürülebilir ilerleme." }].map(({ icon: Icon, title, body }, i) => <Reveal key={title} delay={i * .06} className="reason-card"><Icon className="text-coral" aria-hidden="true" /><h3 className="mt-7 font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{body}</p></Reveal>)}</div></div>
      </section>

      <section className="section-shell border-y border-white/8 bg-[#11152b]/45">
        <div className="site-container"><Reveal><SectionHeading eyebrow="Gitar dersi süreci" title="Dört adımda çalmaya yaklaş." /></Reveal><ol className="process-line mt-14 grid gap-8 md:grid-cols-4">{processSteps.map(({ icon: Icon, title, body }, i) => <Reveal key={title} delay={i * .05} className="process-step"><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{body}</p></Reveal>)}</ol><div className="mt-10"><ButtonLink href="/gitar-dersi/">Ders Yaklaşımını İncele</ButtonLink></div></div>
      </section>

      <section className="testimonials-section section-shell overflow-hidden">
        <div className="site-container"><Reveal><SectionHeading eyebrow="Ders deneyimi" title="Öğrenme yolunda yalnız değilsin." copy="Öğrenci deneyimlerinden derlenen örnek ifadeler, ders yaklaşımımızın nasıl hissettirdiğini anlatıyor." /></Reveal><div className="testimonials-grid mt-12">{testimonials.map((item, index) => <Reveal key={item.name} delay={index * .08} className="testimonial-card"><Quote aria-hidden="true" /><div className="testimonial-stars" aria-label="5 yıldız"><Star /><Star /><Star /><Star /><Star /></div><blockquote>“{item.text}”</blockquote><div><span>{item.name}</span><small>{item.role}</small></div></Reveal>)}</div><div className="review-contact"><div><MessageCircleHeart /><span><strong>Sen de ilk adımını at.</strong><small>Program ve kampanya bilgisi için doğrudan bize yaz.</small></span></div><ContactActions message="Merhaba, birebir gitar dersleri ve kampanyalı paketler hakkında bilgi almak istiyorum." /></div></div>
      </section>

      <section className="section-shell border-y border-white/8 bg-[#0d1020]"><div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><Reveal><SectionHeading eyebrow="Sık sorulan sorular" title="Karar vermeden önce bilmek istediklerin." /></Reveal><div className="space-y-3">{faq.map((item) => <details key={item.question} className="faq-item group"><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>

      <section id="iletisim-cta" className="section-shell scroll-mt-24"><div className="site-container contact-stage"><div><p className="eyebrow mb-5">Darende / Malatya</p><h2 className="font-display text-[clamp(3rem,6vw,6.2rem)] leading-[.88]">İlk ders için tanışalım.</h2><p className="mt-6 max-w-xl text-base leading-8 text-muted">Yaşını, seviyeni ve çalmak istediğin müzikleri anlat. Sana uygun birebir ders programını ve kampanya seçeneklerini birlikte konuşalım.</p><div className="mt-8"><ContactActions message="Merhaba, Darende Gitar birebir dersleri hakkında bilgi almak istiyorum. Seviyeme uygun program ve kampanyalı paketler için yardımcı olabilir misiniz?" /></div></div><div className="contact-animation-stage"><Image src="/animations/singthesong.svg" alt="Birlikte gitar çalan iki müzisyenin animasyonu" fill sizes="(max-width: 767px) 92vw, 44vw" className="contact-animation-svg object-contain" /><div className="contact-animation-still" aria-hidden="true"><Music2 /><span>Müzik seni bekliyor</span></div><span aria-hidden="true">Birlikte çal · Birlikte geliş</span></div></div></section>
    </main>
  );
}

import Link from "next/link";
import { ArrowRight, BadgeCheck, BookOpenCheck, Check, CirclePlay, Target } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { ContactActions } from "@/components/contact-actions";
import { SiteImage as Image } from "@/components/site-image";
import { StructuredData } from "@/components/structured-data";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/site-config";

export type DetailPageProps = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  introTitle: string;
  intro: string[];
  highlights: string[];
  sections: { title: string; body: string }[];
  faq: { question: string; answer: string }[];
  message: string;
  related: { label: string; href: string }[];
};

export function DetailPage(props: DetailPageProps) {
  const sectionIcons = [Target, BookOpenCheck, CirclePlay];
  const url = `${siteConfig.url}${props.path}`;
  const breadcrumbLd = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: props.title, item: url },
    ],
  };
  const serviceLd = {
    "@type": "Service",
    name: props.title,
    description: props.description,
    areaServed: { "@type": "City", name: "Darende" },
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    url,
  };

  return (
    <main>
      <StructuredData data={{ "@context": "https://schema.org", "@graph": [breadcrumbLd, serviceLd] }} />
      <section className="page-hero relative isolate overflow-hidden border-b border-white/10 pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="hero-grid absolute inset-0 -z-20" />
        <div className="hero-glow absolute inset-0 -z-10 opacity-80" />
        <div className="site-container">
          <Breadcrumb current={props.title} />
          <div className="grid items-center gap-10 lg:grid-cols-[.88fr_1.12fr]">
            <div>
              <p className="eyebrow mb-5">{props.eyebrow}</p>
              <h1 className="font-display text-[clamp(3.4rem,7vw,6.9rem)] leading-[.86] tracking-[-.04em] text-balance">{props.title}</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">{props.description}</p>
              <div className="mt-8"><ContactActions message={props.message} /></div>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] border border-white/10 bg-navy shadow-2xl shadow-black/35">
              <Image src={props.image} alt={props.imageAlt} fill priority sizes="(max-width: 1024px) 92vw, 56vw" className="object-cover transition-transform duration-700 hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-5">Yaklaşımımız</p>
            <h2 className="font-display text-[clamp(2.8rem,5vw,5rem)] leading-[.9] tracking-[-.035em] text-balance">{props.introTitle}</h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-muted">{props.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </Reveal>
          <Reveal delay={0.08} className="rounded-[1.8rem] border border-white/10 bg-white/[.035] p-6 sm:p-8">
            <BadgeCheck className="text-coral" size={32} aria-hidden="true" />
            <h2 className="mt-5 text-xl font-semibold">Öne çıkanlar</h2>
            <ul className="mt-6 space-y-4">{props.highlights.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/75"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-coral/12 text-coral"><Check size={12} aria-hidden="true" /></span>{item}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      <section className="section-shell border-y border-white/8 bg-[#11152b]/55">
        <div className="site-container">
          <div className="grid gap-5 md:grid-cols-3">{props.sections.map((section, index) => { const Icon = sectionIcons[index] ?? BadgeCheck; return <Reveal key={section.title} delay={index * .06} className="content-card"><span className="detail-card-icon"><Icon aria-hidden="true" /></span><h2 className="mt-7 text-xl font-semibold">{section.title}</h2><p className="mt-4 text-sm leading-7 text-muted">{section.body}</p></Reveal>; })}</div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div><p className="eyebrow mb-5">Merak edilenler</p><h2 className="font-display text-[clamp(2.8rem,5vw,5rem)] leading-[.9] tracking-[-.035em]">Kısa ve net cevaplar</h2></div>
          <div className="space-y-3">{props.faq.map((item) => <details key={item.question} className="faq-item group"><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
        </div>
      </section>

      <section className="pb-24">
        <div className="site-container cta-panel">
          <div><p className="eyebrow mb-4">Bir sonraki adım</p><h2 className="font-display text-4xl leading-none sm:text-6xl">Gitar yolculuğuna bugün başla.</h2></div>
          <ContactActions message={props.message} />
        </div>
      </section>

      <nav aria-label="İlgili sayfalar" className="border-t border-white/8 bg-[#070912]"><div className="site-container flex flex-wrap gap-x-7 gap-y-3 py-7">{props.related.map((item) => <Link key={item.href} href={item.href} className="group flex items-center gap-2 text-sm text-white/60 hover:text-white">{item.label}<ArrowRight className="transition group-hover:translate-x-1" size={14} aria-hidden="true" /></Link>)}</div></nav>
    </main>
  );
}

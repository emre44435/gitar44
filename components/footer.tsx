import Link from "next/link";
import { Clock, Guitar, Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { navigation, phoneHref, siteConfig, whatsappHref } from "@/site-config";

export function Footer() {
  const whatsapp = whatsappHref("Merhaba, Darende gitar dersi hakkında bilgi almak istiyorum.");
  const phone = phoneHref();
  const details = [
    siteConfig.address && { icon: MapPin, text: siteConfig.address },
    siteConfig.email && { icon: Mail, text: siteConfig.email, href: `mailto:${siteConfig.email}` },
    siteConfig.hours && { icon: Clock, text: siteConfig.hours },
    phone && { icon: Phone, text: siteConfig.phone, href: phone },
  ].filter(Boolean) as { icon: typeof MapPin; text: string; href?: string }[];

  return (
    <footer className="border-t border-white/10 bg-[#070912]">
      <div className="site-container grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:py-20">
        <div>
          <Link href="/" className="inline-flex items-center gap-3"><Guitar className="text-coral" aria-hidden="true" /><span className="font-display text-3xl">Darende Gitar</span></Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted">Darende’de başlangıç, çocuk ve yetişkinler için kişisel hedeflere göre şekillenen birebir gitar dersleri.</p>
          <div className="mt-6 flex gap-3">
            {whatsapp && <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon"><FaWhatsapp /></a>}
            {siteConfig.instagram && <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon"><FaInstagram /></a>}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-coral">Kısa yollar</h2>
          <nav className="mt-5 flex flex-col gap-3" aria-label="Alt menü">{navigation.map(({ label, href }) => <Link key={href} href={href} className="text-sm text-white/65 transition hover:text-white">{label}</Link>)}</nav>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-coral">İletişim</h2>
          {details.length > 0 ? <ul className="mt-5 space-y-4">{details.map(({ icon: Icon, text, href }) => <li key={text} className="flex gap-3 text-sm leading-6 text-white/65"><Icon className="mt-0.5 shrink-0 text-coral" size={17} aria-hidden="true" />{href ? <a href={href} className="hover:text-white">{text}</a> : text}</li>)}</ul> : <p className="mt-5 text-sm leading-6 text-white/50">Ders programı ve uygun günler için iletişim sayfasından bize ulaşabilirsiniz.</p>}
        </div>
      </div>
      <div className="border-t border-white/8"><div className="site-container flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Darende Gitar. Tüm hakları saklıdır.</p><p>Darende / Malatya</p></div></div>
    </footer>
  );
}

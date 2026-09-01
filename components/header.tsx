"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GraduationCap, Guitar, HandHeart, Home, Layers3, Menu, MessageCircle, Phone, X } from "lucide-react";
import { navigation, phoneHref, whatsappHref } from "@/site-config";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileItems = navigation.map((item, index) => ({
    ...item,
    icon: [Home, GraduationCap, Layers3, HandHeart, MessageCircle][index],
    description: ["Dersleri ve yaklaşımı keşfet", "Birebir eğitim programını incele", "Kampanyalı paketleri karşılaştır", "Bizi ve eğitim anlayışımızı tanı", "Hemen bilgi al ve tanış"][index],
  }));
  const whatsapp = whatsappHref("Merhaba, Darende Gitar birebir dersleri ve kampanyalı paketler hakkında bilgi almak istiyorum. Seviyeme uygun program için yardımcı olabilir misiniz?");
  const phone = phoneHref();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-300", scrolled || open ? "border-white/10 bg-[#0a0d1a]/88 shadow-lg shadow-black/10 backdrop-blur-xl" : "border-transparent bg-transparent")}>
      <div className="site-container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Darende Gitar ana sayfa" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center rounded-full border border-coral/35 bg-coral/10 text-coral"><Guitar size={20} aria-hidden="true" /></span>
          <span className="font-display text-2xl tracking-wide">Darende Gitar</span>
        </Link>
        <nav aria-label="Ana menü" className="hidden items-center gap-7 lg:flex">
          {navigation.map(({ label, href }) => <Link key={href} href={href} className="nav-link text-sm text-white/70">{label}</Link>)}
        </nav>
        <ButtonLink href="/iletisim/" variant="secondary" className="max-md:!hidden !min-h-0 !px-5 !py-2.5">İletişime Geç</ButtonLink>
        <button type="button" className={cn("mobile-menu-trigger grid size-11 place-items-center rounded-full border lg:hidden", open && "is-open")} onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Menüyü kapat" : "Menüyü aç"}>
          {open ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </div>
      <div id="mobile-navigation" className={cn("mobile-menu-panel grid overflow-hidden lg:hidden", open ? "grid-rows-[1fr] border-t border-white/10" : "grid-rows-[0fr]")}>
        <nav aria-label="Mobil menü" aria-hidden={!open} className="min-h-0 overflow-hidden">
          <div className="site-container mobile-menu-content py-5">
            <div className="mb-4 flex items-center gap-3 text-[.68rem] font-bold uppercase tracking-[.18em] text-coral"><span className="signal" aria-hidden="true"><i /><i /><i /><i /></span>Müziğe giden kısa yol</div>
            <div className="grid gap-2">
              {mobileItems.map(({ label, href, icon: Icon, description }, index) => <Link key={href} href={href} tabIndex={open ? 0 : -1} className="mobile-menu-link" style={{ "--menu-index": index } as React.CSSProperties} onClick={() => setOpen(false)}><span className="mobile-menu-icon"><Icon aria-hidden="true" size={20} /></span><span><strong>{label}</strong><small>{description}</small></span></Link>)}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {whatsapp && <ButtonLink href={whatsapp} external className="!min-h-12 !px-3 !text-[.7rem]">WhatsApp</ButtonLink>}
              {phone && <ButtonLink href={phone} variant="secondary" className="!min-h-12 !px-3 !text-[.7rem]"><Phone size={16} aria-hidden="true" /> Hemen Ara</ButtonLink>}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

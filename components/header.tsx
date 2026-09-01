"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Guitar, Menu, X } from "lucide-react";
import { navigation } from "@/site-config";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <button type="button" className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Menüyü kapat" : "Menüyü aç"}>
          {open ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </div>
      <div id="mobile-navigation" className={cn("grid overflow-hidden bg-[#0a0d1a] transition-[grid-template-rows] duration-300 lg:hidden", open ? "grid-rows-[1fr] border-t border-white/10" : "grid-rows-[0fr]")}>
        <nav aria-label="Mobil menü" aria-hidden={!open} className="min-h-0 overflow-hidden">
          <div className="site-container flex flex-col py-5">
            {navigation.map(({ label, href }, index) => <Link key={href} href={href} tabIndex={open ? 0 : -1} className="border-b border-white/8 py-4 text-lg font-semibold" onClick={() => setOpen(false)}><span className="mr-4 text-xs text-coral">0{index + 1}</span>{label}</Link>)}
          </div>
        </nav>
      </div>
    </header>
  );
}

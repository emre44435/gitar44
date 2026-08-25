import Link from "next/link";
import { ArrowLeft, Guitar } from "lucide-react";

export default function NotFound() {
  return <main className="relative isolate grid min-h-[80svh] place-items-center overflow-hidden px-4 pb-20 pt-32 text-center"><div className="hero-grid absolute inset-0 -z-20" /><div className="hero-glow absolute inset-0 -z-10" /><div><Guitar className="mx-auto text-coral" size={42} aria-hidden="true" /><p className="mt-7 text-xs font-bold uppercase tracking-[.25em] text-coral">404 · Ritim kayboldu</p><h1 className="font-display mt-5 text-[clamp(4rem,12vw,9rem)] leading-[.82]">Bu sayfa sessiz.</h1><p className="mx-auto mt-6 max-w-lg text-base leading-7 text-muted">Aradığın sayfa taşınmış veya hiç var olmamış olabilir. Ana sayfaya dönüp gitar yolculuğuna devam edebilirsin.</p><Link href="/" className="button-primary mt-9"><ArrowLeft size={17} aria-hidden="true" /> Ana Sayfaya Dön</Link></div></main>;
}

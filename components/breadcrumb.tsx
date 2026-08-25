import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ current }: { current: string }) {
  return <nav aria-label="İçerik yolu" className="mb-8 flex items-center gap-2 text-xs text-white/50"><Link href="/" className="hover:text-white">Ana Sayfa</Link><ChevronRight size={13} aria-hidden="true" /><span aria-current="page" className="text-coral">{current}</span></nav>;
}

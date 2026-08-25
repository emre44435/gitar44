import { FaWhatsapp } from "react-icons/fa6";
import { whatsappHref } from "@/site-config";

export function MobileWhatsapp() {
  const href = whatsappHref("Merhaba, Darende Gitar hakkında bilgi almak istiyorum.");
  if (!href) return null;
  return <a href={href} target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 z-40 flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-bold text-[#07150b] shadow-xl shadow-black/35 md:hidden" aria-label="WhatsApp üzerinden Darende Gitar’a yaz"><FaWhatsapp size={21} /> WhatsApp</a>;
}

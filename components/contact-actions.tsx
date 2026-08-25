import { MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { phoneHref, whatsappHref } from "@/site-config";

export function ContactActions({ message, fallback = true }: { message: string; fallback?: boolean }) {
  const whatsapp = whatsappHref(message);
  const phone = phoneHref();
  if (!whatsapp && !phone && !fallback) return null;
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {whatsapp && <ButtonLink href={whatsapp} external><MessageCircle size={18} aria-hidden="true" /> WhatsApp’tan Yaz</ButtonLink>}
      {phone && <ButtonLink href={phone} variant="secondary"><Phone size={18} aria-hidden="true" /> Hemen Ara</ButtonLink>}
      {!whatsapp && !phone && fallback && <ButtonLink href="/iletisim/">İletişim seçenekleri</ButtonLink>}
    </div>
  );
}

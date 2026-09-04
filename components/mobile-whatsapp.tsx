import { FaWhatsapp } from "react-icons/fa6";
import { whatsappHref } from "@/site-config";

export function MobileWhatsapp() {
  const href = whatsappHref("Merhaba, Darende Gitar Dersi birebir dersleri ve kampanyalı ders paketleri hakkında bilgi almak istiyorum. Seviyeme uygun program ve müsait günler konusunda yardımcı olabilir misiniz?");
  if (!href) return null;
  return <a href={href} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="WhatsApp üzerinden Darende Gitar Dersi’a yaz"><span className="whatsapp-pulse" aria-hidden="true" /><FaWhatsapp size={25} /><span>WhatsApp</span></a>;
}

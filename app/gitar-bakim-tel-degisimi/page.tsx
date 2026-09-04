import { DetailPage, type DetailPageProps } from "@/components/detail-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Darende Gitar Dersi Gelişim Programı | Darende Gitar Dersi", "Darende’de düzenli pratik, teknik gelişim ve şarkı çalışmaları odaklı birebir gitar dersi.", "/gitar-bakim-tel-degisimi/");

const data: DetailPageProps = {
  path: "/gitar-bakim-tel-degisimi/", eyebrow: "Gelişim odaklı gitar dersi", title: "Düzenli çalış, farkı duy.",
  description: "Temelini kurmuş öğrenciler için ritim, teknik ve repertuvar gelişimini destekleyen birebir ders programı.",
  image: "/images/04-cocuk-gitar-dersi.webp", imageAlt: "Gitar dersi ve düzenli pratik çalışması",
  introTitle: "İlerlemenin anahtarı düzenli pratiktir.",
  intro: ["Teknik gelişim yalnızca daha zor parçalar çalmak değildir. Temiz ses, doğru tempo ve rahat hareket birlikte geliştirilir.", "Derslerde önce mevcut çalım değerlendirilir; ardından zorlanan noktaları hedefleyen kısa egzersizler ve seviyeye uygun parçalar belirlenir."],
  highlights: ["Mevcut seviyeye göre gelişim planı", "Ritim ve tempo kontrolü", "Teknik eksiklere odaklanan egzersizler", "Yeni parçalarla repertuvar gelişimi"],
  sections: [{ title: "Dinle ve değerlendir", body: "Mevcut çalımda güçlü ve gelişmesi gereken noktalar birlikte belirlenir." }, { title: "Odaklı çalış", body: "Teknik ihtiyaca yönelik kısa ve tekrarlanabilir egzersizler uygulanır." }, { title: "Parçaya taşı", body: "Kazanılan beceriler yeni şarkı ve etütler üzerinde kullanılır." }],
  faq: [{ question: "Daha önce ders aldıysam nereden başlanır?", answer: "Mevcut çalım kısa bir değerlendirmeyle incelenir ve ders planı buna göre hazırlanır." }, { question: "Sadece sevdiğim şarkıları çalışabilir miyim?", answer: "Şarkılar ders hedefleriyle uyumluysa programa eklenir ve seviyeye göre düzenlenir." }, { question: "Evde ne kadar çalışmalıyım?", answer: "Uzun ve düzensiz çalışmalar yerine seviyene uygun kısa, düzenli tekrarlar önerilir." }],
  message: "Merhaba, Darende gitar gelişim dersi hakkında bilgi almak istiyorum.", related: [{ label: "Gitar dersi", href: "/gitar-dersi/" }, { label: "Elektro gitar dersi", href: "/elektro-gitar/" }, { label: "İletişim", href: "/iletisim/" }],
};

export default function Page() { return <DetailPage {...data} />; }

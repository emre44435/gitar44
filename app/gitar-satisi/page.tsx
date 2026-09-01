import { DetailPage, type DetailPageProps } from "@/components/detail-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Darende Birebir Gitar Dersi | Darende Gitar", "Darende’de seviyenize ve müzik hedefinize göre hazırlanan birebir gitar dersi programını inceleyin.", "/gitar-satisi/");

const data: DetailPageProps = {
  path: "/gitar-satisi/", eyebrow: "Birebir gitar dersi", title: "Ders senin hızında ilerlesin.",
  description: "Başlangıçtan ileri seviyeye, hedeflerine ve müzik zevkine göre şekillenen kişisel gitar eğitimi.",
  image: "/images/02-birebir-gitar-dersi.webp", imageAlt: "Darende’de birebir gitar dersi çalışma ortamı",
  introTitle: "Her öğrenci için ayrı bir yol.",
  intro: ["Birebir derslerde anlatım, egzersiz ve parça seçimi öğrencinin mevcut seviyesine göre düzenlenir. Zorlanan noktalar yakından takip edilir ve gereksiz karmaşaya girmeden küçük hedeflerle ilerlenir.", "Ders planı; yaş, müzik zevki, gitar türü ve evde ayrılabilecek çalışma süresi birlikte düşünülerek hazırlanır."],
  highlights: ["Kişisel ders planı", "Seviyeye uygun teknik çalışmalar", "Sevilen şarkılarla uygulama", "Düzenli gelişim takibi"],
  sections: [{ title: "Seviyeni belirle", body: "Başlangıç noktan ve hedeflerin konuşularak sana uygun ders akışı oluşturulur." }, { title: "Tekniği geliştir", body: "İki el koordinasyonu, ritim ve temiz ses üretimi düzenli egzersizlerle çalışılır." }, { title: "Müziğe dönüştür", body: "Öğrenilen teknikler seviyene uygun parçalarla kalıcı hâle getirilir." }],
  faq: [{ question: "Birebir dersin avantajı nedir?", answer: "Dersin hızı, anlatım biçimi ve çalışmalar doğrudan öğrencinin ihtiyacına göre düzenlenir." }, { question: "Sıfırdan başlayabilir miyim?", answer: "Evet. Gitarı tanıma, doğru oturuş ve ilk seslerden başlanır." }, { question: "Ders programını nasıl öğrenebilirim?", answer: "Uygun günler ve güncel ders bilgisi için iletişim sayfasından ulaşabilirsin." }],
  message: "Merhaba, Darende birebir gitar dersi hakkında bilgi almak istiyorum.", related: [{ label: "Gitar dersi", href: "/gitar-dersi/" }, { label: "Akustik gitar dersi", href: "/akustik-gitar/" }, { label: "İletişim", href: "/iletisim/" }],
};

export default function Page() { return <DetailPage {...data} />; }

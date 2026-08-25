import { DetailPage, type DetailPageProps } from "@/components/detail-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Darende Gitar Satışı ve Seçim Desteği | Darende Gitar", "Darende’de akustik, klasik ve elektro gitar seçeneklerini inceleyin; kullanım amacınıza uygun gitar seçimi için destek alın.", "/gitar-satisi/");

const data: DetailPageProps = {
  path: "/gitar-satisi/", eyebrow: "Darende gitar satışı", title: "Sana uyan gitarı birlikte seçelim.",
  description: "Sadece görünüşe değil; çalım rahatlığına, hedefe ve enstrümanın verdiği hissiyata odaklanan seçim desteği.",
  image: "/images/08-gitar-satis-vitrini.webp", imageAlt: "Darende Gitar akustik, klasik ve elektro gitar satış vitrini",
  introTitle: "İyi seçim, çalma isteğini büyütür.",
  intro: ["İlk gitar seçimi çoğu zaman tel türü, gövde yapısı, sap hissi ve kullanım amacı gibi ayrıntılar nedeniyle karmaşık görünür. Darende gitar satışı yaklaşımımızda önce ne çalmak istediğini ve gitarla nasıl vakit geçireceğini anlamaya odaklanırız.", "Akustik, klasik ve elektro gitarlar aynı deneyimi sunmaz. El yapına uygun sap, konforlu gövde ve seviyene uygun çalım hissi; enstrümanla düzenli bağ kurmanda ürün üzerindeki süslü özelliklerden daha belirleyici olabilir."],
  highlights: ["Akustik, klasik ve elektro gitar seçenekleri", "Başlangıç seviyesine uygun seçim rehberliği", "Boyut, tel yapısı ve çalım konforu değerlendirmesi", "Satış sonrası bakım ve tel değişimi desteği"],
  sections: [{ title: "Amacını belirle", body: "Evde şarkılara eşlik etmek, klasik teknik çalışmak veya amfiyle farklı tonlar keşfetmek; gitar türü seçiminde başlangıç noktasıdır." }, { title: "Konforu karşılaştır", body: "Sap hissi, tel direnci, gövde boyutu ve ağırlık gibi ayrıntılar çalım pozisyonunu ve çalışma süresini doğrudan etkiler." }, { title: "Bakımı planla", body: "Tel seçimi, akort alışkanlığı ve düzenli kontrol hakkında temel bilgi almak, yeni gitarın dengeli kalmasına yardımcı olur." }],
  faq: [{ question: "Başlangıç için hangi gitar türü daha uygundur?", answer: "Tek bir doğru yoktur. Dinlediğin müzik, tel hissi, el yapın ve çalışma ortamın birlikte değerlendirilerek klasik, akustik veya elektro gitar seçilebilir." }, { question: "Gitar fiyatlarını neden sitede göremiyorum?", answer: "Ürün, marka, stok ve fiyat bilgisi doğrulanmadan paylaşılmaz. Güncel seçenekler için doğrudan iletişim kurabilirsin." }, { question: "Satın almadan önce seçim desteği alabilir miyim?", answer: "Evet. Hedefini ve deneyim seviyeni anlatarak hangi gitar türünün daha uygun olabileceği hakkında destek isteyebilirsin." }],
  message: "Merhaba, Darende gitar satışı ve uygun gitar seçimi hakkında bilgi almak istiyorum.", related: [{ label: "Akustik gitar", href: "/akustik-gitar/" }, { label: "Klasik gitar", href: "/klasik-gitar/" }, { label: "Elektro gitar", href: "/elektro-gitar/" }],
};

export default function Page() { return <DetailPage {...data} />; }

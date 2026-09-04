import { DetailPage, type DetailPageProps } from "@/components/detail-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Darende Gitar Dersi ve Başlangıç Eğitimi | Darende Gitar Dersi", "Darende’de birebir, başlangıç ve çocuk gitar dersi seçeneklerini keşfedin; hedefinize uygun çalışma planı hakkında bilgi alın.", "/gitar-dersi/");

const data: DetailPageProps = {
  path: "/gitar-dersi/", eyebrow: "Darende gitar dersi", title: "Ritmini bul, kendi sesini çal.",
  description: "İlk akordan sevdiğin şarkılara uzanan süreçte, seviyene ve öğrenme hızına göre şekillenen birebir gitar eğitimi.",
  image: "/images/02-birebir-gitar-dersi.webp", imageAlt: "Darende’de birebir gitar dersi için hazırlanmış iki gitar",
  introTitle: "Ders, senin hedefinle başlar.",
  intro: ["Darende gitar kursu ararken herkesin aynı hızda ve aynı yöntemle ilerlemesi gerekmez. Daha önce hiç gitar çalmamış olman, notaları bilmemek ya da uzun bir aradan sonra yeniden başlamak sürecin doğal parçalarıdır.", "Birebir yapı sayesinde duruş, sağ-sol el koordinasyonu, ritim ve temiz ses üretimi yakından ele alınır. Çalışma planı; yaşa, müzik zevkine, mevcut seviyeye ve ayırabileceğin zamana göre sadeleştirilir."],
  highlights: ["Birebir ilgi ve seviyeye uygun ilerleme", "Başlangıç için temel teknik ve ritim çalışmaları", "Çocukların dikkat süresine uygun ders yaklaşımı", "Ev çalışmasını kolaylaştıran net ve küçük hedefler"],
  sections: [{ title: "Tanışma ve hedef", body: "İlk görüşmede deneyim, dinlenen müzikler ve ulaşılmak istenen seviye konuşulur; gitarın varsa temel uygunluğu değerlendirilir." }, { title: "Temel ve uygulama", body: "Akort, doğru oturuş, pena veya parmak kullanımı, temel akorlar ve ritim çalışmaları sevilen parçalarla ilişkilendirilir." }, { title: "Takip ve gelişim", body: "Her derste önceki çalışmalar gözden geçirilir, zorlanan noktalar sadeleştirilir ve bir sonraki küçük hedef belirlenir." }],
  faq: [{ question: "Daha önce hiç gitar çalmadım, başlayabilir miyim?", answer: "Evet. Başlangıç gitar dersi, enstrümanı tanımadan doğru oturuş ve ilk seslere kadar sıfırdan planlanır." }, { question: "Ders için kendi gitarım olmalı mı?", answer: "Düzenli ev çalışması için kişisel bir gitar faydalıdır. İlk görüşmede kullanacağın gitar türü ve çalışma düzeni hakkında temel yönlendirme yapılabilir." }, { question: "Çocuklar için gitar dersi uygun mu?", answer: "Çocuğun yaşı, el yapısı, dikkat süresi ve ilgisi birlikte değerlendirilir. Dersler kısa, anlaşılır hedeflerle ilerler." }],
  message: "Merhaba, Darende gitar dersi hakkında bilgi almak istiyorum.", related: [{ label: "Akustik gitar dersi", href: "/akustik-gitar/" }, { label: "Klasik gitar dersi", href: "/klasik-gitar/" }, { label: "İletişim", href: "/iletisim/" }],
};

export default function Page() { return <DetailPage {...data} />; }

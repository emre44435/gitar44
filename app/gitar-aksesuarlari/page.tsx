import { DetailPage, type DetailPageProps } from "@/components/detail-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Darende Başlangıç Gitar Dersi | Darende Gitar Dersi", "Darende’de sıfırdan başlayanlar için anlaşılır ve birebir gitar dersi.", "/gitar-aksesuarlari/");

const data: DetailPageProps = {
  path: "/gitar-aksesuarlari/", eyebrow: "Başlangıç gitar dersi", title: "İlk akorunu güvenle bas.",
  description: "Daha önce gitar çalmamış öğrenciler için sade, anlaşılır ve adım adım ilerleyen birebir ders programı.",
  image: "/images/03-baslangic-gitar-dersi.webp", imageAlt: "Başlangıç gitar dersi çalışma alanı",
  introTitle: "Başlamak için deneyim gerekmez.",
  intro: ["Başlangıç derslerinde gitarı tanıma, doğru oturuş, akort ve temiz ses üretimi ele alınır. Her yeni konu küçük ve ulaşılabilir çalışmalarla pekiştirilir.", "Amaç hızlı görünmek değil, sağlam bir temel kurmaktır. Düzenli tekrarlarla akor geçişleri, ritim duygusu ve iki el koordinasyonu doğal biçimde gelişir."],
  highlights: ["Sıfırdan başlayanlara uygun", "Doğru oturuş ve el pozisyonu", "Temel akor ve ritim çalışmaları", "Kısa ve anlaşılır ev hedefleri"],
  sections: [{ title: "Gitarı tanı", body: "Gitarın bölümleri, doğru tutuş ve akort temel bilgilerle açıklanır." }, { title: "İlk sesleri çıkar", body: "Sol el yerleşimi ve sağ el hareketi temiz ses hedefiyle çalışılır." }, { title: "İlk şarkını çal", body: "Temel akor ve ritimler kolay parçalar üzerinde birleştirilir." }],
  faq: [{ question: "Nota bilmem gerekiyor mu?", answer: "Hayır. Gerekli bilgiler ders içinde uygulamayla birlikte öğrenilir." }, { question: "Kaç yaşında başlanabilir?", answer: "Yaşla birlikte el yapısı, dikkat süresi ve ilgi değerlendirilerek uygun ders akışı belirlenir." }, { question: "Ne kadar sürede şarkı çalabilirim?", answer: "İlerleme düzenli çalışmaya göre değişir; ilk hedefler öğrencinin temposuna göre belirlenir." }],
  message: "Merhaba, Darende başlangıç gitar dersi hakkında bilgi almak istiyorum.", related: [{ label: "Gitar dersi", href: "/gitar-dersi/" }, { label: "Klasik gitar dersi", href: "/klasik-gitar/" }, { label: "İletişim", href: "/iletisim/" }],
};

export default function Page() { return <DetailPage {...data} />; }

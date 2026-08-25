import { DetailPage, type DetailPageProps } from "@/components/detail-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Darende Elektro Gitar ve Amfi Seçimi | Darende Gitar", "Darende’de elektro gitar ve amfi seçeneklerini keşfedin; müzik tarzınıza ve çalım hedefinize uygun seçim desteği alın.", "/elektro-gitar/");

const data: DetailPageProps = {
  path: "/elektro-gitar/", eyebrow: "Darende elektro gitar", title: "Tonunu şekillendir, sesini büyüt.",
  description: "Temiz tonlardan güçlü drive seslerine uzanan dünyada, eline ve müzik tarzına uygun elektro gitarı keşfet.",
  image: "/images/07-elektro-gitar-amfi.webp", imageAlt: "Darende’de elektro gitar ve gitar amfisi",
  introTitle: "Bir gitar, sayısız ton ihtimali.",
  intro: ["Elektro gitarın karakteri yalnızca gövde biçiminden gelmez. Manyetik yapısı, sap profili, tel hissi ve kullanılan amfi; çalım deneyimini birlikte oluşturur. Bu nedenle seçim yaparken hedeflenen müzik türü kadar enstrümanın eldeki dengesi de önemlidir.", "Darende elektro gitar seçeneklerini değerlendirirken evde çalışma, grup provası veya sahne gibi kullanım alanları konuşulur. İlk kurulumda gereksiz karmaşaya girmeden, temel ekipman zincirini anlamak daha bilinçli bir başlangıç sağlar."],
  highlights: ["Müzik tarzına göre gitar karakteri değerlendirmesi", "Sap, ağırlık ve gövde dengesi karşılaştırması", "Ev çalışmasına uygun amfi yaklaşımı", "Kablo, pena, askı ve diğer temel aksesuar desteği"],
  sections: [{ title: "Gitarın hissi", body: "Sap profili, perde yapısı, ağırlık ve gövdenin dengesi uzun çalışma süresindeki konforu belirler." }, { title: "Manyetik ve ton", body: "Farklı manyetik düzenleri temiz, sıcak veya daha güçlü tonlara eğilim gösterebilir; seçim müzik hedefiyle birlikte düşünülür." }, { title: "Amfi ve bağlantı", body: "Evde kullanılacak ses seviyesi, kulaklık ihtiyacı ve temel efekt beklentisi amfi seçiminde öne çıkar." }],
  faq: [{ question: "Elektro gitar öğrenmek için önce klasik gitar gerekir mi?", answer: "Hayır. Çalmak istediğin müzik elektro gitar odaklıysa doğrudan elektro gitarla temel eğitime başlanabilir." }, { question: "Elektro gitar sessiz çalışılabilir mi?", answer: "Uygun kulaklık çıkışına sahip amfi veya çalışma ekipmanıyla çevreyi daha az rahatsız edecek şekilde pratik yapılabilir." }, { question: "Başlangıç için hangi aksesuarlar gerekir?", answer: "Gitar ve uygun amfiye ek olarak bağlantı kablosu, pena, askı, yedek tel ve akort çözümü temel ihtiyaçlar arasında olabilir." }],
  message: "Merhaba, Darende elektro gitar ve amfi seçenekleri hakkında bilgi almak istiyorum.", related: [{ label: "Gitar aksesuarları", href: "/gitar-aksesuarlari/" }, { label: "Gitar satışı", href: "/gitar-satisi/" }, { label: "Gitar dersi", href: "/gitar-dersi/" }],
};

export default function Page() { return <DetailPage {...data} />; }

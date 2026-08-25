import { DetailPage, type DetailPageProps } from "@/components/detail-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Darende Akustik Gitar Seçenekleri | Darende Gitar", "Darende’de akustik gitar seçerken gövde yapısı, çalım hissi ve kullanım amacına göre destek alın.", "/akustik-gitar/");

const data: DetailPageProps = {
  path: "/akustik-gitar/", eyebrow: "Darende akustik gitar", title: "Doğal, canlı ve her an çalmaya hazır.",
  description: "Şarkılara eşlik etmekten kendi bestelerini geliştirmeye uzanan güçlü ve doğrudan bir akustik gitar deneyimi.",
  image: "/images/05-akustik-gitar.webp", imageAlt: "Koyu stüdyo ortamında doğal ahşap akustik gitar",
  introTitle: "Ahşabın sıcaklığı, tellerin açık sesi.",
  intro: ["Akustik gitar, amfiye ihtiyaç duymadan dolgun ve parlak bir ses sunar. Çelik telleri ve farklı gövde seçenekleri sayesinde ritim ağırlıklı eşliklerde, modern parçalarda ve parmak stili çalışmalarda geniş bir karaktere sahiptir.", "Darende akustik gitar seçiminde gövdenin oturuşu, sap rahatlığı ve tel yüksekliği önemlidir. Yeni başlayanlar için yalnızca ses gücü değil, uzun süre çalarken hissedilen konfor da değerlendirilmelidir."],
  highlights: ["Amfisiz, güçlü ve doğal ses", "Ritim ve şarkı eşliği için geniş kullanım", "Farklı gövde yapılarında seçim desteği", "Tel ve bakım konusunda yerel destek"],
  sections: [{ title: "Gövde karakteri", body: "Gövde boyutu ve derinliği hem sesin dolgunluğunu hem de gitarın kucakta nasıl hissettirdiğini değiştirir." }, { title: "Tel hissi", body: "Çelik teller canlı bir ton verir. Uygun tel kalınlığı ve doğru yükseklik, özellikle başlangıç döneminde çalım konforunu etkiler." }, { title: "Kullanım alanı", body: "Ev çalışması, sahne planı veya kayıt hedefi varsa gitarın yapısı ve bağlantı ihtiyacı buna göre düşünülmelidir." }],
  faq: [{ question: "Akustik gitar başlangıç için uygun mu?", answer: "Evet; özellikle çelik tel sesini seven ve şarkılara eşlik etmek isteyenler için uygundur. Tel hissine alışma süreci kişiden kişiye değişebilir." }, { question: "Akustik gitar amfi olmadan çalınır mı?", answer: "Evet. Akustik gövde sesi doğal olarak yükseltir. Elektro-akustik modellerde ayrıca ses sistemine bağlantı seçeneği bulunabilir." }, { question: "Akustik gitar teli ne zaman değişir?", answer: "Çalım sıklığı, terleme ve saklama koşullarına göre değişir. Matlaşan ton, zor akort ve renk değişimi tel yenileme zamanına işaret edebilir." }],
  message: "Merhaba, Darende akustik gitar seçenekleri hakkında bilgi almak istiyorum.", related: [{ label: "Gitar satışı", href: "/gitar-satisi/" }, { label: "Gitar dersi", href: "/gitar-dersi/" }, { label: "Tel değişimi", href: "/gitar-bakim-tel-degisimi/" }],
};

export default function Page() { return <DetailPage {...data} />; }

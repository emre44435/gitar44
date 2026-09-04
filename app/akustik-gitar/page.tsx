import { DetailPage, type DetailPageProps } from "@/components/detail-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Darende Akustik Gitar Dersi | Darende Gitar Dersi", "Darende’de akor, ritim ve şarkı eşliği odaklı birebir akustik gitar dersi alın.", "/akustik-gitar/");

const data: DetailPageProps = {
  path: "/akustik-gitar/", eyebrow: "Darende akustik gitar dersi", title: "Akorları öğren, şarkılara eşlik et.",
  description: "Sıfırdan başlayanlar ve ritmini geliştirmek isteyenler için birebir akustik gitar dersi.",
  image: "/images/05-akustik-gitar.webp", imageAlt: "Akustik gitar dersi için doğal ahşap gitar",
  introTitle: "Ritmini sağlam bir temelle kur.",
  intro: ["Akustik gitar dersleri doğru oturuş, akort, temel akorlar ve ritim kalıplarıyla başlar. Öğrendiğin teknikler sevdiğin şarkılarla birleştirilerek çalışma süreci daha anlaşılır ve motive edici hâle gelir.", "Ders programı mevcut seviyene, müzik zevkine ve evde ayırabildiğin zamana göre düzenlenir. Amaç yalnızca akor ezberlemek değil; temiz geçişler, dengeli ritim ve müzikal ifade geliştirmektir."],
  highlights: ["Birebir ve seviyeye uygun ders planı", "Temel akorlar ve temiz geçişler", "Ritim kalıpları ve şarkı eşliği", "Düzenli ev çalışması için net hedefler"],
  sections: [{ title: "Temel akorlar", body: "Sol el yerleşimi ve temiz ses üretimi küçük egzersizlerle adım adım geliştirilir." }, { title: "Ritim duygusu", body: "Sağ el hareketi, tempo takibi ve farklı ritim kalıpları sevilen parçalar üzerinde çalışılır." }, { title: "Şarkı eşliği", body: "Öğrenilen akor ve ritimler seviyeye uygun şarkılarda birleştirilerek akıcı çalım hedeflenir." }],
  faq: [{ question: "Akustik gitar başlangıç için uygun mu?", answer: "Evet. Özellikle şarkılara eşlik etmek ve ritim çalmak isteyen öğrenciler doğrudan akustik gitarla başlayabilir." }, { question: "Nota bilmeden derse başlayabilir miyim?", answer: "Evet. Nota bilgisi başlangıç şartı değildir; gerekli bilgiler ders içinde uygulamayla birlikte öğrenilir." }, { question: "Derslerde hangi şarkılar çalışılır?", answer: "Parçalar öğrencinin seviyesine ve müzik zevkine göre seçilir; teknik hedeflere uygun biçimde sadeleştirilir." }],
  message: "Merhaba, Darende akustik gitar dersi hakkında bilgi almak istiyorum.", related: [{ label: "Gitar dersi", href: "/gitar-dersi/" }, { label: "Klasik gitar dersi", href: "/klasik-gitar/" }, { label: "İletişim", href: "/iletisim/" }],
};

export default function Page() { return <DetailPage {...data} />; }

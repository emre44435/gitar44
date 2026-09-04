import { DetailPage, type DetailPageProps } from "@/components/detail-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Darende Elektro Gitar Dersi | Darende Gitar Dersi", "Darende’de riff, pena kontrolü ve sevilen parçalar odaklı birebir elektro gitar dersi alın.", "/elektro-gitar/");

const data: DetailPageProps = {
  path: "/elektro-gitar/", eyebrow: "Darende elektro gitar dersi", title: "Riffini çal, enerjini yükselt.",
  description: "Rock, pop ve alternatif müzik sevenler için pena kontrolü, riff ve şarkı çalışmalarıyla ilerleyen birebir elektro gitar dersi.",
  image: "/images/07-elektro-gitar-amfi.webp", imageAlt: "Darende’de elektro gitar ve gitar amfisi",
  introTitle: "Temel teknikten sevdiğin rifflere.",
  intro: ["Elektro gitar dersleri doğru duruş, pena kullanımı, temiz nota ve ritim çalışmalarıyla başlar. Teknik konular sevdiğin müzik türüne uygun riff ve parçalarla ilişkilendirilir.", "Daha önce klasik gitar çalmış olma şartı yoktur. Sıfırdan başlayan öğrenciler de doğrudan elektro gitarla ilerleyebilir; ders planı mevcut seviyeye ve hedeflenen müzik tarzına göre hazırlanır."],
  highlights: ["Sıfırdan başlayanlara uygun program", "Pena kontrolü ve iki el koordinasyonu", "Riff, power chord ve ritim çalışmaları", "Sevilen parçalarla motive edici gelişim"],
  sections: [{ title: "Pena kontrolü", body: "Alternatif vuruş, tel geçişi ve ritim doğruluğu küçük egzersizlerle geliştirilir." }, { title: "Riff ve akor", body: "Power chord, temel riffler ve ritim kalıpları seviyeye uygun parçalar üzerinde çalışılır." }, { title: "Şarkı çalışması", body: "Teknik hedefler sevilen parçalarla birleştirilerek akıcı ve özgüvenli çalım desteklenir." }],
  faq: [{ question: "Elektro gitar öğrenmek için önce klasik gitar gerekir mi?", answer: "Hayır. Çalmak istediğin müzik elektro gitar odaklıysa doğrudan elektro gitarla temel eğitime başlanabilir." }, { question: "Sıfırdan başlayabilir miyim?", answer: "Evet. Doğru oturuş, pena tutuşu, temiz ses ve temel ritim çalışmalarından başlanır." }, { question: "Derslerde kendi sevdiğim parçaları çalışabilir miyim?", answer: "Evet. Parçalar seviyene ve dersin teknik hedeflerine uygun biçimde seçilir veya sadeleştirilir." }],
  message: "Merhaba, Darende elektro gitar dersi hakkında bilgi almak istiyorum.", related: [{ label: "Gitar dersi", href: "/gitar-dersi/" }, { label: "Akustik gitar dersi", href: "/akustik-gitar/" }, { label: "İletişim", href: "/iletisim/" }],
};

export default function Page() { return <DetailPage {...data} />; }

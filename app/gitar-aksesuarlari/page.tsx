import { DetailPage, type DetailPageProps } from "@/components/detail-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Darende Gitar Aksesuarları | Tel, Pena ve Daha Fazlası", "Darende’de gitar teli, pena, askı, kablo ve temel gitar aksesuarları hakkında bilgi ve seçim desteği alın.", "/gitar-aksesuarlari/");

const data: DetailPageProps = {
  path: "/gitar-aksesuarlari/", eyebrow: "Darende gitar aksesuarları", title: "Küçük detaylar, daha rahat bir çalım.",
  description: "Tel, pena, askı, kablo ve bakım ürünlerinde gitarınla ve çalım alışkanlığınla uyumlu seçimler.",
  image: "/images/09-gitar-aksesuarlari.webp", imageAlt: "Gitar teli, pena, askı ve bakım ürünlerinden oluşan aksesuar düzeni",
  introTitle: "İhtiyacın kadar, doğru ekipman.",
  intro: ["Gitar aksesuarları enstrümanın yerini almaz; fakat akorttan taşıma güvenliğine, çalım konforundan ton tutarlılığına kadar günlük deneyimi belirgin biçimde etkiler. Her ürün her gitar türünde aynı sonucu vermez.", "Darende gitar aksesuarları için tel türü, pena kalınlığı, askı güvenliği veya kablo uzunluğu seçilirken kullanım biçimi temel alınır. Amaç, gereksiz ekipman biriktirmek değil; gerçekten işe yarayan parçaları doğru sırada tamamlamaktır."],
  highlights: ["Klasik, akustik ve elektro gitar için tel seçenekleri", "Farklı kalınlık ve malzemede pena yaklaşımı", "Askı, kablo, kılıf ve akort ihtiyaçları", "Temel temizlik ve bakım ürünleri hakkında yönlendirme"],
  sections: [{ title: "Tel ve pena", body: "Gitar türüne uygun tel seçimi güvenlik ve ton için kritiktir. Pena kalınlığı ise atak, kontrol ve ritim hissini değiştirir." }, { title: "Taşıma ve koruma", body: "Kılıf, stand ve güvenli askı çözümleri gitarı darbe, düşme ve çevresel etkilerden korumaya yardımcı olur." }, { title: "Bağlantı ve akort", body: "Elektro sistemlerde sağlam kablo; her gitar türünde güvenilir akort çözümü düzenli çalışmanın temelidir." }],
  faq: [{ question: "Her tel her gitara takılır mı?", answer: "Hayır. Klasik gitara çelik tel takmak gibi yanlış eşleşmeler enstrümana zarar verebilir. Gitar türüne ve yapısına uygun tel kullanılmalıdır." }, { question: "Başlangıç için hangi pena kalınlığı uygundur?", answer: "Çalım tarzına göre değişir. Ritim çalışmasında daha esnek, tek nota kontrolünde daha sert pena tercih edilebilir; el hissiyle karşılaştırmak faydalıdır." }, { question: "Gitarı standda mı kılıfta mı saklamalıyım?", answer: "Ortamın nemi, ısısı, güvenliği ve kullanım sıklığına göre karar verilir. Darbe ve ani ısı değişimlerinden kaçınmak gerekir." }],
  message: "Merhaba, Darende gitar aksesuarları hakkında bilgi almak istiyorum.", related: [{ label: "Gitar bakımı", href: "/gitar-bakim-tel-degisimi/" }, { label: "Elektro gitar", href: "/elektro-gitar/" }, { label: "Gitar satışı", href: "/gitar-satisi/" }],
};

export default function Page() { return <DetailPage {...data} />; }

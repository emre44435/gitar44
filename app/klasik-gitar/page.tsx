import { DetailPage, type DetailPageProps } from "@/components/detail-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Darende Klasik Gitar Seçenekleri | Darende Gitar", "Darende’de klasik gitar seçenekleri, naylon tel yapısı ve başlangıç için doğru boy gitar hakkında bilgi alın.", "/klasik-gitar/");

const data: DetailPageProps = {
  path: "/klasik-gitar/", eyebrow: "Darende klasik gitar", title: "Yumuşak dokunuş, zamansız bir tını.",
  description: "Naylon tellerin sıcak karakteri ve dengeli gövde yapısıyla kontrollü, rahat ve ifade dolu bir başlangıç.",
  image: "/images/06-klasik-gitar.webp", imageAlt: "Naylon telli klasik gitarın gövde ve sap görünümü",
  introTitle: "Tekniği sakin ve sağlam kur.",
  intro: ["Klasik gitarın naylon telleri, parmakla çalım ve temel teknik çalışmaları için farklı bir temas hissi sunar. Genişçe sap yapısı notaları temiz basmayı öğretirken iki elin bağımsızlığını geliştiren bir çalışma alanı yaratır.", "Darende klasik gitar arayan yetişkinler ve çocuklar için doğru gövde ölçüsü özellikle önemlidir. Tam boy, 3/4 veya farklı ölçüler arasında seçim yapılırken yaş kadar kol uzunluğu ve oturuş konforu da dikkate alınmalıdır."],
  highlights: ["Sıcak ve dengeli naylon tel tonu", "Parmak tekniği ve temel eğitim için uygun yapı", "Çocuklar için boyut seçimi desteği", "Tel değişimi ve temel bakım yönlendirmesi"],
  sections: [{ title: "Doğru ölçü", body: "Gitarın gövdesi ve sap uzunluğu rahat oturuşa izin vermeli; omuz ve bilekte gereksiz gerilim oluşturmamalıdır." }, { title: "Naylon tel", body: "Naylon tellerin basıncı çelik tellere göre farklıdır. Üst ve alt tellerin yapısı, ses dengesi ve dokunuş hissi birlikte değerlendirilir." }, { title: "Temel teknik", body: "Sağ el parmak düzeni, temiz nota üretimi ve dengeli oturuş; klasik gitarın sunduğu kontrollü çalışma zemininin merkezindedir." }],
  faq: [{ question: "Çocuklar için hangi klasik gitar boyu seçilir?", answer: "Yaş tek başına yeterli değildir. Boy, kol uzunluğu ve oturuş rahatlığı birlikte değerlendirilerek uygun ölçü belirlenir." }, { question: "Klasik gitarla pop şarkıları çalınır mı?", answer: "Evet. Klasik gitar yalnızca klasik repertuvarla sınırlı değildir; akor ve ritim çalışmalarıyla pek çok şarkıya eşlik edilebilir." }, { question: "Klasik ve akustik gitar arasındaki temel fark nedir?", answer: "Klasik gitarda naylon tel ve daha geniş sap, akustik gitarda çoğunlukla çelik tel ve daha parlak bir ses karakteri bulunur." }],
  message: "Merhaba, Darende klasik gitar seçenekleri hakkında bilgi almak istiyorum.", related: [{ label: "Çocuk gitar dersi", href: "/gitar-dersi/" }, { label: "Akustik gitar", href: "/akustik-gitar/" }, { label: "Gitar satışı", href: "/gitar-satisi/" }],
};

export default function Page() { return <DetailPage {...data} />; }

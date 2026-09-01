import { DetailPage, type DetailPageProps } from "@/components/detail-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Darende Klasik Gitar Dersi | Darende Gitar", "Darende’de temel teknik, nota ve parmak çalışmaları odaklı birebir klasik gitar dersi alın.", "/klasik-gitar/");

const data: DetailPageProps = {
  path: "/klasik-gitar/", eyebrow: "Darende klasik gitar dersi", title: "Tekniği sakin ve sağlam kur.",
  description: "Çocuklar ve yetişkinler için doğru duruş, parmak tekniği ve nota çalışmalarıyla ilerleyen birebir klasik gitar dersi.",
  image: "/images/06-klasik-gitar.webp", imageAlt: "Naylon telli klasik gitarın gövde ve sap görünümü",
  introTitle: "İki elin uyumunu adım adım geliştir.",
  intro: ["Klasik gitar derslerinde doğru oturuş, sağ el parmak düzeni ve sol el koordinasyonu birlikte ele alınır. Temel teknik küçük egzersizlerle kurulur, ardından seviyeye uygun etüt ve parçalarla pekiştirilir.", "Ders içeriği öğrencinin yaşına, el yapısına ve öğrenme hızına göre sadeleştirilir. Çocuklarda dikkat süresini koruyan kısa hedefler; yetişkinlerde ise düzenli ilerlemeyi destekleyen kişisel çalışma planı kullanılır."],
  highlights: ["Doğru oturuş ve el pozisyonu", "Parmak tekniği ve temiz nota üretimi", "Çocuklara uygun anlaşılır ders akışı", "Etüt ve parçalarla düzenli gelişim"],
  sections: [{ title: "Doğru ölçü", body: "Gitarın gövdesi ve sap uzunluğu rahat oturuşa izin vermeli; omuz ve bilekte gereksiz gerilim oluşturmamalıdır." }, { title: "Naylon tel", body: "Naylon tellerin basıncı çelik tellere göre farklıdır. Üst ve alt tellerin yapısı, ses dengesi ve dokunuş hissi birlikte değerlendirilir." }, { title: "Temel teknik", body: "Sağ el parmak düzeni, temiz nota üretimi ve dengeli oturuş; klasik gitarın sunduğu kontrollü çalışma zemininin merkezindedir." }],
  faq: [{ question: "Çocuklar için hangi klasik gitar boyu seçilir?", answer: "Yaş tek başına yeterli değildir. Boy, kol uzunluğu ve oturuş rahatlığı birlikte değerlendirilerek uygun ölçü belirlenir." }, { question: "Klasik gitarla pop şarkıları çalınır mı?", answer: "Evet. Klasik gitar yalnızca klasik repertuvarla sınırlı değildir; akor ve ritim çalışmalarıyla pek çok şarkıya eşlik edilebilir." }, { question: "Klasik ve akustik gitar arasındaki temel fark nedir?", answer: "Klasik gitarda naylon tel ve daha geniş sap, akustik gitarda çoğunlukla çelik tel ve daha parlak bir ses karakteri bulunur." }],
  message: "Merhaba, Darende klasik gitar dersi hakkında bilgi almak istiyorum.", related: [{ label: "Çocuk gitar dersi", href: "/gitar-dersi/" }, { label: "Akustik gitar dersi", href: "/akustik-gitar/" }, { label: "İletişim", href: "/iletisim/" }],
};

export default function Page() { return <DetailPage {...data} />; }

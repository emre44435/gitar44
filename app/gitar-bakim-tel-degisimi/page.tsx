import { DetailPage, type DetailPageProps } from "@/components/detail-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Darende Gitar Bakımı ve Tel Değişimi | Darende Gitar", "Darende’de gitar bakımı, tel değişimi, temizlik ve temel kontrol hizmetleri hakkında bilgi alın.", "/gitar-bakim-tel-degisimi/");

const data: DetailPageProps = {
  path: "/gitar-bakim-tel-degisimi/", eyebrow: "Darende gitar bakımı", title: "Gitarın dengede, tonun canlı kalsın.",
  description: "Tel değişimi, temizlik ve temel kontrollerle enstrümanın çalım hissini ve sesini korumaya yönelik özenli destek.",
  image: "/images/10-gitar-bakim-tel-degisimi.webp", imageAlt: "Tezgâh üzerinde gitar bakımı ve tel değişimi işlemi",
  introTitle: "Bakım, gitarla kurduğun bağı korur.",
  intro: ["Teller zamanla parlaklığını, esnekliğini ve akort kararlılığını kaybedebilir. Klavye üzerinde biriken toz ve kir de çalım hissini etkiler. Düzenli kontrol, sorunları büyümeden fark etmeye yardımcı olur.", "Darende gitar teli değişimi ve bakım sürecinde enstrümanın türüne uygun tel kullanımı, doğru sarım ve temel temizlik önemsenir. Her gitarın ihtiyacı aynı olmadığı için görülen durum üzerinden değerlendirme yapılır; doğrulanmamış işlem veya parça sözü verilmez."],
  highlights: ["Gitar türüne uygun tel değişimi", "Gövde, klavye ve erişilebilir alanlarda temel temizlik", "Akort ve genel çalım hissi kontrolü", "Bakım sonrası saklama ve kullanım önerileri"],
  sections: [{ title: "Ön kontrol", body: "Tel durumu, görünür yüzeyler, akort davranışı ve kullanıcı tarafından fark edilen sorunlar birlikte değerlendirilir." }, { title: "Tel ve temizlik", body: "Uygun tel takımıyla dikkatli değişim yapılır; işlem sırasında erişilebilen bölgelerde temel temizlik uygulanır." }, { title: "Son kontrol", body: "Tellerin yerleşimi, akort kararlılığı ve genel çalım hissi gözden geçirilir; kullanım notları paylaşılır." }],
  faq: [{ question: "Gitar teli ne sıklıkla değiştirilmelidir?", answer: "Sabit bir süre yoktur. Çalım sıklığı, el teri, ortam ve tel türü belirleyicidir. Pas, mat ses, sertleşme veya akort sorunu değişim ihtiyacını gösterebilir." }, { question: "Tel değişiminde gitar temizlenir mi?", answer: "Teller söküldüğünde erişilebilen alanlarda temel temizlik için uygun bir fırsat oluşur. Yapılacak işlem gitarın yüzeyine ve durumuna göre belirlenir." }, { question: "Kopan tek tel yerine sadece bir tel değişir mi?", answer: "Mümkündür; ancak diğer tellerin yaşı ve durumu da değerlendirilmelidir. Eski ve yeni teller arasında ton ve gerilim farkı oluşabilir." }],
  message: "Merhaba, Darende gitar bakımı ve tel değişimi hakkında bilgi almak istiyorum.", related: [{ label: "Gitar aksesuarları", href: "/gitar-aksesuarlari/" }, { label: "Akustik gitar", href: "/akustik-gitar/" }, { label: "İletişim", href: "/iletisim/" }],
};

export default function Page() { return <DetailPage {...data} />; }

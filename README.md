# Darende Gitar

`darendegitar.com` için hazırlanmış, mobil öncelikli ve statik olarak dışa aktarılabilen kurumsal web sitesi. Proje Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui klasör yapısı, Framer Motion ve yerel font/görsel varlıkları kullanır.

## Kurulum

Gereksinimler: Node.js 22 veya daha yeni bir LTS sürümü ve npm.

```bash
npm install
npm run dev
```

Yerel geliştirme adresi varsayılan olarak `http://localhost:3000` olur.

## Kalite ve production build

```bash
npm run lint
npx tsc --noEmit
npm run build
```

`npm run build` statik siteyi `out/` klasörüne üretir. Proje `output: "export"`, `images.unoptimized: true` ve `trailingSlash: true` ayarlarıyla sunucu özelliği olmadan çalışır.

## İletişim bilgilerini tamamlama

Yayına almadan önce kökteki `site-config.ts` dosyasındaki TODO alanlarını doğrulanmış bilgilerle doldurun:

- `phone`
- `whatsapp` — ülke koduyla, ör. `905...`
- `address`
- `email`
- `instagram` — tam profil URL’si
- `mapEmbedUrl` — harita servisinin iframe/embed URL’si
- `hours`

Boş bırakılan bilgi sitede gösterilmez. WhatsApp numarası girildiğinde hizmet sayfalarındaki CTA’lar ilgili hizmete özel hazır mesajla otomatik çalışır; telefon girildiğinde `tel:` bağlantıları görünür.

## GitHub reposuna yükleme

```bash
git init
git add .
git commit -m "Darende Gitar sitesini ekle"
git branch -M main
git remote add origin https://github.com/KULLANICI/REPO.git
git push -u origin main
```

`node_modules/`, `.next/` ve `out/` `.gitignore` ile repo dışında tutulur.

## GitHub Pages deployment

`.github/workflows/deploy.yml`, `main` dalına her gönderimde bağımlılıkları kurar, statik build alır ve `out/` klasörünü GitHub Pages’a yükler.

Workflow, proje deposunun adını otomatik olarak GitHub Pages alt yolu şeklinde build'e ekler. Böylece site özel alan adı bağlanmadan önce de `KULLANICI.github.io/REPO/` adresinde CSS, JavaScript ve görselleriyle eksiksiz çalışır.

1. GitHub reposunda **Settings → Pages** bölümünü açın.
2. **Build and deployment → Source** alanında **GitHub Actions** seçin.
3. `main` dalına gönderim yaptıktan sonra **Actions** sekmesindeki iş akışının tamamlanmasını bekleyin.
4. Pages ayarındaki **Custom domain** alanına `darendegitar.com` yazın.
5. DNS yayıldıktan sonra **Enforce HTTPS** seçeneğini etkinleştirin.

`public/CNAME` içinde alan adı, `public/.nojekyll` içinde Jekyll devre dışı bırakma işareti hazırdır.

Özel alan adı etkinleştirildiğinde workflow'daki `NEXT_PUBLIC_BASE_PATH` ve `NEXT_PUBLIC_SITE_URL` ortam değerlerini kaldırıp yeniden build alın; özel alan adı sitenin kökünden hizmet verir.

## `darendegitar.com` DNS ayarları

Alan adının DNS sağlayıcısında kök alan (`@`) için şu dört `A` kaydını ekleyin:

| Tür | Ad | Değer |
| --- | --- | --- |
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |

`www` alt alanını da kullanmak için `www` adına `KULLANICI.github.io` değerini veren bir `CNAME` kaydı ekleyin. Wildcard (`*`) DNS kaydı kullanmayın. DNS değişikliklerinin yayılması 24 saate kadar sürebilir. Güncel ve yetkili kaynak: [GitHub Pages özel alan adı belgeleri](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Proje yapısı

- `app/` — tüm rotalar, SEO metadata, sitemap, robots ve manifest
- `components/` — ortak navigasyon, footer, içerik ve etkileşim bileşenleri
- `components/ui/` — shadcn uyumlu buton, Glass Card, reveal ve iki sıralı slider
- `public/images/` — 10 özgün WebP görsel
- `public/videos/` — nota yağmuru, hero gitarı, stüdyo banner'ı ve iki öğrenci videosu
- `public/video-posters/` — videolar yüklenirken ve azaltılmış hareket modunda kullanılan posterler
- `public/fonts/` — Mephisto fontu ve lisans notu
- `site-config.ts` — tek merkezden yönetilen işletme ve iletişim bilgileri

## Performans ve erişilebilirlik notları

- Başlık arkasındaki stüdyo videosu posterle açılır ve görünür olduğunda yüklenir.
- Nota yağmuru arka planı video ile akar; video yüklenene kadar hareketli CSS/poster katmanı görünür.
- Chroma-key videolar WebGL ile sahneye karışır; desteklenmeyen ortamlarda kaliteli görseller kullanılır.
- Mobilde atmosfer sadeleşir; `prefers-reduced-motion` ile sürekli hareket durur ve poster alternatifleri gösterilir.
- Slider kopyaları `aria-hidden` kullanır ve azaltılmış hareket tercihinde yatay kaydırma alanına dönüşür.
- Klavye odak halkaları, içeriğe geç bağlantısı, tek H1, anlamlı başlık sırası ve açıklayıcı alt metinler bulunur.

## Varlıklar ve lisanslar

- Darende Gitar paketindeki 10 WebP ile `public/videos/` altındaki beş MP4: proje için kullanıcı tarafından sağlanan özgün varlıklar.
- `public/og.png`: Codex yerleşik görsel üretim aracıyla oluşturulan sosyal paylaşım kartı; üretim kaydı `docs/IMAGEGEN-PROMPT.md` içindedir.
- **Mephisto** — RDV Design; CC BY 4.0. Atıf ve kaynak bilgisi `public/fonts/README-LICENSE.txt` içindedir.
- **Sora Variable** — `@fontsource-variable/sora`; SIL Open Font License 1.1.
- **Lucide React** — ISC License.
- **React Icons** — MIT License; WhatsApp ve Instagram marka ikonları için.
- **Framer Motion**, **react-use-measure**, **clsx**, **tailwind-merge** — MIT License.
- Harici component kodu kopyalanmamıştır; bileşenler bu proje için özgün olarak geliştirilmiştir.

Marka ikonları ilgili hak sahiplerine aittir ve yalnızca ilgili hizmeti tanımlamak amacıyla kullanılır.

# Markaz Ali ul Murtaza — Official Website

An Apple-inspired, fully responsive, SEO-ready website for **Markaz Ali ul Murtaza**, an online Qur'anic institute based in Lashari, Okara, Punjab, Pakistan — specializing in **Hifz, Tajweed, Qira'at al-Sab'a & al-Ashra, Tarjuma and Tafseer**.

## ✨ Features

- **Apple-style UI** — frosted-glass navigation, large display typography, pill buttons, bento feature cards, smooth scroll-reveal animations, dark emerald/gold accents.
- **30 languages** — switchable from the globe button in the nav. English, Arabic and Urdu are fully translated; the remaining 27 languages have translated navigation, hero, key headings and CTAs (deep content gracefully falls back to English).
- **Auto language detection** — detects the visitor's browser language first, then falls back to **location detection via timezone** (e.g. `Asia/Karachi` → اردو, `Asia/Riyadh` → العربية, `Europe/Istanbul` → Türkçe). The visitor's choice is remembered via `localStorage`, and every language is directly shareable via `?lang=xx`.
- **Full RTL support** — Arabic, Urdu, Persian, Pashto, Sindhi and Kashmiri flip the entire layout, including typography tuned for Nastaliq/Arabic scripts.
- **SEO / Google indexable**:
  - Semantic HTML with English content baked into the markup (crawlable without JavaScript).
  - `<title>`, meta description/keywords, canonical URL.
  - `hreflang` alternates for all 30 languages + `x-default`.
  - Open Graph + Twitter Card tags.
  - JSON-LD structured data: `EducationalOrganization`, `WebSite`, 4× `Course`, and `FAQPage` (eligible for rich results).
  - `robots.txt` + `sitemap.xml` with language alternates.
  - Google Search Console verification meta placeholder (replace `YOUR_GOOGLE_SEARCH_CONSOLE_CODE`).

## 📁 Structure

```
index.html        ← main page (English default, fully crawlable)
css/style.css     ← design system
js/i18n.js        ← 30-language dictionary
js/app.js         ← language detection/switching, animations
robots.txt
sitemap.xml
images/           ← generated photography
```

## 🚀 Deploy

It's a static site — upload the folder to **any** host (Vercel, Netlify, GitHub Pages, cPanel, etc.). Then:

1. **Point your domain** — replace `markazalimurtaza.com` in `index.html` (canonical, hreflang, og:url, JSON-LD), `robots.txt` and `sitemap.xml`.
2. **Update contact details** — search for `info@markazalimurtaza.com` and `wa.me/923014592661` in `index.html` and replace with real email/WhatsApp numbers.
3. **Google Search Console** — verify your domain, paste the verification code into the meta tag, and submit `sitemap.xml` for indexing.
4. *(Optional)* Add Google Analytics (GA4) snippet in `<head>`.

## ⚠️ Before going live — please customize

- **Stats & testimonials** (12,000+ students, 45+ countries, quotes, etc.) are **sample placeholders** — replace with real figures and real student feedback.
- **Translations**: the non-English/Arabic/Urdu strings were generated as a starting point — have them reviewed by native speakers. Add deeper translations for any language by extending its dictionary in `js/i18n.js` (keys fall back to English automatically).
- **Program artwork** is hand-built colorful inline SVG (no AI images). Real photos are used only for the Qurras (provided by the institution).
- Social profile links in the JSON-LD (`sameAs`) are placeholders.

## 🌐 The 30 languages

English · العربية · اردو · فارسی · پښتو · سنڌي · کٲشُر · ਪੰਜਾਬੀ · Türkçe · Azərbaycan dili · Қазақ тілі · Oʻzbekcha · Bahasa Indonesia · Bahasa Melayu · বাংলা · हिन्दी · தமிழ் · Soomaali · Kiswahili · Hausa · አማርኛ · Français · Español · Deutsch · Italiano · Português · Русский · 中文 · 日本語 · 한국어

## 📚 Hadith Library (`hadith.html`)

- **17 canonical books / 50,884 hadiths** downloaded from [AhmedBaset/hadith-json](https://github.com/AhmedBaset/hadith-json) (scraped from Sunnah.com) into `data/hadith/*.json`.
- Books: the Nine Books (Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasa'i, Ibn Majah, Malik, Ahmad, Darimi) + Riyad as-Salihin, Mishkat, Bulugh al-Maram, Al-Adab al-Mufrad, Shamail + the three Forties.
- Reader: click-to-load per book (lazy), in-book search, chapter filter, pagination (10/page), Arabic + English side by side.
- Library UI localized in all 30 site languages; hadith text shown in original Arabic with English translation (the source dataset's languages).
- Attribution link to the dataset included in the footer.

### 🌐 Translations in all 30 languages (v2)

The reader includes a **Translation language** selector with all 30 site languages. Hadith English text is translated live via a dual-provider machine-translation engine (MyMemory primary, Google fallback), sentence-chunked and cached in memory + `localStorage` for instant re-reads. The original Arabic is always shown as the authoritative text, and each translation is labelled with its language + "machine translation". Display modes (Arabic+Translation / Arabic only / Translation only), text sizing, bookmarks, copy/share, reading progress bar and a premium dark hero complete the experience. Kashmiri has no public MT engine — English is shown there with a notice.

## 📣 Indexing & promotion checklist (before launch)

The site is fully crawlable (semantic HTML, robots.txt, sitemap.xml with `lastmod`, hreflang, Open Graph, Twitter Cards, JSON-LD rich-result schemas). To actually get indexed and promoted:

1. **Deploy** to your real domain (any static host).
2. **Google Search Console**: verify the domain, then submit `https://YOURDOMAIN/sitemap.xml`. Use *URL Inspection → Request Indexing* for `/`, `/hadith.html`, `/donate.html` for fast first indexing.
3. Replace `YOUR_GOOGLE_SEARCH_CONSOLE_CODE` in `index.html` with your verification code.
4. **Bing Webmaster Tools**: import the GSC property — covers Bing/DuckDuckGo results.
5. **Google Business Profile**: register the madrasa in Lashari, Okara (category: Islamic school) — local searches like "online Quran classes Okara" will find you.
6. **Social**: create Facebook/Instagram/YouTube pages matching the `sameAs` links in the JSON-LD; share `/hadith.html` and `/donate.html` — OG/Twitter tags produce rich share cards.
7. **WhatsApp**: broadcast the donate link with the pre-filled message flow; add the QR of your domain in the madrasa.
8. Add **GA4** analytics to watch which languages/countries convert.
9. Keep content fresh (hadith data is versioned upstream) so crawlers return often.

## 📄 Static hadith archive (Google-indexable)

Every one of the **50,884 hadiths** is also published as plain HTML (Arabic + English) under `hadith/<book>/<page>.html` — no JavaScript needed, fully crawlable by Google/Bing. Regenerate anytime after data updates:

```bash
python3 build_static_hadith.py   # rebuilds hadith/ + updates sitemap.xml
```

Translations are offered in **30 languages** in the interactive library (live machine translation); the static archive carries the authoritative Arabic + English for search engines.

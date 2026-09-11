/**
 * Markaz Ali ul Murtaza — edge hadith renderer
 * Serves every hadith page in 30 languages: /hadith/<book>/<page>.html?lang=xx
 * Translations are fetched once (gtx -> MyMemory), cached permanently at the edge.
 * Base (no lang) pages get hreflang tags injected so Google sees all alternates.
 */

const LANGS = {
  en: "English", ar: "العربية", ur: "اردو", fa: "فارسی", ps: "پښتو", sd: "سنڌي",
  ks: "کأشُر", pa: "ਪੰਜਾਬੀ", tr: "Türkçe", az: "Azərbaycan", kk: "Қазақша",
  uz: "Oʻzbekcha", id: "Indonesia", ms: "Melayu", bn: "বাংলা", hi: "हिन्दी",
  ta: "தமிழ்", so: "Soomaali", sw: "Kiswahili", ha: "Hausa", am: "አማርኛ",
  fr: "Français", es: "Español", de: "Deutsch", it: "Italiano", pt: "Português",
  ru: "Русский", zh: "中文", ja: "日本語", ko: "한국어",
};
const RTL = new Set(["ar", "ur", "fa", "ps", "sd", "ks"]);
const BOOKS = {
  bukhari: "Sahih al-Bukhari", muslim: "Sahih Muslim", abudawud: "Sunan Abi Dawud",
  tirmidhi: "Jami' at-Tirmidhi", nasai: "Sunan an-Nasa'i", ibnmajah: "Sunan Ibn Majah",
  malik: "Muwatta Malik", ahmed: "Musnad Ahmad", darimi: "Sunan ad-Darimi",
  riyad_assalihin: "Riyad as-Salihin", mishkat_almasabih: "Mishkat al-Masabih",
  bulugh_almaram: "Bulugh al-Maram", aladab_almufrad: "Al-Adab Al-Mufrad",
  shamail_muhammadiyah: "Shamail al-Muhammadiyah", nawawi40: "Forty Hadith of an-Nawawi",
  qudsi40: "Forty Hadith Qudsi", shahwaliullah40: "Forty Hadith of Shah Waliullah",
};
const PER_PAGE = 200;

/* ---------------- helpers ---------------- */
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36); }

function chunkText(text, max = 440) {
  if (text.length <= max) return [text];
  const parts = []; let buf = "";
  for (const sent of text.split(/(?<=[.!?؟。])\s+/)) {
    if ((buf + " " + sent).length > max && buf) { parts.push(buf); buf = sent; }
    else buf = buf ? buf + " " + sent : sent;
    while (buf.length > max) { parts.push(buf.slice(0, max)); buf = buf.slice(max); }
  }
  if (buf) parts.push(buf);
  return parts;
}

async function viaGtx(text, lang) {
  const out = [];
  for (const c of chunkText(text)) {
    const u = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${lang}&dt=t&q=${encodeURIComponent(c)}`;
    const r = await fetch(u, { cf: { cacheTtl: 86400 * 300 } });
    if (!r.ok) return null;
    const d = await r.json();
    out.push((d[0] || []).map((x) => x[0]).join(""));
  }
  return out.join(" ").trim();
}

async function viaMM(text, lang, email) {
  const out = [];
  for (const c of chunkText(text)) {
    let u = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(c)}&langpair=en|${lang}`;
    if (email) u += `&de=${encodeURIComponent(email)}`;
    const r = await fetch(u);
    if (!r.ok) return null;
    const d = await r.json();
    const t = d?.responseData?.translatedText;
    if (!t || /INVALID|NO QUERY|PLEASE TRY AGAIN/i.test(t)) return null;
    out.push(t);
  }
  return out.join(" ").trim();
}

async function translate(text, lang, env, ctx) {
  if (!text || lang === "en") return text;
  const key = `https://tr.cache/${lang}/${hash(text)}`;
  const cache = caches.default;
  const hit = await cache.match(key);
  if (hit) return hit.text();
  let out = null;
  try { out = await viaGtx(text, lang); } catch (e) { /* next */ }
  if (!out) { try { out = await viaMM(text, lang, env.MM_EMAIL); } catch (e) { /* fallback */ } }
  if (out && out !== text) {
    ctx.waitUntil(cache.put(key, new Response(out, { headers: { "Cache-Control": "public, max-age=31536000" } })));
  }
  return out || text;
}

/* ---------------- rendering ---------------- */
const CSS = `
:root{--gold:#C9A227;--green:#0A6B3D;--ink:#1d1d1f}
*{box-sizing:border-box}
body{margin:0;font-family:-apple-system,'Segoe UI',Roboto,Arial,sans-serif;background:#f5f5f7;color:var(--ink);line-height:1.6}
.wrap{max-width:880px;margin:0 auto;padding:0 20px}
header.site{background:#01411c;color:#fff;padding:14px 0}
header.site .wrap{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
header.site a{color:#F0C75E;text-decoration:none;font-weight:600;font-size:14px}
.brand{font-family:Amiri,serif;font-size:20px;color:#F0C75E}
nav.crumb{font-size:13px;color:#6e6e73;padding:14px 0 0}
nav.crumb a{color:var(--green);text-decoration:none}
h1{font-size:26px;margin:10px 0 2px}
.ar-name{font-family:Amiri,'Noto Naskh Arabic',serif;font-size:30px;color:var(--green);margin:0}
.meta{color:#6e6e73;font-size:13px;margin:6px 0 14px}
.langs{display:flex;flex-wrap:wrap;gap:6px;margin:14px 0 22px}
.langs a{font-size:12.5px;padding:5px 12px;border-radius:99px;background:#fff;border:1.5px solid #d2d2d7;color:#333;text-decoration:none}
.langs a.on{background:var(--green);border-color:var(--green);color:#fff;font-weight:700}
article.h{background:#fff;border-radius:16px;padding:22px 24px;margin:0 0 14px;box-shadow:0 1px 4px rgba(0,0,0,.06)}
.h .num{display:inline-block;background:var(--green);color:#fff;border-radius:99px;padding:2px 12px;font-size:12px;font-weight:700;margin-bottom:10px}
.h .ar{font-family:Amiri,'Noto Naskh Arabic',serif;font-size:24px;line-height:2;direction:rtl;text-align:right;color:#123;margin:8px 0 12px}
.h .nar{font-weight:700;font-size:13px;color:var(--green);margin-bottom:2px}
.h .en{font-size:15.5px;color:#333}
h2.ch{font-family:Amiri,'Noto Naskh Arabic',serif;font-size:22px;color:var(--green);border-bottom:2px solid #e3c766;padding-bottom:6px;margin:30px 0 14px}
h2.ch small{display:block;font-family:inherit;font-size:14px;color:#6e6e73;font-weight:400}
nav.pn{display:flex;justify-content:space-between;gap:10px;margin:22px 0 40px;flex-wrap:wrap}
nav.pn a{background:var(--green);color:#fff;text-decoration:none;border-radius:99px;padding:10px 20px;font-size:14px;font-weight:600}
nav.pn a.ghost{background:#fff;color:var(--green);border:1.5px solid var(--green)}
ol.pages{columns:2;font-size:14.5px;line-height:2.1}
ol.pages a{color:var(--green);text-decoration:none}
footer{background:#01411c;color:#cfe9d9;text-align:center;padding:20px;font-size:13px;margin-top:30px}
html{-webkit-text-size-adjust:100%}
h1,.ar-name,.meta,nav.crumb{overflow-wrap:anywhere}
.h .en,.h .nar{overflow-wrap:anywhere;hyphens:auto}
@media(max-width:640px){
  .wrap{padding:0 14px}
  ol.pages{columns:1}
  header.site{padding:10px 0}
  header.site .wrap{justify-content:center;text-align:center;gap:6px}
  .brand{font-size:17px}
  h1{font-size:20px}
  .ar-name{font-size:24px}
  article.h{padding:16px;border-radius:12px}
  .h .ar{font-size:19px}
  nav.pn a{padding:9px 14px;font-size:13px}
  .langs a{font-size:11.5px;padding:4px 10px}
  footer{padding:16px 12px}
}
/* Urdu: Nastaliq + generous line-height */
html[lang="ur"] body{font-family:'Noto Nastaliq Urdu',-apple-system,'Segoe UI',Arial,sans-serif;line-height:2.2}
html[lang="ur"] .h .en{font-size:16px;line-height:2.4}
html[lang="ur"] h1,html[lang="ur"] h2.ch,html[lang="ur"] nav.pn a{line-height:2}
/* Arabic-script RTL UI languages */
html[dir="rtl"] .h .en,html[dir="rtl"] .h .nar{text-align:right}
html[dir="rtl"] nav.crumb,html[dir="rtl"] .meta{text-align:right}
html[dir="rtl"] .langs,html[dir="rtl"] nav.pn{direction:rtl}
html[dir="rtl"] ol.pages{direction:rtl}
/* CJK: comfortable line-height */
html[lang="zh"] body,html[lang="ja"] body,html[lang="ko"] body{line-height:1.85}
/* Amiri for Arabic-script UI text (fa/ps/sd/ks/ar) */
html[lang="fa"] .h .en,html[lang="ps"] .h .en,html[lang="sd"] .h .en,html[lang="ks"] .h .en{font-family:'Noto Naskh Arabic',Amiri,serif;font-size:17px;line-height:1.9}
`;

function hreflangs(path) {
  const base = `https://markazalimurtaza.com${path}`;
  const links = Object.keys(LANGS)
    .map((c) => `<link rel="alternate" hreflang="${c}" href="${base}?lang=${c}">`)
    .join("\n");
  return `${links}\n<link rel="alternate" hreflang="x-default" href="${base}">`;
}

function langSwitcher(path, lang) {
  return `<div class="langs">${Object.entries(LANGS)
    .map(([c, n]) => `<a class="${c === lang ? "on" : ""}" href="?lang=${c}">${n}</a>`)
    .join("")}</div>`;
}

function pageShell({ title, desc, path, lang, body }) {
  const dir = RTL.has(lang) ? ' dir="rtl"' : "";
  const canon = `https://markazalimurtaza.com${path}${lang && lang !== "en" ? `?lang=${lang}` : ""}`;
  return `<!DOCTYPE html>
<html lang="${lang || "en"}"${dir}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="index,follow,max-snippet:-1">
<link rel="canonical" href="${canon}">
${hreflangs(path)}
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(title)}">
<meta property="og:url" content="${canon}">
<link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Naskh+Arabic:wght@400;700${lang === "ur" ? "&family=Noto+Nastaliq+Urdu:wght@400;700" : ""}&display=swap" rel="stylesheet">
<style>${CSS}</style>
</head>
<body>
<header class="site"><div class="wrap"><span class="brand">مركز علي المرتضى — Markaz Ali ul Murtaza</span><span><a href="../../index.html">Home</a> · <a href="../../hadith.html">Hadith Library</a> · <a href="../../donate.html">Donate</a></span></div></header>
<div class="wrap">
${body}
</div>
<footer>Markaz Ali ul Murtaza · Lashari, Okara, Punjab, Pakistan · <a style="color:#F0C75E" href="../../donate.html">Support the students</a></footer>
</body></html>`;
}

async function loadBook(env, origin, slug) {
  const r = await env.ASSETS.fetch(`${origin}/data/hadith/${slug}.json`);
  if (!r.ok) return null;
  return r.json();
}

function hadithBlock(h, trText, trNar) {
  const num = h.idInBook ?? h.id;
  const nar = trNar ? `<p class="nar">${esc(trNar)}</p>` : "";
  return `<article class="h" id="h${num}">
<span class="num">Hadith ${num}</span>
<p class="ar" lang="ar" dir="rtl">${esc(h.arabic)}</p>
${nar}<p class="en">${esc(trText)}</p>
</article>`;
}

async function renderHadithPage(slug, pageNo, lang, url, env, ctx) {
  const book = await loadBook(env, url.origin, slug);
  if (!book) return new Response("Book not found", { status: 404 });
  const hs = book.hadiths;
  const pages = Math.max(1, Math.ceil(hs.length / PER_PAGE));
  const i = pageNo - 1;
  if (i < 0 || i >= pages) return new Response("Page not found", { status: 404 });
  const chunk = hs.slice(i * PER_PAGE, (i + 1) * PER_PAGE);
  const name = BOOKS[slug];
  const lo = chunk[0].idInBook ?? i * PER_PAGE + 1;
  const hi = chunk[chunk.length - 1].idInBook ?? (i + 1) * PER_PAGE;
  const q = lang && lang !== "en" ? `?lang=${lang}` : "";

  const chapters = {};
  for (const c of book.chapters || []) chapters[c.id] = c;

  const parts = [];
  parts.push(`<nav class="crumb"><a href="../../hadith.html">Hadith Library</a> › <a href="index.html${q}">${esc(name)}</a> › Hadith ${lo}–${hi}</nav>
<h1>${esc(name)} <span style="color:#6e6e73;font-size:16px;font-weight:400">hadith ${lo}–${hi} · page ${pageNo}/${pages} · ${LANGS[lang] || "English"}</span></h1>`);
  parts.push(langSwitcher(`/hadith/${slug}/${pageNo}.html`, lang));

  let lastCh = null;
  for (const h of chunk) {
    if (h.chapterId !== lastCh) {
      lastCh = h.chapterId;
      const c = chapters[h.chapterId];
      if (c) {
        const chTr = lang !== "en" && lang !== "ar" ? await translate(c.english || "", lang, env, ctx) : c.english || "";
        parts.push(`<h2 class="ch"><span lang="ar" dir="rtl">${esc(c.arabic)}</span><small>${esc(chTr)}</small></h2>`);
      }
    }
    const en = typeof h.english === "object" ? h.english : { narrator: "", text: String(h.english) };
    let trText = en.text, trNar = en.narrator;
    if (lang === "ar") { trText = ""; trNar = ""; }
    else if (lang !== "en") {
      trText = await translate(en.text || "", lang, env, ctx);
      trNar = en.narrator ? await translate(en.narrator, lang, env, ctx) : "";
    }
    parts.push(hadithBlock(h, trText, trNar));
  }

  parts.push(`<nav class="pn">
<a class="ghost" href="index.html${q}">« Book contents</a>
${i > 0 ? `<a href="${pageNo - 1}.html${q}">← Previous</a>` : "<span></span>"}
<span></span>
${i < pages - 1 ? `<a href="${pageNo + 1}.html${q}">Next →</a>` : "<span></span>"}
</nav>`);
  if (lang !== "en" && lang !== "ar") parts.push(`<p class="meta">Machine translation (${LANGS[lang]}). Arabic original is authoritative.</p>`);

  const html = pageShell({
    title: `${name} — Hadith ${lo}–${hi} (${LANGS[lang] || "English"})`,
    desc: `${name} hadith ${lo} in ${LANGS[lang] || "English"} with Arabic original — Markaz Ali ul Murtaza.`,
    path: `/hadith/${slug}/${pageNo}.html`,
    lang,
    body: parts.join("\n"),
  });
  return new Response(html, { headers: { "Content-Type": "text/html;charset=utf-8", "Cache-Control": "public, s-maxage=3600" } });
}

async function renderBookIndex(slug, lang, url, env, ctx) {
  const book = await loadBook(env, url.origin, slug);
  if (!book) return new Response("Book not found", { status: 404 });
  const hs = book.hadiths;
  const pages = Math.max(1, Math.ceil(hs.length / PER_PAGE));
  const name = BOOKS[slug];
  const q = lang && lang !== "en" ? `?lang=${lang}` : "";
  const links = Array.from({ length: pages }, (_, k) =>
    `<li><a href="${k + 1}.html${q}">Hadith ${k * PER_PAGE + 1}–${Math.min((k + 1) * PER_PAGE, hs.length)}</a></li>`).join("");
  const intro = lang !== "en" && lang !== "ar"
    ? await translate(`Read all ${hs.length} hadiths of ${name} with original Arabic and ${LANGS[lang]} translation.`, lang, env, ctx)
    : `Read all ${hs.length} hadiths of ${name} with original Arabic and English translation.`;
  const html = pageShell({
    title: `${name} — all ${hs.length.toLocaleString()} hadiths (${LANGS[lang] || "English"})`,
    desc: intro,
    path: `/hadith/${slug}/index.html`,
    lang,
    body: `<nav class="crumb"><a href="../../hadith.html">Hadith Library</a> › ${esc(name)}</nav>
<h1>${esc(name)}</h1>
<p class="meta">${hs.length.toLocaleString()} hadiths · ${pages} pages · ${LANGS[lang] || "English"}</p>
${langSwitcher(`/hadith/${slug}/index.html`, lang)}
<p>${esc(intro)}</p>
<ol class="pages">${links}</ol>`,
  });
  return new Response(html, { headers: { "Content-Type": "text/html;charset=utf-8", "Cache-Control": "public, s-maxage=3600" } });
}

/* inject hreflang into the pre-generated static pages (no ?lang) */
async function injectHreflang(path, env, ctx) {
  const cache = caches.default;
  const key = `https://hl.cache${path}`;
  let hit = await cache.match(key);
  if (!hit) {
    const r = await env.ASSETS.fetch(`https://assets.local${path}`);
    if (!r.ok) return r;
    const html = (await r.text()).replace("</head>", `${hreflangs(path)}\n</head>`);
    const resp = new Response(html, { headers: { "Content-Type": "text/html;charset=utf-8", "Cache-Control": "public, max-age=86400" } });
    ctx.waitUntil(cache.put(key, resp.clone()));
    return resp;
  }
  return hit;
}

/* ---------------- entry ---------------- */
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const p = url.pathname;
    const m = p.match(/^\/hadith\/([a-z0-9_]+)\/(index|\d+)\.html$/);
    let lang = (url.searchParams.get("lang") || "").toLowerCase();
    if (!LANGS[lang]) lang = "en";

    if (m && BOOKS[m[1]]) {
      const slug = m[1];
      if (m[2] === "index") return renderBookIndex(slug, lang, url, env, ctx);
      if (lang !== "en") return renderHadithPage(slug, parseInt(m[2], 10), lang, url, env, ctx);
      return injectHreflang(p, env, ctx); // English base = static page + hreflang
    }
    return env.ASSETS.fetch(request);
  },
};

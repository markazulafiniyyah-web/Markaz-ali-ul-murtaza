#!/usr/bin/env python3
"""Generate static HTML pages for every hadith (Arabic + English) so all
50,884 hadiths are fully crawlable/indexable by Google & other engines."""
import json, os, html, math, io

BASE = "https://markazalimurtaza.com"
OUT = "hadith"
PER_PAGE = 200

BOOKS = [
    ("bukhari", "Sahih al-Bukhari", "صحيح البخاري"),
    ("muslim", "Sahih Muslim", "صحيح مسلم"),
    ("abudawud", "Sunan Abi Dawud", "سنن أبي داود"),
    ("tirmidhi", "Jami' at-Tirmidhi", "جامع الترمذي"),
    ("nasai", "Sunan an-Nasa'i", "سنن النسائي"),
    ("ibnmajah", "Sunan Ibn Majah", "سنن ابن ماجه"),
    ("malik", "Muwatta Malik", "موطأ مالك"),
    ("ahmed", "Musnad Ahmad", "مسند أحمد"),
    ("darimi", "Sunan ad-Darimi", "سنن الدارمي"),
    ("riyad_assalihin", "Riyad as-Salihin", "رياض الصالحين"),
    ("mishkat_almasabih", "Mishkat al-Masabih", "مشكاة المصابيح"),
    ("bulugh_almaram", "Bulugh al-Maram", "بلوغ المرام"),
    ("aladab_almufrad", "Al-Adab Al-Mufrad", "الأدب المفرد"),
    ("shamail_muhammadiyah", "Shamail al-Muhammadiyah", "الشمائل المحمدية"),
    ("nawawi40", "Forty Hadith of an-Nawawi", "الأربعون النووية"),
    ("qudsi40", "Forty Hadith Qudsi", "الأربعون القدسية"),
    ("shahwaliullah40", "Forty Hadith of Shah Waliullah", "أربعون شاه ولي الله"),
]

CSS = """
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
.meta{color:#6e6e73;font-size:13px;margin:6px 0 18px}
article.h{background:#fff;border-radius:16px;padding:22px 24px;margin:0 0 14px;box-shadow:0 1px 4px rgba(0,0,0,.06)}
.h .num{display:inline-block;background:var(--green);color:#fff;border-radius:99px;padding:2px 12px;font-size:12px;font-weight:700;margin-bottom:10px}
.h .ar{font-family:Amiri,'Noto Naskh Arabic',serif;font-size:24px;line-height:2;direction:rtl;text-align:right;color:#123;margin:8px 0 12px}
.h .nar{font-weight:700;font-size:13px;color:var(--green);margin-bottom:2px}
.h .en{font-size:15.5px;color:#333}
nav.pn{display:flex;justify-content:space-between;gap:10px;margin:22px 0 40px;flex-wrap:wrap}
nav.pn a{background:var(--green);color:#fff;text-decoration:none;border-radius:99px;padding:10px 20px;font-size:14px;font-weight:600}
nav.pn a.ghost{background:#fff;color:var(--green);border:1.5px solid var(--green)}
h2.ch{font-family:Amiri,'Noto Naskh Arabic',serif;font-size:22px;color:var(--green);border-bottom:2px solid #e3c766;padding-bottom:6px;margin:30px 0 14px;display:flex;flex-direction:column;gap:2px}
h2.ch small{font-family:-apple-system,'Segoe UI',Arial,sans-serif;font-size:13px;color:#6e6e73;font-weight:400}
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
  footer{padding:16px 12px}
}
"""

def esc(s): return html.escape(s or "", quote=False)

def head(title, desc, canonical, extra=""):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
<meta name="robots" content="index,follow,max-snippet:-1">
<link rel="canonical" href="{canonical}">
<meta property="og:type" content="article">
<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:url" content="{canonical}">
<meta property="og:site_name" content="Markaz Ali ul Murtaza">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Naskh+Arabic:wght@400;700&display=swap" rel="stylesheet">
<style>{CSS}</style>
{extra}</head>
<body>
<header class="site"><div class="wrap"><span class="brand">مركز علي المرتضى — Markaz Ali ul Murtaza</span><span><a href="../../index.html">Home</a> · <a href="../../hadith.html">Hadith Library</a> · <a href="../../donate.html">Donate</a></span></div></header>
<div class="wrap">
"""

FOOT = """</div>
<footer>Markaz Ali ul Murtaza · Lashari, Okara, Punjab, Pakistan · <a style="color:#F0C75E" href="../../donate.html">Support the students</a></footer>
</body></html>
"""

def hadith_html(h):
    ar = esc(h.get("arabic", ""))
    en = h.get("english", "")
    if isinstance(en, dict):
        nar, txt = esc(en.get("narrator", "")), esc(en.get("text", ""))
    else:
        nar, txt = "", esc(str(en))
    nar_html = f'<p class="nar">{nar}</p>' if nar else ""
    num = h.get("idInBook", h.get("id", ""))
    return f"""<article class="h" id="h{num}">
<span class="num">Hadith {num}</span>
<p class="ar" lang="ar" dir="rtl">{ar}</p>
{nar_html}<p class="en">{txt}</p>
</article>"""

def chapter_heading(cid, chapters):
    c = chapters.get(cid)
    if not c: return ""
    ar, en = esc(c.get("arabic", "")), esc(c.get("english", ""))
    return f'<h2 class="ch"><span lang="ar" dir="rtl">{ar}</span><small>{en}</small></h2>'

def page_nav(book_slug, i, n):
    out = ['<nav class="pn">']
    out.append(f'<a class="ghost" href="index.html">« Book contents</a>')
    if i > 1: out.append(f'<a href="{i-1}.html">← Previous</a>')
    out.append('<span></span>')
    if i < n: out.append(f'<a href="{i+1}.html">Next →</a>')
    out.append('</nav>')
    return "\n".join(out)

def main():
    os.makedirs(OUT, exist_ok=True)
    sitemap_urls, total_h, total_p = [], 0, 0
    for slug, name, arname in BOOKS:
        with io.open(f"data/hadith/{slug}.json", encoding="utf-8") as f:
            book = json.load(f)
        data = book["hadiths"]
        chapters = {c["id"]: c for c in book.get("chapters", [])}
        n = len(data)
        total_h += n
        pages = max(1, math.ceil(n / PER_PAGE))
        total_p += pages
        d = os.path.join(OUT, slug)
        os.makedirs(d, exist_ok=True)

        # ---- book index page ----
        links = "".join(
            f'<li><a href="{i+1}.html">Hadith {i*PER_PAGE+1}–{min((i+1)*PER_PAGE, n)}</a></li>'
            for i in range(pages))
        idx_title = f"{name} ({arname}) — all {n:,} hadiths"
        idx_desc = f"Read all {n:,} hadiths of {name} with original Arabic and English translation — Markaz Ali ul Murtaza hadith library."
        idx_canon = f"{BASE}/hadith/{slug}/index.html"
        with io.open(os.path.join(d, "index.html"), "w", encoding="utf-8") as f:
            f.write(head(idx_title, idx_desc, idx_canon))
            f.write(f"""<nav class="crumb"><a href="../../hadith.html">Hadith Library</a> › {esc(name)}</nav>
<h1>{esc(name)}</h1><p class="ar-name" lang="ar">{esc(arname)}</p>
<p class="meta">{n:,} hadiths · {pages} pages · Arabic original with English translation · also readable in 30 languages in the <a href="../../hadith.html">interactive library</a></p>
<ol class="pages">{links}</ol>
""")
            f.write(FOOT)
        sitemap_urls.append(f"{BASE}/hadith/{slug}/index.html")

        # ---- hadith pages ----
        for i in range(pages):
            chunk = data[i*PER_PAGE:(i+1)*PER_PAGE]
            first, last = chunk[0], chunk[-1]
            lo = first.get("idInBook", i*PER_PAGE+1)
            hi = last.get("idInBook", (i+1)*PER_PAGE)
            title = f"{name} — Hadith {lo}–{hi} (page {i+1}/{pages})"
            snippet = (first.get("english") or {})
            snip_txt = snippet.get("text", "") if isinstance(snippet, dict) else str(snippet)
            desc = f"{esc(name)} hadith {lo}: " + snip_txt[:150].replace("\n", " ") + "…"
            canon = f"{BASE}/hadith/{slug}/{i+1}.html"
            with io.open(os.path.join(d, f"{i+1}.html"), "w", encoding="utf-8") as f:
                f.write(head(title, desc, canon))
                f.write(f"""<nav class="crumb"><a href="../../hadith.html">Hadith Library</a> › <a href="index.html">{esc(name)}</a> › Hadith {lo}–{hi}</nav>
<h1>{esc(name)} <span style="color:#6e6e73;font-size:16px;font-weight:400">hadith {lo}–{hi} · page {i+1}/{pages}</span></h1>
""")
                parts, last_ch = [], object()
                for h in chunk:
                    cid = h.get("chapterId")
                    if cid != last_ch:
                        parts.append(chapter_heading(cid, chapters))
                        last_ch = cid
                    parts.append(hadith_html(h))
                f.write("\n".join(p for p in parts if p))
                f.write(page_nav(slug, i+1, pages))
                f.write(FOOT)
            sitemap_urls.append(canon)
        print(f"  ✓ {slug}: {n:,} hadiths → {pages} pages")

    # ---- append static pages to sitemap.xml (idempotent) ----
    with io.open("sitemap.xml", encoding="utf-8") as f:
        sm = f.read()
    import re as _re
    sm = _re.sub(r'\n?  <url><loc>https://markazalimurtaza\.com/hadith/.*?</url>', '', sm, flags=_re.S)
    entries = "\n".join(
        f'  <url><loc>{u}</loc><lastmod>2026-09-08</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>'
        for u in sitemap_urls)
    sm = sm.replace("</urlset>", entries + "\n</urlset>")
    with io.open("sitemap.xml", "w", encoding="utf-8") as f:
        f.write(sm)
    print(f"\nDone: {total_h:,} hadiths across {total_p} hadith pages + {len(BOOKS)} book indexes")
    print(f"Sitemap now lists {sm.count('<loc>')} URLs")

if __name__ == "__main__":
    main()

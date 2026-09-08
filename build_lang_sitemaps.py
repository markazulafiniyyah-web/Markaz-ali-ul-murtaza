#!/usr/bin/env python3
"""Generate per-language sitemaps for the 30-language edge-rendered hadith pages."""
import os, io, math, json

BASE = "https://markazalimurtaza.com"
LANGS = ["en","ar","ur","fa","ps","sd","ks","pa","tr","az","kk","uz","id","ms",
         "bn","hi","ta","so","sw","ha","am","fr","es","de","it","pt","ru","zh","ja","ko"]
PER_PAGE = 200

books = []
for fn in sorted(os.listdir("data/hadith")):
    if fn.endswith(".json"):
        slug = fn[:-5]
        with io.open(f"data/hadith/{fn}", encoding="utf-8") as f:
            n = len(json.load(f)["hadiths"])
        books.append((slug, n))

os.makedirs("sitemaps/lang", exist_ok=True)
for lang in LANGS:
    urls = []
    for slug, n in books:
        pages = max(1, math.ceil(n / PER_PAGE))
        urls.append(f"{BASE}/hadith/{slug}/index.html?lang={lang}")
        urls.extend(f"{BASE}/hadith/{slug}/{i+1}.html?lang={lang}" for i in range(pages))
    body = "\n".join(f"  <url><loc>{u}</loc><lastmod>2026-09-09</lastmod></url>" for u in urls)
    with io.open(f"sitemaps/lang/{lang}.xml", "w", encoding="utf-8") as f:
        f.write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + body + "\n</urlset>\n")

idx = "\n".join(f"  <sitemap><loc>{BASE}/sitemaps/lang/{l}.xml</loc><lastmod>2026-09-09</lastmod></sitemap>" for l in LANGS)
with io.open("sitemap-langs.xml", "w", encoding="utf-8") as f:
    f.write('<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + idx + "\n</sitemapindex>\n")

# robots.txt: advertise both sitemap locations
rb = io.open("robots.txt", encoding="utf-8").read()
lines = [l for l in rb.splitlines() if not l.startswith("Sitemap:")]
lines.append(f"Sitemap: {BASE}/sitemap.xml")
lines.append(f"Sitemap: {BASE}/sitemap-langs.xml")
io.open("robots.txt", "w", encoding="utf-8").write("\n".join(lines) + "\n")
print(f"books: {len(books)} | languages: {len(LANGS)} | URLs per language: {len(urls)}")
print("wrote sitemap-langs.xml + sitemaps/lang/*.xml + robots.txt")

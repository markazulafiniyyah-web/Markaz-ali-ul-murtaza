/* ============================================================
   Markaz Ali ul Murtaza — Hadith Library (premium edition)
   Data: github.com/AhmedBaset/hadith-json (Arabic + English)
   · Live machine translation into all 30 site languages (cached)
   · Display modes, text sizing, bookmarks, copy/share, progress
   ============================================================ */
(function () {
  "use strict";
  var I18N = window.I18N;

  /* ---------- localized UI for the 27 core languages ---------- */
  var CORE = {
    fa:{nav_hadith:"کتابخانه حدیث",lib_title:"کتابخانه حدیث.",lib_search:"جستجو در این کتاب…",lib_open:"بخوانید",hd_trans_lang:"زبان ترجمه",hd_all:"همه"},
    ps:{nav_hadith:"د حدیث کتابتون",lib_title:"د حدیث کتابتون.",lib_search:"پدې کتاب کې لټون…",lib_open:"ولولئ",hd_trans_lang:"د ژباړې ژبه",hd_all:"ټول"},
    sd:{nav_hadith:"حديث لائبريري",lib_title:"حديث لائبريري.",lib_search:"هن ڪتاب ۾ ڳوليو…",lib_open:"پڙهو",hd_trans_lang:"ترجمي جي ٻولي",hd_all:"سڀ"},
    ks:{nav_hadith:"حدیث لائبریری",lib_title:"حدیث لائبریری.",lib_search:"امس کتابس مَنٛز ژھانڈیو…",lib_open:"پڑھیو",hd_trans_lang:"ترجمہٕ زبان",hd_all:"تمام"},
    pa:{nav_hadith:"ਹਦੀਸ ਲਾਇਬ੍ਰੇਰੀ",lib_title:"ਹਦੀਸ ਲਾਇਬ੍ਰੇਰੀ।",lib_search:"ਇਸ ਕਿਤਾਬ ਵਿੱਚ ਖੋਜੋ…",lib_open:"ਪੜ੍ਹੋ",hd_trans_lang:"ਅਨੁਵਾਦ ਭਾਸ਼ਾ",hd_all:"ਸਭ"},
    tr:{nav_hadith:"Hadis Kütüphanesi",lib_title:"Hadis Kütüphanesi.",lib_search:"Bu kitapta ara…",lib_open:"Oku",hd_trans_lang:"Çeviri dili",hd_all:"Tümü"},
    az:{nav_hadith:"Hədis Kitabxanası",lib_title:"Hədis Kitabxanası.",lib_search:"Bu kitabda axtar…",lib_open:"Oxu",hd_trans_lang:"Tərcümə dili",hd_all:"Hamısı"},
    kk:{nav_hadith:"Хадис кітапханасы",lib_title:"Хадис кітапханасы.",lib_search:"Осы кітаптан іздеу…",lib_open:"Оқу",hd_trans_lang:"Аударма тілі",hd_all:"Барлығы"},
    uz:{nav_hadith:"Hadis kutubxonasi",lib_title:"Hadis kutubxonasi.",lib_search:"Ushbu kitobda qidirish…",lib_open:"O‘qish",hd_trans_lang:"Tarjima tili",hd_all:"Barchasi"},
    id:{nav_hadith:"Perpustakaan Hadits",lib_title:"Perpustakaan Hadits.",lib_search:"Cari di dalam kitab ini…",lib_open:"Baca",hd_trans_lang:"Bahasa terjemahan",hd_all:"Semua"},
    ms:{nav_hadith:"Perpustakaan Hadis",lib_title:"Perpustakaan Hadis.",lib_search:"Cari dalam kitab ini…",lib_open:"Baca",hd_trans_lang:"Bahasa terjemahan",hd_all:"Semua"},
    bn:{nav_hadith:"হাদিস লাইব্রেরি",lib_title:"হাদিস লাইব্রেরি।",lib_search:"এই কিতাবে খুঁজুন…",lib_open:"পড়ুন",hd_trans_lang:"অনুবাদের ভাষা",hd_all:"সব"},
    hi:{nav_hadith:"हदीस लाइब्रेरी",lib_title:"हदीस लाइब्रेरी।",lib_search:"इस किताब में खोजें…",lib_open:"पढ़ें",hd_trans_lang:"अनुवाद भाषा",hd_all:"सभी"},
    ta:{nav_hadith:"ஹதீஸ் நூலகம்",lib_title:"ஹதீஸ் நூலகம்.",lib_search:"இந்த நூலில் தேடு…",lib_open:"படிக்க",hd_trans_lang:"மொழிபெயர்ப்பு மொழி",hd_all:"அனைத்தும்"},
    so:{nav_hadith:"Maktabadda Xadiiska",lib_title:"Maktabadda Xadiiska.",lib_search:"Ka raadi kitaabkan…",lib_open:"Akhri",hd_trans_lang:"Luqadda tarjumaadda",hd_all:"Dhammaan"},
    sw:{nav_hadith:"Maktaba ya Hadithi",lib_title:"Maktaba ya Hadithi.",lib_search:"Tafuta ndani ya kitabu hiki…",lib_open:"Soma",hd_trans_lang:"Lugha ya tafsiri",hd_all:"Zote"},
    ha:{nav_hadith:"Ɗakin Karatun Hadisi",lib_title:"Ɗakin Karatun Hadisi.",lib_search:"Bincika cikin wannan littafi…",lib_open:"Karanta",hd_trans_lang:"Harshe na fassara",hd_all:"Duka"},
    am:{nav_hadith:"የሐዲስ መጽሐፍ ቤት",lib_title:"የሐዲስ መጽሐፍ ቤት።",lib_search:"በዚ መጽፍ ውስጥ ፈል…",lib_open:"አንብ",hd_trans_lang:"የትርጉም ንቋ",hd_all:"ሁም"},
    fr:{nav_hadith:"Bibliothèque de Hadiths",lib_title:"La Bibliothèque de Hadiths.",lib_search:"Rechercher dans ce livre…",lib_open:"Lire",hd_trans_lang:"Langue de traduction",hd_all:"Tous"},
    es:{nav_hadith:"Biblioteca de Hadices",lib_title:"La Biblioteca de Hadices.",lib_search:"Buscar en este libro…",lib_open:"Leer",hd_trans_lang:"Idioma de traducción",hd_all:"Todos"},
    de:{nav_hadith:"Hadith-Bibliothek",lib_title:"Die Hadith-Bibliothek.",lib_search:"In diesem Buch suchen…",lib_open:"Lesen",hd_trans_lang:"Übersetzungssprache",hd_all:"Alle"},
    it:{nav_hadith:"Biblioteca di Hadith",lib_title:"La Biblioteca di Hadith.",lib_search:"Cerca in questo libro…",lib_open:"Leggi",hd_trans_lang:"Lingua di traduzione",hd_all:"Tutti"},
    pt:{nav_hadith:"Biblioteca de Hadiths",lib_title:"A Biblioteca de Hadiths.",lib_search:"Pesquisar neste livro…",lib_open:"Ler",hd_trans_lang:"Idioma da tradução",hd_all:"Todos"},
    ru:{nav_hadith:"Библиотека хадисов",lib_title:"Библиотека хадисов.",lib_search:"Поиск в этой книге…",lib_open:"Читать",hd_trans_lang:"Язык перевода",hd_all:"Все"},
    zh:{nav_hadith:"圣训图书馆",lib_title:"圣训图书馆。",lib_search:"在此书中搜索…",lib_open:"阅读",hd_trans_lang:"翻译语言",hd_all:"全部"},
    ja:{nav_hadith:"ハディース図書館",lib_title:"ハディース図書館。",lib_search:"この書籍内を検索…",lib_open:"読む",hd_trans_lang:"翻訳言語",hd_all:"すべて"},
    ko:{nav_hadith:"하디스 도서관",lib_title:"하디스 도서관.",lib_search:"이 책에서 검색…",lib_open:"읽기",hd_trans_lang:"번역 언어",hd_all:"전체"}
  };
  Object.keys(CORE).forEach(function (c) { if (I18N[c]) Object.assign(I18N[c].t, CORE[c]); });

  /* ---------- book registry ---------- */
  var BOOKS = [
    { s:"bukhari",    c:"the9",    n:7277, en:"Sahih al-Bukhari",                 ar:"صحيح البخاري" },
    { s:"muslim",     c:"the9",    n:7459, en:"Sahih Muslim",                     ar:"صحيح مسلم" },
    { s:"abudawud",   c:"the9",    n:5276, en:"Sunan Abi Dawud",                  ar:"سنن أبي داود" },
    { s:"tirmidhi",   c:"the9",    n:4053, en:"Jami' at-Tirmidhi",                ar:"جامع الترمذي" },
    { s:"nasai",      c:"the9",    n:5768, en:"Sunan an-Nasa'i",                  ar:"سنن النسائي" },
    { s:"ibnmajah",   c:"the9",    n:4345, en:"Sunan Ibn Majah",                  ar:"سنن ابن ماجه" },
    { s:"malik",      c:"the9",    n:1985, en:"Muwatta Malik",                    ar:"موطأ مالك" },
    { s:"ahmed",      c:"the9",    n:1374, en:"Musnad Ahmad",                     ar:"مسند أحمد" },
    { s:"darimi",     c:"the9",    n:3406, en:"Sunan ad-Darimi",                  ar:"سنن الدارمي" },
    { s:"riyad_assalihin",      c:"other", n:1896, en:"Riyad as-Salihin",         ar:"رياض الصالحين" },
    { s:"mishkat_almasabih",    c:"other", n:4428, en:"Mishkat al-Masabih",       ar:"مشكاة المصابيح" },
    { s:"bulugh_almaram",       c:"other", n:1767, en:"Bulugh al-Maram",          ar:"بلوغ المرام" },
    { s:"aladab_almufrad",      c:"other", n:1326, en:"Al-Adab Al-Mufrad",        ar:"الأدب المفرد" },
    { s:"shamail_muhammadiyah", c:"other", n:402,  en:"Shamail al-Muhammadiyah",  ar:"الشمائل المحمدية" },
    { s:"nawawi40",        c:"forties", n:42, en:"Forty Hadith of an-Nawawi",     ar:"الأربعون النووية" },
    { s:"qudsi40",         c:"forties", n:40, en:"Forty Hadith Qudsi",            ar:"الأربعون القدسية" },
    { s:"shahwaliullah40", c:"forties", n:40, en:"Forty Hadith of Shah Waliullah",ar:"أربعون شاه ولي الله" }
  ];

  var PER = 10;
  var RTL = { ar:1, ur:1, fa:1, ps:1, sd:1, ks:1 };
  var MT_UNSUPPORTED = { ks:1 };
  var cache = {}, trMem = {};
  var st = { slug:null, data:null, filtered:[], page:1, q:"", ch:null,
             mode:"both", fontStep:0, trLang:null, manualTr:false,
             cat:"all", libQ:"", focusId:null };
  var bmarks = [];
  try { bmarks = JSON.parse(localStorage.getItem("ma_bmarks") || "[]"); } catch (e) {}

  function t(k) { return window.MA.t(k); }
  function el(id) { return document.getElementById(id); }
  function isRTL() { return document.documentElement.dir === "rtl"; }
  function fmt(n) {
    var l = window.MA.lang();
    try { return new Intl.NumberFormat(l === "ar" ? "ar-EG" : l).format(n); } catch (e) { return String(n); }
  }
  function catLabel(c) { return c === "the9" ? t("lib_cat_the9") : c === "other" ? t("lib_cat_other") : t("lib_cat_forties"); }

  var toastTimer;
  function toast(msg) {
    var elx = el("toast");
    elx.textContent = msg;
    elx.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { elx.classList.remove("show"); }, 1900);
  }

  /* ================= machine translation engine =================
     Primary: MyMemory (free, CORS-open). Fallback: Google gtx.
     Sentence-chunked (MyMemory caps at 500 chars), cached in
     memory + localStorage so repeated reads are instant. */
  var MM_PAIR = { en:"en|en", ar:"en|ar", ur:"en|ur", fa:"en|fa", ps:"en|ps", sd:"en|sd",
    pa:"en|pa", tr:"en|tr", az:"en|az", kk:"en|kk", uz:"en|uz", id:"en|id", ms:"en|ms",
    bn:"en|bn", hi:"en|hi", ta:"en|ta", so:"en|so", sw:"en|sw", ha:"en|ha", am:"en|am",
    fr:"en|fr", es:"en|es", de:"en|de", it:"en|it", pt:"en|pt", ru:"en|ru", zh:"en|zh",
    ja:"en|ja", ko:"en|ko" };

  function mmFetch(chunk, lang) {
    var pair = (MM_PAIR[lang] || ("en|" + lang)).toUpperCase();
    var url = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(chunk) + "&langpair=" + encodeURIComponent(pair);
    return fetch(url).then(function (r) { if (!r.ok) throw new Error("mm-http"); return r.json(); }).then(function (j) {
      var out = j && j.responseData && j.responseData.translatedText;
      if (!out || /INVALID|NO QUERY|PLEASE TRY AGAIN/i.test(out)) throw new Error("mm-empty");
      return out;
    });
  }

  function chunkText(text) {
    var parts = text.match(/[^.!?…۔؟\n]+[.!?…۔؟]*/g) || [text];
    var out = [], cur = "";
    parts.forEach(function (p) {
      if ((cur + p).length > 470) { if (cur) out.push(cur); cur = p; }
      else cur += p;
    });
    if (cur) out.push(cur);
    return out.length ? out : [text];
  }

  function mmTranslate(text, lang) {
    var cs = chunkText(text);
    var chain = Promise.resolve("");
    cs.forEach(function (c) {
      chain = chain.then(function (acc) {
        return mmFetch(c, lang).then(function (tr) { return acc + tr + " "; });
      });
    });
    return chain.then(function (s) { return s.trim(); });
  }

  function gtxTranslate(text, lang) {
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" +
              encodeURIComponent(lang) + "&dt=t&q=" + encodeURIComponent(text);
    return fetch(url).then(function (r) { if (!r.ok) throw new Error("gtx-http"); return r.json(); }).then(function (j) {
      var out = "";
      (j[0] || []).forEach(function (seg) { if (seg && seg[0]) out += seg[0]; });
      if (!out) throw new Error("gtx-empty");
      return out;
    });
  }

  function translate(text, id, lang) {
    if (lang === "en") return Promise.resolve({ text: text, mt: false });
    if (MT_UNSUPPORTED[lang]) return Promise.resolve(null);
    var key = id + "|" + lang;
    if (trMem[key]) return Promise.resolve({ text: trMem[key], mt: true });
    try {
      var ls = localStorage.getItem("htr|" + key);
      if (ls) { trMem[key] = ls; return Promise.resolve({ text: ls, mt: true }); }
    } catch (e) {}
    return mmTranslate(text, lang)
      .catch(function () { return gtxTranslate(text, lang); })
      .then(function (out) {
        trMem[key] = out;
        try { localStorage.setItem("htr|" + key, out); } catch (e) {}
        return { text: out, mt: true };
      });
  }

  /* ================= library grid ================= */
  function renderLibrary() {
    var grid = el("libGrid");
    if (!grid) return;
    grid.innerHTML = "";
    var q = st.libQ.trim().toLowerCase();
    var i = 0;
    BOOKS.forEach(function (b) {
      if (st.cat !== "all" && b.c !== st.cat) return;
      if (q && (b.en + " " + b.ar).toLowerCase().indexOf(q) === -1) return;
      var card = document.createElement("button");
      card.type = "button";
      card.className = "book-card reveal in";
      card.style.animationDelay = (i++ * 45) + "ms";
      card.innerHTML =
        '<span class="book-cat"></span><span class="book-en"></span>' +
        '<span class="book-ar" dir="rtl"></span><span class="book-meta"></span>' +
        '<span class="book-open link-more"></span>';
      card.querySelector(".book-cat").textContent = catLabel(b.c);
      card.querySelector(".book-en").textContent = b.en;
      card.querySelector(".book-ar").textContent = b.ar;
      card.querySelector(".book-meta").textContent = fmt(b.n) + " " + t("lib_hadith");
      card.querySelector(".book-open").textContent = t("lib_open");
      card.addEventListener("click", function () { location.hash = "book=" + b.s; });
      grid.appendChild(card);
    });
  }

  /* ================= reader ================= */
  function buildTrLangSelect() {
    var sel = el("trLang");
    sel.innerHTML = "";
    window.LANG_ORDER.forEach(function (code) {
      var o = document.createElement("option");
      o.value = code;
      o.textContent = I18N[code].name + (MT_UNSUPPORTED[code] ? " (EN)" : "");
      sel.appendChild(o);
    });
    sel.value = st.trLang || window.MA.lang();
  }

  function openBook(slug, focusId) {
    var b = BOOKS.filter(function (x) { return x.s === slug; })[0];
    if (!b) return;
    st.slug = slug; st.page = 1; st.q = ""; st.ch = null; st.focusId = focusId || null;
    if (!st.manualTr) st.trLang = window.MA.lang();
    el("libHead").style.display = "none";
    el("libGrid").style.display = "none";
    el("reader").classList.add("open");
    el("readerTitle").textContent = b.en;
    el("readerTitleAr").textContent = b.ar;
    el("readerNote").textContent = t("lib_note");
    el("readerSearch").value = "";
    el("readerList").innerHTML = "";
    el("loading").hidden = false;
    el("pager").style.visibility = "hidden";
    buildTrLangSelect();
    if (cache[slug]) { st.data = cache[slug]; afterLoad(); }
    else fetch("data/hadith/" + slug + ".json").then(function (r) { return r.json(); })
      .then(function (d) { cache[slug] = d; st.data = d; afterLoad(); })
      .catch(function () { el("loading").hidden = true; });
  }

  function afterLoad() {
    el("loading").hidden = true;
    el("pager").style.visibility = "visible";
    var sel = el("readerChapter");
    sel.innerHTML = "";
    var all = document.createElement("option");
    all.value = ""; all.textContent = t("lib_all");
    sel.appendChild(all);
    st.data.chapters.forEach(function (ch) {
      var o = document.createElement("option");
      o.value = ch.id;
      o.textContent = (isRTL() ? ch.arabic : ch.english) || ch.english;
      sel.appendChild(o);
    });
    if (st.focusId) {
      var idx = st.data.hadiths.findIndex(function (h) { return h.id === st.focusId; });
      if (idx >= 0) st.page = Math.floor(idx / PER) + 1;
      st.focusId = null;
    }
    applyFilter(true);
  }

  function applyFilter(keepPage) {
    var h = st.data.hadiths;
    var q = st.q.trim().toLowerCase();
    st.filtered = h.filter(function (x) {
      if (st.ch != null && x.chapterId !== st.ch) return false;
      if (!q) return true;
      return (x.english.text || "").toLowerCase().indexOf(q) !== -1 ||
             (x.english.narrator || "").toLowerCase().indexOf(q) !== -1 ||
             (x.arabic || "").indexOf(st.q.trim()) !== -1;
    });
    if (!keepPage) st.page = 1;
    renderPage();
  }

  function hadKey(slug, id) { return slug + ":" + id; }
  function isBm(slug, id) { return bmarks.indexOf(hadKey(slug, id)) !== -1; }

  var IC = {
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 15V6a2 2 0 0 1 2-2h9"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3v12M7 8l5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>',
    bm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 3h12v18l-6-4.2L6 21z"/></svg>',
    bmOn: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.7"><path d="M6 3h12v18l-6-4.2L6 21z"/></svg>'
  };

  function renderPage() {
    var list = el("readerList");
    var total = st.filtered.length;
    var pages = Math.max(1, Math.ceil(total / PER));
    if (st.page > pages) st.page = pages;
    var start = (st.page - 1) * PER;
    var slice = st.filtered.slice(start, start + PER);
    var rtl = isRTL();
    var trLang = st.trLang || window.MA.lang();

    list.innerHTML = "";
    list.className = "mode-" + st.mode;
    list.style.setProperty("--had-ar", (19.5 + st.fontStep * 1.6) + "px");
    list.style.setProperty("--had-tr", (15.5 + st.fontStep * 1.2) + "px");

    slice.forEach(function (x) {
      var chap = st.data.chapters.filter(function (c) { return c.id === x.chapterId; })[0];
      var card = document.createElement("article");
      card.className = "had-card" + (st.focusId === x.id ? " focus" : "");
      card.innerHTML =
        '<div class="had-top"><span class="had-num"></span><span class="had-chapter"></span>' +
        '<span class="had-actions">' +
        '<button class="hact" data-act="copy" title="' + t("hd_copy") + '">' + IC.copy + "</button>" +
        '<button class="hact" data-act="share" title="' + t("hd_share") + '">' + IC.share + "</button>" +
        '<button class="hact bm' + (isBm(st.slug, x.id) ? " on" : "") + '" data-act="bm" title="' + t("hd_bookmark") + '">' + (isBm(st.slug, x.id) ? IC.bmOn : IC.bm) + "</button>" +
        "</span></div>" +
        (x.english && x.english.narrator ? '<p class="had-narr"></p>' : "") +
        '<p class="had-ar" lang="ar" dir="rtl"></p>' +
        '<div class="had-tr"><p class="had-text skel">&nbsp;</p><p class="had-tr-meta"></p></div>';
      card.querySelector(".had-num").textContent = t("lib_hadith") + " " + fmt(x.idInBook);
      card.querySelector(".had-chapter").textContent = chap ? (t("lib_chapter") + ": " + (rtl ? chap.arabic : chap.english)) : "";
      if (x.english && x.english.narrator) card.querySelector(".had-narr").textContent = t("lib_narrator") + ": " + x.english.narrator;
      card.querySelector(".had-ar").textContent = x.arabic;

      var trBox = card.querySelector(".had-tr");
      var trText = card.querySelector(".had-text");
      var trMeta = card.querySelector(".had-tr-meta");
      function showTr(res, fallback) {
        trText.classList.remove("skel");
        if (res) {
          trText.textContent = res.text;
          trText.dir = RTL[trLang] ? "rtl" : "ltr";
          trText.lang = trLang;
          trMeta.textContent = I18N[trLang].name + (res.mt ? " · " + t("hd_mt_tag") : "");
        } else {
          trText.textContent = fallback;
          trText.dir = "ltr"; trText.lang = "en";
          trMeta.textContent = t("hd_mt_unavailable");
        }
      }
      if (trLang === "en") showTr({ text: x.english.text, mt: false });
      else translate(x.english.text, x.id, trLang).then(function (res) {
        showTr(res, x.english.text);
      }).catch(function () { showTr(null, x.english.text); });

      /* actions */
      card.querySelector('[data-act="copy"]').addEventListener("click", function () {
        var txt = x.arabic + "\n\n" + trText.textContent + "\n\n— " +
          (BOOKS.filter(function (b) { return b.s === st.slug; })[0].en) + " " + x.idInBook +
          " · Markaz Ali ul Murtaza";
        copyTxt(txt); toast(t("hd_copied"));
      });
      card.querySelector('[data-act="share"]').addEventListener("click", function () {
        copyTxt(location.href.split("#")[0] + "#book=" + st.slug + "&h=" + x.id);
        toast(t("hd_link"));
      });
      card.querySelector('[data-act="bm"]').addEventListener("click", function () {
        var k = hadKey(st.slug, x.id);
        var i = bmarks.indexOf(k);
        if (i === -1) bmarks.push(k); else bmarks.splice(i, 1);
        try { localStorage.setItem("ma_bmarks", JSON.stringify(bmarks)); } catch (e) {}
        this.classList.toggle("on");
        this.innerHTML = isBm(st.slug, x.id) ? IC.bmOn : IC.bm;
        updateBmFab(); renderBmDrawer();
        toast(isBm(st.slug, x.id) ? t("hd_bookmarked") : t("hd_bmarks"));
      });

      list.appendChild(card);
    });

    el("pageInfo").textContent =
      t("lib_showing") + " " + fmt(total === 0 ? 0 : start + 1) + "–" + fmt(Math.min(start + PER, total)) +
      " " + t("lib_to") + " " + fmt(total) + " · " + t("lib_page") + " " + fmt(st.page) + " " + t("lib_of") + " " + fmt(pages);
    el("pagerPrev").disabled = st.page <= 1;
    el("pagerNext").disabled = st.page >= pages;
  }

  function copyTxt(s) {
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(s).catch(function () {});
    else {
      var ta = document.createElement("textarea");
      ta.value = s; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
    }
  }

  /* ================= bookmarks ================= */
  function updateBmFab() { el("bmCount").textContent = bmarks.length; }
  function renderBmDrawer() {
    var list = el("bmList");
    list.innerHTML = "";
    if (!bmarks.length) {
      var p = document.createElement("p");
      p.className = "bm-empty"; p.textContent = t("hd_no_bmarks");
      list.appendChild(p);
      return;
    }
    bmarks.slice().reverse().forEach(function (k) {
      var parts = k.split(":");
      var slug = parts[0], id = parseInt(parts[1], 10);
      var b = BOOKS.filter(function (x) { return x.s === slug; })[0];
      var d = cache[slug];
      var num = "";
      if (d) { var h = d.hadiths.filter(function (x) { return x.id === id; })[0]; if (h) num = " " + h.idInBook; }
      var row = document.createElement("button");
      row.className = "bm-item";
      row.innerHTML = "<span class='bm-book'></span><span class='bm-num'></span>";
      row.querySelector(".bm-book").textContent = b ? b.en : slug;
      row.querySelector(".bm-num").textContent = t("lib_hadith") + num;
      row.addEventListener("click", function () {
        el("bmDrawer").classList.remove("open");
        location.hash = "book=" + slug + "&h=" + id;
      });
      list.appendChild(row);
    });
  }

  function closeReader() {
    st.slug = null; st.data = null;
    el("reader").classList.remove("open");
    el("libHead").style.display = "";
    el("libGrid").style.display = "";
    el("rprog").style.width = "0";
    renderLibrary();
  }

  function route() {
    var m = location.hash.match(/book=([a-z0-9_]+)(?:&h=(\d+))?/);
    if (m && BOOKS.some(function (b) { return b.s === m[1]; })) openBook(m[1], m[2] ? parseInt(m[2], 10) : null);
    else if (el("reader").classList.contains("open")) closeReader();
  }

  /* ================= init ================= */
  document.addEventListener("DOMContentLoaded", function () {
    renderLibrary();
    updateBmFab();
    route();

    /* library tools */
    el("catChips").addEventListener("click", function (e) {
      var c = e.target.closest(".chip");
      if (!c) return;
      st.cat = c.getAttribute("data-cat");
      this.querySelectorAll(".chip").forEach(function (x) { x.classList.toggle("active", x === c); });
      renderLibrary();
    });
    el("libSearch").addEventListener("input", function () { st.libQ = this.value; renderLibrary(); });

    /* reader controls */
    el("readerBack").addEventListener("click", function () { location.hash = ""; });
    el("pagerPrev").addEventListener("click", function () { st.page--; renderPage(); window.scrollTo({ top: el("reader").offsetTop - 60, behavior: "smooth" }); });
    el("pagerNext").addEventListener("click", function () { st.page++; renderPage(); window.scrollTo({ top: el("reader").offsetTop - 60, behavior: "smooth" }); });

    var deb;
    el("readerSearch").addEventListener("input", function () {
      clearTimeout(deb); var v = this.value;
      deb = setTimeout(function () { st.q = v; applyFilter(false); }, 250);
    });
    el("readerChapter").addEventListener("change", function () {
      st.ch = this.value === "" ? null : parseInt(this.value, 10);
      applyFilter(false);
    });

    el("modeSeg").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-mode]");
      if (!b) return;
      st.mode = b.getAttribute("data-mode");
      this.querySelectorAll("button").forEach(function (x) { x.classList.toggle("active", x === b); });
      el("readerList").className = "mode-" + st.mode;
    });
    el("fontPlus").addEventListener("click", function () { if (st.fontStep < 5) { st.fontStep++; renderPage(); } });
    el("fontMinus").addEventListener("click", function () { if (st.fontStep > -2) { st.fontStep--; renderPage(); } });
    el("trLang").addEventListener("change", function () { st.trLang = this.value; st.manualTr = true; renderPage(); });

    /* bookmarks */
    el("bmFab").addEventListener("click", function () { renderBmDrawer(); el("bmDrawer").classList.add("open"); });
    el("bmClose").addEventListener("click", function () { el("bmDrawer").classList.remove("open"); });

    /* reading progress */
    window.addEventListener("scroll", function () {
      if (!el("reader").classList.contains("open")) return;
      var h = document.documentElement;
      var p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      el("rprog").style.width = (p * 100).toFixed(1) + "%";
    }, { passive: true });

    window.addEventListener("hashchange", route);

    window.MA.onChange(function () {
      renderLibrary();
      if (!st.manualTr) { st.trLang = window.MA.lang(); var s = el("trLang"); if (s) s.value = st.trLang; }
      if (st.data) { el("readerNote").textContent = t("lib_note"); afterLoad(); }
      renderBmDrawer();
    });
  });
})();

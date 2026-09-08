/* ============================================================
   Markaz Ali ul Murtaza — app logic
   Language detection & switching · RTL · UI interactions
   ============================================================ */
(function () {
  "use strict";

  var I18N = window.I18N;
  var LANG_ORDER = window.LANG_ORDER;
  var currentLang = "en";
  var countersDone = false;
  var changeFns = [];

  /* ---------- timezone → language map (auto-detect by location) ---------- */
  var TZ_MAP = {
    "Asia/Karachi": "ur",
    "Asia/Riyadh": "ar", "Africa/Cairo": "ar", "Asia/Dubai": "ar", "Asia/Qatar": "ar",
    "Asia/Kuwait": "ar", "Asia/Bahrain": "ar", "Asia/Amman": "ar", "Asia/Beirut": "ar",
    "Asia/Damascus": "ar", "Asia/Baghdad": "ar", "Asia/Aden": "ar", "Asia/Muscat": "ar",
    "Asia/Gaza": "ar", "Asia/Hebron": "ar", "Asia/Jerusalem": "ar", "Africa/Algiers": "ar",
    "Africa/Casablanca": "ar", "Africa/Tunis": "ar", "Africa/Tripoli": "ar", "Africa/Khartoum": "ar",
    "Africa/El_Aaiun": "ar", "Africa/Ndjamena": "ar",
    "Asia/Tehran": "fa", "Asia/Kabul": "fa",
    "Asia/Istanbul": "tr",
    "Asia/Baku": "az",
    "Asia/Almaty": "kk", "Asia/Aqtau": "kk", "Asia/Aqtobe": "kk", "Asia/Atyrau": "kk", "Asia/Oral": "kk", "Asia/Qyzylorda": "kk",
    "Asia/Tashkent": "uz", "Asia/Samarkand": "uz",
    "Asia/Jakarta": "id", "Asia/Makassar": "id", "Asia/Pontianak": "id", "Asia/Jayapura": "id",
    "Asia/Kuala_Lumpur": "ms", "Asia/Kuching": "ms", "Asia/Brunei": "ms",
    "Asia/Dhaka": "bn",
    "Asia/Kolkata": "hi",
    "Asia/Colombo": "ta",
    "Africa/Mogadishu": "so",
    "Africa/Nairobi": "sw", "Africa/Dar_es_Salaam": "sw", "Africa/Kampala": "sw", "Africa/Kigali": "sw",
    "Africa/Lagos": "ha", "Africa/Niamey": "ha",
    "Africa/Addis_Ababa": "am",
    "Europe/Paris": "fr", "Europe/Brussels": "fr", "Europe/Geneva": "fr", "America/Montreal": "fr", "Africa/Abidjan": "fr", "Africa/Dakar": "fr",
    "Europe/Madrid": "es", "America/Mexico_City": "es", "America/Bogota": "es", "America/Lima": "es",
    "America/Santiago": "es", "America/Caracas": "es", "America/Guatemala": "es", "America/Havana": "es",
    "America/Monterrey": "es", "America/Argentina/Buenos_Aires": "es", "America/Guayaquil": "es",
    "Europe/Berlin": "de", "Europe/Vienna": "de", "Europe/Zurich": "de",
    "Europe/Rome": "it",
    "America/Sao_Paulo": "pt", "Europe/Lisbon": "pt", "America/Bahia": "pt", "America/Fortaleza": "pt",
    "Europe/Moscow": "ru", "Asia/Yekaterinburg": "ru", "Asia/Novosibirsk": "ru", "Europe/Minsk": "ru", "Asia/Bishkek": "ru",
    "Asia/Shanghai": "zh", "Asia/Chongqing": "zh", "Asia/Urumqi": "zh", "Asia/Hong_Kong": "zh", "Asia/Taipei": "zh",
    "Asia/Tokyo": "ja",
    "Asia/Seoul": "ko"
  };

  /* ---------- helpers ---------- */
  function t(key) {
    var d = I18N[currentLang];
    if (d && d.t[key] != null) return d.t[key];
    if (I18N.en.t[key] != null) return I18N.en.t[key];
    return null;
  }

  function detectLanguage() {
    // 1. saved choice
    try {
      var saved = localStorage.getItem("ma_lang");
      if (saved && I18N[saved]) return { lang: saved, auto: false };
    } catch (e) {}
    // 2. browser language
    var nav = navigator.languages || [navigator.language || "en"];
    for (var i = 0; i < nav.length; i++) {
      var full = nav[i].toLowerCase();
      if (I18N[full]) return { lang: full, auto: true };
      var base = full.split("-")[0];
      if (I18N[base]) return { lang: base, auto: true };
    }
    // 3. timezone → country → language
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && TZ_MAP[tz]) return { lang: TZ_MAP[tz], auto: true };
    } catch (e) {}
    return { lang: "en", auto: true };
  }

  /* ---------- apply a language ---------- */
  function applyLang(code, save) {
    if (!I18N[code]) code = "en";
    currentLang = code;
    var meta = I18N[code];

    document.documentElement.lang = code;
    document.documentElement.dir = meta.rtl ? "rtl" : "ltr";

    // text content
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var v = t(key);
      if (v == null) return;
      if (key === "ft_rights") {
        el.innerHTML = v.replace("{year}", '<span id="year">' + new Date().getFullYear() + "</span>");
      } else {
        el.textContent = v;
      }
    });
    // placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-placeholder"));
      if (v != null) el.setAttribute("placeholder", v);
    });

    // SEO meta per language
    var title = t("meta_title"); if (title) document.title = title;
    var desc = t("meta_desc");
    var metaEl = document.querySelector('meta[name="description"]');
    if (desc && metaEl) metaEl.setAttribute("content", desc);

    // numbers formatted per locale
    renderStats();

    // language button + picker state
    var label = document.getElementById("langBtnLabel");
    if (label) label.textContent = meta.name;
    document.querySelectorAll(".lang-item").forEach(function (b) {
      var on = b.getAttribute("data-lang") === code;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
      var check = b.querySelector(".lang-check");
      if (check) check.style.display = on ? "" : "none";
    });

    if (save !== false) {
      try { localStorage.setItem("ma_lang", code); } catch (e) {}
    }
    // keep URL shareable / indexable per language (guarded: sandboxed
    // previews have opaque origins where replaceState throws)
    try {
      var url = new URL(location.href);
      url.searchParams.set("lang", code);
      history.replaceState(null, "", url.pathname + "?" + url.searchParams + url.hash);
    } catch (e) {}

    changeFns.forEach(function (fn) { fn(code); });
  }

  /* public hook for page modules (e.g. Hadith Library) */
  window.MA = {
    lang: function () { return currentLang; },
    t: t,
    onChange: function (fn) { changeFns.push(fn); }
  };

  /* ---------- stats counters ---------- */
  function fmtNum(n) {
    var locale = currentLang === "ar" ? "ar-EG" : currentLang;
    try { return new Intl.NumberFormat(locale).format(n); }
    catch (e) { return String(n); }
  }
  function renderStats() {
    document.querySelectorAll(".stat-num").forEach(function (el) {
      var n = parseInt(el.getAttribute("data-count"), 10);
      if (countersDone || el.classList.contains("counted")) el.textContent = fmtNum(n) + "+";
    });
  }
  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var start = null, dur = 1400;
    el.classList.add("counted");
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmtNum(Math.round(target * eased)) + "+";
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- language picker ---------- */
  var langPanel = document.getElementById("langPanel");
  var langBtn = document.getElementById("langBtn");
  var langGrid = document.getElementById("langGrid");
  var langSearch = document.getElementById("langSearch");
  var suggestedLang = null;

  function buildLangPanel() {
    langGrid.innerHTML = "";
    LANG_ORDER.forEach(function (code) {
      var m = I18N[code];
      var b = document.createElement("button");
      b.type = "button";
      b.className = "lang-item";
      b.setAttribute("data-lang", code);
      b.setAttribute("data-blob", (code + " " + m.name + " " + m.en + " " + m.region).toLowerCase());
      b.innerHTML =
        '<span class="lang-flag">' + m.flag + "</span>" +
        '<span class="lang-names"><span class="lang-native"></span><span class="lang-en"></span></span>' +
        '<span class="lang-check">✓</span>';
      b.querySelector(".lang-native").textContent = m.name;
      b.querySelector(".lang-en").textContent = m.en + " · " + m.region;
      b.addEventListener("click", function () {
        applyLang(code);
        closePanel();
      });
      langGrid.appendChild(b);
    });
  }

  function openPanel() {
    langPanel.classList.add("open");
    langBtn.setAttribute("aria-expanded", "true");
    var chip = document.getElementById("langAutoChip");
    if (chip && suggestedLang && I18N[suggestedLang]) {
      chip.innerHTML = "📍 <span></span> <b></b>";
      chip.querySelector("span").textContent = t("lang_auto") || "Suggested for your location";
      chip.querySelector("b").textContent = I18N[suggestedLang].name;
    }
    langSearch.focus();
  }
  function closePanel() {
    langPanel.classList.remove("open");
    langBtn.setAttribute("aria-expanded", "false");
    langSearch.value = "";
    filterLangs("");
  }
  function filterLangs(q) {
    q = (q || "").toLowerCase().trim();
    langGrid.querySelectorAll(".lang-item").forEach(function (b) {
      b.style.display = !q || b.getAttribute("data-blob").indexOf(q) !== -1 ? "" : "none";
    });
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    buildLangPanel();

    var detected = detectLanguage();
    var urlLang = new URLSearchParams(location.search).get("lang");
    var initial = (urlLang && I18N[urlLang]) ? urlLang : detected.lang;
    suggestedLang = detected.lang;

    // language panel events
    langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      langPanel.classList.contains("open") ? closePanel() : openPanel();
    });
    document.getElementById("langClose").addEventListener("click", closePanel);
    langSearch.addEventListener("input", function () { filterLangs(this.value); });
    document.addEventListener("click", function (e) {
      if (langPanel.classList.contains("open") && !langPanel.contains(e.target) && !langBtn.contains(e.target)) closePanel();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePanel(); });

    // mobile menu
    var burger = document.getElementById("hamburger");
    var mobileMenu = document.getElementById("mobileMenu");
    burger.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        burger.classList.remove("open");
      });
    });

    // nav shadow on scroll
    var nav = document.getElementById("nav");
    window.addEventListener("scroll", function () {
      nav.classList.toggle("scrolled", window.scrollY > 8);
    }, { passive: true });

    // reveal-on-scroll + counter triggers
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
      document.querySelectorAll(".stat-num").forEach(function (el) {
        el.classList.add("counted");
        el.textContent = fmtNum(parseInt(el.getAttribute("data-count"), 10)) + "+";
      });
      countersDone = true;
    }
    if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        var counter = en.target.querySelector ? en.target.querySelector(".stat-num:not(.counted)") : null;
        if (en.target.classList.contains("stat") && counter === null) {
          var n = en.target.querySelector(".stat-num");
          if (n && !n.classList.contains("counted")) animateCounter(n);
        }
        io.unobserve(en.target);
      });
      countersDone = true;
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
    } /* end IntersectionObserver guard */

    // year
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    // apply the initial language LAST so a thrown error can never
    // prevent the UI handlers above from being registered
    try { applyLang(initial, !!urlLang); } catch (e) {}
  });
})();


/* click-to-play video thumbnails */
(function () {
  document.querySelectorAll(".vthumb").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var embed = btn.getAttribute("data-embed");
      if (embed) {
        var wrap = btn.parentElement;
        var ifr = document.createElement("iframe");
        ifr.src = embed;
        ifr.title = btn.getAttribute("aria-label") || "Video";
        ifr.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
        ifr.setAttribute("allowfullscreen", "true");
        wrap.replaceChild(ifr, btn);
      } else {
        var url = btn.getAttribute("data-open");
        if (url) window.open(url, "_blank", "noopener");
      }
    });
  });
})();

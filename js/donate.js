/* ============================================================
   Markaz Ali ul Murtaza — Donate page (interactive)
   ============================================================ */
(function () {
  "use strict";
  var I18N = window.I18N;

  var CORE = {
    fa:{nav_donate:"اهداء",dn_title:"برای آخرت سرمایه‌گذاری کنید.",dn_copied:"کپی شد",dn_send:"ارسال از واتساپ"},
    ps:{nav_donate:"بسپنه",dn_title:"د آخرت لپاره پانګونه.",dn_copied:"کاپي شو",dn_send:"واتساپ لېږل"},
    sd:{nav_donate:"عطيو",dn_title:"آخرت لاءِ سيڙپ.",dn_copied:"ڪاپي ٿيو",dn_send:"واٽس ايپ موڪليو"},
    ks:{nav_donate:"عطیہ",dn_title:"آخرتہ سرمایہ۔",dn_copied:"کاپی گوو",dn_send:"واٹس ایپ پیٹھ"},
    pa:{nav_donate:"ਦਾਨ",dn_title:"ਆਖਰਤ ਲਈ ਨਿਵੇਸ਼।",dn_copied:"ਕਾਪੀ ਹੋ ਗਿਆ",dn_send:"ਵਟਸਐਪ ਭੇਜੋ"},
    tr:{nav_donate:"Bağış",dn_title:"Ahiret için yatırım yap.",dn_copied:"Kopyalandı",dn_send:"WhatsApp ile gönder"},
    az:{nav_donate:"İanə",dn_title:"Axirət üçün investisiya.",dn_copied:"Kopyalandı",dn_send:"WhatsApp ilə göndər"},
    kk:{nav_donate:"Садақа",dn_title:"Ақыретке инвестиция.",dn_copied:"Көшірілді",dn_send:"WhatsApp арқылы жіберу"},
    uz:{nav_donate:"Xayriya",dn_title:"Oxirat uchun sarmoya.",dn_copied:"Nusxalandi",dn_send:"WhatsApp orqali yuborish"},
    id:{nav_donate:"Donasi",dn_title:"Investasi untuk akhirat.",dn_copied:"Tersalin",dn_send:"Kirim via WhatsApp"},
    ms:{nav_donate:"Derma",dn_title:"Melabur untuk akhirat.",dn_copied:"Disalin",dn_send:"Hantar via WhatsApp"},
    bn:{nav_donate:"দান",dn_title:"আখিরাতের জন্য বিনিয়োগ।",dn_copied:"কপি হয়েছে",dn_send:"হোয়াটসঅ্যাপে পাঠান"},
    hi:{nav_donate:"दान",dn_title:"आख़िरत के लिए निवेश।",dn_copied:"कॉपी हो गया",dn_send:"व्हाट्सऐप से भेजें"},
    ta:{nav_donate:"நன்கொடை",dn_title:"மறுமைக்காக முதலீடு.",dn_copied:"நகலெடுக்கப்பட்டது",dn_send:"WhatsApp வழி அனுப்பு"},
    so:{nav_donate:"Sadaqo",dn_title:"Maalgeli aakhiro.",dn_copied:"Waa la koobiyeeyay",dn_send:"Dir WhatsApp"},
    sw:{nav_donate:"Changia",dn_title:"Wekeza kwa Akhera.",dn_copied:"Imenakiliwa",dn_send:"Tuma kwa WhatsApp"},
    ha:{nav_donate:"Kyauta",dn_title:"Zuba jari don lahira.",dn_copied:"An kwafa",dn_send:"Aika ta WhatsApp"},
    am:{nav_donate:"ለግሥ",dn_title:"ለመጨረሻ ዓለም ኢንቨስት።",dn_copied:"ተቀድቷል",dn_send:"በWhatsApp ላክ"},
    fr:{nav_donate:"Faire un don",dn_title:"Investissez pour l'au-delà.",dn_copied:"Copié",dn_send:"Envoyer via WhatsApp"},
    es:{nav_donate:"Donar",dn_title:"Invierte en el más allá.",dn_copied:"Copiado",dn_send:"Enviar por WhatsApp"},
    de:{nav_donate:"Spenden",dn_title:"Investiere für das Jenseits.",dn_copied:"Kopiert",dn_send:"Per WhatsApp senden"},
    it:{nav_donate:"Dona",dn_title:"Investi per l'aldilà.",dn_copied:"Copiato",dn_send:"Invia via WhatsApp"},
    pt:{nav_donate:"Doar",dn_title:"Invista no além.",dn_copied:"Copiado",dn_send:"Enviar pelo WhatsApp"},
    ru:{nav_donate:"Пожертвовать",dn_title:"Инвестируй в вечную жизнь.",dn_copied:"Скопировано",dn_send:"Отправить в WhatsApp"},
    zh:{nav_donate:"捐赠",dn_title:"为后世而投资。",dn_copied:"已复制",dn_send:"通过 WhatsApp 发送"},
    ja:{nav_donate:"寄付",dn_title:"来世への投資を。",dn_copied:"コピーしました",dn_send:"WhatsAppで送信"},
    ko:{nav_donate:"기부",dn_title:"내세를 위해 투자하세요.",dn_copied:"복사됨",dn_send:"WhatsApp로 보내기"}
  };
  Object.keys(CORE).forEach(function (c) { if (I18N[c]) Object.assign(I18N[c].t, CORE[c]); });

  var BANK = { bank: "JazzCash", name: "Markaz ul huda", iban: "PK37JCMA2606923486596339" };
  var IMP = [[100000, "imp5"], [25000, "imp4"], [10000, "imp3"], [5000, "imp2"], [0, "imp1"]];
  var st = { amt: 5000, type: "once" };

  function t(k) { return window.MA.t(k); }
  function el(id) { return document.getElementById(id); }
  function fmt(n) {
    var l = window.MA.lang();
    try { return new Intl.NumberFormat(l === "ar" ? "ar-EG" : l).format(n); } catch (e) { return String(n); }
  }
  var toastTimer;
  function toast(msg) {
    var x = el("toast"); if (!x) return;
    x.textContent = msg; x.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { x.classList.remove("show"); }, 1900);
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

  function impactKey(a) {
    for (var i = 0; i < IMP.length; i++) if (a >= IMP[i][0]) return IMP[i][1];
    return "imp1";
  }

  function updateWa() {
    var a = el("waSend"); if (!a) return;
    var name = (el("dName").value || "").trim();
    var msg = "Assalamu alaikum! " + (name ? "I am " + name + ". " : "") +
      "I would like to donate PKR " + st.amt.toLocaleString() + " (" +
      (st.type === "monthly" ? "monthly" : "one-time") +
      ") to Markaz Ali ul Murtaza via JazzCash (Markaz ul huda). JazakAllahu khairan.";
    a.setAttribute("href", "https://wa.me/923014592661?text=" + encodeURIComponent(msg));
  }

  function render() {
    document.querySelectorAll("#amtChips .chip").forEach(function (c) {
      c.classList.toggle("active", parseInt(c.getAttribute("data-amt"), 10) === st.amt);
    });
    var r = el("amtRange"), n = el("amtInput");
    if (r && document.activeElement !== r) r.value = Math.min(Math.max(st.amt, 500), 200000);
    if (n && document.activeElement !== n) n.value = st.amt;
    var txt = t(impactKey(st.amt));
    if (st.type === "monthly") txt += " " + t("dn_each_month");
    var box = el("impactTxt");
    box.textContent = txt;
    var card = el("impactCard");
    card.classList.remove("pulse"); void card.offsetWidth; card.classList.add("pulse");
    updateWa();
  }

  document.addEventListener("DOMContentLoaded", function () {
    render();

    el("dSeg").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-type]"); if (!b) return;
      st.type = b.getAttribute("data-type");
      this.querySelectorAll("button").forEach(function (x) { x.classList.toggle("active", x === b); });
      render();
    });
    el("amtChips").addEventListener("click", function (e) {
      var c = e.target.closest(".chip"); if (!c) return;
      st.amt = parseInt(c.getAttribute("data-amt"), 10); render();
    });
    el("amtRange").addEventListener("input", function () { st.amt = parseInt(this.value, 10); render(); });
    el("amtInput").addEventListener("input", function () {
      var v = parseInt(this.value, 10);
      if (!isNaN(v) && v >= 100) { st.amt = v; render(); }
    });

    document.querySelectorAll("[data-copy]").forEach(function (b) {
      b.addEventListener("click", function () {
        var k = this.getAttribute("data-copy");
        copyTxt(BANK[k]); toast(t("dn_copied"));
      });
    });
    el("copyAll").addEventListener("click", function () {
      copyTxt(BANK.bank + "\n" + BANK.name + "\nIBAN: " + BANK.iban + "\nMarkaz Ali ul Murtaza — Lashari, Okara, Pakistan");
      toast(t("dn_copied"));
    });

    el("dName").addEventListener("input", updateWa);

    /* animated bars */
    function fillBars() {
      document.querySelectorAll("#bars .bar-fill").forEach(function (f) {
        f.style.width = f.getAttribute("data-w") + "%";
      });
    }
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (en) {
        en.forEach(function (x) { if (x.isIntersecting) { fillBars(); io.disconnect(); } });
      }, { threshold: 0.3 });
      io.observe(el("bars"));
    } else fillBars();

    window.MA.onChange(function () { render(); });
  });
})();

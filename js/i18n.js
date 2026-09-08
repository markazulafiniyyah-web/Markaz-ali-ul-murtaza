/* ============================================================
   Markaz Ali ul Murtaza — i18n dictionary (30 languages)
   Full translations: English, Arabic, Urdu.
   Core UI translations for all other languages, with graceful
   fallback to English for deep content.
   ============================================================ */
window.I18N = {

/* ---------------- ENGLISH (full) ---------------- */
en: { name:"English", en:"English", flag:"🌍", region:"Worldwide", rtl:false, t:{
  meta_title:"Markaz Ali ul Murtaza — Online Qur'anic Institute | Hifz, Tajweed, Qira'at, Tarjuma & Tafseer",
  meta_desc:"Markaz Ali ul Murtaza is an online Islamic institute based in Lashari, Okara, Punjab, Pakistan — one-to-one classes in Hifz, Tajweed, Qira'at al-Sab'a & al-Ashra, Tarjuma and Tafseer, taught by certified scholars for students worldwide.",
  nav_programs:"Programs", nav_about:"Why Us", nav_method:"How It Works", nav_faq:"FAQ", nav_contact:"Contact", nav_enroll:"Enroll Now",
  hero_badge:"Online Qur'anic Institute · Lashari, Okara, Pakistan",
  hero_title:"Markaz Ali ul Murtaza",
  hero_sub:"Learn the Qur'an the way it was revealed. One-to-one online classes in Hifz, Tajweed, Qira'at al-Sab'a & al-Ashra, Tarjuma and Tafseer — taught by certified scholars, for students everywhere.",
  hero_cta1:"Start Free Trial", hero_cta2:"Explore Programs",
  verse_trans:"“And recite the Qur'an with measured recitation.”", verse_ref:"Sūrah al-Muzzammil 73:4",
  programs_kicker:"Our Programs", programs_title:"A complete Qur'anic education.", programs_sub:"From your first letters to ijazah — one journey, four disciplines.", programs_more:"Learn more",
  p1_title:"Hifz-ul-Qur'an",
  p1_desc:"A structured memorization journey guided by experienced Huffaz — daily Sabaq, Sabqi and Manzil cycles, personalized plans, and rigorous revision until the entire Qur'an rests firmly in your heart.",
  p1_b1:"Personalized Hifz plan", p1_b2:"Daily Sabaq · Sabqi · Manzil", p1_b3:"Ijazah upon completion",
  p2_title:"Tajweed",
  p2_desc:"Master Makharij al-Huruf, Sifat and the rules of recitation — from Noorani Qaida foundations to fluent, beautiful Tilawah — exactly as the Qur'an was revealed.",
  p2_b1:"Noorani Qaida fundamentals", p2_b2:"Makharij & Sifat mastery", p2_b3:"Fluent Nazira recitation",
  p3_title:"Qira'at al-Sab'a & al-Ashra",
  p3_desc:"Advanced, specialized study of the seven and ten canonical Qira'at with their Riwayat and Turuq — a scholarly path taught by specialists, culminating in ijazah with sanad.",
  p3_b1:"Sab'a & Ashra curricula", p3_b2:"Riwayat and Turuq", p3_b3:"Sanad-connected ijazah",
  p4_title:"Tarjuma & Tafseer",
  p4_desc:"Go beyond recitation: word-by-word translation of the Qur'an and detailed exegesis drawn from classical and contemporary Mufassireen — understanding that transforms.",
  p4_b1:"Word-by-word Tarjuma", p4_b2:"Classical & modern Tafseer", p4_b3:"Reflection and application",
  nav_qurras:"Qurras", qurras_kicker:"Our Qurras", qurras_title:"Learn from master reciters.", qurras_sub:"Meet the scholars whose voices lead our Qur'anic programs.", head_role:"Head of the Institution", qari_role:"Qari & Instructor", call_label:"Call", watch_fb:"Watch on Facebook", watch_yt:"Watch on YouTube",
  nav_hadith:"Hadith Library", lib_kicker:"The Prophetic Traditions", lib_title:"The Hadith Library.", lib_sub:"50,884 hadiths from 17 canonical books — Arabic text with English translation, from the open hadith-json database.", lib_search:"Search within this book…", lib_hadith:"Hadith", lib_narrator:"Narrator", lib_prev:"Previous", lib_next:"Next", lib_back:"All Books", lib_loading:"Loading book…", lib_page:"Page", lib_of:"of", lib_showing:"Showing", lib_to:"to", lib_chapter:"Chapter", lib_all:"All chapters", lib_cat_the9:"The Nine Books", lib_cat_other:"Classical Compilations", lib_cat_forties:"The Forties", lib_books:"books", lib_open:"Read", lib_note:"Original Arabic with English translation",
  hd_langs:"languages", hd_mt_note:"Machine translation — the Arabic remains the authoritative text.", hd_all:"All", hd_search_lib:"Search books…", hd_mode_both:"Arabic + Translation", hd_mode_ar:"Arabic", hd_mode_tr:"Translation", hd_trans_lang:"Translation language", hd_copy:"Copy", hd_share:"Share", hd_bookmark:"Save", hd_bookmarked:"Saved", hd_copied:"Copied to clipboard", hd_link:"Link copied", hd_bmarks:"Bookmarks", hd_no_bmarks:"No saved hadiths yet.", hd_mt_unavailable:"Machine translation not available for this language — showing English.", hd_mt_tag:"machine translation",
  nav_donate:"Donate", dn_kicker:"Sadqah Jariyah", dn_title:"Invest in the Hereafter.", dn_sub:"Your sadaqah keeps Qur'an students learning — every rupee goes to teaching, scholarships and the platform that carries the Word of Allah to 45+ countries.", dn_verse:"“The example of those who spend their wealth in the way of Allah is like a seed that grows seven spikes; in each spike is a hundred grains.”", dn_verse_ref:"Sūrah al-Baqarah 2:261", dn_once:"One-time", dn_monthly:"Monthly", dn_amount:"Choose amount (PKR)", dn_impact:"Your impact", dn_each_month:"— every month, in shaa Allah", dn_bank_title:"Donation details", dn_bank:"Bank / Wallet", dn_acc_name:"Account name", dn_iban_l:"IBAN", dn_copy_all:"Copy all details", dn_copied:"Copied to clipboard", dn_your_name:"Your name (optional)", dn_send:"Send via WhatsApp", dn_where:"Where your sadaqah goes", dn_w_sch:"Student scholarships", dn_w_teach:"Teacher honorariums", dn_w_plat:"Platform & library", dn_w_admin:"Administration", dn_services:"What your donation powers", dn_had:"“Charity does not decrease wealth.”", dn_had_ref:"Sahih Muslim 2588", imp1:"Provides Qur'an study materials for a student", imp2:"Sponsors one student's one-to-one classes for a full month", imp3:"Sponsors a Hifz student and supports a teacher's honorarium for a month", imp4:"Sponsors a full study circle of five students for a month", imp5:"Powers the entire madrasa platform for a month — Sadqah Jariyah on a grand scale",
  features_kicker:"Why Markaz Ali ul Murtaza", features_title:"Everything you need to learn, perfectly arranged.",
  f1_t:"One-to-One Live Classes", f1_d:"Every student studies directly with their own certified teacher — full attention, at your pace.",
  f2_t:"Certified Qaris & Huffaz", f2_d:"Our instructors hold ijazah and degrees from renowned Islamic universities.",
  f3_t:"Flexible, 24/7 Scheduling", f3_d:"Pick class times that fit your life — any timezone, any hour.",
  f4_t:"Free Trial & Assessment", f4_d:"Three free classes and a level assessment — before you pay anything.",
  f5_t:"Ijazah with Sanad", f5_d:"Complete your Hifz or Qira'at requirements and earn certification through an unbroken chain.",
  f6_t:"Family & Group Plans", f6_d:"Special rates for siblings, families and small study circles.",
  stats_students:"Students Enrolled", stats_countries:"Countries Served", stats_teachers:"Certified Teachers", stats_years:"Years of Excellence",
  method_kicker:"Getting Started", method_title:"Begin in three simple steps.",
  m1_t:"Book your free trial", m1_d:"Choose a program and a time — we'll match you with the right teacher.",
  m2_t:"Take your assessment", m2_d:"A short evaluation places you at exactly the right level.",
  m3_t:"Begin your journey", m3_d:"Attend one-to-one classes, track your progress, and earn certificates along the way.",
  test_kicker:"Testimonials", test_title:"Loved by students worldwide.",
  ts1_q:"“I completed my Hifz in two and a half years with daily revision I actually kept up with. My teacher treats every ayah with such care.”", ts1_n:"Aisha K.", ts1_l:"London, United Kingdom · Hifz Program",
  ts2_q:"“Years of mistakes corrected in months. The Tajweed classes rebuilt my recitation from the letters themselves.”", ts2_n:"Omar S.", ts2_l:"Toronto, Canada · Tajweed Program",
  ts3_q:"“Studying the Sab'a here opened a door I never thought possible online — real ijazah, real sanad, serious teachers.”", ts3_n:"Yusuf R.", ts3_l:"Sydney, Australia · Qira'at Program",
  faq_kicker:"FAQ", faq_title:"Questions, answered.",
  fq1_q:"How do the online classes work?", fq1_a:"Classes are one-to-one video sessions of 30–45 minutes via Zoom, Skype or WhatsApp — your choice of platform, teacher and schedule.",
  fq2_q:"What ages can enroll?", fq2_a:"We welcome students from age five with no upper limit. Curricula are adapted for children, teens and adults.",
  fq3_q:"Are female teachers available for sisters and children?", fq3_a:"Yes. Qualified female teachers teach sisters and young children upon request.",
  fq4_q:"How much does it cost?", fq4_a:"Affordable monthly plans start after three free trial classes and a free assessment. Family discounts are available.",
  fq5_q:"Can I earn an ijazah?", fq5_a:"Yes. Students who complete the prescribed standards in Hifz or Qira'at receive ijazah with sanad from qualified scholars.",
  fq6_q:"Which languages are classes taught in?", fq6_a:"Instruction is available in Arabic, English and Urdu, with support in other major languages.",
  cta_title:"Your journey with the Qur'an starts today.", cta_sub:"Three free classes. No commitment. Just begin.", cta_btn:"Start Free Trial",
  ft_about:"Markaz Ali ul Murtaza is an online Islamic institute based in Lashari, Okara, Punjab, Pakistan — teaching Hifz, Tajweed, Qira'at al-Sab'a & al-Ashra, Tarjuma and Tafseer to students around the world.",
  ft_programs:"Programs", ft_links:"Institute", ft_contact:"Contact", ft_addr:"Lashari, Okara, Punjab, Pakistan",
  ft_rights:"© {year} Markaz Ali ul Murtaza. All rights reserved.",
  lang_title:"Choose your language", lang_auto:"Suggested for your location", lang_search:"Search languages…"
}},

/* ---------------- ARABIC (full) ---------------- */
ar: { name:"العربية", en:"Arabic", flag:"🇸🇦", region:"السعودية · مصر · الخليج", rtl:true, t:{
  meta_title:"مركز علي المرتضى — معهد قرآني إلكتروني | حفظ، تجويد، قراءات، ترجمة وتفسير",
  meta_desc:"مركز علي المرتضى معهد إسلامي إلكتروني مقره لشاري، أوكارا، باكستان — دروس فردية في الحفظ والتجويد والقراءات السبع والعشر والترجمة والتفسير على يد علماء مجازين لطلاب العالم.",
  nav_programs:"البرامج", nav_about:"لماذا نحن", nav_method:"كيف تبدأ", nav_faq:"الأسئلة الشائعة", nav_contact:"تواصل معنا", nav_enroll:"سجّل الآن",
  hero_badge:"معهد قرآني إلكتروني · لشاري، أوكارا، باكستان",
  hero_title:"مركز علي المرتضى",
  hero_sub:"تعلَّم القرآن كما أُنزل. دروس فردية مباشرة في الحفظ والتجويد والقراءات السبع والعشر والترجمة والتفسير — على يد علماء مجازين، لطلاب في كل أنحاء العالم.",
  hero_cta1:"ابدأ التجربة المجانية", hero_cta2:"استكشف البرامج",
  verse_trans:"«ورتل القرآن ترتيلًا»", verse_ref:"سورة المزمل ٧٣: ٤",
  programs_kicker:"برامجنا", programs_title:"تعليم قرآني متكامل.", programs_sub:"من الحروف الأولى إلى الإجازة — رحلة واحدة، أربعة ميادين.", programs_more:"اعرف المزيد",
  p1_title:"حفظ القرآن الكريم",
  p1_desc:"رحلة حفظ منظمة بإشراف حفّاظ متمرسين — سَبَق وسَبقي ومنزل يوميًا، وخطط شخصية، ومراجعة دقيقة حتى يستقر القرآن كله في صدرك.",
  p1_b1:"خطة حفظ شخصية", p1_b2:"سَبَق · سَبقي · منزل يوميًا", p1_b3:"إجازة عند الإتمام",
  p2_title:"التجويد",
  p2_desc:"إتقان مخارج الحروف والصفات وأحكام التلاوة — من أساسيات القاعدة النورانية إلى التلاوة المتقنة الجميلة — كما أُنزل القرآن.",
  p2_b1:"أساسيات القاعدة النورانية", p2_b2:"إتقان المخارج والصفات", p2_b3:"تلاوة النظيرة بطلاقة",
  p3_title:"القراءات السبع والعشر",
  p3_desc:"دراسة متخصصة ومتقدمة للقراءات السبع والعشر المتواترة برواياتها وطرقها — على يد متخصصين، وتُتوَّج بالإجازة بالسند.",
  p3_b1:"مناهج السبع والعشر", p3_b2:"الروايات والطرق", p3_b3:"إجازة بالسند المتصل",
  p4_title:"الترجمة والتفسير",
  p4_desc:"ما بعد التلاوة: ترجمة القرآن كلمةً كلمة، وتفسير تفصيلي من كتب المفسرين المتقدمين والمعاصرين — فهمٌ يغيّر الحياة.",
  p4_b1:"ترجمة كلمة بكلمة", p4_b2:"التفسير بالمأثور والمعاصر", p4_b3:"تدبر وتطبيق",
  nav_qurras:"القُرّاء", qurras_kicker:"قُرّاء المركز", qurras_title:"تعلَّم على يد كبار القُرّاء.", qurras_sub:"تعرَّف على المشايخ الذين يقودون برامج الإقراء في مركزنا.", head_role:"رئيس المعهد", qari_role:"قارئ ومُقرئ", call_label:"اتصال", watch_fb:"المشاهدة عبر فيسبوك", watch_yt:"المشاهدة عبر يوتيوب",
  nav_hadith:"مكتبة الحديث", lib_kicker:"السنة النبوية", lib_title:"مكتبة الحديث.", lib_sub:"٥٠٨٨٤ حديثًا من ١٧ كتابًا معتمدًا — النص العربي مع الترجمة الإنجليزية، من قاعدة بيانات حديث المفتوحة.", lib_search:"ابحث داخل هذا الكتاب…", lib_hadith:"حديث", lib_narrator:"الراوي", lib_prev:"السابق", lib_next:"التالي", lib_back:"كل الكتب", lib_loading:"جارٍ تحميل الكتاب…", lib_page:"صفحة", lib_of:"من", lib_showing:"عرض", lib_to:"إلى", lib_chapter:"باب", lib_all:"كل الأبواب", lib_cat_the9:"الكتب التسعة", lib_cat_other:"المصنفات الجامعة", lib_cat_forties:"الأربعينات", lib_books:"كتابًا", lib_open:"اقرأ", lib_note:"النص العربي الأصلي مع الترجمة الإنجليزية",
  hd_langs:"لغة", hd_mt_note:"ترجمة آلية — يبقى النص العربي هو النص المعتمد.", hd_all:"الكل", hd_search_lib:"ابحث عن كتاب…", hd_mode_both:"العربية + الترجمة", hd_mode_ar:"العربية", hd_mode_tr:"الترجمة", hd_trans_lang:"لغة الترجمة", hd_copy:"نسخ", hd_share:"مشاركة", hd_bookmark:"حفظ", hd_bookmarked:"محفوظ", hd_copied:"تم النسخ", hd_link:"تم نسخ الرابط", hd_bmarks:"المحفوظات", hd_no_bmarks:"لا توجد أحاديث محفوظة بعد.", hd_mt_unavailable:"الترجمة الآلية غير متاحة لهذه اللغة — تُعرض الإنجليزية.", hd_mt_tag:"ترجمة آلية",
  nav_donate:"تبرّع", dn_kicker:"صدقة جارية", dn_title:"استثمر للآخرة.", dn_sub:"صدقتك تُبقي طلاب القرآن يتعلمون — كل ريال يذهب للتعليم والمنح والمنصة التي تحمل كلام الله إلى أكثر من ٤٥ دولة.", dn_verse:"«مثل الذين ينفقون أموالهم في سبيل الله كمثل حبة أنبتت سبع سنابل في كل سنبلة مائة حبة»", dn_verse_ref:"سورة البقرة ٢: ٢٦١", dn_once:"مرة واحدة", dn_monthly:"شهريًا", dn_amount:"اختر المبلغ (روبية)", dn_impact:"أثر تبرعك", dn_each_month:"— كل شهر، إن شاء الله", dn_bank_title:"بيانات التبرع", dn_bank:"البنك / المحفظة", dn_acc_name:"اسم الحساب", dn_iban_l:"الآيبان", dn_copy_all:"نسخ كل البيانات", dn_copied:"تم النسخ", dn_your_name:"اسمك (اختياري)", dn_send:"أرسل عبر واتساب", dn_where:"أين تذهب صدقتك", dn_w_sch:"منح الطلاب", dn_w_teach:"مكافآت المعلمين", dn_w_plat:"المنصة والمكتبة", dn_w_admin:"الإدارة", dn_services:"ما الذي يدعمه تبرعك", dn_had:"«الصدقة لا تنقص المال.»", dn_had_ref:"صحيح مسلم ٢٥٨٨", imp1:"يوفر مواد دراسة القرآن لطالب", imp2:"يكفل دروس طالب فردية شهرًا كاملًا", imp3:"يكفل طالب حفظ ويدعم مكافأة معلم شهرًا", imp4:"يكفل حلقة كاملة من خمسة طلاب شهرًا", imp5:"يشغّل منصة المعهد بأكملها شهرًا — صدقة جارية على نطاق واسع",
  features_kicker:"لماذا مركز علي المرتضى", features_title:"كل ما تحتاجه للتعلم، في مكان واحد.",
  f1_t:"دروس فردية مباشرة", f1_d:"كل طالب يدرس مباشرة مع معلمه المجاز — اهتمام كامل ووتيرتك الخاصة.",
  f2_t:"قُرّاء وحفّاظ مجازون", f2_d:"يحمل معلمونا الإجازات والشهادات من أعرق الجامعات الإسلامية.",
  f3_t:"جدولة مرنة على مدار الساعة", f3_d:"اختر مواعيد تناسب حياتك — في أي منطقة زمنية وأي ساعة.",
  f4_t:"تجربة وتقييم مجانيان", f4_d:"ثلاثة دروس مجانية وتقييم لمستواك — قبل أي التزام.",
  f5_t:"إجازة بالسند", f5_d:"أكمل متطلبات الحفظ أو القراءات واحصل على إجازة بسند متصل.",
  f6_t:"خطط عائلية وجماعية", f6_d:"أسعار خاصة للإخوة والعائلات وحلقات العلم الصغيرة.",
  stats_students:"طالب وطالبة", stats_countries:"دولة نخدمها", stats_teachers:"معلم مجاز", stats_years:"عامًا من العطاء",
  method_kicker:"كيف تبدأ", method_title:"ابدأ في ثلاث خطوات.",
  m1_t:"احجز تجربتك المجانية", m1_d:"اختر البرنامج والوقت المناسب — ونحن نختار لك المعلم المناسب.",
  m2_t:"أجرِ اختبار المستوى", m2_d:"تقييم قصير يضعك في المستوى المناسب تمامًا.",
  m3_t:"ابدأ رحلتك", m3_d:"احضر دروسك الفردية وتابع تقدمك واحصل على الشهادات.",
  test_kicker:"آراء طلابنا", test_title:"طلاب من أنحاء العالم يثقون بنا.",
  ts1_q:"«أتممت الحفظ في سنتين ونصف مع مراجعة يومية واظبت عليها فعلًا. معلمي يتعامل مع كل آية بعناية فائقة.»", ts1_n:"عائشة ك.", ts1_l:"لندن، المملكة المتحدة · برنامج الحفظ",
  ts2_q:"«صححت أخطاء سنين في أشهر معدودة. دروس التجويد أعادت بناء تلاوتي من الحروف نفسها.»", ts2_n:"عمر س.", ts2_l:"تورونتو، كندا · برنامج التجويد",
  ts3_q:"«دراسة القراءات السبع هنا فتحت لي بابًا لم أظنه ممكنًا عبر الإنترنت — إجازة حقيقية وسند حقيقي ومعلمون جادّون.»", ts3_n:"يوسف ر.", ts3_l:"سيدني، أستراليا · برنامج القراءات",
  faq_kicker:"الأسئلة الشائعة", faq_title:"نجيب عن أسئلتكم.",
  fq1_q:"كيف تتم الدروس عبر الإنترنت؟", fq1_a:"دروس فردية بالفيديو مدتها ٣٠–٤٥ دقيقة عبر زوم أو سكايب أو واتساب — تختار المنصة والمعلم والمواعيد.",
  fq2_q:"ما الأعمار التي تقبلونها؟", fq2_a:"نستقبل الطلاب من سن الخامسة دون حد أعلى، مع مناهج مكيّفة للأطفال واليافعين والبالغين.",
  fq3_q:"هل توجد معلمات للأخوات والأطفال؟", fq3_a:"نعم، عند الطلب تُوفر معلمات مؤهلات لتدريس الأخوات والأطفال.",
  fq4_q:"كم تبلغ الرسوم؟", fq4_a:"خطط شهرية ميسرة تبدأ بعد ثلاثة دروس تجريبية وتقييم مجاني، مع خصومات عائلية.",
  fq5_q:"هل يمكنني الحصول على إجازة؟", fq5_a:"نعم، يُمنح الطالب الذي يستوفي متطلبات الحفظ أو القراءات إجازة بسند من علماء مجازين.",
  fq6_q:"بأي اللغات تُقدَّم الدروس؟", fq6_a:"التدريس متاح بالعربية والإنجليزية والأردية، مع دعم بلغات رئيسية أخرى.",
  cta_title:"رحلتك مع القرآن تبدأ اليوم.", cta_sub:"ثلاثة دروس مجانية. بلا التزام. ابدأ فحسب.", cta_btn:"ابدأ التجربة المجانية",
  ft_about:"مركز علي المرتضى معهد إسلامي إلكتروني مقره لشاري، أوكارا، باكستان — يعلّم الحفظ والتجويد والقراءات السبع والعشر والترجمة والتفسير لطلاب حول العالم.",
  ft_programs:"البرامج", ft_links:"المعهد", ft_contact:"تواصل معنا", ft_addr:"لشاري، أوكارا، البنجاب، باكستان",
  ft_rights:"© {year} مركز علي المرتضى. جميع الحقوق محفوظة.",
  lang_title:"اختر لغتك", lang_auto:"مقترحة حسب موقعك", lang_search:"ابحث عن لغة…"
}},

/* ---------------- URDU (full) ---------------- */
ur: { name:"اردو", en:"Urdu", flag:"🇵🇰", region:"پاکستان", rtl:true, t:{
  meta_title:"مرکز علی المرتضیٰ — آن لائن قرآنی ادارہ | حفظ، تجوید، قراءات، ترجمہ و تفسیر",
  meta_desc:"مرکز علی المرتضیٰ لشاری، اوکاڑہ، پنجاب، پاکستان میں قائم آن لائن اسلامی ادارہ ہے — حفظ، تجوید، قراءاتِ سبعہ و عشرہ، ترجمہ اور تفسیر کے ون آن ون آن لائن اسباق، سند یافتہ اساتذہ کے ساتھ۔",
  nav_programs:"پروگرام", nav_about:"ہم کیوں", nav_method:"طریقۂ کار", nav_faq:"سوالات", nav_contact:"رابطہ", nav_enroll:"داخلہ لیں",
  hero_badge:"آن لائن قرآنی ادارہ · لشاری، اوکاڑہ، پنجاب، پاکستان",
  hero_title:"مرکز علی المرتضیٰ",
  hero_sub:"قرآن سیکھیں اسی طرح جس طرح وہ نازل ہوا۔ حفظ، تجوید، قراءاتِ سبعہ و عشرہ، ترجمہ اور تفسیر کے ون آن ون آن لائن اسباق — سند یافتہ اساتذہ کے ساتھ، دنیا بھر کے طلبہ کے لیے۔",
  hero_cta1:"مفت ٹرائل شروع کریں", hero_cta2:"پروگرام دیکھیں",
  verse_trans:"«اور قرآن کو ٹھہر ٹھہر کر پڑھو۔»", verse_ref:"سورۂ المزمل ۷۳:۴",
  programs_kicker:"ہمارے پروگرام", programs_title:"مکمل قرآنی تعلیم۔", programs_sub:"پہلے حروف سے اجازت تک — ایک سفر، چار علوم۔", programs_more:"مزید جانیں",
  p1_title:"حفظِ قرآن",
  p1_desc:"تجربہ کار حفاظ کی نگرانی میں منظم حفظ کا سفر — روزانہ سبق، سبقت اور منزل، انفرادی پلان اور بھرپور دہرائی، یہاں تک کہ پورا قرآن آپ کے سینے میں محفوظ ہو جائے۔",
  p1_b1:"انفرادی حفظ پلان", p1_b2:"روزانہ سبق · سبقت · منزل", p1_b3:"تکمیل پر اجازت",
  p2_title:"تجوید",
  p2_desc:"مخارجِ حروف، صفات اور احکامِ تلاوت میں مہارت — نورانی قاعدہ کی بنیاد سے روانی والی خوبصورت تلاوت تک — بالکل اسی طرح جیسے قرآن نازل ہوا۔",
  p2_b1:"نورانی قاعدہ کی بنیادیں", p2_b2:"مخارج و صفات پر عبور", p2_b3:"روانی سے نظرہ تلاوت",
  p3_title:"قراءاتِ سبعہ و عشرہ",
  p3_desc:"قراءاتِ سبعہ و عشرہ کی اعلیٰ و مخصوص تعلیم، اپنی روایات و طرق کے ساتھ — ماہر اساتذہ سے، جو سند کے ساتھ اجازت پر منتج ہوتی ہے۔",
  p3_b1:"سبعہ و عشرہ نصاب", p3_b2:"روایات و طرق", p3_b3:"سند کے ساتھ اجازت",
  p4_title:"ترجمہ و تفسیر",
  p4_desc:"تلاوت سے آگے: قرآن کا لفظ بہ لفظ ترجمہ اور قدیم و جدید مفسرین سے تفصیلی تفسیر — ایسی سمجھ جو زندگی بدل دے۔",
  p4_b1:"لفظ بہ لفظ ترجمہ", p4_b2:"قدیم و جدید تفسیر", p4_b3:"تدبر اور عمل",
  nav_qurras:"قراء", qurras_kicker:"ہمارے قراء", qurras_title:"قرأت کے ماہر اساتذہ سے سیکھیں۔", qurras_sub:"ان قراء سے ملیے جو ہمارے قرآنی پروگراموں کی قیادت کرتے ہیں۔", head_role:"سربراہِ ادارہ", qari_role:"قاری و استاد", call_label:"کال کریں", watch_fb:"فیس بک پر دیکھیں", watch_yt:"یوٹیوب پر دیکھیں",
  nav_hadith:"حدیث لائبریری", lib_kicker:"سنتِ نبویؐ", lib_title:"حدیث لائبریری۔", lib_sub:"١٧ مستند کتابوں کی ٥٠٬٨٤ احادیث — عربی متن مع انگریزی ترجمہ، حدیث-جے ایس او این کے مفت ڈیٹابیس سے۔", lib_search:"اس کتاب میں تلاش کریں…", lib_hadith:"حدیث", lib_narrator:"راوی", lib_prev:"پچھلا", lib_next:"اگلا", lib_back:"تمام کتابیں", lib_loading:"کتاب لوڈ ہو رہی ہے…", lib_page:"صفحہ", lib_of:"از", lib_showing:"دکھائے جا رہے ہیں", lib_to:"تا", lib_chapter:"باب", lib_all:"تمام ابواب", lib_cat_the9:"نو مستند کتابیں", lib_cat_other:"جامع تصانیف", lib_cat_forties:"چہل حدیث", lib_books:"کتابیں", lib_open:"پڑھیں", lib_note:"اصل عربی متن مع انگریزی ترجمہ",
  hd_langs:"زبانیں", hd_mt_note:"مشینی ترجمہ — عربی متن ہی معتبر ہے۔", hd_all:"تمام", hd_search_lib:"کتاب تلاش کریں…", hd_mode_both:"عربی + ترجمہ", hd_mode_ar:"عربی", hd_mode_tr:"ترجمہ", hd_trans_lang:"ترجمہ کی زبان", hd_copy:"کاپی", hd_share:"شیئر", hd_bookmark:"محفوظ کریں", hd_bookmarked:"محفوظ شدہ", hd_copied:"کاپی ہو گیا", hd_link:"لنک کاپی ہو گیا", hd_bmarks:"محفوظات", hd_no_bmarks:"ابھی کوئی حدیث محفوظ نہیں۔", hd_mt_unavailable:"اس زبان کے لیے مشینی ترجمہ دستیاب نہیں — انگریزی دکھائی جا رہی ہے۔", hd_mt_tag:"مشینی ترجمہ",
  nav_donate:"عطیہ", dn_kicker:"صدقہ جاریہ", dn_title:"آخرت کے لیے سرمایہ لگائیں۔", dn_sub:"آپ کا صدقہ قرآن کے طلبہ کو سیکھتا رکھتا ہے — ہر روپیہ تعلیم، وظائف اور اس پلیٹ فارم پر لگتا ہے جو کلامِ اللہ کو ٤٥+ ممالک تک پہنچاتا ہے۔", dn_verse:"«اللہ کی راہ میں اپنا مال خرچ کرنے والوں کی مثال اس دانے جیسی ہے جس سے سات بالیں اگیں، ہر بال میں سو دانے۔»", dn_verse_ref:"سورۂ بقرہ ۲:۲۶۱", dn_once:"یکمشت", dn_monthly:"ماہانہ", dn_amount:"رقم منتخب کریں (PKR)", dn_impact:"آپ کا اثر", dn_each_month:"— ہر ماہ، ان شاء اللہ", dn_bank_title:"عطیہ کی تفصیلات", dn_bank:"بینک / والٹ", dn_acc_name:"اکاؤنٹ کا نام", dn_iban_l:"آئی بان", dn_copy_all:"تمام تفصیلات کاپی کریں", dn_copied:"کاپی ہو گیا", dn_your_name:"آپ کا نام (اختیاری)", dn_send:"واٹس ایپ پر بھیجیں", dn_where:"آپ کا صدقہ کہاں لگتا ہے", dn_w_sch:"طلبہ کے وظائف", dn_w_teach:"اساتذہ کے اعزازیے", dn_w_plat:"پلیٹ فارم و لائبریری", dn_w_admin:"انتظامیہ", dn_services:"آپ کا عطیہ کیا فروغ دیتا ہے", dn_had:"«صدقہ مال کو کم نہیں کرتا۔»", dn_had_ref:"صحیح مسلم ۲۵۸۸", imp1:"ایک طالب علم کے لیے قرآنی مطالعاتی مواد", imp2:"ایک طالب علم کے ون آن ون اسباق کا پورا مہینہ", imp3:"ایک حافظ طالب علم کی کفالت + استاد کے اعزازیے میں معاونت", imp4:"پانچ طلبہ کے پورے حلقے کی ایک ماہ کی کفالت", imp5:"پورے ادارے کا پلیٹ فارم ایک مہینہ — وسیع پیمانے پر صدقہ جاریہ",
  features_kicker:"مرکز علی المرتضیٰ ہی کیوں", features_title:"سیکھنے کے لیے درکار ہر کچھ، ایک جگہ۔",
  f1_t:"ون آن ون لائیو کلاسز", f1_d:"ہر طالب علم براہِ راست اپنے سند یافتہ استاد کے ساتھ پڑھتا ہے — مکمل توجہ، اپنی رفتار۔",
  f2_t:"سند یافتہ قاری اور حفاظ", f2_d:"ہمارے اساتذہ کے پاس اجازت اور معروف اسلامی جامعات کی ڈگریاں ہیں۔",
  f3_t:"چوبیس گھنٹے لچکدار اوقات", f3_d:"اپنی زندگی کے مطابق کلاس کا وقت چنیں — کوئی بھی ٹائم زون، کوئی بھی پہر۔",
  f4_t:"مفت ٹرائل اور جائزہ", f4_d:"تین مفت کلاسیں اور آپ کے لیول کا جائزہ — بغیر کسی ادائیگی کے۔",
  f5_t:"سند کے ساتھ اجازت", f5_d:"حفظ یا قراءات کی شرائط پوری کریں اور سندِ متصلہ کے ساتھ اجازت پائیں۔",
  f6_t:"فیملی اور گروپ پلانز", f6_d:"بہن بھائیوں، خاندانوں اور چھوٹے حلقوں کے لیے خصوصی رعایت۔",
  stats_students:"داخل شدہ طلبہ", stats_countries:"ممالک", stats_teachers:"سند یافتہ اساتذہ", stats_years:"سالہ تجربہ",
  method_kicker:"آغاز کیسے کریں", method_title:"تین آسان مراحل میں شروع کریں۔",
  m1_t:"مفت ٹرائل بک کریں", m1_d:"پروگرام اور وقت منتخب کریں — ہم آپ کے لیے مناسب استاد چن دیں گے۔",
  m2_t:"لیول کا جائزہ دیں", m2_d:"مختصر جائزہ آپ کو بالکل درست سطح پر بٹھاتا ہے۔",
  m3_t:"سفر شروع کریں", m3_d:"ون آن ون کلاسیں لیں، پیش رفت دیکھیں اور سرٹیفکیٹ حاصل کریں۔",
  test_kicker:"آراء", test_title:"دنیا بھر کے طلبہ کا اعتماد۔",
  ts1_q:"«میں نے اڑھائی سال میں حفظ مکمل کیا، روزانہ ایسی دہرائی کے ساتھ جس پر میں واقعی قائم رہ سکا۔ میرے استاد ہر آیت سے اتنی محبت سے پیش آتے ہیں۔»", ts1_n:"عائشہ خ.", ts1_l:"لندن، برطانیہ · پروگرامِ حفظ",
  ts2_q:"«برسوں کی غلطیاں مہینوں میں درست ہوئیں۔ تجوید کی کلاسوں نے میری تلاوت حروف سے دوبارہ تعمیر کی۔»", ts2_n:"عمر س.", ts2_l:"ٹورنٹو، کینیڈا · پروگرامِ تجوید",
  ts3_q:"«یہاں قراءاتِ سبعہ کا مطالعہ ایک ایسا دروازہ کھولا جو آن لائن ممکن ہی نہیں سمجھتا تھا — حقیقی اجازت، حقیقی سند، سنجیدہ اساتذہ۔»", ts3_n:"یوسف ر.", ts3_l:"سڈنی، آسٹریلیا · پروگرامِ قراءات",
  faq_kicker:"عمومی سوالات", faq_title:"آپ کے سوالات کے جوابات۔",
  fq1_q:"آن لائن کلاسیں کیسے ہوتی ہیں؟", fq1_a:"زوم، اسکائپ یا واٹس ایپ پر ۳۰–۴۵ منٹ کی ون آن ون ویڈیو کلاس — پلیٹ فارم، استاد اور اوقات آپ کی مرضی کے۔",
  fq2_q:"کن عمروں کے طلبہ داخلہ لے سکتے ہیں؟", fq2_a:"پانچ سال سے اوپر ہر عمر کے طلبہ کا خیرمقدم ہے؛ بچوں، نوجوانوں اور بالغوں کے لیے نصاب الگ ترتیب دیا جاتا ہے۔",
  fq3_q:"کیا خواتین اور بچوں کے لیے خواتین اساتذہ دستیاب ہیں؟", fq3_a:"جی ہاں، درخواست پر خواتین اور بچوں کے لیے اہل خواتین اساتذہ مقرر کی جاتی ہیں۔",
  fq4_q:"فیس کتنی ہے؟", fq4_a:"تین مفت کلاسوں اور مفت جائزے کے بعد آسان ماہانہ پلانز شروع ہوتے ہیں؛ خاندانی رعایت بھی دستیاب ہے۔",
  fq5_q:"کیا مجھے اجازت مل سکتی ہے؟", fq5_a:"جی ہاں، حفظ یا قراءات کی مقررہ شرائط پوری کرنے والے طلبہ کو سند یافتہ علماء سے اجازت دی جاتی ہے۔",
  fq6_q:"کلاسیں کن زبانوں میں ہوتی ہیں؟", fq6_a:"عربی، انگریزی اور اردو میں تدریس دستیاب ہے، دیگر بڑی زبانوں میں بھی معاونت فراہم کی جاتی ہے۔",
  cta_title:"قرآن کے ساتھ آپ کا سفر آج شروع ہوتا ہے۔", cta_sub:"تین مفت کلاسیں۔ کوئی پابندی نہیں۔ بس آغاز کریں۔", cta_btn:"مفت ٹرائل شروع کریں",
  ft_about:"مرکز علی المرتضیٰ لشاری، اوکاڑہ، پنجاب، پاکستان میں قائم ایک آن لائن اسلامی ادارہ ہے — جو دنیا بھر کے طلبہ کو حفظ، تجوید، قراءاتِ سبعہ و عشرہ، ترجمہ اور تفسیر کی تعلیم دیتا ہے۔",
  ft_programs:"پروگرام", ft_links:"ادارہ", ft_contact:"رابطہ", ft_addr:"لشاری، اوکاڑہ، پنجاب، پاکستان",
  ft_rights:"© {year} مرکز علی المرتضیٰ۔ جملہ حقوق محفوظ ہیں۔",
  lang_title:"اپنی زبان منتخب کریں", lang_auto:"آپ کے مقام کے لیے تجویز کردہ", lang_search:"زبان تلاش کریں…"
}},

/* ---------------- core translations for the other 27 languages ---------------- */

fa: { name:"فارسی", en:"Persian", flag:"🇮🇷", region:"ایران · افغانستان", rtl:true, t:{
  nav_programs:"برنامه‌ها", nav_about:"درباره ما", nav_method:"نحوه شروع", nav_faq:"پرسش‌ها", nav_contact:"تماس", nav_enroll:"ثبت‌نام",
  hero_title:"مرکز العافنیه",
  hero_sub:"قرآن را با اساتید دارای اجازه بیاموزید — حفظ، تجوید، قرائات سبعه و عشره، ترجمه و تفسیر؛ کلاس‌های آنلاین خصوصی برای زبان‌آموزان سراسر جهان.",
  hero_cta1:"آزمایش رایگان", hero_cta2:"مشاهده برنامه‌ها",
  programs_title:"آموزش کامل قرآنی.", features_title:"هر آنچه برای یادگیری لازم دارید.", faq_title:"پاسخ به پرسش‌های شما.",
  cta_title:"سفر شما با قرآن امروز آغاز می‌شود.", cta_btn:"آزمایش رایگان",
  lang_title:"زبان خود را انتخاب کنید", lang_auto:"پیشنهادی بر اساس موقعیت شما", lang_search:"جستجوی زبان…"
}},
ps: { name:"پښتو", en:"Pashto", flag:"🇦🇫", region:"افغانستان · پاکستان", rtl:true, t:{
  nav_programs:"پروګرامونه", nav_about:"زموږ په اړه", nav_method:"د پیل لاره", nav_faq:"پوښتنې", nav_contact:"اړیکه", nav_enroll:"نوم لیکنه",
  hero_title:"مرکز العافنیه",
  hero_sub:"قرآن کریم د اجازت لرونکو ښوونکو سره زده کړئ — حفظ، تجوید، قراءاتِ سبعه او عشره، ترجمه او تفسیر. د نړۍ د زده‌کوونکو لپاره آنلاین یو په یو درسونه.",
  hero_cta1:"وړیا ازموینه", hero_cta2:"پروګرامونه وګورئ",
  programs_title:"بشپړه قرآني زده‌کړه.", features_title:"د زده‌کړې لپاره هر څه، په یو ځای کې.", faq_title:"ستاسو د پوښتنو ځوابونه.",
  cta_title:"له قرآن سره ستاسو سفر نن پیلېږي.", cta_btn:"وړیا ازموینه",
  lang_title:"خپله ژبه وټاکئ", lang_auto:"ستاسو د ځای له مخې وړاندیز", lang_search:"ژبه ولټوئ…"
}},
sd: { name:"سنڌي", en:"Sindhi", flag:"🇵🇰", region:"سنڌ", rtl:true, t:{
  nav_programs:"پروگرام", nav_about:"اسان بابت", nav_method:"شروع ڪيئن ڪجي", nav_faq:"سوال", nav_contact:"رابطو", nav_enroll:"داخلا",
  hero_title:"مرکز العافنيه",
  hero_sub:"قرآن مجيد سند يافته استادن سان سکو — حفظ، تجويد، قراءتِ سبعه ۽ عشره، ترجمو ۽ تفسير. سڄي دنيا جي شاگردن لاءِ آن لائين ون آن ون ڪلاس.",
  hero_cta1:"مفت ٽرائل", hero_cta2:"پروگرام ڏسو",
  programs_title:"مڪمل قرآني تعليم.", features_title:"سکيا لاءِ گهربل سڀ ڪجهه.", faq_title:"توهان جي سوالن جا جواب.",
  cta_title:"قرآن سان توهان جو سفر اڄ شروع ٿئي ٿو.", cta_btn:"مفت ٽرائل",
  lang_title:"پنهنجي ٻولي چونڊيو", lang_auto:"توهان جي مقام لاءِ تجويز", lang_search:"ٻولي ڳوليو…"
}},
ks: { name:"کٲشُر", en:"Kashmiri", flag:"🏔️", region:"کشمیر", rtl:true, t:{
  nav_programs:"پروگرام", nav_about:"اسانژ متعلق", nav_method:"طریقہٕ", nav_faq:"سوالات", nav_contact:"رابطہٕ", nav_enroll:"داخلہٕ",
  hero_title:"مرکز علی المرتضیٰ",
  hero_sub:"قرآن شریف تصدیق شدہ اُستادن منز پڑھیو — حفظ، تجوید، قراءتِ سبعہ تہٕ عشرہ، ترجمہٕ تہٕ تفسیر. دنیاہس مَنٛز شاگردن خٲطرٕ آن لائن ون آن ون کلاس.",
  hero_cta1:"مفت ٹرائل", hero_cta2:"پروگرام وُچھو",
  programs_title:"مکمل قرآنی تٲلیٖم.", features_title:"سیکھنہٕ خٲطرٕ تمام کیہہ.", faq_title:"توہندین سوالن جواب.",
  cta_title:"قرآن سٲتتھ توہند سفر اَز شروع چھُ گژھان.", cta_btn:"مفت ٹرائل",
  lang_title:"پننہِ زبان مُنتخب کریو", lang_auto:"توہندس مقامس مُطابق", lang_search:"زبان ژھانڈیو…"
}},
pa: { name:"ਪੰਜਾਬੀ", en:"Punjabi", flag:"🇵🇰", region:"پنجاب · پंजाब", rtl:false, t:{
  nav_programs:"ਪ੍ਰੋਗਰਾਮ", nav_about:"ਸਾਡੇ ਬਾਰੇ", nav_method:"ਕਿਵੇਂ ਸ਼ੁਰੂ ਕਰੀਏ", nav_faq:"ਸਵਾਲ", nav_contact:"ਸੰਪਰਕ", nav_enroll:"ਦਾਖ਼ਲਾ",
  hero_title:"ਮਰਕਜ਼ੁਲ ਅਫ਼ਿਨੀਯਾਹ",
  hero_sub:"ਸਰਟੀਫਾਈਡ ਅਧਿਆਪਕਾਂ ਨਾਲ ਕੁਰਆਨ ਸਿੱਖੋ — ਹਿਫ਼ਜ਼, ਤਾਜਵੀਦ, ਕਿਰਾਅਤ ਸਬਆ ਤੇ ਅਸ਼ਰਾ, ਤਰਜਮਾ ਅਤੇ ਤਫ਼ਸੀਰ। ਦੁਨੀਆ ਭਰ ਦੇ ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਆਨਲਾਈਨ ਵਨ-ਟੂ-ਵਨ ਕਲਾਸਾਂ।",
  hero_cta1:"ਮੁਫ਼ਤ ਟ੍ਰਾਇਲ", hero_cta2:"ਪ੍ਰੋਗਰਾਮ ਵੇਖੋ",
  programs_title:"ਮੁਕੰਮਲ ਕੁਰਆਨੀ ਸਿੱਖਿਆ।", features_title:"ਸਿੱਖਣ ਲਈ ਲੋੜੀਂਦਾ ਸਭ ਕੁਝ।", faq_title:"ਤੁਹਾਡੇ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ।",
  cta_title:"ਕੁਰਆਨ ਨਾਲ ਤੁਹਾਡਾ ਸਫ਼ਰ ਅੱਜ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।", cta_btn:"ਮੁਫ਼ਤ ਟ੍ਰਾਇਲ",
  lang_title:"ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ", lang_auto:"ਤੁਹਾਡੇ ਟਿਕਾਣੇ ਅਨੁਸਾਰ ਸੁਝਾਅ", lang_search:"ਭਾਸ਼ਾ ਖੋਜੋ…"
}},
tr: { name:"Türkçe", en:"Turkish", flag:"🇹🇷", region:"Türkiye", rtl:false, t:{
  nav_programs:"Programlar", nav_about:"Hakkımızda", nav_method:"Nasıl Başlanır", nav_faq:"SSS", nav_contact:"İletişim", nav_enroll:"Kayıt Ol",
  hero_title:"Markaz Ali ul Murtaza",
  hero_sub:"Sertifikalı hocalarla Kur'an öğrenin — Hıfz, Tecvid, Kıraat-ı Seb'a ve Aşere, tercüme ve tefsir. Dünyanın her yerinden öğrenciler için bire bir online dersler.",
  hero_cta1:"Ücretsiz deneme", hero_cta2:"Programları keşfet",
  programs_title:"Eksiksiz bir Kur'an eğitimi.", features_title:"Öğrenmek için ihtiyacınız olan her şey.", faq_title:"Sorularınızın cevapları.",
  cta_title:"Kur'an ile yolculuğunuz bugün başlıyor.", cta_btn:"Ücretsiz deneme",
  lang_title:"Dilinizi seçin", lang_auto:"Konumunuza göre önerildi", lang_search:"Dil ara…"
}},
az: { name:"Azərbaycan dili", en:"Azerbaijani", flag:"🇦🇿", region:"Azərbaycan", rtl:false, t:{
  nav_programs:"Proqramlar", nav_about:"Haqqımızda", nav_method:"Necə başlamalı", nav_faq:"Suallar", nav_contact:"Əlaqə", nav_enroll:"Qeydiyyat",
  hero_sub:"Sertifikatlı müəllimlərlə Quran öyrənin — Hifz, Tacvid, Qiraət Səba və Əşrə, tərcümə və təfsir. Bütün dünyadan tələbələr üçün fərdi onlayn dərslər.",
  hero_cta1:"Pulsuz sınaq", hero_cta2:"Proqramlara bax",
  programs_title:"Tam Quran təhsili.", features_title:"Öyrənmək üçün lazım olan hər şey.", faq_title:"Suallarınıza cavablar.",
  cta_title:"Quranla səyahətiniz bu gün başlayır.", cta_btn:"Pulsuz sınaq",
  lang_title:"Dilinizi seçin", lang_auto:"Yerləşdiyiniz yerə görə tövsiyə", lang_search:"Dil axtar…"
}},
kk: { name:"Қазақ тілі", en:"Kazakh", flag:"🇰🇿", region:"Қазақстан", rtl:false, t:{
  nav_programs:"Бағдарламалар", nav_about:"Біз туралы", nav_method:"Қалай бастауға", nav_faq:"Сұрақтар", nav_contact:"Байланыс", nav_enroll:"Тіркелу",
  hero_sub:"Сертификатталған ұстаздармен Құран үйреніңіз — Хифз, Тәжуид, Қырағат Сәба және Ашра, аударма және тәпсір. Дүние жүзіндегі шәкірттерге арналған онлайн жеке сабақтар.",
  hero_cta1:"Тегін сабақ", hero_cta2:"Бағдарламаларды көру",
  programs_title:"Толық Құран білімі.", features_title:"Үйренуге қажеттінің бәрі.", faq_title:"Сұрақтарыңызға жауаптар.",
  cta_title:"Құранмен сапарыңыз бүгін басталады.", cta_btn:"Тегін сабақ",
  lang_title:"Тіліңізді таңдаңыз", lang_auto:"Орналасқан жеріңізге сай ұсыныс", lang_search:"Тіл іздеу…"
}},
uz: { name:"Oʻzbekcha", en:"Uzbek", flag:"🇺🇿", region:"Oʻzbekiston", rtl:false, t:{
  nav_programs:"Dasturlar", nav_about:"Biz haqimizda", nav_method:"Qanday boshlash", nav_faq:"Savollar", nav_contact:"Aloqa", nav_enroll:"Roʻyxatdan oʻtish",
  hero_sub:"Sertifikatlangan ustozlar bilan Qurʼon oʻrganing — Hifz, Tajvid, Qiroat Sabʼa va Ashra, tarjima va tafsir. Butun dunyo talabalari uchun onlayn individual darslar.",
  hero_cta1:"Bepul sinov", hero_cta2:"Dasturlarni koʻrish",
  programs_title:"Toʻliq Qurʼon taʼlimi.", features_title:"Oʻrganish uchun kerakli hamma narsa.", faq_title:"Savollaringizga javoblar.",
  cta_title:"Qurʼon bilan sayohatingiz bugun boshlanadi.", cta_btn:"Bepul sinov",
  lang_title:"Tilingizni tanlang", lang_auto:"Joylashuvingizga mos tavsiya", lang_search:"Til qidirish…"
}},
id: { name:"Bahasa Indonesia", en:"Indonesian", flag:"🇮🇩", region:"Indonesia", rtl:false, t:{
  nav_programs:"Program", nav_about:"Tentang Kami", nav_method:"Cara Memulai", nav_faq:"FAQ", nav_contact:"Kontak", nav_enroll:"Daftar",
  hero_sub:"Belajar Al-Qur'an bersama guru bersyahadah — Hifzh, Tajwid, Qira'at Sab'ah dan Asyrah, terjemah dan tafsir. Kelas online privat untuk pelajar di seluruh dunia.",
  hero_cta1:"Coba gratis", hero_cta2:"Lihat program",
  programs_title:"Pendidikan Al-Qur'an yang lengkap.", features_title:"Semua yang Anda butuhkan untuk belajar.", faq_title:"Jawaban atas pertanyaan Anda.",
  cta_title:"Perjalanan Anda bersama Al-Qur'an dimulai hari ini.", cta_btn:"Coba gratis",
  lang_title:"Pilih bahasa Anda", lang_auto:"Disarankan untuk lokasi Anda", lang_search:"Cari bahasa…"
}},
ms: { name:"Bahasa Melayu", en:"Malay", flag:"🇲🇾", region:"Malaysia · Brunei", rtl:false, t:{
  nav_programs:"Program", nav_about:"Tentang Kami", nav_method:"Cara Bermula", nav_faq:"Soalan", nav_contact:"Hubungi", nav_enroll:"Daftar",
  hero_sub:"Belajar Al-Quran dengan guru bertauliah — Hifz, Tajwid, Qiraat Sab'ah dan Ashrah, terjemahan dan tafsir. Kelas online satu-lawan-satu di seluruh dunia.",
  hero_cta1:"Percubaan percuma", hero_cta2:"Lihat program",
  programs_title:"Pendidikan Al-Quran yang lengkap.", features_title:"Segalanya yang anda perlukan untuk belajar.", faq_title:"Jawapan kepada soalan anda.",
  cta_title:"Perjalanan anda bersama Al-Quran bermula hari ini.", cta_btn:"Percubaan percuma",
  lang_title:"Pilih bahasa anda", lang_auto:"Dicadangkan untuk lokasi anda", lang_search:"Cari bahasa…"
}},
bn: { name:"বাংলা", en:"Bengali", flag:"🇧🇩", region:"বাংলাদেশ", rtl:false, t:{
  nav_programs:"প্রোগ্রাম", nav_about:"আমাদের সম্পর্কে", nav_method:"কীভাবে শুরু করবেন", nav_faq:"প্রশ্নোত্তর", nav_contact:"যোগাযোগ", nav_enroll:"ভর্তি হন",
  hero_sub:"প্রত্যয়িত শিক্ষকদের সাথে কুরআন শিখুন — হিফজ, তাজবীদ, কেরায়াতে সাবা ও আশারা, তরজমা ও তাফসীর। সারা বিশ্বের শিক্ষার্থীদের জন্য অনলাইন ওয়ান-টু-ওয়ান ক্লাস।",
  hero_cta1:"ফ্রি ট্রায়াল", hero_cta2:"প্রোগ্রাম দেখুন",
  programs_title:"পূর্ণাঙ্গ কুরআনি শিক্ষা।", features_title:"শেখার জন্য যা যা দরকার, সব এক জায়গায়।", faq_title:"আপনার প্রশ্নের উত্তর।",
  cta_title:"কুরআনের সাথে আপনার যাত্রা আজই শুরু হোক।", cta_btn:"ফ্রি ট্রায়াল",
  lang_title:"আপনার ভাষা বেছে নিন", lang_auto:"আপনার অবস্থান অনুযায়ী প্রস্তাবিত", lang_search:"ভাষা খুঁজুন…"
}},
hi: { name:"हिन्दी", en:"Hindi", flag:"🇮🇳", region:"भारत", rtl:false, t:{
  nav_programs:"कार्यक्रम", nav_about:"हमारे बारे में", nav_method:"कैसे शुरू करें", nav_faq:"प्रश्न", nav_contact:"संपर्क", nav_enroll:"प्रवेश लें",
  hero_sub:"प्रमाणित शिक्षकों के साथ क़ुरआन सीखें — हिफ़्ज़, ताजवीद, क़िराआत-ए-सबआ व अशरा, तर्जुमा और तफ़्सीर। दुनिया भर के छात्रों के लिए ऑनलाइन वन-ऑन-वन क्लास।",
  hero_cta1:"मुफ़्त ट्रायल", hero_cta2:"प्रोग्राम देखें",
  programs_title:"सम्पूर्ण क़ुरआनी शिक्षा।", features_title:"सीखने के लिए जो कुछ चाहिए, सब कुछ।", faq_title:"आपके सवालों के जवाब।",
  cta_title:"क़ुरआन के साथ आपकी यात्रा आज शुरू होती है।", cta_btn:"मुफ़्त ट्रायल",
  lang_title:"अपनी भाषा चुनें", lang_auto:"आपके स्थान के अनुसार सुझाव", lang_search:"भाषा खोजें…"
}},
ta: { name:"தமிழ்", en:"Tamil", flag:"🇱🇰", region:"தமிழ்நாடு · இலங்கை", rtl:false, t:{
  nav_programs:"நிரல்கள்", nav_about:"எங்களைப் பற்றி", nav_method:"எப்படி தொடங்குவது", nav_faq:"கேள்விகள்", nav_contact:"தொடர்பு", nav_enroll:"சேரவும்",
  hero_sub:"சான்றிதழ் பெற்ற ஆசிரியர்களுடன் குர்ஆன் கற்கவும் — ஹிஃழ், தஜ்வீத், கிராஅத் ஸபஆ மற்றும் அஷ்ரா, மொழிபெயர்ப்பு மற்றும் தஃப்ஸீர். உலகெங்கிலும் மாணவர்களுக்கான தனிப்பட்ட ஆன்லைன் வகுப்புகள்.",
  hero_cta1:"இலவச சோதனை", hero_cta2:"நிரல்களைக் காண்க",
  programs_title:"முழுமையான குர்ஆன் கல்வி.", features_title:"கற்றலுக்கு தேவையான அனைத்தும்.", faq_title:"உங்கள் கேள்விகளுக்கான பதில்கள்.",
  cta_title:"குர்ஆனுடனான உங்கள் பயணம் இன்று தொடங்குகிறது.", cta_btn:"இலவச சோதனை",
  lang_title:"உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்", lang_auto:"உங்கள் இடத்திற்கு பரிந்துரைக்கப்பட்டது", lang_search:"மொழியைத் தேடு…"
}},
so: { name:"Soomaali", en:"Somali", flag:"🇸🇴", region:"Soomaaliya", rtl:false, t:{
  nav_programs:"Barnaamijyada", nav_about:"Nagu saabsan", nav_method:"Sida loo bilaabo", nav_faq:"Su'aalaha", nav_contact:"Xiriir", nav_enroll:"Isdiiwaangeli",
  hero_sub:"Ku baro Quraanka macallimiin shahaado haysta — Xifdi, Tajwiid, Qiraa'aadka Todobada iyo Tobanka, tarjumaad iyo Tafsiir. Casharro toos ah oo qof-keligiis ah ardayda adduunka oo dhan.",
  hero_cta1:"Tijaabo bilaash ah", hero_cta2:"Arag barnaamijyada",
  programs_title:"Waxbarasho Quraan oo dhammaystiran.", features_title:"Wax kasta oo aad u baahan tahay si aad wax u barato.", faq_title:"Jawaabaha su'aalahaaga.",
  cta_title:"Safarkaaga Quraanka maanta ayuu bilaabmayaa.", cta_btn:"Tijaabo bilaash ah",
  lang_title:"Dooro luqaddaada", lang_auto:"Waxaa laguu soo jeediyay meesha aad joogto", lang_search:"Raadi luqad…"
}},
sw: { name:"Kiswahili", en:"Swahili", flag:"🇰🇪", region:"Afrika Mashariki", rtl:false, t:{
  nav_programs:"Programu", nav_about:"Kuhusu Sisi", nav_method:"Jinsi ya Kuanza", nav_faq:"Maswali", nav_contact:"Wasiliana", nav_enroll:"Jisajili",
  hero_sub:"Jifunze Qurani na walimu wenye vyeti — Hifz, Tajweed, Qira'at Sab'a na Ashra, tafsiri na Tafsir. Masomo ya mtandaoni ya mmoja kwa mmoja kwa wanafunzi duniani kote.",
  hero_cta1:"Jaribio la bure", hero_cta2:"Angalia programu",
  programs_title:"Elimu kamili ya Qurani.", features_title:"Kila kitu unachohitaji kujifunza.", faq_title:"Majibu ya maswali yako.",
  cta_title:"Safari yako na Qurani inaanza leo.", cta_btn:"Jaribio la bure",
  lang_title:"Chagua lugha yako", lang_auto:"Imependekezwa kwa eneo lako", lang_search:"Tafuta lugha…"
}},
ha: { name:"Hausa", en:"Hausa", flag:"🇳🇬", region:"Nijeriya · Nijar", rtl:false, t:{
  nav_programs:"Shirye-shirye", nav_about:"Game da mu", nav_method:"Yadda ake farawa", nav_faq:"Tambayoyi", nav_contact:"Tuntuɓa", nav_enroll:"Rajista",
  hero_sub:"Koyi Alqur'ani tare da malaman da aka ba su izini — Hifz, Tajweed, Qira'at Sab'a da Ashra, fassara da Tafsir. Darussan kan layi na kai-da-kai ga ɗalibai a ko'ina cikin duniya.",
  hero_cta1:"Gwaji na kyauta", hero_cta2:"Duba shirye-shirye",
  programs_title:"Ilimin Alqur'ani cikakke.", features_title:"Komai da kuke buƙata don koyo.", faq_title:"Amsoshin tambayoyinku.",
  cta_title:"Tafiyarku da Alqur'ani tana farawa a yau.", cta_btn:"Gwaji na kyauta",
  lang_title:"Zaɓi harshenku", lang_auto:"An ba da shawara bisa wurinku", lang_search:"Bincika harshe…"
}},
am: { name:"አማርኛ", en:"Amharic", flag:"🇪🇹", region:"ኢትዮጵያ", rtl:false, t:{
  nav_programs:"ፕሮግራሞች", nav_about:"ስለ እኛ", nav_method:"እንዴት መጀመር", nav_faq:"ጥያቄዎች", nav_contact:"አግኙን", nav_enroll:"ይመዝገቡ",
  hero_sub:"ከተረጋገጡ መምህራን ጋር ቁርአንን ይማሩ — ሂፍዝ፣ ታጅዊድ፣ ቂራአት ሰባ እና አሽራ፣ ትርጉም እና ታፍሲር። ለዓለም አቀፍ ተማሪዎች የአንድ-ለአንድ የመስመር ላይ ትምህርቶች።",
  hero_cta1:"ነፃ ሙከራ", hero_cta2:"ፕሮግራሞችን ይመልከቱ",
  programs_title:"የተሟላ የቁርአን ትምህርት።", features_title:"ለመማር የሚያስፈልግዎት ሁሉ።", faq_title:"ለጥያቄዎችዎ መልሶች።",
  cta_title:"ከቁርአን ጋር ጉዞዎ ዛሬ ይጀምራል።", cta_btn:"ነፃ ሙከራ",
  lang_title:"ቋንቋዎን ይምረጡ", lang_auto:"ለአካባቢዎ የተጠቆመ", lang_search:"ቋንቋ ፈልግ…"
}},
fr: { name:"Français", en:"French", flag:"🇫🇷", region:"France · Canada · Afrique de l'Ouest", rtl:false, t:{
  nav_programs:"Programmes", nav_about:"Pourquoi nous", nav_method:"Comment commencer", nav_faq:"FAQ", nav_contact:"Contact", nav_enroll:"S'inscrire",
  hero_sub:"Apprenez le Coran avec des enseignants certifiés — Hifz, Tajwid, Qira'at Sab'a et Ashra, traduction et Tafsir. Cours particuliers en ligne pour étudiants du monde entier.",
  hero_cta1:"Essai gratuit", hero_cta2:"Voir les programmes",
  programs_title:"Une éducation coranique complète.", features_title:"Tout ce qu'il faut pour apprendre.", faq_title:"Les réponses à vos questions.",
  cta_title:"Votre voyage avec le Coran commence aujourd'hui.", cta_btn:"Essai gratuit",
  lang_title:"Choisissez votre langue", lang_auto:"Suggéré selon votre position", lang_search:"Rechercher une langue…"
}},
es: { name:"Español", en:"Spanish", flag:"🇪🇸", region:"España · Latinoamérica", rtl:false, t:{
  nav_programs:"Programas", nav_about:"Por qué nosotros", nav_method:"Cómo empezar", nav_faq:"Preguntas", nav_contact:"Contacto", nav_enroll:"Inscribirse",
  hero_sub:"Aprende el Corán con maestros certificados: Hifz, Tajweed, Qira'at Sab'a y Ashra, traducción y Tafsir. Clases individuales en línea para estudiantes de todo el mundo.",
  hero_cta1:"Prueba gratuita", hero_cta2:"Ver programas",
  programs_title:"Una educación coránica completa.", features_title:"Todo lo que necesitas para aprender.", faq_title:"Respuestas a tus preguntas.",
  cta_title:"Tu viaje con el Corán empieza hoy.", cta_btn:"Prueba gratuita",
  lang_title:"Elige tu idioma", lang_auto:"Sugerido según tu ubicación", lang_search:"Buscar idioma…"
}},
de: { name:"Deutsch", en:"German", flag:"🇩🇪", region:"Deutschland · Österreich", rtl:false, t:{
  nav_programs:"Programme", nav_about:"Warum wir", nav_method:"So geht's los", nav_faq:"FAQ", nav_contact:"Kontakt", nav_enroll:"Anmelden",
  hero_sub:"Lerne den Koran mit zertifizierten Lehrern — Hifz, Tadschwid, Qira'at Sab'a und Ashra, Übersetzung und Tafsir. Online-Einzelunterricht für Schüler weltweit.",
  hero_cta1:"Kostenlose Probestunde", hero_cta2:"Programme entdecken",
  programs_title:"Eine vollständige koranische Ausbildung.", features_title:"Alles, was du zum Lernen brauchst.", faq_title:"Antworten auf deine Fragen.",
  cta_title:"Deine Reise mit dem Koran beginnt heute.", cta_btn:"Kostenlose Probestunde",
  lang_title:"Wähle deine Sprache", lang_auto:"Für deinen Standort empfohlen", lang_search:"Sprache suchen…"
}},
it: { name:"Italiano", en:"Italian", flag:"🇮🇹", region:"Italia", rtl:false, t:{
  nav_programs:"Programmi", nav_about:"Perché noi", nav_method:"Come iniziare", nav_faq:"FAQ", nav_contact:"Contatti", nav_enroll:"Iscriviti",
  hero_sub:"Impara il Corano con insegnanti certificati — Hifz, Tajweed, Qira'at Sab'a e Ashra, traduzione e Tafsir. Lezioni individuali online per studenti di tutto il mondo.",
  hero_cta1:"Prova gratuita", hero_cta2:"Scopri i programmi",
  programs_title:"Un'educazione coranica completa.", features_title:"Tutto ciò che serve per imparare.", faq_title:"Le risposte alle tue domande.",
  cta_title:"Il tuo viaggio con il Corano inizia oggi.", cta_btn:"Prova gratuita",
  lang_title:"Scegli la tua lingua", lang_auto:"Consigliato in base alla tua posizione", lang_search:"Cerca lingua…"
}},
pt: { name:"Português", en:"Portuguese", flag:"🇧🇷", region:"Brasil · Portugal", rtl:false, t:{
  nav_programs:"Programas", nav_about:"Por que nós", nav_method:"Como começar", nav_faq:"FAQ", nav_contact:"Contato", nav_enroll:"Inscrever-se",
  hero_sub:"Aprenda o Alcorão com professores certificados — Hifz, Tajweed, Qira'at Sab'a e Ashra, tradução e Tafsir. Aulas particulares online para alunos do mundo todo.",
  hero_cta1:"Aula grátis", hero_cta2:"Ver programas",
  programs_title:"Uma educação corânica completa.", features_title:"Tudo o que você precisa para aprender.", faq_title:"Respostas para suas perguntas.",
  cta_title:"Sua jornada com o Alcorão começa hoje.", cta_btn:"Aula grátis",
  lang_title:"Escolha seu idioma", lang_auto:"Sugerido para sua localização", lang_search:"Pesquisar idioma…"
}},
ru: { name:"Русский", en:"Russian", flag:"🇷🇺", region:"Россия · Центральная Азия", rtl:false, t:{
  nav_programs:"Программы", nav_about:"О нас", nav_method:"Как начать", nav_faq:"Вопросы", nav_contact:"Контакты", nav_enroll:"Записаться",
  hero_sub:"Изучайте Коран с сертифицированными учителями — Хифз, Таджвид, Кираат Саба и Ашра, перевод и Тафсир. Индивидуальные онлайн-уроки для студентов по всему миру.",
  hero_cta1:"Бесплатный пробный урок", hero_cta2:"Наши программы",
  programs_title:"Полное кораническое образование.", features_title:"Всё, что нужно для обучения.", faq_title:"Ответы на ваши вопросы.",
  cta_title:"Ваше путешествие с Кораном начинается сегодня.", cta_btn:"Бесплатный пробный урок",
  lang_title:"Выберите язык", lang_auto:"Рекомендовано для вашего региона", lang_search:"Поиск языка…"
}},
zh: { name:"中文", en:"Chinese", flag:"🇨🇳", region:"中国", rtl:false, t:{
  nav_programs:"课程", nav_about:"关于我们", nav_method:"如何开始", nav_faq:"常见问题", nav_contact:"联系我们", nav_enroll:"报名",
  hero_title:"Markaz Ali ul Murtaza 古兰经学院",
  hero_sub:"跟随持证教师学习《古兰经》——背记（Hifz）、泰吉威德（Tajweed）、七诵与十诵（Qira'at）、翻译与经注。面向全球学生的一对一在线课程。",
  hero_cta1:"免费试听", hero_cta2:"浏览课程",
  programs_title:"完整的古兰经教育。", features_title:"学习所需，一应俱全。", faq_title:"为您解答疑问。",
  cta_title:"您与《古兰经》的旅程从今天开始。", cta_btn:"免费试听",
  lang_title:"选择您的语言", lang_auto:"根据您的所在位置推荐", lang_search:"搜索语言…"
}},
ja: { name:"日本語", en:"Japanese", flag:"🇯🇵", region:"日本", rtl:false, t:{
  nav_programs:"プログラム", nav_about:"私たちについて", nav_method:"始め方", nav_faq:"よくある質問", nav_contact:"お問い合わせ", nav_enroll:"入学する",
  hero_sub:"認定講師と学ぶクルアーン — ヒフズ、タジュウィード、七つのキラーアと十のキラーア、翻訳とタフスィール。世界中の学生のためのオンライン個人レッスン。",
  hero_cta1:"無料体験", hero_cta2:"プログラムを見る",
  programs_title:"完全なクルアーン教育。", features_title:"学習に必要なすべてを。", faq_title:"よくある質問にお答えします。",
  cta_title:"クルアーンとの旅は今日、始まります。", cta_btn:"無料体験",
  lang_title:"言語を選択", lang_auto:"現在地に基づいたおすすめ", lang_search:"言語を検索…"
}},
ko: { name:"한국어", en:"Korean", flag:"🇰🇷", region:"대한민국", rtl:false, t:{
  nav_programs:"프로그램", nav_about:"소개", nav_method:"시작하기", nav_faq:"자주 묻는 질문", nav_contact:"문의", nav_enroll:"등록",
  hero_sub:"인증된 교사와 꾸란을 배우세요 — 히프즈, 타즈위드, 7종·10종 키라아트, 번역과 타프시르. 전 세계 학생을 위한 1:1 온라인 수업.",
  hero_cta1:"무료 체험", hero_cta2:"프로그램 보기",
  programs_title:"완성도 있는 꾸란 교육.", features_title:"학습에 필요한 모든 것.", faq_title:"궁금증을 풀어드립니다.",
  cta_title:"꾸란과 함께하는 여정이 오늘 시작됩니다.", cta_btn:"무료 체험",
  lang_title:"언어 선택", lang_auto:"위치 기반 추천", lang_search:"언어 검색…"
}}
};

/* Display order in the language picker */
window.LANG_ORDER = ["en","ar","ur","fa","ps","sd","ks","pa","tr","az","kk","uz","id","ms","bn","hi","ta","so","sw","ha","am","fr","es","de","it","pt","ru","zh","ja","ko"];

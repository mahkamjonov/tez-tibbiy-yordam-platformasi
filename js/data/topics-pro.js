/* Mutaxassis qalqoni: faqat tibbiyot xodimlari uchun professional yo'nalishlar (proOnly: true).
 * Bu mavzularda aholi uchun yo'riqnoma yo'q. Ma'lumotlar amaldagi klinik protokollar va rasmiy
 * manbalar bilan solishtirilishi kerak; dozalar ko'rsatilmagan.
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

TTY.data.topics.push(
  /* ───────────────────────── ABCDE va SAB ───────────────────────── */
  {
    slug: "abcde",
    proOnly: true,
    shield: null,
    tone: "life",
    icon: "checklist",
    title: "ABCDE va SAB (CAB)",
    subtitle: "Birlamchi baholash · tizimli yondashuv",
    badges: [{ t: "Asos", c: "" }, { t: "Professional", c: "amber" }],
    lead: "Har bir og'ir bemorda hayotga xavf soluvchi muammolarni tartib bilan topish va zudlik bilan bartaraf etish.",
    facts: [
      { l: "Yurak to'xtashida", v: "SAB (CAB)" },
      { l: "Boshqa og'ir bemor", v: "ABCDE" },
      { l: "Qoida", v: "Xavfni topsangiz — darhol to'g'rilang" }
    ],
    critical: {
      title: "Diqqat! Tartib muhim",
      text: "Avval **hayotga xavf soluvchi muammoni** topib to'g'rilang, keyin keyingi bosqichga o'ting. Massiv qon ketish bo'lsa — u ABCDE dan oldin (X-ABCDE). Bemor holati o'zgarsa, baholashni boshidan (A dan) takrorlang."
    },
    steps: {
      belgilar: [
        "**SAB (CAB):** S — sirkulyatsiya (kompressiya), A — nafas yo'li, B — nafas. Hushsiz va normal nafas olmayotgan bemorda (BLS) kompressiya birinchi.",
        "**ABCDE:** hushi joyida yoki nafas bor bemorda tizimli baholash — barcha og'ir, noaniq va travmatik holatlarda.",
        "**X — massiv qon ketish:** tashqi hayot uchun xavfli qon ketish birinchi to'xtatiladi.",
        "**Xavf belgilari:** xush o'zgarishi, nafas qiyinligi, past bosim, tez puls, sianoz."
      ],
      baholash: [
        "**A — Airway (nafas yo'li):** ochiqmi? Gapirsa — ochiq. To'siq: til, qon, qusuq, begona jism, shish. Bo'yin jarohati ehtimolini hisobga oling.",
        "**B — Breathing (nafas):** chastota, chuqurlik, simmetriya, SpO₂, auskultatsiya; taranglashgan pnevmotoraks belgilari.",
        "**C — Circulation (qon aylanishi):** puls, bosim, kapillyar to'lish, teri, qon ketish manbai, EKG, tomir yo'li.",
        "**D — Disability (nevrologik holat):** xush (AVPU yoki Glazgo), qorachiqlar, glyukoza, talvasa, FAST.",
        "**E — Exposure (ochib ko'rish):** kiyimni ochib jarohat, toshma, haroratni ko'rish; so'ng isitish."
      ],
      birinchi: [
        "**A muammo:** bosh orqaga – iyak yuqoriga yoki jag'ni oldinga surish, aspirator, orofaringeal yo'l; begona jismni olib tashlash.",
        "**B muammo:** kislorod, BVM, taranglashgan pnevmotoraksda dekompressiya (protokol), bronxospazm davosi.",
        "**C muammo:** qon ketishini to'xtatish, tomir yo'li, infuziya, EKG; aritmiya va O'KS davosi (protokol).",
        "**D/E muammo:** gipoglikemiyani to'g'rilash, talvasa davosi, isitish yoki sovutish."
      ],
      brigada: [
        "**Rollar:** jamoa rahbari baholaydi, boshqalar bajaradi va bajarganini ovoz chiqarib xabar qiladi (yopiq aloqa doirasi).",
        "**Qayta baholash:** har muolajadan keyin va bemor yomonlashganda — A dan boshlab.",
        "**Monitoring:** SpO₂, EKG, bosim, imkon bo'lsa kapnografiya, glyukoza, harorat.",
        "**Eskalatsiya:** joyida hal qilib bo'lmasa — qo'shimcha brigada yoki mutaxassis; shifoxonaga oldindan xabar."
      ],
      transport: [
        "**Qaror:** hayotga xavf topilsa joyda ortiqcha vaqt sarflamang («yuklab-ol va ket»).",
        "**Yo'lda:** ABCDE ni qayta baholang, muolajalarni davom ettiring.",
        "**Shifoxona tanlash:** patologiyaga qarab (travma, insult, PCI, reanimatsiya).",
        "**Xabar:** SBAR yoki ATMIST bo'yicha oldindan ogohlantiring."
      ],
      hujjat: [
        "**Baholash natijalari:** har bosqich (A, B, C, D, E) bo'yicha topilma va vaqt.",
        "**Muolajalar va javob:** har harakat, vaqt, natija.",
        "**Dinamika:** nafas chastotasi, SpO₂, bosim, puls, Glazgo, glyukoza.",
        "**Topshirish:** SBAR (Situatsiya – Fon – Baholash – Tavsiya) bo'yicha qisqa hisobot."
      ]
    },
    drugs: ["adrenalin", "atropin"],
    equipment: ["pulsoksimetr", "ekg-monitor", "aspirator", "bvm"],
    quiz: "abcde"
  },

  /* ───────────────────────── O'KS ───────────────────────── */
  {
    slug: "oks",
    proOnly: true,
    shield: null,
    tone: "heart",
    icon: "ecg_heart",
    title: "O'tkir koronar sindrom (O'KS)",
    subtitle: "STEMI · NSTEMI · nostabil stenokardiya",
    badges: [{ t: "Kod: qizil", c: "red" }, { t: "Professional", c: "amber" }],
    lead: "Ko'krak og'rig'ida tezkor EKG, xavfni aniqlash, dastlabki davo va to'g'ri shifoxonaga yo'naltirish.",
    facts: [
      { l: "12 tarmoqli EKG", v: "≤ 10 daqiqa", red: true },
      { l: "STEMI", v: "PCI markaziga" },
      { l: "Doimiy", v: "Defibrillyator tayyor" }
    ],
    critical: {
      title: "Diqqat! EKG kechiktirilmaydi",
      text: "Ko'krak og'rig'i bilan kelgan har bir bemorda **12 tarmoqli EKG** imkon qadar tezroq (odatda birinchi tibbiy aloqadan 10 daqiqa ichida) yozilishi kerak. STEMI bo'lsa — shifoxonani oldindan ogohlantirib, PCI markaziga tezkor transport."
    },
    steps: {
      belgilar: [
        "**Tipik og'riq:** ko'krak orqasida bosuvchi, siquvchi og'riq; chap qo'l, jag', bo'yin yoki orqaga tarqaladi; 20 daqiqadan uzoq davom etadi.",
        "**Hamroh belgilar:** sovuq ter, ko'ngil aynishi, hansirash, holsizlik, o'lim qo'rquvi.",
        "**Atipik namoyon bo'lish:** ayollar, keksalar va qandli diabetda — og'riqsiz hansirash, qorin yuqorisi og'rig'i, holsizlik.",
        "**Xavfli belgilar:** hushdan ketish, past bosim, o'pka shishi, aritmiya (kardiogen shok, qorinchalar fibrillyatsiyasi)."
      ],
      baholash: [
        "**12 tarmoqli EKG:** birinchi aloqadan ≤ 10 daqiqada; STEMI mezonlari (ketma-ket tarmoqlarda ST balandlashuvi), yangi chap tarmoq blokadasi shubhasi.",
        "**ABCDE va monitoring:** bosim, puls, SpO₂, glyukoza, ritm.",
        "**Anamnez:** og'riq boshlanish vaqti va xarakteri, oldingi yurak kasalligi, PDE-5 ingibitorlari, qon ketish xavfi, antikoagulyantlar.",
        "**Differensial:** aorta dissektsiyasi, o'pka emboliyasi, pnevmotoraks, perikardit — mos belgilarda nitrat va antiagregantni ehtiyotkorlik bilan qo'llang."
      ],
      birinchi: [
        "**Tinch holat:** yarim o'tirgan, kiyimni bo'shatish, tinchlantirish.",
        "**Kislorod:** faqat gipoksiyada (SpO₂ protokol chegarasidan past bo'lsa) — ortiqcha kislorod foyda bermaydi.",
        "**Aspirin:** qarshi ko'rsatma bo'lmasa chaynab yutish — protokol bo'yicha.",
        "**Nitrat:** bosim yetarli, PDE-5 ingibitori qabul qilinmagan, o'ng qorincha infarkti istisno qilingan bo'lsa — protokol bo'yicha."
      ],
      brigada: [
        "**Defibrillyator elektrodlari ulangan bo'lsin:** ST-balandlashuvda qorinchalar fibrillyatsiyasi xavfi yuqori.",
        "**Tomir yo'li va og'riqsizlantirish:** protokol bo'yicha (nitratdan keyin ham og'riq davom etsa).",
        "**Aritmiya va kardiogen shok:** davo protokol bo'yicha; suyuqlikni ko'p yubormang.",
        "**STEMI aktivatsiyasi:** EKG ni shifoxonaga uzatish va kateterizatsiya bo'limini ogohlantirish."
      ],
      transport: [
        "**Yo'nalish:** STEMI — perkutan koronar aralashuv (PCI) imkoniyati bor markazga; imkon bo'lmasa tromboliz haqidagi qaror shifokor tomonidan.",
        "**Yo'lda:** monitoring, defibrillyator tayyor, EKG ni takror yozish.",
        "**Vaqt:** boshlanishdan reperfuziyagacha vaqt muhim — joyda kechikmang.",
        "**Oldindan xabar:** EKG va vaqtlarni uzating."
      ],
      hujjat: [
        "**Vaqtlar:** og'riq boshlanishi, birinchi tibbiy aloqa, EKG, shifoxonaga xabar, topshirish.",
        "**EKG:** yozilgan nusxalar va talqin.",
        "**Muolajalar:** aspirin, nitrat, kislorod, og'riqsizlantirish (nomi, dozasi, vaqti).",
        "**Xavf omillari va dorilar:** antikoagulyantlar, oldingi infarkt yoki stent."
      ]
    },
    drugs: ["aspirin", "nitroglitserin", "amiodaron"],
    equipment: ["ekg-monitor", "defibrillyator", "kislorod", "pulsoksimetr"],
    quiz: "oks"
  },

  /* ───────────────────────── TRIAJ ───────────────────────── */
  {
    slug: "triage",
    proOnly: true,
    shield: null,
    tone: "tox",
    icon: "groups",
    title: "Triaj (saralash)",
    subtitle: "START · JumpSTART · ko'p jabrlanuvchili hodisa",
    badges: [{ t: "Ko'p jabrlanuvchi", c: "red" }, { t: "Professional", c: "amber" }],
    lead: "Ko'p jabrlanuvchili hodisada resurslar yetmaganda bemorlarni tez saralash va ustuvorlik bo'yicha yo'naltirish.",
    facts: [
      { l: "Bitta bemor", v: "30–60 soniya", red: true },
      { l: "Tizim", v: "START" },
      { l: "Bolalarda", v: "JumpSTART" }
    ],
    critical: {
      title: "Diqqat! Triajda davolanmaydi",
      text: "Maqsad — **eng ko'pga eng katta foyda**. Triaj vaqtida uzoq muolaja qilinmaydi: faqat nafas yo'lini ochish va massiv qon ketishni to'xtatish. Holat o'zgarishi mumkin — triajni takrorlang."
    },
    steps: {
      belgilar: [
        "**Ko'p jabrlanuvchili hodisa:** jabrlanuvchilar soni mavjud brigada va jihozdan ko'p.",
        "**Kategoriyalar (START):** qizil — zudlik bilan; sariq — kechiktirish mumkin; yashil — yengil (yura oladi); qora — hayot belgisi yo'q yoki kutilayotgan halok.",
        "**Vaqt:** bitta jabrlanuvchini 30–60 soniyada baholang.",
        "**Rahbar:** hodisa joyida triaj bo'yicha mas'ul aniq bo'lsin."
      ],
      baholash: [
        "**1. Yura oladimi?** Ha — yashil (keyinga qoldiriladi).",
        "**2. Nafas:** yo'q bo'lsa nafas yo'lini oching; nafas paydo bo'lmasa — qora, paydo bo'lsa — qizil. Nafas chastotasi > 30/daq — qizil.",
        "**3. Qon aylanishi:** kapillyar to'lish > 2 soniya yoki radial puls yo'q — qizil; massiv qon ketishni to'xtating.",
        "**4. Xush:** oddiy buyruqni bajara olmasa — qizil; aks holda sariq."
      ],
      birinchi: [
        "**Faqat hayotiy amallar:** nafas yo'lini ochish, massiv qon ketishni to'xtatish, tiklovchi holat.",
        "**Belgilash:** rangli tasma yoki karta; vaqtni yozing.",
        "**Qayta triaj:** holat o'zgarishi mumkin — vaqti-vaqti bilan takrorlang.",
        "**Bolalar:** JumpSTART (yoshga mos nafas chastotasi me'yorlari, nafas yo'q bo'lsa boshlang'ich puflash) yoki mahalliy protokol."
      ],
      brigada: [
        "**Zonalar:** triaj, davo va evakuatsiya hududlarini ajrating; rollarni taqsimlang.",
        "**Aloqa:** dispetcherga jabrlanuvchilar soni, turi, qo'shimcha kuch va transport so'rang.",
        "**Ustuvorlik:** qizillar birinchi olib ketiladi; yashillar alohida to'planish joyida.",
        "**Xavfsizlik:** hodisa joyi (yong'in, kimyoviy, terror) xavfini baholang."
      ],
      transport: [
        "**Ustuvorlik bo'yicha yo'naltirish:** qizillar — eng mos markazlarga; hammani bitta shifoxonaga yubormang.",
        "**Shifoxonalar bilan aloqa:** sig'im va ixtisoslashuvni aniqlang.",
        "**Yo'lda:** qayta baholang, kategoriyani yangilang.",
        "**Belgi:** kategoriya belgisi bemor bilan birga bo'lsin."
      ],
      hujjat: [
        "**Ro'yxat:** jabrlanuvchilar soni, kategoriyalar, vaqtlar.",
        "**Yo'nalish:** har birining kategoriyasi va qayerga olib ketilgani.",
        "**Muolajalar:** ko'rsatilgan yordam (qisqa).",
        "**Hodisadan keyin:** hisobot va tahlil."
      ]
    },
    drugs: [],
    equipment: ["turniket", "aspirator", "immobilizatsiya"],
    quiz: "triage"
  },

  /* ───────────────────────── IMMOBILIZATSIYA ───────────────────────── */
  {
    slug: "immobilizatsiya",
    proOnly: true,
    shield: null,
    tone: "trauma",
    icon: "accessibility_new",
    title: "Immobilizatsiya",
    subtitle: "Bo'yin · umurtqa · chanoq · oyoq-qo'l",
    badges: [{ t: "Travma", c: "" }, { t: "Professional", c: "amber" }],
    lead: "Umurtqa, chanoq va suyaklarni to'g'ri mahkamlash: qachon, qanday va qanday xatolardan saqlanish.",
    facts: [
      { l: "Avval", v: "ABCDE va qon ketish", red: true },
      { l: "Har muolajada", v: "Puls · harakat · sezgi" },
      { l: "Ko'chirish", v: "Bir vaqtda, kelishib" }
    ],
    critical: {
      title: "Diqqat! Immobilizatsiya — ikkinchi navbatda",
      text: "Immobilizatsiya hayotga xavf soluvchi muammolarni (nafas yo'li, qon ketishi) **almashtirmaydi** — avval ularni to'g'rilang. Umurtqa shubhasida bosh, bo'yin va tana bir o'qda saqlanadi; qattiq taxtada uzoq turish bosim yaralari va nafas cheklanishiga olib keladi."
    },
    steps: {
      belgilar: [
        "**Mexanizm:** baland joydan yiqilish, avtohalokat, sho'ng'ish, bosh-bo'yin jarohati, ongi buzilgan travma bemori.",
        "**Umurtqa shubhasi:** bo'yin yoki orqa og'rig'i, sezgi yoki harakat yo'qolishi, deformatsiya, qo'l-oyoq zaifligi.",
        "**Chanoq jarohati:** chanoq og'rig'i, beqarorlik, oyoqlar uzunligi yoki burilishi farqi, shok belgilari.",
        "**Suyak sinishi yoki chiqishi:** deformatsiya, shish, g'ayritabiiy harakat; ochiq jarohatda suyak ko'rinadi."
      ],
      baholash: [
        "**Avval ABCDE va massiv qon ketish.**",
        "**Umurtqa qarori:** yuqori xavfli mexanizm, ongi buzilishi, nevrologik defitsit, kuchli og'riq yoki mast holat bo'lsa immobilizatsiya qilinadi; qaror mahalliy protokol bo'yicha.",
        "**Distal baholash (puls – harakat – sezgi):** muolajadan oldin va keyin.",
        "**Yoshga xos:** bolalar va keksalarda qulay neytral holatni saqlang."
      ],
      birinchi: [
        "**Qo'lda stabilizatsiya:** boshni ikki qo'l bilan neytral holatda ushlab turing.",
        "**Bo'yin yoqasi:** mos o'lcham; avval iyak ostiga, so'ng orqadan o'rang; nafas va yutishga to'sqinlik qilmasin.",
        "**Ko'chirish:** jamoa bilan bir vaqtda (bosh, bo'yin, tana bir o'qda burib), orqani tekshiring; vakuum matras yoki spinal taxta; tasmalar tana → chanoq → oyoq; so'ng bosh mahkamlagich.",
        "**Oyoq-qo'l:** sinish joyidan yuqori va pastdagi bo'g'imlarni qamrab shinalang; deformatsiyani kuch bilan to'g'rilamang; ochiq jarohatni avval yoping."
      ],
      brigada: [
        "**Chanoq:** shok belgilarida chanoq bog'ichi (katta ko'st sathida); chanoqni tebratib tekshirmang.",
        "**Vakuum shina va matras:** qotirilgach puls-harakat-sezgini qayta tekshiring.",
        "**Bosim yaralari:** qattiq taxtada vaqtni qisqartiring; imkon qadar vakuum matrasga o'tkazing.",
        "**Nafas va qusish:** tasmalar nafasni cheklamasin; aspirator qo'l ostida, yon tomonga burishga tayyor turing."
      ],
      transport: [
        "**Mahkamlash:** transport paytida bosh, tana va oyoq-qo'l qimirlamasin.",
        "**Yo'lda:** puls-harakat-sezgi, og'riq va nafasni qayta baholang.",
        "**Yo'nalish:** travma markazi.",
        "**Tasmalar:** tormozlash va burilishda siljimaganini tekshiring."
      ],
      hujjat: [
        "**Ko'rsatma:** immobilizatsiya sababi (mexanizm va belgilar).",
        "**Distal baholash:** muolajadan oldin va keyin.",
        "**Vositalar:** yoqa, taxta yoki matras, shinalar, chanoq bog'ichi; vaqt.",
        "**Topshirish:** shifoxonaga jarohat mexanizmi va holatni xabar qilish."
      ]
    },
    drugs: [],
    equipment: ["immobilizatsiya", "vakuum-shina", "boyin-yoqa"],
    quiz: "immobilizatsiya"
  }
);

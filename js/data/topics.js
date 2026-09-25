/* Tez yordam maktabi — klinik mavzular.
 *
 * Har bir mavzu 6 bosqichdan iborat: Belgilar → Baholash → Birinchi yordam → Brigada harakati → Transport → Hujjatlashtirish.
 * Matnda **qalin** yozish mumkin. Dori nomlari keltirilgan, ammo DOZALAR ko'rsatilmagan:
 * dozalar amaldagi klinik protokol / SSV buyrug'iga ko'ra "Dorilar" bo'limida kiritiladi.
 *
 * Yangi mavzu qo'shish: massivga yangi obyekt qo'shing (slug — noyob, lotin harflarida).
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

TTY.data.STEPS = [
  { key: "belgilar",  label: "Dastlabki tekshiruv", title: "Belgilar" },
  { key: "baholash",  label: "Xavfsizlik va tahlil", title: "Baholash" },
  { key: "birinchi",  label: "Birinchi yordam",      title: "Birinchi yordam" },
  { key: "brigada",   label: "Brigada harakati",     title: "Brigada harakati" },
  { key: "transport", label: "Evakuatsiya",          title: "Transport" },
  { key: "hujjat",    label: "Yuridik va axborot",   title: "Hujjatlashtirish" }
];

TTY.data.topics = [
  /* ───────────────────────── 1. YURAK ───────────────────────── */
  {
    slug: "yurak",
    shield: "yurak",
    tone: "heart",
    icon: "cardiology",
    title: "Yurak to'xtashi",
    subtitle: "Cardiac arrest · CPR · AED",
    badges: [{ t: "Kod: qizil", c: "red" }, { t: "BLS / ACLS", c: "" }],
    lead: "Kattalarda bazaviy va ixtisoslashtirilgan reanimatsiya: yurak to'xtashini aniqlash, sifatli kompressiya, defibrillyatsiya va brigada harakati.",
    facts: [
      { l: "Oltin vaqt", v: "0–4 daqiqa", red: true },
      { l: "Nisbat", v: "30:2" },
      { l: "Kompressiya", v: "5–6 sm · 100–120/daq" }
    ],
    critical: {
      title: "Diqqat! Kritik qoida",
      text: "Agar bemor hushsiz va normal nafas olmayotgan bo'lsa (yoki faqat agonal xirillash — gasping), tomir urishini tekshirishga **10 soniyadan ortiq vaqt sarflamang**. Darhol 103 ga xabar bering va kompressiyani boshlang. Defibrillyatsiya kechiktirilgan har daqiqada omon qolish ehtimoli taxminan 7–10% ga kamayadi."
    },
    steps: {
      belgilar: [
        "**Hushning yo'qolishi:** bemor chaqiruvga, yelkadan silkitishga va og'riq qo'zg'atuvchiga javob bermaydi.",
        "**Normal nafas yo'q:** nafas umuman yo'q yoki faqat siyrak, xirillovchi (agonal) nafas — bu yurak to'xtashining belgisi, nafas deb hisoblanmaydi.",
        "**Uyqu arteriyasida puls yo'q:** tomir urishini 10 soniyadan ko'p izlamang; shubha bo'lsa — puls yo'q deb qabul qiling.",
        "**Teri:** oqargan yoki ko'kimtir (sianoz), sovuq; qorachiqlar keyinchalik kengayadi."
      ],
      baholash: [
        "**Xavfsizlik:** hodisa joyi xavfsizmi (elektr toki, gaz, transport, qulash xavfi)? Avval o'zingizni va jamoani himoya qiling.",
        "**Xush va nafas:** ovoz bilan chaqiring, yelkadan silkiting; bosh orqaga – iyak yuqoriga usuli bilan nafas yo'lini oching va 10 soniya davomida ko'ring – eshiting – his qiling.",
        "**Kontekst:** yoshi, yiqilish vaqti, guvohlar CPR qilganmi, AED ishlatilganmi, oldingi kasalliklar.",
        "**Qaytariladigan sabablar (4G / 4T):** gipoksiya, gipovolemiya, gipo-/giperkaliemiya (elektrolit va metabolik buzilish), gipo-/gipertermiya; tromboz (o'pka arteriyasi yoki koronar), tamponada, toksinlar, taranglashgan pnevmotoraks."
      ],
      birinchi: [
        "**Kompressiya:** ko'krak suyagining pastki yarmiga, chuqurligi **5–6 sm**, chastotasi **100–120/daq**; har bosishdan so'ng ko'krak to'liq yozilsin.",
        "**Nisbat 30:2:** 30 ta kompressiya, so'ng 2 ta puflash (har biri ~1 soniya). Pauzalar imkon qadar qisqa bo'lsin (10 soniyadan oshmasin).",
        "**AED:** qurilmani imkon qadar tezroq ulang va ovozli ko'rsatmalarga amal qiling; tahlil vaqtida bemorga hech kim tegmasin. Razryaddan so'ng darhol kompressiyani davom ettiring.",
        "**Har 2 daqiqada** ritmni qayta baholang va kompressiya qiluvchini almashtiring — charchoq sifatni pasaytiradi."
      ],
      brigada: [
        "**Rollar oldindan taqsimlanadi:** kompressiya; nafas yo'li va BVM; monitor/defibrillyator; tomir yo'li va dorilar; vaqtni qayd qiluvchi.",
        "**Ritmni aniqlang:** shokka yaroqli (qorinchalar fibrillyatsiyasi, pulssiz VT) yoki shokka yaroqsiz (asistoliya, PEA).",
        "**Shokka yaroqli ritm:** darhol defibrillyatsiya, so'ng 2 daqiqa CPR; dorilar va dozalar amaldagi protokol bo'yicha (adrenalin, amiodaron — «Dorilar» bo'limiga qarang).",
        "**Shokka yaroqsiz ritm:** sifatli CPR, tomir yo'li, adrenalin protokol bo'yicha va qaytariladigan sabablarni qidirib bartaraf etish.",
        "**Nafas yo'li:** avval BVM va kislorod; ilg'or nafas yo'li (intubatsiya yoki supraglottik) — kompressiyani uzmasdan, faqat malakali xodim tomonidan."
      ],
      transport: [
        "**ROSC (qon aylanishi tiklangach):** ABCDE, SpO₂ 94–98%, 12 tarmoqli EKG, qon bosimi va glyukoza.",
        "**Yo'nalish:** kardiologik reanimatsiya va koronar tashxis imkoniyati bor shifoxonaga, oldindan xabar berib.",
        "**Yo'lda:** doimiy monitoring, kamida bitta ishonchli tomir yo'li; qayta to'xtashga tayyor turing, defibrillyator qo'l ostida.",
        "**CPR davomida tashish:** faqat protokol talab qilganda yoki mexanik kompressor bo'lsa; sifat pasaymasligi shart."
      ],
      hujjat: [
        "**Vaqtlar:** yurak to'xtashi (guvohli/guvohsiz), CPR boshlangan, birinchi razryad, ROSC vaqti.",
        "**Ritm va davo:** har bir ritm o'zgarishi, razryadlar soni va energiyasi, berilgan dorilar (nomi, dozasi, vaqti).",
        "**Guvohlar:** guvoh CPR qilganmi, AED ishlatilganmi va qancha vaqtdan keyin.",
        "**Topshirish:** qabul qiluvchi shifoxonaga qisqa va tartibli xabar (yosh, sabab, davo, holat) va hujjatlarni topshirish."
      ]
    },
    public: {
      title: "Tez yordam kelguncha nima qilish kerak?",
      intro: "Odam hushsiz va normal nafas olmayotgan bo'lsa — yurak to'xtagan deb hisoblang. Har soniya muhim.",
      steps: [
        { t: "Xavfsizlikni tekshiring", d: "Atrofingiz xavfsizligiga ishonch hosil qiling." },
        { t: "Chaqiring va tekshiring", d: "Yelkadan silkitib baland ovozda chaqiring. Javob bermasa va normal nafas olmasa — yurak to'xtagan." },
        { t: "103 ga qo'ng'iroq qiling", d: "Telefonni karnay (speaker) rejimiga qo'ying — dispetcher siz bilan gaplashib yo'l-yo'riq beradi. Atrofdagilardan AED keltirishni so'rang." },
        { t: "Ko'krak qafasi o'rtasini bosing", d: "Bir kaftni ko'krak suyagining pastki yarmiga, ikkinchisini ustiga qo'ying. Qo'llar tik, chuqurlik 5–6 sm, tezlik — soniyasiga ~2 marta." },
        { t: "AED kelsa, yoqing", d: "Qurilma ovozli ko'rsatma beradi. Elektrodlarni rasmga qarab yopishtiring." },
        { t: "To'xtamang", d: "Tez yordam kelguncha, AED ko'rsatmasi bo'lguncha yoki bemor nafas ola boshlaguncha davom eting." }
      ],
      dont: [
        "Tomir urishini uzoq izlab vaqt yo'qotmang.",
        "Bemorni o'tqizmang, suv yoki dori ichirmang.",
        "Charchasangiz ham to'xtamang — imkon bo'lsa, har 2 daqiqada boshqa odam bilan almashing."
      ]
    },
    drugs: ["adrenalin", "amiodaron", "atropin"],
    equipment: ["defibrillyator", "bvm", "kislorod", "ekg-monitor"],
    quiz: "yurak"
  },

  /* ───────────────────────── 2. NAFAS ───────────────────────── */
  {
    slug: "nafas",
    shield: "nafas",
    tone: "breath",
    icon: "pulmonology",
    title: "Nafas yetishmovchiligi",
    subtitle: "Nafasni baholash · SpO₂ · kislorod · BVM",
    badges: [{ t: "Shoshilinch", c: "amber" }, { t: "ABCDE", c: "" }],
    lead: "Nafas holatini tez baholash, kislorod terapiyasi va sun'iy ventilyatsiyaga o'tish vaqtini aniqlash.",
    facts: [
      { l: "Kattalarda nafas", v: "12–20/daq" },
      { l: "SpO₂ maqsadi", v: "94–98%" },
      { l: "KOAB da", v: "88–92%" }
    ],
    critical: {
      title: "Diqqat! Xavf belgilari",
      text: "Bemor **gapira olmasa**, lablari ko'karsa (sianoz), xushi chalg'isa yoki nafas harakatlari zaiflashsa — bu hayot uchun xavfli. Kislorod va ventilyatsiya yordamini kechiktirmang."
    },
    steps: {
      belgilar: [
        "**Nafas olish:** tezlashgan (kattalarda > 20/daq) yoki sekinlashgan, yuzaki; yordamchi mushaklar ishlaydi, burun qanotlari kengayadi, qovurg'alar orasi tortiladi.",
        "**Gapirish:** to'liq gap aytolmaydi, bir-ikki so'zdan keyin to'xtaydi — og'ir yetishmovchilik belgisi.",
        "**Rang va xush:** lab va tirnoq ko'karishi, bezovtalik yoki uyquchanlik — gipoksiya yoki gipoventilyatsiya.",
        "**Nafas tovushlari:** vizillash (bronxospazm), stridor (yuqori yo'l to'sig'i), ho'l xirillashlar (o'pka shishi)."
      ],
      baholash: [
        "**A — nafas yo'li:** ochiqmi? Begona jism, til tushishi, qon, qusuq yoki shish borligini tekshiring.",
        "**B — nafas mexanikasi:** chastota, chuqurlik, ko'krak harakati simmetriyasi; auskultatsiya (ikki o'pka).",
        "**SpO₂ va monitoring:** pulsoksimetriya (qo'l sovuq yoki nam bo'lsa ishonchsiz), puls, qon bosimi; iloji bo'lsa kapnografiya.",
        "**Sabab:** astma / KOAB, o'pka shishi, pnevmoniya, anafilaksiya, pnevmotoraks, o'pka emboliyasi, zaharlanish. Allergiya, dorilar va inhalyator haqida so'rang."
      ],
      birinchi: [
        "**Qulay holat:** ongi joyida bemorni yarim o'tirgan (Fauler) holatda qo'ying, siqib turgan kiyimni bo'shating.",
        "**Nafas yo'lini oching:** bosh orqaga – iyak yuqoriga (jarohat shubhasida — jag'ni oldinga surish); begona jismni olib tashlang yoki aspirator ishlating.",
        "**Kislorod:** boshida yuqori oqimli kislorod (niqob), so'ng SpO₂ ga qarab sozlang (odatda 94–98%, surunkali o'pka kasalligida 88–92%).",
        "**Ventilyatsiya:** nafas yetarli bo'lmasa yoki to'xtasa — BVM + kislorod, kattalarda ~10 ta nafas/daq."
      ],
      brigada: [
        "**Sababga qarab davo:** bronxospazmda bronxodilatator (masalan, salbutamol), anafilaksiyada adrenalin, o'pka shishida protokol bo'yicha davo. Dozalar amaldagi protokol bo'yicha.",
        "**Nafas yo'li vositalari:** aspirator, orofaringeal/nazofaringeal yo'l; ilg'or nafas yo'liga tayyorgarlik.",
        "**Kuzatuv:** SpO₂, EKG, nafas chastotasi va xushni takror baholang — yomonlashish belgilarini erta ushlang.",
        "**Taranglashgan pnevmotoraks** belgilari (birdan yomonlashish, bir tomonlama nafas yo'qligi, bosim tushishi) bo'lsa — zudlik bilan dekompressiya (malakali xodim, protokol bo'yicha)."
      ],
      transport: [
        "**Yo'nalish:** reanimatsiya yoki ixtisoslashgan bo'limga; oldindan xabar bering.",
        "**Holat:** yarim o'tirgan; kislorod uzilmasin, ballon zaxirasini tekshiring.",
        "**Yo'lda:** SpO₂ va nafas chastotasini kuzating; nafas to'xtashiga tayyor turing (BVM va aspirator qo'l ostida).",
        "**Tinchlantiring:** vahima nafas yetishmovchiligini kuchaytiradi."
      ],
      hujjat: [
        "**Boshlang'ich holat:** nafas chastotasi, SpO₂ (havoda va kislorod bilan), auskultatsiya, xush.",
        "**Muolajalar:** kislorod usuli va oqimi, berilgan dorilar (nomi, dozasi, vaqti) va javob.",
        "**Dinamika:** yo'lda SpO₂ va nafas chastotasi o'zgarishi; ilg'or nafas yo'li bo'lsa uning tafsilotlari.",
        "**Topshirish:** yosh, asosiy shikoyat, davo va javob haqida qisqa hisobot."
      ]
    },
    public: {
      title: "Nafasi qiyinlashgan odamga yordam",
      intro: "Gapira olmayotgan, lablari ko'kargan yoki bo'g'ilayotgan odam uchun darhol 103 ga qo'ng'iroq qiling.",
      steps: [
        { t: "Qulay holatga keltiring", d: "Bemorni o'tirg'izing (yarim o'tirgan holatda), tor kiyimini bo'shating, derazani oching." },
        { t: "103 ga qo'ng'iroq qiling", d: "«Nafasi qiyin, gapira olmayapti, lablari ko'k» deb ayting." },
        { t: "Inhalyatorga yordam bering", d: "Astma inhalyatori bo'lsa, shifokor ko'rsatgandek foydalanishiga yordam bering." },
        { t: "Tomoqqa biror narsa tiqilgan bo'lsa", d: "Yo'talolmasa va gapira olmasa: kurak suyaklari orasiga 5 marta kuchli urish, keyin 5 marta qorin turtkisi (Geymlix). Almashtirib davom eting." },
        { t: "Hushidan ketsa", d: "Yotqizing, nafasini tekshiring. Nafas bo'lmasa — yurak-o'pka reanimatsiyasini boshlang («Yurak to'xtashi» mavzusi)." }
      ],
      dont: [
        "Nafasi qiyin, hushi joyida bemorni yotqizib qo'ymang — nafasi yomonlashadi.",
        "Ichirish yoki dori berishga majburlamang.",
        "Bemorni yolg'iz qoldirmang."
      ]
    },
    drugs: ["salbutamol", "adrenalin", "deksametazon", "furosemid"],
    equipment: ["kislorod", "bvm", "aspirator", "pulsoksimetr"],
    quiz: "nafas"
  },

  /* ───────────────────────── 3. INSULT ───────────────────────── */
  {
    slug: "insult",
    shield: "miya",
    tone: "brain",
    icon: "neurology",
    title: "Insult",
    subtitle: "Miya qon aylanishining o'tkir buzilishi · FAST",
    badges: [{ t: "Insult-kod", c: "red" }, { t: "FAST", c: "" }],
    lead: "Insult belgilarini tez aniqlash, belgilar boshlangan vaqtni qayd qilish va insult markaziga shoshilinch transport.",
    facts: [
      { l: "Oltin vaqt", v: "≈ 4,5 soatgacha", red: true },
      { l: "Tekshiruv", v: "FAST / BE-FAST" },
      { l: "Qon glyukozasi", v: "Har doim" }
    ],
    critical: {
      title: "Diqqat! Vaqt — miya",
      text: "Belgilar boshlangan (yoki bemor oxirgi marta sog' ko'ringan) vaqtni **aniq yozing**: davo tanlovi shu vaqtga bog'liq. Og'iz orqali hech narsa bermang va qon bosimini o'zboshimchalik bilan tushirmang."
    },
    steps: {
      belgilar: [
        "**F (Face) — yuz:** tabassum qilganda bir tomon osilib qoladi yoki qiyshayadi.",
        "**A (Arm) — qo'l:** ikkala qo'lni ko'targanda bittasi pastga tushadi yoki ko'tarilmaydi.",
        "**S (Speech) — nutq:** so'zlar chalkash, noaniq yoki bemor gapira/tushunolmaydi.",
        "**T (Time) — vaqt:** belgilar boshlangan vaqtni aniqlang va darhol 103 ga xabar bering.",
        "**Qo'shimcha (BE-FAST):** to'satdan muvozanat buzilishi, ko'rishning yo'qolishi yoki ikkilanishi, kuchli bosh og'rig'i."
      ],
      baholash: [
        "**ABCDE va hayotiy funksiyalar:** nafas yo'li, SpO₂, qon bosimi, puls (aritmiya — masalan, bo'lmachalar fibrillyatsiyasi borligiga e'tibor bering).",
        "**Qon glyukozasi:** har doim tekshiring — gipoglikemiya insultga o'xshash belgilar berishi mumkin.",
        "**Nevrologik shkala:** Sinsinnati (CPSS) yoki FAST + Glazgo koma shkalasi; qorachiqlar va qo'l-oyoq kuchini solishtiring.",
        "**Anamnez:** belgilar boshlanish vaqti, antikoagulyantlar, oldingi insult, yaqinda jarohat yoki operatsiya, qandli diabet."
      ],
      birinchi: [
        "**Holat:** ongi joyida bo'lsa — boshi biroz ko'tarilgan; ongi buzilgan bo'lsa — tiklovchi (yon) holat, nafas yo'li ochiq.",
        "**Kislorod:** faqat gipoksiya bo'lsa (SpO₂ < 94%) bering; me'yoriy SpO₂ da ortiqcha kislorod kerak emas.",
        "**Og'iz orqali hech narsa bermang:** yutish buzilgan bo'lishi mumkin — ovqat, suv va dori (aspirin ham) berilmaydi.",
        "**Bosimni keskin tushirmang:** insultda qon bosimini pasaytirish faqat protokol bo'yicha qilinadi."
      ],
      brigada: [
        "**Tomir yo'li va monitoring:** tomir yo'li, EKG, SpO₂, glyukoza; gipoglikemiya bo'lsa protokol bo'yicha to'g'rilang.",
        "**Talvasa bo'lsa:** yon holat, nafas yo'li himoyasi, talvasaga qarshi davo protokol bo'yicha.",
        "**Oldindan ogohlantirish:** insult markaziga oldindan xabar bering (yosh, belgilar, vaqt, bosim, glyukoza) — shifoxona tayyor kutib olsin.",
        "**Vaqtni tejang:** joyida uzoq muolaja qilmang — asosiy vazifa tezkor transport."
      ],
      transport: [
        "**Yo'nalish:** KT/MRT va insultni faol davolash imkoniyati bor markazga (eng yaqin emas, eng mos shifoxonaga).",
        "**Holat:** boshi taxminan 30° ko'tarilgan; silkinishsiz haydash.",
        "**Yo'lda:** xush, nutq, qo'l-oyoq kuchi, qon bosimi va SpO₂ ni kuzating; qusish xavfi bo'lsa aspirator tayyor.",
        "**Guvoh:** belgilar boshlangan vaqtni bilgan odam yoki uning telefon raqamini oling."
      ],
      hujjat: [
        "**Vaqtlar:** belgilar boshlanishi (yoki oxirgi sog' vaqt), chaqiruv, yetib borish, topshirish.",
        "**Shkalalar:** FAST/CPSS natijasi, Glazgo shkalasi, glyukoza, bosim, SpO₂.",
        "**Dorilar va kasalliklar:** antikoagulyant / antiagregantlar, qandli diabet, oldingi insult, allergiya.",
        "**Oldindan xabar:** insult markaziga qachon va kim orqali xabar berilgani."
      ]
    },
    public: {
      title: "Insult shubhasida nima qilish kerak?",
      intro: "To'satdan yuz qiyshayishi, qo'l zaifligi yoki nutq buzilishi — bu insult belgisi bo'lishi mumkin. «O'tib ketar» deb kutmang.",
      steps: [
        { t: "FAST testini o'tkazing", d: "Yuz — tabassum qilsin. Qo'l — ikkala qo'lni ko'tarsin. Nutq — oddiy gapni takrorlasin." },
        { t: "Darhol 103 ga qo'ng'iroq qiling", d: "«Insult shubhasi» deb ayting va belgilar boshlangan aniq vaqtni ayting." },
        { t: "Qulay holatga keltiring", d: "Boshi biroz ko'tarilgan holda yotqizing yoki o'tirg'izing; tor kiyimni bo'shating." },
        { t: "Hech narsa ichirmang", d: "Suv, ovqat va dori (ayniqsa aspirin va bosim dorisi) bermang — buni shifokor hal qiladi." },
        { t: "Yolg'iz qoldirmang", d: "Holatini kuzating; hushidan ketsa — yon tomonga yotqizib, nafasini tekshiring." }
      ],
      dont: [
        "Uxlashga yotqizmang va «o'zi o'tib ketadi» deb kutmang.",
        "Mashinada o'zingiz olib borish uchun vaqt yo'qotmang — tez yordam yo'lda yordam boshlaydi va shifoxonani ogohlantiradi.",
        "Bosim yoki boshqa dori tabletkalarini berib yubormang."
      ]
    },
    drugs: ["diazepam"],
    equipment: ["pulsoksimetr", "ekg-monitor", "aspirator"],
    quiz: "insult"
  },

  /* ───────────────────────── 4. AKUSHERLIK ───────────────────────── */
  {
    slug: "akusherlik",
    shield: "onalar",
    tone: "mother",
    icon: "pregnant_woman",
    title: "Akusherlik shoshilinch holatlari",
    subtitle: "Tug'ruq · preeklampsiya · eklampsiya · tug'ruqdan keyingi qon ketish",
    badges: [{ t: "Ikki bemor", c: "red" }, { t: "Akusherlik", c: "" }],
    lead: "Homilador va tug'ayotgan ayollarda hayot uchun xavfli holatlar: birinchi yordam, brigada harakati va yangi tug'ilgan chaqaloqqa dastlabki parvarish.",
    facts: [
      { l: "Gipertenziya chegarasi", v: "≥ 140/90", red: true },
      { l: "Transport holati", v: "Chap yonboshda" },
      { l: "Chaqaloq", v: "Quriting · isiting" }
    ],
    critical: {
      title: "Diqqat! Ikki bemor",
      text: "Homilador yoki tug'ruqdan keyingi ayolda **kuchli qon ketish, talvasa yoki og'ir bosh og'rig'i bilan yuqori bosim** — hayot uchun xavfli holat. Avval onani barqarorlashtiring — chaqaloqning omon qolishi ham shunga bog'liq."
    },
    steps: {
      belgilar: [
        "**Tug'ruq boshlanishi:** muntazam va kuchayib boruvchi to'lg'oqlar, suv ketishi, bosim va itarish istagi, bola boshining ko'rinishi.",
        "**Preeklampsiya:** homiladorlikning 20-haftasidan keyin qon bosimi ≥ 140/90, kuchli bosh og'rig'i, ko'z oldi xiralashishi, qorin yuqorisida og'riq, shishlar.",
        "**Eklampsiya:** preeklampsiya fonida talvasa (tutqanoq xurujiga o'xshash) va xush yo'qolishi.",
        "**Tug'ruqdan keyingi qon ketish:** kuchli yoki to'xtamaydigan qon ketish, bachadon yumshoq va katta, shok belgilari (tez puls, oqarish, bosim tushishi)."
      ],
      baholash: [
        "**Anamnez:** homiladorlik muddati, nechanchi tug'ruq, ko'p homilalilik, oldingi asoratlar, bosh og'rig'i va qon ketish.",
        "**Hayotiy ko'rsatkichlar:** qon bosimi, puls, nafas, SpO₂, xush. Qon yo'qotish ko'pincha kam baholanadi — ehtiyot bo'ling.",
        "**Tug'ruq bosqichi:** to'lg'oqlar oralig'i, itarish istagi, bola boshi ko'rinishi. Tug'ruq yaqin bo'lsa — joyida qabul qilishga tayyorlaning.",
        "**Xavf belgilari:** homila harakati yo'qligi, kindik ilmog'i yoki oyoqcha ko'rinishi, qorin travmasi, og'riqli qon ketish (platsenta ajralishi)."
      ],
      birinchi: [
        "**Holat:** homilador ayolni **chap yonboshga** yotqizing (pastki kavak vena bosilmasin); talvasada ham shu holat.",
        "**Tug'ruq qabul qilish:** toza sharoit va materiallar; boshni nazorat bilan, sekin chiqarish; chaqaloqni quriting, teri-teriga isiting, og'iz-burunni faqat kerak bo'lsa tozalang.",
        "**Eklampsiya:** talvasa paytida jarohatdan himoya qiling, nafas yo'lini saqlang. Talvasaga qarshi va bosim davosi (masalan, magniy preparati) — faqat protokol bo'yicha.",
        "**Qon ketishi:** bachadon massaji (pastki qorindan aylanma harakat), tomir yo'li va suyuqlik; bachadon qisqartiruvchi va boshqa dorilar — protokol bo'yicha; ayolni isiting."
      ],
      brigada: [
        "**Ikki bemor rejasi:** ona va chaqaloq uchun alohida mas'ul; kerak bo'lsa qo'shimcha brigada chaqiring.",
        "**Yangi tug'ilgan chaqaloq:** quriting, isiting, nafas va yurak urishini baholang; nafas bo'lmasa protokol bo'yicha ventilyatsiya; Apgar shkalasi 1 va 5 daqiqada.",
        "**Platsenta:** kindikdan tortmang; kindikni qisish va kesish vaqti va usuli protokol bo'yicha; ajralgan platsentani shifoxonaga olib boring.",
        "**Monitoring va tomir yo'li:** ona uchun katta kalibrli tomir yo'li, bosim, puls, SpO₂; qon ketishida tezkor infuziya va dori protokol bo'yicha."
      ],
      transport: [
        "**Yo'nalish:** akusherlik-ginekologik yoki perinatal markazga (reanimatsiya imkoniyati bilan); oldindan xabar bering.",
        "**Holat:** chap yonboshda, kislorod, isitish (shok bo'lsa — protokol bo'yicha holat).",
        "**Yo'lda:** talvasa qaytishi, qon ketishi va bosimni kuzating; chaqaloq onasi bilan (isitilgan holda) yoki ishonchli mahkamlangan.",
        "**Tug'ruq yaqin bo'lsa:** yo'lga chiqmasdan avval tug'ruqni qabul qilish yoki to'xtab tug'ruqqa tayyorlanish — protokol bo'yicha."
      ],
      hujjat: [
        "**Vaqtlar:** tug'ruq vaqti (chaqaloq va platsenta), talvasa vaqti va davomiyligi, muolajalar vaqti.",
        "**Ona:** bosim va puls dinamikasi, taxminiy qon yo'qotish hajmi, berilgan dorilar (nomi, dozasi, vaqti).",
        "**Chaqaloq:** jinsi, vazni (o'lchangan bo'lsa), Apgar, ko'rsatilgan yordam.",
        "**Topshirish:** akusher-ginekolog va neonatologga qisqa va aniq hisobot."
      ]
    },
    public: {
      title: "Homilador ayolga tez yordam kelguncha",
      intro: "Homilador ayolda qon ketishi, talvasa, kuchli bosh og'rig'i yoki tug'ruq boshlanishi — darhol 103 ga qo'ng'iroq qiling.",
      steps: [
        { t: "103 ga qo'ng'iroq qiling", d: "Homiladorlik muddati, qon ketishi, talvasa yoki to'lg'oqlar haqida ayting." },
        { t: "Chap yonboshga yotqizing", d: "Orqasiga yostiq qo'ying. Talvasa bo'lsa ushlab turmang — atrofdagi xavfli narsalarni olib tashlang." },
        { t: "Tug'ruq boshlanib qolsa", d: "Chaqaloqni tortmang; boshi chiqqanda faqat sekin qo'l bilan ushlab turing. Toza mato va iliq joy tayyorlang. Tug'ilgach quriting va onaning ko'kragiga qo'yib, ustini yoping." },
        { t: "Tug'ruqdan keyin qon ketsa", d: "Pastki qorinni aylanma harakat bilan massaj qiling, ayolni isiting." },
        { t: "Kindikni o'zingiz kesmang", d: "Uni tez yordam xodimi kesadi — kutish mumkin." }
      ],
      dont: [
        "Ayolni yolg'iz qoldirmang.",
        "Talvasa paytida og'ziga narsa solmang va ichirmang.",
        "Kindik yoki platsentadan tortmang."
      ]
    },
    drugs: ["diazepam"],
    equipment: ["kislorod", "pulsoksimetr", "dori-sumkasi"],
    quiz: "akusherlik"
  },

  /* ───────────────────────── 5. SHOK ───────────────────────── */
  {
    slug: "shok",
    shield: "hayot",
    tone: "life",
    icon: "health_and_safety",
    title: "Shok va anafilaksiya",
    subtitle: "Gipovolemik · anafilaktik · kardiogen · distributiv",
    badges: [{ t: "Hayot xavfi", c: "red" }, { t: "ABCDE", c: "" }],
    lead: "Shok turini aniqlash, tezkor birinchi yordam va sababga qarab davo. Anafilaksiyada birinchi tanlov — adrenalin.",
    facts: [
      { l: "Shok belgisi", v: "Bosim < 90 mm.sim.ust.", red: true },
      { l: "Shok indeksi", v: "YUCHS ÷ SB > 1" },
      { l: "Kapillyar to'lish", v: "> 2 soniya" }
    ],
    critical: {
      title: "Diqqat! Anafilaksiya",
      text: "Anafilaksiyada birinchi tanlov dori — **adrenalin mushak ichiga** (sonning old-tashqi yuzasi). Uni kechiktirish o'limga olib kelishi mumkin. Dozani amaldagi protokol bo'yicha qo'llang."
    },
    steps: {
      belgilar: [
        "**Umumiy belgilar:** past qon bosimi (sistolik < 90 mm sim.ust.), tez puls, tez nafas, sovuq va nam teri (distributiv shokda iliq bo'lishi mumkin), kapillyar to'lish > 2 soniya.",
        "**Xush holati:** bezovtalik, chalkashlik, uyquchanlik — miya qon ta'minoti buzilgan.",
        "**Siydik ajralishi kamayishi** — kech va muhim belgi.",
        "**Turga xos belgilar:** gipovolemik — qon ketish yoki suvsizlanish; anafilaktik — toshma, shish, nafas qiyinligi; kardiogen — o'pka shishi, bo'yin venalari to'lishi; septik — isitma va infeksiya manbai."
      ],
      baholash: [
        "**ABCDE va qon ketish manbai:** ko'rinadigan va yashirin (qorin, chanoq, son suyagi, ko'krak) qon yo'qotish.",
        "**Shok indeksi:** yurak urish chastotasi ÷ sistolik bosim; 1 dan yuqori bo'lsa jiddiy shok ehtimoli katta.",
        "**Turini aniqlash:** gipovolemik / anafilaktik / kardiogen / distributiv (septik, neyrogen) — davo shunga bog'liq.",
        "**Monitoring:** EKG, SpO₂, qon bosimi (takror), glyukoza; kardiogen shok shubhasida 12 tarmoqli EKG."
      ],
      birinchi: [
        "**Qon ketishini to'xtating:** to'g'ridan-to'g'ri bosim, qo'l-oyoqda turniket, chanoq bog'ichi; kislorod bering.",
        "**Holat:** gipovolemik va anafilaktik shokda — chalqancha, oyoqlar ko'tarilgan; nafas qiyin yoki o'pka shishi bo'lsa — yarim o'tirgan.",
        "**Anafilaksiya:** allergen manbaini to'xtating; **adrenalin mushak ichiga** (protokol bo'yicha); kislorod; tomir yo'li.",
        "**Isiting:** ustini yoping — gipotermiya shokni og'irlashtiradi."
      ],
      brigada: [
        "**Tomir yo'llari:** ikkita katta kalibrli periferik tomir (kerak bo'lsa suyak ichi yo'li); suyuqlik turga qarab.",
        "**Gipovolemik:** avval qon ketishini to'xtatish, so'ng ehtiyotkor infuziya (travmada — «permissiv gipotenziya» tamoyili, protokol bo'yicha).",
        "**Kardiogen:** suyuqlikni ko'p yubormang; o'pka shishi va aritmiya davosi protokol bo'yicha; STEMI bo'lsa — reperfuziya markaziga.",
        "**Distributiv:** septik shokda erta infuziya va antibiotik; neyrogen shokda protokol bo'yicha suyuqlik va vazopressor; anafilaksiyada takroriy adrenalin va infuziya."
      ],
      transport: [
        "**Yo'nalish:** reanimatsiya bo'limi, travma yoki kardiologik markaz — sababga qarab; oldindan xabar bering.",
        "**Tezlik:** shokda joyida uzoq turmang; muolajalarni yo'lda davom ettiring.",
        "**Yo'lda:** bosim va puls (har ~5 daqiqada), kislorod, isitish, tomir yo'li to'g'riligi.",
        "**Anafilaksiya:** bemor yaxshilangandek ko'rinsa ham kuzatuvsiz qoldirmang — ikkinchi to'lqin (bifazik reaksiya) bo'lishi mumkin."
      ],
      hujjat: [
        "**Vaqtlar:** boshlanish, allergen yoki qon ketish manbai, davo boshlangan vaqt.",
        "**Ko'rsatkichlar dinamikasi:** bosim, puls, SpO₂, xush, shok indeksi.",
        "**Muolajalar:** turniket qo'yilgan vaqt; adrenalin va boshqa dorilar (nomi, dozasi, yo'li, vaqti); infuziya hajmi.",
        "**Allergiya tarixi:** ma'lum allergiyalar va oldingi anafilaksiya."
      ]
    },
    public: {
      title: "Kuchli allergik reaksiya yoki shokda nima qilish kerak?",
      intro: "Toshma, yuz-lab shishi, nafas qiyinligi yoki kuchli qon ketishdan keyin rangi oqarib, hushi chalg'igan odam — hayot uchun xavfli holat.",
      steps: [
        { t: "103 ga qo'ng'iroq qiling", d: "«Kuchli allergik reaksiya» yoki «kuchli qon ketish, rangi oqargan» deb ayting." },
        { t: "Sababni to'xtating", d: "Allergen manbaini (ari nishi, ovqat, dori) chetlashtiring; kuchli qon ketsa jarohatni toza mato bilan bosing." },
        { t: "Bemorni yotqizing", d: "Oyoqlarini ko'taring. Nafasi qiyin bo'lsa — o'tirg'izing." },
        { t: "Avtoinyektor bo'lsa", d: "Bemorda adrenalin avtoinyektori bo'lsa, yo'riqnomaga ko'ra sonning tashqi yuzasiga qo'llashiga yordam bering." },
        { t: "Isiting va kuzating", d: "Ustini yoping; nafasi to'xtasa — reanimatsiya boshlang." }
      ],
      dont: [
        "Bemorni tik turg'izmang.",
        "Ichirmang va ovqat bermang.",
        "Yaxshilangandek ko'rinsa ham yolg'iz qoldirmang."
      ]
    },
    drugs: ["adrenalin", "deksametazon", "salbutamol", "furosemid"],
    equipment: ["kislorod", "turniket", "dori-sumkasi", "pulsoksimetr"],
    quiz: "shok"
  },

  /* ───────────────────────── 6. ZAHARLANISH ───────────────────────── */
  {
    slug: "zaharlanish",
    shield: null,
    tone: "tox",
    icon: "warning_amber",
    title: "Zaharlanish",
    subtitle: "Gazdan · dori vositalari · oziq-ovqat · noma'lum modda",
    badges: [{ t: "Toksikologiya", c: "amber" }, { t: "ABCDE", c: "" }],
    lead: "Zaharlanish turini tez aniqlash, xavfsizlik, nafas va xushni qo'llab-quvvatlash hamda antidot va ma'lumot to'plash.",
    facts: [
      { l: "Asosiy savollar", v: "Nima? Qancha? Qachon?" },
      { l: "Is gazida", v: "SpO₂ aldashi mumkin", red: true },
      { l: "Qusdirish", v: "Odatda mumkin emas" }
    ],
    critical: {
      title: "Diqqat! Avval xavfsizlik",
      text: "Gaz (is gazi), tutun yoki kimyoviy modda bo'lgan joyga **himoyasiz kirmang**. Bemorni toza havoga olib chiqing, so'ng ABCDE. Is gazi zaharlanishida pulsoksimetr noto'g'ri yuqori (me'yoriy) ko'rsatishi mumkin."
    },
    steps: {
      belgilar: [
        "**Gazdan (CO):** bosh og'rig'i, bosh aylanishi, ko'ngil aynishi, bo'shashish, keyin hushdan ketish; bir necha kishida bir vaqtda; isitish qurilmalari bo'lgan yopiq xona.",
        "**Dori vositalari:** uyquchanlik yoki qo'zg'alish, qorachiq o'zgarishi, nafas sekinlashishi, aritmiya, talvasa — dori turiga qarab.",
        "**Oziq-ovqat:** qayt qilish, qorin og'rig'i, ich ketishi, holsizlik; bir xil ovqat yegan bir necha kishida.",
        "**Noma'lum modda:** xushning sababsiz o'zgarishi, o'ziga xos hid, og'iz atrofida kuyishlar, yonida idish yoki dori qadoqlari."
      ],
      baholash: [
        "**Xavfsizlik:** manbani aniqlang (gaz, kimyoviy modda), shamollating, o'zingizni himoya qiling.",
        "**Asosiy savollar:** nima? qancha? qachon? qaysi yo'l bilan? tasodifiy yoki qasddanmi? Qadoq yoki idishni oling.",
        "**ABCDE va monitoring:** nafas yo'li, SpO₂, EKG, bosim, glyukoza, harorat, qorachiqlar.",
        "**Toksidrom:** belgilar majmuasi sababni topishga yordam beradi (masalan, opioid — nafas sustlashishi, tor qorachiq, uyquchanlik)."
      ],
      birinchi: [
        "**Manbadan uzoqlashtirish:** toza havo; teri yoki kiyimga kimyoviy modda tekkan bo'lsa — kiyimni yechib, terini ko'p suv bilan yuving.",
        "**Kislorod:** yuqori oqimli 100% kislorod (is gazida majburiy); nafas sekin yoki to'xtagan bo'lsa — BVM.",
        "**Qusdirmang:** ongi buzilgan bo'lsa yoki kislota, ishqor, neft mahsuloti ichilgan bo'lsa qusdirish taqiqlanadi; sorbent faqat protokolda ko'rsatilgan hollarda.",
        "**Qulay holat:** ongi buzilgan bo'lsa — yon (tiklovchi) holat, aspirator tayyor."
      ],
      brigada: [
        "**Tomir yo'li va monitoring:** EKG, SpO₂, glyukoza, bosim, harorat; talvasa, aritmiya va gipoglikemiyani davolash.",
        "**Antidotlar:** ma'lum sababga xos antidot (masalan, opioidga — naloksone) — protokol va dozalar bo'yicha.",
        "**Zaharni chiqarish:** oshqozon yuvish, sorbent va boshqa usullar — faqat ko'rsatma va sharoit bo'lsa.",
        "**Maslahat:** noma'lum modda bo'lsa toksikologiya markazi bilan bog'laning."
      ],
      transport: [
        "**Yo'nalish:** toksikologiya yoki reanimatsiya bo'limiga; is gazi zaharlanishida kislorod terapiyasi imkoniyatini hisobga oling.",
        "**Yo'lda:** nafas, xush, aritmiya va talvasani kuzating; qusish xavfida aspirator tayyor.",
        "**Namunalar:** qadoq, dori, qusuq namunasi yoki idishni shifoxonaga olib boring.",
        "**Bir necha zaharlangan:** hammasini baholang; ommaviy hodisada qo'shimcha brigada chaqiring."
      ],
      hujjat: [
        "**Modda haqida:** nomi, miqdori, qabul yo'li, taxminiy vaqti, tasodifiy yoki qasddan.",
        "**Holat:** dastlabki va keyingi ko'rsatkichlar, xush, qorachiqlar.",
        "**Muolajalar:** kislorod, antidot va dorilar (nomi, dozasi, vaqti), oshqozon yuvish.",
        "**Huquqiy tomon:** qasddan zaharlanish yoki ommaviy hodisa bo'lsa — belgilangan tartibda xabar bering."
      ]
    },
    public: {
      title: "Zaharlanishda nima qilish kerak?",
      intro: "Qanday modda, qancha va qachon qabul qilinganini aniqlash — davo uchun eng muhim ma'lumot.",
      steps: [
        { t: "Xavfsizlik", d: "Gaz hidi yoki tutun bo'lsa — o'zingiz kirmang: eshik-derazani oching, gaz yoki elektrni o'chiring, bemorni toza havoga chiqaring (faqat xavfsiz bo'lsa)." },
        { t: "103 ga qo'ng'iroq qiling", d: "Nima, qancha va qachon zaharlanganini ayting." },
        { t: "Ma'lumot to'plang", d: "Dori yoki kimyoviy modda qadog'ini saqlab qo'ying va tez yordamga bering." },
        { t: "Ongi joyida bo'lsa", d: "Qulay o'tirg'izing va kuzating. Dispetcher aytmasa, hech narsa ichirmang." },
        { t: "Hushsiz bo'lsa", d: "Yon holatga yotqizing, nafasini tekshiring; nafas yo'q bo'lsa — reanimatsiya boshlang." }
      ],
      dont: [
        "O'zboshimchalik bilan qusdirmang.",
        "Sut, ichimlik yoki «xalq usullari» bilan davolashga urinmang.",
        "Bemorni yolg'iz qoldirmang."
      ]
    },
    drugs: ["atropin", "diazepam"],
    equipment: ["kislorod", "aspirator", "bvm", "ekg-monitor"],
    quiz: "zaharlanish"
  },

  /* ───────────────────────── 7. BOLA ───────────────────────── */
  {
    slug: "bola",
    shield: "bola",
    tone: "child",
    icon: "child_care",
    title: "Bolalardagi favqulodda holatlar",
    subtitle: "Bolalar reanimatsiyasi · begona jism · isitma talvasasi",
    badges: [{ t: "Pediatriya", c: "amber" }, { t: "PALS", c: "" }],
    lead: "Bolalarda baholash, nafas yo'li, reanimatsiya va dorilarni vaznga qarab hisoblash xususiyatlari.",
    facts: [
      { l: "Baholash", v: "PAT — 3 belgi" },
      { l: "Kompressiya chuqurligi", v: "Ko'krak 1/3 qismi" },
      { l: "Chaqaloqda begona jism", v: "5 urish + 5 turtki" }
    ],
    critical: {
      title: "Diqqat! Nafas va perfuziya",
      text: "Bolalarda yurak to'xtashi ko'pincha **nafas yetishmovchiligi yoki shokdan keyin** yuzaga keladi — nafas va qon aylanishiga birinchi navbatda e'tibor bering. Dorilar dozasi vazn va yoshga qarab hisoblanadi — hisobni tekshiring."
    },
    steps: {
      belgilar: [
        "**Nafas:** juda tez yoki juda sekin, burun qanotlari kengayishi, qovurg'alararo tortilish, ingrash, stridor.",
        "**Rang va perfuziya:** oqarish, dog'li teri, sianoz, kapillyar to'lish > 2 soniya, sovuq qo'l-oyoqlar.",
        "**Xush va faollik:** befarqlik, uyquchanlik, tasalli topmaydigan yig'i; chaqaloqda emishni rad etish.",
        "**Isitma va talvasa:** yuqori harorat fonida qisqa talvasa ko'pincha isitma talvasasi bo'ladi; 5 daqiqadan uzoq davom etsa — favqulodda holat."
      ],
      baholash: [
        "**Pediatrik baholash uchburchagi (PAT):** tashqi ko'rinish (xush, ohang, yig'i), nafas mexanikasi, teri rangi va qon aylanishi — 30 soniyada.",
        "**Yoshga xos ko'rsatkichlar:** nafas va puls me'yori yoshga qarab farq qiladi; yoshga mos manjetka va jihozlar tanlang.",
        "**Vazn va yosh:** dori va asboblar uchun vaznni aniqlang (o'lchang yoki formula/lenta yordamida).",
        "**Glyukoza va harorat:** bolalarda gipoglikemiya va gipotermiya tez rivojlanadi — tekshiring."
      ],
      birinchi: [
        "**Nafas yo'li:** chaqaloqda bosh neytral holatda, katta bolada biroz orqaga. Begona jism shubhasida: avval yo'tal; **1 yoshgacha** — 5 orqaga urish + 5 ko'krak turtkisi; **1 yoshdan katta** — 5 orqaga urish + 5 qorin turtkisi.",
        "**Kislorod va ventilyatsiya:** yoshga mos niqob va BVM; nafas yetarli bo'lmasa yordam bering.",
        "**Reanimatsiya:** nafas yo'q bo'lsa boshlang'ich puflashlar, so'ng kompressiya; chuqurlik ko'krak old-orqa o'lchamining ≈ 1/3 qismi, chastota 100–120/daq. Nisbat: ikki tibbiy xodim 15:2, yakka yordamchi 30:2 (protokol bo'yicha aniqlang).",
        "**Isitma talvasasi:** yon holat, atrofni xavfsiz qiling, vaqtni yozing; 5 daqiqadan oshsa talvasaga qarshi davo — protokol bo'yicha."
      ],
      brigada: [
        "**Pediatrik jihozlar:** yoshga mos niqoblar, BVM, orofaringeal yo'l, manjetkalar; vaznga mos to'plam (rangli tasma tizimi).",
        "**Tomir yo'li:** tomir topilmasa suyak ichi yo'lini ko'rib chiqing (protokol bo'yicha).",
        "**Dori va suyuqlik:** vaznga asoslangan hisob; ikkinchi xodim bilan dozani qayta tekshirish.",
        "**Ota-ona bilan muloqot:** aniq va xotirjam tushuntiring; bola yonida ota-ona bo'lsin — stress kamayadi."
      ],
      transport: [
        "**Yo'nalish:** bolalar reanimatsiyasi yoki pediatrik shoshilinch bo'limga; oldindan xabar bering.",
        "**Yo'lda:** ota-ona yonida; bolani isiting (ayniqsa chaqaloqni), SpO₂ va nafas chastotasini kuzating.",
        "**Xavfsizlik:** bola uchun mos mahkamlash; kislorod va aspirator qo'l ostida.",
        "**Tayyorgarlik:** yomonlashsa BVM va reanimatsiya to'plami tayyor tursin."
      ],
      hujjat: [
        "**Yosh va vazn:** aniq yosh (oy/yil), vazn (o'lchangan yoki taxminiy), allergiyalar.",
        "**Ko'rsatkichlar:** PAT, nafas, puls, SpO₂, bosim, glyukoza, harorat.",
        "**Muolajalar:** dorilar va dozalar (mg/kg va mg), vaqt va javob.",
        "**Ota-ona/vasiy:** aloqa ma'lumoti va xabardor qilinganligi."
      ]
    },
    public: {
      title: "Bola holati og'irlashsa nima qilish kerak?",
      intro: "Bolada nafas qiyinligi, hushdan ketish, talvasa yoki tomoqqa narsa tiqilishi — darhol 103 ga qo'ng'iroq qiling.",
      steps: [
        { t: "103 ga qo'ng'iroq qiling", d: "Bolaning yoshi, nima bo'lgani va holati (nafas oladimi, hushi joyidami) ni ayting." },
        { t: "Tomoqqa narsa tiqilgan bo'lsa", d: "1 yoshgacha: 5 marta yelka orasiga urish va 5 marta ko'krak bosish. Katta bolada: 5 marta urish va 5 marta qorin turtkisi (Geymlix)." },
        { t: "Talvasada", d: "Yon tomonga yotqizing, atrofdagi xavfli narsalarni olib tashlang, vaqtni belgilab boring. Og'ziga hech narsa solmang." },
        { t: "Nafas yo'q bo'lsa", d: "Nafas yo'lini oching, 5 marta puflang, so'ng ko'krak kompressiyasini boshlang (chaqaloqda ikki barmoq, katta bolada bir qo'l)." },
        { t: "Isiting va tinchlantiring", d: "Bolaning ustini yoping va yonida bo'ling." }
      ],
      dont: [
        "Isitmani tushirish uchun sovuq suvga solmang.",
        "Hushi yomon bolaga dori, ovqat yoki suv bermang.",
        "Chaqaloqni silkitmang."
      ]
    },
    drugs: ["salbutamol", "deksametazon", "diazepam"],
    equipment: ["bvm", "kislorod", "aspirator", "pulsoksimetr"],
    quiz: "bola"
  },

  /* ───────────────────────── 8. TRAVMA ───────────────────────── */
  {
    slug: "travma",
    shield: "travma",
    tone: "trauma",
    icon: "healing",
    title: "Travma va qon ketish",
    subtitle: "Jarohatlar · turniket · immobilizatsiya",
    badges: [{ t: "Politravma", c: "red" }, { t: "X-ABCDE", c: "" }],
    lead: "Massiv qon ketishni to'xtatish, umurtqani himoya qilish, immobilizatsiya va travma markaziga tezkor transport.",
    facts: [
      { l: "Birinchi navbat", v: "Massiv qon ketish", red: true },
      { l: "Turniket", v: "Vaqtni yozing" },
      { l: "Immobilizatsiya", v: "Bo'yin + umurtqa" }
    ],
    critical: {
      title: "Diqqat! Avval qon ketishi",
      text: "Massiv qon ketish — birinchi navbatdagi xavf: **avval qon ketishini to'xtating** (bosim, turniket), keyin nafas yo'li. Umurtqa jarohati shubhasida bosh va bo'ynini harakatlantirmang."
    },
    steps: {
      belgilar: [
        "**Massiv qon ketish:** oqib turgan yoki otilib chiqayotgan qon, kiyim to'liq shimilgan, qon ko'lmagi; teri oqargan va sovuq.",
        "**Umurtqa yoki bosh jarohati:** yiqilish yoki transport hodisasi; bo'yin og'rig'i, qo'l-oyoq sezgisi yoki harakati yo'qolishi, ongi buzilishi.",
        "**Ko'krak va qorin:** nafas qiyinligi, ko'krak harakati assimetriyasi, teri ostida havo, qorin taranglashishi va og'rig'i.",
        "**Suyak sinishi:** deformatsiya, g'ayritabiiy harakat, shish va og'riq; ochiq sinishda suyak ko'rinadi."
      ],
      baholash: [
        "**Xavfsizlik va mexanizm:** joy xavfsizmi, jarohat mexanizmi (balandlik, tezlik), jabrlanuvchilar soni (triaj).",
        "**Birinchi navbat (X-ABCDE):** massiv qon ketish → nafas yo'li (bo'yin himoyasi bilan) → nafas → qon aylanishi → nevrologik holat → ochib ko'rish va isitish.",
        "**Tez travma ko'rigi:** boshdan oyoqqacha — bosh, bo'yin, ko'krak, qorin, chanoq, oyoq-qo'llar, orqa (bosh-tana bir o'qda burib).",
        "**Shok belgilari:** puls, bosim, kapillyar to'lish; yashirin qon ketish joylari (ko'krak, qorin, chanoq, son)."
      ],
      birinchi: [
        "**Qon ketishini to'xtatish:** jarohatga to'g'ridan-to'g'ri qattiq bosim; to'xtamasa — **turniket** (jarohatdan taxminan 5–8 sm yuqoriga), vaqtini yozing; gemostatik bog'ich.",
        "**Nafas yo'li va bo'yin:** jag'ni oldinga surish, bo'yin yoqasi; to'silgan bo'lsa aspirator.",
        "**Ochiq ko'krak jarohati:** havo o'tkazmaydigan okklyuziv (ventilli) bog'ich.",
        "**Isitish:** ustini yoping — gipotermiya qon ivishini buzadi va o'limni oshiradi."
      ],
      brigada: [
        "**Immobilizatsiya:** bo'yin yoqasi, vakuum matras yoki spinal taxta, oyoq-qo'l shinalari; ko'chirishni bir vaqtda, kelishilgan holda bajaring.",
        "**Tomir yo'li va suyuqlik:** qon ketishi nazoratga olinguncha ehtiyotkor infuziya — protokol bo'yicha.",
        "**Og'riqsizlantirish:** protokol bo'yicha; nafas va bosimni kuzatib.",
        "**Taranglashgan pnevmotoraks yoki tamponada** shubhasida — dekompressiya va tezkor transport (protokol bo'yicha)."
      ],
      transport: [
        "**«Oltin soat»:** og'ir travmada jarohatdan jarrohlik yordamigacha vaqt imkon qadar qisqa bo'lsin; joyda vaqtni cho'zmang.",
        "**Yo'nalish:** travma markaziga (jarrohlik imkoniyati bilan); oldindan xabar bering (ATMIST).",
        "**Yo'lda:** qon ketishi qayta ochilmaganini, bosim, puls va SpO₂ ni kuzating; isitish.",
        "**Bosh va bo'yin himoyasi:** transport paytida ham mahkam mahkamlangan bo'lsin."
      ],
      hujjat: [
        "**Mexanizm va vaqt:** jarohat mexanizmi, jarohat vaqti, chaqiruv va topshirish vaqti.",
        "**Turniket:** qo'yilgan aniq vaqt va joyi — bemorga yoki kartaga yozib qo'ying (juda muhim).",
        "**Ko'rsatkichlar va muolajalar:** bosim, puls, SpO₂, Glazgo shkalasi; immobilizatsiya turi, bog'ichlar, dorilar.",
        "**Topshirish (ATMIST):** yosh, vaqt, mexanizm, jarohatlar, belgilar, davo."
      ]
    },
    public: {
      title: "Jarohat va qon ketishda nima qilish kerak?",
      intro: "Kuchli qon ketishi bor odamni bir necha daqiqada yo'qotish mumkin — avval qonni to'xtating, so'ng 103 ga qo'ng'iroq qiling (yoki kimdir chaqirsin).",
      steps: [
        { t: "Xavfsizlik va 103", d: "Hodisa joyi xavfsizligini tekshiring, 103 ga qo'ng'iroq qiling." },
        { t: "Qon ketishini bosib to'xtating", d: "Toza mato bilan jarohatga kuchli va uzluksiz bosing. Mato qonga to'lsa uni olmang — ustiga yana mato qo'ying." },
        { t: "Qo'l yoki oyoqda to'xtamasa", d: "Turniket bo'lsa jarohatdan yuqoriga qo'ying va vaqtini yozing." },
        { t: "Bosh yoki bo'yin jarohati shubhasida", d: "Odamni qimirlatmang, boshini ikki qo'l bilan ushlab turing. Faqat yong'in kabi xavf bo'lsagina ko'chiring." },
        { t: "Isiting va gaplashib turing", d: "Ustini yoping, hushida ushlab turing." }
      ],
      dont: [
        "Singan suyakni to'g'rilashga urinmang.",
        "Sanchilgan jismni sug'urib olmang.",
        "Ichirmang va ovqat bermang."
      ]
    },
    drugs: ["adrenalin"],
    equipment: ["turniket", "immobilizatsiya", "vakuum-shina", "boyin-yoqa", "aspirator"],
    quiz: "travma"
  }
];

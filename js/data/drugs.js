/* Dorilar kutubxonasi.
 *
 * MUHIM: `dosing` (dozalash va qo'llash tartibi) ATAYIN BO'SH qoldirilgan.
 * Doza va qo'llash tartibi amaldagi mahalliy klinik protokol / SSV buyrug'i bilan tekshirilib,
 * muallif tomonidan kiritiladi. Sayt `dosing` bo'sh bo'lsa "kiritilmagan" holatini ko'rsatadi,
 * to'ldirilsa — jadval ko'rinishida chiqaradi.
 *
 * `dosing` formati:
 *   dosing: [
 *     { case: "Yurak to'xtashi", dose: "…", route: "v/i", note: "…" },
 *     { case: "Anafilaksiya",    dose: "…", route: "m/i", note: "…" }
 *   ],
 *   dosingSource: "SSV buyrug'i №… / klinik protokol nomi"   // manba (ixtiyoriy, lekin tavsiya etiladi)
 *
 * Qolgan maydonlar (ta'siri, ko'rsatmalar, qarshi ko'rsatmalar, nojo'ya ta'sirlar) umumiy farmakologiya
 * ma'lumotlari — ularni ham amaldagi protokol bilan solishtirib chiqing.
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

TTY.data.drugCats = [
  { key: "reanimatsiya", label: "Reanimatsiya", tone: "heart" },
  { key: "yurak", label: "Yurak", tone: "life" },
  { key: "nafas", label: "Nafas va allergiya", tone: "breath" },
  { key: "nevro", label: "Nevrologiya", tone: "brain" }
];

TTY.data.drugs = [
  {
    slug: "adrenalin",
    name: "Adrenalin",
    latin: "Epinephrine",
    cat: "reanimatsiya",
    group: "Adrenomimetik (α va β)",
    atc: "C01CA24",
    form: "Ampula (in'ektsiya eritmasi)",
    effect: "α₁-retseptorlar orqali tomirlarni toraytiradi (diastolik bosim va koronar/miya perfuziyasi ortadi); β₁ orqali yurak qisqarishi kuchi va chastotasini oshiradi; β₂ orqali bronxlarni kengaytiradi va allergik mediatorlar ajralishini kamaytiradi.",
    indications: [
      "Yurak to'xtashi (asistoliya, PEA, VF / pulssiz VT)",
      "Anafilaksiya va anafilaktik shok — birinchi tanlov dori",
      "Og'ir bronxospazm (protokol bo'yicha)",
      "Ba'zi bradikardiya va gipotenziya holatlari (infuziya, protokol bo'yicha)"
    ],
    contra: [
      "Yurak to'xtashi va anafilaksiyada mutlaq qarshi ko'rsatma yo'q (hayotiy ko'rsatma)",
      "Boshqa holatlarda: og'ir arterial gipertenziya, taxiaritmiya, tirotoksikoz, koronar ishemiya — ehtiyotkorlik bilan"
    ],
    dosing: [],
    dosingSource: "",
    sideEffects: ["Taxikardiya va aritmiya", "Qon bosimi oshishi", "Tremor, xavotir, bosh og'rig'i", "Miokard ishemiyasi", "Ekstravazatsiyada to'qima nekrozi"],
    note: "Konsentratsiyani (asl va suyultirilgan eritma) adashtirmang — doza xatosi eng xavfli xatolardan biri. Kiritish yo'li (m/i yoki v/i) ko'rsatmaga qarab tanlanadi. Anafilaksiyada kechiktirmang.",
    topics: ["yurak", "shok", "nafas"]
  },
  {
    slug: "atropin",
    name: "Atropin",
    latin: "Atropine",
    cat: "reanimatsiya",
    group: "M-xolinoblokator",
    atc: "A03BA01",
    form: "Ampula (in'ektsiya eritmasi)",
    effect: "Vagus nerv ta'sirini to'sadi: yurak urishini tezlashtiradi, AV o'tkazuvchanlikni yaxshilaydi, bronx va so'lak bezlari sekretsiyasini kamaytiradi, qorachiqni kengaytiradi.",
    indications: [
      "Simptomatik bradikardiya (past bosim, hush o'zgarishi bilan)",
      "Fosfororganik birikmalar bilan zaharlanish",
      "Xolinergik sindromlar (giperssalivatsiya, bronxoreya)"
    ],
    contra: [
      "Yopiq burchakli glaukoma (nisbiy; hayotiy ko'rsatmada ehtiyot bilan)",
      "Prostata giperplaziyasida siydik tutilishi (nisbiy)",
      "Taxikardiya"
    ],
    dosing: [],
    dosingSource: "",
    sideEffects: ["Og'iz qurishi", "Taxikardiya", "Qorachiq kengayishi, ko'rish xiralashishi", "Siydik tutilishi", "Qo'zg'alish, bezovtalik"],
    note: "Juda kichik doza paradoksal bradikardiyaga olib kelishi mumkin — protokolda ko'rsatilgan minimal dozadan pastga tushmang. Fosfororganik zaharlanishda doza klinik javobga (sekretsiya kamayishi) qarab belgilanadi.",
    topics: ["yurak", "zaharlanish"]
  },
  {
    slug: "amiodaron",
    name: "Amiodaron",
    latin: "Amiodarone",
    cat: "reanimatsiya",
    group: "Antiaritmik (III sinf)",
    atc: "C01BD01",
    form: "Ampula (in'ektsiya eritmasi)",
    effect: "Kaliy kanallarini to'sib repolyarizatsiyani cho'zadi; natriy, kalsiy kanallari va β-retseptorlarga ham ta'sir qilib, qo'zg'aluvchanlik va AV o'tkazuvchanlikni kamaytiradi.",
    indications: [
      "Shokka chidamli VF / pulssiz VT (yurak to'xtashida)",
      "Barqaror keng QRS-taxikardiya (VT) — protokol bo'yicha",
      "Ba'zi supraventrikulyar taxiaritmiyalar (protokol bo'yicha)"
    ],
    contra: [
      "Sinus bradikardiya va II–III darajali AV blokada (kardiostimulyatorsiz)",
      "QT intervali cho'zilishi",
      "Og'ir gipotenziya yoki kardiogen shok (nisbiy)",
      "Yodga yoki amiodaronga allergiya; qalqonsimon bez kasalliklari (nisbiy)"
    ],
    dosing: [],
    dosingSource: "",
    sideEffects: ["Gipotenziya va bradikardiya", "QT cho'zilishi va aritmiya xavfi", "Flebit (periferik tomirga kiritilganda)", "Ko'ngil aynishi"],
    note: "Suyultirish eritmasi, kiritish tezligi va usuli — faqat protokol/yo'riqnoma bo'yicha. Iloji boricha katta tomirga kiritiladi; infuziya davomida bosim va EKG kuzatiladi.",
    topics: ["yurak"]
  },
  {
    slug: "nitroglitserin",
    name: "Nitroglitserin",
    latin: "Nitroglycerin",
    cat: "yurak",
    group: "Organik nitrat (vazodilatator)",
    atc: "C01DA02",
    form: "Tabletka / sublingval aerozol / ampula",
    effect: "Azot oksidi orqali vena va (kamroq) arteriyalarni kengaytiradi: yurakka qaytuvchi qonni (preload) kamaytiradi, miokard kislorod ehtiyojini pasaytiradi va koronar qon oqimini yaxshilaydi.",
    indications: [
      "Stenokardiya xuruji",
      "O'tkir koronar sindrom (qon bosimi yetarli bo'lsa)",
      "Kardiogen o'pka shishi (qon bosimi yetarli bo'lsa, protokol bo'yicha)"
    ],
    contra: [
      "Past qon bosimi (protokolda ko'rsatilgan chegaradan pastda)",
      "Oxirgi 24–48 soatda PDE-5 ingibitorlari (sildenafil, tadalafil) qabul qilgan bemor",
      "O'ng qorincha infarkti",
      "Og'ir aorta stenozi, gipovolemiya",
      "Bosh miya ichi bosimi oshgan yoki qon quyilish shubhasi"
    ],
    dosing: [],
    dosingSource: "",
    sideEffects: ["Bosh og'rig'i", "Bosh aylanishi va gipotenziya", "Refleks taxikardiya", "Yuzning qizarishi", "Kollaps"],
    note: "Bosimni har doim oldin va keyin o'lchang. Bemor o'tirgan yoki yotgan holatda bo'lsin. Sildenafil yoki shunga o'xshash dorilar qabul qilinganini so'rang. Pastki devor infarktida o'ng qorincha zararlanishini EKG orqali istisno qiling.",
    topics: ["yurak"]
  },
  {
    slug: "aspirin",
    name: "Aspirin",
    latin: "Acetylsalicylic acid",
    cat: "yurak",
    group: "Antiagregant (NSAID)",
    atc: "B01AC06",
    form: "Tabletka",
    effect: "Siklooksigenaza-1 fermentini qaytmas to'sib, trombotsitlar agregatsiyasini (tromboksan A₂) kamaytiradi; tromb hosil bo'lishini cheklaydi.",
    indications: [
      "O'tkir koronar sindrom (miokard infarkti, nostabil stenokardiya) shubhasi",
      "Ikkilamchi profilaktika (shifokor tayinlashi bo'yicha)"
    ],
    contra: [
      "Aspirin yoki boshqa NSAIDlarga allergiya; «aspirin astmasi»",
      "Faol qon ketish (oshqozon-ichak yarasi va h.k.)",
      "Gemorragik insult shubhasi",
      "Bolalar (Reye sindromi xavfi)",
      "Og'ir jigar yoki buyrak yetishmovchiligi, qon ivish buzilishi"
    ],
    dosing: [],
    dosingSource: "",
    sideEffects: ["Oshqozon bezovtaligi", "Oshqozon-ichak qon ketishi", "Bronxospazm (sezgir bemorlarda)", "Allergik reaksiya", "Qon ketish xavfi oshishi"],
    note: "Chaynab yutish so'rilishni tezlashtiradi. Insult shubhasida qon ketishi istisno qilinmaguncha bermang. Allergiya va qon ketish tarixini so'rang.",
    topics: ["yurak", "insult"]
  },
  {
    slug: "salbutamol",
    name: "Salbutamol",
    latin: "Salbutamol (Albuterol)",
    cat: "nafas",
    group: "Selektiv β₂-agonist (bronxodilatator)",
    atc: "R03AC02",
    form: "Aerozol inhalyator / nebulayzer eritmasi",
    effect: "Bronxlar silliq mushaklarini bo'shashtiradi (bronxodilatatsiya), mukotsiliar tozalanishni yaxshilaydi; yuqori dozada kaliyni hujayra ichiga o'tkazadi.",
    indications: [
      "Bronxial astma xuruji",
      "KOAB zo'rayishi",
      "Bronxospazm (masalan, anafilaksiyada qo'shimcha davo sifatida)",
      "Giperkaliemiya (protokol bo'yicha)"
    ],
    contra: [
      "Dori yoki uning tarkibiy qismlariga yuqori sezuvchanlik",
      "Og'ir taxiaritmiya yoki yurak kasalligi, tirotoksikoz (nisbiy; ehtiyotkorlik bilan)"
    ],
    dosing: [],
    dosingSource: "",
    sideEffects: ["Tremor", "Taxikardiya, yurak urishi hissi", "Bosh og'rig'i", "Gipokaliemiya", "Xavotir"],
    note: "Nebulayzer yoki spacer orqali beriladi. Ta'sirni nafas chastotasi, SpO₂ va nafas tovushlari bilan baholang; yetarli bo'lmasa keyingi bosqichga o'ting (protokol).",
    topics: ["nafas", "bola"]
  },
  {
    slug: "deksametazon",
    name: "Deksametazon",
    latin: "Dexamethasone",
    cat: "nafas",
    group: "Glyukokortikosteroid",
    atc: "H02AB02",
    form: "Ampula (in'ektsiya eritmasi)",
    effect: "Kuchli yallig'lanishga va allergiyaga qarshi ta'sir ko'rsatadi, hujayra membranalarini barqarorlashtiradi. Ta'siri sekin — soatlar ichida boshlanadi.",
    indications: [
      "Og'ir allergik reaksiya va anafilaksiya (yordamchi; adrenalin o'rnini bosmaydi)",
      "Bronxial astma va KOAB zo'rayishi",
      "Bolalarda krup (protokol bo'yicha)",
      "Ba'zi holatlarda miya shishi"
    ],
    contra: [
      "Dori tarkibiga yuqori sezuvchanlik",
      "Sistem zamburug' infeksiyasi (nisbiy)",
      "Shoshilinch qisqa muddatli qo'llashda boshqa mutlaq qarshi ko'rsatmalar kam"
    ],
    dosing: [],
    dosingSource: "",
    sideEffects: ["Giperglikemiya", "Qon bosimi oshishi", "Qo'zg'alish, uyqusizlik", "Oshqozon bezovtaligi", "Uzoq muddatda — infeksiya xavfi"],
    note: "Anafilaksiyada adrenalin birinchi o'rinda turadi, deksametazon esa keyingi (kechikkan) reaksiyani kamaytirishga xizmat qiladi. Qandli diabetda qon shakarini kuzating.",
    topics: ["shok", "nafas", "bola"]
  },
  {
    slug: "furosemid",
    name: "Furosemid",
    latin: "Furosemide",
    cat: "yurak",
    group: "Halqa diuretigi",
    atc: "C03CA01",
    form: "Ampula (in'ektsiya eritmasi) / tabletka",
    effect: "Genle halqasida Na⁺/K⁺/2Cl⁻ transportini to'sib kuchli diurez beradi; tomir ichiga kiritilganda venalarni kengaytirib, yurakka qaytuvchi qonni kamaytiradi (tez ta'sir).",
    indications: [
      "O'tkir chap qorincha yetishmovchiligi va kardiogen o'pka shishi",
      "Yurak, jigar yoki buyrak kasalliklaridagi shishlar",
      "Ba'zi gipertonik krizlar (protokol bo'yicha)"
    ],
    contra: [
      "Gipovolemiya va suvsizlanish",
      "Past qon bosimi va shok",
      "Anuriya",
      "Og'ir gipokaliemiya yoki giponatriemiya",
      "Sulfanilamidlarga allergiya (nisbiy)"
    ],
    dosing: [],
    dosingSource: "",
    sideEffects: ["Gipotenziya", "Kaliy va natriy kamayishi", "Suvsizlanish", "Quloqda shang'illash (tez kiritilganda)", "Taxikardiya"],
    note: "Bosim past va shok belgilari bo'lsa bermang. Sekin kiriting; siydik ajralishi va qon bosimini kuzating. Homiladorlik va emizish davrida ehtiyotkorlik bilan.",
    topics: ["nafas", "shok"]
  },
  {
    slug: "diazepam",
    name: "Diazepam",
    latin: "Diazepam",
    cat: "nevro",
    group: "Benzodiazepin",
    atc: "N05BA01",
    form: "Ampula (in'ektsiya eritmasi)",
    effect: "GABA-A retseptorlarini faollashtirib talvasaga qarshi, tinchlantiruvchi, xavotirni kamaytiruvchi va mushaklarni bo'shashtiruvchi ta'sir ko'rsatadi.",
    indications: [
      "Talvasa xuruji va status epilepticus",
      "Qo'zg'alish va vahima (protokol bo'yicha)",
      "Alkogol abstinensiyasi, mushak spazmi",
      "Eklampsiyada birinchi tanlov odatda magniy sulfat — protokolga qarang"
    ],
    contra: [
      "Og'ir nafas yetishmovchiligi yoki nafas depressiyasi",
      "Miasteniya, og'ir jigar yetishmovchiligi",
      "O'tkir alkogol yoki opioid zaharlanishi (nafas depressiyasi xavfi)",
      "Benzodiazepinlarga allergiya"
    ],
    dosing: [],
    dosingSource: "",
    sideEffects: ["Nafas depressiyasi", "Gipotenziya", "Uyquchanlik, amneziya", "Paradoksal qo'zg'alish", "Flebit; tez kiritilsa — apnoe"],
    note: "Nafas va bosimni kuzating; BVM va kislorod tayyor tursin. Tomirga sekin kiriting. Boshqa sedativ dorilar va alkogol ta'sirini kuchaytiradi. Boshqa dorilar bilan bir shpritsda aralashtirmang.",
    topics: ["insult", "akusherlik", "bola", "zaharlanish"]
  }
];

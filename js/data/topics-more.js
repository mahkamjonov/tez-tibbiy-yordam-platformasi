/* Qo'shimcha qalqon mavzulari: Qon ketish, Allergiya, Kuyish, Cho'kish.
 * Format topics.js dagi bilan bir xil. Dozalar ko'rsatilmagan — protokol bo'yicha.
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

TTY.data.topics.push(
  /* ───────────────────────── QON KETISH ───────────────────────── */
  {
    slug: "qon-ketish",
    shield: "qon",
    tone: "bleed",
    icon: "bloodtype",
    title: "Kuchli qon ketish",
    subtitle: "Tashqi qon ketish · bosim · turniket",
    badges: [{ t: "Hayot xavfi", c: "red" }, { t: "X-ABCDE", c: "" }],
    lead: "Massiv qon ketishni bir necha daqiqada to'xtatish: to'g'ridan-to'g'ri bosim, bosimli bog'ich va turniket.",
    facts: [
      { l: "Birinchi harakat", v: "Kuchli bosim", red: true },
      { l: "Turniket", v: "Vaqtni yozing" },
      { l: "Yashirin qon ketish", v: "Shok belgilarini izlang" }
    ],
    critical: {
      title: "Diqqat! Har soniya muhim",
      text: "Otilib chiqayotgan yoki to'xtamayotgan qon ketishi bir necha daqiqada hayotga xavf soladi. **Avval qonni to'xtating**, keyin boshqa holatlarni baholang. O'zingizni ham himoyalang: iloji bo'lsa qo'lqop yoki toza to'siq ishlating."
    },
    steps: {
      belgilar: [
        "**Tashqi qon ketish:** jarohatdan oqib yoki otilib chiqayotgan qon; kiyim qonga to'lgan, atrofda qon ko'lmagi.",
        "**Arterial qon ketish:** och qizil qon, pulsga mos otilib chiqadi — eng xavfli tur.",
        "**Ichki qon ketish belgilari:** qorin, ko'krak yoki son sohasida og'riq va shish; qusuq yoki najasda qon; kuchsizlik.",
        "**Shok belgilari:** teri oqargan, sovuq va nam; tez puls; bo'shashish; hushning chalg'ishi."
      ],
      baholash: [
        "**Xavfsizlik:** o'tkir jismlar, transport, elektr; o'zingizni himoyalang (qo'lqop yoki toza to'siq).",
        "**Massiv qon ketishni birinchi toping:** kerak bo'lsa kiyimni ochib, butun tanani tez ko'zdan kechiring (X-ABCDE — eng avval massiv qon ketish).",
        "**Qon yo'qotish darajasi:** puls, bosim, kapillyar to'lish, xush; shok indeksi.",
        "**Sabab va joy:** kesilgan, sanchilgan, o'q otilgan jarohat yoki singan suyak; sanchilgan jism bormi."
      ],
      birinchi: [
        "**To'g'ridan-to'g'ri bosim:** toza mato yoki bint bilan jarohatga qattiq va uzluksiz bosing — qon to'xtaguncha yoki yordam kelguncha.",
        "**Bosimli bog'ich:** bosim ostida qattiq bog'lang; mato qonga to'lsa uni olmang, ustiga yana qo'shing.",
        "**Turniket:** qo'l-oyoqdagi hayot uchun xavfli qon ketish to'xtamasa — jarohatdan taxminan 5–8 sm yuqoriga (bo'g'imga emas), qon to'xtaguncha tortib mahkamlang; **vaqtini yozing**.",
        "**Holat va isitish:** yotqizing, ustini yoping; og'iz orqali hech narsa bermang."
      ],
      brigada: [
        "**Gemostaz ustuvor:** bosimli bog'ich, gemostatik doka, turniket; chanoq jarohatida chanoq bog'ichi.",
        "**Tomir yo'llari va infuziya:** ikkita katta tomir yo'li; qon ketishi nazoratga olinguncha ehtiyotkor infuziya. Traneksam kislotasi kabi dorilar — faqat protokol bo'yicha.",
        "**Monitoring:** bosim, puls, SpO₂, xush; bemorni isiting (gipotermiya qon ivishini buzadi).",
        "**Nafas yo'li va kislorod:** kerak bo'lsa kislorod; shok belgilari bo'lsa — «yuklab-ol va ket» tamoyili."
      ],
      transport: [
        "**Yo'nalish:** travma yoki jarrohlik imkoniyati bor shifoxonaga; oldindan xabar bering.",
        "**Tezlik:** qon ketishi to'xtatilgach joyda vaqtni cho'zmang; muolajalar yo'lda davom etadi.",
        "**Yo'lda:** bog'ich va turniket joyini qayta-qayta tekshiring; bosim va pulsni kuzating.",
        "**Holat:** chalqancha, isitilgan; turniketli a'zo ochiq (ko'rinib) tursin."
      ],
      hujjat: [
        "**Vaqtlar:** jarohat, chaqiruv va turniket qo'yilgan aniq vaqt.",
        "**Qon yo'qotish:** taxminiy hajm, joyi va sababi; ko'rsatkichlar dinamikasi.",
        "**Muolajalar:** bog'ich turi, turniket soni va joyi, infuziya, dorilar (nomi, dozasi, vaqti).",
        "**Topshirish:** shifoxonaga qisqa xabar (yosh, mexanizm, joy, davo, holat)."
      ]
    },
    public: {
      title: "Kuchli qon ketishda nima qilish kerak?",
      intro: "Otilib chiqayotgan yoki to'xtamayotgan qonni bir necha daqiqada to'xtatish kerak. Avval bosing, keyin 103 ga qo'ng'iroq qiling (yoki kimdir chaqirsin).",
      steps: [
        { t: "Xavfsizlik va 103", d: "Joy xavfsizligini tekshiring va 103 ga qo'ng'iroq qiling (yoki atrofdagilardan birini chaqirtiring)." },
        { t: "Kuchli bosing", d: "Toza mato, kiyim yoki bint bilan jarohatga qo'lingiz bilan qattiq va to'xtovsiz bosing." },
        { t: "Mato qonga to'lsa", d: "Uni olmang — ustiga yana mato qo'yib, bosishda davom eting." },
        { t: "Qo'l yoki oyoqda to'xtamasa", d: "Bosimli bog'ich qo'ying. Turniket bo'lsa — jarohatdan yuqoriga qo'yib mahkamlang va vaqtini yozing." },
        { t: "Yotqizing va isiting", d: "Ustini yoping, gaplashib turing va hushini kuzating; brigada kelguncha bosimni to'xtatmang." }
      ],
      dont: [
        "Sanchilgan jismni sug'urib olmang — uni atrofidan bosib mahkamlang.",
        "Qon to'xtadimi deb tez-tez bosimni bo'shatmang.",
        "Turniketni o'zingiz yechmang.",
        "Jarohatga tuproq, kul yoki o'simliklar surtmang; ichirmang."
      ]
    },
    drugs: [],
    equipment: ["turniket", "dori-sumkasi", "pulsoksimetr"],
    quiz: "qon-ketish"
  },

  /* ───────────────────────── ALLERGIYA ───────────────────────── */
  {
    slug: "allergiya",
    shield: "allergiya",
    tone: "allergy",
    icon: "allergy",
    title: "Allergik reaksiya va anafilaksiya",
    subtitle: "Anafilaksiya · adrenalin · avtoinyektor",
    badges: [{ t: "Hayot xavfi", c: "red" }, { t: "ABCDE", c: "" }],
    lead: "Kuchli allergik reaksiyani tez aniqlash, allergenni to'xtatish va adrenalinni kechiktirmasdan qo'llash.",
    facts: [
      { l: "Birinchi tanlov dori", v: "Adrenalin (m/i)", red: true },
      { l: "Joyi", v: "Sonning tashqi yuzasi" },
      { l: "Kuzatuv", v: "Qaytish xavfi bor" }
    ],
    critical: {
      title: "Diqqat! Adrenalinni kechiktirmang",
      text: "Nafas qiyinligi, yuz-tomoq shishi yoki bosim tushishi bilan kuchli allergik reaksiya (anafilaksiya) daqiqalar ichida hayotga xavf soladi. **Adrenalin mushak ichiga** — birinchi tanlov. Dozani amaldagi protokol bo'yicha qo'llang."
    },
    steps: {
      belgilar: [
        "**Teri:** tarqalgan toshma, qichishish, qizarish; yuz, lab, til va ko'z atrofi shishi.",
        "**Nafas:** hansirash, vizillash, ovoz bo'g'ilishi, tomoq siqilishi, stridor.",
        "**Qon aylanishi:** bosh aylanishi, oqarish, tez puls, past bosim, hushdan ketish.",
        "**Oshqozon-ichak:** qayt qilish, qorin tirishib og'rishi, ich ketishi. Odatda allergen ta'siridan daqiqalar–soatlar ichida boshlanadi."
      ],
      baholash: [
        "**ABCDE:** nafas yo'li (shish), nafas, qon aylanishi, xush.",
        "**Allergen:** ari nishi, ovqat (yong'oq, dengiz mahsulotlari va h.k.), dori, lateks; ta'sir vaqti.",
        "**Og'irlik mezoni:** teri belgilari + nafas yoki bosim buzilishi — anafilaksiya deb qabul qiling.",
        "**Anamnez:** oldingi anafilaksiya, astma, bemorning avtoinyektori va dorilari."
      ],
      birinchi: [
        "**Allergenni to'xtating:** ari nishini olib tashlang, ovqat yoki dorini to'xtating.",
        "**Adrenalin:** avtoinyektor bo'lsa sonning tashqi yuzasiga (kiyim ustidan ham mumkin) yo'riqnomaga ko'ra qo'llang; 103 ga qo'ng'iroq qiling.",
        "**Holat:** chalqancha, oyoqlar ko'tarilgan; nafas qiyin bo'lsa — o'tirgan; homilador — chap yonboshda; hushsiz — yon holat.",
        "**Nafas to'xtasa:** reanimatsiyani (CPR) boshlang."
      ],
      brigada: [
        "**Adrenalin mushak ichiga:** sonning old-tashqi yuzasi; takroriy kiritish — protokol bo'yicha.",
        "**Kislorod va tomir yo'li:** yuqori oqimli kislorod, tomir yo'li, bosim past bo'lsa suyuqlik infuziyasi.",
        "**Yordamchi davo:** bronxospazmda salbutamol; antigistamin va steroid adrenalin o'rnini bosmaydi (protokol bo'yicha).",
        "**Nafas yo'li:** shish kuchaysa erta ilg'or nafas yo'liga tayyorgarlik; doimiy monitoring."
      ],
      transport: [
        "**Barcha bemorlar shifoxonaga:** yaxshilangandek ko'rinsa ham — ikkinchi to'lqin (bifazik reaksiya) xavfi bor.",
        "**Yo'lda:** kislorod, monitoring, tomir yo'li; yomonlashsa — qayta adrenalin (protokol bo'yicha).",
        "**Holat:** yuqoridagidek (chalqancha, oyoqlar ko'tarilgan yoki o'tirgan).",
        "**Oldindan xabar:** allergen, davo va vaqtlar."
      ],
      hujjat: [
        "**Vaqtlar:** ta'sir, belgilar boshlanishi, adrenalin, ko'rsatkichlar.",
        "**Allergen:** taxminiy sabab va oldingi reaksiyalar.",
        "**Muolajalar:** adrenalin (nomi, dozasi, yo'li, soni), infuziya, kislorod.",
        "**Tavsiya:** bemorga avtoinyektor va allergologga murojaat haqida ma'lumot berish."
      ]
    },
    public: {
      title: "Kuchli allergik reaksiyada nima qilish kerak?",
      intro: "Toshma bilan birga nafas qiyinligi, yuz-tomoq shishi yoki rangi oqarib hushi chalg'ish — hayot uchun xavfli holat.",
      steps: [
        { t: "103 ga qo'ng'iroq qiling", d: "«Kuchli allergik reaksiya, nafasi qiyin» deb ayting." },
        { t: "Allergenni to'xtating", d: "Ari nishini olib tashlang; ovqat yoki dorini to'xtating." },
        { t: "Avtoinyektor bo'lsa", d: "Yo'riqnomaga ko'ra sonning tashqi yuzasiga qo'llang (kiyim ustidan ham bo'ladi)." },
        { t: "Yotqizing", d: "Oyoqlarini ko'taring; nafasi qiyin bo'lsa — o'tirg'izing; hushsiz bo'lsa — yon holatga yotqizing." },
        { t: "Kuzating", d: "Nafas to'xtasa — reanimatsiyani boshlang. Yaxshilandi deb kutmang: shifoxonaga ko'rsatish kerak." }
      ],
      dont: [
        "Bemorni tik turg'izmang yoki yurgizmang.",
        "Ichirmang va ovqat bermang.",
        "Antigistamin tabletka bilan kutib turmang — u adrenalin o'rnini bosmaydi.",
        "Yaxshilangandek ko'rinsa ham yolg'iz qoldirmang."
      ]
    },
    drugs: ["adrenalin", "salbutamol", "deksametazon"],
    equipment: ["kislorod", "dori-sumkasi", "pulsoksimetr"],
    quiz: "allergiya"
  },

  /* ───────────────────────── KUYISH ───────────────────────── */
  {
    slug: "kuyish",
    shield: "kuyish",
    tone: "burn",
    icon: "local_fire_department",
    title: "Kuyish",
    subtitle: "Termik · kimyoviy · elektr kuyish",
    badges: [{ t: "Shoshilinch", c: "amber" }, { t: "ABCDE", c: "" }],
    lead: "Kuyishda birinchi yordam: manbani to'xtatish, to'g'ri sovutish, kuygan joyni yopish va og'ir holatlarni tanish.",
    facts: [
      { l: "Sovutish", v: "20 daqiqa, oqar suv", red: true },
      { l: "Maydon", v: "Kaft ≈ 1%" },
      { l: "Muz", v: "Ishlatilmaydi" }
    ],
    critical: {
      title: "Diqqat! To'g'ri sovutish",
      text: "Avval manbani to'xtating va **kuygan joyni 20 daqiqa oqar salqin (muzsiz) suvda sovuting**. Yuz va nafas yo'llari, katta maydon, elektr yoki kimyoviy kuyish, bolalar va keksalarda — darhol 103. Muz, moy, smetana yoki tish pastasi surtmang."
    },
    steps: {
      belgilar: [
        "**I daraja:** qizarish, og'riq, quruq teri (quyosh kuyishiga o'xshash).",
        "**II daraja:** pufakchalar, nam va juda og'riqli teri.",
        "**III daraja:** quruq, oqargan yoki qoramtir, ko'pincha og'riqsiz (nerv uchlari zararlangan).",
        "**Nafas yo'li kuyishi belgilari:** yuz va bo'yin kuyishi, kuygan qosh va kipriklar, qoramtir so'lak yoki balg'am, xirillash, yo'tal, yopiq joyda tutun."
      ],
      baholash: [
        "**Xavfsizlik:** olov, elektr tokini o'chiring; kimyoviy modda bo'lsa o'zingizni himoyalang.",
        "**ABCDE:** birinchi navbatda nafas yo'li (ayniqsa tutun yoki yuz kuyishida).",
        "**Maydon:** kaft qoidasi (bemorning kafti ≈ 1%) yoki «to'qqizlik qoidasi»; yuz, qo'l, oyoq kaftlari, jinsiy a'zolar, bo'g'imlar alohida e'tiborga loyiq.",
        "**Sabab va vaqt:** olov, issiq suyuqlik, kimyoviy, elektr; qachon bo'lgan; qo'shimcha jarohat (portlash, yiqilish)."
      ],
      birinchi: [
        "**Manbani to'xtating:** olovni o'chiring; kuygan kiyim va zargarliklarni shishishdan oldin yeching, **yopishib qolgan kiyimni tortmang**.",
        "**Sovutish:** 20 daqiqa oqar salqin suv (muzsiz). Katta maydonli kuyishda va bolalarda gipotermiyaga yo'l qo'ymang.",
        "**Yopish:** toza, tolasiz mato yoki oziq-ovqat plyonkasi bilan bo'sh yoping; pufakchalarni yormang.",
        "**Kimyoviy va elektr:** kimyoviy modda — ko'p suv bilan uzoq yuving (quruq kukun bo'lsa avval qoqib tashlang); elektr — tokni o'chirib, yurak ritmini kuzating."
      ],
      brigada: [
        "**Nafas yo'li:** yuz/bo'yin kuyishi va xirillashda erta ilg'or nafas yo'liga tayyorgarlik; tutun ingalyatsiyasida 100% kislorod.",
        "**Og'riqsizlantirish:** protokol bo'yicha; tomir yo'lini imkon qadar kuymagan teri orqali oching.",
        "**Infuziya:** katta maydonli kuyishda suyuqlik (Parkland formulasi asosida) — protokol bo'yicha; siydik ajralishini kuzating.",
        "**Isitish:** sovutishdan keyin bemorni isiting — katta maydonda gipotermiya xavfi yuqori."
      ],
      transport: [
        "**Kuyish markaziga:** katta maydon, yuz/qo'l/oyoq kafti/jinsiy a'zo, III daraja, elektr yoki kimyoviy kuyish, nafas yo'li kuyishi, bolalar.",
        "**Yo'lda:** nafas yo'li va nafasni kuzating; kuygan sohani toza plyonka bilan yoping; isiting.",
        "**Zargarliklar:** shishishdan oldin yeching.",
        "**Oldindan xabar:** shifoxonaga."
      ],
      hujjat: [
        "**Vaqtlar:** kuyish vaqti, sovutish boshlanishi va davomiyligi.",
        "**Maydon va daraja:** taxminiy foiz va joylashuvi.",
        "**Sabab:** olov, issiq suyuqlik, kimyoviy modda (nomi), elektr (kuchlanish).",
        "**Muolajalar:** kislorod, infuziya, og'riqsizlantirish (nomi, dozasi, vaqti)."
      ]
    },
    public: {
      title: "Kuyishda nima qilish kerak?",
      intro: "To'g'ri sovutish kuyishning chuqurlashishini to'xtatadi. Yuz, katta maydon, elektr, kimyoviy kuyish va bolalarda — 103 ga qo'ng'iroq qiling.",
      steps: [
        { t: "Manbani to'xtating", d: "Olovni o'chiring, issiq narsadan uzoqlashtiring, elektr bo'lsa tokni o'chiring." },
        { t: "Sovuting — 20 daqiqa", d: "Kuygan joyni oqar salqin suv ostida ushlang. Muz ishlatmang." },
        { t: "Kiyim va zargarlikni yeching", d: "Shishishdan oldin yeching. Terga yopishib qolganini tortmang." },
        { t: "Toza mato bilan yoping", d: "Tolasiz toza mato yoki oziq-ovqat plyonkasi bilan bo'sh yoping." },
        { t: "103 ga qo'ng'iroq qiling", d: "Yuz, tomoq, katta maydon, kimyoviy yoki elektr kuyish, bola yoki keksa bo'lsa — darhol." }
      ],
      dont: [
        "Muz yoki muzdek suv bilan sovutmang.",
        "Moy, smetana, tuxum, tish pastasi yoki dori surtmang.",
        "Pufakchalarni yormang.",
        "Yopishib qolgan kiyimni tortib olmang."
      ]
    },
    drugs: [],
    equipment: ["kislorod", "pulsoksimetr", "dori-sumkasi"],
    quiz: "kuyish"
  },

  /* ───────────────────────── CHO'KISH ───────────────────────── */
  {
    slug: "choqish",
    shield: "choqish",
    tone: "drowning",
    icon: "waves",
    title: "Cho'kish",
    subtitle: "Qutqarish · nafas · reanimatsiya",
    badges: [{ t: "Kod: qizil", c: "red" }, { t: "BLS", c: "" }],
    lead: "Suvdan xavfsiz qutqarish, nafas yordami va reanimatsiya. Cho'kishda asosiy muammo — kislorod yetishmasligi.",
    facts: [
      { l: "Birinchi qoida", v: "O'zingiz cho'kmang", red: true },
      { l: "Boshlang'ich puflash", v: "5 ta" },
      { l: "AED", v: "Quruq ko'krakka" }
    ],
    critical: {
      title: "Diqqat! Qutqaruvchi xavfsizligi",
      text: "Qutqaruvchi ham cho'kib ketishi mumkin: **suvga tushishdan oldin** arqon, shar, tayoq yoki boshqa vosita bering. Cho'kishda kislorod yetishmasligi asosiy sabab — suvdan chiqargach **nafas beruvchi puflashlar** birinchi o'rinda. Yaxshilangandek ko'ringan bemor ham shifoxonaga ko'rsatilishi kerak."
    },
    steps: {
      belgilar: [
        "**Hushsiz, nafas yo'q yoki g'ayritabiiy** — suv yuzasida yoki ostida.",
        "**Faol cho'kish:** tik holat, yordam so'rab qichqirolmaydi, qo'llar suvni uradi, boshi orqaga.",
        "**Kech belgilar:** yo'tal, ko'pikli balg'am, nafas qisilishi, holsizlik, hush o'zgarishi (o'pka shishi).",
        "**Sovuqdan:** titroq, sekin puls — gipotermiya belgilari."
      ],
      baholash: [
        "**Xavfsizlik:** oqim, muz, chuqurlik; qutqaruv vositalari; o'zingizni xavfga solmang.",
        "**Mexanizm:** sho'ng'ish yoki yiqilish bo'lsa bo'yin jarohati ehtimoli; suv harorati va suvda qolgan vaqt.",
        "**Nafas va puls:** suvdan chiqargach nafas yo'lini oching va 10 soniya nafasni tekshiring; kerak bo'lsa reanimatsiya.",
        "**Gipotermiya:** sovuq suvda cho'kkanlarda reanimatsiya uzoqroq davom ettiriladi."
      ],
      birinchi: [
        "**Suvdan chiqarish:** imkon qadar gorizontal, bosh va bo'yin bir o'qda; qutqaruv vositalaridan foydalaning.",
        "**Nafas yo'li:** oching va nafasni tekshiring; nafas yo'q bo'lsa **5 ta boshlang'ich puflash**, so'ng ko'krak kompressiyasi 30:2.",
        "**Suvni chiqarishga urinmang:** qorin turtkisi va boshini pastga tutish kerak emas; qusish bo'lsa yon tomonga burib tozalang.",
        "**Isitish:** ho'l kiyimni yeching, quruq va iliq o'rang; AED uchun ko'krakni quriting."
      ],
      brigada: [
        "**Kislorod va ventilyatsiya ustuvor:** 100% kislorod, BVM; yurak to'xtashi ko'pincha gipoksik sabablidir.",
        "**AED / defibrillyator:** elektrodlarni quruq terida qo'llang.",
        "**Gipotermiya:** haroratni o'lchang, isiting; og'ir gipotermiyada reanimatsiya protokoli farq qiladi.",
        "**Bo'yin jarohati shubhasida:** bo'yin yoqasi va immobilizatsiya."
      ],
      transport: [
        "**Barcha cho'kkan bemorlar shifoxonaga:** yaxshi ko'ringan bo'lsa ham (kechikkan o'pka shishi mumkin).",
        "**Yo'lda:** kislorod, monitoring, isitish; nafas va xushni kuzating.",
        "**Yo'nalish:** reanimatsiya imkoniyati bor shifoxona; oldindan xabar bering.",
        "**Guvohdan:** suvda qolgan vaqt haqida ma'lumot oling."
      ],
      hujjat: [
        "**Vaqtlar:** suvga tushgan, chiqarilgan, CPR boshlangan, birinchi razryad.",
        "**Suv:** turi (chuchuk/sho'r), harorati, chuqurligi; mexanizm.",
        "**Muolajalar:** puflash, kompressiya, kislorod, AED, isitish.",
        "**Topshirish:** shifoxonaga qisqa xabar."
      ]
    },
    public: {
      title: "Cho'kayotgan odamga qanday yordam berish kerak?",
      intro: "Avval o'zingizning xavfsizligingiz: suvga sakramang. Uzoqdan qutqarish vositalaridan foydalaning va 103 ga qo'ng'iroq qiling.",
      steps: [
        { t: "O'zingiz suvga tushmang", d: "Arqon, shar, tayoq yoki uzun mato uzating. 103 ga qo'ng'iroq qiling yoki atrofdagilardan chaqirtiring." },
        { t: "Suvdan chiqaring", d: "Imkon qadar yotgan holatda, boshi va bo'ynini bir o'qda tuting." },
        { t: "Hushini va nafasini tekshiring", d: "Yelkasidan silkiting; nafas yo'lini oching va 10 soniya nafasini kuzating." },
        { t: "Nafas yo'q bo'lsa", d: "O'qitilgan bo'lsangiz 5 marta puflang, so'ng ko'krakni bosishni boshlang (30 bosish : 2 puflash). Puflay olmasangiz — faqat ko'krakni bosing." },
        { t: "AED bo'lsa", d: "Ko'krakni quritib, AED ni ulang. Nafas tiklansa — yon holatga yotqizing, ho'l kiyimni yechib isiting." }
      ],
      dont: [
        "Qutqarish vositasiz suvga sakramang.",
        "Suvni chiqarish uchun qorniga bosmang yoki boshini pastga tutmang.",
        "Yaxshilandi deb kuzatuvsiz qoldirmang — shifoxonaga ko'rsatish kerak."
      ]
    },
    drugs: [],
    equipment: ["kislorod", "bvm", "ivl", "defibrillyator", "aspirator"],
    quiz: "choqish"
  }
);

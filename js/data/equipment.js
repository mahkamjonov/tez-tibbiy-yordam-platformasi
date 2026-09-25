/* Brigada: turlari va jihozlari.
 * Jihoz kartochkasi bosilganda: Nima? · Qachon ishlatiladi? · Qanday ishlatiladi? · Nimalarga e'tibor beriladi?
 * Brigada tarkibi va jihozlar ro'yxati hududga va amaldagi buyruqqa qarab farq qiladi — kerak bo'lsa tahrirlang.
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

TTY.data.brigades = [
  {
    slug: "shifokorlik",
    title: "Shifokorlik brigadasi",
    icon: "stethoscope",
    tone: "life",
    text: "Shifokor boshchiligidagi brigada. Og'ir, noaniq va hayot uchun xavfli holatlarda ixtisoslashtirilgan yordam ko'rsatadi.",
    staff: "Shifokor, feldsher yoki hamshira, haydovchi (tarkibi amaldagi buyruq bilan belgilanadi).",
    tasks: [
      "Yurak-o'pka reanimatsiyasi va ilg'or nafas yo'li",
      "Dori terapiyasi va tomir ichi infuziyalari",
      "EKG tashxisi va monitoring",
      "Qiyin holatlarda tashxis va transport qarori"
    ]
  },
  {
    slug: "feldsherlik",
    title: "Feldsherlik brigadasi",
    icon: "medical_services",
    tone: "breath",
    text: "Feldsher boshchiligidagi brigada. Ko'p uchraydigan shoshilinch holatlarda protokol bo'yicha yordam ko'rsatadi va kerak bo'lsa shifokor brigadasini chaqiradi.",
    staff: "Feldsher (paramedik), hamshira yoki sanitar, haydovchi (tarkibi amaldagi buyruq bilan belgilanadi).",
    tasks: [
      "Bazaviy reanimatsiya, AED va kislorod terapiyasi",
      "Qon ketishini to'xtatish va immobilizatsiya",
      "Protokolda ruxsat etilgan dorilar va monitoring",
      "Bemorni shifoxonaga xavfsiz tashish"
    ]
  },
  {
    slug: "maxsus",
    title: "Maxsus brigadalar",
    icon: "emergency",
    tone: "heart",
    text: "Ma'lum yo'nalish bo'yicha ixtisoslashgan brigadalar: murakkab holatlarda qo'shimcha kuch va jihozlar bilan chiqadi.",
    staff: "Yo'nalishga qarab shifokor-mutaxassis va o'qitilgan xodimlar. Mavjud turlari hududga qarab farq qiladi.",
    tasks: [
      "Reanimatsiya-intensiv terapiya brigadasi",
      "Kardiologik va nevrologik brigada",
      "Pediatrik va akusherlik-ginekologik brigada",
      "Toksikologik va psixiatrik brigada"
    ]
  }
];

TTY.data.equipment = [
  {
    slug: "defibrillyator",
    title: "Defibrillyator / AED",
    icon: "electric_bolt",
    cat: "Yurak",
    tone: "heart",
    what: "Yurak ritmini tahlil qiluvchi va shokka yaroqli ritmda (qorinchalar fibrillyatsiyasi, pulssiz VT) elektr razryad beruvchi qurilma. AED — avtomatik va ovozli ko'rsatma beradi; qo'lda defibrillyatorda energiyani xodimning o'zi tanlaydi.",
    when: [
      "Yurak to'xtaganda — imkon qadar tezroq",
      "Shokka yaroqli ritm (VF / pulssiz VT) aniqlanganda",
      "Qo'lda rejimda: kardioversiya va pacing (o'qitilgan xodim, protokol bo'yicha)"
    ],
    how: [
      "Qurilmani yoqing va ovozli ko'rsatmalarga amal qiling.",
      "Ko'krak terisini quruq qiling (kerak bo'lsa tuklarni oling) va elektrodlarni rasmdagidek yopishtiring: o'ng o'mrov osti va chap qo'ltiq osti.",
      "Tahlil paytida hech kim bemorga tegmasin.",
      "Razryad tavsiya etilsa: «Hech kim tegmasin!» deb ogohlantiring, atrofni tekshiring va tugmani bosing.",
      "Razryaddan so'ng darhol 2 daqiqa kompressiyani davom ettiring."
    ],
    care: [
      "Bemor suvda yoki nam sirtda bo'lsa avval quriting.",
      "Kislorod oqimini elektrodlardan uzoqlashtiring (ochiq niqobni chetga).",
      "Kardiostimulyator yoki implant ustiga elektrodni qo'ymang — 2–3 sm chetga; dori plastyrini olib tashlang.",
      "Bolalarda yoshga mos elektrod ishlating; batareya va elektrod yaroqlilik muddatini tekshiring."
    ],
    topics: ["yurak"]
  },
  {
    slug: "kislorod",
    title: "Kislorod (ballon, niqob)",
    icon: "air",
    cat: "Nafas",
    tone: "breath",
    what: "Tibbiy kislorod manbai: reduktor va flowmetrli ballon, turli niqoblar (oddiy, rezervuarli) va burun kanyulalari.",
    when: [
      "Nafas yetishmovchiligi va gipoksiya (SpO₂ < 94%)",
      "Yurak to'xtashi, shok, og'ir travma",
      "Is gazi (CO) zaharlanishi"
    ],
    how: [
      "Ballon ventilini oching va manometrdan bosimni tekshiring.",
      "Flowmetrni niqob turiga mos oqimga sozlang.",
      "Niqob yoki kanyulani bemorga mos joylashtiring.",
      "SpO₂ va klinik holatga qarab oqimni sozlang."
    ],
    care: [
      "Kislorod yonishni kuchaytiradi: ochiq olov, chekish, yog' va moydan uzoq tuting.",
      "Ballonni yiqilmasin deb mahkamlang; zaxirani oldindan tekshiring.",
      "Surunkali o'pka kasalligida (KOAB) maqsad SpO₂ 88–92%.",
      "Niqob toza va bemorga o'lchamiga mos bo'lsin."
    ],
    topics: ["nafas", "yurak", "shok"]
  },
  {
    slug: "aspirator",
    title: "Aspirator (so'rish qurilmasi)",
    icon: "water_drop",
    cat: "Nafas yo'li",
    tone: "breath",
    what: "Nafas yo'llaridan qon, qusuq, shilliq va suyuqlikni so'rib oluvchi qo'l yoki elektr qurilma.",
    when: [
      "Og'iz-halqumda suyuqlik, qusuq yoki qon bo'lganda",
      "Nafas yo'li to'silganda",
      "Intubatsiyadan oldin va keyin"
    ],
    how: [
      "Qurilmani tekshiring va yoqing; mos kateter tanlang (og'iz uchun — qattiq, burun yoki trakeya uchun — yumshoq).",
      "Kateterni bemorda uzunligini o'lchab, ehtiyotkorlik bilan kiriting.",
      "So'rishni kateterni chiqarayotganda bajaring; bir marta 10–15 soniyadan oshirmang.",
      "So'rishdan keyin kislorod bering."
    ],
    care: [
      "Uzoq so'rish gipoksiyaga olib keladi.",
      "Kateter yumshoq to'qimalarni jarohatlamasin.",
      "Bir martalik yoki steril vositalardan foydalaning.",
      "Yig'gich idishni to'lib ketishidan oldin bo'shating."
    ],
    topics: ["nafas", "zaharlanish", "insult"]
  },
  {
    slug: "bvm",
    title: "BVM (Ambu qop-niqob)",
    icon: "masks",
    cat: "Nafas",
    tone: "breath",
    what: "Qo'lda ventilyatsiya vositasi: o'z-o'zidan kengayadigan qop, bir tomonlama klapan, yuz niqobi va kislorod ulanadigan rezervuar.",
    when: [
      "Nafas to'xtaganda yoki yetarli bo'lmaganda",
      "Yurak to'xtashida puflash uchun",
      "Intubatsiyagacha oksigenatsiya"
    ],
    how: [
      "Nafas yo'lini oching (bosh orqaga – iyak yuqoriga yoki jag'ni oldinga surish), mos o'lchamli niqob tanlang.",
      "«C-E» usuli: bosh va ko'rsatkich barmoq niqobni bosadi (C), qolgan uch barmoq jag' suyagini ko'taradi (E).",
      "Qopni ko'krak ko'tarilguncha ~1 soniya siqing; kattalarda ~10 ta nafas/daq.",
      "Kislorodni ulang va rezervuarni to'ldiring."
    ],
    care: [
      "Haddan tashqari kuch va tezlik oshqozon shishishi va aspiratsiyaga olib keladi.",
      "Germetiklik uchun ikki kishilik usul (biri niqobni ushlaydi, ikkinchisi qopni siqadi) samaraliroq.",
      "Ko'krak ko'tarilmasa: nafas yo'li holati va niqob germetikligini qayta tekshiring.",
      "Yoshga mos o'lcham tanlang."
    ],
    topics: ["yurak", "nafas", "bola"]
  },
  {
    slug: "immobilizatsiya",
    title: "Immobilizatsiya vositalari",
    icon: "accessibility_new",
    cat: "Travma",
    tone: "trauma",
    what: "Umurtqa va suyaklarni harakatsiz mahkamlash uchun vositalar: qattiq (spinal) taxta, bosh mahkamlagichlar, tasmalar va oyoq-qo'l shinalari.",
    when: [
      "Umurtqa yoki bo'yin jarohati shubhasida",
      "Suyak sinishi yoki chiqishida",
      "Og'ir travma mexanizmida bemorni xavfsiz ko'chirish uchun"
    ],
    how: [
      "Bo'yin yoqasini qo'ying.",
      "Bemorni bosh, bo'yin va tana bir o'qda burib (log-roll) taxtaga yotqizing.",
      "Tana, chanoq va oyoq tasmalarini mahkamlang.",
      "Boshni mahkamlagich bilan mahkamlang.",
      "Har manipulyatsiyadan keyin sezgi, harakat va qon aylanishini tekshiring."
    ],
    care: [
      "Qattiq taxtada uzoq turish bosim yaralariga olib keladi — imkon qadar vakuum matrasga o'tkazing.",
      "Tasmalar ko'krak nafasini cheklamasin.",
      "Bosh dastlabki neytral holatda mahkamlansin.",
      "Qusish xavfi bo'lsa bemorni yon tomonga burishga tayyor turing."
    ],
    topics: ["travma"]
  },
  {
    slug: "vakuum-shina",
    title: "Vakuum shinalar va matras",
    icon: "healing",
    cat: "Travma",
    tone: "trauma",
    what: "Ichidagi mayda granulalar havo so'rib olinganda qotib, jarohatlangan a'zo shakliga moslashadigan shinalar va vakuum matras.",
    when: [
      "Suyak sinishi va bo'g'im jarohatlarida",
      "Umurtqa va chanoq jarohatida (vakuum matras)",
      "Uzoq transportda qulay va xavfsiz mahkamlash uchun"
    ],
    how: [
      "Shinani yoyib, granulalarni tekislang.",
      "Jarohatlangan a'zoni topilgan holatida joylashtiring (kuch bilan to'g'rilamang).",
      "Shinani a'zo atrofiga o'rab, tasmalar bilan mahkamlang.",
      "Nasos bilan havoni so'rib oling — shina qotadi.",
      "Sezgi va qon aylanishini tekshiring."
    ],
    care: [
      "O'tkir jismlar shinani teshib qo'yadi.",
      "Shishayotgan a'zoda tasmalar juda siqilmasin.",
      "Ochiq sinishda avval jarohatni yoping.",
      "Saqlash va yig'ishda ishlab chiqaruvchi yo'riqnomasiga amal qiling."
    ],
    topics: ["travma"]
  },
  {
    slug: "boyin-yoqa",
    title: "Bo'yin shinasi (yoqa)",
    icon: "personal_injury",
    cat: "Travma",
    tone: "trauma",
    what: "Bo'yin umurtqasini neytral holatda cheklab turuvchi qattiq yoqa. Bir necha o'lchamda bo'ladi yoki sozlanadi.",
    when: [
      "Bo'yin umurtqasi jarohati shubhasida (yiqilish, avtohalokat, suvga sho'ng'ish)",
      "Bosh va bo'yin jarohatida ongi buzilgan bemorlarda"
    ],
    how: [
      "Yordamchi boshni ikki qo'li bilan neytral holatda ushlab turadi.",
      "Bo'yin uzunligiga qarab yoqa o'lchamini tanlang yoki sozlang.",
      "Yoqani avval iyak ostiga, so'ng orqa tomonidan o'rab qo'ying.",
      "Tasmani mahkamlang; nafas va yutishga to'sqinlik qilmasin."
    ],
    care: [
      "Yoqa to'liq immobilizatsiya emas — bosh mahkamlagich va taxta bilan birga qo'llanadi.",
      "Juda tor yoqa bo'yin venalarini siqib, bosh miya ichi bosimini oshirishi mumkin.",
      "Bola yoki keksada qulay neytral holatni saqlang.",
      "Qusish xavfi bo'lsa aspirator tayyor turishi kerak."
    ],
    topics: ["travma"]
  },
  {
    slug: "dori-sumkasi",
    title: "Dori sumkasi",
    icon: "medication",
    cat: "Dorilar",
    tone: "tox",
    what: "Brigada dori vositalari va in'ektsiya materiallari joylashgan tartiblangan sumka yoki yashiklar.",
    when: [
      "Har chaqiruvda tayyor turadi",
      "Yurak, nafas, allergiya, talvasa, og'riq va boshqa holatlarda protokol bo'yicha qo'llaniladi"
    ],
    how: [
      "Chaqiruv boshlanishida sumka to'liqligini va ro'yxatga muvofiqligini tekshiring.",
      "Dorini tanlashda nomi, konsentratsiyasi va yaroqlilik muddatini o'qing.",
      "Dozani protokol bo'yicha hisoblang va imkon bo'lsa hamkasb bilan tekshiring.",
      "Berish yo'li va vaqtini hujjatlashtiring."
    ],
    care: [
      "«5 ta to'g'ri» qoidasi: to'g'ri bemor, dori, doza, yo'l va vaqt.",
      "Yaroqlilik muddati va saqlash haroratini kuzating.",
      "Qat'iy hisobdagi dorilar alohida tartibda saqlanadi va qayd etiladi.",
      "Ampulani ishlatishdan oldin nomini yana bir bor o'qing."
    ],
    topics: ["shok", "yurak"]
  },
  {
    slug: "pulsoksimetr",
    title: "Pulsoksimetr",
    icon: "monitor_heart",
    cat: "Monitoring",
    tone: "life",
    what: "Barmoq (yoki quloq) orqali qonning kislorod bilan to'yinganligi (SpO₂) va pulsni o'lchaydigan kichik asbob.",
    when: [
      "Nafas qiyinligi, hushdan ketish, shok, zaharlanish, insult",
      "ABCDE baholash tarkibida deyarli har bir bemorda"
    ],
    how: [
      "Barmoqni tozalang; lak yoki sun'iy tirnoq bo'lsa olib tashlang.",
      "Datchikni qo'ying va to'lqin barqaror bo'lguncha kuting.",
      "SpO₂ va pulsni o'qing, bemor ahvoli bilan solishtiring."
    ],
    care: [
      "Sovuq, shok, harakat, kuchli yorug'lik yoki lak ko'rsatkichni buzadi.",
      "Is gazi (CO) zaharlanishida noto'g'ri yuqori ko'rsatishi mumkin.",
      "Ko'rsatkich klinik holatga mos kelmasa — bemor ahvoliga ishoning."
    ],
    topics: ["nafas", "zaharlanish", "insult"]
  },
  {
    slug: "ekg-monitor",
    title: "EKG monitor",
    icon: "ecg_heart",
    cat: "Monitoring",
    tone: "heart",
    what: "Yurakning elektr faolligini yozib ko'rsatadigan qurilma: monitor (3–5 elektrod) va 12 tarmoqli EKG.",
    when: [
      "Ko'krak og'rig'i, aritmiya, hushdan ketish, shok, zaharlanish",
      "Yurak to'xtashida ritmni aniqlash",
      "O'tkir koronar sindrom (ACS) shubhasida 12 tarmoqli EKG"
    ],
    how: [
      "Terini tozalang va quriting; elektrodlarni ko'rsatilgan joylarga yopishtiring.",
      "Tarmoqlar tartibini tekshiring.",
      "Bemor tinch va harakatsiz bo'lsin.",
      "Yozuvni saqlang va sifatini tekshiring; shovqin bo'lsa qayta yozing."
    ],
    care: [
      "Harakat va titroq artefaktlari noto'g'ri talqinga olib keladi.",
      "Ritmni har doim klinik holat (puls bormi?) bilan birga baholang.",
      "STEMI shubhasida darhol shifoxonaga xabar bering."
    ],
    topics: ["yurak", "insult"]
  },
  {
    slug: "turniket",
    title: "Turniket",
    icon: "bloodtype",
    cat: "Travma",
    tone: "heart",
    what: "Qo'l-oyoqdagi hayot uchun xavfli qon ketishini arteriyani siqib to'xtatuvchi vosita (tasmali, vintli yoki kamarli).",
    when: [
      "Qo'l-oyoqdagi massiv qon ketish, to'g'ridan-to'g'ri bosim yordam bermaganda",
      "Ko'p jabrlanuvchili hodisalarda"
    ],
    how: [
      "Jarohatdan taxminan 5–8 sm yuqoriga (bo'g'imga emas) qo'ying.",
      "Qon ketishi to'xtaguncha tortib, mahkamlang.",
      "Qo'yilgan vaqtni yozing va bemorga yoki kartaga belgilang.",
      "Uzoq qismda pulsni tekshiring (yo'qolishi kerak); zarur bo'lsa ikkinchi turniket qo'ying."
    ],
    care: [
      "Turniketni odatda shifoxonada mutaxassis yechadi; brigada uni faqat protokol ruxsat bersa yechadi.",
      "Og'riq bo'ladi — bu tabiiy.",
      "Vaqt eng muhim ma'lumot: qo'yilgan vaqtni doim yozing.",
      "Tezkor transport — uzoq ischemik zararning oldini oladi."
    ],
    topics: ["travma", "shok"]
  }
];

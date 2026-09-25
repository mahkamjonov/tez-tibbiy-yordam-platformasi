/* Test savollari.
 *
 * Format:  q(mavzu, "Savol", ["TO'G'RI javob", "xato 1", "xato 2", "xato 3"], "Izoh")
 * DIQQAT: variantlar ro'yxatida BIRINCHI javob — to'g'ri javob. Saytda variantlar tasodifiy aralashtiriladi.
 *
 * Mavzu kalitlari: yurak · nafas · insult · shok · akusherlik · zaharlanish · bola · travma · brigada · dorilar
 * Savollar ta'limiy; attestatsiya bazasidagi savollar bilan almashtirilishi yoki to'ldirilishi mumkin.
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

TTY.data.testTopics = [
  { key: "yurak",       label: "Yurak",        icon: "cardiology",        tone: "heart",  link: "#/maktab/yurak" },
  { key: "nafas",       label: "Nafas",        icon: "pulmonology",       tone: "breath", link: "#/maktab/nafas" },
  { key: "insult",      label: "Insult",       icon: "neurology",         tone: "brain",  link: "#/maktab/insult" },
  { key: "shok",        label: "Shok",         icon: "health_and_safety", tone: "life",   link: "#/maktab/shok" },
  { key: "akusherlik",  label: "Akusherlik",   icon: "pregnant_woman",    tone: "mother", link: "#/maktab/akusherlik" },
  { key: "zaharlanish", label: "Zaharlanish",  icon: "warning_amber",     tone: "tox",    link: "#/maktab/zaharlanish" },
  { key: "bola",        label: "Bolalar",      icon: "child_care",        tone: "child",  link: "#/maktab/bola" },
  { key: "travma",      label: "Travma",       icon: "healing",           tone: "trauma", link: "#/maktab/travma" },
  { key: "brigada",     label: "Jihozlar",     icon: "medical_services",  tone: "life",   link: "#/brigada" },
  { key: "dorilar",     label: "Dorilar",      icon: "medication",        tone: "tox",    link: "#/dorilar" }
];

(function () {
  const list = (TTY.data.questions = []);
  const q = (topic, text, options, explain) => list.push({ id: topic + "-" + (list.length + 1), topic, q: text, options, explain });

  /* ── YURAK ── */
  q("yurak", "Kattalarda bazaviy reanimatsiyada ko'krak kompressiyasi va puflash nisbati qanday?",
    ["30:2", "15:2", "5:1", "30:1"],
    "Kattalarda 30 ta kompressiya va 2 ta puflash (30:2). Kompressiya pauzalari imkon qadar qisqa bo'lishi kerak.");
  q("yurak", "Kattalarda ko'krak kompressiyasining to'g'ri chuqurligi va chastotasi qaysi?",
    ["5–6 sm va 100–120/daq", "3–4 sm va 60–80/daq", "5–6 sm va 60–80/daq", "2–3 sm va 120–140/daq"],
    "Sifatli kompressiya: chuqurlik 5–6 sm, chastota 100–120/daq, har bosishdan so'ng ko'krak to'liq yozilishi.");
  q("yurak", "AED ritmni tahlil qilayotgan paytda nima qilinadi?",
    ["Hech kim bemorga tegmaydi", "Kompressiya to'xtovsiz davom etadi", "Bemor tashiladi", "Puflash davom etadi"],
    "Tahlil vaqtida harakat va tegish qurilmani chalg'itadi. Razryad yoki «razryad kerak emas» xabaridan so'ng kompressiya darhol davom ettiriladi.");
  q("yurak", "Qaysi ritmlarda defibrillyatsiya (elektr razryad) ko'rsatilgan?",
    ["Qorinchalar fibrillyatsiyasi va pulssiz qorincha taxikardiyasi", "Asistoliya va PEA", "Sinusli bradikardiya", "Barqaror bo'lmachalar fibrillyatsiyasi"],
    "Shokka yaroqli ritmlar — VF va pulssiz VT. Asistoliya va PEA da razryad berilmaydi: sifatli CPR va sababni bartaraf etish.");
  q("yurak", "Reanimatsiya davomida ritmni qayta baholash va kompressiya qiluvchini almashtirish odatda qanday oraliqda bajariladi?",
    ["Har 2 daqiqada", "Har 30 soniyada", "Har 5 daqiqada", "Har 10 daqiqada"],
    "Har ~2 daqiqada ritm baholanadi va kompressiya qiluvchi almashtiriladi — charchoq sifatni pasaytiradi.");
  q("yurak", "Quyidagilardan qaysilari yurak to'xtashining qaytariladigan sabablari (4G / 4T) qatoriga kiradi?",
    ["Gipoksiya va gipovolemiya", "Sinusli taxikardiya", "Yengil arterial gipertenziya", "Qandli diabet tarixi"],
    "4G: gipoksiya, gipovolemiya, gipo-/giperkaliemiya, gipo-/gipertermiya. 4T: tromboz, tamponada, toksinlar, taranglashgan pnevmotoraks.");
  q("yurak", "Tibbiy bilimga ega bo'lmagan guvoh yurak to'xtashini aniqlagach nima qilishi kerak?",
    ["103 ga xabar berib, ko'krak kompressiyasini boshlaydi", "Bemorga suv ichiradi", "Tomir urishini 1 daqiqa izlaydi", "Tez yordam kelguncha kutadi"],
    "Normal nafas bo'lmasa: 103 ga xabar berish va kompressiyani darhol boshlash; AED bo'lsa keltirish.");

  /* ── NAFAS ── */
  q("nafas", "Kattalarda me'yoriy nafas chastotasi qanday?",
    ["12–20 marta/daq", "30–40 marta/daq", "6–8 marta/daq", "24–30 marta/daq"],
    "Kattalarda dam olish holatida me'yor ~12–20/daq. 20 dan ko'p yoki 10 dan kam bo'lsa — baholashni chuqurlashtiring.");
  q("nafas", "Bemor bir-ikki so'zdan keyin to'xtab gapiryapti, yordamchi mushaklar ishlayapti. Bu nimani bildiradi?",
    ["Og'ir nafas yetishmovchiligi belgisi", "Yengil holat", "Me'yor", "Faqat isitma belgisi"],
    "To'liq gap ayta olmaslik va yordamchi mushaklar ishtiroki — og'ir nafas yetishmovchiligining ishonchli belgilari.");
  q("nafas", "Nafas yetarli bo'lmagan kattalarda BVM bilan ventilyatsiya chastotasi taxminan qancha?",
    ["~10 marta/daq", "~30 marta/daq", "~60 marta/daq", "~2 marta/daq"],
    "Kattalarda taxminan 10 nafas/daq (har ~6 soniyada bitta), ko'krak ko'tarilguncha ~1 soniya.");
  q("nafas", "Qaysi zaharlanishda pulsoksimetr noto'g'ri yuqori (me'yoriy) SpO₂ ko'rsatishi mumkin?",
    ["Uglerod oksidi (is gazi)", "Sirka kislotasi", "Etil spirti", "Oziq-ovqat zaharlanishi"],
    "Karboksigemoglobin oksigemoglobinga o'xshab o'qiladi, shuning uchun SpO₂ aldaydi — is gazida bemor holatiga ishoning va 100% kislorod bering.");
  q("nafas", "Surunkali obstruktiv o'pka kasalligi (KOAB) bo'lgan bemorda kislorod terapiyasining odatiy SpO₂ maqsadi qanday?",
    ["88–92%", "94–98%", "100%", "80–85%"],
    "KOAB da ortiqcha kislorod gipoventilyatsiya xavfini oshiradi, shuning uchun maqsad odatda 88–92%.");
  q("nafas", "BVM bilan puflaganda ko'krak ko'tarilmasa, birinchi navbatda nima qilinadi?",
    ["Nafas yo'li holati va niqob germetikligini qayta tekshiriladi", "Puflash kuchi keskin oshiriladi", "Ventilyatsiya to'xtatiladi", "Bemor yon tomonga burib qo'yiladi"],
    "Ko'krak ko'tarilmasa: bosh/jag' holati, niqob germetikligi va begona jism yoki sekretsiyani tekshiring; ortiqcha kuch oshqozon shishishiga olib keladi.");

  /* ── INSULT ── */
  q("insult", "FAST qisqartmasidagi «F» nimani bildiradi?",
    ["Face — yuz", "Fever — isitma", "Fast — tezlik", "Fall — yiqilish"],
    "F — yuz (tabassum qilganda bir tomon osiladi), A — qo'l, S — nutq, T — vaqt.");
  q("insult", "Insult shubhasida qaysi laborator ko'rsatkichni tekshirish majburiy?",
    ["Qon glyukozasi", "Gemoglobin", "Xolesterin", "Siydik zichligi"],
    "Gipoglikemiya insultga o'xshash belgilar beradi — glyukozani tekshirish davoni to'g'ri tanlashga yordam beradi.");
  q("insult", "Insult shubhasi bo'lgan bemorga og'iz orqali nima beriladi?",
    ["Hech narsa — yutish buzilgan bo'lishi mumkin", "Aspirin chaynab", "Bir stakan suv", "Qon bosimi tabletkasi"],
    "Yutish buzilishi aspiratsiya xavfini tug'diradi; aspirin esa qon ketishi (gemorragik insult) istisno qilinmaguncha berilmaydi.");
  q("insult", "Insultda tromboliz uchun odatiy «oltin vaqt» oynasi (belgilar boshlanganidan) qancha?",
    ["≈ 4,5 soatgacha", "24 soat", "1 hafta", "10 daqiqa"],
    "Odatda ~4,5 soatgacha; ba'zi hollarda oyna kengayishi mumkin — qarorni shifoxona shifokori qabul qiladi. Shuning uchun boshlanish vaqtini aniq yozish kerak.");
  q("insult", "Nima uchun insult belgilari boshlangan aniq vaqt qayd etiladi?",
    ["Davo usuli (tromboliz/trombektomiya) shu vaqtga bog'liq", "Faqat hujjat to'ldirish uchun", "Transport yo'lini tanlash uchun", "Bosimni o'lchash uchun"],
    "Davolash imkoniyati va turi belgilar boshlanganidan o'tgan vaqtga bog'liq — bu eng muhim ma'lumotlardan biri.");
  q("insult", "Insult shubhasi bo'lgan bemor qayerga olib boriladi?",
    ["KT/MRT va faol davolash imkoniyati bor insult markaziga", "Eng yaqin poliklinikaga", "Uyda qoldiriladi", "Oilaviy shifokorga"],
    "Eng yaqin emas, eng mos shifoxona — tomografiya va insultni faol davolash imkoniyati bor markaz; oldindan xabar beriladi.");

  /* ── SHOK ── */
  q("shok", "Anafilaktik shokda birinchi navbatdagi dori qaysi?",
    ["Adrenalin (mushak ichiga)", "Deksametazon", "Furosemid", "Diazepam"],
    "Anafilaksiyada birinchi tanlov — adrenalin mushak ichiga. Steroid va antigistaminlar yordamchi, adrenalin o'rnini bosmaydi.");
  q("shok", "Shok indeksi qanday hisoblanadi?",
    ["Yurak urish chastotasi ÷ sistolik bosim", "Sistolik ÷ diastolik bosim", "Nafas chastotasi ÷ puls", "Diastolik bosim ÷ puls"],
    "Shok indeksi = YUCHS ÷ sistolik bosim. Me'yorda ~0,5–0,7; 1 dan yuqori bo'lsa jiddiy shok ehtimoli katta.");
  q("shok", "Anafilaksiyada adrenalin odatda qayerga mushak ichiga kiritiladi?",
    ["Sonning old-tashqi yuzasiga", "Dumbaga", "Yelka orqasiga", "Qorin devoriga"],
    "Sonning old-tashqi yuzasi (lateral keng mushak) — tez so'rilish uchun tanlanadigan joy.");
  q("shok", "Tashqi massiv qon ketishi tufayli gipovolemik shokda birinchi navbatdagi harakat qaysi?",
    ["Qon ketishini to'xtatish (bosim, turniket)", "Ko'p miqdorda suyuqlik quyish", "Bemorni sovutish", "Og'iz orqali suv berish"],
    "Avval manbani nazoratga olish: bosim, turniket. Suyuqlikni qon ketishi to'xtamay ko'p yuborish holatni yomonlashtirishi mumkin.");
  q("shok", "Kardiogen shokda suyuqlikni ko'p yuborish nima uchun xavfli?",
    ["O'pka shishini kuchaytirishi mumkin", "Bosimni pasaytiradi", "Pulsni sekinlashtiradi", "Qonni quyultiradi"],
    "Yurak nasos vazifasini bajara olmaydi — ortiqcha suyuqlik o'pkada to'planib, shishni kuchaytiradi.");
  q("shok", "Anafilaksiyada bemor yaxshilangandek ko'ringandan keyin nima qilinadi?",
    ["Kuzatuv ostida shifoxonaga olib boriladi (bifazik reaksiya xavfi)", "Uyda qoldiriladi", "Kuzatuvsiz jo'natiladi", "Hech qanday chora ko'rilmaydi"],
    "Bir necha soatdan keyin ikkinchi to'lqin (bifazik reaksiya) bo'lishi mumkin — shifoxonada kuzatish zarur.");

  /* ── AKUSHERLIK ── */
  q("akusherlik", "Homilador ayolni transport paytida qaysi holatda tashish kerak?",
    ["Chap yonboshda", "O'ng yonboshda", "Tekis chalqancha", "Qorni bilan yotgan holatda"],
    "Chap yonbosh holati pastki kavak vena bosilishining (aortokaval kompressiya) oldini oladi va bosimni barqaror tutadi.");
  q("akusherlik", "Preeklampsiyada qon bosimining diagnostik chegarasi qanday (homiladorlikning 20-haftasidan keyin)?",
    ["≥ 140/90 mm sim.ust.", "≥ 100/60 mm sim.ust.", "≥ 200/120 mm sim.ust.", "< 90/60 mm sim.ust."],
    "20-haftadan keyin AB ≥ 140/90 preeklampsiya belgisi; bosh og'rig'i, ko'z xiralashishi va qorin yuqorisidagi og'riq og'irlik belgilaridir.");
  q("akusherlik", "Eklampsiya xurujida asosiy birinchi yordam qanday?",
    ["Yon holat va nafas yo'lini himoya qilish", "Og'ziga qattiq narsa solish", "Kuch bilan ushlab turish", "Sovuq suv sepish"],
    "Talvasa paytida jarohatdan himoya, nafas yo'li va yon holat; talvasaga qarshi davo (magniy preparati) — protokol bo'yicha.");
  q("akusherlik", "Tug'ruqdan keyingi qon ketishda birinchi navbatdagi mexanik chora qaysi?",
    ["Bachadon massaji", "Kindikni kesish", "Ayolni o'tqizish", "Ichimlik berish"],
    "Pastki qorindan bachadonni aylanma harakat bilan massaj qilish uni qisqartiradi; tomir yo'li va dorilar protokol bo'yicha.");
  q("akusherlik", "Yangi tug'ilgan chaqaloqqa dastlabki parvarish nimalardan iborat?",
    ["Quritish, isitish va nafasini baholash", "Sovuq suvda yuvish", "Kuchli silkitish", "Ochiq holda qoldirish"],
    "Chaqaloqni darhol quriting va isiting (teri-teriga), nafas va yurak urishini baholang; Apgar 1 va 5 daqiqada.");

  /* ── ZAHARLANISH ── */
  q("zaharlanish", "Zaharlanish holatida dastlab qaysi uchta savol berilishi kerak?",
    ["Nima? Qancha? Qachon?", "Kim? Qayerda? Nega?", "Rangi? Hidi? Ta'mi?", "Yoshi? Vazni? Bo'yi?"],
    "Moddaning nomi, miqdori va qabul qilingan vaqt — davo va antidot tanlash uchun asosiy ma'lumot.");
  q("zaharlanish", "Is gazidan (CO) zaharlanishda kislorod qanday beriladi?",
    ["100% kislorod, yuqori oqim bilan", "Kislorod berilmaydi", "Faqat SpO₂ 80% dan past bo'lsa", "Past oqimli kanyula bilan"],
    "Kislorod karboksigemoglobinning parchalanishini tezlashtiradi. SpO₂ aldashi mumkinligi sababli, ko'rsatkichdan qat'i nazar 100% kislorod beriladi.");
  q("zaharlanish", "Ongi buzilgan zaharlangan bemorda qusdirishga urinish...",
    ["Taqiqlanadi (aspiratsiya xavfi)", "Majburiy", "Sut bilan bajariladi", "Tuzli suv bilan bajariladi"],
    "Ongi buzilgan bemorda qusuq nafas yo'llariga tushishi mumkin; kislota, ishqor va neft mahsulotlarida ham qusdirish taqiqlangan.");
  q("zaharlanish", "Opioid zaharlanishiga xos belgilar qaysi?",
    ["Nafas sustlashishi, tor qorachiqlar, uyquchanlik", "Tez nafas va kengaygan qorachiqlar", "Isitma va toshma", "Yuqori bosim va yuz qizarishi"],
    "Opioid toksidromi: nafas depressiyasi, miozis (tor qorachiq) va sedatsiya.");
  q("zaharlanish", "Opioid zaharlanishining antidoti qaysi?",
    ["Naloksone", "Atropin", "Diazepam", "Furosemid"],
    "Naloksone opioid retseptorlarini to'sadi. Dozalash — protokol bo'yicha; ta'siri qisqa bo'lishi mumkin, shuning uchun kuzatuv davom etadi.");
  q("zaharlanish", "Dori yoki kimyoviy modda qadog'ini brigadaga topshirish nimaga xizmat qiladi?",
    ["Moddani aniqlash va to'g'ri davo tanlashga", "Faqat chiqindi yig'ishga", "Faqat isbot uchun", "Hech narsaga"],
    "Qadoq moddaning nomi va konsentratsiyasini ko'rsatadi — antidot va davo taktikasini tez tanlashga yordam beradi.");

  /* ── BOLA ── */
  q("bola", "1 yoshgacha chaqaloqda begona jism nafas yo'lini to'sganda nima qilinadi?",
    ["5 marta orqaga urish + 5 marta ko'krak turtkisi", "Qorin turtkilari", "Boshini pastga tutib silkitish", "Barmoq bilan ko'r-ko'rona tozalash"],
    "Chaqaloqda qorin turtkilari qo'llanilmaydi: 5 orqaga urish va 5 ko'krak turtkisi almashtirib bajariladi.");
  q("bola", "Bolalarda ko'krak kompressiyasining chuqurligi qanday bo'lishi kerak?",
    ["Ko'krak old-orqa o'lchamining taxminan 1/3 qismi", "Ko'krak o'lchamining yarmi", "Taxminan 1 sm", "Taxminan 10 sm"],
    "Chuqurlik ko'krak old-orqa o'lchamining ≈ 1/3 qismi; chastota kattalardagidek 100–120/daq.");
  q("bola", "Pediatrik baholash uchburchagi (PAT) qaysi uch tarkibiy qismdan iborat?",
    ["Tashqi ko'rinish, nafas mexanikasi, teri rangi va qon aylanishi", "Yosh, vazn, bo'y", "Harorat, bosim, puls", "Ovqat, uyqu, o'yin"],
    "PAT — 30 soniyada bolaning holatini tez baholash usuli.");
  q("bola", "Isitma talvasasida birinchi yordam qanday?",
    ["Yon holat, xavfsizlik va vaqtni belgilash", "Og'ziga qoshiq solish", "Sovuq suvga tushirish", "Silkitib uyg'otish"],
    "Og'ziga narsa solinmaydi. Talvasa 5 daqiqadan oshsa — favqulodda holat, talvasaga qarshi davo protokol bo'yicha.");
  q("bola", "Bolalarda dori dozasi asosan nimaga qarab hisoblanadi?",
    ["Tana vazniga (mg/kg)", "Faqat yoshiga", "Kattalar dozasining yarmi", "Bo'yiga"],
    "Bolalarda doza asosan vaznga (mg/kg) qarab hisoblanadi va ikkinchi xodim bilan tekshiriladi.");

  /* ── TRAVMA ── */
  q("travma", "Massiv qon ketishi bo'lgan jabrlanuvchida birinchi harakat qaysi?",
    ["To'g'ridan-to'g'ri qattiq bosim yoki turniket", "Bo'yin yoqasi qo'yish", "Kislorod boshlash", "Og'riqsizlantirish"],
    "X-ABCDE / MARCH: avval massiv qon ketishni to'xtatish — u eng tez o'limga olib keladi.");
  q("travma", "Turniket qo'yilganda qaysi ma'lumot majburiy yoziladi?",
    ["Qo'yilgan aniq vaqt", "Faqat qo'yilgan joyi", "Hech narsa", "Turniket rangi"],
    "Vaqt jarrohning davo qarori uchun muhim — bemorga yoki kartaga aniq vaqt yozib qo'yiladi.");
  q("travma", "Umurtqa jarohati shubhasida nafas yo'lini ochishning to'g'ri usuli qaysi?",
    ["Jag'ni oldinga surish", "Boshni keskin orqaga tashlash", "Bemorni o'tqizish", "Boshni ko'krakka bukish"],
    "Jag'ni oldinga surish bo'yin umurtqasini kam harakatlantiradi.");
  q("travma", "Ochiq ko'krak jarohatida qaysi bog'ich qo'llanadi?",
    ["Havo o'tkazmaydigan okklyuziv (ventilli) bog'ich", "Oddiy doka bilan qattiq siqib bog'lash", "Jarohatni doka bilan to'ldirish", "Bog'ich qo'yilmaydi"],
    "Okklyuziv bog'ich havo kirishini to'sadi; ventil esa havo to'planib qolmasligiga yordam beradi.");
  q("travma", "Travmada gipotermiya nima uchun xavfli?",
    ["Qon ivishini buzadi va o'limni oshiradi", "Faqat noqulaylik tug'diradi", "Og'riqni yo'qotadi", "Bosimni oshiradi"],
    "Sovish, atsidoz va koagulopatiya «o'lim uchligi»ni tashkil qiladi — bemorni doimo isiting.");

  /* ── BRIGADA (jihozlar) ── */
  q("brigada", "AED elektrodlari kattalarda odatda qayerga yopishtiriladi?",
    ["O'ng o'mrov osti va chap qo'ltiq osti", "Ikkalasi ham orqaga", "Qorin ustiga", "Bosh ikki tomoniga"],
    "Klassik joylashuv: o'ng o'mrov ostida va chap qo'ltiq ostida (yurak cho'qqisi sohasida).");
  q("brigada", "Kislorod ballon bilan ishlashda xavfsizlik qoidasi qaysi?",
    ["Ochiq olov, chekish va yog'/moydan uzoq tutish", "Ballonni isitgich yonida saqlash", "Ventilni moy bilan surtish", "Ballonni yiqitib qo'yish"],
    "Kislorod yonishni kuchaytiradi; moy va yog' bilan aloqada o'z-o'zidan yonishi mumkin.");
  q("brigada", "Bir marta so'rish (aspiratsiya) odatda necha soniyadan oshmasligi kerak?",
    ["10–15 soniya", "1 daqiqa", "3 daqiqa", "Cheklov yo'q"],
    "Uzoq so'rish gipoksiyaga olib keladi; qisqa seanslar bilan so'rib, oraliqda kislorod berish kerak.");
  q("brigada", "BVM da «C-E» usuli nimani bildiradi?",
    ["Niqob va jag'ni ushlashda barmoqlar holatini", "Kompressiya va ekspiratsiya nisbatini", "Kislorod va EKG ulanishini", "Chaqiruv va evakuatsiyani"],
    "C — bosh va ko'rsatkich barmoq niqobni bosadi; E — qolgan barmoqlar jag' suyagini ko'taradi.");
  q("brigada", "Vakuum shina va matrasning asosiy afzalligi nima?",
    ["Havo so'rilganda qotib, a'zo shakliga moslashadi", "Isitiladi", "Elektr bilan ishlaydi", "Suv bilan to'ldiriladi"],
    "Granulalar havo so'rilganda qotadi va jarohatlangan qismni qulay, harakatsiz mahkamlaydi.");
  q("brigada", "Bo'yin yoqasi bilan umurtqani to'liq immobilizatsiya qilish mumkinmi?",
    ["Yo'q — bosh mahkamlagich va taxta bilan birga qo'llanadi", "Ha, yoqa yetarli", "Ha, ikkita yoqa bilan", "Umuman kerak emas"],
    "Yoqa bo'yinni cheklaydi, lekin to'liq immobilizatsiya uchun bosh mahkamlagich va qattiq taxta yoki vakuum matras bilan birga ishlatiladi.");

  /* ── DORILAR ── */
  q("dorilar", "Nitroglitserinni bermaslik kerak bo'lgan holat qaysi?",
    ["Past qon bosimi yoki yaqinda PDE-5 ingibitori (sildenafil) qabul qilgan", "Yengil yo'tal", "Tish og'rig'i", "Ich ketishi"],
    "Nitrat va PDE-5 ingibitorlari birgalikda keskin gipotenziya beradi; past bosimda nitrat kollapsga olib kelishi mumkin.");
  q("dorilar", "Aspirin o'tkir koronar sindrom shubhasida qanday qo'llaniladi?",
    ["Chaynab yutiladi (tez so'rilish uchun)", "Faqat tomir ichiga", "Faqat ovqatdan 2 soat keyin", "Umuman berilmaydi"],
    "Chaynab yutish trombotsit agregatsiyasini tezroq to'sadi. Qarshi ko'rsatmalar (allergiya, qon ketish) tekshiriladi; doza — protokol bo'yicha.");
  q("dorilar", "Salbutamol qaysi dori guruhiga kiradi?",
    ["Selektiv β₂-adrenomimetik (bronxodilatator)", "M-xolinoblokator", "Diuretik", "Antiaritmik"],
    "Salbutamol bronxlarni kengaytiradi; tipik nojo'ya ta'siri — tremor va taxikardiya.");
  q("dorilar", "Atropin qaysi holatda ko'rsatilgan?",
    ["Simptomatik bradikardiya", "Qorinchalar fibrillyatsiyasi", "Ichki qon ketish", "Gipoglikemiya"],
    "Atropin vagus ta'sirini to'sib yurak urishini tezlashtiradi. Kichik doza paradoksal bradikardiya berishi mumkin.");
  q("dorilar", "Furosemidni qaysi holatda bermaslik kerak?",
    ["Gipovolemiya va past bosim (shok)", "Kardiogen o'pka shishida", "Yurak yetishmovchiligi shishlarida", "Bosim yuqori o'pka shishida"],
    "Furosemid suyuqlikni chiqaradi — gipovolemiya va shokda holatni yomonlashtiradi.");
  q("dorilar", "Diazepamning eng xavfli nojo'ya ta'siri qaysi?",
    ["Nafas depressiyasi", "Bronxospazm", "Yuqori isitma", "Giperglikemiya"],
    "Benzodiazepinlar nafasni susaytiradi — ayniqsa tez kiritilganda yoki boshqa sedativlar/alkogol bilan. BVM va kislorod tayyor bo'lsin.");
  q("dorilar", "Dori berishdagi «5 ta to'g'ri» qoidasi nimalardan iborat?",
    ["To'g'ri bemor, dori, doza, yo'l va vaqt", "To'g'ri shifokor, hamshira, dori, joy va soat", "To'g'ri narx, muddat, qadoq, rang va hid", "To'g'ri yosh, vazn, bo'y, jins va tarix"],
    "Har dori berishdan oldin: bemor, dori, doza, yo'l, vaqt — xatoning oldini oladi.");
})();

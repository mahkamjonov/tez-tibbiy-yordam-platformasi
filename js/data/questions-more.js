/* Qo'shimcha test savollari (Qalqon testi uchun har qalqonga 10 tagacha savol).
 * Format questions.js dagi bilan bir xil: birinchi variant — TO'G'RI javob.
 */
(function () {
  const list = TTY.data.questions;
  const q = (topic, text, options, explain) => list.push({ id: topic + "-" + (list.length + 1), topic, q: text, options, explain });

  /* ── YURAK (+3) ── */
  q("yurak", "Bemor hushsiz va normal nafas olmayapti. Birinchi navbatdagi harakat nima?",
    ["Tez yordam chaqirish va ko'krak kompressiyasini boshlash", "Suv ichirish", "Bemorni o'tqazish", "Tez yordam kelguncha kutish"],
    "Hushsiz va normal nafas olmayotgan odamda yurak to'xtagan deb hisoblanadi: 103 ga xabar berib, darhol kompressiyani boshlang.");
  q("yurak", "Har bosishdan keyin ko'krak nima uchun to'liq yozilishi (qaytishi) kerak?",
    ["Yurak qonga to'lishi uchun", "Bemor og'rimasligi uchun", "Qovurg'alar sinmasligi uchun", "Sanash oson bo'lishi uchun"],
    "To'liq qaytish yurak bo'shliqlarining qonga to'lishini ta'minlaydi, keyingi bosishda qon samaraliroq haydaladi.");
  q("yurak", "Kompressiyalar orasidagi pauza (uzilish) imkon qadar qanday bo'lishi kerak?",
    ["Qisqa — 10 soniyadan oshmasin", "1–2 daqiqagacha bo'lishi mumkin", "Cheklov yo'q", "Har 30 soniyada 1 daqiqa dam"],
    "Har uzilishda miya va yurak qon ta'minoti to'xtaydi — pauzalar qisqa bo'lishi kerak.");

  /* ── NAFAS (+4) ── */
  q("nafas", "Ongi joyidagi, nafasi qiyin bemorni qaysi holatga keltirgan ma'qul?",
    ["Yarim o'tirgan (Fauler)", "Tekis chalqancha", "Qorni bilan", "Boshi pastda"],
    "Yarim o'tirgan holatda diafragma erkin harakat qiladi va nafas olish osonlashadi.");
  q("nafas", "Astma xurujida aholi tomonidan qanday yordam beriladi?",
    ["Qulay o'tirg'izish, inhalyatordan foydalanishga yordam berish, 103", "Yotqizib qo'yish", "Suv ichishga majburlash", "Hech narsa qilmay kutish"],
    "Bemorni tinchlantirib, o'tirg'izing, inhalyatorini ishlatishiga yordam bering; og'ir bo'lsa 103.");
  q("nafas", "Stridor (baland «hushtak»li nafas) nimani bildiradi?",
    ["Yuqori nafas yo'lining torayganini", "O'pka shishi boshlanganini", "Yurak aritmiyasini", "Isitmani"],
    "Stridor — yuqori nafas yo'li to'silishining (shish, begona jism) xavfli belgisi.");
  q("nafas", "Pulsoksimetr ko'rsatkichi qachon ishonchsiz bo'lishi mumkin?",
    ["Qo'l sovuq yoki nam, lak, shok holatida", "Bemor yosh bo'lsa", "Bemor yotgan bo'lsa", "Kunduzi o'lchanganda"],
    "Sovuq, shok, harakat, lak va boshqa omillar ko'rsatkichni buzadi; bemor ahvoliga ishoning.");

  /* ── INSULT (+4) ── */
  q("insult", "Insult belgilarida qon bosimini o'zboshimchalik bilan tushirish...",
    ["Xavfli — faqat protokol bo'yicha qilinadi", "Majburiy", "Har doim tavsiya etiladi", "Faqat aspirin bilan"],
    "Insultda bosimni keskin tushirish miya qon ta'minotini yomonlashtirishi mumkin.");
  q("insult", "FAST dagi «S» nimani bildiradi?",
    ["Speech — nutq", "Sugar — qand", "Stroke — insult", "Sleep — uyqu"],
    "F — yuz, A — qo'l, S — nutq, T — vaqt.");
  q("insult", "Belgilar bemor uxlab yotganda boshlangan bo'lsa, «boshlanish vaqti» sifatida nima yoziladi?",
    ["Bemor oxirgi marta sog' ko'ringan vaqt", "Uyg'ongan vaqt", "Chaqiruv vaqti", "Shifoxonaga yetib kelgan vaqt"],
    "Davo imkoniyatlarini baholash uchun «oxirgi sog' vaqt» olinadi.");
  q("insult", "BE-FAST dagi «B» va «E» nimani bildiradi?",
    ["Muvozanat (Balance) va ko'rish (Eyes)", "Qon bosimi va EKG", "Nafas va yurak", "Yonish va sovuq"],
    "BE-FAST: to'satdan muvozanat buzilishi va ko'rish o'zgarishi ham insult belgisi.");

  /* ── SHOK (+2) ── */
  q("shok", "Qaysi kapillyar to'lish vaqti shokni ko'rsatishi mumkin?",
    ["2 soniyadan uzoq", "1 soniyadan kam", "0,5 soniya", "Ahamiyati yo'q"],
    "Tirnoq bosilgach rangning 2 soniyadan uzoq qaytishi qon aylanishi buzilganini bildiradi.");
  q("shok", "Shokdagi bemor (nafas qiyin bo'lmasa) qanday holatga yotqiziladi?",
    ["Chalqancha, oyoqlari ko'tarilgan", "O'tirgan", "Tik turgan", "Qorni bilan"],
    "Oyoqlarni ko'tarish yurakka qaytuvchi qonni oshiradi; nafas qiyin yoki o'pka shishi bo'lsa — yarim o'tirgan holat.");

  /* ── AKUSHERLIK (+5) ── */
  q("akusherlik", "Tug'ruq paytida bola boshi chiqqach nima qilinadi?",
    ["Sekin qo'l bilan ushlab, tortmasdan nazorat qilinadi", "Boshidan tortiladi", "Kindik kesiladi", "Ayol turg'iziladi"],
    "Chaqaloqni tortish jarohat beradi — bosh va tana tabiiy chiqishiga imkon berib, nazorat qilinadi.");
  q("akusherlik", "Yangi tug'ilgan chaqaloqning kindigi haqida aholi uchun to'g'ri ko'rsatma qaysi?",
    ["Uni kesish shart emas — brigada kelguncha kutish mumkin", "Darhol qaychi bilan kesish", "Kuch bilan tortish", "Qattiq bog'lab tortish"],
    "Kindikni tibbiyot xodimi kesadi; uni tortish yoki o'zboshimchalik bilan kesish xavfli.");
  q("akusherlik", "Preeklampsiya belgilaridan biri qaysi?",
    ["Kuchli bosh og'rig'i va ko'z oldi xiralashishi", "Yengil yo'tal", "Bo'g'im og'rig'i", "Ishtaha ortishi"],
    "Yuqori bosim bilan birga bosh og'rig'i, ko'rish buzilishi va qorin yuqorisi og'rig'i — og'irlik belgilari.");
  q("akusherlik", "Eklampsiyada talvasaga qarshi davo (masalan, magniy preparati) qanday qo'llanadi?",
    ["Faqat protokol bo'yicha, tibbiyot xodimi tomonidan", "Har homilador ayolga", "Kerak emas", "Faqat og'iz orqali"],
    "Bu dori faqat ko'rsatma va monitoring ostida qo'llanadi.");
  q("akusherlik", "Tug'ruqdan keyin qon ketayotgan ayolga qanday yordam beriladi?",
    ["Yotqizib, isitib, bachadon massaji va shok belgilarini kuzatish", "Turg'izib yurgizish", "O'tqizib ichirish", "Sovutish"],
    "Massaj bachadonni qisqartiradi; ayol yotqizilib isitiladi, shok belgilari kuzatiladi.");

  /* ── ZAHARLANISH (+4) ── */
  q("zaharlanish", "Hushsiz, nafas oluvchi zaharlangan bemorga qanday holat beriladi?",
    ["Yon (tiklovchi) holat", "Chalqancha", "O'tirgan", "Qorni bilan"],
    "Yon holat qusuq nafas yo'llariga tushishining oldini oladi.");
  q("zaharlanish", "Is gazi (CO) zaharlanishining tipik belgilari qaysi?",
    ["Bosh og'rig'i, bosh aylanishi, ko'ngil aynishi", "Isitma va tomoq og'rig'i", "Faqat oyoq shishi", "Ko'z qichishi"],
    "Yopiq xonada bir necha kishida bir vaqtda bosh og'rig'i va bo'shashish — is gazidan shubhalaning.");
  q("zaharlanish", "Zaharlanishda «xalq usullari» (sut, tuzli suv va h.k.) haqida to'g'ri fikr?",
    ["Ishonchsiz va ba'zan xavfli", "Har doim yordam beradi", "Antidot o'rnini bosadi", "Majburiy"],
    "Bunday usullar zararni oshirishi va aspiratsiyaga olib kelishi mumkin — dispetcher ko'rsatmasiga amal qiling.");
  q("zaharlanish", "Fosfororganik birikmalar bilan zaharlanishda antidot qaysi?",
    ["Atropin", "Naloksone", "Diazepam", "Aspirin"],
    "Atropin xolinergik belgilarni (sekretsiya, bradikardiya) kamaytiradi; doza — protokol bo'yicha.");

  /* ── BOLA (+5) ── */
  q("bola", "Bolada nafas yo'q bo'lsa, kompressiyadan oldin nima qilinadi?",
    ["Nafas yo'lini ochib, boshlang'ich puflashlar beriladi", "Suv ichiriladi", "Isitma o'lchanadi", "Kutiladi"],
    "Bolalarda yurak to'xtashi ko'pincha nafas yetishmovchiligidan — puflashlar muhim.");
  q("bola", "Chaqaloqda ko'krak kompressiyasi qanday bajariladi?",
    ["Ikki barmoq (yoki ikki bosh barmoq) bilan", "Ikki qo'l kafti bilan", "Tirsak bilan", "Mushtlar bilan"],
    "Chaqaloqning ko'kragi kichik — ikki barmoq yoki ikki bosh barmoq bilan bosiladi.");
  q("bola", "1 yoshdan katta bolada tomoqqa tiqilgan jismda qanday usul qo'llanadi?",
    ["5 orqaga urish + 5 qorin turtkisi", "Faqat suv ichirish", "Silkitish", "Faqat kutish"],
    "Kattaroq bolada urish va qorin turtkilari (Geymlix) almashtirib bajariladi.");
  q("bola", "Bolada isitma talvasasi qancha davom etsa favqulodda hisoblanadi?",
    ["5 daqiqadan ortiq", "10 soniyadan ortiq", "30 soniyadan ortiq", "1 soatdan ortiq"],
    "5 daqiqadan uzoq yoki takrorlanuvchi talvasa — darhol 103.");
  q("bola", "Kasal bolani tinchlantirishda nima muhim?",
    ["Ota-ona yonida bo'lishi va xotirjam muloqot", "Bolani yolg'iz qoldirish", "Baland ovozda buyruq berish", "Kuch bilan ushlab turish"],
    "Yaqin odam va xotirjam ohang stress va nafas qiyinligini kamaytiradi.");

  /* ── TRAVMA (+5) ── */
  q("travma", "Ochiq singan suyakda birinchi harakat qaysi?",
    ["Jarohatni toza mato bilan yopib, shinalash", "Suyakni joyiga qaytarish", "Suyakni suv bilan ishqalab yuvish", "Qattiq siqib bog'lash"],
    "Suyakni to'g'rilash yoki ishqalash jarohatni og'irlashtiradi.");
  q("travma", "Bosh-bo'yin jarohati shubhasida bemorni ko'chirish qoidasi qaysi?",
    ["Faqat zarurat bo'lsa, bosh-bo'yin-tana bir o'qda", "Tez o'tqazish", "Boshidan tortish", "Silkitib turg'izish"],
    "Ko'chirish faqat xavf (yong'in va h.k.) bo'lganda va umurtqani bir o'qda saqlab bajariladi.");
  q("travma", "Ko'krak qafasiga sanchilgan jismga nisbatan nima qilinadi?",
    ["Sug'urilmaydi — atrofidan mahkamlanadi", "Darhol sug'uriladi", "Aylantirib olinadi", "Suv bilan yuviladi"],
    "Jism qon ketishini vaqtincha to'sib turishi mumkin; uni shifoxonada olishadi.");
  q("travma", "Chanoq jarohati shubhasida shok belgilari bor bemorda qaysi vosita qo'llanadi?",
    ["Chanoq bog'ichi", "Bo'yin yoqasi", "Turniket", "Kislorod niqobi"],
    "Chanoq bog'ichi chanoq hajmini kamaytirib, qon ketishini cheklaydi.");
  q("travma", "X-ABCDE dagi «X» nimani bildiradi?",
    ["Massiv (eksanguinatsion) qon ketish", "Xavfsizlik", "Xavf tahlili", "Xush"],
    "Massiv qon ketish eng tez o'ldirishi mumkin — u birinchi to'xtatiladi.");

  /* ── QON KETISH (10) ── */
  q("qon-ketish", "Kuchli tashqi qon ketishda birinchi harakat qaysi?",
    ["Jarohatga qattiq to'g'ridan-to'g'ri bosish", "Suv bilan yuvish", "Sovutish", "Ichirish"],
    "To'g'ridan-to'g'ri bosim — eng tez va samarali usul.");
  q("qon-ketish", "Bosimli bog'ich qonga to'lib ketsa nima qilinadi?",
    ["Olinmaydi, ustiga yana mato qo'yiladi", "Darhol olib tashlanadi", "Bog'ich yechilib, yangisi qo'yiladi", "Kutiladi"],
    "Olib tashlash hosil bo'lgan ivishni buzadi va qon ketishini qayta boshlaydi.");
  q("qon-ketish", "Turniket qo'l-oyoqda qayerga qo'yiladi?",
    ["Jarohatdan yuqoriga, bo'g'imga emas", "Aynan jarohat ustiga", "Bo'g'im ustiga", "Jarohatdan pastga"],
    "Jarohatdan taxminan 5–8 sm yuqoriga qo'yiladi.");
  q("qon-ketish", "Turniket qo'yilganda nima majburiy yoziladi?",
    ["Qo'yilgan aniq vaqt", "Faqat rangi", "Bemorning vazni", "Hech narsa"],
    "Vaqt jarroh davo qarori uchun muhim.");
  q("qon-ketish", "Qaysi belgilar qon yo'qotishdan kelib chiqqan shokni ko'rsatadi?",
    ["Oqargan sovuq-nam teri, tez puls, hushning chalg'ishi", "Qizargan quruq teri, sekin puls", "Yuqori bosim va isitma", "Faqat yo'tal"],
    "Bular qon yo'qotishga organizmning javobi va og'irlik belgisi.");
  q("qon-ketish", "Jarohatda sanchilgan jism qolgan bo'lsa nima qilinadi?",
    ["Sug'urilmaydi, atrofidan bosib mahkamlanadi", "Sug'urib tashlanadi", "Aylantiriladi", "Sovutiladi"],
    "Sug'urish qon ketishini kuchaytirishi mumkin.");
  q("qon-ketish", "Qon ketishi to'xtatilgach bemor bilan nima qilinadi?",
    ["Yotqizilib, ustini yopib isitiladi", "Yurgiziladi", "Sovutiladi", "Ovqatlantiriladi"],
    "Isitish shokning oldini oladi; ichirish yoki ovqat berish tavsiya etilmaydi.");
  q("qon-ketish", "Qon to'xtadimi deb bosimni tez-tez bo'shatish...",
    ["Qon ketishini qayta boshlashi mumkin — bo'shatilmaydi", "Shart", "Xavfsiz", "Tavsiya etiladi"],
    "Bosim qon to'xtaguncha yoki yordam kelguncha uzluksiz saqlanadi.");
  q("qon-ketish", "X-ABCDE tizimida qon ketishi qaysi o'rinda?",
    ["Eng birinchi (X)", "Oxirgi", "Nafasdan keyin", "Xushdan keyin"],
    "Massiv qon ketish har qanday boshqa bosqichdan oldin to'xtatiladi.");
  q("qon-ketish", "Ichki qon ketish shubhasini nima ko'rsatadi?",
    ["Qorin, ko'krak yoki son sohasida og'riq va shish, shok belgilari", "Faqat teri qichishi", "Yengil yo'tal", "Bosh og'rig'ining yo'qligi"],
    "Ichki qon ketish ko'rinmaydi — belgilar va mexanizmga qarab shubhalanish kerak.");

  /* ── ALLERGIYA (10) ── */
  q("allergiya", "Anafilaksiyada birinchi tanlov dori qaysi?",
    ["Adrenalin (mushak ichiga)", "Antigistamin tabletka", "Deksametazon", "Aspirin"],
    "Adrenalin hayotni saqlaydi; boshqa dorilar yordamchi.");
  q("allergiya", "Adrenalin avtoinyektori odatda qayerga qo'llanadi?",
    ["Sonning tashqi yuzasiga", "Bo'yinga", "Qoringa", "Yelka orqasiga"],
    "Sonning old-tashqi yuzasi — tez so'rilish uchun mos joy; kiyim ustidan ham mumkin.");
  q("allergiya", "Anafilaksiyada bemor (nafas qiyin bo'lmasa) qaysi holatga yotqiziladi?",
    ["Chalqancha, oyoqlari ko'tarilgan", "Tik turgan", "Yurgizilgan", "Qorni bilan"],
    "Oyoqlarni ko'tarish bosimni qo'llab-quvvatlaydi; tik turish xavfli.");
  q("allergiya", "Quyidagilardan qaysi biri anafilaksiya belgisi?",
    ["Toshma bilan birga nafas qiyinligi yoki bosim tushishi", "Faqat yengil yo'tal", "Faqat bosh og'rig'i", "Faqat isitma"],
    "Teri belgilariga nafas yoki qon aylanishi buzilishi qo'shilsa — anafilaksiya.");
  q("allergiya", "Antigistamin tabletka anafilaksiyada...",
    ["Adrenalin o'rnini bosmaydi", "Adrenalin o'rnini bosadi", "Yagona davo", "Zararli"],
    "Antigistamin ta'siri sekin — hayotga xavf bo'lganda faqat adrenalin yordam beradi.");
  q("allergiya", "Yaxshilanganidan keyin ham bemorni nima uchun kuzatuvda ushlash kerak?",
    ["Ikkinchi to'lqin (bifazik reaksiya) bo'lishi mumkin", "Faqat hujjat uchun", "Kuzatish shart emas", "Dori tugashi uchun"],
    "Belgilar soatlar o'tib qaytishi mumkin.");
  q("allergiya", "Ari nishi teri ostida qolgan bo'lsa?",
    ["Uni imkon qadar tezroq olib tashlash", "Zaharni og'iz bilan so'rish", "Hech narsa qilmaslik", "Kesib tashlash"],
    "Nish zahar chiqarishda davom etadi — tezroq olib tashlang (qisib emas, qirib olish ma'qul).");
  q("allergiya", "Allergik reaksiyada hushsiz, lekin nafas oluvchi bemor qanday holatga yotqiziladi?",
    ["Yon holatga", "Chalqancha", "O'tqiziladi", "Turg'iziladi"],
    "Yon holat nafas yo'lini himoya qiladi.");
  q("allergiya", "Homilador ayolda anafilaksiyada qaysi holat maqsadga muvofiq?",
    ["Chap yonboshda", "O'ng yonboshda", "Tekis chalqancha", "Qorni bilan"],
    "Chap yonbosh homilador bachadon pastki kavak venani bosishining oldini oladi.");
  q("allergiya", "Anafilaksiyada nafas to'xtasa nima qilinadi?",
    ["Reanimatsiya (CPR) boshlanadi", "Kutiladi", "Suv ichiriladi", "Faqat avtoinyektor takrorlanadi"],
    "Nafas to'xtasa yurak-o'pka reanimatsiyasi boshlanadi.");

  /* ── KUYISH (10) ── */
  q("kuyish", "Termik kuyishda sovutish qanday bajariladi?",
    ["20 daqiqa oqar salqin suv bilan", "Muz bilan", "Yog' surtib", "Sovutilmaydi"],
    "Oqar salqin suv kuyishning chuqurlashishini to'xtatadi.");
  q("kuyish", "Kuygan joyga muz qo'yish...",
    ["Zararli — to'qimalarni qo'shimcha zararlaydi", "Eng yaxshi usul", "Majburiy", "Xavfsiz va og'riqni yo'qotadi"],
    "Muz teridagi qon aylanishini buzib, jarohatni chuqurlashtiradi.");
  q("kuyish", "Kuygan joyga qaysi narsani surtish mumkin emas?",
    ["Moy, smetana, tish pastasi", "Toza plyonka", "Toza mato", "Salqin suv"],
    "Bunday narsalar issiqni ushlab turadi va infeksiya xavfini oshiradi.");
  q("kuyish", "Terga yopishib qolgan kiyim bilan nima qilinadi?",
    ["Tortib olinmaydi", "Darhol tortib olinadi", "Teri bilan kesib olinadi", "Qaynoq suv bilan yuviladi"],
    "Yopishgan kiyimni tortish terini shikastlaydi.");
  q("kuyish", "Kuyishdagi pufakchalar bilan nima qilinadi?",
    ["Yorilmaydi", "Ignada yoriladi", "Kesib olinadi", "Ishqalanadi"],
    "Pufak — tabiiy himoya; yorilsa infeksiya xavfi oshadi.");
  q("kuyish", "Nafas yo'li kuyishining belgisi qaysi?",
    ["Xirillash, yo'tal, qoramtir balg'am, yuz kuyishi", "Oyoq kuyishi", "Kaftdagi qizarish", "Faqat og'riq"],
    "Bunday belgilar bo'lsa nafas yo'li tez shishishi mumkin — darhol 103.");
  q("kuyish", "Bemorning kafti (barmoqlari bilan) tana yuzasining taxminan qancha foizini tashkil etadi?",
    ["≈ 1%", "≈ 10%", "≈ 20%", "≈ 50%"],
    "Kaft qoidasi kuyish maydonini tez baholashga yordam beradi.");
  q("kuyish", "Kimyoviy kuyishda qanday yordam beriladi?",
    ["Ko'p suv bilan uzoq yuvish", "Kislota yoki ishqor surtib neytrallash", "Quruq artish", "Muz qo'yish"],
    "Ko'p suv moddani suyultiradi va yuvib tashlaydi; neytrallashga urinilmaydi.");
  q("kuyish", "Elektr kuyishida birinchi qadam qaysi?",
    ["Tok manbasini xavfsiz o'chirish", "Bemorga darhol tegish", "Suv sepish", "Kutish"],
    "Avval qutqaruvchi xavfsizligi: tok manbasini o'chirmasdan bemorga tegmang.");
  q("kuyish", "Katta maydonli kuyishda sovutishda nimadan ehtiyot bo'lish kerak?",
    ["Gipotermiya (ayniqsa bolalarda)", "Qizib ketish", "Ortiqcha suv ichish", "Hech narsadan"],
    "Katta maydonda uzoq sovutish tana haroratini xavfli pasaytirishi mumkin.");

  /* ── CHO'KISH (10) ── */
  q("choqish", "Cho'kayotgan odamni qutqarishda birinchi qoida qaysi?",
    ["O'zingiz suvga tushmay, qutqaruv vositasidan foydalanish", "Darhol suvga sakrash", "Kutish", "Qichqirmaslik"],
    "Qutqaruvchi ham cho'kishi mumkin — arqon, shar yoki tayoq ishlating.");
  q("choqish", "Cho'kkan bemorda nafas yo'q bo'lsa avval nima qilinadi?",
    ["5 ta boshlang'ich puflash", "Suv chiqarish uchun qorin bosish", "Boshini pastga tutish", "Kutish"],
    "Cho'kishda kislorod yetishmasligi asosiy sabab — puflashlar birinchi.");
  q("choqish", "Cho'kishda yurak to'xtashi ko'pincha qaysi sabab bilan bog'liq?",
    ["Kislorod yetishmasligi (gipoksiya)", "Yuqori qon bosimi", "Qon quyulishi", "Isitma"],
    "Yurak to'xtashi odatda gipoksiya tufayli yuzaga keladi.");
  q("choqish", "Suvni o'pkadan chiqarish uchun qorinni bosish...",
    ["Tavsiya etilmaydi", "Majburiy", "Eng muhim", "Tez yordamdan oldin shart"],
    "Bu vaqtni yo'qotadi va qusishga olib kelishi mumkin.");
  q("choqish", "AED ulashdan oldin bemorning ko'kragi nima qilinadi?",
    ["Quritiladi", "Ho'l qoldiriladi", "Sovutiladi", "Moylanadi"],
    "Ho'l teri elektrodlarning yopishishiga va razryadga xalaqit beradi.");
  q("choqish", "Suvdan chiqarilib yaxshilangan bemor bilan nima qilinadi?",
    ["Baribir shifoxonaga ko'rsatiladi", "Uyga jo'natiladi", "Kuzatilmaydi", "Ovqatlantiriladi"],
    "O'pka shishi soatlar o'tib boshlanishi mumkin.");
  q("choqish", "Bo'yin jarohati ehtimoli qachon yuqori?",
    ["Sho'ng'ish yoki baland joydan tushishdan keyin", "Oddiy cho'milishdan keyin", "Isitmada", "Kunduzi"],
    "Sho'ng'ish va tushish jarohatlari bo'yin umurtqasini zararlaydi.");
  q("choqish", "Cho'kish holatlaridagi tipik xavfli xato qaysi?",
    ["Qutqaruvchining o'zi suvga tushib xavfga tushishi", "Arqon ishlatish", "103 ga qo'ng'iroq qilish", "Nafasni tekshirish"],
    "Ko'plab qutqaruvchilar aynan shu sababdan halok bo'ladi.");
  q("choqish", "Sovuq suvdan chiqarilgan bemorga qo'shimcha nima qilinadi?",
    ["Ho'l kiyimni yechib isitiladi", "Sovutishda davom etiladi", "Alkogol ichiriladi", "Yurgiziladi"],
    "Gipotermiyaning oldini olish uchun quruq va iliq o'raladi.");
  q("choqish", "Faol cho'kish belgisi qaysi?",
    ["Tik holat, qo'llar suvni uradi, yordam so'rab qichqirolmaydi", "Tinch suzish", "Orqasida yotib dam olish", "Suv ostida sho'ng'ish"],
    "Cho'kayotgan odam ko'pincha «jim» bo'ladi — qichqirishga nafasi yetmaydi.");

  /* ── ABCDE va SAB (6) ── */
  q("abcde", "ABCDE dagi «D» nimani bildiradi?",
    ["Disability — nevrologik holat (xush, glyukoza)", "Diagnoz", "Doza", "Defibrillyatsiya"],
    "D bosqichida xush (AVPU/Glazgo), qorachiqlar, glyukoza va talvasa baholanadi.");
  q("abcde", "Massiv qon ketish bo'lmasa, birlamchi baholashning birinchi bosqichi qaysi?",
    ["A — nafas yo'li", "C — qon aylanishi", "E — ochib ko'rish", "D — nevrologik holat"],
    "Tartib A → B → C → D → E; nafas yo'li birinchi.");
  q("abcde", "Bemor gapira olsa, nafas yo'li haqida nima deyish mumkin?",
    ["Odatda ochiq", "To'liq yopiq", "Ilg'or nafas yo'li shart", "Ahamiyati yo'q"],
    "Bemor odatiy ovoz bilan gapirsa, nafas yo'li ochiq deb hisoblanadi.");
  q("abcde", "SAB (CAB) yondashuvi qachon qo'llanadi?",
    ["Hushsiz va normal nafas olmayotgan bemorda (kompressiya birinchi)", "Har yengil shikoyatda", "Faqat bolalarda", "Faqat travmada"],
    "Yurak to'xtashida birinchi navbatda sirkulyatsiya (kompressiya) tiklanadi.");
  q("abcde", "ABCDE da hayotga xavf soluvchi muammo topilsa nima qilinadi?",
    ["Darhol bartaraf etilib, keyin davom etiladi", "Oxirigacha kutiladi", "Faqat hujjatlashtiriladi", "Hech narsa qilinmaydi"],
    "Har bosqichda topilgan xavf shu zahoti to'g'rilanadi.");
  q("abcde", "Bemor holati yomonlashsa baholash qanday davom etadi?",
    ["A dan qayta boshlanadi", "Faqat E dan", "Kutiladi", "To'xtatiladi"],
    "Yomonlashishda tizimli qayta baholash A dan boshlanadi.");

  /* ── O'KS (6) ── */
  q("oks", "O'KS shubhasida 12 tarmoqli EKG qachon yozilishi kerak?",
    ["Imkon qadar tezroq (odatda ≤ 10 daqiqa)", "Shifoxonada, kutib turgach", "Ertasiga", "Og'riq to'xtagach"],
    "EKG kechiktirilsa STEMI davosi kechikadi.");
  q("oks", "Nitrat berishdan oldin nimani tekshirish shart?",
    ["Qon bosimi va PDE-5 ingibitori qabul qilinganligi", "Rangi", "Yoshi", "Vazni"],
    "Past bosim va PDE-5 ingibitori qabul qilish nitratni xavfli qiladi.");
  q("oks", "STEMI aniqlansa bemor qayerga yo'naltiriladi?",
    ["PCI imkoniyati bor markazga", "Eng yaqin poliklinikaga", "Uyga", "Diagnostika markaziga navbatga"],
    "Reperfuziya (PCI) imkoniyati bor markaz — eng tez natija beradi.");
  q("oks", "O'KS ning atipik belgilari ko'proq kimlarda uchraydi?",
    ["Ayollar, keksalar va qandli diabet bo'lganlarda", "Yosh sportchilarda", "Bolalarda", "Homilador ayollarda"],
    "Bu guruhlarda og'riq bo'lmasligi mumkin — hansirash, holsizlik ustun.");
  q("oks", "O'KS bemorida defibrillyator elektrodlari nima uchun tayyor turishi kerak?",
    ["Qorinchalar fibrillyatsiyasi xavfi yuqori", "Bosim oshadi", "Nafas to'xtaydi", "Isitma bo'ladi"],
    "O'tkir ishemiyada xavfli aritmiyalar tez rivojlanishi mumkin.");
  q("oks", "O'KS bemorida kislorod qachon beriladi?",
    ["Gipoksiya bo'lsa", "Doim maksimal", "Hech qachon", "Faqat hushsizda"],
    "Me'yoriy SpO₂ da ortiqcha kislorod foyda bermaydi.");

  /* ── TRIAJ (6) ── */
  q("triage", "START triajida yura oladigan jabrlanuvchi qaysi toifaga kiradi?",
    ["Yashil", "Qizil", "Sariq", "Qora"],
    "Yura oladiganlar «yengil» (yashil) toifada — keyinga qoldiriladi.");
  q("triage", "START: nafas chastotasi 30/daq dan yuqori bo'lsa qaysi toifa?",
    ["Qizil", "Yashil", "Sariq", "Qora"],
    "Tez nafas — zudlik bilan yordam kerakligini bildiradi.");
  q("triage", "START: nafas yo'lini ochgandan keyin ham nafas yo'q bo'lsa?",
    ["Qora", "Qizil", "Sariq", "Yashil"],
    "Nafas yo'lini ochgach nafas paydo bo'lmasa — hayot belgisi yo'q (qora).");
  q("triage", "Triaj davomida qanday muolajalar bajariladi?",
    ["Nafas yo'lini ochish va massiv qon ketishni to'xtatish", "To'liq davolash", "Tomir yo'li va infuziya", "Intubatsiya"],
    "Triaj — saralash; uzoq muolajaga vaqt yo'q.");
  q("triage", "Triajni qayta baholash nima uchun kerak?",
    ["Bemor holati o'zgarishi mumkin", "Hujjat uchun", "Vaqt o'tkazish uchun", "Shart emas"],
    "Kategoriya holat o'zgarishi bilan yangilanadi.");
  q("triage", "START: kapillyar to'lish 2 soniyadan uzoq bo'lsa?",
    ["Qizil", "Yashil", "Sariq", "Qora"],
    "Qon aylanishi buzilgan — zudlik toifasi.");

  /* ── IMMOBILIZATSIYA (5) ── */
  q("immobilizatsiya", "Immobilizatsiyadan oldin birinchi navbatda nima baholanadi?",
    ["ABCDE va massiv qon ketish", "Faqat umurtqa", "Yoshi", "Kiyimi"],
    "Hayotga xavf soluvchi muammolar immobilizatsiyadan ustun.");
  q("immobilizatsiya", "Suyak singanda shinalash qaysi bo'g'imlarni qamrab oladi?",
    ["Sinish joyidan yuqori va pastdagi bo'g'imlarni", "Faqat sinish joyini", "Faqat pastdagi bo'g'imni", "Shinalanmaydi"],
    "Ikkala tomondagi bo'g'imlarni mahkamlash suyakni harakatsiz qiladi.");
  q("immobilizatsiya", "Distal baholash (puls – harakat – sezgi) qachon o'tkaziladi?",
    ["Muolajadan oldin va keyin", "Faqat oldin", "Faqat keyin", "O'tkazilmaydi"],
    "Shinalash qon aylanishini buzmaganligini tekshirish uchun.");
  q("immobilizatsiya", "Qattiq (spinal) taxtada uzoq turish nimaga olib kelishi mumkin?",
    ["Bosim yaralari va nafas cheklanishiga", "Isitmaga", "Ich ketishiga", "Tez tuzalishga"],
    "Shuning uchun imkon qadar vakuum matrasga o'tkaziladi.");
  q("immobilizatsiya", "Bemorni taxtaga yotqizishda qanday harakat qilinadi?",
    ["Jamoa bilan bir vaqtda, bosh-bo'yin-tana bir o'qda burib", "Yakka o'zi tez ko'tarib", "Boshidan tortib", "Yon tomonga aylantirib"],
    "Kelishilgan harakat umurtqaga qo'shimcha zarar yetkazmaydi.");
})();

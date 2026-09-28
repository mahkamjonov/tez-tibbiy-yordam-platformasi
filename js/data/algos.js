/* Qalqon ichidagi tezkor algoritm (1–4-bloklar):
 *   1. Holatni aniqlash   — assess: savollar ro'yxati
 *   2. Birinchi harakat   — first: bitta aniq ko'rsatma
 *   3. Algoritm           — algo: zanjir (bosqichlar ketma-ketligi)
 *   4. Nima qilish mumkin emas? — public.dont (topics*.js ichida)
 * 5-blok (Tibbiyot xodimi uchun) va 6-blok (Oddiy fuqaro uchun) — topics*.js dagi steps va public.
 *
 * Kalit — mavzu slug'i. Bu yerda yozilmagan mavzuda (masalan, professional yo'nalishlar) 1–4 va 6-bloklar ko'rsatilmaydi.
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

TTY.data.algos = {
  yurak: {
    assess: ["Bemor hushidami? (yelkadan silkiting, baland ovozda chaqiring)", "Nafas olyaptimi? (bosh orqaga, 10 soniya ko'ring va tinglang)", "Hayotiy belgilar: rangi va tomir urishi — buning uchun vaqt yo'qotmang"],
    first: "Javob bermasa va normal nafas olmasa — 103 ga xabar bering va darhol ko'krak kompressiyasini boshlang.",
    algo: ["Tekshir", "103", "CPR 30:2", "AED / defibrillyator", "Professional yordam"]
  },
  nafas: {
    assess: ["Gapira oladimi? To'liq gap ayta olmasa — og'ir holat", "Nafasi tez yoki qiyin, lablari ko'karganmi?", "Tomoqqa narsa tiqilganmi? Astma inhalyatori bormi?"],
    first: "Qulay (yarim o'tirgan) holatga keltiring, tor kiyimni bo'shating va 103 ga qo'ng'iroq qiling.",
    algo: ["Nafas yo'li", "Qulay holat", "103", "Kislorod / BVM", "Kuzatuv"]
  },
  insult: {
    assess: ["Yuz: tabassum qilsin — bir tomon osilyaptimi?", "Qo'l: ikkala qo'lni ko'tarsin — bittasi tushyaptimi?", "Nutq: oddiy gapni takrorlasin — buzilganmi?", "Belgilar aniq qachon boshlangan?"],
    first: "FAST belgilaridan biri bo'lsa ham — darhol 103 ga qo'ng'iroq qiling va boshlanish vaqtini aniq ayting.",
    algo: ["FAST", "Vaqtni yoz", "103", "Hech narsa ichirma", "Insult markaziga"]
  },
  "qon-ketish": {
    assess: ["Qon qayerdan va qanchalik kuchli? (oqib turadimi yoki otilib chiqadimi)", "Rangi oqarganmi, hushi chalg'iganmi, terisi sovuq-namligi?", "Jarohatda sanchilgan yoki singan jism bormi?"],
    first: "Toza mato bilan jarohatga kuchli va uzluksiz bosing, 103 ga qo'ng'iroq qiling.",
    algo: ["Bosim", "Bosimli bog'ich", "Turniket (qo'l-oyoq)", "Yotqiz va isit", "Vaqtni yoz + 103"]
  },
  allergiya: {
    assess: ["Tarqalgan toshma yoki yuz-lab-til shishi bormi?", "Nafas qiyinlashdimi, ovozi bo'g'ilganmi?", "Sababi: ari nishi, ovqat, dori?", "Adrenalin avtoinyektori bormi?"],
    first: "Allergen manbaini to'xtating va 103 ga qo'ng'iroq qiling; avtoinyektor bo'lsa yo'riqnomaga ko'ra qo'llang.",
    algo: ["Allergenni to'xtat", "103", "Adrenalin", "Yotqiz", "Kuzatuv"]
  },
  bola: {
    assess: ["Bola nafas oladimi?", "Hushi joyidami, chaqiriqqa javob beradimi?", "Tomoqqa narsa tiqilganmi? Talvasa bormi?"],
    first: "103 ga qo'ng'iroq qiling; nafas bo'lmasa — 5 marta puflab, ko'krak kompressiyasini boshlang.",
    algo: ["Tekshir", "103", "Nafas yo'li / talvasa / kompressiya", "Isit va tinchlantir", "Pediatrik yordam"]
  },
  akusherlik: {
    assess: ["Homiladorlik muddati qancha?", "Qon ketyaptimi? Talvasa yoki kuchli bosh og'rig'i bormi?", "To'lg'oqlar muntazammi, bola boshi ko'rinyaptimi?"],
    first: "103 ga qo'ng'iroq qiling va ayolni chap yonboshga yotqizing.",
    algo: ["103", "Chap yonbosh", "Toza sharoit", "Tug'ruq / qon ketishini nazorat", "Akusherlik markazi"]
  },
  travma: {
    assess: ["Kuchli qon ketish bormi?", "Yiqilish yoki avtohalokat — bo'yin va umurtqa jarohati ehtimoli?", "Nafas va xush qanday?"],
    first: "Avval qon ketishini to'xtating, boshi va bo'ynini qimirlatmang, 103 ga qo'ng'iroq qiling.",
    algo: ["Qon ketishi", "Nafas yo'li", "Immobilizatsiya", "Isitish", "Travma markazi"]
  },
  kuyish: {
    assess: ["Sababi: olov, issiq suyuqlik, kimyoviy modda yoki elektr?", "Qayeri va qancha maydon? (yuz, qo'l, tomoq; bemorning kafti ≈ 1%)", "Tutun yutganmi, xirillash yoki yo'tal bormi?"],
    first: "Kuyish manbaini to'xtating va kuygan joyni 20 daqiqa oqar salqin (muzsiz) suvda sovuting.",
    algo: ["Manbani to'xtat", "20 daqiqa sovut", "Toza mato bilan yop", "Isit", "103 / kuyish markazi"]
  },
  zaharlanish: {
    assess: ["Nima, qancha va qachon zaharlangan?", "Xushi joyidami, nafasi qanday?", "Gaz yoki tutun bormi (xavfsizlik)?"],
    first: "Avval xavfsizlik: toza havoga chiqaring, 103 ga qo'ng'iroq qiling, modda qadog'ini saqlang.",
    algo: ["Xavfsizlik", "Toza havo", "103", "Ma'lumot to'pla", "Antidot / davo (brigada)"]
  },
  choqish: {
    assess: ["Suvdan chiqarish o'zingiz uchun xavfsizmi?", "Hushidami? Nafas oladimi?", "Sho'ng'ish yoki yiqilish bo'lganmi (bo'yin jarohati)?"],
    first: "O'zingiz suvga tushmang: qutqaruvchi vosita bering, 103 ga qo'ng'iroq qiling, suvdan chiqargach nafasini tekshiring.",
    algo: ["Xavfsizlik", "Suvdan chiqar", "103", "5 ta puflash", "CPR 30:2 + AED"]
  },
  shok: {
    assess: ["Rangi oqarganmi, teri sovuq va namligi?", "Hushi chalg'iganmi, tez nafas oladimi?", "Kuchli qon ketish yoki allergik reaksiya bormi?"],
    first: "Sababni to'xtating (qon ketishi, allergen), 103 ga qo'ng'iroq qiling, yotqizing va isiting.",
    algo: ["Sababni to'xtat", "103", "Yotqiz, oyoqlarni ko'tar", "Isit", "Kuzat"]
  }
};

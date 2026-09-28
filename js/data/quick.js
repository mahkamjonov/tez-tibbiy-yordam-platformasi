/* Tezkor qalqon va "103 gacha" bo'limi uchun holatlar.
 *
 * Bir xil ma'lumot ikki joyda ishlatiladi:
 *  • #/tezkor — "Hozir shoshilinch yordam kerak": holatni tanlang → eng muhim birinchi harakatlar
 *  • #/103-gacha — "103 kelguncha nima qilish kerak?": har bir holat uchun to'liq reja
 *
 * Maydonlar: id, title, hint (qisqa izoh), icon, tone, topic (batafsil mavzu, bo'lmasa null),
 * steps [{t, d}] — birinchi harakatlar, dont — qilmang, watch — kuzating (yomonlashish belgilari), tell — brigadaga ayting.
 * Matn oddiy fuqaro uchun: tibbiy terminlarsiz.
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

TTY.data.quick = [
  {
    id: "hushsiz", title: "Bemor hushsiz", hint: "Chaqiruvga javob bermayapti", icon: "bedtime", tone: "life", topic: "yurak",
    steps: [
      { t: "Xavfsizlikni tekshiring", d: "Atrofda xavf bormi? O'zingizni xavfga solmang." },
      { t: "Yelkadan silkitib, baland ovozda chaqiring", d: "Javob bermasa — 103 ga qo'ng'iroq qiling va telefonni karnay rejimiga qo'ying." },
      { t: "Nafasini tekshiring", d: "Boshini orqaga, iyagini yuqoriga ko'taring va ko'krak harakatini 10 soniya kuzating." },
      { t: "Normal nafas bor bo'lsa — yon holatga yotqizing", d: "Nafas yo'li ochiq qoladi. Brigada kelguncha kuzating." },
      { t: "Nafas yo'q yoki g'ayritabiiy bo'lsa — ko'krakni bosing", d: "5–6 sm chuqurlikda, soniyasiga ~2 marta. AED bo'lsa ulang." }
    ],
    dont: ["Ichirmang va dori bermang.", "O'tqizmang yoki yurgizmang.", "Yolg'iz qoldirmang."],
    watch: ["Nafas to'xtasa yoki g'ayritabiiy bo'lib qolsa — darhol ko'krakni bosishni boshlang.", "Qusish bo'lsa — yon holatda og'zini tozalang."],
    tell: "Hushsiz, nafas oladimi yoki yo'q, taxminiy yoshi, qachon yiqilgani, ma'lum kasalliklari."
  },
  {
    id: "nafas-yoq", title: "Bemor nafas olmayapti", hint: "Yurak to'xtagan bo'lishi mumkin", icon: "cardiology", tone: "heart", topic: "yurak",
    steps: [
      { t: "103 ga qo'ng'iroq qiling", d: "Karnay rejimida. Atrofdagilardan AED keltirishni so'rang." },
      { t: "Bemorni qattiq tekis joyga chalqancha yotqizing", d: "Kiyimni ko'krak ustidan oching." },
      { t: "Ko'krak o'rtasini bosing", d: "Kaftni ko'krak suyagining pastki yarmiga qo'ying, qo'llar tik. Chuqurlik 5–6 sm, tezlik — soniyasiga ~2 marta." },
      { t: "O'qitilgan bo'lsangiz — 30 bosish, 2 puflash", d: "Puflay olmasangiz yoki xohlamasangiz — to'xtovsiz faqat bosing." },
      { t: "AED kelsa, yoqing", d: "Ovozli ko'rsatmalarga amal qiling. To'xtamang." }
    ],
    dont: ["Tomir urishini uzoq izlab vaqt yo'qotmang.", "Brigada yoki AED ko'rsatmasi kelguncha to'xtamang."],
    watch: ["Har ~2 daqiqada kimdir bilan almashing — charchash samaradorlikni pasaytiradi.", "Bemor nafas ola boshlasa — yon holatga yotqizib kuzating."],
    tell: "Nafas yo'q, ko'krak bosish qachon boshlangan, AED ishlatilganmi."
  },
  {
    id: "qon", title: "Kuchli qon ketmoqda", hint: "Otilib chiqyapti yoki to'xtamayapti", icon: "bloodtype", tone: "bleed", topic: "qon-ketish",
    steps: [
      { t: "103 ga qo'ng'iroq qiling", d: "Yoki kimdir chaqirsin — siz qonni to'xtatishda davom eting." },
      { t: "Kuchli bosing", d: "Toza mato yoki kiyim bilan jarohatga qo'lingiz bilan qattiq va to'xtovsiz bosing." },
      { t: "Mato qonga to'lsa — olmang", d: "Ustiga yana mato qo'yib, bosishda davom eting." },
      { t: "Qo'l yoki oyoqda to'xtamasa", d: "Bosimli bog'ich qo'ying. Turniket bo'lsa — jarohatdan yuqoriga qo'yib mahkamlang va vaqtini yozing." },
      { t: "Yotqizing va isiting", d: "Ustini yoping, gaplashib turing." }
    ],
    dont: ["Sanchilgan jismni sug'urmang.", "Bosimni tez-tez bo'shatib tekshirmang.", "Turniketni o'zingiz yechmang."],
    watch: ["Rangi oqarsa, hushi chalg'isa yoki terisi sovuq-nam bo'lsa — bu shok belgisi: yotqizib isiting.", "Bog'ich qonga to'lsa, ustiga yana qo'shing."],
    tell: "Qayerdan, qancha vaqtdan beri qon ketmoqda, turniket qo'yilgan bo'lsa — aniq vaqti."
  },
  {
    id: "boglib", title: "Bo'g'ilib qoldi", hint: "Tomog'iga narsa tiqilgan", icon: "air", tone: "breath", topic: "nafas",
    steps: [
      { t: "So'rang: «Bo'g'ilyapsizmi?»", d: "Gapira yoki yo'tala olsa — kuchli yo'talishga undang, aralashmang." },
      { t: "Yo'talolmasa, gapira olmasa — 103 ga qo'ng'iroq qiling", d: "Yoki kimdir chaqirsin." },
      { t: "Kurak suyaklari orasiga 5 marta kuchli uring", d: "Bemorni oldinga engashtiring." },
      { t: "Bo'lmasa — 5 marta qorin turtkisi", d: "Orqadan quchoqlab, mushtni kindik ustiga qo'ying va ichkariga-yuqoriga turting (Geymlix)." },
      { t: "Almashtirib davom eting", d: "Hushidan ketsa — yotqizing va ko'krakni bosishni boshlang." }
    ],
    dont: ["Ko'r-ko'rona barmoq solib tozalamang (ko'rinsa — olib tashlang).", "Suv ichirmang.", "1 yoshgacha chaqaloqqa qorin turtkisi qilmang — 5 orqaga urish va 5 ko'krak turtkisi qiling."],
    watch: ["Hushini yo'qotsa — darhol ko'krakni bosishni boshlang.", "Jism chiqqandan keyin ham shifokorga ko'rsating."],
    tell: "Nima tiqilgan bo'lishi mumkin, qancha vaqt oldin, hushi joyidami."
  },
  {
    id: "tutqanoq", title: "Tutqanoq bo'lyapti", hint: "Talvasa, qaltirash", icon: "electric_bolt", tone: "brain", topic: null,
    steps: [
      { t: "Xavfsiz joy yarating", d: "Atrofdagi qattiq va o'tkir narsalarni olib tashlang, boshi ostiga yumshoq narsa qo'ying." },
      { t: "Vaqtni belgilang", d: "Talvasa 5 daqiqadan uzoq, birinchi marta, ketma-ket takror yoki nafas qiyin bo'lsa — 103 ga qo'ng'iroq qiling." },
      { t: "Ushlab turmang, og'ziga narsa solmang", d: "Talvasa o'zi to'xtaguncha yonida turing." },
      { t: "Tugagach yon holatga yotqizing", d: "Nafasini kuzating, gaplashib tinchlantiring." }
    ],
    dont: ["Kuch bilan ushlab turmang.", "Og'ziga qoshiq, barmoq yoki boshqa narsa solmang.", "Talvasa paytida suv yoki dori bermang."],
    watch: ["Talvasadan keyin uyquchanlik va chalkashlik bo'lishi mumkin.", "Nafas to'xtasa — ko'krakni bosishni boshlang."],
    tell: "Talvasa qancha davom etdi, birinchi martami, epilepsiya yoki qandli diabet bormi."
  },
  {
    id: "ogriq", title: "Ko'krakda kuchli og'riq", hint: "Bosuvchi og'riq, sovuq ter", icon: "favorite", tone: "heart", topic: "yurak",
    steps: [
      { t: "Darhol 103 ga qo'ng'iroq qiling", d: "Kutmang — «o'tib ketar» deb umid qilmang." },
      { t: "Qulay, yarim o'tirgan holatga keltiring", d: "Tinch turing, tor kiyimni bo'shating." },
      { t: "Dorilar haqida dispetcherga ayting", d: "Aspirin yoki boshqa dorini faqat dispetcher yoki shifokor ruxsat bersa bering." },
      { t: "Hushsiz bo'lib nafas to'xtasa — ko'krakni bosing", d: "AED bo'lsa ulang." }
    ],
    dont: ["Yurgizmang va og'ir ish qildirmang.", "Ovqat yoki ichimlik bermang.", "Yolg'iz shifoxonaga jo'natmang."],
    watch: ["Og'riq kuchaysa, nafasi qisilsa yoki hushdan ketsa — dispetcherga darhol xabar bering."],
    tell: "Og'riq qachon boshlandi va qanday, ma'lum yurak kasalligi, ichadigan dorilar."
  },
  {
    id: "insult", title: "Insultdan shubha", hint: "Yuz qiyshaygan, qo'l zaif, nutq buzilgan", icon: "neurology", tone: "brain", topic: "insult",
    steps: [
      { t: "FAST testini o'tkazing", d: "Yuz — tabassum qilsin. Qo'l — ikkalasini ko'tarsin. Nutq — oddiy gapni takrorlasin." },
      { t: "Darhol 103 ga qo'ng'iroq qiling", d: "«Insult shubhasi» deb ayting va belgilar boshlangan aniq vaqtni ayting." },
      { t: "Qulay holatga keltiring", d: "Boshi biroz ko'tarilgan holda yotqizing yoki o'tirg'izing." },
      { t: "Hech narsa ichirmang", d: "Suv, ovqat va dori (aspirin ham) bermang." },
      { t: "Yolg'iz qoldirmang", d: "Kuzating; hushdan ketsa — yon holatga yotqizing." }
    ],
    dont: ["«O'zi o'tib ketadi» deb kutmang.", "Uxlashga yotqizmang.", "Bosim dorisini o'zboshimchalik bilan bermang."],
    watch: ["Hushdan ketsa — nafasini tekshiring.", "Qusish yoki talvasa bo'lsa — yon holatga yotqizing."],
    tell: "Belgilar boshlangan aniq vaqt, qaysi belgilar bor, ichadigan dorilar (ayniqsa qon suyultiruvchi)."
  },
  {
    id: "allergiya", title: "Kuchli allergik reaksiya", hint: "Shish, nafas qiyinligi, toshma", icon: "allergy", tone: "allergy", topic: "allergiya",
    steps: [
      { t: "103 ga qo'ng'iroq qiling", d: "«Kuchli allergik reaksiya, nafasi qiyin» deb ayting." },
      { t: "Allergenni to'xtating", d: "Ari nishini olib tashlang; ovqat yoki dorini to'xtating." },
      { t: "Avtoinyektor bo'lsa — qo'llang", d: "Yo'riqnomaga ko'ra sonning tashqi yuzasiga (kiyim ustidan ham bo'ladi)." },
      { t: "Yotqizing", d: "Oyoqlarini ko'taring; nafasi qiyin bo'lsa — o'tirg'izing." },
      { t: "Kuzating", d: "Nafas to'xtasa — ko'krakni bosishni boshlang." }
    ],
    dont: ["Tik turg'izmang.", "Ichirmang.", "Antigistamin tabletka bilan kutib turmang."],
    watch: ["Yaxshilanganidan keyin ham belgilar qaytishi mumkin — kuzatuv shart.", "Ovozi bo'g'ilsa yoki nafasi qisilsa — dispetcherga xabar bering."],
    tell: "Nimadan boshlangan, qachon, avtoinyektor ishlatilgan bo'lsa — qachon."
  },
  {
    id: "kuyish", title: "Kuyish", hint: "Olov, issiq suyuqlik, kimyoviy, elektr", icon: "local_fire_department", tone: "burn", topic: "kuyish",
    steps: [
      { t: "Manbani to'xtating", d: "Olovni o'chiring; elektr bo'lsa tokni o'chiring." },
      { t: "20 daqiqa oqar salqin suvda sovuting", d: "Muz ishlatmang." },
      { t: "Kiyim va zargarlikni yeching", d: "Shishishdan oldin. Terga yopishganini tortmang." },
      { t: "Toza mato yoki plyonka bilan yoping", d: "Bo'sh yoping, pufakchalarni yormang." },
      { t: "Kerak bo'lsa 103 ga qo'ng'iroq qiling", d: "Yuz, tomoq, katta maydon, elektr yoki kimyoviy kuyish, bola yoki keksa bo'lsa — darhol." }
    ],
    dont: ["Muz surtmang.", "Moy, smetana, tuxum, tish pastasi surtmang.", "Pufakchalarni yormang."],
    watch: ["Xirillash, yo'tal yoki ovoz o'zgarishi — nafas yo'li kuyishi belgisi: darhol 103.", "Rangi oqarib, hushi chalg'isa — yotqizib isiting."],
    tell: "Nimadan kuygan, qachon, qaysi joy va taxminan qancha maydon, qancha vaqt sovutilgan."
  },
  {
    id: "choqish", title: "Cho'kdi", hint: "Suvdan chiqarilgan yoki cho'kayapti", icon: "waves", tone: "drowning", topic: "choqish",
    steps: [
      { t: "O'zingiz suvga tushmang", d: "Arqon, shar, tayoq yoki mato uzating. 103 ga qo'ng'iroq qiling." },
      { t: "Suvdan chiqaring", d: "Imkon qadar yotgan holatda, boshi va bo'ynini bir o'qda tuting." },
      { t: "Hushini va nafasini tekshiring", d: "Nafas yo'lini oching va 10 soniya kuzating." },
      { t: "Nafas yo'q bo'lsa — 5 marta puflang, so'ng bosing", d: "O'qitilgan bo'lsangiz. Puflay olmasangiz — faqat ko'krakni bosing (30 bosish : 2 puflash)." },
      { t: "Nafas tiklansa — yon holat va isitish", d: "Ho'l kiyimni yeching, quruq va iliq o'rang." }
    ],
    dont: ["Suvni chiqarish uchun qorniga bosmang.", "Boshini pastga tutib silkitmang.", "Yaxshilandi deb kuzatuvsiz qoldirmang."],
    watch: ["Yo'tal, ko'pikli balg'am yoki nafas qisilishi kechroq boshlanishi mumkin — shifoxonaga ko'rsating."],
    tell: "Suvda qancha vaqt qolgan, sho'ng'ish yoki yiqilish bo'lganmi, suv sovuqmi."
  },
  {
    id: "zaharlanish", title: "Zaharlanish", hint: "Gaz, dori, kimyoviy yoki noma'lum modda", icon: "skull", tone: "tox", topic: "zaharlanish",
    steps: [
      { t: "Avval xavfsizlik", d: "Gaz yoki tutun bo'lsa o'zingiz kirmang: eshik-derazani oching, gaz/elektrni o'chiring, bemorni toza havoga chiqaring." },
      { t: "103 ga qo'ng'iroq qiling", d: "Nima, qancha va qachon zaharlanganini ayting." },
      { t: "Ma'lumot to'plang", d: "Dori yoki modda qadog'ini saqlab, brigadaga bering." },
      { t: "Ongi joyida bo'lsa — kuzating", d: "Qulay o'tirg'izing. Dispetcher aytmasa, hech narsa ichirmang." },
      { t: "Hushsiz bo'lsa — yon holat", d: "Nafas yo'q bo'lsa — ko'krakni bosishni boshlang." }
    ],
    dont: ["O'zboshimchalik bilan qusdirmang.", "Sut yoki «xalq usullari» bilan davolamang.", "Yolg'iz qoldirmang."],
    watch: ["Uyquchanlik kuchaysa, nafas sekinlashsa yoki talvasa boshlansa — dispetcherga xabar bering."],
    tell: "Modda nomi, qancha, qachon, bemorning yoshi va taxminiy vazni."
  },
  {
    id: "bola", title: "Bolada og'ir holat", hint: "Nafas qiyin, hushi yomon, talvasa", icon: "child_care", tone: "child", topic: "bola",
    steps: [
      { t: "103 ga qo'ng'iroq qiling", d: "Bolaning yoshi va holatini ayting." },
      { t: "Nafasini tekshiring", d: "Nafas yo'q bo'lsa — nafas yo'lini oching, 5 marta puflang, so'ng ko'krakni bosing (chaqaloqda ikki barmoq, kattaroq bolada bir qo'l)." },
      { t: "Tomog'iga narsa tiqilgan bo'lsa", d: "1 yoshgacha: 5 marta orqasiga urish + 5 marta ko'krak turtkisi. Kattaroq bolada: 5 urish + 5 qorin turtkisi." },
      { t: "Talvasada — yon tomonga yotqizing", d: "Atrofni xavfsiz qiling, vaqtni belgilang, og'ziga hech narsa solmang." },
      { t: "Isiting va tinchlantiring", d: "Yonida bo'ling, gaplashib turing." }
    ],
    dont: ["Sovuq suvga solmang.", "Hushi yomon bolaga ichirmang.", "Chaqaloqni silkitmang."],
    watch: ["Nafasi qiyinlashsa, lablari ko'karsa yoki befarq bo'lib qolsa — dispetcherga darhol xabar bering."],
    tell: "Bolaning yoshi va vazni, nima bo'lgani, qachon boshlangani, allergiyasi va ichgan dorilari."
  },
  {
    id: "homilador", title: "Homilador ayolda xavf", hint: "Qon ketishi, talvasa, tug'ruq", icon: "family_restroom", tone: "mother", topic: "akusherlik",
    steps: [
      { t: "103 ga qo'ng'iroq qiling", d: "Homiladorlik muddati va nima bo'layotganini ayting." },
      { t: "Chap yonboshga yotqizing", d: "Orqasiga yostiq qo'ying." },
      { t: "Talvasada — xavfsiz qiling", d: "Ushlab turmang, og'ziga narsa solmang; atrofdagi xavfli narsalarni olib tashlang." },
      { t: "Tug'ruq boshlanib qolsa", d: "Chaqaloqni tortmang; boshi chiqqanda sekin qo'l bilan tuting. Tug'ilgach quriting va onaning ko'kragiga qo'yib, ustini yoping." },
      { t: "Qon ketsa — qorinni massaj qiling", d: "Pastki qorinni aylanma harakat bilan massaj qiling, ayolni isiting." }
    ],
    dont: ["Yolg'iz qoldirmang.", "Kindikni o'zingiz kesmang yoki tortmang.", "Talvasada ichirmang."],
    watch: ["Qon ketishi kuchaysa yoki hushi chalg'isa — dispetcherga darhol xabar bering."],
    tell: "Homiladorlik muddati, qon ketishi, talvasa, to'lg'oqlar oralig'i."
  },
  {
    id: "travma", title: "Yiqilish, og'ir jarohat", hint: "Avtohalokat, baland joydan yiqilish", icon: "health_and_safety", tone: "trauma", topic: "travma",
    steps: [
      { t: "Xavfsizlik va 103", d: "Joy xavfsizligini tekshiring va 103 ga qo'ng'iroq qiling." },
      { t: "Kuchli qon ketishni to'xtating", d: "Toza mato bilan jarohatga qattiq bosing." },
      { t: "Bosh va bo'ynini qimirlatmang", d: "Boshini ikki qo'l bilan neytral holatda ushlab turing." },
      { t: "Nafasini kuzating", d: "Nafas to'xtasa — ko'krakni bosishni boshlang." },
      { t: "Isiting va gaplashib turing", d: "Ustini yoping, hushida ushlab turing." }
    ],
    dont: ["Xavf (yong'in va h.k.) bo'lmasa ko'chirmang.", "Singan suyakni to'g'rilamang.", "Ichirmang."],
    watch: ["Rangi oqarsa, nafasi qiyinlashsa yoki hushdan ketsa — dispetcherga xabar bering."],
    tell: "Qanday yiqilgan yoki urilgan, qaysi joylari og'riyapti, hushini yo'qotganmi."
  }
];

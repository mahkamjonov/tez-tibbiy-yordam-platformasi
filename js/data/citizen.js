/* Aholi uchun: 103 qachon va qanday chaqiriladi, brigadaga qanday yordam berish mumkin.
 * Sayt orqali qo'ng'iroq QILINMAYDI — faqat ma'lumot beriladi.
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

TTY.data.citizen = {
  whenToCall: [
    { icon: "bedtime", t: "Hushsizlik", d: "Odam chaqiruvga javob bermaydi yoki umuman hushsiz." },
    { icon: "cardiology", t: "Ko'krak qafasidagi og'riq", d: "Bosuvchi, achituvchi og'riq, sovuq ter, nafas qisilishi." },
    { icon: "neurology", t: "Insult belgilari", d: "To'satdan yuz qiyshayishi, qo'l zaifligi yoki nutq buzilishi." },
    { icon: "air", t: "Nafas bo'g'ilishi", d: "Gapira olmaydi, lablari ko'kargan, tomog'iga narsa tiqilgan." },
    { icon: "bloodtype", t: "Kuchli qon ketish", d: "To'xtamaydigan yoki otilib chiqayotgan qon." },
    { icon: "car_crash", t: "Og'ir jarohat", d: "Avtohalokat, baland joydan yiqilish, bosh yoki umurtqa jarohati." },
    { icon: "electric_bolt", t: "Talvasa", d: "Birinchi marta yoki 5 daqiqadan uzoq davom etgan talvasa." },
    { icon: "warning_amber", t: "Zaharlanish", d: "Is gazi, dori, kimyoviy modda yoki noma'lum modda." },
    { icon: "pregnant_woman", t: "Homilador ayolda xavf", d: "Qon ketishi, kuchli bosh og'rig'i, talvasa yoki tug'ruq boshlanishi." },
    { icon: "child_care", t: "Bolada og'ir holat", d: "Nafas qiyinligi, hushdan ketish, talvasa yoki tomoqqa narsa tiqilishi." }
  ],

  /* Dispetcherga aytiladigan ma'lumotlar (103 chaqiruvida) */
  say: [
    { icon: "location_on", t: "Aniq manzil", d: "Ko'cha, uy, xonadon, pod'ezd, qavat va yaqin mo'ljal." },
    { icon: "personal_injury", t: "Bemorning holati", d: "Hushidami? Nafas olyaptimi? Nima bo'ldi va qachon?" },
    { icon: "monitor_heart", t: "Asosiy belgilar", d: "Og'riq, qon ketish, nafas qiyinligi, talvasa va boshqalar." },
    { icon: "cake", t: "Bemorning yoshi", d: "Taxminiy bo'lsa ham ayting — bola yoki keksa ekanini bilish muhim." },
    { icon: "call", t: "Sizning telefon raqamingiz", d: "Dispetcher qayta bog'lanishi uchun telefon doim aloqada bo'lsin." }
  ],

  sayTips: [
    "Xotirjam va aniq gapiring; savollarga qisqa javob bering.",
    "Go'shakni birinchi qo'ymang — dispetcher gapni tugatgunicha kuting.",
    "Dispetcher bergan birinchi yordam ko'rsatmalariga qat'iy amal qiling.",
    "Telefonni karnay (speaker) rejimiga qo'ysangiz, qo'llaringiz bo'sh qoladi."
  ],

  helpCrew: [
    { icon: "door_open", t: "Eshikni oching", d: "Kirish yo'lini ochiq qoldiring, yo'lak va zinapoyani bo'shating (jihozlar va zambil o'tishi kerak)." },
    { icon: "pin_drop", t: "Kimdir ko'chada kutib olsin", d: "Uy raqami ko'rinsin, tunda yorug'lik yoqing; kirish yo'lini ko'rsating. Lift bo'lsa uni ushlab turing." },
    { icon: "pets", t: "Uy hayvonlarini olib qo'ying", d: "Itlar va boshqa hayvonlar alohida xonada bo'lsin." },
    { icon: "groups", t: "Keraksiz odamlar chetga chiqsin", d: "Bemor atrofida faqat yordam berayotganlar qolsin — brigadaga joy kerak." },
    { icon: "clinical_notes", t: "Hujjat va dorilarni tayyorlang", d: "Pasport, tibbiy hujjatlar, bemor ichadigan dorilar (qadog'i bilan)." },
    { icon: "record_voice_over", t: "Brigadaga qisqa va aniq ma'lumot bering", d: "Nima bo'lgani, qachon boshlangani, nima qilingani va bemorning ma'lum kasalliklari." }
  ],

  /* Bemorni kutib olishda tayyorlab qo'yiladigan ma'lumotlar */
  prepare: [
    "**Shikoyat va vaqt:** nima bezovta qilmoqda va qachon boshlangan.",
    "**Kasalliklar:** qandli diabet, yurak, bosim, astma, tutqanoq, oldingi insult va operatsiyalar.",
    "**Dorilar:** doimiy ichadigan dorilar ro'yxati yoki qadoqlari; oxirgi qabul vaqti.",
    "**Allergiya:** dori, ovqat yoki boshqa moddalarga.",
    "**Oxirgi ovqat va ichimlik:** qachon va nima.",
    "**Aloqa:** yaqin qarindoshning telefon raqami; bemorga kerak bo'ladigan iliq kiyim va hujjatlar."
  ]
};

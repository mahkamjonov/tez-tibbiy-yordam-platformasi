/* Buyruqlar va hujjatlar.
 *
 * Hozirgi yozuvlar — NAMUNA (demo: true). Haqiqiy hujjatlarni shu massivga qo'shing,
 * namunalarni esa o'chiring. Hech qanday hujjat raqami yoki mazmuni tekshirilmagan holda kiritilmagan.
 *
 * Hujjat formati:
 * {
 *   id: "ssv-248",                     // noyob (lotin, tirelar bilan)
 *   type: "ssv" | "prezident" | "vm" | "protokol",
 *   title: "Hujjat nomi",
 *   number: "№248",                    // raqam
 *   date: "2024-03-15",                // YYYY-MM-DD
 *   audience: "Kimlarga tegishli",
 *   summary: "Asosiy mazmuni (2–3 gap)",
 *   memo: ["Eslab qolish uchun 1", "…"],   // qisqa konspekt
 *   pdf: "assets/docs/ssv-248.pdf"     // PDF fayl yo'li yoki to'liq havola; bo'sh bo'lsa tugma o'chiq
 * }
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

TTY.data.docTypes = [
  { key: "ssv", label: "SSV buyruqlari", icon: "gavel" },
  { key: "prezident", label: "Prezident qarorlari", icon: "account_balance" },
  { key: "vm", label: "Vazirlar Mahkamasi", icon: "description" },
  { key: "protokol", label: "Klinik protokollar", icon: "clinical_notes" }
];

TTY.data.documents = [
  {
    id: "namuna-ssv",
    type: "ssv",
    title: "SSV buyrug'i — nomi shu yerga kiritiladi",
    number: "№ —",
    date: "",
    audience: "Tez yordam xodimlari",
    summary: "Hujjatning asosiy mazmuni shu yerda 2–3 gapda yoziladi: nimani tartibga soladi, kimlarga tegishli va qaysi holatlarda qo'llaniladi.",
    memo: [
      "Eslab qolish uchun birinchi asosiy qoida",
      "Ikkinchi qoida yoki muhim muddat/raqam",
      "Uchinchi qoida yoki istisno"
    ],
    pdf: "",
    demo: true
  },
  {
    id: "namuna-prezident",
    type: "prezident",
    title: "Prezident qarori — nomi shu yerga kiritiladi",
    number: "№ —",
    date: "",
    audience: "Sog'liqni saqlash tizimi xodimlari",
    summary: "Qarorning tez tibbiy yordam tizimiga oid asosiy qoidalari qisqacha yoziladi.",
    memo: ["Asosiy maqsad", "Mas'ul tashkilotlar", "Muddatlar"],
    pdf: "",
    demo: true
  },
  {
    id: "namuna-vm",
    type: "vm",
    title: "Vazirlar Mahkamasi qarori — nomi shu yerga kiritiladi",
    number: "№ —",
    date: "",
    audience: "Tez tibbiy yordam muassasalari",
    summary: "Qarorning asosiy mazmuni va amaliy ahamiyati qisqacha yoziladi.",
    memo: ["Asosiy nuqta", "Amaliy ahamiyati"],
    pdf: "",
    demo: true
  }
];

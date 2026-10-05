/* Sayt sozlamalari — shu yerdan o'zgartiriladi */
window.TTY = window.TTY || {};

(function () {
  const host = location.hostname;
  const isLocal = host === "localhost" || host === "127.0.0.1";

  TTY.config = {
    siteName: "Tez Tibbiy Yordam Qalqonlari",
    tagline: "Bilim. Tezkorlik. Inson hayoti.",
    emergencyNumber: "103",
    year: 2026,

    // Test markazi
    testLength: 10,     // bitta testdagi savollar soni (mavzuda savol kam bo'lsa — hammasi)
    passScore: 70,      // o'tish bali, foizda

    /* Admin panel API manzili. "" = shu sayt bilan bir domen (ishlab turgan holat).
     * Mahalliy ishlab chiqishda — o'z kompyuteringizdagi server (cd server && npm start). */
    apiBase: isLocal ? "http://localhost:3001" : "",

    /* Quyidagi qiymatlar admin paneldan (Sozlamalar) kelib, shu yerdagilarni almashtiradi.
     * Bo'sh qoldirilgan qiymat saytda ko'rsatilmaydi. */
    social: {
      telegram: "",
      instagram: "",
      youtube: ""
    },
    phone: "",
    examGroup: "" // toifa/attestatsiya savollariga tayyorgarlik uchun Telegram guruhi
  };
})();

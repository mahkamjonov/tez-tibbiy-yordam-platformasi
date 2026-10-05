/* Dorilar kutubxonasi.
 *
 * Dorilar ro'yxatining o'zi ENDI SERVERDAN yuklanadi (js/remote.js) va admin panel orqali tahrirlanadi:
 *   /admin  →  Dorilar
 * Boshlang'ich (seed) ma'lumot: server/seed/drugs.json.
 *
 * Bu faylda faqat o'zgarmas toifalar ro'yxati qoladi. Yangi toifa kerak bo'lsa — shu yerga va
 * server/seed/drugCats.json ga qo'shing.
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

TTY.data.drugCats = [
  { key: "reanimatsiya", label: "Reanimatsiya", tone: "heart" },
  { key: "yurak", label: "Yurak", tone: "life" },
  { key: "nafas", label: "Nafas va allergiya", tone: "breath" },
  { key: "nevro", label: "Nevrologiya", tone: "brain" }
];

TTY.data.drugs = []; // serverdan to'ldiriladi

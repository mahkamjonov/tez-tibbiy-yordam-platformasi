/* Buyruqlar va hujjatlar.
 *
 * Hujjatlar ro'yxatining o'zi ENDI SERVERDAN yuklanadi (js/remote.js) va admin panel orqali tahrirlanadi:
 *   /admin  →  Hujjatlar
 * Boshlang'ich (seed) ma'lumot: server/seed/documents.json.
 *
 * Bu faylda faqat o'zgarmas hujjat turlari qoladi.
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

TTY.data.docTypes = [
  { key: "ssv", label: "SSV buyruqlari", icon: "gavel" },
  { key: "prezident", label: "Prezident qarorlari", icon: "account_balance" },
  { key: "vm", label: "Vazirlar Mahkamasi", icon: "description" },
  { key: "protokol", label: "Klinik protokollar", icon: "clinical_notes" }
];

TTY.data.documents = []; // serverdan to'ldiriladi

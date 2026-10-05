/* Video darslar.
 *
 * Videolar ro'yxati ENDI SERVERDAN yuklanadi (js/remote.js) va admin panel orqali qo'shiladi:
 *   /admin  →  Video darslar  →  "Video havolasi" maydoniga YouTube havolasini qo'ying.
 * (Instagram, Telegram va boshqa ijtimoiy tarmoq havolalari ham bo'ladi — saytda yangi oynada ochiladi.)
 *
 * Bu faylda faqat o'zgarmas toifalar qoladi.
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

TTY.data.videoCats = [
  { key: "serial", label: "Serial" },
  { key: "talim", label: "Tibbiy ta'lim" },
  { key: "aholi", label: "Aholi uchun" }
];

TTY.data.videos = []; // serverdan to'ldiriladi

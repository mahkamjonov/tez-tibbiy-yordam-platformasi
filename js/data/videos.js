/* Video darslar.
 *
 * Video qo'shish:
 *   youtube: "VIDEO_ID"           — YouTube havolasidagi ID (masalan, watch?v=ABC123 → "ABC123"), yoki
 *   file: "assets/videos/cpr.mp4" — saytga joylangan video fayl.
 *   poster: "assets/videos/cpr.jpg" — ixtiyoriy muqova rasmi.
 * `youtube` ham, `file` ham bo'sh bo'lsa, kartochka "Tez orada" holatida ko'rinadi.
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

TTY.data.videoCats = [
  { key: "serial", label: "Serial" },
  { key: "talim", label: "Tibbiy ta'lim" },
  { key: "aholi", label: "Aholi uchun" }
];

TTY.data.videos = [
  {
    id: "serial-1",
    cat: "serial",
    part: "1-qism",
    title: "Tez tibbiy yordamda jiddiy kun",
    desc: "Tez yordam brigadasining bir kuni: chaqiruvlar, qarorlar va inson hayoti uchun kurash.",
    duration: "",
    tone: "heart",
    icon: "ambulance",
    youtube: "",
    file: "",
    poster: ""
  },
  {
    id: "serial-2",
    cat: "serial",
    part: "2-qism",
    title: "Chaqiruv manzilida...",
    desc: "Brigada manzilga yetib borgach nima sodir bo'ladi: baholash, birinchi yordam va qaror qabul qilish.",
    duration: "",
    tone: "life",
    icon: "location_on",
    youtube: "",
    file: "",
    poster: ""
  },
  {
    id: "cpr-30-2",
    cat: "talim",
    part: "Tibbiy ta'lim",
    title: "CPR 30:2 qanday bajariladi?",
    desc: "Kattalarda yurak-o'pka reanimatsiyasi: kompressiya, puflash va AED bosqichma-bosqich.",
    duration: "",
    tone: "heart",
    icon: "cardiology",
    youtube: "",
    file: "",
    poster: ""
  },
  {
    id: "aholi-kutish",
    cat: "aholi",
    part: "Aholi uchun",
    title: "Tez yordam kelguncha nima qilish kerak?",
    desc: "Oddiy fuqaro uchun: 103 ga to'g'ri qo'ng'iroq qilish va brigada kelguncha birinchi yordam.",
    duration: "",
    tone: "breath",
    icon: "diversity_3",
    youtube: "",
    file: "",
    poster: ""
  }
];

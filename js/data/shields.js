/* 7 ta Qalqon — brendning markaziy elementi.
 * Har bir qalqon bitta klinik yo'nalishni bildiradi va tegishli mavzuga bog'lanadi (topic — mavzu slug'i).
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

TTY.data.shields = [
  { key: "yurak",  title: "Yurak Qalqoni",  tone: "heart",  icon: "favorite",          desc: "Yurak to'xtashi va CPR",              tag: "Kardio",      topic: "yurak" },
  { key: "nafas",  title: "Nafas Qalqoni",  tone: "breath", icon: "air",               desc: "Nafas yetishmovchiligi",              tag: "Nafas",       topic: "nafas" },
  { key: "miya",   title: "Miya Qalqoni",   tone: "brain",  icon: "neurology",         desc: "Insult",                              tag: "Nevrologiya", topic: "insult" },
  { key: "hayot",  title: "Hayot Qalqoni",  tone: "life",   icon: "health_and_safety", desc: "Anafilaksiya va shok",                tag: "Shok",        topic: "shok" },
  { key: "bola",   title: "Bola Qalqoni",   tone: "child",  icon: "child_care",        desc: "Bolalardagi favqulodda holatlar",     tag: "Pediatriya",  topic: "bola" },
  { key: "onalar", title: "Onalar Qalqoni", tone: "mother", icon: "pregnant_woman",    desc: "Akusherlik shoshilinch holatlari",    tag: "Akusherlik",  topic: "akusherlik" },
  { key: "travma", title: "Travma Qalqoni", tone: "trauma", icon: "healing",           desc: "Jarohatlar, qon ketish, immobilizatsiya", tag: "Travma",  topic: "travma" }
];

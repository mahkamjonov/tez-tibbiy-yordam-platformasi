/* Qalqonlar — brendning markaziy elementi. Har bir qalqonning o'z rangi va belgisi bor.
 * `topic` — qalqon ochiladigan mavzu (topics*.js dagi slug).
 * Tartib "Qalqonlar xaritasi"dagi tartib bilan bir xil.
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

TTY.data.shields = [
  { key: "yurak",       title: "Yurak Qalqoni",        tone: "heart",    icon: "favorite",             desc: "Yurak to'xtashi va CPR",              tag: "Yurak",      short: "Yurak",       topic: "yurak" },
  { key: "nafas",       title: "Nafas Qalqoni",        tone: "breath",   icon: "pulmonology",          desc: "Nafas yetishmovchiligi",              tag: "O'pka",      short: "Nafas",       topic: "nafas" },
  { key: "miya",        title: "Miya Qalqoni",         tone: "brain",    icon: "neurology",            desc: "Insult",                              tag: "Miya",       short: "Miya",        topic: "insult" },
  { key: "qon",         title: "Qon ketish Qalqoni",   tone: "bleed",    icon: "bloodtype",            desc: "Kuchli qon ketish va turniket",       tag: "Qon ketish", short: "Qon ketish",  topic: "qon-ketish" },
  { key: "allergiya",   title: "Allergiya Qalqoni",    tone: "allergy",  icon: "allergy",              desc: "Anafilaksiya va adrenalin",           tag: "Allergiya",  short: "Allergiya",   topic: "allergiya" },
  { key: "bola",        title: "Bola Qalqoni",         tone: "child",    icon: "child_care",           desc: "Bolalardagi favqulodda holatlar",     tag: "Bola",       short: "Bola",        topic: "bola" },
  { key: "onalar",      title: "Onalar Qalqoni",       tone: "mother",   icon: "family_restroom",      desc: "Akusherlik shoshilinch holatlari",    tag: "Ona va bola", short: "Ona",        topic: "akusherlik" },
  { key: "travma",      title: "Travma Qalqoni",       tone: "trauma",   icon: "health_and_safety",    desc: "Jarohat, immobilizatsiya",            tag: "Travma",     short: "Travma",      topic: "travma" },
  { key: "kuyish",      title: "Kuyish Qalqoni",       tone: "burn",     icon: "local_fire_department", desc: "Termik, kimyoviy va elektr kuyish",  tag: "Kuyish",     short: "Kuyish",      topic: "kuyish" },
  { key: "zaharlanish", title: "Zaharlanish Qalqoni",  tone: "tox",      icon: "skull",                desc: "Gaz, dori, oziq-ovqat, noma'lum",     tag: "Toksikologiya", short: "Zaharlanish", topic: "zaharlanish" },
  { key: "choqish",     title: "Cho'kish Qalqoni",     tone: "drowning", icon: "waves",                desc: "Suvdan qutqarish va reanimatsiya",    tag: "Cho'kish",   short: "Cho'kish",    topic: "choqish" }
];

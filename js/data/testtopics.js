/* Test mavzulari ro'yxati — mavzular va savollardan avtomatik yig'iladi.
 * (Yangi mavzu yoki savol qo'shsangiz, bu yerni o'zgartirish shart emas.)
 */
window.TTY = window.TTY || {};
TTY.data = TTY.data || {};

(function () {
  const D = TTY.data;
  const count = (key) => D.questions.filter((q) => q.topic === key).length;
  const shieldFor = (slug) => D.shields.find((s) => s.topic === slug);

  const list = [];
  /* 1) qalqonlar (xarita tartibida) */
  D.shields.forEach((s) => {
    const t = D.topics.find((x) => x.slug === s.topic);
    if (t && count(t.quiz)) list.push({ key: t.quiz, label: s.short, icon: s.icon, tone: s.tone, link: "#/maktab/" + t.slug, group: "shield" });
  });
  /* 2) qolgan mavzular (shok, professional yo'nalishlar) */
  D.topics.forEach((t) => {
    if (shieldFor(t.slug) || !count(t.quiz)) return;
    const label = t.slug === "shok" ? "Shok" : t.title.replace(/\s*\(.*\)$/, "");
    list.push({ key: t.quiz, label, icon: t.icon, tone: t.tone, link: "#/maktab/" + t.slug, group: t.proOnly ? "pro" : "topic" });
  });
  /* 3) jihozlar va dorilar */
  list.push({ key: "brigada", label: "Jihozlar", icon: "medical_services", tone: "life", link: "#/brigada", group: "topic" });
  list.push({ key: "dorilar", label: "Dorilar", icon: "medication", tone: "tox", link: "#/dorilar", group: "topic" });

  D.testTopics = list.filter((t) => count(t.key));
  /* Sertifikat uchun: barcha qalqon testlari (topic.quiz kalitlari) */
  D.shieldQuizKeys = D.shields.map((s) => D.topics.find((x) => x.slug === s.topic).quiz);
})();

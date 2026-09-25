/* Tez yordam maktabi (mavzular ro'yxati) va Qalqonlar sahifasi */
(function () {
  "use strict";
  const TTY = window.TTY;
  const { html, ic, norm, $, $$ } = TTY;
  const C = TTY.common;

  TTY.views.school = function () {
    const D = TTY.data;
    const flow = html`<ol class="flow" aria-label="Har bir mavzu tuzilishi">
      ${D.STEPS.map((s, i) => html`<li><span class="flow__n">${i + 1}</span><span>${s.title}</span></li>`)}
    </ol>`;

    const page = html`
      <div class="container page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Tez yordam maktabi" }])}
        ${C.pageHead("Tez yordam maktabi", "Har bir mavzu bir xil tartibda: belgilardan boshlab hujjatlashtirishgacha. Kerakli holatni tanlang.")}
        <div class="card card--tint stack" style="gap:.75rem">
          <p class="muted" style="font-size:var(--text-md);font-weight:600">Har bir mavzu shu 6 bosqichdan iborat</p>
          ${flow}
        </div>
        <div class="section">
          <label class="field" style="max-width:32rem">
            ${ic("search")}
            <input id="school-filter" type="search" placeholder="Mavzuni qidiring: yurak, insult, bola…" autocomplete="off" aria-label="Mavzuni qidirish" />
          </label>
          <div class="grid grid--3" id="school-grid" style="margin-top:1rem">${D.topics.map(C.topicCard)}</div>
          <div class="empty" id="school-empty" hidden style="margin-top:1rem">${ic("search_off")}<strong>Mavzu topilmadi</strong><span>Boshqa so'z bilan qidirib ko'ring.</span></div>
        </div>
        <div class="section">${C.disclaimer()}</div>
      </div>`;

    return {
      title: "Tez yordam maktabi",
      nav: "maktab",
      html: page,
      mount(root) {
        const input = $("#school-filter", root);
        const cards = $$("#school-grid > a", root);
        const texts = D.topics.map((t) => norm([t.title, t.subtitle, t.lead].join(" ")));
        input.addEventListener("input", () => {
          const q = norm(input.value);
          let shown = 0;
          cards.forEach((c, i) => {
            const ok = !q || q.split(" ").every((w) => texts[i].includes(w));
            c.hidden = !ok;
            if (ok) shown++;
          });
          $("#school-empty", root).hidden = shown > 0;
        });
      }
    };
  };

  /* ── Qalqonlar ── */
  TTY.views.shields = function () {
    const D = TTY.data;
    const page = html`
      <div class="container page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Qalqonlar" }])}
        ${C.pageHead("7 ta Himoya qalqoni", "Qalqon — bitta hayotiy yo'nalishni himoya qiluvchi bilim to'plami. Har bir qalqon tegishli protokol, dori, jihoz va testlarga olib boradi.")}
        <div class="grid grid--3 shields-grid">
          ${D.shields.map((s) => {
            const t = C.topicBySlug(s.topic);
            const n = C.testCount(s.topic);
            return html`<a class="card card--link big-shield tone-${s.tone}" href="#/maktab/${s.topic}">
              ${C.shieldBadge(s.tone, s.icon, "shield--lg")}
              <div>
                <span class="badge">${s.tag}</span>
                <h2 class="card__title" style="font-size:var(--text-xl);margin-top:.5rem">${s.title}</h2>
                <p class="card__text" style="margin-top:.25rem">${s.desc}</p>
              </div>
              <ul class="mini-meta">
                <li>${ic("format_list_numbered", "ms-18")}${D.STEPS.length} bosqichli protokol</li>
                <li>${ic("medication", "ms-18")}${t.drugs.length} ta dori</li>
                <li>${ic("quiz", "ms-18")}${n} ta test savoli</li>
              </ul>
              <span class="card__more"><span>Qalqonni ochish</span>${ic("arrow_forward", "ms-18")}</span>
            </a>`;
          })}
          <a class="card card--link big-shield tone-tox" href="#/maktab/zaharlanish">
            <span class="icon-box icon-box--solid" style="width:3.5rem;height:3.5rem">${ic("warning_amber", "ms-32")}</span>
            <div>
              <span class="badge badge--amber">Qo'shimcha mavzu</span>
              <h2 class="card__title" style="font-size:var(--text-xl);margin-top:.5rem">Zaharlanish</h2>
              <p class="card__text" style="margin-top:.25rem">Toksikologiya: gaz, dori, oziq-ovqat va noma'lum modda.</p>
            </div>
            <span class="card__more"><span>Mavzuni ochish</span>${ic("arrow_forward", "ms-18")}</span>
          </a>
        </div>
      </div>`;
    return { title: "Qalqonlar", nav: "qalqonlar", html: page };
  };
})();

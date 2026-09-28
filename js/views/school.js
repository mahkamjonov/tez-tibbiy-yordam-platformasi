/* Tez yordam maktabi (mavzular ro'yxati) va Qalqonlar xaritasi */
(function () {
  "use strict";
  const TTY = window.TTY;
  const { html, ic, norm, $, $$ } = TTY;
  const C = TTY.common;

  /* ── Tez yordam maktabi ── */
  TTY.views.school = function () {
    const D = TTY.data;
    const flow = html`<ol class="flow" aria-label="Har bir mavzu tuzilishi">
      ${D.STEPS.map((s, i) => html`<li><span class="flow__n">${i + 1}</span><span>${s.title}</span></li>`)}
    </ol>`;
    const main = D.topics.filter((t) => !t.proOnly);
    const pro = D.topics.filter((t) => t.proOnly);

    const page = html`
      <div class="container page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Tez yordam maktabi" }])}
        ${C.pageHead("Tez yordam maktabi", "Har bir mavzu bir xil tartibda: belgilardan boshlab hujjatlashtirishgacha. Kerakli holatni tanlang.")}
        <div class="card card--tint stack" style="gap:.75rem">
          <p class="muted" style="font-size:var(--text-md);font-weight:600">Har bir mavzuning professional protokoli shu 6 bosqichdan iborat</p>
          ${flow}
        </div>
        <div class="section">
          <label class="field" style="max-width:32rem">
            ${ic("search")}
            <input id="school-filter" type="search" placeholder="Mavzuni qidiring: yurak, kuyish, cho'kish…" autocomplete="off" aria-label="Mavzuni qidirish" />
          </label>
          <div id="school-groups">
            <div class="school-group" style="margin-top:1.5rem">
              ${C.sectionHead("Qalqon mavzulari", "Favqulodda holatlar: oddiy fuqaro va tibbiyot xodimi uchun")}
              <div class="grid grid--3 school-grid">${main.map(C.topicCard)}</div>
            </div>
            <div class="school-group" style="margin-top:2rem">
              ${C.sectionHead("Professional yo'nalishlar", "Faqat tibbiyot xodimlari uchun", { href: "#/mutaxassis", label: "Mutaxassis qalqoni" })}
              <div class="grid grid--3 school-grid">${pro.map(C.topicCard)}</div>
            </div>
          </div>
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
        const cards = $$(".school-grid > a", root);
        const texts = [...main, ...pro].map((t) => norm([t.title, t.subtitle, t.lead].join(" ")));
        input.addEventListener("input", () => {
          const q = norm(input.value);
          let shown = 0;
          cards.forEach((c, i) => {
            const ok = !q || q.split(" ").every((w) => texts[i].includes(w));
            c.hidden = !ok;
            if (ok) shown++;
          });
          $$(".school-group", root).forEach((g) => (g.hidden = !$$(".school-grid > a", g).some((a) => !a.hidden)));
          $("#school-empty", root).hidden = shown > 0;
        });
      }
    };
  };

  /* ── Qalqonlar xaritasi ── */
  TTY.views.shields = function () {
    const D = TTY.data;
    const sp = TTY.progress.shieldsPassed(), st = TTY.progress.shieldsTotal();
    const inside = [
      { n: 1, t: "Holatni aniqlash", d: "Bemor hushidami? Nafas olyaptimi? Hayotiy belgilar qanday?" },
      { n: 2, t: "Birinchi harakat", d: "Tez yordam chaqirish va hayotiy funksiyalarni baholash." },
      { n: 3, t: "Algoritm", d: "Masalan: CPR → 30:2 → AED → professional yordam." },
      { n: 4, t: "Nima qilish mumkin emas?", d: "Noto'g'ri yoki xavfli harakatlar." },
      { n: 5, t: "Tibbiyot xodimi uchun", d: "Professional algoritm va klinik yondashuv." },
      { n: 6, t: "Oddiy fuqaro uchun", d: "Murakkab terminlarsiz, bosqichma-bosqich ko'rsatma." }
    ];

    const page = html`
      <div class="container page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Qalqonlar xaritasi" }])}
        <header class="page-head">
          <h1>Favqulodda holatni tanlang</h1>
          <p>Kerakli qalqonni bosing — darhol tegishli algoritmga o'tasiz. Har qalqonning o'z rangi va belgisi bor.</p>
        </header>

        <a class="sos-banner" href="#/tezkor">
          <span class="sos-banner__icon">${ic("e911_emergency", "ms-32")}</span>
          <span class="grow"><strong>Hozir shoshilinch yordam kerakmi?</strong><span>Tezkor qalqon: holatni tanlang va eng muhim birinchi harakatlarni ko'ring</span></span>
          ${ic("arrow_forward")}
        </a>

        <section class="section" aria-label="Qalqonlar">
          ${C.shieldMap({ progress: true })}
        </section>

        <section class="section">
          <a class="card card--link cert-strip" href="#/sertifikat">
            <span class="icon-box" style="--tint:var(--color-action-tint);--ink:var(--color-action-ink)">${ic("workspace_premium", "ms-28")}</span>
            <span class="grow"><strong>Qalqon sertifikati: ${sp} / ${st} qalqon testi topshirildi</strong><span class="progress" style="display:block;margin-top:.5rem"><span style="width:${(sp / st) * 100}%"></span></span></span>
            ${ic("arrow_forward")}
          </a>
        </section>

        <section class="section">
          ${C.sectionHead("Qalqon ichiga kirganda nima bo'ladi?", "Har bir qalqon oddiy maqola emas — amaliy shoshilinch yordam algoritmi")}
          <div class="grid grid--3">
            ${inside.map((x) => html`<div class="card cit-item"><span class="algo-n">${x.n}</span><div><strong>${x.t}</strong><p class="card__text">${x.d}</p></div></div>`)}
          </div>
        </section>

        <section class="section">
          <a class="card card--link pro-strip" href="#/mutaxassis">
            <span class="icon-box icon-box--solid">${ic("stethoscope", "ms-28")}</span>
            <span class="grow"><strong>Mutaxassis qalqoni</strong><span class="card__text" style="display:block">Tibbiyot xodimlari uchun professional rejim: ABCDE, SAB, ALS, shok, O'KS, triaj va boshqalar</span></span>
            ${ic("arrow_forward")}
          </a>
        </section>
      </div>`;
    return { title: "Qalqonlar xaritasi", nav: "qalqonlar", html: page };
  };
})();

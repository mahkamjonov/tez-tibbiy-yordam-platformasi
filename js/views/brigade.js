/* Brigada: turlari va jihozlar. Jihoz bosilganda — Nima? Qachon? Qanday? E'tibor */
(function () {
  "use strict";
  const TTY = window.TTY;
  const { html, ic, rich, $, $$ } = TTY;
  const C = TTY.common;

  /** Jihoz haqida ma'lumot oynasi (istalgan sahifadan chaqiriladi) */
  TTY.openEquipment = function (slug) {
    const e = C.equipBySlug(slug);
    if (!e) return;
    const topics = (e.topics || []).map(C.topicBySlug).filter(Boolean);
    TTY.sheet({
      title: e.title,
      icon: e.icon,
      size: "wide",
      body: html`
        <div class="tone-${e.tone}"><span class="badge">${e.cat}</span></div>
        <section class="eq-block">
          <h3>${ic("help", "ms-22")}Nima?</h3>
          <p>${e.what}</p>
        </section>
        <section class="eq-block">
          <h3>${ic("schedule", "ms-22")}Qachon ishlatiladi?</h3>
          <ul class="points">${e.when.map((x) => html`<li>${ic("task_alt", "ms-20")}<span>${x}</span></li>`)}</ul>
        </section>
        <section class="eq-block">
          <h3>${ic("build", "ms-22")}Qanday ishlatiladi?</h3>
          <ol class="numbered">${e.how.map((x) => html`<li><div><span class="d" style="color:var(--color-ink)">${x}</span></div></li>`)}</ol>
        </section>
        <section class="eq-block">
          <div class="callout callout--warn">
            ${ic("visibility", "ms-24")}
            <div><div class="callout__title">Nimalarga e'tibor beriladi?</div>
              <ul>${e.care.map((x) => html`<li>${x}</li>`)}</ul>
            </div>
          </div>
        </section>
        ${topics.length ? html`<section class="eq-block"><h3>${ic("school", "ms-22")}Tegishli mavzular</h3>${C.relatedTopics(topics.map((t) => t.slug))}</section>` : ""}`,
      foot: html`<a class="btn btn--soft" href="#/brigada" data-close>${ic("groups")}Jihozlar</a><button class="btn btn--primary" type="button" data-close>Yopish</button>`
    });
  };

  TTY.views.brigade = function () {
    const D = TTY.data;
    const cats = ["Barchasi"].concat(Array.from(new Set(D.equipment.map((e) => e.cat))));

    const page = html`
      <div class="container page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Brigada" }])}
        ${C.pageHead("Tez yordam brigadasi", "Brigada turlari va jihozlari. Jihozni bosing — nima ekanini, qachon va qanday ishlatilishini hamda nimalarga e'tibor berishni ko'ring.")}

        <section class="section" aria-labelledby="types-title">
          ${C.sectionHead("Brigada turlari", "Tarkib va yo'nalishlar amaldagi buyruqqa qarab farq qilishi mumkin")}
          <div class="grid grid--3">
            ${D.brigades.map((b) => html`<article class="card card--accent tone-${b.tone} stack" style="gap:.75rem">
              <div class="spread" style="justify-content:flex-start;gap:.75rem">
                <span class="icon-box">${ic(b.icon, "ms-28")}</span>
                <h3 class="card__title" style="font-size:var(--text-xl)">${b.title}</h3>
              </div>
              <p class="card__text">${b.text}</p>
              <p class="card__text"><strong>Tarkibi:</strong> ${b.staff}</p>
              <details class="memo" style="margin-top:auto">
                <summary>${ic("checklist", "ms-20")}Asosiy vazifalari${ic("expand_more", "acc__chev")}</summary>
                <ul class="points">${b.tasks.map((x) => html`<li>${ic("check", "ms-18")}<span>${x}</span></li>`)}</ul>
              </details>
            </article>`)}
          </div>
        </section>

        <section class="section" aria-labelledby="equip-title">
          ${C.sectionHead("Brigada jihozlari", "Jihozni bosing — batafsil ma'lumot ochiladi")}
          <div class="chips" role="group" aria-label="Jihoz toifalari">
            ${cats.map((c, i) => html`<button class="chip" type="button" data-cat="${c}" aria-pressed="${String(i === 0)}">${c}</button>`)}
          </div>
          <div class="grid grid--4" id="equip-grid" style="margin-top:1rem">
            ${D.equipment.map((e) => html`<button type="button" class="card card--link card--accent equip-card tone-${e.tone}" data-slug="${e.slug}" data-cat="${e.cat}">
              <span class="spread" style="align-items:flex-start;width:100%">
                <span class="icon-box">${ic(e.icon, "ms-28")}</span>
                <span class="badge">${e.cat}</span>
              </span>
              <span class="card__title">${e.title}</span>
              <span class="card__text clamp-3">${e.what}</span>
              <span class="card__more"><span>Batafsil</span>${ic("arrow_forward", "ms-18")}</span>
            </button>`)}
          </div>
        </section>
      </div>`;

    return {
      title: "Brigada",
      nav: "brigada",
      html: page,
      mount(root) {
        const chips = $$(".chip[data-cat]", root);
        chips.forEach((chip) =>
          chip.addEventListener("click", () => {
            chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
            const cat = chip.dataset.cat;
            $$("#equip-grid > .equip-card", root).forEach((card) => {
              card.hidden = !(cat === "Barchasi" || card.dataset.cat === cat);
            });
          })
        );
        $$(".equip-card", root).forEach((card) => card.addEventListener("click", () => TTY.openEquipment(card.dataset.slug)));
      }
    };
  };
})();

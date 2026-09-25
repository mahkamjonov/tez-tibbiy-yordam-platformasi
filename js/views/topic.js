/* Mavzu sahifasi: 6 bosqichli klinik protokol (mutaxassis) yoki qisqa yo'riqnoma (aholi) */
(function () {
  "use strict";
  const TTY = window.TTY;
  const { html, ic, rich, $, $$ } = TTY;
  const C = TTY.common;

  TTY.views.topic = function (slug) {
    const D = TTY.data;
    const t = C.topicBySlug(slug);
    if (!t) return TTY.views.notFound();
    const aud = TTY.state.audience;
    const idx = D.topics.indexOf(t);
    const next = D.topics[(idx + 1) % D.topics.length];
    const prev = D.topics[(idx - 1 + D.topics.length) % D.topics.length];
    const nQ = C.testCount(t.quiz);

    const tabs = html`<div class="tabs" role="tablist" aria-label="Kim uchun">
      <button class="tab" role="tab" type="button" data-action="set-audience" data-audience="pro" aria-selected="${String(aud === "pro")}">${ic("stethoscope", "ms-20")}Mutaxassis</button>
      <button class="tab" role="tab" type="button" data-action="set-audience" data-audience="public" aria-selected="${String(aud === "public")}">${ic("diversity_3", "ms-20")}Aholi uchun</button>
    </div>`;

    const pro = html`
      <div class="callout callout--critical" role="note">
        ${ic("warning", "ms-28 fill")}
        <div><div class="callout__title">${t.critical.title}</div>${rich(t.critical.text)}</div>
      </div>
      <div>
        <div class="spread" style="margin-bottom:.75rem">
          <h2 class="acc-title">${ic("format_list_numbered", "ms-22")}Bosqichma-bosqich klinik protokol</h2>
          <button class="btn btn--sm btn--ghost no-print" type="button" id="toggle-all" aria-pressed="false">Hammasini ochish</button>
        </div>
        ${D.STEPS.map((s, i) => html`<details class="acc" ${i === 0 ? "open" : ""}>
          <summary class="acc__sum">
            <span class="acc__num">${i + 1}</span>
            <span class="grow"><span class="acc__label">${s.label}</span><span class="acc__title">${s.title}</span></span>
            ${ic("expand_more", "acc__chev")}
          </summary>
          <div class="acc__body">
            <ul class="points">${t.steps[s.key].map((line) => html`<li>${ic("task_alt", "ms-20")}<span>${rich(line)}</span></li>`)}</ul>
          </div>
        </details>`)}
      </div>`;

    const p = t.public;
    const pub = html`
      <div class="callout callout--warn">
        ${ic("info", "ms-28")}
        <div><div class="callout__title">${p.title}</div>${p.intro}</div>
      </div>
      <div class="card">
        <h2 class="acc-title" style="margin-bottom:1rem">${ic("footprint", "ms-22")}Bosqichma-bosqich</h2>
        <ol class="numbered">${p.steps.map((s) => html`<li><div><span class="t">${s.t}</span><span class="d">${s.d}</span></div></li>`)}</ol>
      </div>
      <div class="card" style="background:var(--color-emergency-tint);border-color:transparent">
        <h2 class="acc-title" style="color:var(--color-emergency-dark);margin-bottom:.75rem">${ic("block", "ms-22")}Qilmang</h2>
        <ul class="points points--dont points--red" style="background:transparent;padding:0;border:0">${p.dont.map((d) => html`<li>${ic("close", "ms-20")}<span>${d}</span></li>`)}</ul>
      </div>
      <div class="cluster no-print">
        <button class="btn btn--emergency" type="button" data-action="open-103">${ic("call", "fill")}103 da nima deyiladi?</button>
        <a class="btn btn--ghost" href="#/aholi">${ic("menu_book")}To'liq qo'llanma</a>
      </div>`;

    const drugs = t.drugs.map(C.drugBySlug).filter(Boolean);
    const equip = t.equipment.map(C.equipBySlug).filter(Boolean);

    const page = html`
      <div class="container page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Maktab", href: "#/maktab" }, { label: t.title }])}
        <div class="topic-layout">
          <div class="stack topic-main">
            <header class="card topic-head tone-${t.tone}">
              <div class="topic-head__top">
                <span class="icon-box icon-box--lg">${ic(t.icon, "ms-32 fill")}</span>
                <div class="grow">
                  <div class="cluster">${t.badges.map((b) => html`<span class="badge ${b.c ? "badge--" + b.c : ""}">${b.t}</span>`)}</div>
                  <h1 class="topic-head__title">${t.title}</h1>
                  <p class="topic-head__sub">${t.subtitle}</p>
                </div>
              </div>
              <p class="topic-head__lead">${t.lead}</p>
              <div class="facts">${t.facts.map((f) => html`<div class="stat"><span class="stat__label">${f.l}</span><span class="stat__value ${f.red ? "red" : ""}">${f.v}</span></div>`)}</div>
            </header>
            ${tabs}
            <div role="tabpanel" class="stack" id="topic-panel">${aud === "pro" ? pro : pub}</div>
            <nav class="topic-pager no-print" aria-label="Boshqa mavzular">
              <a class="card card--link" href="#/maktab/${prev.slug}">${ic("arrow_back")}<span><span class="muted" style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:.5px;display:block">Oldingi</span><strong>${prev.title}</strong></span></a>
              <a class="card card--link" href="#/maktab/${next.slug}"><span><span class="muted" style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:.5px;display:block">Keyingi</span><strong>${next.title}</strong></span>${ic("arrow_forward")}</a>
            </nav>
          </div>

          <aside class="stack topic-aside no-print" aria-label="Qo'shimcha ma'lumot">
            <a class="cta-mini" href="#/test/${t.quiz}">
              <span class="icon-box" style="--tint:rgba(255,255,255,.14);--ink:var(--color-action)">${ic("quiz", "ms-28")}</span>
              <span class="grow"><strong>Mavzu bo'yicha test</strong><span>${nQ} ta savol · tahlil bilan</span></span>
              ${ic("arrow_forward")}
            </a>
            ${drugs.length ? html`<section class="card">
              <h2 class="aside-title">${ic("medication", "ms-22")}Tegishli dorilar</h2>
              <ul class="link-list">${drugs.map((d) => html`<li><a href="#/dorilar/${d.slug}"><span class="grow"><strong>${d.name}</strong><span class="muted"> · ${d.group}</span></span>${ic("chevron_right", "ms-20")}</a></li>`)}</ul>
            </section>` : ""}
            ${equip.length ? html`<section class="card">
              <h2 class="aside-title">${ic("medical_services", "ms-22")}Kerakli jihozlar</h2>
              <ul class="link-list">${equip.map((e) => html`<li><a href="#/brigada" data-action="open-equip" data-slug="${e.slug}"><span class="grow"><strong>${e.title}</strong></span>${ic("chevron_right", "ms-20")}</a></li>`)}</ul>
            </section>` : ""}
            ${C.disclaimer("Dori dozalari va qo'llash tartibi amaldagi klinik protokol bo'yicha tekshiriladi.")}
          </aside>
        </div>
      </div>`;

    return {
      title: t.title,
      nav: "maktab",
      audience: true,
      html: page,
      mount(root) {
        const btn = $("#toggle-all", root);
        if (!btn) return;
        btn.addEventListener("click", () => {
          const all = $$("details.acc", root);
          const open = btn.getAttribute("aria-pressed") !== "true";
          all.forEach((d) => (d.open = open));
          btn.setAttribute("aria-pressed", String(open));
          btn.textContent = open ? "Hammasini yopish" : "Hammasini ochish";
        });
      }
    };
  };
})();

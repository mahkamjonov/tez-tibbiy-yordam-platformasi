/* Qalqon (mavzu) sahifasi — amaliy shoshilinch yordam algoritmi.
 *   1. Holatni aniqlash   2. Birinchi harakat   3. Algoritm   4. Nima qilish mumkin emas?
 *   5. Tibbiyot xodimi uchun (6 bosqichli professional protokol)   6. Oddiy fuqaro uchun (oddiy ko'rsatma)
 *   + Qalqon testi (sahifa ichida mini-test)
 * Faqat professional mavzularda (proOnly) 1–4 va 6-bloklar yo'q.
 */
(function () {
  "use strict";
  const TTY = window.TTY;
  const { html, ic, rich, $, $$ } = TTY;
  const C = TTY.common;
  const cfg = TTY.config;

  TTY.views.topic = function (slug) {
    const D = TTY.data;
    const t = C.topicBySlug(slug);
    if (!t) return TTY.views.notFound();
    const proOnly = !!t.proOnly;
    const aud = proOnly ? "pro" : TTY.state.audience;
    const algo = D.algos[slug];
    const shield = C.shieldForTopic(slug);
    const nQ = C.testCount(t.quiz);
    const nTest = Math.min(cfg.testLength, nQ);
    const best = TTY.progress.best(t.quiz);
    const quickCase = D.quick.find((x) => x.topic === slug);

    /* ── pager: o'z guruhi ichida ── */
    const group = D.topics.filter((x) => !!x.proOnly === proOnly);
    const idx = group.indexOf(t);
    const next = group[(idx + 1) % group.length];
    const prev = group[(idx - 1 + group.length) % group.length];

    /* ── 1–4 bloklar ── */
    const blocks = algo ? html`
      <section class="algo" aria-label="Tezkor algoritm">
        <article class="algo-card">
          <h2 class="algo-title"><span class="algo-n">1</span>Holatni aniqlash</h2>
          <ul class="ask">${algo.assess.map((x) => html`<li>${ic("help", "ms-20")}<span>${x}</span></li>`)}</ul>
        </article>
        <article class="algo-card algo-card--first">
          <h2 class="algo-title"><span class="algo-n">2</span>Birinchi harakat</h2>
          <p class="algo-first">${algo.first}</p>
          <button class="btn btn--emergency btn--sm no-print" type="button" data-action="open-103">${ic("call", "ms-18 fill")}103 da nima deyiladi?</button>
        </article>
        <article class="algo-card algo-card--wide">
          <h2 class="algo-title"><span class="algo-n">3</span>Algoritm</h2>
          <ol class="chain">${algo.algo.map((x) => html`<li>${x}</li>`)}</ol>
        </article>
        <article class="algo-card algo-card--dont">
          <h2 class="algo-title"><span class="algo-n">4</span>Nima qilish mumkin emas?</h2>
          <ul class="points points--dont points--red" style="background:transparent;padding:0;border:0">${t.public.dont.map((d) => html`<li>${ic("close", "ms-20")}<span>${d}</span></li>`)}</ul>
        </article>
      </section>` : "";

    /* ── 5-blok: professional protokol ── */
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

    /* ── 6-blok: oddiy fuqaro uchun ── */
    const p = t.public;
    const pub = p ? html`
      <div class="callout callout--warn">
        ${ic("info", "ms-28")}
        <div><div class="callout__title">${p.title}</div>${p.intro}</div>
      </div>
      <div class="card">
        <h2 class="acc-title" style="margin-bottom:1rem">${ic("footprint", "ms-22")}Bosqichma-bosqich</h2>
        <ol class="numbered">${p.steps.map((s) => html`<li><div><span class="t">${s.t}</span><span class="d">${s.d}</span></div></li>`)}</ol>
      </div>
      <div class="cluster no-print">
        <button class="btn btn--emergency" type="button" data-action="open-103">${ic("call", "fill")}103 da nima deyiladi?</button>
        <a class="btn btn--ghost" href="#/103-gacha">${ic("menu_book")}103 gacha qo'llanma</a>
      </div>` : "";

    const tabs = p ? html`<div class="tabs tabs--num" role="tablist" aria-label="Kim uchun">
      <button class="tab" role="tab" type="button" data-action="set-audience" data-audience="pro" aria-selected="${String(aud === "pro")}"><span class="tab-n">5</span><span class="l-full">Tibbiyot xodimi uchun</span><span class="l-short">Xodim uchun</span></button>
      <button class="tab" role="tab" type="button" data-action="set-audience" data-audience="public" aria-selected="${String(aud === "public")}"><span class="tab-n">6</span><span class="l-full">Oddiy fuqaro uchun</span><span class="l-short">Fuqaro uchun</span></button>
    </div>` : "";

    const drugs = t.drugs.map(C.drugBySlug).filter(Boolean);
    const equip = t.equipment.map(C.equipBySlug).filter(Boolean);

    /* ── Qalqon testi ── */
    const testBlock = nQ ? html`<section class="card shield-test tone-${t.tone}" id="shield-test" aria-labelledby="st-title">
      <div class="shield-test__head">
        ${shield ? C.shieldBadge(shield.tone, shield.icon) : html`<span class="icon-box">${ic("quiz", "ms-28")}</span>`}
        <div class="grow">
          <h2 id="st-title" class="card__title" style="font-size:var(--text-xl)">${shield ? "Qalqon testi" : "Mavzu testi"}</h2>
          <p class="card__text">${t.title} — ${nTest} ta savol. O'tish bali ${cfg.passScore}%.</p>
        </div>
        ${best != null ? html`<span class="badge ${TTY.progress.passed(t.quiz) ? "badge--green" : "badge--amber"}">${TTY.progress.passed(t.quiz) ? "✓ O'zlashtirilgan · " : "Eng yaxshi: "}${best}%</span>` : ""}
      </div>
      <div id="quiz-host" class="quiz-host">
        <button class="btn btn--action btn--lg" type="button" id="quiz-start">${ic("play_arrow", "fill")}${best != null ? "Qayta topshirish" : "Testni boshlash"}</button>
      </div>
    </section>` : "";

    const page = html`
      <div class="container page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, proOnly ? { label: "Mutaxassis", href: "#/mutaxassis" } : { label: "Qalqonlar", href: "#/qalqonlar" }, { label: t.title }])}
        <div class="topic-layout">
          <div class="stack topic-main">
            <header class="card topic-head tone-${t.tone}">
              <div class="topic-head__top">
                ${C.topicEmblem(t, "shield--lg")}
                <div class="grow">
                  <div class="cluster">${t.badges.map((b) => html`<span class="badge ${b.c ? "badge--" + b.c : ""}">${b.t}</span>`)}</div>
                  <h1 class="topic-head__title">${t.title}</h1>
                  <p class="topic-head__sub">${t.subtitle}</p>
                </div>
              </div>
              <p class="topic-head__lead">${t.lead}</p>
              <div class="facts">${t.facts.map((f) => html`<div class="stat"><span class="stat__label">${f.l}</span><span class="stat__value ${f.red ? "red" : ""}">${f.v}</span></div>`)}</div>
            </header>
            ${blocks}
            ${tabs}
            <div role="tabpanel" class="stack" id="topic-panel">${aud === "pro" || !p ? pro : pub}</div>
            ${testBlock}
            <nav class="topic-pager no-print" aria-label="Boshqa mavzular">
              <a class="card card--link" href="#/maktab/${prev.slug}">${ic("arrow_back")}<span><span class="muted" style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:.5px;display:block">Oldingi</span><strong>${prev.title}</strong></span></a>
              <a class="card card--link" href="#/maktab/${next.slug}"><span><span class="muted" style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:.5px;display:block">Keyingi</span><strong>${next.title}</strong></span>${ic("arrow_forward")}</a>
            </nav>
          </div>

          <aside class="stack topic-aside no-print" aria-label="Qo'shimcha ma'lumot">
            ${quickCase ? html`<a class="cta-mini cta-mini--red" href="#/tezkor/${quickCase.id}">
              <span class="icon-box" style="--tint:rgba(255,255,255,.18);--ink:#fff">${ic("e911_emergency", "ms-28")}</span>
              <span class="grow"><strong>Tezkor qalqon</strong><span>Hozir yordam kerakmi? Qisqa ko'rsatma</span></span>
              ${ic("arrow_forward")}
            </a>` : ""}
            ${nQ ? html`<button class="cta-mini" type="button" data-scroll="#shield-test">
              <span class="icon-box" style="--tint:rgba(255,255,255,.14);--ink:var(--color-action)">${ic("quiz", "ms-28")}</span>
              <span class="grow"><strong>${shield ? "Qalqon testi" : "Mavzu testi"}</strong><span>${nTest} ta savol · tahlil bilan</span></span>
              ${ic("arrow_downward")}
            </button>` : ""}
            ${drugs.length ? html`<section class="card">
              <h2 class="aside-title">${ic("medication", "ms-22")}Tegishli dorilar</h2>
              <ul class="link-list">${drugs.map((d) => html`<li><a href="#/dorilar/${d.slug}"><span class="grow"><strong>${d.name}</strong><span class="muted"> · ${d.group}</span></span>${ic("chevron_right", "ms-20")}</a></li>`)}</ul>
            </section>` : ""}
            ${equip.length ? html`<section class="card">
              <h2 class="aside-title">${ic("medical_services", "ms-22")}Kerakli jihozlar</h2>
              <ul class="link-list">${equip.map((e) => html`<li><a href="#/brigada" data-action="open-equip" data-slug="${e.slug}"><span class="grow"><strong>${e.title}</strong></span>${ic("chevron_right", "ms-20")}</a></li>`)}</ul>
            </section>` : ""}
            ${C.disclaimer(proOnly ? "Professional ma'lumotlar amaldagi klinik protokollar va rasmiy manbalar bilan tekshirilishi kerak. Dozalar ko'rsatilmagan." : "Dori dozalari va qo'llash tartibi amaldagi klinik protokol bo'yicha tekshiriladi.")}
          </aside>
        </div>
      </div>`;

    return {
      title: t.title,
      nav: proOnly ? "mutaxassis" : "qalqonlar",
      audience: !proOnly,
      html: page,
      mount(root) {
        const btn = $("#toggle-all", root);
        if (btn) {
          btn.addEventListener("click", () => {
            const all = $$("details.acc", root);
            const open = btn.getAttribute("aria-pressed") !== "true";
            all.forEach((d) => (d.open = open));
            btn.setAttribute("aria-pressed", String(open));
            btn.textContent = open ? "Hammasini yopish" : "Hammasini ochish";
          });
        }
        const sc = $("[data-scroll]", root);
        if (sc) sc.addEventListener("click", () => { const el = $(sc.dataset.scroll, root); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); });

        const host = $("#quiz-host", root);
        if (host) {
          const intro = host.innerHTML;
          const begin = () => TTY.quiz.start(host, { key: t.quiz, inline: true, onExit: reset });
          const reset = () => { host.innerHTML = intro; $("#quiz-start", host).addEventListener("click", begin); };
          $("#quiz-start", host).addEventListener("click", begin);
        }
      }
    };
  };
})();

/* Dorilar kutubxonasi: ro'yxat va bitta preparat sahifasi.
 * Tartib: Preparat nomi → Ta'siri → Ko'rsatmalar → Qarshi ko'rsatmalar → Dozalash → Nojo'ya ta'sirlar → Tez yordamda muhim eslatma
 */
(function () {
  "use strict";
  const TTY = window.TTY;
  const { html, ic, rich, norm, $, $$ } = TTY;
  const C = TTY.common;

  const catOf = (key) => TTY.data.drugCats.find((c) => c.key === key) || { label: "", tone: "life" };

  TTY.views.drugs = function () {
    const D = TTY.data;
    const page = html`
      <div class="container page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Dorilar" }])}
        ${C.pageHead("Dorilar kutubxonasi", "Tez yordamda ko'p qo'llaniladigan preparatlar: ta'siri, ko'rsatmalari, qarshi ko'rsatmalari va muhim eslatmalar.")}
        <div class="callout callout--warn">
          ${ic("gavel", "ms-24")}
          <div><div class="callout__title">Doza va qo'llash tartibi</div>Dozalash amaldagi mahalliy klinik protokol va SSV buyrug'i bo'yicha kiritiladi va tekshiriladi. Ushbu sahifa ta'limiy ma'lumotnoma hisoblanadi.</div>
        </div>
        <div class="section" style="margin-top:1.5rem">
          <label class="field" style="max-width:32rem">
            ${ic("search")}
            <input id="drug-filter" type="search" placeholder="Dori nomi, ta'siri yoki guruhi…" autocomplete="off" aria-label="Dorini qidirish" />
          </label>
          <div class="chips" role="group" aria-label="Dori toifalari" style="margin-top:1rem">
            <button class="chip" type="button" data-cat="all" aria-pressed="true">Barchasi <span class="count">${D.drugs.length}</span></button>
            ${D.drugCats.map((c) => html`<button class="chip" type="button" data-cat="${c.key}" aria-pressed="false">${c.label} <span class="count">${D.drugs.filter((d) => d.cat === c.key).length}</span></button>`)}
          </div>
          <div class="grid grid--3" id="drug-grid" style="margin-top:1rem">
            ${D.drugs.map((d) => html`<a class="card card--link card--accent tone-${catOf(d.cat).tone}" href="#/dorilar/${d.slug}" data-cat="${d.cat}" data-hay="${norm([d.name, d.latin, d.group, d.effect, d.indications.join(" ")].join(" "))}">
              <span class="spread" style="align-items:flex-start">
                <span class="icon-box">${ic("medication", "ms-28")}</span>
                <span class="badge">${catOf(d.cat).label}</span>
              </span>
              <span>
                <span class="card__title" style="display:block;font-size:var(--text-xl)">${d.name}</span>
                <span class="muted" style="font-size:var(--text-md)">${d.latin}</span>
              </span>
              <span class="card__text">${d.group}</span>
              <span class="cluster">${d.indications.slice(0, 2).map((x) => html`<span class="badge badge--plain" style="text-transform:none;letter-spacing:0;white-space:normal">${x.split(" (")[0]}</span>`)}</span>
              <span class="card__more"><span>Ma'lumotnomani ochish</span>${ic("arrow_forward", "ms-18")}</span>
            </a>`)}
          </div>
          <div class="empty" id="drug-empty" hidden style="margin-top:1rem">${ic("search_off")}<strong>Dori topilmadi</strong><span>Boshqa nom bilan qidirib ko'ring.</span></div>
        </div>
      </div>`;

    return {
      title: "Dorilar kutubxonasi",
      nav: "dorilar",
      html: page,
      mount(root) {
        const input = $("#drug-filter", root);
        const cards = $$("#drug-grid > a", root);
        const chips = $$(".chip[data-cat]", root);
        let cat = "all";
        const apply = () => {
          const q = norm(input.value).split(" ").filter(Boolean);
          let shown = 0;
          cards.forEach((c) => {
            const ok = (cat === "all" || c.dataset.cat === cat) && q.every((w) => c.dataset.hay.includes(w));
            c.hidden = !ok;
            if (ok) shown++;
          });
          $("#drug-empty", root).hidden = shown > 0;
        };
        input.addEventListener("input", apply);
        chips.forEach((chip) => chip.addEventListener("click", () => {
          cat = chip.dataset.cat;
          chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
          apply();
        }));
      }
    };
  };

  TTY.views.drug = function (slug) {
    const D = TTY.data;
    const d = C.drugBySlug(slug);
    if (!d) return TTY.views.notFound();
    const cat = catOf(d.cat);
    const others = D.drugs.filter((x) => x.slug !== d.slug).slice(0, 4);
    const hasDose = d.dosing && d.dosing.length > 0;

    const block = (n, icon, title, body) => html`<section class="card drug-block">
      <h2 class="drug-block__title"><span class="drug-block__n">${n}</span>${ic(icon, "ms-22")}${title}</h2>
      ${body}
    </section>`;

    const page = html`
      <div class="container page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Dorilar", href: "#/dorilar" }, { label: d.name }])}
        <div class="topic-layout">
          <div class="stack topic-main">
            <header class="card topic-head tone-${cat.tone}">
              <div class="topic-head__top">
                <span class="icon-box icon-box--lg">${ic("medication", "ms-32")}</span>
                <div class="grow">
                  <div class="cluster"><span class="badge">${cat.label}</span></div>
                  <h1 class="topic-head__title">${d.name} <span class="topic-head__latin">${d.latin}</span></h1>
                </div>
              </div>
              <div class="facts">
                <div class="stat"><span class="stat__label">ATC kodi</span><span class="stat__value">${d.atc}</span></div>
                <div class="stat"><span class="stat__label">Chiqarilish shakli</span><span class="stat__value" style="font-size:var(--text-base)">${d.form}</span></div>
                <div class="stat"><span class="stat__label">Guruhi</span><span class="stat__value" style="font-size:var(--text-base)">${d.group}</span></div>
              </div>
            </header>

            ${block(1, "science", "Ta'siri", html`<p class="drug-text">${d.effect}</p>`)}
            ${block(2, "checklist", "Ko'rsatmalar", html`<ul class="points points--do">${d.indications.map((x) => html`<li>${ic("check_circle", "ms-20")}<span>${x}</span></li>`)}</ul>`)}
            ${block(3, "block", "Qarshi ko'rsatmalar", html`<ul class="points points--red">${d.contra.map((x) => html`<li>${ic("cancel", "ms-20")}<span>${x}</span></li>`)}</ul>`)}
            ${block(4, "calculate", "Dozalash", hasDose
              ? html`<div class="dose-table-wrap"><table class="dose-table">
                  <thead><tr><th>Holat</th><th>Doza</th><th>Yo'li</th><th>Izoh</th></tr></thead>
                  <tbody>${d.dosing.map((r) => html`<tr><td data-label="Holat"><strong>${r.case}</strong></td><td data-label="Doza" class="tnum">${r.dose}</td><td data-label="Yo'li">${r.route || "—"}</td><td data-label="Izoh">${r.note || ""}</td></tr>`)}</tbody>
                </table></div>
                ${d.dosingSource ? html`<p class="muted" style="margin-top:.75rem;font-size:var(--text-sm)">${ic("menu_book", "ms-16")} Manba: ${d.dosingSource}</p>` : ""}`
              : html`<div class="callout callout--warn">${ic("edit_note", "ms-24")}<div><div class="callout__title">Doza ma'lumoti kiritilmagan</div>Dozalash va qo'llash tartibi amaldagi mahalliy klinik protokol / SSV buyrug'i bilan tekshirilgach kiritiladi. Shu vaqtgacha dorini faqat rasmiy protokolga ko'ra qo'llang.</div></div>`)}
            ${block(5, "report", "Nojo'ya ta'sirlar", html`<div class="cluster">${d.sideEffects.map((x) => html`<span class="badge badge--plain" style="text-transform:none;letter-spacing:0;font-size:var(--text-sm);padding:6px 12px;white-space:normal">${x}</span>`)}</div>`)}
            <section class="callout callout--critical drug-note">
              ${ic("emergency", "ms-28 fill")}
              <div><div class="callout__title drug-note__title"><span class="drug-block__n">6</span>Tez yordamda muhim eslatma</div>${d.note}</div>
            </section>
          </div>

          <aside class="stack topic-aside no-print">
            <section class="card">
              <h2 class="aside-title">${ic("school", "ms-22")}Bog'liq mavzular</h2>
              ${C.relatedTopics(d.topics)}
            </section>
            <section class="card">
              <h2 class="aside-title">${ic("medication", "ms-22")}Boshqa dorilar</h2>
              <ul class="link-list">${others.map((o) => html`<li><a href="#/dorilar/${o.slug}"><span class="grow"><strong>${o.name}</strong><span class="muted"> · ${o.group}</span></span>${ic("chevron_right", "ms-20")}</a></li>`)}</ul>
              <a class="btn btn--soft btn--block" href="#/dorilar" style="margin-top:.75rem">Barcha dorilar</a>
            </section>
            ${C.disclaimer("Doza va qo'llash tartibi amaldagi klinik protokol / SSV buyrug'i bilan tekshiriladi.")}
          </aside>
        </div>
      </div>`;

    return { title: d.name, nav: "dorilar", html: page };
  };
})();

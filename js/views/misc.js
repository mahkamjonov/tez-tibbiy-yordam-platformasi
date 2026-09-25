/* Hujjatlar, Video darslar, Aholi uchun sahifasi va 404 */
(function () {
  "use strict";
  const TTY = window.TTY;
  const { html, ic, rich, norm, $, $$ } = TTY;
  const C = TTY.common;
  const cfg = TTY.config;

  const fmtDate = (iso) => {
    if (!iso) return "—";
    const [y, m, d] = iso.split("-");
    return d && m && y ? `${d}.${m}.${y}` : iso;
  };

  /* ── Hujjatlar ── */
  TTY.views.docs = function () {
    const D = TTY.data;
    const typeOf = (k) => D.docTypes.find((t) => t.key === k) || { label: k, icon: "description" };
    const hasDemo = D.documents.some((d) => d.demo);

    const card = (d) => {
      const tp = typeOf(d.type);
      return html`<article class="card doc-card" data-type="${d.type}" data-hay="${norm([d.title, d.number, d.audience, d.summary].join(" "))}">
        <div class="doc-card__head">
          <span class="icon-box">${ic(tp.icon, "ms-28")}</span>
          <div class="grow">
            <div class="cluster"><span class="badge">${tp.label}</span>${d.demo ? html`<span class="badge badge--amber">Namuna</span>` : ""}</div>
            <h3 class="doc-card__title">${d.title}</h3>
          </div>
        </div>
        <dl class="doc-meta">
          <div>${ic("article", "ms-20")}<dt>Raqami</dt><dd>${d.number || "—"}</dd></div>
          <div>${ic("event", "ms-20")}<dt>Sana</dt><dd>${fmtDate(d.date)}</dd></div>
          <div>${ic("local_hospital", "ms-20")}<dt>Kimlarga tegishli</dt><dd>${d.audience || "—"}</dd></div>
        </dl>
        <p class="doc-summary">${ic("push_pin", "ms-20")}<span><strong>Asosiy mazmuni:</strong> ${d.summary}</span></p>
        ${d.memo && d.memo.length ? html`<details class="memo">
          <summary>${ic("psychology", "ms-20")}Eslab qolish uchun${ic("expand_more", "acc__chev")}</summary>
          <ul class="points">${d.memo.map((m) => html`<li>${ic("lightbulb", "ms-20")}<span>${m}</span></li>`)}</ul>
        </details>` : ""}
        <div class="doc-actions no-print">
          ${d.pdf
            ? html`<a class="btn btn--primary" href="${d.pdf}" download target="_blank" rel="noopener">${ic("download")}PDF yuklab olish</a>`
            : html`<button class="btn btn--ghost" type="button" disabled>${ic("download")}PDF yuklanmagan</button>`}
        </div>
      </article>`;
    };

    const page = html`
      <div class="container page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Hujjatlar" }])}
        ${C.pageHead("Buyruqlar va hujjatlar", "Tez tibbiy yordamga oid SSV buyruqlari, Prezident va Vazirlar Mahkamasi qarorlari hamda klinik protokollar. Har biri uchun qisqa konspekt bor.")}
        ${hasDemo ? html`<div class="callout callout--warn">${ic("edit_note", "ms-24")}<div><div class="callout__title">Namuna kartochkalar</div>Quyidagi hujjatlar — namuna. Haqiqiy buyruq va qarorlar <code>js/data/documents.js</code> faylida kiritiladi.</div></div>` : ""}
        <div class="section" style="margin-top:1.5rem">
          <label class="field" style="max-width:32rem">
            ${ic("search")}
            <input id="doc-filter" type="search" placeholder="Hujjat nomi yoki raqamini qidiring…" autocomplete="off" aria-label="Hujjat qidirish" />
          </label>
          <div class="chips" role="group" aria-label="Hujjat turlari" style="margin-top:1rem">
            <button class="chip" type="button" data-type="all" aria-pressed="true">Barchasi <span class="count">${D.documents.length}</span></button>
            ${D.docTypes.map((t) => html`<button class="chip" type="button" data-type="${t.key}" aria-pressed="false">${ic(t.icon, "ms-18")}${t.label} <span class="count">${D.documents.filter((d) => d.type === t.key).length}</span></button>`)}
          </div>
          <div class="grid grid--2" id="doc-grid" style="margin-top:1rem">${D.documents.map(card)}</div>
          <div class="empty" id="doc-empty" hidden style="margin-top:1rem">${ic("search_off")}<strong>Hujjat topilmadi</strong><span>Boshqa so'z yoki tur tanlab ko'ring.</span></div>
        </div>
      </div>`;

    return {
      title: "Buyruqlar va hujjatlar",
      nav: "hujjatlar",
      html: page,
      mount(root) {
        const input = $("#doc-filter", root);
        const cards = $$("#doc-grid > article", root);
        const chips = $$(".chip[data-type]", root);
        let type = "all";
        const apply = () => {
          const q = norm(input.value).split(" ").filter(Boolean);
          let shown = 0;
          cards.forEach((c) => {
            const ok = (type === "all" || c.dataset.type === type) && q.every((w) => c.dataset.hay.includes(w));
            c.hidden = !ok;
            if (ok) shown++;
          });
          $("#doc-empty", root).hidden = shown > 0;
        };
        input.addEventListener("input", apply);
        chips.forEach((chip) => chip.addEventListener("click", () => {
          type = chip.dataset.type;
          chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
          apply();
        }));
      }
    };
  };

  /* ── Video darslar ── */
  TTY.views.videos = function () {
    const D = TTY.data;
    const s = cfg.social;
    const page = html`
      <div class="container page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Video darslar" }])}
        ${C.pageHead("Video darslar", "Tibbiy ta'lim, aholi uchun yo'riqnomalar va tez yordam hayotidan serial. Yangi darslar muntazam qo'shib boriladi.")}
        <div class="chips" role="group" aria-label="Video toifalari">
          <button class="chip" type="button" data-cat="all" aria-pressed="true">Barchasi <span class="count">${D.videos.length}</span></button>
          ${D.videoCats.map((c) => html`<button class="chip" type="button" data-cat="${c.key}" aria-pressed="false">${c.label} <span class="count">${D.videos.filter((v) => v.cat === c.key).length}</span></button>`)}
        </div>
        <div class="grid grid--3" id="video-grid" style="margin-top:1rem">
          ${D.videos.map((v) => html`<div data-cat="${v.cat}" class="video-cell">${C.videoCard(v)}</div>`)}
        </div>
        <section class="section">
          <div class="card card--tint social-card">
            <div class="grow">
              <h2 class="card__title" style="font-size:var(--text-xl)">Yangi darslardan xabardor bo'ling</h2>
              <p class="card__text" style="margin-top:.25rem">Videolar Instagram va Telegram sahifalarimizda ham e'lon qilinadi.</p>
            </div>
            <div class="cluster">
              <a class="btn btn--primary" href="${s.instagram}" target="_blank" rel="noopener">${ic("photo_camera", "ms-20")}Instagram</a>
              <a class="btn btn--primary" href="${s.telegram}" target="_blank" rel="noopener">${ic("send", "ms-20")}Telegram</a>
            </div>
          </div>
        </section>
      </div>`;
    return {
      title: "Video darslar",
      nav: "video",
      html: page,
      mount(root) {
        C.wireVideos(root);
        const chips = $$(".chip[data-cat]", root);
        chips.forEach((chip) => chip.addEventListener("click", () => {
          chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
          $$(".video-cell", root).forEach((cell) => (cell.hidden = !(chip.dataset.cat === "all" || cell.dataset.cat === chip.dataset.cat)));
        }));
      }
    };
  };

  /* ── Aholi uchun ── */
  TTY.views.citizen = function () {
    const D = TTY.data;
    const c = D.citizen;
    const page = html`
      <div class="container page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Aholi uchun" }])}
        ${C.pageHead("Aholi uchun qo'llanma", "103 ni qachon va qanday chaqirish, tez yordam kelguncha nima qilish va brigadaga qanday yordam berish mumkin.")}

        <section class="section" aria-labelledby="c1">
          ${C.sectionHead("103 qachon chaqiriladi?", "Quyidagi holatlarda darhol 103 ga qo'ng'iroq qiling")}
          <div class="grid grid--2 cit-grid">
            ${c.whenToCall.map((x) => html`<div class="card cit-item"><span class="icon-box tone-heart">${ic(x.icon, "ms-24")}</span><div><strong>${x.t}</strong><p class="card__text">${x.d}</p></div></div>`)}
          </div>
        </section>

        <section class="section" aria-labelledby="c2">
          ${C.sectionHead("103 ga qanday qo'ng'iroq qilinadi?", "Dispetcherga quyidagilarni aniq ayting")}
          <div class="grid grid--2" style="align-items:start">
            <ol class="numbered card">${c.say.map((x) => html`<li><div><span class="t">${x.t}</span><span class="d">${x.d}</span></div></li>`)}</ol>
            <div class="stack">
              <div class="callout callout--warn">${ic("info", "ms-24")}<div><div class="callout__title">Qo'ng'iroq paytida</div><ul>${c.sayTips.map((x) => html`<li>${x}</li>`)}</ul></div></div>
              <div class="card card--tint">
                <p class="card__title" style="margin-bottom:.5rem">Namuna</p>
                <p class="quote">«Manzil: … ko'chasi, … uy, … xonadon, … qavat. Erkak, taxminan 60 yosh, hushsiz, nafas olmayapti. Telefon: …»</p>
              </div>
              <button class="btn btn--emergency btn--lg" type="button" data-action="open-103">${ic("call", "fill")}103 qo'llanmasi</button>
            </div>
          </div>
        </section>

        <section class="section">
          ${C.sectionHead("Tez yordam kelguncha nima qilish kerak?", "Holatni tanlang — qisqa va aniq yo'riqnoma ochiladi")}
          <div class="grid grid--4">
            ${D.topics.map((t) => html`<a class="card card--link card--accent tone-${t.tone}" href="#/maktab/${t.slug}" data-action="pick-audience" data-audience="public">
              <span class="icon-box">${ic(t.icon, "ms-28 fill")}</span>
              <span class="card__title">${t.title}</span>
              <span class="card__more"><span>Yo'riqnoma</span>${ic("arrow_forward", "ms-18")}</span>
            </a>`)}
          </div>
        </section>

        <section class="section" aria-labelledby="c4">
          ${C.sectionHead("Brigadaga qanday yordam berish mumkin?", "Har bir daqiqa tejaladi")}
          <div class="grid grid--3">
            ${c.helpCrew.map((x) => html`<div class="card cit-item"><span class="icon-box">${ic(x.icon, "ms-24")}</span><div><strong>${x.t}</strong><p class="card__text">${x.d}</p></div></div>`)}
          </div>
        </section>

        <section class="section">
          ${C.sectionHead("Bemorni kutib olishda nimalarga e'tibor berish kerak?", "Brigada kelganda shu ma'lumotlar tayyor bo'lsin")}
          <div class="card"><ul class="points points--do" style="border:0;background:transparent;padding:0">${c.prepare.map((x) => html`<li>${ic("check_circle", "ms-20")}<span>${rich(x)}</span></li>`)}</ul></div>
        </section>

        <section class="section">${C.disclaimer("Bu qo'llanma tibbiy ko'rikni almashtirmaydi. Hayot uchun xavfli holatlarda darhol 103 ga qo'ng'iroq qiling.")}</section>
      </div>`;
    return { title: "Aholi uchun", nav: "aholi", html: page };
  };

  /* ── 404 ── */
  TTY.views.notFound = function () {
    return {
      title: "Sahifa topilmadi",
      nav: "",
      html: html`<div class="container page"><div class="empty" style="margin-top:2rem">${ic("explore_off", "ms-40")}<h1 style="font-size:var(--text-xl)">Sahifa topilmadi</h1><span>Manzil noto'g'ri yoki sahifa ko'chirilgan.</span><a class="btn btn--primary" href="#/" style="margin-top:.75rem">${ic("home")}Bosh sahifaga</a></div></div>`
    };
  };
})();

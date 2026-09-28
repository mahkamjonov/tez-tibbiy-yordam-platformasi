/* Tezkor qalqon (#/tezkor) va "103 gacha" (#/103-gacha) bo'limlari.
 * Ikkalasi ham js/data/quick.js dagi holatlardan foydalanadi.
 */
(function () {
  "use strict";
  const TTY = window.TTY;
  const { html, ic, rich, $, $$ } = TTY;
  const C = TTY.common;

  const byId = (id) => TTY.data.quick.find((q) => q.id === id);

  /* ═════ Tezkor qalqon ═════ */
  TTY.views.quick = function (id) {
    const D = TTY.data;
    if (!id) {
      const page = html`
        <div class="container page">
          ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Tezkor qalqon" }])}
          <header class="page-head sos-head">
            <h1>Hozir shoshilinch yordam kerak</h1>
            <p>Holatni tanlang — sayt eng muhim birinchi harakatlarni ko'rsatadi.</p>
          </header>
          <div class="callout callout--critical">
            ${ic("call", "ms-24 fill")}
            <div><div class="callout__title">Hayot uchun xavfli bo'lsa — avval 103</div>Telefoningizdan 103 raqamini tering va dispetcher ko'rsatmalariga amal qiling. Bu sayt qo'ng'iroq qilmaydi. <button class="link-btn" type="button" data-action="open-103">103 da nima deyiladi?</button></div>
          </div>
          <div class="quick-grid" role="list">
            ${D.quick.map((q) => html`<a class="quick-tile tone-${q.tone}" role="listitem" href="#/tezkor/${q.id}">
              ${C.shieldBadge(q.tone, q.icon)}
              <span class="quick-tile__txt"><strong>${q.title}</strong><span>${q.hint}</span></span>
              ${ic("chevron_right", "quick-tile__go")}
            </a>`)}
          </div>
          <div class="cluster" style="margin-top:1.5rem">
            <a class="btn btn--ghost" href="#/103-gacha">${ic("menu_book")}103 gacha qo'llanma</a>
            <a class="btn btn--ghost" href="#/qalqonlar">${ic("shield")}Qalqonlar xaritasi</a>
          </div>
        </div>`;
      return { title: "Tezkor qalqon", nav: "tezkor", html: page };
    }

    const q = byId(id);
    if (!q) return TTY.views.notFound();
    const topic = q.topic ? C.topicBySlug(q.topic) : null;
    const page = html`
      <div class="container page quick-page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Tezkor qalqon", href: "#/tezkor" }, { label: q.title }])}
        <header class="quick-head tone-${q.tone}">
          ${C.shieldBadge(q.tone, q.icon, "shield--lg")}
          <div class="grow"><h1>${q.title}</h1><p>${q.hint}</p></div>
        </header>

        <div class="sos-call">
          ${ic("call", "ms-28 fill")}
          <div class="grow"><strong>Hayot uchun xavfli bo'lsa — 103</strong><span>Telefoningizdan 103 ni tering. Dispetcher yo'l-yo'riq beradi.</span></div>
          <button class="btn btn--action btn--sm" type="button" data-action="open-103">Nima deyiladi?</button>
        </div>

        <h2 class="quick-h">Eng muhim birinchi harakatlar</h2>
        <ol class="quick-steps">
          ${q.steps.map((s) => html`<li><div><strong>${s.t}</strong>${s.d ? html`<span>${s.d}</span>` : ""}</div></li>`)}
        </ol>

        <div class="callout callout--critical" style="margin-top:1rem">
          ${ic("block", "ms-24")}
          <div><div class="callout__title">Qilmang</div><ul>${q.dont.map((d) => html`<li>${d}</li>`)}</ul></div>
        </div>

        <div class="cluster quick-actions no-print">
          ${topic ? html`<a class="btn btn--primary" href="#/maktab/${topic.slug}">${ic("shield")}Batafsil: ${topic.title}</a>` : ""}
          <a class="btn btn--ghost" href="#/103-gacha/${q.id}">${ic("menu_book")}103 kelguncha reja</a>
          <a class="btn btn--soft" href="#/tezkor">${ic("arrow_back")}Boshqa holat</a>
        </div>
      </div>`;
    return { title: q.title + " — Tezkor qalqon", nav: "tezkor", html: page };
  };

  /* ═════ 103 gacha ═════ */
  const LABEL = { qon: "Qon ketishda", "nafas-yoq": "Yurak to'xtashida", insult: "Insultda", allergiya: "Anafilaksiyada", kuyish: "Kuyishda", bola: "Bolada" };
  const ORDER = ["qon", "nafas-yoq", "insult", "allergiya", "kuyish", "bola"];

  TTY.views.gacha = function (openId) {
    const D = TTY.data;
    const rest = D.quick.filter((q) => !ORDER.includes(q.id));
    const list = ORDER.map(byId).concat(rest).filter(Boolean);
    const openTarget = openId && byId(openId) ? openId : ORDER[0];

    const page = html`
      <div class="container page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "103 gacha" }])}
        ${C.pageHead("103 kelguncha nima qilish kerak?", "Har bir holat uchun alohida reja: nima qilish, nimani kuzatish, brigadaga nima deyish. Murakkab terminlarsiz, oddiy fuqaro uchun.")}

        <div class="grid grid--2" style="align-items:start">
          <div class="callout callout--critical">
            ${ic("call", "ms-24 fill")}
            <div><div class="callout__title">Avval 103 ga qo'ng'iroq qiling</div>Telefonni karnay rejimiga qo'ying — qo'llaringiz bo'sh qoladi va dispetcher yo'l-yo'riq beradi. <button class="link-btn" type="button" data-action="open-103">103 da nima deyiladi?</button></div>
          </div>
          <div class="callout callout--warn">
            ${ic("info", "ms-24")}
            <div><div class="callout__title">Kutish paytida</div><ul>
              <li>Bemorni yolg'iz qoldirmang va holatini kuzating.</li>
              <li>Eshikni oching, brigadani kutib olish uchun kimdir chiqsin.</li>
              <li>Dorilar va hujjatlarni tayyorlang.</li>
            </ul></div>
          </div>
        </div>

        <div class="section" style="margin-top:1.5rem">
          ${list.map((q) => html`<details class="acc gacha-item tone-${q.tone}" id="g-${q.id}" ${q.id === openTarget ? "open" : ""}>
            <summary class="acc__sum">
              ${C.shieldBadge(q.tone, q.icon, "shield--sm")}
              <span class="grow"><span class="acc__label">103 kelguncha</span><span class="acc__title">${LABEL[q.id] || q.title}</span></span>
              ${ic("expand_more", "acc__chev")}
            </summary>
            <div class="acc__body stack">
              <ol class="numbered">${q.steps.map((s) => html`<li><div><span class="t">${s.t}</span>${s.d ? html`<span class="d">${s.d}</span>` : ""}</div></li>`)}</ol>
              <div class="grid grid--2" style="align-items:start">
                <div class="callout callout--warn">${ic("visibility", "ms-24")}<div><div class="callout__title">Kuzating</div><ul>${q.watch.map((x) => html`<li>${x}</li>`)}</ul></div></div>
                <div class="callout callout--critical">${ic("block", "ms-24")}<div><div class="callout__title">Qilmang</div><ul>${q.dont.map((x) => html`<li>${x}</li>`)}</ul></div></div>
              </div>
              <div class="callout">${ic("record_voice_over", "ms-24")}<div><div class="callout__title">Brigadaga ayting</div>${q.tell}</div></div>
              <div class="cluster no-print">
                <a class="btn btn--soft btn--sm" href="#/tezkor/${q.id}">${ic("e911_emergency", "ms-18")}Tezkor ko'rsatma</a>
                ${q.topic ? html`<a class="btn btn--ghost btn--sm" href="#/maktab/${q.topic}">${ic("shield", "ms-18")}Qalqonni ochish</a>` : ""}
              </div>
            </div>
          </details>`)}
        </div>

        <div class="section">${C.disclaimer("Bu ko'rsatmalar tibbiy ko'rikni almashtirmaydi. Hayot uchun xavfli holatlarda darhol 103 ga qo'ng'iroq qiling va dispetcher ko'rsatmalariga amal qiling.")}</div>
      </div>`;

    return {
      title: "103 gacha",
      nav: "gacha",
      html: page,
      mount(root) {
        const el = $("#g-" + openTarget, root);
        if (el && openId) setTimeout(() => el.scrollIntoView({ block: "start" }), 60);
      }
    };
  };
})();

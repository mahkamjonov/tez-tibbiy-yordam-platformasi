/* Ilova qobig'i: sarlavha, navigatsiya, footer, marshrutizator, 103 qo'llanmasi, qidiruv */
(function () {
  "use strict";
  const TTY = window.TTY;
  const { html, ic, $, $$, norm, store, openDialog, closeDialog, sheet, esc } = TTY;
  const cfg = TTY.config;

  TTY.views = TTY.views || {};
  TTY.state = { audience: store.get("audience", "pro") === "public" ? "public" : "pro" };

  /* ── Bo'limlar ──────────────────────────────────────── */
  const NAV = [
    { key: "bosh",      path: "/",           label: "Bosh sahifa",  icon: "home", short: "Asosiy" },
    { key: "aholi",     path: "/aholi",      label: "Aholi uchun",  icon: "diversity_3" },
    { key: "maktab",    path: "/maktab",     label: "Maktab",       icon: "school", long: "Tez yordam maktabi" },
    { key: "qalqonlar", path: "/qalqonlar",  label: "Qalqonlar",    icon: "shield" },
    { key: "brigada",   path: "/brigada",    label: "Brigada",      icon: "groups" },
    { key: "dorilar",   path: "/dorilar",    label: "Dorilar",      icon: "medication" },
    { key: "hujjatlar", path: "/hujjatlar",  label: "Hujjatlar",    icon: "description" },
    { key: "test",      path: "/test",       label: "Test",         icon: "quiz", long: "Test markazi" },
    { key: "video",     path: "/video",      label: "Video",        icon: "smart_display", long: "Video darslar" }
  ];
  TTY.nav = NAV;
  const DESKTOP_NAV = ["maktab", "qalqonlar", "brigada", "dorilar", "hujjatlar", "test", "video", "aholi"];
  const BOTTOM_NAV = ["bosh", "maktab", "dorilar", "test"];
  const byKey = (k) => NAV.find((n) => n.key === k);

  /* ── Qobiq ──────────────────────────────────────────── */
  function renderShell() {
    $("#site-header").innerHTML = String(html`
      <div class="container site-header__inner">
        <a class="brand" href="#/" aria-label="Qalqonlar — bosh sahifa">
          <img src="assets/logo.svg" alt="" width="40" height="40" />
          <span class="brand__text">
            <span class="brand__name">Qalqonlar</span>
            <span class="brand__tag">Tez tibbiy yordam</span>
          </span>
        </a>
        <nav class="desktop-nav" aria-label="Bo'limlar">
          ${DESKTOP_NAV.map((k) => html`<a href="#${byKey(k).path}" data-nav="${k}">${byKey(k).label}</a>`)}
        </nav>
        <div class="header-actions">
          <button class="icon-btn" type="button" data-action="open-search" aria-label="Qidirish" title="Qidirish  ( / )">${ic("search")}</button>
          <button class="btn-103" type="button" data-action="open-103" aria-label="103 qachon va qanday chaqiriladi?">${ic("call", "ms-20 fill")}<span>103</span></button>
        </div>
      </div>`);

    $("#bottom-nav").innerHTML = String(html`
      <div class="bottom-nav__inner">
        ${BOTTOM_NAV.map((k) => { const n = byKey(k); return html`<a href="#${n.path}" data-nav="${k}">${ic(n.icon)}<span>${n.short || n.label}</span></a>`; })}
        <button type="button" data-action="open-menu" aria-label="Boshqa bo'limlar">${ic("menu")}<span>Yana</span></button>
      </div>`);

    $("#menu").innerHTML = String(html`
      <div class="drawer__body">
        <div class="drawer__head">
          <strong>Bo'limlar</strong>
          <button class="icon-btn" type="button" data-close aria-label="Yopish">${ic("close")}</button>
        </div>
        <nav class="drawer__nav" aria-label="Barcha bo'limlar">
          ${NAV.map((n) => html`<a href="#${n.path}" data-nav="${n.key}" data-close-on-click>${ic(n.icon)}<span>${n.long || n.label}</span></a>`)}
        </nav>
        <div class="drawer__foot">
          <button class="btn btn--emergency btn--lg btn--block" type="button" data-action="open-103" data-close-on-click>${ic("call", "fill")}103 qachon chaqiriladi?</button>
        </div>
      </div>`);

    const s = cfg.social;
    $("#site-footer").innerHTML = String(html`
      <div class="container">
        <div class="footer-note" role="note">
          ${ic("warning", "ms-28")}
          <div><strong style="color:inherit">Favqulodda eslatma.</strong> Hayot uchun xavfli holatlarda darhol <b>${cfg.emergencyNumber}</b> raqamiga qo'ng'iroq qiling. Ushbu sayt ta'limiy va axborot xarakteriga ega; amaldagi rasmiy hujjatlar va klinik protokollar ustuvor.</div>
        </div>
        <div class="footer-grid">
          <div>
            <div class="footer-brand"><img src="assets/logo.svg" alt="" width="48" height="48" /><strong>${cfg.siteName}</strong></div>
            <p style="margin-top:.75rem;max-width:34ch;font-size:var(--text-md)">${cfg.tagline} Tibbiyot xodimlari va aholi uchun ishonchli axborot platformasi.</p>
            <div class="social">
              <a href="${s.telegram}" target="_blank" rel="noopener">${ic("send", "ms-20")}Telegram</a>
              <a href="${s.instagram}" target="_blank" rel="noopener">${ic("photo_camera", "ms-20")}Instagram</a>
            </div>
          </div>
          <div>
            <div class="footer-title">Tibbiyot xodimlari</div>
            <div class="footer-links">
              <a href="#/maktab">Tez yordam maktabi</a><a href="#/brigada">Brigada va jihozlar</a>
              <a href="#/dorilar">Dorilar kutubxonasi</a><a href="#/hujjatlar">Buyruqlar va hujjatlar</a>
              <a href="#/test">Test markazi</a>
            </div>
          </div>
          <div>
            <div class="footer-title">Aholi uchun</div>
            <div class="footer-links">
              <a href="#/aholi">103 qachon va qanday chaqiriladi</a><a href="#/aholi">Brigadaga qanday yordam berish</a>
              <a href="#/qalqonlar">7 ta Himoya qalqoni</a><a href="#/video">Video darslar</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom"><span>© ${cfg.year} ${cfg.siteName}. Barcha huquqlar himoyalangan.</span><span>Toshkent, O'zbekiston</span></div>
      </div>`);
  }

  function setActiveNav(key) {
    $$("[data-nav]").forEach((a) => {
      if (a.dataset.nav === key) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  /* ── Auditoriya (Mutaxassis / Aholi) ────────────────── */
  TTY.setAudience = function (a) {
    TTY.state.audience = a === "public" ? "public" : "pro";
    store.set("audience", TTY.state.audience);
  };

  TTY.audienceToggle = function () {
    const a = TTY.state.audience;
    return html`<div class="audience" role="group" aria-label="Kim uchun">
      <button type="button" data-action="set-audience" data-audience="pro" aria-pressed="${String(a === "pro")}">Mutaxassis</button>
      <button type="button" data-action="set-audience" data-audience="public" aria-pressed="${String(a === "public")}">Aholi</button>
    </div>`;
  };

  /* ── 103 qo'llanmasi (qo'ng'iroq qilmaydi — faqat ma'lumot) ── */
  function show103() {
    const c = TTY.data.citizen;
    sheet({
      title: "103 qo'llanmasi",
      icon: "emergency",
      size: "wide",
      body: html`
        <div class="callout callout--critical">
          ${ic("priority_high")}
          <div>
            <div class="callout__title">Qachon zudlik bilan 103 ga qo'ng'iroq qilinadi?</div>
            <ul class="callout-cols">${c.whenToCall.slice(0, 8).map((x) => html`<li>${x.t}</li>`)}</ul>
          </div>
        </div>
        <div>
          <h3 style="font-size:var(--text-lg);display:flex;gap:.5rem;align-items:center">${ic("phone_in_talk", "ms-22")}Dispetcherga nimalarni aytish kerak?</h3>
          <ol class="numbered" style="margin-top:.75rem">
            ${c.say.map((x) => html`<li><div><span class="t">${x.t}</span><span class="d">${x.d}</span></div></li>`)}
          </ol>
        </div>
        <div class="callout callout--warn">
          ${ic("info")}
          <div>
            <div class="callout__title">Go'shakni birinchi qo'ymang</div>
            Dispetcher bergan birinchi yordam ko'rsatmalariga amal qiling. Bu sayt orqali qo'ng'iroq qilinmaydi — telefoningizdan <b>${cfg.emergencyNumber}</b> raqamini tering.
          </div>
        </div>`,
      foot: html`
        <a class="btn btn--primary" href="#/aholi" data-close>${ic("menu_book")}Batafsil</a>
        <button class="btn btn--soft" type="button" data-close>Tushundim</button>`
    });
  }

  /* ── Qidiruv ───────────────────────────────────────── */
  let searchIndex = null;
  function buildIndex() {
    const D = TTY.data;
    const idx = [];
    D.topics.forEach((t) => idx.push({ type: "Mavzu", icon: t.icon, title: t.title, sub: t.subtitle, href: "#/maktab/" + t.slug, hay: norm([t.title, t.subtitle, t.lead].join(" ")) }));
    D.drugs.forEach((d) => idx.push({ type: "Dori", icon: "medication", title: d.name, sub: d.latin + " · " + d.group, href: "#/dorilar/" + d.slug, hay: norm([d.name, d.latin, d.group, d.effect, d.indications.join(" ")].join(" ")) }));
    D.equipment.forEach((e) => idx.push({ type: "Jihoz", icon: e.icon, title: e.title, sub: e.cat, href: "#/brigada", equip: e.slug, hay: norm([e.title, e.cat, e.what].join(" ")) }));
    D.shields.forEach((s) => idx.push({ type: "Qalqon", icon: "shield", title: s.title, sub: s.desc, href: "#/maktab/" + s.topic, hay: norm([s.title, s.desc, s.tag].join(" ")) }));
    D.documents.forEach((d) => idx.push({ type: "Hujjat", icon: "description", title: d.title, sub: (d.number || "") + " " + (d.audience || ""), href: "#/hujjatlar", hay: norm([d.title, d.summary, d.audience].join(" ")) }));
    D.videos.forEach((v) => idx.push({ type: "Video", icon: "smart_display", title: v.title, sub: v.part, href: "#/video", hay: norm([v.title, v.desc, v.part].join(" ")) }));
    idx.push({ type: "Aholi", icon: "call", title: "103 qachon va qanday chaqiriladi?", sub: "Dispetcherga nimalarni aytish kerak", href: "#/aholi", hay: norm("103 chaqiruv dispetcher tez yordam aholi manzil") });
    idx.push({ type: "Test", icon: "quiz", title: "Test markazi", sub: "Attestatsiya va toifa imtihoniga tayyorgarlik", href: "#/test", hay: norm("test savol attestatsiya toifa imtihon") });
    return idx;
  }

  function showSearch() {
    const dlg = $("#search");
    openDialog(dlg);
    const input = $("#search-input");
    input.value = "";
    renderResults("");
    setTimeout(() => input.focus(), 30);
  }

  function renderResults(q) {
    if (!searchIndex) searchIndex = buildIndex();
    const box = $("#search-results");
    const n = norm(q);
    if (!n) {
      const quick = [
        { title: "Yurak to'xtashi (CPR)", href: "#/maktab/yurak", icon: "cardiology" },
        { title: "Adrenalin", href: "#/dorilar/adrenalin", icon: "medication" },
        { title: "Insult — FAST", href: "#/maktab/insult", icon: "neurology" },
        { title: "Defibrillyator / AED", href: "#/brigada", equip: "defibrillyator", icon: "electric_bolt" },
        { title: "Test markazi", href: "#/test", icon: "quiz" }
      ];
      box.innerHTML = String(html`
        <p class="muted" style="font-size:var(--text-sm);font-weight:700;letter-spacing:.5px;text-transform:uppercase;padding:.25rem .5rem">Tez o'tish</p>
        ${quick.map((r) => resultRow(r))}`);
      return;
    }
    const words = n.split(" ");
    const scored = [];
    searchIndex.forEach((r) => {
      if (!words.every((w) => r.hay.includes(w))) return;
      const t = norm(r.title);
      let s = 1;
      if (t.startsWith(n)) s = 4;
      else if (t.includes(n)) s = 3;
      else if (words.every((w) => t.includes(w))) s = 2;
      scored.push([s, r]);
    });
    scored.sort((a, b) => b[0] - a[0]);
    const res = scored.slice(0, 14).map((x) => x[1]);
    box.innerHTML = res.length
      ? String(html`${res.map((r) => resultRow(r))}`)
      : String(html`<div class="empty" style="border:0"><span class="ms">search_off</span><strong>Hech narsa topilmadi</strong><span>Boshqacha yozib ko'ring: masalan, «yurak», «adrenalin» yoki «insult».</span></div>`);
  }

  function resultRow(r) {
    return html`<a class="search-row" href="${r.href}" ${r.equip ? html`data-equip="${r.equip}"` : ""} data-close-search>
      <span class="icon-box icon-box--sm">${ic(r.icon, "ms-22")}</span>
      <span class="grow"><span class="search-row__title">${r.title}</span>${r.sub ? html`<span class="search-row__sub">${r.sub}</span>` : ""}</span>
      ${r.type ? html`<span class="badge badge--plain">${r.type}</span>` : ""}
    </a>`;
  }

  /* ── Marshrutizator ────────────────────────────────── */
  const ROUTES = [
    [/^\/$/, "home"],
    [/^\/aholi$/, "citizen"],
    [/^\/maktab$/, "school"],
    [/^\/maktab\/([\w-]+)$/, "topic"],
    [/^\/qalqonlar$/, "shields"],
    [/^\/brigada$/, "brigade"],
    [/^\/dorilar$/, "drugs"],
    [/^\/dorilar\/([\w-]+)$/, "drug"],
    [/^\/hujjatlar$/, "docs"],
    [/^\/test$/, "test"],
    [/^\/test\/([\w-]+)$/, "testRun"],
    [/^\/video$/, "videos"]
  ];

  let current = null;
  TTY.go = (path) => { location.hash = "#" + path; };
  TTY.rerender = () => render(true);

  function render(keepScroll) {
    const main = $("#main");
    const path = (location.hash.slice(1) || "/").replace(/\/+$/, "") || "/";
    let name = "notFound";
    let args = [];
    for (const [re, n] of ROUTES) {
      const m = path.match(re);
      if (m) { name = n; args = m.slice(1); break; }
    }
    const y = window.scrollY;
    if (TTY.cleanup) { TTY.cleanup(); TTY.cleanup = null; }
    let view;
    try {
      view = TTY.views[name](...args);
    } catch (err) {
      console.error(err);
      view = TTY.views.notFound();
    }
    current = view;
    document.title = (view.title ? view.title + " · " : "") + cfg.siteName;
    main.classList.remove("enter");
    main.innerHTML = String(view.html);
    if (!keepScroll) main.classList.add("enter");
    setActiveNav(view.nav);
    if (view.mount) view.mount(main);
    if (keepScroll) {
      window.scrollTo(0, y);
    } else {
      window.scrollTo(0, 0);
      main.focus({ preventScroll: true });
    }
    if (TTY.afterRoute) { const f = TTY.afterRoute; TTY.afterRoute = null; setTimeout(f, 0); }
  }

  /* ── Umumiy harakatlar (data-action) ───────────────── */
  function wireActions() {
    document.addEventListener("click", (e) => {
      const el = e.target.closest("[data-action],[data-close-on-click],[data-close-search]");
      if (!el) return;
      if (el.hasAttribute("data-close-on-click")) closeDialog(el.closest("dialog"));
      if (el.hasAttribute("data-close-search")) {
        closeDialog($("#search"));
        if (el.dataset.equip) TTY.afterRoute = () => TTY.openEquipment && TTY.openEquipment(el.dataset.equip);
        if (el.getAttribute("href") === location.hash && el.dataset.equip) {
          const f = TTY.afterRoute; TTY.afterRoute = null; f && f();
        }
      }
      const act = el.dataset.action;
      if (!act) return;
      switch (act) {
        case "open-103": e.preventDefault(); show103(); break;
        case "open-search": e.preventDefault(); showSearch(); break;
        case "open-menu": e.preventDefault(); openDialog($("#menu")); break;
        case "pick-audience":
          TTY.setAudience(el.dataset.audience);
          break; // ssilka o'zi yo'naltiradi
        case "set-audience":
          TTY.setAudience(el.dataset.audience);
          if (current && current.audience) render(true);
          break;
        case "open-equip":
          e.preventDefault();
          TTY.openEquipment && TTY.openEquipment(el.dataset.slug);
          break;
      }
    });

    $("#search-input").addEventListener("input", (e) => renderResults(e.target.value));
    $("#search-input").addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const first = $("#search-results .search-row");
        if (first) first.click();
      }
    });

    document.addEventListener("keydown", (e) => {
      const tag = (e.target.tagName || "").toLowerCase();
      const typing = tag === "input" || tag === "textarea" || e.target.isContentEditable;
      if ((e.key === "/" && !typing) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        showSearch();
      }
    });

    const skip = document.querySelector(".skip-link");
    if (skip) skip.addEventListener("click", (e) => { e.preventDefault(); $("#main").focus(); });

    window.addEventListener("beforeprint", () => $$("details.acc").forEach((d) => (d.open = true)));
  }

  /* ── Yuklash ───────────────────────────────────────── */
  function start() {
    TTY.wireDialogs();
    renderShell();
    wireActions();
    window.addEventListener("hashchange", () => render(false));
    render(false);
    document.documentElement.classList.add("ready");
  }

  TTY.show103 = show103;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();

/* Admin panel — Tez Tibbiy Yordam Qalqonlari. Vanilla JS, bog'liqliksiz. */
(function () {
  "use strict";

  /* ── Yordamchilar ─────────────────────────────────────── */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const toLines = (arr) => (Array.isArray(arr) ? arr.join("\n") : "");
  const fromLines = (s) => String(s || "").split("\n").map((x) => x.trim()).filter(Boolean);
  const fromCsv = (s) => String(s || "").split(",").map((x) => x.trim()).filter(Boolean);

  let state = { token: localStorage.getItem("admin_token") || "", user: "", meta: { drugCats: [], docTypes: [], videoCats: [] }, data: {}, editing: null };

  function toast(msg, isError) {
    const t = $("#toast");
    t.textContent = msg;
    t.hidden = false;
    t.classList.toggle("is-error", !!isError);
    clearTimeout(toast._t);
    toast._t = setTimeout(() => (t.hidden = true), 3200);
  }

  async function api(path, opts) {
    opts = opts || {};
    const headers = Object.assign({}, opts.headers, state.token ? { Authorization: "Bearer " + state.token } : {});
    if (opts.body && typeof opts.body !== "string") { headers["Content-Type"] = "application/json"; opts.body = JSON.stringify(opts.body); }
    const res = await fetch(path, Object.assign({}, opts, { headers }));
    if (res.status === 401) { doLogout(); throw new Error("Sessiya tugagan — qayta kiring"); }
    let body = null;
    try { body = await res.json(); } catch (e) { /* bo'sh javob */ }
    if (!res.ok) throw new Error((body && body.error) || `Xatolik (${res.status})`);
    return body;
  }

  /* ── Toifa nomlari ────────────────────────────────────── */
  const labelFrom = (list, key, val) => { const f = (list || []).find((x) => x.key === val); return f ? f.label : val || "—"; };

  /* ── To'plamlar sxemasi ───────────────────────────────── */
  const COLLECTIONS = {
    drugs: {
      title: "Dorilar", api: "/api/drugs", idField: "slug", titleField: "name",
      addLabel: "Yangi dori",
      badge: (it) => (it.name || "?").slice(0, 2).toUpperCase(),
      rowTitle: (it) => it.name,
      rowSub: (it) => [it.latin, labelFrom(state.meta.drugCats, "key", it.cat)].filter(Boolean).join(" · "),
      rowTag: (it) => labelFrom(state.meta.drugCats, "key", it.cat),
      search: (it, q) => [it.name, it.latin, it.group, it.effect].join(" ").toLowerCase().includes(q),
      fields: [
        { key: "name", label: "Dori nomi", type: "text", required: true, half: true },
        { key: "latin", label: "Lotincha nomi", type: "text", half: true },
        { key: "cat", label: "Toifa", type: "select", half: true, options: () => state.meta.drugCats.map((c) => ({ value: c.key, label: c.label })) },
        { key: "group", label: "Farmakologik guruhi", type: "text", half: true },
        { key: "atc", label: "ATC kodi", type: "text", half: true },
        { key: "form", label: "Chiqarilish shakli", type: "text", half: true },
        { key: "effect", label: "Ta'siri", type: "textarea" },
        { key: "indications", label: "Ko'rsatmalar", type: "list", hint: "Har qatorda bitta ko'rsatma" },
        { key: "contra", label: "Qarshi ko'rsatmalar", type: "list", hint: "Har qatorda bitta band" },
        { key: "dosing", label: "Dozalash", type: "dosing", hint: "Amaldagi klinik protokol / SSV buyrug'i bo'yicha to'ldiring. Bo'sh qoldirilsa, saytda “doza kiritilmagan” ko'rsatiladi." },
        { key: "dosingSource", label: "Doza manbasi", type: "text", hint: "Masalan: SSV buyrug'i №..." },
        { key: "sideEffects", label: "Nojo'ya ta'sirlar", type: "list" },
        { key: "note", label: "Tez yordamda muhim eslatma", type: "textarea" },
        { key: "topics", label: "Bog'liq mavzular", type: "csv", hint: "Vergul bilan, masalan: yurak, shok, nafas" }
      ]
    },
    documents: {
      title: "Hujjatlar", api: "/api/documents", idField: "id", titleField: "title",
      addLabel: "Yangi hujjat",
      badge: () => "📄",
      rowTitle: (it) => it.title,
      rowSub: (it) => [it.number, it.date].filter(Boolean).join(" · "),
      rowTag: (it) => labelFrom(state.meta.docTypes, "key", it.type),
      search: (it, q) => [it.title, it.number, it.summary, it.audience].join(" ").toLowerCase().includes(q),
      fields: [
        { key: "title", label: "Sarlavha", type: "text", required: true },
        { key: "type", label: "Turi", type: "select", half: true, options: () => state.meta.docTypes.map((c) => ({ value: c.key, label: c.label })) },
        { key: "number", label: "Raqami", type: "text", half: true, hint: "Masalan: №248" },
        { key: "date", label: "Sanasi", type: "date", half: true },
        { key: "audience", label: "Kimlarga tegishli", type: "text", half: true },
        { key: "summary", label: "Asosiy mazmuni", type: "textarea" },
        { key: "memo", label: "Eslab qolish uchun", type: "list", hint: "Har qatorda bitta band" },
        { key: "pdf", label: "PDF havolasi", type: "text", hint: "Masalan: assets/docs/fayl.pdf (bo'sh — tugma o'chiq turadi)" },
        { key: "demo", label: "Namuna sifatida belgilash", type: "checkbox" }
      ]
    },
    videos: {
      title: "Video darslar", api: "/api/videos", idField: "id", titleField: "title",
      addLabel: "Yangi video",
      badge: () => "▶",
      rowTitle: (it) => it.title,
      rowSub: (it) => [it.part, it.youtube ? "YouTube" : it.file ? "Fayl" : "Tez orada"].filter(Boolean).join(" · "),
      rowTag: (it) => labelFrom(state.meta.videoCats, "key", it.cat),
      search: (it, q) => [it.title, it.desc, it.part].join(" ").toLowerCase().includes(q),
      fields: [
        { key: "title", label: "Sarlavha", type: "text", required: true },
        { key: "cat", label: "Toifa", type: "select", half: true, options: () => state.meta.videoCats.map((c) => ({ value: c.key, label: c.label })) },
        { key: "part", label: "Qism / yorliq", type: "text", half: true, hint: "Masalan: 1-qism" },
        { key: "duration", label: "Davomiyligi", type: "text", half: true, hint: "Masalan: 05:20 (ixtiyoriy)" },
        { key: "tone", label: "Rang (tone)", type: "select", half: true, options: () => TONE_OPTIONS },
        { key: "icon", label: "Ikonka nomi", type: "text", half: true, hint: "Material Symbols, masalan: cardiology" },
        { key: "desc", label: "Tavsif", type: "textarea" },
        { key: "youtube", label: "YouTube video ID", type: "text", hint: "watch?v=XXXX dagi XXXX qismi" },
        { key: "file", label: "Video fayl yo'li", type: "text", hint: "YouTube o'rniga, masalan: assets/videos/fayl.mp4" },
        { key: "poster", label: "Muqova rasmi yo'li", type: "text", hint: "Ixtiyoriy" }
      ]
    }
  };
  const TONE_OPTIONS = ["heart", "breath", "brain", "life", "child", "mother", "trauma", "tox", "bleed", "allergy", "burn", "drowning"].map((t) => ({ value: t, label: t }));

  /* ── Kirish ───────────────────────────────────────────── */
  const loginScreen = $("#login-screen"), appEl = $("#app");

  async function tryResume() {
    if (!state.token) return showLogin();
    try {
      const me = await api("/api/auth/me");
      state.user = me.user;
      await boot();
    } catch (e) {
      showLogin();
    }
  }

  function showLogin() {
    state.token = "";
    localStorage.removeItem("admin_token");
    loginScreen.hidden = false;
    appEl.hidden = true;
  }

  $("#login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = $("#login-btn");
    const errEl = $("#login-error");
    errEl.hidden = true;
    btn.disabled = true;
    btn.textContent = "Tekshirilmoqda…";
    try {
      const res = await api("/api/auth/login", { method: "POST", body: { username: $("#login-user").value.trim(), password: $("#login-pass").value } });
      state.token = res.token;
      state.user = res.user;
      localStorage.setItem("admin_token", state.token);
      $("#login-pass").value = "";
      await boot();
    } catch (e) {
      errEl.textContent = e.message;
      errEl.hidden = false;
    } finally {
      btn.disabled = false;
      btn.textContent = "Kirish";
    }
  });

  function doLogout() {
    showLogin();
  }
  $("#logout-btn").addEventListener("click", doLogout);

  /* ── Ilovani yuklash ──────────────────────────────────── */
  async function boot() {
    loginScreen.hidden = true;
    appEl.hidden = false;
    try {
      state.meta = await api("/api/meta");
    } catch (e) {
      toast("Toifalar yuklanmadi: " + e.message, true);
    }
    await Promise.all(Object.keys(COLLECTIONS).map(loadCollection));
    renderSettingsPanel();
    activateTab(activeTabKey() || "drugs");
  }

  async function loadCollection(key) {
    try {
      state.data[key] = await api(COLLECTIONS[key].api);
    } catch (e) {
      state.data[key] = [];
      toast(`"${COLLECTIONS[key].title}" yuklanmadi: ${e.message}`, true);
    }
    renderPanel(key);
  }

  /* ── Tablar ───────────────────────────────────────────── */
  let currentTab = null;
  function activeTabKey() { return currentTab; }
  $("#tabs").addEventListener("click", (e) => {
    const b = e.target.closest(".tab");
    if (b) activateTab(b.dataset.tab);
  });
  function activateTab(key) {
    currentTab = key;
    $$(".tab").forEach((b) => b.classList.toggle("is-active", b.dataset.tab === key));
    $$("[data-panel]").forEach((p) => p.classList.toggle("is-active", p.id === "panel-" + key));
  }

  /* ── Ro'yxat sahifasi (bo'lim) ────────────────────────── */
  function renderPanel(key) {
    const cfg = COLLECTIONS[key];
    const panel = $("#panel-" + key);
    const items = state.data[key] || [];
    panel.innerHTML = `
      <div class="panel-head">
        <div><h2>${esc(cfg.title)}</h2><p>${items.length} ta yozuv</p></div>
        <button class="btn btn-primary" data-add>+ ${esc(cfg.addLabel)}</button>
      </div>
      <div class="search-bar"><input type="search" placeholder="Qidirish…" data-search /></div>
      <div class="list" data-list></div>
    `;
    $("[data-add]", panel).addEventListener("click", () => openForm(key, null));
    $("[data-search]", panel).addEventListener("input", (e) => renderList(key, e.target.value));
    renderList(key, "");
  }

  function renderList(key, q) {
    const cfg = COLLECTIONS[key];
    const panel = $("#panel-" + key);
    const listEl = $("[data-list]", panel);
    const qq = q.trim().toLowerCase();
    const items = (state.data[key] || []).filter((it) => !qq || cfg.search(it, qq));
    if (!items.length) {
      listEl.innerHTML = `<div class="empty-state">Hech narsa topilmadi.</div>`;
      return;
    }
    listEl.innerHTML = items.map((it) => `
      <div class="row-card" data-id="${esc(it[cfg.idField])}">
        <div class="row-card__badge">${esc(cfg.badge(it))}</div>
        <div class="row-card__main">
          <div class="row-card__title">${esc(cfg.rowTitle(it) || "(nomsiz)")}</div>
          <div class="row-card__sub">${esc(cfg.rowSub(it))}</div>
        </div>
        <span class="row-card__tag">${esc(cfg.rowTag(it) || "")}</span>
        <div class="row-card__actions">
          <button class="btn btn-ghost btn-sm" data-edit>Tahrirlash</button>
          <button class="btn btn-danger btn-sm" data-del>O'chirish</button>
        </div>
      </div>`).join("");
    $$("[data-edit]", listEl).forEach((b) => b.addEventListener("click", (e) => {
      const id = e.target.closest(".row-card").dataset.id;
      openForm(key, (state.data[key] || []).find((x) => String(x[cfg.idField]) === id));
    }));
    $$("[data-del]", listEl).forEach((b) => b.addEventListener("click", async (e) => {
      const id = e.target.closest(".row-card").dataset.id;
      const item = (state.data[key] || []).find((x) => String(x[cfg.idField]) === id);
      if (!confirm(`"${cfg.rowTitle(item)}" o'chirilsinmi? Bu amalni qaytarib bo'lmaydi.`)) return;
      try {
        await api(`${cfg.api}/${encodeURIComponent(id)}`, { method: "DELETE" });
        state.data[key] = state.data[key].filter((x) => String(x[cfg.idField]) !== id);
        renderPanel(key);
        toast("O'chirildi");
      } catch (e2) { toast(e2.message, true); }
    }));
  }

  /* ── Forma (qo'shish / tahrirlash) ────────────────────── */
  const dlg = $("#form-dialog");
  let currentSchema = null, currentKey = null;

  function fieldWrap(f, innerHtml) {
    return `<label class="field${f.half ? " half" : ""}" data-field="${f.key}">
      <span>${esc(f.label)}${f.required ? " *" : ""}</span>
      ${innerHtml}
      ${f.hint ? `<span class="hint">${esc(f.hint)}</span>` : ""}
    </label>`;
  }

  function renderFieldHtml(f, value) {
    if (f.type === "select") {
      const opts = f.options();
      return fieldWrap(f, `<select name="${f.key}">${opts.map((o) => `<option value="${esc(o.value)}" ${o.value === value ? "selected" : ""}>${esc(o.label)}</option>`).join("")}</select>`);
    }
    if (f.type === "textarea" || f.type === "list") {
      const v = f.type === "list" ? toLines(value) : (value || "");
      return fieldWrap(f, `<textarea name="${f.key}">${esc(v)}</textarea>`);
    }
    if (f.type === "checkbox") {
      return `<label class="checkbox-field" data-field="${f.key}"><input type="checkbox" name="${f.key}" ${value ? "checked" : ""} /> ${esc(f.label)}</label>`;
    }
    if (f.type === "date") {
      return fieldWrap(f, `<input type="date" name="${f.key}" value="${esc(value || "")}" />`);
    }
    if (f.type === "csv") {
      return fieldWrap(f, `<input type="text" name="${f.key}" value="${esc(Array.isArray(value) ? value.join(", ") : "")}" />`);
    }
    if (f.type === "dosing") {
      return `<div class="field" data-field="${f.key}"><span>${esc(f.label)}</span>
        <div class="dose-rows" data-dose-rows>${(value || []).map(doseRowHtml).join("")}</div>
        <button type="button" class="btn btn-ghost btn-sm" data-dose-add style="justify-self:start">+ Qator qo'shish</button>
        ${f.hint ? `<span class="hint">${esc(f.hint)}</span>` : ""}
      </div>`;
    }
    return fieldWrap(f, `<input type="text" name="${f.key}" value="${esc(value || "")}" />`);
  }

  function doseRowHtml(row) {
    row = row || {};
    return `<div class="dose-row">
      <input placeholder="Holat (masalan: Yurak to'xtashi)" data-dose="case" value="${esc(row.case)}" />
      <input placeholder="Doza" data-dose="dose" value="${esc(row.dose)}" />
      <input placeholder="Yo'li" data-dose="route" value="${esc(row.route)}" />
      <input placeholder="Izoh" data-dose="note" value="${esc(row.note)}" />
      <button type="button" class="icon-btn" data-dose-del title="O'chirish">✕</button>
    </div>`;
  }

  function wireDosing(body) {
    const wrap = $("[data-dose-rows]", body);
    if (!wrap) return;
    const addBtn = $("[data-dose-add]", body);
    addBtn.addEventListener("click", () => wrap.insertAdjacentHTML("beforeend", doseRowHtml({})));
    wrap.addEventListener("click", (e) => {
      const del = e.target.closest("[data-dose-del]");
      if (del) del.closest(".dose-row").remove();
    });
  }

  function openForm(key, item) {
    const cfg = COLLECTIONS[key];
    currentSchema = cfg;
    currentKey = key;
    state.editing = item;
    $("#form-title").textContent = item ? `${cfg.title.replace(/lar$/, "")}ni tahrirlash` : cfg.addLabel;
    const body = $("#form-body");
    body.innerHTML = cfg.fields.map((f) => renderFieldHtml(f, item ? item[f.key] : (f.type === "dosing" ? [] : ""))).join("");
    wireDosing(body);
    $("#entry-form").dataset.err = "";
    const err = $(".form-error", body);
    if (err) err.remove();
    dlg.showModal();
  }

  $("#form-close").addEventListener("click", () => dlg.close());
  $("#form-cancel").addEventListener("click", () => dlg.close());

  $("#entry-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const cfg = currentSchema, key = currentKey;
    const body = $("#form-body");
    const payload = state.editing ? Object.assign({}, state.editing) : {};
    for (const f of cfg.fields) {
      if (f.type === "dosing") {
        payload[f.key] = $$(".dose-row", body).map((row) => ({
          case: $('[data-dose="case"]', row).value.trim(),
          dose: $('[data-dose="dose"]', row).value.trim(),
          route: $('[data-dose="route"]', row).value.trim(),
          note: $('[data-dose="note"]', row).value.trim()
        })).filter((r) => r.case || r.dose);
        continue;
      }
      const el = body.querySelector(`[name="${f.key}"]`);
      if (!el) continue;
      if (f.type === "checkbox") payload[f.key] = el.checked;
      else if (f.type === "list") payload[f.key] = fromLines(el.value);
      else if (f.type === "csv") payload[f.key] = fromCsv(el.value);
      else payload[f.key] = el.value.trim();
    }
    const missing = cfg.fields.find((f) => f.required && !payload[f.key]);
    if (missing) return showFormError(`"${missing.label}" to'ldirilishi shart`);

    const saveBtn = $("#form-save");
    saveBtn.disabled = true;
    saveBtn.textContent = "Saqlanmoqda…";
    try {
      let saved;
      if (state.editing) {
        const id = state.editing[cfg.idField];
        saved = await api(`${cfg.api}/${encodeURIComponent(id)}`, { method: "PUT", body: payload });
        state.data[key] = state.data[key].map((x) => (x[cfg.idField] === id ? saved : x));
      } else {
        saved = await api(cfg.api, { method: "POST", body: payload });
        state.data[key] = [saved].concat(state.data[key]);
      }
      dlg.close();
      renderPanel(key);
      toast("Saqlandi");
    } catch (e2) {
      showFormError(e2.message);
    } finally {
      saveBtn.disabled = false;
      saveBtn.textContent = "Saqlash";
    }
  });

  function showFormError(msg) {
    const body = $("#form-body");
    let err = $(".form-error", body);
    if (!err) {
      err = document.createElement("div");
      err.className = "form-error";
      body.prepend(err);
    }
    err.textContent = msg;
  }

  /* ── Sozlamalar (parol o'zgartirish) ──────────────────── */
  function renderSettingsPanel() {
    const panel = $("#panel-settings");
    panel.innerHTML = `
      <div class="panel-head"><div><h2>Sozlamalar</h2><p>Kirish: <b>${esc(state.user)}</b></p></div></div>
      <form id="pw-form" style="max-width:24rem;display:grid;gap:0.9rem">
        <label class="field"><span>Joriy parol</span><input type="password" name="cur" required autocomplete="current-password" /></label>
        <label class="field"><span>Yangi parol</span><input type="password" name="new1" required minlength="6" autocomplete="new-password" /></label>
        <label class="field"><span>Yangi parol (tasdiq)</span><input type="password" name="new2" required minlength="6" autocomplete="new-password" /></label>
        <div class="form-error" id="pw-error" hidden></div>
        <button class="btn btn-primary" type="submit">Parolni yangilash</button>
      </form>`;
    $("#pw-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const f = e.target;
      const errEl = $("#pw-error");
      errEl.hidden = true;
      if (f.new1.value !== f.new2.value) { errEl.textContent = "Yangi parollar mos emas"; errEl.hidden = false; return; }
      try {
        await api("/api/auth/change-password", { method: "POST", body: { currentPassword: f.cur.value, newPassword: f.new1.value } });
        toast("Parol yangilandi");
        f.reset();
      } catch (e2) {
        errEl.textContent = e2.message;
        errEl.hidden = false;
      }
    });
  }

  tryResume();
})();

/* UI yordamchilari: xavfsiz shablon, ikonlar, xotira, dialoglar, toast */
(function () {
  "use strict";
  const TTY = (window.TTY = window.TTY || {});

  /* ── Xavfsiz HTML shablon ─────────────────────────────
     html`...${qiymat}...` — qiymatlar avtomatik escape qilinadi,
     ichma-ich html`` va ic() natijalari esa o'z holicha qo'shiladi. */
  const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ESC[c]);
  class Raw {
    constructor(s) { this.s = s; }
    toString() { return this.s; }
  }
  const raw = (s) => new Raw(String(s));
  const val = (v) =>
    v == null || v === false ? "" : v instanceof Raw ? v.s : Array.isArray(v) ? v.map(val).join("") : esc(v);
  const html = (strs, ...vals) => new Raw(strs.reduce((a, s, i) => a + s + (i < vals.length ? val(vals[i]) : ""), ""));
  /** **qalin** belgilarini <strong> ga aylantiradi (avval escape qiladi) */
  const rich = (s) => raw(esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"));
  /** Material Symbols ikonkasi */
  const ic = (name, cls = "") => raw(`<span class="ms ${cls}" aria-hidden="true">${esc(name)}</span>`);

  /* Apostrof va harakat belgilarini olib tashlab, qidiruv uchun soddalashtiradi */
  const norm = (s) =>
    String(s)
      .toLowerCase()
      .replace(/[ʻʼ’‘`´'"]/g, "")
      .replace(/\s+/g, " ")
      .trim();

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ── Xotira (localStorage — xato bo'lsa jim) ─────────── */
  const store = {
    get(k, d) {
      try {
        const v = localStorage.getItem("tty:" + k);
        return v == null ? d : JSON.parse(v);
      } catch (e) { return d; }
    },
    set(k, v) {
      try { localStorage.setItem("tty:" + k, JSON.stringify(v)); } catch (e) { /* ignore */ }
    }
  };

  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const plural = (n, one) => `${n} ta ${one}`;

  /* ── Dialoglar ───────────────────────────────────────── */
  function openDialog(dlg) {
    if (!dlg) return;
    if (dlg.open) return;
    if (typeof dlg.showModal === "function") dlg.showModal();
    else dlg.setAttribute("open", "");
  }
  function closeDialog(dlg) {
    if (dlg && dlg.open) dlg.close();
  }

  /** Umumiy "sheet" oynasini to'ldirib ochadi */
  function sheet({ title, icon, body, foot, size, onClose }) {
    const dlg = $("#sheet");
    dlg.className = "sheet" + (size ? " sheet--" + size : "");
    $("#sheet-title").innerHTML = String(html`${icon ? ic(icon, "ms-28") : ""}<span>${title}</span>`);
    $("#sheet-body").innerHTML = String(body || "");
    const f = $("#sheet-foot");
    f.innerHTML = String(foot || "");
    f.hidden = !foot;
    dlg._onClose = onClose || null;
    openDialog(dlg);
    $("#sheet-body").scrollTop = 0;
    return dlg;
  }

  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
  }

  /* Barcha dialoglar uchun umumiy yopish qoidalari */
  function wireDialogs() {
    document.addEventListener("click", (e) => {
      const closeBtn = e.target.closest("[data-close]");
      if (closeBtn) {
        const dlg = closeBtn.closest("dialog");
        closeDialog(dlg);
        return;
      }
      if (e.target instanceof HTMLDialogElement && e.target.open) closeDialog(e.target);
    });
    document.addEventListener(
      "close",
      (e) => {
        const dlg = e.target;
        if (dlg && dlg._onClose) { const f = dlg._onClose; dlg._onClose = null; f(); }
      },
      true
    );
  }

  TTY.views = TTY.views || {};

  Object.assign(TTY, {
    esc, raw, html, rich, ic, norm, $, $$, store, shuffle, plural,
    openDialog, closeDialog, sheet, toast, wireDialogs
  });
})();

/* Test markazi: mavzu tanlash → savollar (darhol izoh bilan) → natija va takrorlash tahlili */
(function () {
  "use strict";
  const TTY = window.TTY;
  const { html, ic, rich, $, $$, store, shuffle } = TTY;
  const C = TTY.common;
  const cfg = TTY.config;

  const LETTERS = ["A", "B", "C", "D", "E", "F"];
  const topicMeta = (key) => TTY.data.testTopics.find((t) => t.key === key);
  const fmtTime = (s) => String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
  const fmtDate = (ts) => {
    const d = new Date(ts);
    const p = (n) => String(n).padStart(2, "0");
    return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}`;
  };

  /* ── 1. Test markazi ── */
  TTY.views.test = function () {
    const D = TTY.data;
    const history = store.get("results", []);
    const total = D.questions.length;
    const n = Math.min(cfg.testLength, total);

    const page = html`
      <div class="container page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Test markazi" }])}
        ${C.pageHead("Test markazi", "Attestatsiya va toifa imtihoniga tayyorgarlik. Har savoldan so'ng to'g'ri javob va izoh ko'rsatiladi, oxirida esa qaysi mavzularni takrorlash kerakligi bo'yicha tahlil chiqadi.")}

        <a class="cta-dark cta-dark--link" href="#/test/aralash">
          <div class="cta-dark__copy">
            <h2>Aralash test</h2>
            <p>Barcha mavzulardan tasodifiy ${n} ta savol. O'tish bali — ${cfg.passScore}%.</p>
            <span class="btn btn--action btn--lg">${ic("play_arrow", "fill")}Testni boshlash</span>
          </div>
          <dl class="cta-stats"><div><dt>Savollar bazasi</dt><dd class="tnum">${total}</dd></div><div><dt>Mavzular</dt><dd class="tnum">${D.testTopics.length}</dd></div></dl>
        </a>

        <section class="section">
          ${C.sectionHead("Mavzu bo'yicha test", "Bitta mavzuni mustahkamlash uchun")}
          <div class="grid grid--tiles test-topics">
            ${D.testTopics.map((t) => {
              const c = C.testCount(t.key);
              return html`<a class="card card--link tone-${t.tone}" href="#/test/${t.key}">
                <span class="icon-box">${ic(t.icon, "ms-28")}</span>
                <span class="card__title">${t.label}</span>
                <span class="card__text">${c} ta savol</span>
              </a>`;
            })}
          </div>
        </section>

        ${history.length ? html`<section class="section">
          ${C.sectionHead("Oxirgi natijalar", "Faqat shu qurilmada saqlanadi")}
          <div class="card card--flush"><ul class="history">
            ${history.map((h) => {
              const pass = h.percent >= cfg.passScore;
              const tm = h.topic === "aralash" ? { label: "Aralash test" } : topicMeta(h.topic) || { label: h.topic };
              return html`<li>
                <span class="history__score ${pass ? "is-pass" : "is-fail"}">${h.correct}/${h.total}</span>
                <span class="grow"><strong>${tm.label}</strong><span class="muted" style="display:block;font-size:var(--text-sm)">${fmtDate(h.ts)} · ${fmtTime(h.secs)}</span></span>
                <span class="badge ${pass ? "badge--green" : "badge--red"}">${h.percent}%</span>
              </li>`;
            })}
          </ul></div>
          <button class="btn btn--sm btn--ghost" type="button" id="clear-history" style="margin-top:.75rem">${ic("delete", "ms-18")}Tarixni tozalash</button>
        </section>` : ""}
      </div>`;

    return {
      title: "Test markazi",
      nav: "test",
      html: page,
      mount(root) {
        const b = $("#clear-history", root);
        if (b) b.addEventListener("click", () => { store.set("results", []); TTY.rerender(); });
      }
    };
  };

  /* ── 2. Test jarayoni ── */
  TTY.views.testRun = function (key) {
    const D = TTY.data;
    const isMix = key === "aralash";
    const meta = isMix ? { label: "Aralash test", link: "#/test" } : topicMeta(key);
    const pool = isMix ? D.questions : D.questions.filter((q) => q.topic === key);
    if (!meta || !pool.length) return TTY.views.notFound();

    const questions = shuffle(pool)
      .slice(0, cfg.testLength)
      .map((q) => {
        const opts = shuffle(q.options.map((text, i) => ({ text, ok: i === 0 })));
        return { ...q, opts, chosen: null };
      });

    const run = { i: 0, startedAt: Date.now(), finishedAt: null };
    let timer = null;

    const page = html`<div class="container page test" id="test-root"></div>`;

    return {
      title: meta.label + " — test",
      nav: "test",
      html: page,
      mount(root) {
        const host = $("#test-root", root);
        const secs = () => Math.round(((run.finishedAt || Date.now()) - run.startedAt) / 1000);

        TTY.cleanup = () => { clearInterval(timer); document.removeEventListener("keydown", onKey); };

        function onKey(e) {
          if (run.finishedAt) return;
          if (e.ctrlKey || e.metaKey || e.altKey) return;
          const q = questions[run.i];
          const k = e.key.toLowerCase();
          if (q.chosen == null) {
            let idx = -1;
            if (/^[1-4]$/.test(k)) idx = Number(k) - 1;
            else if (["a", "b", "c", "d"].includes(k)) idx = k.charCodeAt(0) - 97;
            if (idx >= 0 && idx < q.opts.length && e.target.tagName !== "INPUT") answer(idx);
          } else if (k === "enter" && e.target.tagName !== "BUTTON") {
            next();
          }
        }
        document.addEventListener("keydown", onKey);

        /* — Savol ko'rinishi — */
        function renderQuestion() {
          const q = questions[run.i];
          const n = questions.length;
          const tm = topicMeta(q.topic);
          host.innerHTML = String(html`
            ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Test", href: "#/test" }, { label: meta.label }])}
            <div class="card test-bar">
              <div class="spread">
                <h1 class="test-count">Savol <b class="tnum">${run.i + 1}</b><span class="tnum"> / ${n}</span></h1>
                <span class="badge badge--amber timer" aria-label="Sarflangan vaqt">${ic("timer", "ms-16")}<span id="timer" class="tnum">${fmtTime(secs())}</span></span>
              </div>
              <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${run.i}"><span style="width:${(run.i / n) * 100}%"></span></div>
              <ol class="dots" aria-hidden="true">${questions.map((x, j) => html`<li class="${x.chosen == null ? (j === run.i ? "is-now" : "") : x.opts[x.chosen].ok ? "is-ok" : "is-bad"}"></li>`)}</ol>
            </div>
            <div class="card q-card">
              <div class="cluster">${tm ? html`<span class="badge tone-${tm.tone}">${tm.label}</span>` : ""}<span class="badge badge--plain">Klinik savol</span></div>
              <p class="q-text" id="q-text">${q.q}</p>
              <div class="options" role="group" aria-labelledby="q-text">
                ${q.opts.map((o, j) => html`<button type="button" class="opt" data-i="${j}"><span class="opt__l">${LETTERS[j]}</span><span class="opt__t">${o.text}</span><span class="opt__mark" aria-hidden="true"></span></button>`)}
              </div>
              <div id="feedback" aria-live="polite"></div>
            </div>
            <div class="test-nav">
              <a class="btn btn--ghost" href="#/test" id="exit" aria-label="Testdan chiqish">${ic("logout", "ms-20")}<span class="hide-xs">Chiqish</span></a>
              <button class="btn btn--action btn--lg" type="button" id="next" disabled>${run.i === n - 1 ? "Natijani ko'rish" : "Keyingi savol"}${ic("arrow_forward")}</button>
            </div>`);
          $$(".opt", host).forEach((b) => b.addEventListener("click", () => answer(Number(b.dataset.i))));
          $("#next", host).addEventListener("click", next);
          clearInterval(timer);
          timer = setInterval(() => { const t = $("#timer", host); if (t) t.textContent = fmtTime(secs()); }, 1000);
          $("#q-text", host).scrollIntoView({ block: "nearest" });
        }

        function answer(j) {
          const q = questions[run.i];
          if (q.chosen != null) return;
          q.chosen = j;
          const ok = q.opts[j].ok;
          $$(".opt", host).forEach((b, idx) => {
            b.disabled = true;
            if (q.opts[idx].ok) { b.classList.add("is-correct"); $(".opt__mark", b).innerHTML = String(ic("check_circle", "ms-24 fill")); }
            else if (idx === j) { b.classList.add("is-wrong"); $(".opt__mark", b).innerHTML = String(ic("cancel", "ms-24 fill")); }
          });
          const tm = topicMeta(q.topic);
          $("#feedback", host).innerHTML = String(html`
            <div class="feedback ${ok ? "is-ok" : "is-bad"}">
              <div class="feedback__head">${ic(ok ? "check_circle" : "cancel", "ms-28 fill")}<strong>${ok ? "To'g'ri javob!" : "Noto'g'ri javob"}</strong></div>
              ${ok ? "" : html`<p><span class="muted">To'g'ri javob:</span> <strong>${q.opts.find((o) => o.ok).text}</strong></p>`}
              <div class="feedback__why">${ic("menu_book", "ms-20")}<div><span class="feedback__label">Izoh</span>${q.explain}</div></div>
              ${tm ? html`<a class="feedback__link" href="${tm.link}" target="_blank" rel="noopener">${ic("open_in_new", "ms-18")}Mavzuni o'qish: ${tm.label} (yangi oynada)</a>` : ""}
            </div>`);
          const nb = $("#next", host);
          nb.disabled = false;
          nb.focus({ preventScroll: true });
          $("#feedback", host).scrollIntoView({ block: "nearest", behavior: "smooth" });
          $$(".dots li", host)[run.i].className = ok ? "is-ok" : "is-bad";
        }

        function next() {
          if (questions[run.i].chosen == null) return;
          if (run.i < questions.length - 1) { run.i++; renderQuestion(); window.scrollTo(0, 0); }
          else finish();
        }

        /* — Natija — */
        function finish() {
          clearInterval(timer);
          run.finishedAt = Date.now();
          const total = questions.length;
          const correct = questions.filter((q) => q.opts[q.chosen].ok).length;
          const percent = Math.round((correct / total) * 100);
          const pass = percent >= cfg.passScore;
          const t = Math.max(secs(), 1);
          const perQ = Math.round(t / total);

          const h = store.get("results", []);
          h.unshift({ ts: Date.now(), topic: key, correct, total, percent, secs: t });
          store.set("results", h.slice(0, 8));

          /* mavzular bo'yicha xatolar */
          const wrongBy = {};
          questions.forEach((q) => { if (!q.opts[q.chosen].ok) (wrongBy[q.topic] = wrongBy[q.topic] || []).push(q); });
          const review = Object.keys(wrongBy).map((k) => ({ key: k, meta: topicMeta(k), qs: wrongBy[k] })).sort((a, b) => b.qs.length - a.qs.length);

          const R = 54, CIRC = 2 * Math.PI * R;
          host.innerHTML = String(html`
            ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Test", href: "#/test" }, { label: "Natija" }])}
            <div class="card ${pass ? "res-head is-pass" : "res-head is-fail"}">
              <span class="res-head__tag">${ic(pass ? "verified" : "flag", "ms-20")}${pass ? "Sinov muvaffaqiyatli yakunlandi!" : "Yana bir urinib ko'ring"}</span>
              <h1>${meta.label}</h1>
              <p class="muted">${fmtDate(Date.now())} · Sarflangan vaqt: ${fmtTime(t)}</p>
            </div>
            <div class="card res-score">
              <div class="ring" role="img" aria-label="${correct} / ${total} to'g'ri javob">
                <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="${R}" class="ring__bg"/><circle cx="60" cy="60" r="${R}" class="ring__fg ${pass ? "is-pass" : "is-fail"}" stroke-dasharray="${CIRC}" stroke-dashoffset="${CIRC * (1 - correct / total)}"/></svg>
                <div class="ring__text"><b class="tnum">${correct}/${total}</b><span>To'g'ri javoblar</span><em class="tnum">${percent}% umumiy</em></div>
              </div>
              <p class="res-score__msg ${pass ? "is-pass" : "is-fail"}">${ic(pass ? "check_circle" : "info", "ms-20 fill")}${pass ? "Muvaffaqiyatli topshirildi" : "O'tish bali yetarli emas"} (o'tish bali: ${cfg.passScore}%)</p>
              <div class="grid grid--3 res-metrics" style="--gutter:.75rem">
                <div class="stat"><span class="stat__label">Tezlik</span><span class="stat__value tnum">${perQ} s <small>/ savol</small></span></div>
                <div class="stat"><span class="stat__label">Aniqlik</span><span class="stat__value tnum">${percent}%</span></div>
                <div class="stat"><span class="stat__label">Vaqt</span><span class="stat__value tnum">${fmtTime(t)}</span></div>
              </div>
            </div>
            <div class="card">
              <div class="spread"><h2 class="acc-title">Natijalar tahlili</h2><span class="muted tnum">Jami: ${total} ta</span></div>
              <div class="splitbar" aria-hidden="true"><span class="is-ok" style="flex:${correct}"></span><span class="is-bad" style="flex:${total - correct}"></span></div>
              <div class="grid grid--2 tally" style="--gutter:.5rem"><span><i class="dot is-ok"></i><b class="tnum">${correct} ta</b> to'g'ri javob</span><span><i class="dot is-bad"></i><b class="tnum">${total - correct} ta</b> xato javob</span></div>
            </div>
            <div class="card card--tint stack" style="gap:1rem">
              <div class="spread" style="justify-content:flex-start;gap:.75rem">
                <span class="icon-box icon-box--sm" style="--tint:var(--color-action-tint);--ink:var(--color-action-ink)">${ic("lightbulb", "ms-22")}</span>
                <div><h2 class="acc-title">Qaysi mavzularni takrorlash kerak?</h2><p class="muted" style="font-size:var(--text-md)">${review.length ? "Xatolar quyidagi mavzularda bo'ldi" : "Barcha javoblar to'g'ri — ajoyib natija!"}</p></div>
              </div>
              ${review.map((r) => html`<a class="card card--link review tone-${r.meta ? r.meta.tone : "life"}" href="${r.meta ? r.meta.link : "#/maktab"}">
                <span class="review__head"><span class="badge badge--red">${r.qs.length} ta xato</span><strong class="card__title">${r.meta ? r.meta.label : r.key}</strong></span>
                <ul class="review__list">${r.qs.map((q) => html`<li>${q.q}</li>`)}</ul>
                <span class="card__more"><span>Mavzuni takrorlash</span>${ic("arrow_forward", "ms-18")}</span>
              </a>`)}
            </div>
            <details class="acc" id="details">
              <summary class="acc__sum"><span class="acc__num">${ic("fact_check", "ms-20")}</span><span class="grow"><span class="acc__title">Batafsil javoblar tahlili</span></span>${ic("expand_more", "acc__chev")}</summary>
              <div class="acc__body stack">
                ${questions.map((q, j) => { const ok = q.opts[q.chosen].ok; return html`<div class="ans ${ok ? "is-ok" : "is-bad"}">
                  <p class="ans__q"><span class="ans__n">${j + 1}</span>${q.q}</p>
                  <p class="ans__a">${ic(ok ? "check_circle" : "cancel", "ms-18 fill")}<span>Sizning javobingiz: <strong>${q.opts[q.chosen].text}</strong></span></p>
                  ${ok ? "" : html`<p class="ans__a is-right">${ic("check_circle", "ms-18 fill")}<span>To'g'ri javob: <strong>${q.opts.find((o) => o.ok).text}</strong></span></p>`}
                  <p class="ans__why">${q.explain}</p>
                </div>`; })}
              </div>
            </details>
            <div class="res-actions no-print">
              <a class="btn btn--action btn--lg" href="#/test/${key}" id="retry">${ic("refresh")}Qayta urinish</a>
              <button class="btn btn--ghost" type="button" id="print">${ic("print")}Natijani chop etish</button>
              <a class="btn btn--soft" href="#/test">${ic("quiz")}Boshqa test</a>
              <a class="btn btn--soft" href="#/">${ic("home")}Bosh sahifa</a>
            </div>`);
          const rt = $("#retry", host);
          rt.addEventListener("click", (e) => { if (location.hash === "#/test/" + key) { e.preventDefault(); TTY.rerender(); window.scrollTo(0, 0); } });
          $("#print", host).addEventListener("click", () => { $("#details", host).open = true; window.print(); });
          window.scrollTo(0, 0);
        }

        renderQuestion();
      }
    };
  };
})();

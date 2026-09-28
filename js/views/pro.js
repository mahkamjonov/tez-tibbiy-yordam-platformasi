/* Mutaxassis qalqoni (professional rejim) va Qalqon sertifikati */
(function () {
  "use strict";
  const TTY = window.TTY;
  const { html, ic, $, $$, store } = TTY;
  const C = TTY.common;
  const cfg = TTY.config;

  /* ═════ Mutaxassis qalqoni ═════ */
  const DIRECTIONS = [
    { slug: "abcde", icon: "checklist", tone: "life", t: "ABCDE va SAB (CAB)", d: "Birlamchi baholash va tizimli yondashuv" },
    { slug: "yurak", icon: "cardiology", tone: "heart", t: "CPR (BLS)", d: "Bazaviy reanimatsiya, AED" },
    { slug: "yurak", icon: "ecg_heart", tone: "heart", t: "ALS", d: "Ritmni aniqlash, defibrillyatsiya, dorilar" },
    { slug: "shok", icon: "monitor_heart", tone: "life", t: "Shok", d: "Turlari, baholash va davo" },
    { slug: "allergiya", icon: "allergy", tone: "allergy", t: "Anafilaksiya", d: "Adrenalin va qo'llab-quvvatlash" },
    { slug: "insult", icon: "neurology", tone: "brain", t: "Insult", d: "FAST, glyukoza, insult markazi" },
    { slug: "oks", icon: "ecg_heart", tone: "heart", t: "O'tkir koronar sindrom", d: "EKG, STEMI, dastlabki davo" },
    { slug: "nafas", icon: "pulmonology", tone: "breath", t: "Nafas yetishmovchiligi", d: "SpO₂, kislorod, BVM" },
    { slug: "travma", icon: "health_and_safety", tone: "trauma", t: "Travma", d: "X-ABCDE, qon ketish, transport" },
    { slug: "immobilizatsiya", icon: "accessibility_new", tone: "trauma", t: "Immobilizatsiya", d: "Bo'yin, umurtqa, chanoq, shinalar" },
    { slug: "triage", icon: "groups", tone: "tox", t: "Triaj", d: "START va ko'p jabrlanuvchili hodisa" },
    { slug: "bola", icon: "child_care", tone: "child", t: "Pediatrik shoshilinch yordam", d: "PAT, bolalar reanimatsiyasi" },
    { slug: "akusherlik", icon: "family_restroom", tone: "mother", t: "Akusherlik shoshilinch yordam", d: "Tug'ruq, preeklampsiya, qon ketish" }
  ];

  TTY.views.pro = function () {
    const tools = [
      { href: "#/dorilar", icon: "medication", t: "Dorilar kutubxonasi" },
      { href: "#/brigada", icon: "groups", t: "Brigada va jihozlar" },
      { href: "#/hujjatlar", icon: "description", t: "Buyruqlar va hujjatlar" },
      { href: "#/test", icon: "quiz", t: "Test markazi" }
    ];
    const page = html`
      <div class="container page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Mutaxassis qalqoni" }])}
        <header class="page-head">
          <h1>Mutaxassis qalqoni</h1>
          <p>Tibbiyot xodimlari uchun alohida professional rejim: feldsherlar, hamshiralar, shifokorlar, tez yordam haydovchilari va tibbiyot talabalari.</p>
        </header>
        <div class="callout callout--warn">
          ${ic("gavel", "ms-24")}
          <div><div class="callout__title">Rasmiy manbalarga tayaning</div>Bu bo'limdagi ma'lumotlar amaldagi klinik protokollar va rasmiy tibbiy manbalar bilan tekshirilishi kerak. Dorilarning dozalari va qo'llash tartibi kiritilmagan — ular «Dorilar» bo'limida protokol bo'yicha to'ldiriladi.</div>
        </div>

        <section class="section">
          ${C.sectionHead("Yo'nalishlar", "Kerakli yo'nalishni tanlang — professional algoritm ochiladi")}
          <div class="grid grid--3">
            ${DIRECTIONS.map((x) => html`<a class="card card--link card--accent tone-${x.tone}" href="#/maktab/${x.slug}" data-action="pick-audience" data-audience="pro">
              <span class="spread" style="align-items:flex-start;width:100%"><span class="icon-box">${ic(x.icon, "ms-28")}</span></span>
              <span><span class="card__title" style="display:block">${x.t}</span><span class="card__text">${x.d}</span></span>
              <span class="card__more"><span>Ochish</span>${ic("arrow_forward", "ms-18")}</span>
            </a>`)}
          </div>
        </section>

        <section class="section">
          ${C.sectionHead("Ish uchun vositalar")}
          <div class="grid grid--4">
            ${tools.map((x) => html`<a class="card card--link" href="${x.href}"><span class="icon-box icon-box--solid">${ic(x.icon, "ms-28")}</span><span class="card__title">${x.t}</span></a>`)}
          </div>
        </section>
      </div>`;
    return { title: "Mutaxassis qalqoni", nav: "mutaxassis", html: page };
  };

  /* ═════ Sertifikat ═════ */
  const NAME_KEY = "certName";
  const todayStr = () => {
    const d = new Date();
    const p = (n) => String(n).padStart(2, "0");
    return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()}`;
  };

  function certificate({ name, avg, date, sample }) {
    return html`<div class="cert ${sample ? "cert--sample" : ""}" id="cert">
      <div class="cert__frame">
        ${sample ? html`<span class="cert__watermark" aria-hidden="true">NAMUNA</span>` : ""}
        <img class="cert__logo" src="assets/logo.png" alt="" width="120" height="120" />
        <p class="cert__brand">Tez tibbiy yordam qalqonlari</p>
        <h2 class="cert__title">Sertifikat</h2>
        <p class="cert__sub">Birinchi yordam bo'yicha bilim testi natijasi</p>
        <p class="cert__who">Ushbu sertifikat egasi</p>
        <p class="cert__name">${name || "Ism Familiya"}</p>
        <p class="cert__text"><b>${TTY.data.shields.length} ta qalqon</b> bo'yicha bilim testlaridan muvaffaqiyatli o'tdi. O'rtacha natija: <b>${avg}%</b>.</p>
        <div class="cert__shields" aria-hidden="true">${TTY.data.shields.map((s) => C.shieldBadge(s.tone, s.icon, "shield--xs"))}</div>
        <div class="cert__foot"><span>${date}</span><span>${cfg.siteName}</span></div>
        <p class="cert__note">Ushbu hujjat platformadagi o'quv testi natijasini bildiradi va rasmiy tibbiy malaka yoki attestatsiya hujjati emas.</p>
      </div>
    </div>`;
  }

  /** Sertifikatni canvas ustiga chizadi */
  async function drawCert({ name, avg, date }) {
    const W = 1600, H = 1131;
    const cv = document.createElement("canvas");
    cv.width = W; cv.height = H;
    const g = cv.getContext("2d");
    const css = getComputedStyle(document.documentElement);
    const v = (n) => css.getPropertyValue(n).trim();
    try { await document.fonts.load('800 60px "Plus Jakarta Sans"'); await document.fonts.load('500 30px "Plus Jakarta Sans"'); } catch (e) { /* ignore */ }
    const F = '"Plus Jakarta Sans", system-ui, sans-serif';

    g.fillStyle = "#ffffff"; g.fillRect(0, 0, W, H);
    g.strokeStyle = v("--color-primary"); g.lineWidth = 14; g.strokeRect(30, 30, W - 60, H - 60);
    g.strokeStyle = v("--color-action"); g.lineWidth = 4; g.strokeRect(58, 58, W - 116, H - 116);

    const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = "assets/logo.png"; });
    const lh = 230, lw = (img.width / img.height) * lh;
    g.drawImage(img, (W - lw) / 2, 100, lw, lh);

    g.textAlign = "center"; g.textBaseline = "alphabetic";
    g.fillStyle = v("--color-primary-soft"); g.font = `700 32px ${F}`;
    g.fillText("TEZ TIBBIY YORDAM QALQONLARI", W / 2, 400);
    g.fillStyle = v("--color-primary"); g.font = `800 92px ${F}`;
    g.fillText("SERTIFIKAT", W / 2, 505);
    g.fillStyle = v("--color-ink-2"); g.font = `500 34px ${F}`;
    g.fillText("Birinchi yordam bo'yicha bilim testi natijasi", W / 2, 560);
    g.font = `500 28px ${F}`; g.fillText("Ushbu sertifikat egasi", W / 2, 640);

    let size = 96;
    g.fillStyle = v("--color-emergency");
    do { g.font = `800 ${size}px ${F}`; size -= 4; } while (g.measureText(name).width > W - 300 && size > 40);
    g.fillText(name, W / 2, 745);
    g.strokeStyle = v("--color-border-strong"); g.lineWidth = 2;
    g.beginPath(); g.moveTo(300, 775); g.lineTo(W - 300, 775); g.stroke();

    g.fillStyle = v("--color-ink"); g.font = `500 32px ${F}`;
    g.fillText(`${TTY.data.shields.length} ta qalqon bo'yicha bilim testlaridan muvaffaqiyatli o'tdi.`, W / 2, 835);
    g.fillText(`O'rtacha natija: ${avg}%`, W / 2, 882);

    /* qalqonlar qatori */
    const shieldPath = new Path2D("M50 6 C68 6 88 14 88 28 C88 56 68 84 50 94 C32 84 12 56 12 28 C12 14 32 6 50 6 Z");
    const n = TTY.data.shields.length, s = 0.62, gap = 26, sw = 100 * s;
    const total = n * sw + (n - 1) * gap;
    let x = (W - total) / 2;
    TTY.data.shields.forEach((sh) => {
      g.save(); g.translate(x, 925); g.scale(s, s);
      g.fillStyle = v("--shield-" + sh.tone) || "#1a3a5c"; g.fill(shieldPath); g.restore();
      x += sw + gap;
    });

    g.fillStyle = v("--color-ink-2"); g.font = `600 28px ${F}`;
    g.textAlign = "left"; g.fillText(date, 110, H - 120);
    g.textAlign = "right"; g.fillText(cfg.siteName, W - 110, H - 120);
    g.textAlign = "center"; g.fillStyle = v("--color-ink-3"); g.font = `500 22px ${F}`;
    g.fillText("Ushbu hujjat platformadagi o'quv testi natijasini bildiradi va rasmiy tibbiy malaka yoki attestatsiya hujjati emas.", W / 2, H - 82);

    return cv;
  }
  TTY.drawCert = drawCert;

  /** Sertifikatni PNG qilib yuklab beradi */
  async function downloadPng(data) {
    const cv = await drawCert(data);
    const blob = await new Promise((res) => cv.toBlob(res, "image/png"));
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "qalqon-sertifikati.png";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }

  TTY.views.certificate = function () {
    const D = TTY.data;
    const sp = TTY.progress.shieldsPassed(), st = TTY.progress.shieldsTotal();
    const eligible = TTY.progress.allShieldsPassed();
    const avg = TTY.progress.average();
    const savedName = store.get(NAME_KEY, "");

    const row = (s) => {
      const t = C.topicBySlug(s.topic);
      const best = TTY.progress.best(t.quiz);
      const ok = TTY.progress.passed(t.quiz);
      return html`<li class="cert-row tone-${s.tone}">
        ${C.shieldBadge(s.tone, s.icon, "shield--sm")}
        <span class="grow"><strong>${s.title}</strong><span class="muted" style="display:block;font-size:var(--text-sm)">${best != null ? "Eng yaxshi natija: " + best + "%" : "Test hali topshirilmagan"}</span></span>
        ${ok ? html`<span class="badge badge--green">${ic("check", "ms-16")}Topshirilgan</span>` : html`<a class="btn btn--soft btn--sm" href="#/maktab/${s.topic}" data-scroll-test>${ic("quiz", "ms-18")}Testni topshirish</a>`}
      </li>`;
    };

    const page = html`
      <div class="container page">
        ${C.breadcrumb([{ label: "Bosh sahifa", href: "#/" }, { label: "Qalqon sertifikati" }])}
        <header class="page-head">
          <h1>Qalqon sertifikati</h1>
          <p>Barcha ${st} ta qalqon bo'yicha testdan o'tsangiz, «Birinchi yordam bo'yicha bilim testi» natijasini sertifikat ko'rinishida olasiz.</p>
        </header>

        <div class="card cert-progress">
          <div class="spread"><h2 class="acc-title">${ic("workspace_premium", "ms-22")}Sizning yo'lingiz</h2><span class="badge ${eligible ? "badge--green" : "badge--amber"} tnum">${sp} / ${st}</span></div>
          <div class="progress" style="margin:.75rem 0 1rem"><span style="width:${(sp / st) * 100}%"></span></div>
          <p class="muted" style="font-size:var(--text-md)">Har bir qalqon testidan kamida ${cfg.passScore}% natija kerak. Natijalar faqat shu qurilmada saqlanadi.</p>
        </div>

        ${eligible ? html`
          <section class="section">
            ${C.sectionHead("Tabriklaymiz! Sertifikatingiz tayyor", "Ismingizni yozing — sertifikat shu yerda hosil bo'ladi")}
            <div class="cert-tools no-print">
              <label class="field" style="max-width:26rem">
                ${ic("badge")}
                <input id="cert-name" type="text" maxlength="60" placeholder="Ism va familiyangiz" autocomplete="name" value="${savedName}" aria-label="Ism va familiya" />
              </label>
              <div class="cluster">
                <button class="btn btn--action" type="button" id="cert-png">${ic("download")}PNG yuklab olish</button>
                <button class="btn btn--ghost" type="button" id="cert-print">${ic("print")}Chop etish / PDF</button>
              </div>
            </div>
            <div id="cert-wrap">${certificate({ name: savedName, avg, date: todayStr() })}</div>
          </section>` : html`
          <section class="section">
            ${C.sectionHead("Qalqonlar bo'yicha holat", "Topshirilmagan testlarni topshiring")}
            <ul class="cert-list card card--flush">${D.shields.map(row)}</ul>
          </section>
          <section class="section">
            ${C.sectionHead("Sertifikat namunasi", "Barcha testlardan o'tgach ismingiz bilan shunday sertifikat olasiz")}
            <div id="cert-wrap">${certificate({ name: "", avg: 90, date: todayStr(), sample: true })}</div>
          </section>`}
      </div>`;

    return {
      title: "Qalqon sertifikati",
      nav: "test",
      html: page,
      mount(root) {
        if (!eligible) return;
        const input = $("#cert-name", root);
        const wrap = $("#cert-wrap", root);
        const nameEl = () => $(".cert__name", wrap);
        const current = () => (input.value || "").trim();
        input.addEventListener("input", () => {
          const n = current();
          store.set(NAME_KEY, n);
          nameEl().textContent = n || "Ism Familiya";
        });
        $("#cert-png", root).addEventListener("click", async () => {
          if (!current()) { TTY.toast("Avval ismingizni yozing"); input.focus(); return; }
          try { await downloadPng({ name: current(), avg, date: todayStr() }); TTY.toast("Sertifikat yuklab olindi"); }
          catch (e) { TTY.toast("Yuklab olib bo'lmadi — «Chop etish» dan foydalaning"); }
        });
        $("#cert-print", root).addEventListener("click", () => {
          if (!current()) { TTY.toast("Avval ismingizni yozing"); input.focus(); return; }
          window.print();
        });
      }
    };
  };
})();

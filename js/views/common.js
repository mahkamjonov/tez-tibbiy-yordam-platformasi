/* Ko'rinishlar uchun umumiy bo'laklar */
(function () {
  "use strict";
  const TTY = window.TTY;
  const { html, ic, rich } = TTY;
  const C = (TTY.common = {});

  const topicBySlug = (slug) => TTY.data.topics.find((t) => t.slug === slug);
  const drugBySlug = (slug) => TTY.data.drugs.find((d) => d.slug === slug);
  const equipBySlug = (slug) => TTY.data.equipment.find((e) => e.slug === slug);
  const shieldForTopic = (slug) => TTY.data.shields.find((s) => s.topic === slug);
  const testCount = (key) => TTY.data.questions.filter((q) => q.topic === key).length;
  Object.assign(C, { topicBySlug, drugBySlug, equipBySlug, shieldForTopic, testCount });

  /** Qalqon shaklidagi rangli belgi (brendning markaziy elementi) */
  C.shieldBadge = (tone, icon, size = "") => html`<span class="shield tone-${tone} ${size}" aria-hidden="true">
    <svg viewBox="0 0 100 100"><path d="M50 6 C68 6 88 14 88 28 C88 56 68 84 50 94 C32 84 12 56 12 28 C12 14 32 6 50 6 Z"/></svg>${ic(icon)}
  </span>`;

  /** Mavzuning belgisi: qalqoni bo'lsa — qalqon, bo'lmasa — oddiy ikonka */
  C.topicEmblem = (t, size = "") => {
    const s = shieldForTopic(t.slug);
    return s ? C.shieldBadge(s.tone, s.icon, size) : html`<span class="icon-box tone-${t.tone} ${size ? "icon-box--lg" : ""}">${ic(t.icon, size ? "ms-32 fill" : "ms-28 fill")}</span>`;
  };

  C.breadcrumb = (items) => html`<nav class="breadcrumb" aria-label="Sahifa yo'li">
    ${items.map((it, i) => {
      const last = i === items.length - 1;
      return html`${i ? ic("chevron_right") : ""}${last ? html`<span aria-current="page">${it.label}</span>` : html`<a href="${it.href}">${it.label}</a>`}`;
    })}
  </nav>`;

  C.pageHead = (title, lead) => html`<header class="page-head"><h1>${title}</h1>${lead ? html`<p>${lead}</p>` : ""}</header>`;

  C.sectionHead = (title, sub, link) => html`<div class="section-head">
    <div><h2>${title}</h2>${sub ? html`<p>${sub}</p>` : ""}</div>
    ${link ? html`<a class="link-more" href="${link.href}">${link.label}${ic("chevron_right", "ms-20")}</a>` : ""}
  </div>`;

  C.disclaimer = (text) => html`<div class="callout callout--warn no-print">
    ${ic("gavel")}
    <div><div class="callout__title">Ta'limiy ma'lumot</div>${text || "Bu sahifadagi ma'lumotlar ta'limiy maqsadda berilgan. Amaldagi SSV buyruqlari va klinik protokollar bilan farq bo'lsa, rasmiy hujjat ustuvor."}</div>
  </div>`;

  C.topicCard = (t) => html`<a class="card card--link card--accent tone-${t.tone}" href="#/maktab/${t.slug}">
    <div class="spread" style="align-items:flex-start">
      ${C.topicEmblem(t)}
      <span class="cluster" style="justify-content:flex-end">${t.badges.slice(0, 1).map((b) => html`<span class="badge ${b.c ? "badge--" + b.c : ""}">${b.t}</span>`)}</span>
    </div>
    <div>
      <h3 class="card__title">${t.title}</h3>
      <p class="card__text clamp-3" style="margin-top:.25rem">${t.lead}</p>
    </div>
    <span class="card__more"><span>Protokolni ochish</span>${ic("arrow_forward", "ms-18")}</span>
  </a>`;

  /** "Qalqonlar xaritasi" plitkalari — favqulodda holatni tanlash */
  C.shieldMap = (opts = {}) => {
    const { progress = false } = opts;
    return html`<div class="shield-map" role="list">
      ${TTY.data.shields.map((s) => {
        const t = topicBySlug(s.topic);
        const done = progress && TTY.progress && TTY.progress.passed(t.quiz);
        return html`<a class="map-tile tone-${s.tone}" role="listitem" href="#/maktab/${s.topic}">
          ${C.shieldBadge(s.tone, s.icon, "shield--md")}
          <span class="map-tile__name">${s.short}</span>
          ${done ? html`<span class="map-tile__done" title="Test topshirilgan">${ic("check_circle", "ms-18 fill")}</span>` : ""}
        </a>`;
      })}
      <a class="map-tile map-tile--pro" role="listitem" href="#/mutaxassis">
        <span class="shield shield--md" aria-hidden="true"><svg viewBox="0 0 100 100"><path d="M50 6 C68 6 88 14 88 28 C88 56 68 84 50 94 C32 84 12 56 12 28 C12 14 32 6 50 6 Z"/></svg>${ic("stethoscope")}</span>
        <span class="map-tile__name">Mutaxassis</span>
      </a>
    </div>`;
  };

  const CAT_TONE = { serial: "life", talim: "heart", aholi: "breath" };
  const YT_ID = /^[A-Za-z0-9_-]{11}$/;

  C.videoCard = (v) => {
    const yt = YT_ID.test(v.youtube || "") ? v.youtube : "";
    const link = TTY.safeUrl(v.link);
    const file = TTY.safeUrl(v.file);
    const external = !yt && !file && !!link; // Instagram/Telegram va h.k. — yangi oynada ochiladi
    const ready = !!(yt || file || link);
    const posterUrl = TTY.safeUrl(v.poster) || (yt ? "https://i.ytimg.com/vi/" + yt + "/hqdefault.jpg" : "");
    const tone = v.tone || CAT_TONE[v.cat] || "life";
    const inner = html`
      <span class="video-card__poster">
        ${posterUrl ? html`<img src="${posterUrl}" alt="" loading="lazy" referrerpolicy="no-referrer" />` : html`<span class="video-card__art" aria-hidden="true">${ic(v.icon || "smart_display", "ms-40")}</span>`}
        <span class="video-card__play" aria-hidden="true">${ic(external ? "open_in_new" : ready ? "play_arrow" : "schedule", "ms-28 fill")}</span>
        ${ready ? "" : html`<span class="badge badge--dark video-card__soon">Tez orada</span>`}
        ${v.duration ? html`<span class="video-card__time">${v.duration}</span>` : ""}
      </span>
      <span class="video-card__body">
        <span class="cluster"><span class="badge">${v.part || (external ? "Havola" : "Video")}</span></span>
        <span class="card__title">${v.title}</span>
        ${v.desc ? html`<span class="card__text clamp-2">${v.desc}</span>` : ""}
      </span>`;
    return external
      ? html`<a class="card card--flush card--link video-card tone-${tone}" href="${link}" target="_blank" rel="noopener">${inner}</a>`
      : html`<button type="button" class="card card--flush card--link video-card tone-${tone}" data-video="${v.id}">${inner}</button>`;
  };

  /** Video oynasini ochadi (YouTube yoki fayl) */
  TTY.openVideo = function (id) {
    const v = TTY.data.videos.find((x) => x.id === id);
    if (!v) return;
    const yt = YT_ID.test(v.youtube || "") ? v.youtube : "";
    const file = TTY.safeUrl(v.file);
    let media;
    if (yt) {
      media = html`<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${yt}?rel=0" title="${v.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
    } else if (file) {
      media = html`<div class="video-frame"><video controls playsinline preload="metadata" ${v.poster ? html`poster="${TTY.safeUrl(v.poster)}"` : ""} src="${file}"></video></div>`;
    } else {
      media = html`<div class="empty" style="margin:1rem">${ic("schedule")}<strong>Video tez orada joylanadi</strong><span>Bu dars hozircha tayyorlanmoqda.</span></div>`;
    }
    return TTY.sheet({
      title: v.title,
      size: "video",
      body: html`${media}<div style="padding:0 1rem 1rem;color:var(--color-on-dark-2)">${v.part ? html`<span class="badge" style="margin-bottom:.5rem">${v.part}</span>` : ""}${v.desc ? html`<p>${v.desc}</p>` : ""}${yt ? html`<p style="margin-top:.75rem"><a class="video-extlink" href="https://www.youtube.com/watch?v=${yt}" target="_blank" rel="noopener">${ic("open_in_new", "ms-18")}YouTube'da ochish</a></p>` : ""}</div>`,
      onClose: () => { const m = document.querySelector("#sheet-body video, #sheet-body iframe"); if (m) m.remove(); }
    });
  };

  /** Bo'sh holat (ma'lumot yo'q yoki yuklanmadi) */
  C.empty = (icon, title, text) => html`<div class="empty">${ic(icon, "ms-40")}<strong>${title}</strong>${text ? html`<span>${text}</span>` : ""}</div>`;

  /** Admin paneldan kiritilgan ijtimoiy tarmoq tugmalari (bo'sh bo'lsa — "") */
  C.socialButtons = (cls) => {
    const s = TTY.config.social;
    const items = [
      { url: TTY.safeUrl(s.telegram), icon: "send", label: "Telegram" },
      { url: TTY.safeUrl(s.instagram), icon: "photo_camera", label: "Instagram" },
      { url: TTY.safeUrl(s.youtube), icon: "smart_display", label: "YouTube" }
    ].filter((i) => i.url);
    if (!items.length) return "";
    return html`${items.map((i) => html`<a class="${cls}" href="${i.url}" target="_blank" rel="noopener">${ic(i.icon, "ms-20")}${i.label}</a>`)}`;
  };

  /** Video kartochkalari uchun umumiy bosish */
  C.wireVideos = (root) => {
    root.querySelectorAll("[data-video]").forEach((b) => b.addEventListener("click", () => TTY.openVideo(b.dataset.video)));
  };

  C.relatedTopics = (slugs) => {
    const items = slugs.map(topicBySlug).filter(Boolean);
    if (!items.length) return "";
    return html`<div class="chips-static">${items.map((t) => html`<a class="chip" href="#/maktab/${t.slug}">${ic(t.icon, "ms-18")}${t.title}</a>`)}</div>`;
  };
})();

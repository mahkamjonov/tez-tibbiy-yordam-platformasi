/* Ko'rinishlar uchun umumiy bo'laklar */
(function () {
  "use strict";
  const TTY = window.TTY;
  const { html, ic, rich } = TTY;
  const C = (TTY.common = {});

  const topicBySlug = (slug) => TTY.data.topics.find((t) => t.slug === slug);
  const drugBySlug = (slug) => TTY.data.drugs.find((d) => d.slug === slug);
  const equipBySlug = (slug) => TTY.data.equipment.find((e) => e.slug === slug);
  const testCount = (key) => TTY.data.questions.filter((q) => q.topic === key).length;
  Object.assign(C, { topicBySlug, drugBySlug, equipBySlug, testCount });

  /** Qalqon shaklidagi rangli belgi (brendning markaziy elementi) */
  C.shieldBadge = (tone, icon, size = "") => html`<span class="shield tone-${tone} ${size}" aria-hidden="true">
    <svg viewBox="0 0 100 100"><path d="M50 6 C68 6 88 14 88 28 C88 56 68 84 50 94 C32 84 12 56 12 28 C12 14 32 6 50 6 Z"/></svg>${ic(icon)}
  </span>`;

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
      <span class="icon-box">${ic(t.icon, "ms-28 fill")}</span>
      <span class="cluster" style="justify-content:flex-end">${t.badges.slice(0, 1).map((b) => html`<span class="badge ${b.c ? "badge--" + b.c : ""}">${b.t}</span>`)}</span>
    </div>
    <div>
      <h3 class="card__title">${t.title}</h3>
      <p class="card__text clamp-3" style="margin-top:.25rem">${t.lead}</p>
    </div>
    <span class="card__more"><span>Protokolni ochish</span>${ic("arrow_forward", "ms-18")}</span>
  </a>`;

  C.videoCard = (v) => {
    const ready = !!(v.youtube || v.file);
    const poster = v.poster ? html`<img src="${v.poster}" alt="" loading="lazy" />` : "";
    return html`<button type="button" class="card card--flush card--link video-card tone-${v.tone}" data-video="${v.id}">
      <span class="video-card__poster">
        ${poster}
        <span class="video-card__art" aria-hidden="true">${ic(v.icon, "ms-40")}</span>
        <span class="video-card__play" aria-hidden="true">${ic(ready ? "play_arrow" : "schedule", "ms-28 fill")}</span>
        ${ready ? "" : html`<span class="badge badge--dark video-card__soon">Tez orada</span>`}
        ${v.duration ? html`<span class="video-card__time">${v.duration}</span>` : ""}
      </span>
      <span class="video-card__body">
        <span class="cluster"><span class="badge">${v.part}</span></span>
        <span class="card__title">${v.title}</span>
        <span class="card__text clamp-2">${v.desc}</span>
      </span>
    </button>`;
  };

  /** Video oynasini ochadi */
  TTY.openVideo = function (id) {
    const v = TTY.data.videos.find((x) => x.id === id);
    if (!v) return;
    let media;
    if (v.youtube) {
      media = html`<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${v.youtube}?rel=0" title="${v.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
    } else if (v.file) {
      media = html`<div class="video-frame"><video controls playsinline preload="metadata" ${v.poster ? html`poster="${v.poster}"` : ""} src="${v.file}"></video></div>`;
    } else {
      media = html`<div class="empty" style="margin:1rem">${ic("schedule")}<strong>Video tez orada joylanadi</strong><span>Bu dars hozircha tayyorlanmoqda. Yangiliklar uchun ijtimoiy tarmoqlarimizga obuna bo'ling.</span></div>`;
    }
    const dlg = TTY.sheet({
      title: v.title,
      size: "video",
      body: html`${media}<div style="padding:0 1rem 1rem;color:var(--color-on-dark-2)"><span class="badge" style="margin-bottom:.5rem">${v.part}</span><p>${v.desc}</p></div>`,
      onClose: () => { const m = document.querySelector("#sheet-body video, #sheet-body iframe"); if (m) m.remove(); }
    });
    return dlg;
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

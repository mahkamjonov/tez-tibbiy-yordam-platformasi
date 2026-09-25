/* Bosh sahifa */
(function () {
  "use strict";
  const TTY = window.TTY;
  const { html, ic } = TTY;
  const C = TTY.common;
  const cfg = TTY.config;

  TTY.views.home = function () {
    const D = TTY.data;
    const urgent = ["yurak", "nafas", "insult", "zaharlanish"].map(C.topicBySlug);
    const totals = {
      topics: D.topics.length,
      drugs: D.drugs.length,
      equipment: D.equipment.length,
      questions: D.questions.length
    };

    const staffLinks = [
      { href: "#/maktab", icon: "school", label: "Tez yordam maktabi" },
      { href: "#/brigada", icon: "groups", label: "Brigada va jihozlar" },
      { href: "#/dorilar", icon: "medication", label: "Dorilar kutubxonasi" },
      { href: "#/hujjatlar", icon: "description", label: "Buyruqlar va hujjatlar" },
      { href: "#/test", icon: "quiz", label: "Test markazi" },
      { href: "#/video", icon: "smart_display", label: "Video darslar" }
    ];
    const publicLinks = [
      { action: "open-103", icon: "call", label: "103 ni qachon chaqirish kerak" },
      { href: "#/aholi", icon: "volunteer_activism", label: "Birinchi yordam yo'riqnomasi" },
      { href: "#/aholi", icon: "door_open", label: "Brigadaga yordam berish" },
      { href: "#/video", icon: "smart_display", label: "Video darslar" }
    ];

    const hub = (links, audience) =>
      html`<ul class="hub-links">${links.map((l) => l.action
        ? html`<li><button type="button" class="hub-link" data-action="${l.action}">${ic(l.icon, "ms-22")}<span>${l.label}</span>${ic("chevron_right", "ms-20")}</button></li>`
        : html`<li><a class="hub-link" href="${l.href}" data-action="pick-audience" data-audience="${audience}">${ic(l.icon, "ms-22")}<span>${l.label}</span>${ic("chevron_right", "ms-20")}</a></li>`)}</ul>`;

    const page = html`
      <div class="container page">
        <section class="hero" aria-labelledby="hero-title">
          <div class="hero__visual" aria-hidden="true">
            <div class="hero__emblem"><img src="assets/logo.svg" alt="" width="200" height="200" /></div>
          </div>
          <div class="hero__copy">
            <h1 id="hero-title">Tez Tibbiy Yordam Qalqonlari</h1>
            <p class="hero__tag">${cfg.tagline}</p>
            <p class="hero__lead">Tez tibbiy yordam xodimlari uchun bilim, tajriba va foydali ma'lumotlar platformasi. Aholi uchun — 103 ni qachon va qanday chaqirish hamda birinchi yordam yo'riqnomalari.</p>
            <ul class="hero__pills">
              <li class="pill">${ic("ambulance", "ms-20")}Tez yordam mashinasi</li>
              <li class="pill">${ic("stethoscope", "ms-20")}Feldsher / Paramedik</li>
              <li class="pill">${ic("vital_signs", "ms-20")}Tibbiy asboblar</li>
              <li class="pill">${ic("shield", "ms-20")}Himoya qalqoni</li>
            </ul>
            <button class="hero103" type="button" data-action="open-103">
              <span class="hero103__num" aria-hidden="true">${ic("call", "ms-22 fill")}<b>103</b></span>
              <span class="hero103__txt"><strong>103 qachon va qanday chaqiriladi?</strong><span>Aholi uchun shoshilinch harakatlar va dispetcher yo'riqnomasi</span></span>
              <span class="hero103__go" aria-hidden="true">${ic("arrow_forward")}</span>
              <span class="hero103__dot" aria-hidden="true"></span>
            </button>
          </div>
        </section>

        <section class="section" aria-labelledby="who-title">
          <h2 id="who-title" class="sr-only">Siz kimsiz?</h2>
          <div class="grid grid--2 who">
            <article class="card who__card">
              <div class="who__head">
                <span class="icon-box icon-box--solid">${ic("stethoscope", "ms-28")}</span>
                <div><h3>Tibbiyot xodimlari uchun</h3><p>Feldsherlar, hamshiralar, shifokorlar, tez yordam haydovchilari va tibbiyot talabalari.</p></div>
              </div>
              ${hub(staffLinks, "pro")}
            </article>
            <article class="card who__card who__card--public">
              <div class="who__head">
                <span class="icon-box icon-box--solid" style="--ink:var(--color-emergency)">${ic("diversity_3", "ms-28")}</span>
                <div><h3>Oddiy aholi uchun</h3><p>Birinchi yordam, 103 chaqirish tartibi va tez yordam brigadasiga qanday yordam berish.</p></div>
              </div>
              ${hub(publicLinks, "public")}
            </article>
          </div>
        </section>

        <section class="section" aria-labelledby="urgent-title">
          <div class="section-head">
            <div><h2 id="urgent-title">${ic("bolt", "fill")}Shoshilinch holatlar</h2><p>Eng ko'p kerak bo'ladigan protokollar</p></div>
            <a class="link-more" href="#/maktab">Barcha mavzular${ic("chevron_right", "ms-20")}</a>
          </div>
          <div class="grid grid--4">${urgent.map(C.topicCard)}</div>
        </section>

        <section class="section" aria-labelledby="shields-title">
          <div class="section-head">
            <div><h2 id="shields-title">${ic("verified_user", "fill")}7 ta Himoya qalqoni</h2><p>Har bir qalqon — bitta hayotiy yo'nalish</p></div>
            <a class="link-more" href="#/qalqonlar">Barchasi${ic("chevron_right", "ms-20")}</a>
          </div>
          <div class="hscroll">
            ${D.shields.map((s) => html`<a class="card card--link shield-card tone-${s.tone}" href="#/maktab/${s.topic}">
              ${C.shieldBadge(s.tone, s.icon)}
              <div><h3 class="card__title">${s.title}</h3><p class="card__text" style="margin-top:.25rem">${s.desc}</p></div>
              <span class="badge" style="align-self:flex-start;margin-top:auto">${s.tag}</span>
            </a>`)}
            <a class="card card--link shield-card shield-card--all" href="#/qalqonlar">
              <span class="icon-box icon-box--solid">${ic("shield", "ms-28")}</span>
              <div><h3 class="card__title">Barcha qalqonlar</h3><p class="card__text" style="margin-top:.25rem">Qalqonlar tizimi haqida batafsil</p></div>
              <span class="card__more"><span>Ochish</span>${ic("arrow_forward", "ms-18")}</span>
            </a>
          </div>
        </section>

        <section class="section" aria-labelledby="test-title">
          <div class="cta-dark">
            <div class="cta-dark__copy">
              <h2 id="test-title">Bilimingizni sinab ko'ring</h2>
              <p>Attestatsiya va toifa imtihoniga tayyorgarlik: klinik vaziyatlar, izohlar va qaysi mavzuni takrorlash kerakligi bo'yicha tahlil.</p>
              <a class="btn btn--action btn--lg" href="#/test">${ic("quiz")}Testni boshlash</a>
            </div>
            <dl class="cta-stats">
              <div><dt>Klinik mavzu</dt><dd class="tnum">${totals.topics}</dd></div>
              <div><dt>Dori preparati</dt><dd class="tnum">${totals.drugs}</dd></div>
              <div><dt>Brigada jihozi</dt><dd class="tnum">${totals.equipment}</dd></div>
              <div><dt>Test savoli</dt><dd class="tnum">${totals.questions}</dd></div>
            </dl>
          </div>
        </section>

        <section class="section" aria-labelledby="video-title">
          <div class="section-head">
            <div><h2 id="video-title">Video darslar</h2><p>Real vaziyatlar va klinik texnikalar</p></div>
            <a class="link-more" href="#/video">Barchasi${ic("chevron_right", "ms-20")}</a>
          </div>
          <div class="hscroll hscroll--wide">${D.videos.map(C.videoCard)}</div>
        </section>

        <section class="section">
          <div class="card card--tint note">
            ${ic("verified", "ms-28")}
            <div class="grow">
              <h2 class="card__title">Ta'limiy va axborot manbasi</h2>
              <p class="card__text" style="margin-top:.25rem;max-width:var(--measure)">Platforma tibbiyot xodimlarining bilimini oshirish va aholining hayot saqlab qolish ko'nikmalarini rivojlantirish uchun yaratilgan. Ma'lumotlar amaldagi SSV buyruqlari va klinik protokollarga tayanishi kerak; farq bo'lsa, rasmiy hujjat ustuvor.</p>
              <div class="cluster" style="margin-top:1rem">
                <a class="btn btn--ghost" href="#/hujjatlar">${ic("description", "ms-20")}Hujjatlar</a>
                <a class="btn btn--ghost" href="${cfg.social.telegram}" target="_blank" rel="noopener">${ic("forum", "ms-20")}Telegram hamjamiyat</a>
              </div>
            </div>
          </div>
        </section>
      </div>`;

    return {
      title: "Bosh sahifa",
      nav: "bosh",
      html: page,
      mount(root) { C.wireVideos(root); }
    };
  };
})();

/* Serverdan yuklanadigan ma'lumotlar (faqat admin tahrirlaydigan qism):
 *   Dorilar · Hujjatlar · Video darslar · Sayt sozlamalari (ijtimoiy tarmoq havolalari, telefon)
 * Qolgan hamma narsa (mavzular, protokollar, testlar …) kod ichida qoladi — shuning uchun sayt tez ochiladi.
 *
 * Ishonchlilik: server ishlamasa, oxirgi muvaffaqiyatli nusxa (brauzer xotirasidan) ishlatiladi;
 * u ham bo'lmasa, tegishli bo'lim "hozircha mavjud emas" holatida ko'rinadi — butun sayt ishlashda davom etadi.
 */
(function () {
  "use strict";
  const TTY = window.TTY;
  const cfg = TTY.config;
  const CACHE_PREFIX = "tty:cache:";
  const TIMEOUT_MS = 6000;

  const SOURCES = [
    { key: "drugs", path: "/api/drugs", array: true },
    { key: "documents", path: "/api/documents", array: true },
    { key: "videos", path: "/api/videos", array: true },
    { key: "settings", path: "/api/settings", array: false }
  ];

  const readCache = (key) => {
    try { const raw = localStorage.getItem(CACHE_PREFIX + key); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
  };
  const writeCache = (key, value) => {
    try { localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(value)); } catch (e) { /* ignore */ }
  };

  async function fetchJson(path) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(cfg.apiBase + path, { signal: ctrl.signal, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error("HTTP " + res.status);
      return await res.json();
    } finally {
      clearTimeout(timer);
    }
  }

  function apply(key, value) {
    if (key === "settings") {
      const v = value || {};
      cfg.social.telegram = v.telegram || "";
      cfg.social.instagram = v.instagram || "";
      cfg.social.youtube = v.youtube || "";
      cfg.phone = v.phone || "";
      cfg.examGroup = v.examGroup || "";
    } else {
      TTY.data[key] = value;
    }
  }

  const remote = (TTY.remote = {
    /** key → "live" (serverdan) | "cache" (eski nusxa) | "error" (yuklanmadi) */
    status: {},
    /** Bo'lim serverdan ham, keshdan ham yuklanmadimi? */
    failed: (key) => remote.status[key] === "error"
  });

  remote.load = async function () {
    await Promise.all(
      SOURCES.map(async (s) => {
        let value, status;
        try {
          value = await fetchJson(s.path);
          if (Array.isArray(value) !== s.array) throw new Error("kutilmagan format");
          writeCache(s.key, value);
          status = "live";
        } catch (e) {
          const cached = readCache(s.key);
          if (cached) { value = cached; status = "cache"; }
          else { value = s.array ? [] : {}; status = "error"; }
        }
        remote.status[s.key] = status;
        apply(s.key, value);
      })
    );
    return remote.status;
  };
})();

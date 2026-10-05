/* Video havolasini tahlil qilish: YouTube (watch, youtu.be, shorts, embed, live) → 11 belgili ID.
 * Boshqa havolalar (Instagram, Telegram va h.k.) `link` maydonida saqlanadi va saytda tashqi havola sifatida ochiladi. */
"use strict";

function youtubeId(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^(www|m|music)\./, "");
    let id = "";
    if (host === "youtu.be") id = u.pathname.slice(1).split("/")[0];
    else if (host === "youtube.com" || host === "youtube-nocookie.com") {
      if (u.pathname === "/watch") id = u.searchParams.get("v") || "";
      else {
        const m = u.pathname.match(/^\/(embed|shorts|live|v)\/([\w-]{11})/);
        if (m) id = m[2];
      }
    }
    return /^[\w-]{11}$/.test(id) ? id : "";
  } catch (e) {
    return "";
  }
}

/** Havolani tozalaydi: sxema bo'lmasa https:// qo'shadi, faqat http(s) ruxsat etiladi. */
function cleanUrl(raw) {
  let url = String(raw || "").trim();
  if (!url) return "";
  if (/^[\w-]{11}$/.test(url)) return "https://www.youtube.com/watch?v=" + url; // faqat ID yozilgan bo'lsa
  if (!/^[a-z][a-z0-9+.-]*:/i.test(url)) url = "https://" + url;
  let u;
  try { u = new URL(url); } catch (e) { throw httpError("Havola noto'g'ri yozilgan"); }
  if (u.protocol !== "http:" && u.protocol !== "https:") throw httpError("Havola http:// yoki https:// bilan boshlanishi kerak");
  return u.toString();
}

function httpError(message) {
  const err = new Error(message);
  err.status = 400;
  return err;
}

/** Video yozuvini saqlashdan oldin normallashtiradi. */
function normalizeVideo(body) {
  const out = Object.assign({}, body);
  let url = cleanUrl(out.url);
  if (!url && out.youtube) url = cleanUrl(out.youtube); // eski yozuvlar uchun
  const id = youtubeId(url);
  out.url = url;
  out.youtube = id;
  out.link = id ? "" : url;
  return out;
}

module.exports = { youtubeId, cleanUrl, normalizeVideo, httpError };

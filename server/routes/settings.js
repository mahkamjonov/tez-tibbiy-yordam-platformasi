/* Sayt sozlamalari: ijtimoiy tarmoq havolalari va aloqa telefoni.
 * GET — ochiq (sayt o'qiydi). PUT — faqat admin. */
"use strict";
const express = require("express");
const { readJson, writeJson } = require("../lib/store");
const { requireAuth } = require("../lib/auth");
const { cleanUrl, httpError } = require("../lib/video");

const DEFAULTS = { telegram: "", instagram: "", youtube: "", phone: "", examGroup: "" };

function readSettings() {
  const saved = readJson("settings");
  return Object.assign({}, DEFAULTS, Array.isArray(saved) ? {} : saved);
}

/** "@nom" yoki "t.me/nom" kabi qisqa yozuvlarni to'liq havolaga aylantiradi. */
function socialUrl(kind, raw) {
  let v = String(raw || "").trim();
  if (!v) return "";
  if (v.startsWith("@")) {
    const name = v.slice(1).trim();
    if (!/^[\w.]{2,64}$/.test(name)) throw httpError(`"${v}" noto'g'ri foydalanuvchi nomi`);
    if (kind === "telegram" || kind === "examGroup") return "https://t.me/" + name;
    if (kind === "instagram") return "https://www.instagram.com/" + name + "/";
    if (kind === "youtube") return "https://www.youtube.com/@" + name;
  }
  return cleanUrl(v);
}

function cleanPhone(raw) {
  const v = String(raw || "").trim();
  if (!v) return "";
  if (v.length > 40 || !/^[+\d\s()\-.]+$/.test(v) || (v.match(/\d/g) || []).length < 7) {
    throw httpError("Telefon raqami noto'g'ri (masalan: +998 90 123 45 67)");
  }
  return v;
}

const router = express.Router();

router.get("/", (req, res) => res.json(readSettings()));

router.put("/", requireAuth, async (req, res) => {
  try {
    const b = req.body || {};
    const next = {
      telegram: socialUrl("telegram", b.telegram),
      instagram: socialUrl("instagram", b.instagram),
      youtube: socialUrl("youtube", b.youtube),
      examGroup: socialUrl("examGroup", b.examGroup),
      phone: cleanPhone(b.phone)
    };
    await writeJson("settings", next);
    res.json(next);
  } catch (e) {
    res.status(e.status || 400).json({ error: e.message });
  }
});

module.exports = router;

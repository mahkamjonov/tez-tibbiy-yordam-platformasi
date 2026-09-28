/* Oddiy fayl-asosli "baza": har to'plam (drugs, documents, videos) bitta JSON faylda saqlanadi.
 *
 * - server/data/*.json  — HAQIQIY, tahrirlanadigan ma'lumot. Git'ga tushmaydi (.gitignore).
 *   Birinchi ishga tushganda mavjud bo'lmasa, server/seed/*.json dan nusxa olinadi
 *   (sayt bilan birga kelgan boshlang'ich ma'lumot).
 * - Yozish paytida boshqa yozuv bilan to'qnashmasligi uchun oddiy navbat (queue) ishlatiladi:
 *   bir vaqtning o'zida faqat bitta yozish amalga oshadi.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "data");
const SEED_DIR = path.join(__dirname, "..", "seed");

fs.mkdirSync(DATA_DIR, { recursive: true });

function dataPath(name) {
  return path.join(DATA_DIR, name + ".json");
}

function ensureSeeded(name) {
  const dp = dataPath(name);
  if (fs.existsSync(dp)) return;
  const sp = path.join(SEED_DIR, name + ".json");
  if (fs.existsSync(sp)) fs.copyFileSync(sp, dp);
  else fs.writeFileSync(dp, "[]\n", "utf8");
}

function readJson(name) {
  ensureSeeded(name);
  const raw = fs.readFileSync(dataPath(name), "utf8");
  try {
    return JSON.parse(raw);
  } catch (e) {
    throw new Error(`"${name}" fayli buzilgan (JSON xatosi): ${e.message}`);
  }
}

/* Har to'plam uchun navbat — bir vaqtda bitta yozish */
const queues = new Map();
function withLock(name, fn) {
  const prev = queues.get(name) || Promise.resolve();
  const next = prev.then(fn, fn).finally(() => {
    if (queues.get(name) === next) queues.delete(name);
  });
  queues.set(name, next);
  return next;
}

function writeJson(name, data) {
  return withLock(name, async () => {
    const dp = dataPath(name);
    const tmp = dp + ".tmp";
    const json = JSON.stringify(data, null, 2) + "\n";
    fs.writeFileSync(tmp, json, "utf8");
    fs.renameSync(tmp, dp); // atomik almashtirish — yozish yarim qolib, fayl buzilmaydi
    // zaxira nusxa (oxirgi 5 ta)
    try {
      const bakDir = path.join(DATA_DIR, "backups");
      fs.mkdirSync(bakDir, { recursive: true });
      const stamp = new Date().toISOString().replace(/[:.]/g, "-");
      fs.writeFileSync(path.join(bakDir, `${name}.${stamp}.json`), json, "utf8");
      const files = fs.readdirSync(bakDir).filter((f) => f.startsWith(name + ".")).sort();
      files.slice(0, Math.max(0, files.length - 5)).forEach((f) => fs.unlinkSync(path.join(bakDir, f)));
    } catch (e) { /* zaxira ixtiyoriy — xato bo'lsa e'tiborsiz qoldiriladi */ }
    return data;
  });
}

module.exports = { readJson, writeJson, dataPath, DATA_DIR };

/* Dorilar / Hujjatlar / Video uchun umumiy CRUD marshrutlari.
 * GET — ochiq (sayt shundan o'qiydi). POST/PUT/DELETE — faqat admin (requireAuth). */
"use strict";
const express = require("express");
const { readJson, writeJson } = require("../lib/store");
const { requireAuth } = require("../lib/auth");
const { slugify, uniqueId } = require("../lib/slugify");

/**
 * @param {string} name       - fayl nomi (masalan "drugs")
 * @param {string} idField    - noyob maydon nomi ("slug" yoki "id")
 * @param {string} titleField - id avtomatik hosil qilinadigan maydon ("name" yoki "title")
 * @param {(body:object)=>string|null} validate - talab qilinadigan maydonlarni tekshiradi, xato bo'lsa matn qaytaradi
 * @param {(body:object)=>object} [normalize]   - saqlashdan oldin yozuvni tozalaydi (xato bo'lsa .status bilan Error tashlaydi)
 */
function collectionRouter(name, { idField, titleField, validate, normalize }) {
  const router = express.Router();

  /** normalize + validate; xatoni 400 sifatida qaytaradi */
  function prepare(req, res) {
    try {
      const body = normalize ? normalize(req.body || {}) : req.body || {};
      const err = validate ? validate(body) : null;
      if (err) { res.status(400).json({ error: err }); return null; }
      return body;
    } catch (e) {
      res.status(e.status || 400).json({ error: e.message });
      return null;
    }
  }

  router.get("/", (req, res) => {
    res.json(readJson(name));
  });

  router.post("/", requireAuth, async (req, res) => {
    const body = prepare(req, res);
    if (!body) return;
    const list = readJson(name);
    let id = String(body[idField] || "").trim() || slugify(body[titleField]);
    id = uniqueId(slugify(id), list.map((x) => x[idField]));
    const entry = { ...body, [idField]: id };
    list.push(entry);
    await writeJson(name, list);
    res.status(201).json(entry);
  });

  router.put("/:id", requireAuth, async (req, res) => {
    const body = prepare(req, res);
    if (!body) return;
    const list = readJson(name);
    const idx = list.findIndex((x) => x[idField] === req.params.id);
    if (idx === -1) return res.status(404).json({ error: "Topilmadi" });
    const nextId = String(body[idField] || req.params.id).trim() || req.params.id;
    if (nextId !== req.params.id && list.some((x, i) => i !== idx && x[idField] === nextId)) {
      return res.status(400).json({ error: `"${nextId}" identifikatori band` });
    }
    list[idx] = { ...body, [idField]: nextId };
    await writeJson(name, list);
    res.json(list[idx]);
  });

  router.delete("/:id", requireAuth, async (req, res) => {
    const list = readJson(name);
    const next = list.filter((x) => x[idField] !== req.params.id);
    if (next.length === list.length) return res.status(404).json({ error: "Topilmadi" });
    await writeJson(name, next);
    res.json({ ok: true });
  });

  /* Butun ro'yxatni tartiblab qayta yozish (masalan tartibni o'zgartirish uchun) */
  router.put("/", requireAuth, async (req, res) => {
    if (!Array.isArray(req.body)) return res.status(400).json({ error: "Ro'yxat (array) kutilgan edi" });
    await writeJson(name, req.body);
    res.json(req.body);
  });

  return router;
}

module.exports = collectionRouter;

/* Login urinishlarini cheklovchi oddiy himoya (xotirada, IP bo'yicha):
 * 15 daqiqada 10 tadan ortiq muvaffaqiyatsiz urinish bo'lsa, vaqtincha bloklanadi. */
"use strict";
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 10;
const hits = new Map(); // ip -> [timestamps]

module.exports = function rateLimitLogin(req, res, next) {
  const ip = req.ip || req.connection.remoteAddress || "unknown";
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= MAX_ATTEMPTS) {
    return res.status(429).json({ error: "Juda ko'p urinish. Bir necha daqiqadan so'ng qayta urining." });
  }
  arr.push(now);
  hits.set(ip, arr);
  next();
};

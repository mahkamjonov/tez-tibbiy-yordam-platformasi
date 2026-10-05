/* Autentifikatsiya: bitta admin foydalanuvchi, parol xesh (bcrypt) holida saqlanadi.
 * Login ma'lumoti server/data/auth.json da (git'ga tushmaydi). Birinchi ishga tushganda
 * .env dagi ADMIN_USER / ADMIN_PASSWORD dan yaratiladi, so'ng .env'dagi parol e'tiborga olinmaydi —
 * "Parolni o'zgartirish" shu fayldagi xeshni yangilaydi.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AUTH_FILE = path.join(__dirname, "..", "data", "auth.json");
const TOKEN_TTL = "12h";

function readAuth() {
  if (!fs.existsSync(AUTH_FILE)) {
    const user = process.env.ADMIN_USER;
    const pass = process.env.ADMIN_PASSWORD;
    if (!user || !pass) {
      throw new Error("ADMIN_USER / ADMIN_PASSWORD .env da yo'q va data/auth.json topilmadi — dastlabki sozlash bajarilmagan.");
    }
    const auth = { user, passwordHash: bcrypt.hashSync(pass, 12), updatedAt: new Date().toISOString() };
    fs.mkdirSync(path.dirname(AUTH_FILE), { recursive: true });
    fs.writeFileSync(AUTH_FILE, JSON.stringify(auth, null, 2) + "\n", "utf8");
    return auth;
  }
  return JSON.parse(fs.readFileSync(AUTH_FILE, "utf8"));
}

function verifyLogin(user, pass) {
  const auth = readAuth();
  if (user !== auth.user) return false;
  return bcrypt.compareSync(pass, auth.passwordHash);
}

function changePassword(currentPass, newPass) {
  const auth = readAuth();
  if (!bcrypt.compareSync(currentPass, auth.passwordHash)) {
    const err = new Error("Joriy parol noto'g'ri");
    err.status = 403; // 401 emas — panel buni "sessiya tugadi" deb tushunib, chiqarib yubormasligi uchun
    throw err;
  }
  if (!newPass || newPass.length < 6) {
    const err = new Error("Yangi parol kamida 6 belgidan iborat bo'lishi kerak");
    err.status = 400;
    throw err;
  }
  auth.passwordHash = bcrypt.hashSync(newPass, 12);
  auth.updatedAt = new Date().toISOString();
  fs.writeFileSync(AUTH_FILE, JSON.stringify(auth, null, 2) + "\n", "utf8");
}

function issueToken(user) {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET .env da yo'q");
  return jwt.sign({ sub: user }, secret, { expiresIn: TOKEN_TTL });
}

function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Kirish talab qilinadi" });
  try {
    const secret = process.env.SESSION_SECRET;
    req.admin = jwt.verify(token, secret).sub;
    next();
  } catch (e) {
    res.status(401).json({ error: "Sessiya eskirgan yoki noto'g'ri — qayta kiring" });
  }
}

module.exports = { verifyLogin, changePassword, issueToken, requireAuth, readAuth };

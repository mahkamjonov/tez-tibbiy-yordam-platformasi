"use strict";
const express = require("express");
const rateLimitLogin = require("../lib/rateLimit");
const { verifyLogin, changePassword, issueToken, requireAuth } = require("../lib/auth");

const router = express.Router();

router.post("/login", rateLimitLogin, (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: "Login va parol kiritilmagan" });
  if (!verifyLogin(String(username).trim(), String(password))) {
    return res.status(401).json({ error: "Login yoki parol noto'g'ri" });
  }
  res.json({ token: issueToken(username), user: username });
});

router.get("/me", requireAuth, (req, res) => res.json({ user: req.admin }));

router.post("/change-password", requireAuth, (req, res) => {
  const { currentPassword, newPassword } = req.body || {};
  try {
    changePassword(String(currentPassword || ""), String(newPassword || ""));
    res.json({ ok: true });
  } catch (e) {
    res.status(e.status || 400).json({ error: e.message });
  }
});

module.exports = router;

"use strict";
require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");

const collectionRouter = require("./routes/collection");
const authRouter = require("./routes/auth");
const settingsRouter = require("./routes/settings");
const { normalizeVideo } = require("./lib/video");
const { readJson } = require("./lib/store");

const app = express();
app.disable("x-powered-by");
app.set("trust proxy", 1); // nginx orqasida ishlaydi — haqiqiy mijoz IP'si (login cheklovi uchun) shu orqali olinadi
app.use(cors()); // ma'lumotlar maxfiy emas — sayt istalgan manzildan o'qiy oladi; yozish alohida himoyalangan
app.use(express.json({ limit: "2mb" }));

/* API javoblari keshlanmasin: admin o'zgartirsa, tashrifchi darhol yangisini ko'rsin */
app.use("/api", (req, res, next) => {
  res.set("Cache-Control", "no-cache");
  next();
});

app.get("/api/health", (req, res) => res.json({ ok: true, time: new Date().toISOString() }));

app.use("/api/auth", authRouter);
app.use("/api/settings", settingsRouter);

app.use("/api/drugs", collectionRouter("drugs", {
  idField: "slug",
  titleField: "name",
  validate: (b) => (!b.name ? "Dori nomi kiritilmagan" : null)
}));
app.use("/api/documents", collectionRouter("documents", {
  idField: "id",
  titleField: "title",
  validate: (b) => (!b.title ? "Hujjat sarlavhasi kiritilmagan" : null)
}));
app.use("/api/videos", collectionRouter("videos", {
  idField: "id",
  titleField: "title",
  normalize: normalizeVideo,
  validate: (b) => (!b.title ? "Video sarlavhasi kiritilmagan" : !b.url ? "Video havolasi kiritilmagan" : null)
}));

/* O'zgarmas ma'lumotnomalar (toifalar ro'yxati) — faqat o'qish, admin panelda tanlov uchun */
app.get("/api/meta", (req, res) => {
  res.json({
    drugCats: readJson("drugCats"),
    docTypes: readJson("docTypes"),
    videoCats: readJson("videoCats")
  });
});

/* Admin panel (statik fayllar) */
app.use("/admin", express.static(path.join(__dirname, "public", "admin")));
app.get("/admin/*", (req, res) => res.sendFile(path.join(__dirname, "public", "admin", "index.html")));

app.use((req, res) => res.status(404).json({ error: "Topilmadi" }));
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Server xatosi" });
});

const PORT = process.env.PORT || 3001;
// HOST=127.0.0.1 — faqat nginx orqali (domen + https ishga tushgach). Standart: hamma interfeys.
const HOST = process.env.HOST || "0.0.0.0";
app.listen(PORT, HOST, () => console.log(`Tez Tibbiy Yordam admin server: http://${HOST}:${PORT}`));

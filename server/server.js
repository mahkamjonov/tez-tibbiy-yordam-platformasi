"use strict";
require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");

const collectionRouter = require("./routes/collection");
const authRouter = require("./routes/auth");
const { readJson } = require("./lib/store");

const app = express();
app.disable("x-powered-by");
app.use(cors()); // ma'lumotlar maxfiy emas — sayt istalgan manzildan o'qiy oladi; yozish alohida himoyalangan
app.use(express.json({ limit: "2mb" }));

app.get("/api/health", (req, res) => res.json({ ok: true, time: new Date().toISOString() }));

app.use("/api/auth", authRouter);

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
  validate: (b) => (!b.title ? "Video sarlavhasi kiritilmagan" : null)
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
app.listen(PORT, () => console.log(`Tez Tibbiy Yordam admin server: http://localhost:${PORT}`));

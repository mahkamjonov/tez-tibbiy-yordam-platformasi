# Admin panel — backend

Dorilar, Hujjatlar va Video darslarni tahrirlash uchun kichik Node.js/Express xizmati.

## Joylashuv (hozircha)

- **Server:** Contabo VPS, `169.58.44.8`
- **Papka:** `/var/www/tezyordam-admin/server`
- **Ishga tushirish:** pm2 (`pm2 list` → `tezyordam-admin`)
- **Manzil:** `http://169.58.44.8:3001/admin` (vaqtincha, http — domen va https kelgach o'zgaradi)
- **Ma'lumotlar:** `server/data/*.json` (serverda, git'ga tushmaydi). Birinchi ishga tushganda `server/seed/*.json` dan nusxa olinadi.
- **Login ma'lumoti:** `server/data/auth.json` (bcrypt xesh, git'ga tushmaydi). Admin panelning o'zida "Sozlamalar" bo'limidan parol yangilanadi.

## Qayta joylash (kod yangilansa)

Hozircha git-siz, to'g'ridan-to'g'ri nusxalash orqali (keyinroq avtomatlashtiriladi):

```bash
cd server
tar --exclude=node_modules --exclude=.env --exclude=data -czf /tmp/tezyordam-server.tgz .
scp -i <kalit> /tmp/tezyordam-server.tgz root@169.58.44.8:/tmp/
ssh -i <kalit> root@169.58.44.8 '
  cd /var/www/tezyordam-admin/server &&
  tar -xzf /tmp/tezyordam-server.tgz &&
  npm install --production &&
  pm2 restart tezyordam-admin
'
```

`.env` va `data/` papkasi serverda qoladi, ustidan yozilmaydi.

## Domen va https kelgach

1. `nginx`da yangi `server_name <domen>` bloki qo'shiladi, 3001-portga proxy qilinadi (xuddi `microstore`/`tanish-bilish.uz` kabi).
2. `certbot --nginx -d <domen>` — https sertifikat.
3. UFW'dagi vaqtinchalik `3001/tcp` qoidasi olib tashlanadi (`ufw delete allow 3001/tcp`) — endi faqat nginx orqali, localhost ichida ulanadi.
4. Asosiy sayt (`index.html`/`js/`) dorilar/hujjatlar/video ma'lumotini shu API'dan (`/api/drugs` va h.k.) o'qishga o'tkaziladi, hozirgi Netlify bekor qilinadi.

## Muhim fayllar

| Fayl | Vazifasi |
| --- | --- |
| `server.js` | Asosiy kirish nuqtasi |
| `routes/auth.js` | Login, parolni o'zgartirish |
| `routes/collection.js` | Dorilar/Hujjatlar/Video uchun umumiy CRUD |
| `lib/store.js` | JSON fayl o'qish/yozish (atomik, zaxira bilan) |
| `lib/auth.js` | Parol xeshlash (bcrypt), sessiya (JWT) |
| `public/admin/` | Admin panelning o'zi (login + 3 bo'lim) |
| `seed/` | Boshlang'ich ma'lumot (joriy saytdan olingan) |

# Admin panel — backend

Dorilar, Hujjatlar, Video darslar va sayt sozlamalarini (ijtimoiy tarmoq havolalari, telefon) tahrirlash uchun kichik Node.js/Express xizmati.

## Joylashuv

- **Server:** Contabo VPS, `169.58.44.8` (Ubuntu 24.04; boshqa saytlar ham shu yerda — ularga tegilmaydi)
- **Backend:** `/var/www/tezyordam-admin/server` — pm2 (`pm2 list` → `tezyordam-admin`), port `3001`
- **Sayt (statik):** `/var/www/tezyordam-admin/site` — nginx beradi
- **Domen:** `tez-tibbiy-yordam.uz` → nginx (`deploy/nginx-tez-tibbiy-yordam.uz.conf`) + Certbot (https)
- **Admin:** `https://tez-tibbiy-yordam.uz/admin` (vaqtincha: `http://169.58.44.8:3001/admin`)
- **Ma'lumotlar:** `server/data/*.json` — serverda, git'ga tushmaydi. Birinchi ishga tushganda `server/seed/*.json` dan nusxa olinadi (videolar bo'sh, sozlamalarda Telegram guruh).
- **Login ma'lumoti:** `server/data/auth.json` (bcrypt xesh). Parolni panelning "Sozlamalar" bo'limida o'zgartirish mumkin.

## API

| Yo'l | Kim | Vazifasi |
| --- | --- | --- |
| `GET /api/drugs`, `/api/documents`, `/api/videos`, `/api/settings` | hamma | Sayt shulardan o'qiydi |
| `POST/PUT/DELETE /api/drugs`, `/documents`, `/videos` | admin | Qo'shish / tahrirlash / o'chirish |
| `PUT /api/settings` | admin | Telegram, Instagram, YouTube, telefon, toifa guruhi |
| `POST /api/auth/login`, `/change-password` | — / admin | Kirish, parolni yangilash |

Video: `url` maydoni kerak. YouTube havolasi (watch, youtu.be, shorts, embed) avtomatik ID'ga aylanadi (`youtube`); boshqa havolalar (Instagram, Telegram…) `link` sifatida saqlanadi va saytda yangi oynada ochiladi. Faqat `http(s)://` qabul qilinadi.

## Qayta joylash

```bash
bash tools/deploy.sh          # sayt + backend
bash tools/deploy.sh server   # faqat backend/admin
```

`.env` va `data/` serverda qoladi, ustidan yozilmaydi.

## Domen + https ulash (bir martalik)

Domen DNS'da serverning IP'siga (`169.58.44.8`) qarashi kerak (`A` yozuv: `@` va `www`). Tekshirish: `nslookup tez-tibbiy-yordam.uz`.

```bash
# serverda (root):
cp /var/www/tezyordam-admin/server/deploy/nginx-tez-tibbiy-yordam.uz.conf /etc/nginx/sites-available/tez-tibbiy-yordam.uz
ln -s /etc/nginx/sites-available/tez-tibbiy-yordam.uz /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
certbot --nginx -d tez-tibbiy-yordam.uz -d www.tez-tibbiy-yordam.uz --redirect   # https + avtomatik yangilanish

# https ishlagach — 3001-portni tashqaridan yopish va faqat nginx orqali ishlatish:
echo "HOST=127.0.0.1" >> /var/www/tezyordam-admin/server/.env
pm2 restart tezyordam-admin --update-env
ufw delete allow 3001/tcp
```

## Muhim fayllar

| Fayl | Vazifasi |
| --- | --- |
| `server.js` | Asosiy kirish nuqtasi |
| `routes/auth.js` | Login, parolni o'zgartirish |
| `routes/collection.js` | Dorilar/Hujjatlar/Video uchun umumiy CRUD |
| `routes/settings.js` | Ijtimoiy tarmoq havolalari va telefon |
| `lib/video.js` | Video havolasini tahlil qilish (YouTube ID) |
| `lib/store.js` | JSON fayl o'qish/yozish (atomik, zaxira nusxa bilan) |
| `lib/auth.js` | Parol xeshlash (bcrypt), sessiya (JWT) |
| `public/admin/` | Admin panelning o'zi |
| `seed/` | Boshlang'ich ma'lumot |
| `deploy/` | nginx sozlamasi |

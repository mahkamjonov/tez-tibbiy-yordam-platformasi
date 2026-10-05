# Tez Tibbiy Yordam Qalqonlari — veb-sayt

Tez tibbiy yordam xodimlari va aholi uchun axborot platformasi. Sof HTML/CSS/JS — **qurish (build) shart emas**, hamma narsa oddiy fayllarda.
Dizayn: `design/clinical_clarity/DESIGN.md` ("Clinical Clarity") va `design/` papkasidagi ekranlar asosida.

## Ishga tushirish

Windows'da `start.bat` ni ikki marta bosing (Node.js kerak) — sayt `http://localhost:5173` da ochiladi.
Yoki terminalda:

```bash
node tools/serve.mjs
```

## Arxitektura (qisqacha)

- **Kodda qoladi** (tez ochiladi): mavzular, protokollar, algoritmlar, testlar, qalqonlar, jihozlar — `js/data/*.js`.
- **Serverdan yuklanadi** (admin paneldan tahrirlanadi): **Dorilar, Hujjatlar, Video darslar** va **sayt sozlamalari** (Telegram/Instagram/YouTube havolalari, telefon raqam, toifa guruhi). Sayt ochilganda `/api/...` dan olinadi; server ishlamasa — oxirgi nusxa ishlatiladi.
- **Admin panel:** `/admin` (login + parol; parolni panelning "Sozlamalar" bo'limida o'zgartirish mumkin). Backend: `server/` (Node.js/Express, JSON fayllarda saqlaydi). Batafsil: `server/README.md`.

## Joylash (Contabo VPS)

Sayt ham, admin ham bitta serverda: nginx statik saytni beradi, `/api` va `/admin` ni Node xizmatiga (pm2: `tezyordam-admin`, port 3001) uzatadi. nginx sozlamasi: `server/deploy/nginx-tez-tibbiy-yordam.uz.conf`.

```bash
bash tools/deploy.sh          # sayt + backend
bash tools/deploy.sh site     # faqat sayt
bash tools/deploy.sh server   # faqat backend/admin
```

(SSH kalit: `~/.ssh/tezyordam_claude`, server: `root@169.58.44.8` — `DEPLOY_KEY` / `DEPLOY_HOST` bilan o'zgartiriladi.)

### Netlify (vaqtinchalik, domen ishga tushguncha)

Jonli sayt: https://tez-tibbiy-yordam-platformasi.netlify.app — `netlify.toml` bilan; build komandasi `node tools/prepare-dist.mjs`. Eslatma: bu nusxa **eski** holatda qoldi (dorilar/videolar kod ichida). Yangi sayt `/api` ga tayanadi, shuning uchun Netlify'ga YANGI kodni joylamang — domen ishga tushgach Netlify nusxasi domenga yo'naltiriladi yoki o'chiriladi.

## Bo'limlar

| Manzil | Bo'lim |
| --- | --- |
| `#/` | Bosh sahifa: Tezkor qalqon tugmasi, 103 qo'llanmasi, Qalqonlar xaritasi |
| `#/tezkor`, `#/tezkor/qon` | **Tezkor qalqon** — "Hozir shoshilinch yordam kerak": holatni tanlang → eng muhim birinchi harakatlar |
| `#/103-gacha`, `#/103-gacha/qon` | **103 gacha** — har bir holat uchun "103 kelguncha nima qilish kerak" rejasi |
| `#/qalqonlar` | **Qalqonlar xaritasi** — 11 ta favqulodda holat + Mutaxassis |
| `#/maktab/yurak` | **Qalqon ichi**: 1 Holatni aniqlash · 2 Birinchi harakat · 3 Algoritm · 4 Nima qilish mumkin emas · 5 Tibbiyot xodimi uchun · 6 Oddiy fuqaro uchun + Qalqon testi |
| `#/mutaxassis` | **Mutaxassis qalqoni** — professional rejim (ABCDE/SAB, CPR, ALS, shok, O'KS, triaj, immobilizatsiya …) |
| `#/maktab` | Tez yordam maktabi — barcha 16 mavzu |
| `#/aholi` | Aholi uchun: 103 qachon va qanday chaqiriladi, brigadaga yordam |
| `#/brigada` | Brigada turlari va jihozlar (Nima? Qachon? Qanday? E'tibor) |
| `#/dorilar`, `#/dorilar/adrenalin` | Dorilar kutubxonasi |
| `#/hujjatlar` | Buyruqlar va hujjatlar |
| `#/test`, `#/test/yurak`, `#/test/aralash` | Test markazi |
| `#/sertifikat` | **Qalqon sertifikati** — barcha 11 qalqon testidan o'tgach (PNG yoki chop etish) |
| `#/video` | Video darslar |

Qidiruv: sarlavhadagi lupa yoki klaviaturada `/` (yoki `Ctrl+K`).

## Kontentni tahrirlash — hammasi `js/data/` ichida

| Fayl | Nima uchun |
| --- | --- |
| `topics.js`, `topics-more.js` | Klinik mavzular (belgilar → baholash → birinchi yordam → brigada → transport → hujjatlashtirish) va aholi yo'riqnomasi |
| `topics-pro.js` | Faqat professional yo'nalishlar (ABCDE/SAB, O'KS, triaj, immobilizatsiya) — Mutaxassis qalqoni |
| `algos.js` | Qalqon ichidagi 1–3-bloklar: Holatni aniqlash, Birinchi harakat, Algoritm zanjiri |
| `quick.js` | **Tezkor qalqon** va **103 gacha** uchun holatlar (qadamlar, qilmang, kuzating, brigadaga ayting) |
| `drugs.js`, `documents.js`, `videos.js` | Faqat o'zgarmas toifalar. **Ro'yxatlarning o'zi admin paneldan kiritiladi** (`/admin`): dorilar (dozalash jadvali ataylab bo'sh — o'zingiz yozasiz), hujjatlar (hozirgi 3 ta — namuna), videolar (**YouTube havolasini** qo'ying; Instagram/Telegram havolalari ham bo'ladi). Boshlang'ich nusxa: `server/seed/` |
| `equipment.js` | Brigada turlari va jihozlar |
| `questions.js`, `questions-more.js` | Test savollari (154 ta). Har savolda **birinchi variant — to'g'ri javob** (saytda aralashtiriladi). Har qalqon uchun 10 ta savol = Qalqon testi |
| `shields.js`, `citizen.js` | 11 ta qalqon (rang va belgi) va aholi uchun matnlar |
| `../config.js` | O'tish bali, test uzunligi, API manzili. Ijtimoiy tarmoq havolalari va telefon — admin panelda (**Sozlamalar**) |

Matn ichida `**qalin**` yozish mumkin.

Yangi ikonka ishlatsangiz (`ic("nom")` yoki `icon: "nom"`), ikonka shriftini yangilang (internet kerak):

```bash
node tools/build-icons.mjs
```

## Muhim eslatmalar

- **Tibbiy ma'lumotlar** ta'limiy maqsadda umumiy xalqaro yo'riqnomalar (ERC/AHA) asosida yozilgan. Ularni amaldagi SSV buyruqlari va mahalliy klinik protokollar bilan **tekshirib chiqing**. Dori dozalari saytga kiritilmagan.
- **103 tugmasi qo'ng'iroq qilmaydi** — u «103 qachon va qanday chaqiriladi?» qo'llanmasini ochadi (talabingizga ko'ra).
- Bosh sahifadagi ko'rsatkichlar (mavzu, dori, jihoz, savol soni) bazadagi haqiqiy ma'lumotlardan hisoblanadi — o'zboshimchalik bilan raqam yozilmagan.
- Test natijalari va sertifikat uchun kiritilgan ism faqat foydalanuvchi qurilmasida (brauzer xotirasida) saqlanadi.
- **Sertifikat** — platformadagi o'quv testi natijasi; unda «rasmiy tibbiy malaka yoki attestatsiya hujjati emas» deb yozilgan.
- **SAB** = Sirkulyatsiya – Airway – Breathing (CAB) deb qabul qilingan (Mutaxassis qalqoni → ABCDE va SAB).

## Tuzilma

```
index.html            — bitta sahifa (qobiq)
css/                  — tokens.css (rang, shrift, o'lcham), base.css, components.css, pages.css
js/app.js             — sarlavha, navigatsiya, marshrutizator, 103 qo'llanmasi, qidiruv
js/views/             — sahifalar
js/data/              — kontent
assets/               — logotip, shriftlar (saytga joylangan, oflayn ishlaydi)
tools/                — serve.mjs (mahalliy server), build-icons.mjs (ikonka shrifti)
design/               — asl dizayn fayllari (sayt ularga bog'liq emas)
```

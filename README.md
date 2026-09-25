# Tez Tibbiy Yordam Qalqonlari — veb-sayt

Tez tibbiy yordam xodimlari va aholi uchun axborot platformasi. Sof HTML/CSS/JS — **qurish (build) shart emas**, hamma narsa oddiy fayllarda.
Dizayn: `design/clinical_clarity/DESIGN.md` ("Clinical Clarity") va `design/` papkasidagi ekranlar asosida.

## Ishga tushirish

Windows'da `start.bat` ni ikki marta bosing (Node.js kerak) — sayt `http://localhost:5173` da ochiladi.
Yoki terminalda:

```bash
node tools/serve.mjs
```

Saytni istalgan statik hostingga (Netlify, GitHub Pages, Cloudflare Pages, oddiy hosting) papkani shundayligicha yuklash bilan joylash mumkin — server sozlamalari kerak emas (sahifalar `#/…` manzillari bilan ishlaydi).

## Netlify'ga joylash

Jonli sayt: https://tez-tibbiy-yordam-platformasi.netlify.app

`netlify.toml` tayyor: build komandasi `node tools/prepare-dist.mjs` faqat kerakli fayllarni (`index.html`, `css/`, `js/`, `assets/`) `dist/` ga yig'adi — `design/` va `tools/` saytga chiqmaydi.

Yangilash (kontentni o'zgartirgandan keyin):

```bash
npx netlify-cli deploy --prod --dir=dist --site 7787334a-4315-48af-87fa-dcd1d8794375
```

(avval `node tools/prepare-dist.mjs` ni ishga tushiring). Netlify'ni GitHub repozitoriyga ulasangiz (Netlify → Add new project → Import from Git), har `git push` dan keyin sayt o'zi yangilanadi.

## Bo'limlar

| Manzil | Bo'lim |
| --- | --- |
| `#/` | Bosh sahifa |
| `#/aholi` | Aholi uchun: 103 qachon va qanday chaqiriladi, brigadaga yordam |
| `#/maktab`, `#/maktab/yurak` | Tez yordam maktabi — 8 mavzu, har biri 6 bosqichda + aholi uchun yo'riqnoma |
| `#/qalqonlar` | 7 ta Himoya qalqoni |
| `#/brigada` | Brigada turlari va jihozlar (Nima? Qachon? Qanday? E'tibor) |
| `#/dorilar`, `#/dorilar/adrenalin` | Dorilar kutubxonasi |
| `#/hujjatlar` | Buyruqlar va hujjatlar |
| `#/test`, `#/test/yurak`, `#/test/aralash` | Test markazi |
| `#/video` | Video darslar |

Qidiruv: sarlavhadagi lupa yoki klaviaturada `/` (yoki `Ctrl+K`).

## Kontentni tahrirlash — hammasi `js/data/` ichida

| Fayl | Nima uchun |
| --- | --- |
| `topics.js` | Klinik mavzular (belgilar → baholash → birinchi yordam → brigada → transport → hujjatlashtirish) va aholi yo'riqnomasi |
| `drugs.js` | Dorilar. **`dosing` (doza va qo'llash tartibi) ataylab bo'sh** — o'zingiz yozasiz (formatni fayl boshidagi izohdan ko'ring) |
| `equipment.js` | Brigada turlari va jihozlar |
| `documents.js` | Buyruqlar va hujjatlar. Hozirgi 3 ta yozuv — **namuna** (`demo: true`); haqiqiylarini qo'shib, namunalarni o'chiring. PDF fayllarni `assets/docs/` ga qo'ying va `pdf: "assets/docs/fayl.pdf"` yozing |
| `videos.js` | Video darslar: `youtube: "VIDEO_ID"` yoki `file: "assets/videos/fayl.mp4"` qo'shsangiz, "Tez orada" o'rniga video ochiladi |
| `questions.js` | Test savollari. Har savolda **birinchi variant — to'g'ri javob** (saytda aralashtiriladi) |
| `shields.js`, `citizen.js` | Qalqonlar va aholi uchun matnlar |
| `../config.js` | Ijtimoiy tarmoq havolalari (`telegram`, `instagram`), o'tish bali, test uzunligi |

Matn ichida `**qalin**` yozish mumkin.

Yangi ikonka ishlatsangiz (`ic("nom")` yoki `icon: "nom"`), ikonka shriftini yangilang (internet kerak):

```bash
node tools/build-icons.mjs
```

## Muhim eslatmalar

- **Tibbiy ma'lumotlar** ta'limiy maqsadda umumiy xalqaro yo'riqnomalar (ERC/AHA) asosida yozilgan. Ularni amaldagi SSV buyruqlari va mahalliy klinik protokollar bilan **tekshirib chiqing**. Dori dozalari saytga kiritilmagan.
- **103 tugmasi qo'ng'iroq qilmaydi** — u «103 qachon va qanday chaqiriladi?» qo'llanmasini ochadi (talabingizga ko'ra).
- Bosh sahifadagi ko'rsatkichlar (mavzu, dori, jihoz, savol soni) bazadagi haqiqiy ma'lumotlardan hisoblanadi — o'zboshimchalik bilan raqam yozilmagan.
- Test natijalari faqat foydalanuvchi qurilmasida (brauzer xotirasida) saqlanadi.

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

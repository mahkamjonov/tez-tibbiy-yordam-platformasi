/* Sayt ishlatadigan Material Symbols ikonlarini yig'ib, assets/fonts/material-symbols.woff2 ga yuklab oladi.
 *
 * Yangi ikonka qo'shsangiz (ic("nom") yoki icon: "nom"), quyidagini qayta ishga tushiring:
 *   node tools/build-icons.mjs
 * (internet kerak; ikonlar ro'yxati js/ va index.html fayllaridan avtomatik olinadi)
 */
import { readFileSync, readdirSync, statSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const names = new Set();

function scan(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) scan(p);
    else if (p.endsWith(".js")) {
      const src = readFileSync(p, "utf8");
      for (const m of src.matchAll(/\bic\(\s*["']([a-z0-9_]+)["']/g)) names.add(m[1]);
      for (const m of src.matchAll(/\bicon:\s*["']([a-z0-9_]+)["']/g)) names.add(m[1]);
      // block(1, "science", ...) — preparat bloklari
      for (const m of src.matchAll(/\bblock\(\s*\d+\s*,\s*["']([a-z0-9_]+)["']/g)) names.add(m[1]);
      // ic(shart ? "bir" : "ikki", ...)
      for (const m of src.matchAll(/\bic\([^,()]*\?\s*["']([a-z0-9_]+)["']\s*:\s*["']([a-z0-9_]+)["']/g)) { names.add(m[1]); names.add(m[2]); }
    }
  }
}
scan(join(root, "js"));
for (const m of readFileSync(join(root, "index.html"), "utf8").matchAll(/class="ms"[^>]*>([a-z0-9_]+)</g)) names.add(m[1]);
["expand_more", "chevron_right", "close", "search", "warning"].forEach((n) => names.add(n));

const list = [...names].sort();
console.log(`${list.length} ta ikonka:`, list.join(", "));

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";
const cssUrl =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=block&icon_names=" +
  list.join(",");
const cssRes = await fetch(cssUrl, { headers: { "User-Agent": UA } });
if (!cssRes.ok) {
  console.error("CSS olinmadi:", cssRes.status, await cssRes.text());
  process.exit(1);
}
const css = await cssRes.text();
const fontUrl = css.match(/src:\s*url\(([^)]+)\)/)?.[1];
if (!fontUrl) {
  console.error("Shrift havolasi topilmadi:\n", css);
  process.exit(1);
}
const buf = Buffer.from(await (await fetch(fontUrl)).arrayBuffer());
mkdirSync(join(root, "assets/fonts"), { recursive: true });
writeFileSync(join(root, "assets/fonts/material-symbols.woff2"), buf);
console.log(`assets/fonts/material-symbols.woff2 yozildi (${(buf.length / 1024).toFixed(1)} KB)`);

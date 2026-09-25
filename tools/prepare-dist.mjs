/* Netlify uchun: faqat saytga kerakli fayllarni dist/ ga nusxalaydi (design/, tools/, README kirmaydi).
 * Netlify build komandasi sifatida ham, qo'lda ham ishlatiladi:  node tools/prepare-dist.mjs
 */
import { cpSync, rmSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const item of ["index.html", "css", "js", "assets"]) {
  const from = join(root, item);
  if (existsSync(from)) cpSync(from, join(dist, item), { recursive: true });
}
console.log("dist/ tayyor: index.html, css/, js/, assets/");

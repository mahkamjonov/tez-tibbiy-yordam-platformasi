"use strict";
function slugify(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[ʻʼ’‘`´'"]/g, "")
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "item";
}

function uniqueId(base, existingIds) {
  const set = new Set(existingIds);
  if (!set.has(base)) return base;
  let i = 2;
  while (set.has(`${base}-${i}`)) i++;
  return `${base}-${i}`;
}

module.exports = { slugify, uniqueId };

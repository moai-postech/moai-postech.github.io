// Standalone action links end in an arrow: → for a page on this site, ↗ for another screen (sheet, full-screen view).
// Inline, menu, table and card links never take one. The roles and the reasons for each exception are in AGENTS.md
// "본문 링크의 장식은 역할에 맞춰 제한한다" (교수 2026-11-02: Full schedule 의 ↗ 가 빠진 것을 지적).
const fs = require('fs');
const path = require('path');
const SITE = path.join(__dirname, '..', '_site');

// Where a standalone action link lives: its own class, or the block that holds only that link.
const OWN = /\bclass="(?:[^"]*\s)?(filter-link|course-sheet|study-sheet|study-stat-members|button)(?:\s[^"]*)?"/;
const BLOCK = /<p class="[^"]*\b(section-next|study-join-next|hero-actions)\b[^"]*">([\s\S]*?)<\/p>/g;

const pages = [];
(function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) { if (f !== 'slides' && f !== 'assets') walk(p); }
    else if (f.endsWith('.html')) pages.push(p);
  }
})(SITE);

const bad = [];
let seen = 0;
const check = (file, tag, inner) => {
  const href = (tag.match(/href="([^"]*)"/) || [])[1] || '';
  const text = inner.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  const want = /^https?:\/\//.test(href) ? '↗' : '→';
  seen += 1;
  if (!text.endsWith(want)) bad.push(`${path.relative(SITE, file)}: "${text}" → ${want} 필요 (${href})`);
};
for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8');
  const done = new Set();
  for (const m of html.matchAll(/(<a\b[^>]*>)([\s\S]*?)<\/a>/g)) if (OWN.test(m[1])) { check(file, m[1], m[2]); done.add(m.index); }
  for (const b of html.matchAll(BLOCK)) {
    for (const m of b[2].matchAll(/(<a\b[^>]*>)([\s\S]*?)<\/a>/g)) {
      if (!OWN.test(m[1])) check(file, m[1], m[2]);
    }
  }
}
if (!seen) { console.error('check_link_arrows: 이동 링크를 찾지 못함. _site 를 먼저 빌드하세요.'); process.exit(1); }
if (bad.length) {
  console.error(`check_link_arrows: 화살표가 없거나 방향이 틀린 이동 링크 ${bad.length}건`);
  for (const x of bad) console.error(`  - ${x}`);
  process.exit(1);
}
console.log(`check_link_arrows: 이동 링크 ${seen}건 모두 화살표 있음`);

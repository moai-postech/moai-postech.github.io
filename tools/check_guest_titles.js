// Every guest lecture and seminar row in a course schedule needs a talk title: title on the first line, speaker below.
// A missing title is never filled in by guesswork; this check fails so the professor is told (교수 2026-11-02).
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const SITE = path.join(ROOT, '_site', 'teaching');

const missing = [];
let rows = 0;
for (const course of fs.readdirSync(SITE)) {
  const file = path.join(SITE, course, 'schedule', 'index.html');
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, 'utf8');
  for (const m of html.matchAll(/<tr class="is-(guest|seminar)\b[^"]*"[^>]*data-date="([^"]+)"[^>]*>([\s\S]*?)<\/tr>/g)) {
    rows += 1;
    if (/class="cs-title"/.test(m[3])) continue;
    const speaker = (m[3].match(/class="cs-speaker-name"[^>]*>([^<]+)</) || [])[1] || '(연사 없음)';
    missing.push(`${course} ${m[2]} ${speaker}`);
  }
}
if (!rows) {
  console.error('check_guest_titles: 초청·세미나 행을 찾지 못함. _site 를 먼저 빌드하세요.');
  process.exit(1);
}
if (missing.length) {
  console.error(`check_guest_titles: 발표 제목이 없는 초청·세미나 ${missing.length}건. 제목을 지어 넣지 말고 교수에게 알린다.`);
  for (const x of missing) console.error(`  - ${x}`);
  process.exit(1);
}
console.log(`check_guest_titles: 초청·세미나 ${rows}건 모두 제목 있음`);

// AI Study terms must tell one story on Home and Schedule (교수 2026-11-02):
// - the Home card and the Schedule panel show the same tldr;
// - the tldr has one clause per learning stage, in stage order, and each clause uses the stage title's first verb
//   (e.g. "learn to act, understand 3D scenes, and connect goals" for Learn to Act / Understand the Scene / Connect Goals to Actions);
// - stage ranges run from session 1 to the last regular session with no gap or overlap, and never include optional sessions;
// - the Home "N sessions" count equals the regular sessions in the table.
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const read = (p) => fs.readFileSync(path.join(ROOT, '_site', p), 'utf8');
const text = (s) => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();

let home, schedule;
try { home = read('teaching/ai-study/index.html'); schedule = read('teaching/ai-study/schedule/index.html'); }
catch { console.error('check_study_terms: AI Study 페이지가 없음. _site 를 먼저 빌드하세요.'); process.exit(1); }

const errors = [];
const cards = {};
for (const m of home.matchAll(/<li class="study-term-card[\s\S]*?<\/li>/g)) {
  const id = (m[0].match(/schedule\/#([\w-]+)/) || [])[1];
  if (!id) continue;
  cards[id] = {
    tldr: text((m[0].match(/class="study-term-tldr">([\s\S]*?)<\/span>/) || [, ''])[1]),
    count: Number((m[0].match(/class="study-term-count">(\d+) sessions/) || [])[1]),
  };
}

const stem = (w) => w.toLowerCase().replace(/[^a-z]/g, '').slice(0, 4);
let terms = 0;
for (const m of schedule.matchAll(/<div class="study-panel" role="tabpanel" id="([\w-]+)"[\s\S]*?<\/table>/g)) {
  const [panel, id] = m;
  terms += 1;
  const tldr = text((panel.match(/class="study-term-tldr-lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
  const steps = [...panel.matchAll(/<li data-sessions="(\d+)-(\d+)">[\s\S]*?class="study-step-title">([\s\S]*?)<\/span>/g)]
    .map((s) => ({ start: Number(s[1]), end: Number(s[2]), title: text(s[3]) }));
  const rows = [...panel.matchAll(/<tr data-session="([^"]+)" class="([^"]*)"/g)];
  const regular = rows.filter((r) => !/\bis-optional\b/.test(r[2])).map((r) => Number(r[1]));
  const optional = rows.filter((r) => /\bis-optional\b/.test(r[2])).map((r) => r[1]);

  const card = cards[id];
  if (!card) errors.push(`${id}: Home 학기 카드가 없음`);
  else {
    if (card.tldr !== tldr) errors.push(`${id}: Home 카드와 Schedule 의 tldr 가 다름\n      Home:     ${card.tldr}\n      Schedule: ${tldr}`);
    if (card.count !== regular.length) errors.push(`${id}: Home 은 ${card.count} sessions, Schedule 정규 회차는 ${regular.length}개`);
  }
  if (!tldr) { errors.push(`${id}: tldr 가 없음`); continue; }
  if (!steps.length) { errors.push(`${id}: learning_path 가 없음`); continue; }

  // Stage ranges: 1 .. last regular session, contiguous, no optional sessions.
  let next = 1;
  for (const s of steps) {
    if (s.start !== next) errors.push(`${id}: '${s.title}' 가 ${s.start}회에서 시작함(${next}회여야 함)`);
    if (s.end < s.start) errors.push(`${id}: '${s.title}' 범위가 거꾸로임(${s.start}-${s.end})`);
    next = s.end + 1;
  }
  const last = Math.max(...regular);
  if (next - 1 !== last) errors.push(`${id}: 마지막 단계가 ${next - 1}회에서 끝남(마지막 정규 회차는 ${last}회, 선택 회차 ${optional.join(', ') || '없음'}는 넣지 않음)`);

  // tldr clauses follow the stages: "How <subject> <verb1> ..., <verb2> ..., and <verbN> ...".
  const clauses = tldr.replace(/^How /, '').replace(/\.$/, '').split(/, (?:and )?/);
  if (!/^How .+\.$/.test(tldr)) errors.push(`${id}: tldr 는 'How ...' 로 시작하고 마침표로 끝나야 함`);
  if (clauses.length !== steps.length) {
    errors.push(`${id}: tldr 구절 ${clauses.length}개, 학습 단계 ${steps.length}개\n      tldr:   ${tldr}\n      stages: ${steps.map((s) => s.title).join(' / ')}`);
    continue;
  }
  steps.forEach((s, i) => {
    const verb = stem(s.title.split(' ')[0]);
    const words = clauses[i].split(' ');
    const ok = i === 0 ? words.some((w) => stem(w) === verb) : stem(words[0]) === verb;
    if (!ok) errors.push(`${id}: tldr ${i + 1}번째 구절 '${clauses[i]}' 이 단계 '${s.title}' 의 동사로 ${i === 0 ? '쓰이지' : '시작하지'} 않음`);
  });
}

if (!terms) { console.error('check_study_terms: Schedule 학기 패널을 찾지 못함'); process.exit(1); }
if (errors.length) {
  console.error(`check_study_terms: ${errors.length}건. _data/ai_study_terms.yml 의 tldr·learning_path 를 고친다.`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`check_study_terms: ${terms}개 학기 tldr·학습 단계·회차 범위 일치`);

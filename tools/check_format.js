// 사이트 전체 형식 검사: 빌드한 _site 를 띄워 모든 페이지의 제목 크기와 묶음 제목 위아래 간격을 잰다.
// 규칙은 AGENTS.md 의 "형식은 전역 규칙으로". 페이지 하나를 고쳐도 이 검사가 사이트 전체에서 통과해야 한다.
//
//   bundle exec jekyll build
//   node tools/check_format.js            # 320px~1440px 에서 검사
//
// Playwright 가 있어야 한다(npm i playwright, 또는 이미 설치된 환경). GitHub Actions 의 format 워크플로가 push 마다 돌린다.
const fs = require('fs');
const { chromium } = require('playwright');
const { SITE, serve } = require('./lib/site');

// 검사할 페이지. 연구실 사이트의 모든 메뉴 페이지와 News 보관 페이지
const PAGES = ['index', 'research', 'seminar', 'funding', 'publications', 'landscape',
  'faculty', 'students', 'mentees', 'teaching', 'talks', 'contact', 'news'];
const WIDTHS = [1440, 1280, 768, 390, 320];
const TOL = 2; // px

// 브라우저 안에서 도는 측정. 제목 역할은 글자 크기로 가른다:
// --text-h2(한 절인 제목), --text-group(목록을 묶는 제목), 그 밖(카드 제목, 작은 머리)은 크기 검사만.
function measure(TOL) {
  const css = getComputedStyle(document.documentElement);
  const px = v => parseFloat(css.getPropertyValue(v));
  const font = token => {
    const probe = document.createElement('span');
    probe.style.cssText = `display:none;font-size:var(${token})`;
    document.body.append(probe);
    const size = parseFloat(getComputedStyle(probe).fontSize);
    probe.remove(); return size;
  };
  const tok = { h2: px('--fs-5'), group: px('--fs-4'), body: px('--fs-3'), meta: px('--fs-2'), small: px('--fs-1'), paper: font('--text-paper'), author: font('--text-author'), paperMeta: font('--text-paper-meta'),
    sectionGap: parseFloat(getComputedStyle(document.body).getPropertyValue('--section-gap')) || px('--section-gap'),
    below: px('--space-4') };
  const allowed = [tok.h2, tok.group, tok.body, tok.meta, tok.small];
  // 간격은 CSS 가 정하는 상자 사이(내용 상자 기준, 안쪽 여백 제외)로 잰다. 글줄 높이의 위아래 여유는 포함한다
  const content = el => { const r = el.getBoundingClientRect(), s = getComputedStyle(el);
    return { top: r.top + parseFloat(s.paddingTop) + parseFloat(s.borderTopWidth), bottom: r.bottom - parseFloat(s.paddingBottom) - parseFloat(s.borderBottomWidth) }; };
  const main = document.querySelector('main');
  const visible = e => e.offsetParent && e.getBoundingClientRect().height > 0;
  const heads = [...main.querySelectorAll('h2, h3, .year-head, tr.schedule-year th')].filter(e => visible(e) && !e.closest('.visually-hidden'));
  // 잎 요소: 보이는 자식 요소가 없고 글자가 있거나 그림인 것. 한 항목(li, tr, 카드)의 잎들은 함께 본다
  const leaves = [...main.querySelectorAll('*')].filter(e => visible(e) && (e.tagName === 'IMG' || e.textContent.trim()) && ![...e.children].some(visible));
  const ITEM = 'li, tr, .person, figure';
  // 글줄 하나의 상자: 인라인 요소는 글자 높이만 잡히므로 가장 가까운 블록(표 칸 포함)까지 올라간다
  const block = el => { while (el !== main && getComputedStyle(el).display.startsWith('inline')) el = el.parentElement; return el; };
  const group = leaf => { const it = leaf.closest('.people-grid') || leaf.closest(ITEM); return (it ? leaves.filter(l => it.contains(l)) : [leaf]).map(block); };
  const problems = [];
  for (const h of heads) {
    const fsz = parseFloat(getComputedStyle(h).fontSize);
    const name = h.textContent.trim().slice(0, 30);
    if (!allowed.some(a => Math.abs(a - fsz) < 0.5)) problems.push(`"${name}" 글자 ${fsz}px: 토큰 크기가 아니다`);
    if (Math.abs(fsz - tok.group) > 0.5) continue;
    // 묶음 제목: 아래 첫 항목과 --space-4, 앞 묶음의 마지막 항목과 --section-gap
    const hb = content(h);
    const after = leaves.find(l => !h.contains(l) && !l.contains(h) && (h.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_FOLLOWING));
    if (after) { const below = Math.min(...group(after).map(l => content(l).top)) - hb.bottom;
      if (Math.abs(below - tok.below) > TOL) problems.push(`"${name}" 아래 간격 ${Math.round(below)}px (규칙 ${tok.below}px)`); }
    const before = [...leaves].reverse().find(l => !h.contains(l) && !l.contains(h) && (h.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_PRECEDING));
    // 앞이 목록 항목일 때만 잰다. 소개 문단이나 하위 탭 바로 아래 첫 묶음은 페이지 머리 간격을 따른다
    if (before && before.closest(ITEM)) { const above = hb.top - Math.max(...group(before).map(l => content(l).bottom));
      if (Math.abs(above - tok.sectionGap) > TOL) problems.push(`"${name}" 위 간격 ${Math.round(above)}px (규칙 ${tok.sectionGap}px)`); }
  }
  // Paper hierarchy and wrapping are shared by the list and Home focus cards.
  for (const title of main.querySelectorAll('.pubs .title, .paper-chip .paper-title')) {
    if (!visible(title)) continue;
    if (Math.abs(parseFloat(getComputedStyle(title).fontSize) - tok.paper) > 0.5)
      problems.push('논문 제목이 --text-paper 크기가 아니다');
  }
  for (const author of main.querySelectorAll('.pubs .authors')) {
    if (visible(author) && Math.abs(parseFloat(getComputedStyle(author).fontSize) - tok.author) > 0.5)
      problems.push('논문 저자가 --text-author 크기가 아니다');
  }
  for (const meta of main.querySelectorAll('.venue, .pub-link, .venue-honor')) {
    if (visible(meta) && Math.abs(parseFloat(getComputedStyle(meta).fontSize) - tok.paperMeta) > 0.5)
      problems.push('venue·자료 링크가 --text-paper-meta 크기가 아니다');
  }
  if (!(tok.paper === tok.author && tok.author === tok.paperMeta && tok.paper === tok.meta))
    problems.push('논문 제목·저자·venue가 공통 목록 글자 크기로 통일되지 않았다');
  for (const link of main.querySelectorAll('.section-next a')) {
    if (visible(link) && (Math.abs(parseFloat(getComputedStyle(link).fontSize) - tok.body) > 0.5 || getComputedStyle(link).fontWeight !== '400'))
      problems.push('닫는 안내 링크가 본문 크기·보통 굵기가 아니다');
  }
  for (const section of main.querySelectorAll('.content-section.section-next')) {
    if (visible(section) && Math.abs(parseFloat(getComputedStyle(section).paddingTop) - px('--space-5')) > TOL)
      problems.push('닫는 안내 절이 앞 내용과 --space-5 간격이 아니다');
  }
  for (const nav of main.querySelectorAll('.embed-next')) {
    if (visible(nav) && Math.abs(nav.getBoundingClientRect().top - nav.previousElementSibling.getBoundingClientRect().bottom - px('--space-5')) > TOL)
      problems.push('그림 아래 안내 링크가 --space-5 간격이 아니다');
  }
  if (document.documentElement.scrollWidth > window.innerWidth + TOL)
    problems.push('화면 밖으로 가로 넘침');
  return problems;
}

(async () => {
  if (!fs.existsSync(SITE)) { console.error('_site 가 없다. 먼저 bundle exec jekyll build'); process.exit(2); }
  const srv = await serve(); const port = srv.address().port;
  const browser = await chromium.launch();
  let failed = 0;
  for (const w of WIDTHS) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    for (const n of PAGES) {
      await page.goto(`http://localhost:${port}/${n}.html`);
      const probs = await page.evaluate(measure, TOL);
      for (const p of probs) { console.log(`✗ ${w}px ${n}: ${p}`); failed++; }
    }
    await page.close();
  }
  await browser.close(); srv.close();
  if (failed) { console.log(`형식 검사 실패: ${failed}건`); process.exit(1); }
  console.log(`형식 검사 통과: ${PAGES.length}개 페이지 × ${WIDTHS.join('·')}px`);
})();

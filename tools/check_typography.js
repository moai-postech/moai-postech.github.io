// 글자 역할과 실제 줄바꿈 검사. 토큰 일치만으로 디자인이 좋은지는 판정하지 않는다.
// 모든 페이지의 텍스트, 숨은 탭, 큰 제목의 반응형 경계를 검사한다.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { SITE, serve } = require('./lib/site');
const PAGES = ['index', 'research', 'seminar', 'funding', 'publications', 'landscape',
  'faculty', 'students', 'mentees', 'teaching', 'talks', 'contact', 'news', '404'].map(n => n + '.html');
(function walk(dir) {
  for (const e of fs.readdirSync(path.join(SITE, dir), { withFileTypes: true })) {
    const rel = path.join(dir, e.name);
    if (e.isDirectory() && e.name !== 'slides') walk(rel);
    else if (e.name === 'index.html') PAGES.push(rel);
  }
})('teaching');

function inspect() {
  const problems = [];
  const visible = e => e.getClientRects().length && getComputedStyle(e).visibility !== 'hidden' && !e.closest('.visually-hidden, .skip-link');
  const css = e => getComputedStyle(e);
  const size = e => parseFloat(css(e).fontSize);
  const check = (ok, text) => { if (!ok) problems.push(text); };
  const main = document.querySelector('main');
  check([...document.fonts].some(f => f.status === 'loaded' && /Pretendard/.test(f.family)), 'Pretendard 실제 글꼴이 로드되지 않았다');
  // 크기가 같은 묶음 제목도 h2/h3/th의 기본 행간에 기대지 않는다.
  const groups = '.page-publications h2, .page-funding h2, .page-students h2, .page-mentees h2, .page-teaching h2, .page-faculty h2:not(#professor), .year-head, .schedule-year th';
  for (const e of document.querySelectorAll(groups)) {
    if (!visible(e)) continue;
    check(Math.abs(parseFloat(css(e).lineHeight) / size(e) - 1.3) < .02 && css(e).letterSpacing === 'normal', `묶음 제목 행간·자간: ${e.textContent.trim().slice(0,35)}`);
  }
  for (const e of main.querySelectorAll('.pubs .title, .pubs .authors, .pub-meta, .pub-links')) {
    if (visible(e)) check(Math.abs(parseFloat(css(e).lineHeight) / size(e) - 1.5) < .02, `논문 행간: ${e.className}`);
  }
  for (const e of main.querySelectorAll('.paper-chip .paper-title')) {
    if (visible(e)) check(size(e) === parseFloat(css(document.body).fontSize), '대표 논문 제목이 일반 본문 크기가 아니다');
  }
  for (const e of main.querySelectorAll('.section-next .section-body > p:not(:last-child)')) {
    check(Math.abs(parseFloat(css(e).marginBottom) - 16) < 1, '안내 문단 간격이 본문 간격과 다르다');
  }
  if (innerWidth <= 680) {
    for (const e of document.querySelectorAll('.course-meta span + span, .course-eyebrow span + span')) {
      if (visible(e)) check(['none', 'normal', '""'].includes(getComputedStyle(e, '::before').content), '모바일 강의 정보에 줄머리 구분점이 남는다');
    }
    for (const e of document.querySelectorAll('.course-brand span, .study-panel:not([hidden]) h2 span')) {
      check(e.getBoundingClientRect().height <= parseFloat(css(e).lineHeight) + 1, '학기 이름이 여러 줄로 갈라진다');
    }
    const tabs = [...document.querySelectorAll('.study-tablist button')];
    if (tabs.length >= 4) {
      const r = tabs.map(e => e.getBoundingClientRect());
      check(Math.abs(r[0].top-r[1].top)<1 && Math.abs(r[2].top-r[3].top)<1 && r[2].top>r[0].top, '모바일 학기 탭이 두 열로 정돈되지 않았다');
    }
  }
  // 넘침이 없어도 단어 중간 줄바꿈이나 짧은 연결어만 남는 제목은 부자연스럽다.
  for (const e of main.querySelectorAll('.focus-tab span, h1')) {
    if (!visible(e)) continue;
    const lines = new Map(), words = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
    let wordNode;
    while ((wordNode = words.nextNode())) {
      for (const match of wordNode.textContent.matchAll(/\S+/g)) {
        const range = document.createRange();
        range.setStart(wordNode, match.index); range.setEnd(wordNode, match.index + match[0].length);
        const rects = [...range.getClientRects()].filter(r => r.width && r.height);
        if (e.closest('.focus-tab')) check(new Set(rects.map(r => Math.round(r.top))).size <= 1, `연구 방향 단어가 중간에서 갈라짐: ${match[0]}`);
        for (const r of rects) {
          const key = Math.round(r.top);
          lines.set(key, [...(lines.get(key) || []), match[0]]);
        }
      }
    }
    if (e.tagName === 'H1') for (const line of lines.values())
      check(!/^(of|and|the|for|in|to|with|a|an)$/i.test(line.join(' ').trim()), `큰 제목에서 연결어만 독립된 줄: ${line.join(' ')}`);
  }
  // 상속으로 지나치게 작거나 빽빽해진 글자, 가로 잘림을 모든 텍스트 노드에서 확인한다.
  let nodes = 0;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = walker.nextNode())) {
    const e = n.parentElement;
    if (!n.textContent.trim() || !visible(e) || e.closest('script, style, svg, sup')) continue;
    const range = document.createRange(); range.selectNode(n);
    const rects = [...range.getClientRects()].filter(r => r.width && r.height);
    if (!rects.length) continue;
    nodes++;
    const f = size(e), leading = parseFloat(css(e).lineHeight), tracking = parseFloat(css(e).letterSpacing) || 0;
    const label = `${e.tagName.toLowerCase()}.${e.className}: ${n.textContent.trim().slice(0,32)}`;
    check(f >= 13, `작은 본문 글자 ${f}px ${label}`);
    if (Number.isFinite(leading) && f < 30) check(leading / f >= 1.2, `조밀한 행간 ${label}`);
    check(tracking / f >= -.035, `과도한 음수 자간 ${label}`);
    check(rects.every(r => r.left >= -2 && r.right <= innerWidth+2), `글자가 화면 밖으로 잘림 ${label}`);
  }
  check(document.documentElement.scrollWidth <= innerWidth+2, '가로 넘침');
  return { problems: [...new Set(problems)], nodes };
}

(async () => {
  const srv = await serve(), browser = await chromium.launch();
  let nodes = 0, views = 0;
  const failures = [];
  try {
    for (const width of [1440, 1280, 768, 390, 320]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
      for (const name of PAGES) {
        await page.goto(`http://localhost:${srv.address().port}/${name}`);
        await page.evaluate(() => document.fonts.ready);
        const states = page.locator('.focus-tab, .filter-btn, .study-tablist button');
        const count = await states.count();
        for (let i = 0; i < Math.max(1, count); i++) {
          if (count) await states.nth(i).click();
          const result = await page.evaluate(inspect);
          nodes += result.nodes; views++;
          for (const problem of result.problems) failures.push(`${width}px ${name} state${i}: ${problem}`);
        }
        // 데스크톱 공통 메뉴의 숨은 항목도 실제 hover 상태에서 검사한다.
        if (name === 'index.html' && width > 680) {
          const menus = page.locator('.nav-group');
          for (let i = 0; i < await menus.count(); i++) {
            await menus.nth(i).hover();
            const result = await page.evaluate(inspect);
            nodes += result.nodes; views++;
            for (const problem of result.problems) failures.push(`${width}px ${name} menu${i}: ${problem}`);
          }
          await page.mouse.move(0, 0);
        }
        // details 안에 감춰진 Faculty/Talks 목록도 검사한다.
        const details = page.locator('details');
        if (await details.count()) {
          await details.evaluateAll(es => es.forEach(e => e.open = true));
          const result = await page.evaluate(inspect);
          nodes += result.nodes; views++;
          for (const problem of result.problems) failures.push(`${width}px ${name} details: ${problem}`);
        }
      }
      await page.close();
    }
    for (const name of ['index.html', 'teaching/26s-programming-for-data-science/index.html']) {
      const page = await browser.newPage();
      const sizes = [];
      for (const width of [320, 390, 680, 681, 768, 960, 961, 1280, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        await page.goto(`http://localhost:${srv.address().port}/${name}`);
        sizes.push(await page.locator('h1').evaluate(e => parseFloat(getComputedStyle(e).fontSize)));
        const result = await page.evaluate(inspect);
        for (const problem of result.problems) failures.push(`${width}px ${name} boundary: ${problem}`);
      }
      if (sizes.some((size, i) => i && (size < sizes[i-1] || size-sizes[i-1] > 1 && [3,6].includes(i))))
        failures.push(`${name}: 큰 제목이 반응형 경계에서 급변하거나 역전됨 ${sizes.join('/')}`);
      await page.close();
    }
  } finally { await browser.close(); srv.close(); }
  if (failures.length) { failures.forEach(f => console.error('✗ ' + f)); process.exitCode = 1; }
  else console.log(`타이포그래피 검사 통과: ${PAGES.length}페이지, ${views}상태·폭, 텍스트 ${nodes}개, 큰 제목 경계 18조합`);
})().catch(e => { console.error(e); process.exitCode = 1; });

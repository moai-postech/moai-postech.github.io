// Template contract -> every rendered page/state. No per-page snapshots or inferred roles.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { ROOT, SITE, serve, templatePages } = require('./lib/site');
const contract = require('../_themes/wide/design-contract.json');
const { loadSyntheticDirectory } = require('./lib/design-fixture');

// Changing page content must not create a second styling surface.
function checkSources() {
  const failures = [];
  const { execFileSync } = require('child_process');
  const files = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '*.md', '*.html', '*.yml'], { cwd: ROOT, encoding: 'utf8' }).trim().split('\n');
  for (const file of files) {
    if (/^(_themes\/|tools\/|changelog\/|discussions\/|assets\/)/.test(file) || /\/slides\//.test(file)) continue;
    const source = fs.readFileSync(path.join(ROOT, file), 'utf8');
    if (/^---\r?\n[\s\S]*?\blayout:\s*(page|course)\b/.test(source) || file.startsWith('_data/')) {
      if (/<style\b|\bstyle\s*=\s*["']/i.test(source)) failures.push(`${file}: 콘텐츠에 style을 넣지 말고 공통 템플릿 역할을 사용`);
    }
  }
  for (const file of ['_themes/wide/includes/theme.css', '_themes/wide/includes/course/course.css']) {
    const source = fs.readFileSync(path.join(ROOT, file), 'utf8');
    for (const m of source.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const size = m[2].match(/font-size:\s*([^;]+)/);
      if (size && !/^(var\(|inherit$)/.test(size[1].trim()) && !(m[1].trim()==='.brand-word' && size[1].trim()==='23px')) failures.push(`${file}: ${m[1].trim()} 글자 크기는 역할 토큰 사용`);
    }
    if (/font-weight:\s*(400|600|700)\b/.test(source)) failures.push(`${file}: 굵기 역할 토큰 대신 숫자 사용`);
    if (/\.page-[\w-]+\s+h[1-6]\s*\{/.test(source)) failures.push(`${file}: 페이지 이름으로 제목 역할 지정`);
  }
  return failures;
}

function inspect(contract) {
  const failures = [], counts = {}, samples = {};
  const visible = e => e.getClientRects().length && getComputedStyle(e).visibility !== 'hidden' && !e.closest('.visually-hidden,.skip-link');
  const label = e => `${e.tagName.toLowerCase()}.${typeof e.className === 'string' ? e.className : ''} ${e.textContent.trim().slice(0, 48)}`;
  const probe = document.createElement('span');
  probe.style.display = 'none'; document.body.append(probe);
  function expected(property, value, element) {
    probe.style.fontSize = getComputedStyle(element).fontSize;
    probe.style[property] = '';
    if (property === 'lineHeight' && /^\d/.test(value) && !value.endsWith('px')) return parseFloat(value) * parseFloat(getComputedStyle(element).fontSize);
    probe.style.borderStyle = 'solid';
    probe.style[property] = value;
    return getComputedStyle(probe)[property];
  }
  const same = (actual, target) => typeof target === 'number' ? Math.abs(parseFloat(actual)-target) < .6 :
    actual === target || /px$/.test(actual) && /px$/.test(target) && Math.abs(parseFloat(actual)-parseFloat(target)) < .6;
  for (const role of contract.roles) {
    const style = Object.assign({}, role.style, ...(role.variants || []).filter(v => innerWidth <= v.maxWidth).map(v=>v.style));
    const elements = [...document.querySelectorAll(role.selector)].filter(visible);
    counts[role.id] = elements.length;
    if (elements.length) samples[role.id] = Object.fromEntries(Object.keys(style).map(k => [k, getComputedStyle(elements[0])[k]]));
    for (const e of elements) for (const [property, value] of Object.entries(style)) {
      const actual = getComputedStyle(e)[property], target = expected(property, value, e);
      if (!same(actual, target)) failures.push(`${role.id}: ${property} ${actual}, 규칙 ${target}: ${label(e)}`);
    }
  }
  for (const e of document.querySelectorAll('main h1,main h2,main h3,main h4,main h5,main h6')) {
    if (!visible(e)) continue;
    const roles = contract.roles.filter(r => contract.headingRoles.includes(r.id) && e.matches(r.selector));
    if (roles.length !== 1) failures.push(`제목 역할 ${roles.length}개(정확히 하나 필요): ${label(e)}`);
  }
  const main = document.querySelector('main'), wrap = document.querySelector('.wrap');
  if (!main || !wrap) failures.push('공통 문서 틀 누락');
  const course = document.body.classList.contains('course-site');
  if (document.querySelectorAll(course ? '.course-top' : '.site-head').length !== 1 || document.querySelectorAll(course ? '.course-foot' : '.site-foot').length !== 1) failures.push('공통 머리글·꼬리말 누락/중복');
  const gap = property => parseFloat(getComputedStyle(document.documentElement).getPropertyValue(property));
  if (wrap) {
    const box = wrap.getBoundingClientRect();
    const available = document.body.getBoundingClientRect().width;
    const width = Math.min(gap('--container'), available-2*gap('--page-margin'));
    if (Math.abs(box.width-width)>2 || Math.abs(box.left-(available-width)/2)>2) failures.push('공통 본문 폭·가운데 정렬 위반');
  }
  // Every visible text node must use the common font, weight scale and text palette.
  const palette = new Set();
  for (const token of ['--text','--muted','--faint','--accent','--bg','--tone']) {
    for (const e of [document.body, ...document.querySelectorAll('[class*="tone-"]')]) {
      if (token !== '--tone' && e !== document.body) continue;
      const value = getComputedStyle(e).getPropertyValue(token).trim();
      if (value) { probe.style.color = value; palette.add(getComputedStyle(probe).color); }
    }
  }
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node, textNodes = 0;
  while ((node = walker.nextNode())) {
    const e = node.parentElement;
    if (e === probe || !node.textContent.trim() || !visible(e) || e.closest('style,script,svg')) continue;
    textNodes++;
    const css = getComputedStyle(e);
    const brand = e.closest('.brand-word,.foot-lab');
    if (!(brand ? /Outfit/.test(css.fontFamily) : /Pretendard/.test(css.fontFamily))) failures.push(`글꼴 역할 위반: ${label(e)}`);
    if (!['400','600','700'].includes(css.fontWeight)) failures.push(`굵기 척도 위반 ${css.fontWeight}: ${label(e)}`);
    if (!palette.has(css.color)) failures.push(`글자 팔레트 위반 ${css.color}: ${label(e)}`);
    if (css.textDecorationLine.includes('underline') && !e.closest('a:hover, a:focus-visible')) failures.push(`평상시 밑줄: ${label(e)}`);
  }
  // Shared gutters and top spacing: inspect roles, never decide a role from measured font size.
  for (const e of document.querySelectorAll('.content-section')) {
    if (!visible(e) || e.matches('.contact-join,.course-first,.course-summary,.study-join,.study-terms,.section-photo') || e.closest('.stage-track')) continue;
    const previous = e.previousElementSibling;
    const first = previous && (previous.matches('h1.visually-hidden,.page-intro'));
    const target = e.matches('.section-next,.section-callout') ? expected('paddingTop','var(--space-5)',e) : expected('paddingTop',first ? 'var(--page-start)' : 'var(--section-gap)',e);
    // Hero starts the first section with its own combined band rhythm.
    if (previous && previous.matches('.hero-band,.course-summary')) continue;
    if (!same(getComputedStyle(e).paddingTop,target)) failures.push(`절 위 간격 역할 위반: ${label(e)}`);
  }
  if (document.documentElement.scrollWidth > innerWidth+2) failures.push('가로 넘침');
  probe.remove();
  return { failures: [...new Set(failures)], counts, samples, textNodes };
}

async function run() {
  const failures = checkSources(), pages = templatePages(), report = { version: contract.version, pages: [], roleCoverage: {}, failures };
  if (!pages.length) throw new Error('_site에 공통 템플릿 페이지가 없다. 먼저 Jekyll build');
  const srv = await serve(); let browser;
  const navigation = new Map();
  try {
    browser = await chromium.launch();
    for (const width of contract.widths) {
      const page = await browser.newPage({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
      for (const file of pages) {
        await page.goto(`http://localhost:${srv.address().port}/${file}`);
        await page.evaluate(() => document.fonts.ready);
        await page.mouse.move(0,0);
        const entry = { file, width, states: [] };
        async function check(state) {
          const result = await page.evaluate(inspect, contract);
          entry.states.push({ state, ...result });
          for (const [role, count] of Object.entries(result.counts)) report.roleCoverage[role] = (report.roleCoverage[role] || 0) + count;
          for (const failure of result.failures) failures.push(`${file} ${width}px ${state}: ${failure}`);
        }
        await check('default');
        const nav = await page.evaluate(() => {
          const e = document.querySelector('.site-nav, .course-nav');
          return [...e.querySelectorAll(':scope > a, :scope > .nav-group > a')].map(a=>{
            const r=a.getBoundingClientRect(); return {text:a.textContent.trim(),href:a.getAttribute('href'),x:r.x,y:r.y,width:r.width,height:r.height};
          });
        });
        const family = file.startsWith('teaching/') ? file.split('/').slice(0,2).join('/') : 'lab';
        const navKey = `${width}:${family}`, baseline = navigation.get(navKey);
        if (!baseline) navigation.set(navKey,{file,nav});
        else if (JSON.stringify(nav.map(({text,href})=>({text,href}))) !== JSON.stringify(baseline.nav.map(({text,href})=>({text,href}))) || nav.some((a,i)=>['x','y','width','height'].some(k=>Math.abs(a[k]-baseline.nav[i][k])>1))) failures.push(`${file} ${width}px: 상단 메뉴가 ${baseline.file}와 다르거나 이동함`);
        entry.navigation=nav;

        for (const selector of ['.focus-tab','.filter-btn','.study-tablist button']) {
          const controls = page.locator(selector);
          for (let i=0; i<await controls.count(); i++) {
            await controls.nth(i).click(); await page.mouse.move(0,0); await check(`${selector}[${i}]`);
            if (selector === '.study-tablist button') {
              const parts = page.locator('.study-panel:not([hidden]) .study-step[data-start]');
              for (let j=0; j<await parts.count(); j++) { await parts.nth(j).click(); await page.mouse.move(0,0); await check(`${selector}[${i}] part[${j}]`); }
            }
          }
        }
        if (await page.locator('details').count()) {
          await page.locator('details').evaluateAll(es => es.forEach(e => e.open=true)); await check('details-open');
        }
        if (width > 680) {
          const menus = page.locator('.nav-group');
          for (let i=0; i<await menus.count(); i++) { await menus.nth(i).hover(); await check(`menu[${i}]`); }
          await page.mouse.move(0,0);
        }
        // One representative from each link/control role is exercised in every page family.
        for (const selector of ['.filter-link','.course-sheet','.study-sheet','.section-next a','.course-nav a[aria-current]','.subnav a[aria-current]']) {
          const control = page.locator(selector).first();
          if (await control.count() && await control.isVisible()) {
            await control.hover();
            const hover = await control.evaluate(e => ({ color:getComputedStyle(e).color, accent:getComputedStyle(document.documentElement).getPropertyValue('--accent'), decoration:getComputedStyle(e).textDecorationLine }));
            const accent = await page.evaluate(v => { const e=document.createElement('i');e.style.color=v;document.body.append(e);const c=getComputedStyle(e).color;e.remove();return c; }, hover.accent);
            if (hover.color !== accent) failures.push(`${file} ${width}px ${selector}: hover 강조색 위반`);
            await page.keyboard.press('Tab');
            await control.focus();
            const outline = await control.evaluate(e => getComputedStyle(e).outlineStyle);
            if (outline === 'none') failures.push(`${file} ${width}px ${selector}: focus 표시 누락`);
            await control.evaluate(e => e.blur()); await page.mouse.move(0,0);
          }
        }
        if (file === 'teaching/ai-study/members/index.html') {
          await page.locator('#member-password').fill('incorrect-design-check');
          await page.getByRole('button',{name:'Unlock',exact:true}).click();
          await page.locator('#member-unlock-message').filter({hasText:'Incorrect password'}).waitFor();
          await page.mouse.move(0,0); await check('password-error');
          await loadSyntheticDirectory(page,`http://localhost:${srv.address().port}/`);
          await check('synthetic-directory-unlocked');
          await page.getByRole('button',{name:'Lock',exact:true}).click();
          await page.mouse.move(0,0); await check('directory-relocked');
        }
        report.pages.push(entry);
      }
      await page.close();
    }
  } finally { if (browser) await browser.close(); await new Promise(resolve=>srv.close(resolve)); }
  // A role present in current templates cannot silently disappear from all views.
  for (const role of contract.roles) if (!role.optional && !report.roleCoverage[role.id]) failures.push(`역할 검증 누락: ${role.id} (새 역할은 실제 렌더 사례가 필요)`);
  const reportFlag = process.argv.indexOf('--report');
  if (reportFlag >= 0) fs.writeFileSync(process.argv[reportFlag+1], JSON.stringify(report,null,2)+'\n');
  const unique = [...new Set(failures)];
  if (unique.length) { unique.forEach(f=>console.error('✗ '+f)); process.exitCode=1; }
  console.log(`디자인 계약 ${unique.length?'실패':'통과'}: ${pages.length}페이지, ${contract.roles.length}역할, ${contract.widths.length}폭, ${report.pages.reduce((n,p)=>n+p.states.length,0)}상태, 위반 ${unique.length}건`);
}
if (require.main === module) run().catch(e=>{console.error(e);process.exitCode=1;});
module.exports = { inspect, checkSources };

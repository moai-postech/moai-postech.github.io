// Keyboard navigation, modifier-clicks and responsive boundaries are checked as user actions.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { SITE, serve } = require('./lib/site');
const LAB = ['/', 'research.html', 'seminar.html', 'funding.html', 'publications.html', 'landscape.html',
  'faculty.html', 'students.html', 'mentees.html', 'teaching.html', 'talks.html', 'contact.html', 'news.html', '404.html'];
const COURSE = [];
(function walk(dir) {
  for (const e of fs.readdirSync(path.join(SITE, dir), { withFileTypes: true })) {
    const rel = path.join(dir, e.name);
    if (e.isDirectory() && e.name !== 'slides') walk(rel);
    else if (e.name === 'index.html') COURSE.push(rel);
  }
})('teaching');
const check = (ok, message) => { if (!ok) throw new Error(message); };
const studyOnly = process.argv.includes('--study-only');
async function checkStudyOverview(page, base) {
  await page.goto(new URL('teaching/ai-study/', base).href);
  check(await page.locator('.study-format,.study-latest,.study-learning-path').count() === 0, 'Home still repeats study methods or detailed flow');
  const links = page.locator('.study-term-directory .study-term-card > a');
  check(await links.count() >= 4, 'Home term directory missing');
  for (const href of await links.evaluateAll(items => items.map(a => a.getAttribute('href'))))
    check(/^teaching\/ai-study\/schedule\/#[a-z0-9-]+$/.test(href), 'Home term link lost its Schedule destination');
  check(await page.locator('.study-home-hero .hero-actions a[href*="schedule"]').count() === 1, 'Home latest schedule entry missing');
  // Who we learn with keeps the cohort bars and the department map, but no paired hover (교수 2026-11-03).
  check(await page.locator('.study-home-community .study-cohort-chart li').count() > 0 && await page.locator('.study-home-community .study-dept-map li').count() > 0, 'Home lost the cohort bars or the department map');
  await links.first().hover();
  check(await page.locator('.is-linked').count() === 0, 'Home term cards highlight something else on hover');
  check(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), 'Home overflows');
  for (const url of ['teaching/ai-study/schedule/']) {
    await page.goto(new URL(url, base).href);
    const tabs = page.locator('.study-tablist [role="tab"]');
    await tabs.first().focus(); await page.keyboard.press('End');
    check(await tabs.last().getAttribute('aria-selected') === 'true', `${url}: End tab selection failed`);
    await page.keyboard.press('Home');
    check(await tabs.first().getAttribute('aria-selected') === 'true', `${url}: Home tab selection failed`);
    for (let i = 0; i < await tabs.count(); i++) {
      await tabs.nth(i).click();
      const id = await tabs.nth(i).getAttribute('aria-controls'), panel = page.locator('#' + id);
      check(await panel.locator('.study-learning-path li').count() >= 3, `${id}: learning flow missing`);
      check(await panel.locator('a.study-step,button.study-step,.study-step[data-start]').count() === 0, `${id}: overview still acts as a filter`);
      // Labels are the stage number plus its session range, `01 · Sessions 1–6` (2026-11-02 study-path-trim); the old `Topics n–m` form must not come back.
      check((await panel.locator('.study-step-label').allTextContents()).every(s => /^\d{2}( · Sessions? \d+(–\d+)?)?$/.test(s.trim())), `${id}: stage label is not "01 · Sessions n–m"`);
      check(await panel.locator('a[href*="part="]').count() === 0, `${id}: part-selection link remains`);
      const table = panel.locator('.course-schedule tbody');
      const before = await table.count() ? await table.innerHTML() : null;
      // Hovering a stage tints its sessions (교수 2026-11-02); a click still selects nothing, and leaving restores the table.
      await panel.locator('.study-step').first().hover();
      if (before !== null) check(await panel.locator('tr.is-step-linked').count() > 0, `${id}: hovering a stage did not show its sessions`);
      await panel.locator('.study-step').first().click();
      await page.mouse.move(0, 0);
      if (before !== null) check(before === await table.innerHTML(), `${id}: overview changed the timetable`);
      check(await panel.locator('.is-part-selected, tr.is-step-linked').count() === 0, `${id}: timetable highlight remains`);
      check(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), `${id}: overview overflows`);
    }
  }
  await page.goto(new URL('teaching/ai-study/schedule/?part=7-8#fall-2026', base).href);
  check(await page.locator('#tab-fall-2026').getAttribute('aria-selected') === 'true', 'old part link lost term selection');
  check(await page.locator('.is-part-selected').count() === 0, 'old part link still highlights rows');
}
(async () => {
  const server = await serve(); const base = `http://localhost:${server.address().port}/`;
  const browser = await chromium.launch();
  try {
    for (const width of (studyOnly ? [1440, 768, 390, 320] : [1280, 390])) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      if (studyOnly) { await checkStudyOverview(page, base); await page.close(); continue; }
      for (const name of [...LAB, ...COURSE]) {
        await page.goto(new URL(name, base).href);
        await page.keyboard.press('Tab');
        check(await page.locator('.skip-link').evaluate(e => e === document.activeElement && e.getBoundingClientRect().top >= 0), `${width}px ${name}: skip link not first/visible`);
        await page.keyboard.press('Enter');
        await page.waitForFunction(() => document.activeElement.id === 'main-content');
        check(new URL(page.url()).pathname.replace(/index\.html$/, '') === new URL(name, base).pathname.replace(/index\.html$/, ''), `${name}: skip link navigated to another page`);
      }
      for (const [url, selector] of [['/', '.focus-tab'], ['teaching/ai-study/schedule/', '[data-study-tabs] [role="tab"]']]) {
        await page.goto(new URL(url, base).href);
        await page.addStyleTag({ content: 'html {scroll-behavior:auto!important}' });
        const tabs = page.locator(selector), count = await tabs.count();
        await tabs.first().evaluate(e => e.closest('[role="tablist"]').scrollIntoView({ block: 'center', behavior: 'instant' }));
        await tabs.first().focus();
        const y = await page.evaluate(() => scrollY);
        await page.keyboard.press('End');
        check(await tabs.last().getAttribute('aria-selected') === 'true', `${url}: End did not choose last tab`);
        await page.keyboard.press('Home');
        check(await tabs.first().getAttribute('aria-selected') === 'true', `${url}: Home did not choose first tab`);
        await page.keyboard.press('ArrowLeft');
        check(await tabs.nth(count - 1).getAttribute('aria-selected') === 'true', `${url}: arrow did not wrap`);
        check(Math.abs(await page.evaluate(() => scrollY) - y) < 3, `${url}: tab key scrolled the page`);
      }
      await checkStudyOverview(page, base);
      await page.close();
    }
    if (studyOnly) { console.log("Study overview checks passed: 4 widths, 4 terms, compact Home and term links, Schedule flow, term keyboard navigation, no row highlighting"); return; }
    const context = await browser.newContext(); const page = await context.newPage();
    await page.goto(base);
    const link = page.locator('.mini-text a').first();  // the publications line now sits in the Paper Stella band; the first .section-next is Join us (2026-11-03 home-paper-stella-mini)
    await link.evaluate(el => { const range = document.createRange(); range.selectNodeContents(el); getSelection().removeAllRanges(); getSelection().addRange(range); });
    const popupReady = context.waitForEvent('page', { timeout: 5000 });
    await link.click({ modifiers: [process.platform === 'darwin' ? 'Meta' : 'Control'] });
    const popup = await popupReady;
    await popup.waitForURL('**/publications.html');
    check(new URL(page.url()).pathname === '/', 'modified click replaced the current page');
    await context.close();
    // The old 680/681 split inserted over 500px of extra content. Keep the transition gradual.
    const boundary = await browser.newPage(); const tops = [];
    for (const width of [680, 681, 960, 961]) {
      await boundary.setViewportSize({ width, height: 900 }); await boundary.goto(base);
      await boundary.evaluate(() => document.fonts.ready);
      tops.push(await boundary.locator('.sec-focus').evaluate(e => e.getBoundingClientRect().top));
    }
    check(Math.abs(tops[1] - tops[0]) < 180, '680/681px: abrupt Home height jump');
    check(Math.abs(tops[3] - tops[2]) < 180, '960/961px: abrupt Home height jump');
    await boundary.close();
    console.log(`조작 검사 통과: ${LAB.length + COURSE.length}페이지 × 2개 폭, 탭·새 탭·반응형 경계`);
  } finally { await browser.close(); server.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });

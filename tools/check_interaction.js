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
(async () => {
  const server = await serve(); const base = `http://localhost:${server.address().port}/`;
  const browser = await chromium.launch();
  try {
    for (const width of [1280, 390]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
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
      // Learning-path buttons select only their term's numbered study sessions.
      await page.goto(new URL('teaching/ai-study/schedule/', base).href);
      await page.emulateMedia({ reducedMotion: 'reduce' });
      const parts = {
        'fall-2026': [[1, 6], [7, 8], [9, 11]],
        'summer-2026': [[1, 3], [4, 7], [8, 10]],
        'spring-2026': [[1, 2], [3, 6], [7, 9]],
        'fall-2025': [[1, 3], [4, 5], [6, 7], [8, 9]]
      };
      for (const [term, ranges] of Object.entries(parts)) {
        await page.locator(`[aria-controls="${term}"]`).click();
        const panel = page.locator(`#${term}`), buttons = panel.locator('.study-step');
        for (let i = 0; i < ranges.length; i++) {
          const [start, end] = ranges[i], button = buttons.nth(i);
          if (i === 0) await button.click();
          else { await button.focus(); await page.keyboard.press(i % 2 ? 'Enter' : 'Space'); }
          const actual = await panel.locator('.is-part-selected .cs-n').allTextContents();
          const expected = Array.from({ length: end - start + 1 }, (_, n) => String(start + n));
          check(actual.join(',') === expected.join(','), `${width}px ${term}: wrong rows for part ${i}`);
          check(await panel.locator('.study-step[aria-pressed="true"]').count() === 1, `${term}: multiple selected parts`);
          check(await button.getAttribute('aria-pressed') === 'true', `${term}: selected button missing state`);
          const colors = await panel.evaluate(el => {
            const selected = el.querySelector('.is-part-selected .cs-n');
            const other = el.querySelector('tr[data-session]:not(.is-part-selected) .cs-n');
            const target = matchMedia('(max-width: 680px)').matches ? cell => cell.parentElement : cell => cell;
            return [selected, other].map(cell => getComputedStyle(target(cell)).backgroundColor);
          });
          check(colors[0] !== colors[1], `${term}: selected rows not visually highlighted`);
          await page.waitForFunction(id => {
            const rect = document.querySelector(`#${id} .is-part-selected`).getBoundingClientRect();
            return rect.top >= 0 && rect.top < innerHeight;
          }, term);
        }
        await buttons.last().focus(); await page.keyboard.press('Space');
        check(await panel.locator('.is-part-selected').count() === 0, `${term}: repeat selection did not clear`);
        check(await buttons.last().getAttribute('aria-pressed') === 'false', `${term}: cleared button still pressed`);
      }
      await page.close();
    }
    const context = await browser.newContext(); const page = await context.newPage();
    await page.goto(base);
    const link = page.locator('.content-section.section-next a').first();
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

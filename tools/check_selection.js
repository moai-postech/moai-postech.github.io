// Real pointer drags catch link navigation and invisible selections that CSS checks miss.
const { chromium } = require('playwright');
const { serve } = require('./lib/site');
const CASES = [
  ['index', '.section-callout p'], ['index', '.section-callout a'],
  ['index', '.focus-tab span'], ['index', '.sec-media .media-source'],
  ['teaching', '.list-intro a'], ['research', '.section-next a'],
  ['contact', '.step-body a'], ['teaching/ai-study/index', '.course-lead'],
];
(async () => {
  const server = await serve();
  const browser = await chromium.launch();
  let count = 0;
  try {
    for (const width of [1280, 390]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      for (const [name, selector] of CASES) {
        await page.goto(`http://localhost:${server.address().port}/${name}.html`);
        await page.addStyleTag({ content: 'html { scroll-behavior: auto !important; }' });
        await page.evaluate(() => document.fonts.ready);
        const target = page.locator(selector).first();
        await target.evaluate(el => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
        const rect = await target.evaluate(el => {
          getSelection().removeAllRanges();
          const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
          let node;
          while ((node = walker.nextNode())) {
            if (!node.textContent.trim()) continue;
            const range = document.createRange();
            range.setStart(node, 0); range.setEnd(node, Math.min(node.length, 12));
            const r = range.getClientRects()[0];
            return { x: r.x, y: r.y, w: r.width, h: r.height };
          }
        });
        if (!rect) throw new Error(`${name} ${selector}: no selectable text`);
        const url = page.url();
        await page.mouse.move(rect.x + 1, rect.y + rect.h / 2);
        await page.mouse.down();
        await page.mouse.move(rect.x + rect.w - 1, rect.y + rect.h / 2, { steps: 20 });
        await page.mouse.up();
        if (page.url() !== url || !await page.evaluate(() => getSelection().toString().length))
          throw new Error(`${width}px ${name} ${selector}: drag did not select text`);
        count++;
      }
      // A regular click still follows the link after a previous selection.
      await page.goto(`http://localhost:${server.address().port}/index.html`);
      await page.locator('.section-callout a').first().click();
      await page.waitForURL('**/publications.html');
      await page.close();
    }
    console.log(`텍스트 드래그 검사 통과: ${count}건, 일반 링크 클릭 정상`);
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error.message); process.exitCode = 1; });

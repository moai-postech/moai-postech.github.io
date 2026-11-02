// Public output must contain aggregates and ciphertext only. Optional env enables a full unlock/relock test.
const { chromium } = require('playwright');
const { serve } = require('./lib/site');
const { loadSyntheticDirectory, forgetAccess } = require('./lib/design-fixture');
const { checkRememberedAccess } = require('./lib/study-access-check');
const assert = (ok, message) => { if (!ok) throw new Error(message); };
(async () => {
  const server = await serve();
  const browser = await chromium.launch();
  try {
    for (const width of [1440, 768, 390, 320]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 } });
      await page.goto(`http://localhost:${server.address().port}/teaching/ai-study/`);
      const total = Number(await page.locator('.study-stat-summary dd').first().textContent());
      assert(total > 0, 'statistics missing');
      await page.goto(`http://localhost:${server.address().port}/teaching/ai-study/members/`);
      assert(await page.locator('.study-stat-summary').count() === 0, 'overview duplicated on Members');
      assert(await page.locator('tbody tr').count() === 0, 'private rows in initial HTML');
      assert(!/@postech\.ac\.kr|\[at\] postech\.ac\.kr/.test(await page.content()), 'plaintext email in initial HTML');
      assert(!await page.locator('#member-full-list').isVisible(), 'full list visible while locked');
      await page.locator('#member-password').fill('incorrect-' + Date.now());
      await page.getByRole('button', { name: 'Unlock', exact: true }).click();
      await page.getByRole('status').filter({ hasText: 'Incorrect password' }).waitFor();
      assert(await page.locator('tbody tr').count() === 0, 'wrong password exposed rows');
      if (process.env.AI_STUDY_MEMBERS_PASSWORD) {
        await page.locator('#member-password').fill(process.env.AI_STUDY_MEMBERS_PASSWORD);
        await page.getByRole('button', { name: 'Unlock', exact: true }).click();
        await page.locator('#member-full-list[data-access]').waitFor();
        assert(await page.getByRole('button', { name: 'Lock' }).count() === 0, 'Lock button returned');
        assert(await page.locator('#members-all tbody tr').count() === total, 'decrypted total differs from statistics');
        assert(await page.locator('table:visible').count() === 1, 'one table per tab');
        const cohorts = await page.locator('table:visible tbody tr td:nth-child(2)').allTextContents();
        assert(cohorts.every((n, i) => !i || parseInt(cohorts[i - 1]) <= parseInt(n)), 'cohorts not ascending like the sheet');
        assert((await page.locator('#members-all thead th').allTextContents()).join() === '#,Cohort,Entry,Department,Name,POSTECH Email,Participation', 'directory columns');
        assert((await page.locator('[role="tab"] strong').allTextContents())[0] === 'Full list', 'Full list tab first');
        assert(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), 'unlocked overflow');
        await forgetAccess(page);
        await page.locator('#member-unlock-form').waitFor({state:'visible'});
        assert(await page.locator('tbody tr').count() === 0, 'forgotten access retained private rows');
      }
      assert(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), 'locked overflow');
      await loadSyntheticDirectory(page, `http://localhost:${server.address().port}/`);
      assert((await page.locator('[role="tab"] strong').allTextContents()).join() === 'Full list,4기', 'tabs are Full list then each term');
      assert(await page.locator('.study-members-table:visible').count() === 1, 'synthetic directory shows one table');
      assert((await page.locator('#members-all thead th').allTextContents()).join() === '#,Cohort,Entry,Department,Name,POSTECH Email,Participation', 'synthetic directory columns');
      assert((await page.locator('#members-all tbody tr').first().locator('th, td').allTextContents()).join() === '1,4기,2026,Example department,Example Student,example,3기4기', 'member fields not under matching headings');
      const fullX = await page.locator('#members-all thead th').evaluateAll(c => c.map(e => Math.round(e.getBoundingClientRect().x)));
      await page.getByRole('tab', { name: /4기/ }).click();
      assert((await page.locator('#members-4 thead th').allTextContents()).join() === '#,Cohort,Entry,Department,Name,POSTECH Email,', 'term tab drops Participation');
      if (width > 680) assert(JSON.stringify(await page.locator('#members-4 thead th').evaluateAll(c => c.map(e => Math.round(e.getBoundingClientRect().x)))) === JSON.stringify(fullX), 'columns moved between tabs');
      await page.getByRole('tab', { name: /Full list/ }).click();
      assert(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), 'synthetic directory overflow');
      await forgetAccess(page, `http://localhost:${server.address().port}/teaching/ai-study/members/`);
      await page.locator('#member-unlock-form').waitFor({state:'visible'});
      assert(await page.locator('tbody tr').count() === 0, 'forgotten synthetic access retained rows');
      await page.close();
    }
    await checkRememberedAccess(`http://localhost:${server.address().port}/`);
    console.log('Study Members checks passed: 4 widths, remembered access across reload/navigation/restart, no Lock button, password change, roster update, non-exportable key');
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error.message); process.exitCode = 1; });

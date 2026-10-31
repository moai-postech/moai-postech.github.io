// Public output must contain aggregates and ciphertext only. Optional env enables a full unlock/relock test.
const { chromium } = require('playwright');
const { serve } = require('./lib/site');
const { loadSyntheticDirectory } = require('./lib/design-fixture');
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
        await page.getByRole('button', { name: 'Lock', exact: true }).waitFor();
        assert(await page.locator('tbody tr').count() === total, 'decrypted total differs from statistics');
        assert(await page.locator('table').count() === 1, 'directory is not one table');
        const cohorts = await page.locator('tbody tr td:first-child').allTextContents();
        assert(cohorts.every((n, i) => !i || parseInt(cohorts[i - 1]) >= parseInt(n)), 'cohorts not descending');
        assert((await page.locator('thead th').allTextContents()).join() === 'Cohort,Entry,Department,Name,Contact,Participation', 'directory columns');
        assert(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), 'unlocked overflow');
        await page.getByRole('button', { name: 'Lock', exact: true }).click();
        await page.locator('#member-unlock-form').waitFor({state:'visible'});
        assert(await page.locator('tbody tr').count() === 0, 'relocking retained private rows');
        await page.reload();
        assert(await page.locator('tbody tr').count() === 0, 'reload retained private rows');
      }
      assert(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), 'locked overflow');
      await loadSyntheticDirectory(page, `http://localhost:${server.address().port}/`);
      assert(await page.locator('.study-members-table').count() === 1, 'synthetic directory is not one table');
      assert((await page.locator('#member-full-list h2').allTextContents()).join() === 'Cohorts,Full List', 'cohort overview must precede full list');
      assert(await page.locator('.study-cohort-group .study-cohort-names li').count() === 1, 'cohort overview names missing');
      assert((await page.locator('thead th').allTextContents()).join() === 'Cohort,Entry,Department,Name,Contact,Participation', 'synthetic directory columns');
      assert((await page.locator('tbody tr').first().locator('th, td').allTextContents()).join() === '4기,2026,Example department,Example Student,example [at] postech.ac.kr,3기4기', 'member fields not under matching headings');
      assert(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), 'synthetic directory overflow');
      await page.getByRole('button', { name: 'Lock', exact: true }).click();
      await page.locator('#member-unlock-form').waitFor({state:'visible'});
      assert(await page.locator('tbody tr').count() === 0, 'synthetic relocking retained rows');
      await page.close();
    }
    await checkRememberedAccess(`http://localhost:${server.address().port}/`);
    console.log('Study Members checks passed: 4 widths, remembered access across reload/navigation/restart, Lock, password change, roster update, non-exportable key');
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error.message); process.exitCode = 1; });

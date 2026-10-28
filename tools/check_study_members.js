// Public output must contain aggregates and ciphertext only. Optional env enables a full unlock/relock test.
const { chromium } = require('playwright');
const { serve } = require('./lib/site');
const assert = (ok, message) => { if (!ok) throw new Error(message); };
(async () => {
  const server = await serve();
  const browser = await chromium.launch();
  try {
    for (const width of [1440, 768, 390, 320]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 } });
      await page.goto(`http://localhost:${server.address().port}/teaching/ai-study/members/`);
      const total = Number(await page.locator('.study-stat-summary dd').first().textContent());
      assert(total > 0, 'statistics missing');
      assert(await page.locator('tbody tr').count() === 0, 'private rows in initial HTML');
      assert(!/@postech\.ac\.kr|\[at\] postech\.ac\.kr/.test(await page.content()), 'plaintext email in initial HTML');
      assert(!await page.locator('#member-full-list').isVisible(), 'full list visible while locked');
      await page.locator('#member-password').fill('incorrect-' + Date.now());
      await page.getByRole('button', { name: 'Unlock list', exact: true }).click();
      await page.getByRole('status').filter({ hasText: 'Incorrect password' }).waitFor();
      assert(await page.locator('tbody tr').count() === 0, 'wrong password exposed rows');
      if (process.env.AI_STUDY_MEMBERS_PASSWORD) {
        await page.locator('#member-password').fill(process.env.AI_STUDY_MEMBERS_PASSWORD);
        await page.getByRole('button', { name: 'Unlock list', exact: true }).click();
        await page.getByRole('button', { name: 'Lock list', exact: true }).waitFor();
        assert(await page.locator('tbody tr').count() === total, 'decrypted total differs from statistics');
        assert(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), 'unlocked overflow');
        await page.getByRole('button', { name: 'Lock list', exact: true }).click();
        assert(await page.locator('tbody tr').count() === 0, 'relocking retained private rows');
        await page.reload();
        assert(await page.locator('tbody tr').count() === 0, 'reload retained private rows');
      }
      assert(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), 'locked overflow');
      await page.close();
    }
    console.log('Study Members privacy checks passed: 4 widths' + (process.env.AI_STUDY_MEMBERS_PASSWORD ? ', unlock/relock/reload' : ', locked output and wrong password'));
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error.message); process.exitCode = 1; });

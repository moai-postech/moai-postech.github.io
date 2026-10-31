// Test remembered access with invented data in a disposable browser profile.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { chromium } = require('playwright');
const { syntheticDirectoryHTML } = require('./design-fixture');
const assert = (ok, message) => { if (!ok) throw new Error(message); };

async function checkRememberedAccess(base) {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'study-access-'));
  const url = base + 'teaching/ai-study/members/index.html?remember-test=1';
  let context;
  let html = syntheticDirectoryHTML();
  const start = async () => {
    context = await chromium.launchPersistentContext(profile, { headless: true });
    await context.route('**/teaching/ai-study/members/index.html?remember-test=1', route =>
      route.fulfill({ status: 200, contentType: 'text/html', body: html }));
    return context.pages()[0];
  };
  const locked = async page => {
    await page.getByRole('button', { name: 'Unlock', exact: true }).waitFor({ state: 'visible' });
    await page.waitForFunction(() => !document.querySelector('#member-unlock-form button').disabled);
    assert(await page.locator('tbody tr').count() === 0, 'locked page retained rows');
  };
  const unlocked = async page => {
    await page.locator('.study-members-table').waitFor();
    await page.waitForFunction(() => !document.querySelector('#lock-member-list').disabled);
  };
  try {
    let page = await start();
    await page.goto(url);
    await page.locator('#member-password').fill('wrong-password');
    await page.getByRole('button', { name: 'Unlock', exact: true }).click();
    await page.getByRole('status').filter({ hasText: 'Incorrect password' }).waitFor();
    await page.reload();
    await locked(page);
    await page.locator('#member-password').fill('design-fixture-only');
    await page.getByRole('button', { name: 'Unlock', exact: true }).click();
    await unlocked(page);
    await page.reload();
    await unlocked(page);
    const storage = await page.evaluate(async () => {
      const db = await new Promise((resolve, reject) => {
        const open = indexedDB.open('moai-study-members', 1);
        open.onsuccess = () => resolve(open.result); open.onerror = () => reject(open.error);
      });
      const record = await new Promise((resolve, reject) => {
        const request = db.transaction('access').objectStore('access').get('directory');
        request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error);
      });
      db.close();
      return { keys: Object.keys(record).sort(), extractable: record.key.extractable,
        local: localStorage.length, session: sessionStorage.length };
    });
    assert(storage.keys.join() === 'iterations,key,salt' && storage.extractable === false &&
      !storage.local && !storage.session, 'stored access contains exportable or unnecessary data');
    await page.goto(base + 'teaching/ai-study/');
    await page.goto(url);
    await unlocked(page);
    const other = await context.newPage();
    await other.goto(url); await unlocked(other); await other.close();
    await context.close(); context = null;
    page = await start(); await page.goto(url); await unlocked(page);
    html = syntheticDirectoryHTML(undefined, { data: [{ number: 4, members: [{ name: 'Updated Student',
      department: 'IME', entry_year: '2026', email: 'updated@postech.ac.kr', participation: [4] }] }] });
    await page.reload(); await unlocked(page);
    assert(await page.getByRole('rowheader', { name: 'Updated Student' }).count() === 1, 'roster update was not restored');
    html = syntheticDirectoryHTML(undefined, { password: 'changed-fixture-password' });
    await page.reload(); await locked(page);
    await page.locator('#member-password').fill('changed-fixture-password');
    await page.getByRole('button', { name: 'Unlock', exact: true }).click();
    await unlocked(page);
    await page.getByRole('button', { name: 'Lock', exact: true }).click(); await locked(page);
    page = await context.newPage();
    await page.addInitScript(() => {
      IDBObjectStore.prototype.put = () => { throw new DOMException('Fixture storage error', 'DataCloneError'); };
    });
    await page.goto(url); await locked(page);
    await page.locator('#member-password').fill('changed-fixture-password');
    await page.getByRole('button', { name: 'Unlock', exact: true }).click(); await unlocked(page);
    await page.getByRole('status').filter({ hasText: 'could not remember access' }).waitFor();
    await page.getByRole('button', { name: 'Lock', exact: true }).click(); await locked(page);
    await page.reload(); await locked(page);
    await context.close(); context = null;
    page = await start(); await page.goto(url); await locked(page);
    await page.addInitScript(() => Object.defineProperty(window, 'indexedDB', { value: undefined }));
    await page.reload(); await locked(page);
    await page.locator('#member-password').fill('changed-fixture-password');
    await page.getByRole('button', { name: 'Unlock', exact: true }).click();
    await unlocked(page);
    await page.getByRole('status').filter({ hasText: 'could not remember access' }).waitFor();
    await page.getByRole('button', { name: 'Lock', exact: true }).click(); await locked(page);
  } finally {
    if (context) await context.close();
    fs.rmSync(profile, { recursive: true, force: true });
  }
}
module.exports = { checkRememberedAccess };

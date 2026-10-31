// Only aggregate statistics and encrypted data are public before unlocking.
(function () {
  'use strict';
  const form = document.getElementById('member-unlock-form');
  const input = document.getElementById('member-password');
  const list = document.getElementById('member-full-list');
  const lock = document.getElementById('lock-member-list');
  const message = document.getElementById('member-unlock-message');
  const submit = form.querySelector('button');
  const data = JSON.parse(document.getElementById('member-encrypted-data').textContent);
  let accessRemembered = false;
  const decode = value => Uint8Array.from(atob(value), c => c.charCodeAt(0));
  // IndexedDB can retain a non-exportable CryptoKey without storing the password or member details.
  function savedAccess(mode, value) {
    return new Promise((resolve, reject) => {
      const open = indexedDB.open('moai-study-members', 1);
      open.onupgradeneeded = () => open.result.createObjectStore('access');
      open.onerror = () => reject(open.error);
      open.onblocked = () => reject(new Error('Storage unavailable'));
      open.onsuccess = () => {
        const db = open.result;
        const tx = db.transaction('access', mode);
        const store = tx.objectStore('access');
        const request = mode === 'readonly' ? store.get('directory') :
          value ? store.put(value, 'directory') : store.delete('directory');
        tx.oncomplete = () => { db.close(); resolve(request.result); };
        tx.onabort = tx.onerror = () => { db.close(); reject(tx.error); };
      };
    });
  }
  const element = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  function render(cohorts) {
    const table = element('table', undefined, 'study-members-table');
    table.append(element('caption', 'Study members by joining cohort, newest first', 'visually-hidden'));
    const cols = element('colgroup');
    for (const name of ['cohort', 'year', 'department', 'name', 'email', 'participation']) cols.append(element('col', undefined, 'sm-' + name));
    table.append(cols);
    const head = element('thead'), header = element('tr');
    const labels = ['Cohort', 'Entry', 'Department', 'Name', 'Contact', 'Participation'];
    for (const label of labels) { const th = element('th', label); th.scope = 'col'; header.append(th); }
    head.append(header); table.append(head);
    const body = element('tbody');
    for (const cohort of [...cohorts].sort((a, b) => b.number - a.number)) {
      for (const member of cohort.members) {
        const row = element('tr');
        const year = /^\d{2}$/.test(member.entry_year) ? '20' + member.entry_year : member.entry_year;
        const values = [cohort.number + '기', year, member.department === 'Mueunjae' ? 'Undeclared' : member.department, member.name, member.email.replace('@', ' [at] ')];
        values.forEach((value, index) => {
          const cell = element(index === 3 ? 'th' : 'td', value, index === 4 ? 'study-member-email' : undefined);
          if (index === 3) cell.scope = 'row';
          cell.dataset.label = labels[index]; row.append(cell);
        });
        const cell = element('td'); cell.dataset.label = labels[5];
        const markers = element('span', undefined, 'study-member-markers');
        for (const n of member.participation) markers.append(element('span', n + '기', 'study-member-marker'));
        cell.append(markers); row.append(cell); body.append(row);
      }
    }
    table.append(body); list.replaceChildren(table);
  }
  async function unlock(key, focus) {
    const plaintext = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: decode(data.iv) }, key, decode(data.ciphertext));
    render(JSON.parse(new TextDecoder().decode(plaintext)));
    input.value = ''; form.hidden = true; list.hidden = false; lock.hidden = false;
    submit.setAttribute('aria-expanded', 'true'); message.textContent = '';
    if (focus) lock.focus();
  }
  submit.disabled = true;
  (async () => {
    try {
      const remembered = await savedAccess('readonly');
      if (remembered) {
        if (remembered.salt !== data.salt || remembered.iterations !== data.iterations) throw new Error('Access changed');
        await unlock(remembered.key, false);
        accessRemembered = true;
      }
    } catch (_) {
      await savedAccess('readwrite').catch(() => {});
    } finally { submit.disabled = false; }
  })();
  form.addEventListener('submit', async event => {
    event.preventDefault();
    submit.disabled = true; message.textContent = '';
    try {
      if (!window.crypto || !window.crypto.subtle) throw new Error('unavailable');
      const keyMaterial = await crypto.subtle.importKey('raw', new TextEncoder().encode(input.value), 'PBKDF2', false, ['deriveKey']);
      const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt: decode(data.salt), iterations: data.iterations, hash: 'SHA-256' }, keyMaterial, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
      await unlock(key, true);
      lock.disabled = true;
      try {
        await savedAccess('readwrite', { key, salt: data.salt, iterations: data.iterations });
        accessRemembered = true;
      } catch (_) {
        message.textContent = 'Unlocked for this visit. Your browser could not remember access.';
      } finally { lock.disabled = false; }
    } catch (error) {
      message.textContent = error.message === 'unavailable' ? 'Use a browser with HTTPS support to unlock the list.' : 'Incorrect password. Please try again.';
      input.value = ''; input.focus();
    } finally { submit.disabled = false; }
  });
  lock.addEventListener('click', async () => {
    lock.disabled = true;
    try { if (accessRemembered) await savedAccess('readwrite'); }
    catch (_) { message.textContent = 'Could not forget access. Please try again.'; lock.disabled = false; return; }
    list.hidden = true; list.replaceChildren(); lock.hidden = true; form.hidden = false;
    accessRemembered = false;
    lock.disabled = false;
    submit.setAttribute('aria-expanded', 'false'); message.textContent = ''; input.focus();
  });
})();

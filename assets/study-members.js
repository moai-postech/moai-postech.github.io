// Only aggregate statistics and encrypted data are public before unlocking.
(function () {
  'use strict';
  const form = document.getElementById('member-unlock-form');
  const input = document.getElementById('member-password');
  const list = document.getElementById('member-full-list');
  const message = document.getElementById('member-unlock-message');
  const submit = form.querySelector('button');
  const data = JSON.parse(document.getElementById('member-encrypted-data').textContent);
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
        try {
          const tx = db.transaction('access', mode);
          const store = tx.objectStore('access');
          const request = mode === 'readonly' ? store.get('directory') :
            value ? store.put(value, 'directory') : store.delete('directory');
          tx.oncomplete = () => { db.close(); resolve(request.result); };
          tx.onabort = tx.onerror = () => { db.close(); reject(tx.error); };
        } catch (error) { db.close(); reject(error); }
      };
    });
  }
  const element = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  // The Full List shows the sheet's Korean department name only (2026-11-02); old spellings are unified.
  const ALIASES = { 'IT융공': 'IT융합', 'Mueunjae': '무은재', 'Undeclared': '무은재' };
  const departmentLabel = name => ALIASES[name] || name;
  const entryYear = member => /^\d{2}$/.test(member.entry_year) ? '20' + member.entry_year : String(member.entry_year);
  // Cohort, entry year, department and participation open the matching list, by the same #hash links as the Home department map (교수 2026-11-03).
  const listLink = (text, hash, className) => {
    const a = element('a', text, className); a.href = location.pathname + hash;  // <base href="/"> would send a bare #hash to the site root
    return a;
  };
  const FILTERS = {
    dept: { label: v => v, of: p => departmentLabel(p.department), value: v => departmentLabel(v) },
    entry: { label: v => v + ' entry', of: entryYear, value: v => v },
  };
  // Each term's student representative, by POSTECH ID (public on the Schedule page).
  const representatives = JSON.parse(document.getElementById('member-representatives').textContent || '{}');
  // '#' numbers the rows so each table shows how many people it lists (교수 2026-11-02).
  // The column holds the POSTECH ID only, so it is named that way; LinkedIn links sit right of it (교수 2026-11-03).
  const LABELS = ['#', 'Cohort', 'Entry', 'Department', 'Name', 'POSTECH ID', 'LinkedIn', 'Participation'];
  function table(people, caption, termTab, rep) {
    const t = element('table', undefined, 'study-members-table');
    t.append(element('caption', caption, 'visually-hidden'));
    // Term tables keep the Participation column slot empty so every column stays where it is in Full list.
    const cols = element('colgroup');
    for (const name of ['n', 'cohort', 'year', 'department', 'name', 'email', 'linkedin', 'participation']) cols.append(element('col', undefined, 'sm-' + name));
    const head = element('thead'), header = element('tr');
    LABELS.forEach((label, i) => {
      const th = element('th', termTab && i === 7 ? '' : label); th.scope = 'col';
      if (termTab && i === 7) th.setAttribute('aria-hidden', 'true');
      header.append(th);
    });
    head.append(header); t.append(cols, head);
    const body = element('tbody');
    people.forEach((member, n) => {
      const id = member.email.split('@')[0];
      const row = element('tr', undefined, rep && id === rep ? 'is-representative' : undefined);
      const year = entryYear(member);
      const dept = departmentLabel(member.department);
      const values = [String(n + 1), member.cohort + '기', year, dept, member.name, id];
      const links = { 1: '#members-' + member.cohort, 2: '#entry=' + year, 3: '#dept=' + encodeURIComponent(dept) };
      values.forEach((value, index) => {
        const cell = element(index === 4 ? 'th' : 'td', links[index] || index === 4 ? undefined : value, index === 5 ? 'study-member-email' : index === 0 ? 'study-member-n' : undefined);
        if (links[index]) cell.append(listLink(value, links[index], 'study-member-link'));
        if (index === 4) {
          cell.scope = 'row';
          // The POVIS photo travels inside the same ciphertext, so it shows on hover or focus once the list is open (교수 2026-11-03).
          // Without a photo anywhere, the same card shows the name's first letter so every name behaves alike (2026-11-03).
          const name = element('span', value, 'study-member-name has-photo'); name.tabIndex = 0;
          if (member.photo) {
            const img = element('img', undefined, 'study-member-photo'); img.src = member.photo; img.alt = ''; img.loading = 'lazy';
            name.append(img);
          } else {
            const card = element('span', undefined, 'study-member-photo is-initial'); card.dataset.initial = value.slice(0, 1);  // drawn by CSS so the name text stays clean
            name.append(card);
          }
          cell.append(name);
          if (row.className) cell.append(element('span', ' (대표학생)', 'study-member-role'));  // shown as 최지안 (대표학생) with the row colour (교수 2026-11-02)
        }
        cell.dataset.label = LABELS[index]; row.append(cell);
      });
      const linkedin = element('td', undefined, 'study-member-linkedin'); linkedin.dataset.label = LABELS[6];
      if (member.linkedin) {
        const a = element('a', 'in', 'study-member-in'); a.href = 'https://www.linkedin.com/in/' + member.linkedin + '/';
        a.target = '_blank'; a.rel = 'noopener'; a.setAttribute('aria-label', member.name + ' on LinkedIn');
        linkedin.append(a);
      }
      row.append(linkedin);
      const cell = element('td'); cell.dataset.label = LABELS[7];
      if (!termTab) {
        const markers = element('span', undefined, 'study-member-markers');
        for (const n of member.participation) markers.append(listLink(n + '기', '#members-' + n, 'study-member-marker'));
        cell.append(markers);
      }
      row.append(cell); body.append(row);
    });
    t.append(body);
    return t;
  }
  function render(cohorts) {
    // The roster arrives in the sheet's row order (cohort, entry year, department, name).
    const ordered = [...cohorts].sort((a, b) => a.number - b.number);
    const people = ordered.flatMap(c => c.members.map(m => Object.assign({ cohort: c.number }, m)));
    // Tabs: Full list, then one tab per term with the members who took part that term (교수 2026-11-02).
    // #dept=산경 (Home department map, table) or #entry=2020 (table) narrows Full list, with a way back (교수 2026-11-02, 11-03).
    const match = /^#(dept|entry)=(.+)$/.exec(location.hash);
    const filter = match && FILTERS[match[1]], want = match && filter.value(decodeURIComponent(match[2]));
    const dept = match ? filter.label(want) : null;
    const shown = match ? people.filter(p => filter.of(p) === want) : people;
    // Every list opens with the same line, `<group> · N members  Show everyone`: a filter, a term tab, or everyone (교수 2026-11-03).
    // Full list keeps the line too (no link) so the table starts at the same height in every tab.
    const summary = (label, count, reset) => {
      const note = element('p', undefined, 'study-member-filter');
      note.append(element('span', label + ' · ' + count + (count === 1 ? ' member' : ' members')));
      if (reset) {
        const all = element('a', 'Show everyone'); all.href = location.pathname;
        all.addEventListener('click', e => { e.preventDefault(); history.replaceState(null, '', location.pathname); render(cohorts); });
        note.append(all);
      }
      return note;
    };
    const fullPanel = element('div');
    fullPanel.append(summary(dept || 'Everyone', shown.length, !!dept));
    fullPanel.append(table(shown, dept ? dept + ' members' : 'All study members', false));
    const tabs = [{ id: 'members-all', title: 'Full list', panel: fullPanel }];
    for (const c of ordered) {
      const term = people.filter(p => p.participation.includes(c.number));
      const rep = representatives[c.term];
      term.sort((a, b) => (b.email.split('@')[0] === rep) - (a.email.split('@')[0] === rep));  // representative first, the rest keep the sheet order
      // One-line tab labels: 1기 large, (Fall 2025) small and light, no member counts (교수 2026-11-02).
      const panel = element('div');
      panel.append(summary(c.number + '기' + (c.term ? ' (' + c.term + ')' : ''), term.length, true),
        table(term, c.number + '기 members' + (c.term ? ', ' + c.term : ''), true, rep));
      tabs.push({ id: 'members-' + c.number, title: c.number + '기', note: c.term ? '(' + c.term + ')' : '', panel });
    }
    const box = element('section', undefined, 'study-member-tabs');
    const tablist = element('div', undefined, 'study-tablist study-member-tablist'); tablist.setAttribute('role', 'tablist'); tablist.setAttribute('aria-label', 'Member lists');
    const buttons = tabs.map(tab => {
      const button = element('button'); button.type = 'button'; button.id = 'tab-' + tab.id; button.setAttribute('role', 'tab'); button.setAttribute('aria-controls', tab.id);
      button.append(element('strong', tab.title));
      if (tab.note) button.append(element('span', tab.note));  // smaller and lighter on the same line
      tablist.append(button);
      return button;
    });
    const panels = tabs.map(tab => {
      const panel = element('div', undefined, 'study-panel'); panel.id = tab.id; panel.setAttribute('role', 'tabpanel'); panel.setAttribute('aria-labelledby', 'tab-' + tab.id);
      panel.append(tab.panel); return panel;
    });
    const show = (i, push) => {
      buttons.forEach((b, j) => { b.setAttribute('aria-selected', String(i === j)); b.tabIndex = i === j ? 0 : -1; panels[j].hidden = i !== j; });
      if (push) history.replaceState(null, '', location.pathname + '#' + tabs[i].id);  // <base href="/"> would send a bare #hash to the site root
    };
    buttons.forEach((b, i) => {
      b.addEventListener('click', () => show(i, true));
      b.addEventListener('keydown', e => {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        const n = e.key === 'Home' ? 0 : e.key === 'End' ? buttons.length - 1 : d ? (i + d + buttons.length) % buttons.length : -1;
        if (n >= 0) { e.preventDefault(); show(n, true); buttons[n].focus(); }
      });
    });
    const fromHash = () => { const want = tabs.findIndex(tab => tab.id === location.hash.slice(1)); show(want < 0 ? 0 : want, false); };
    fromHash();
    window.onhashchange = () => (/^#(dept|entry)=/.test(location.hash) || dept ? render(cohorts) : fromHash());  // #members-4 switches the tab; #dept= and #entry= re-filter
    box.append(tablist, ...panels);
    // One line above the tabs says where the photos come from and how to change one (교수 2026-11-03).
    const note = element('p', 'Photos come from POVIS and LinkedIn to help everyone put names to faces. If you\u2019d like a different photo, just let ', 'study-member-photo-note');
    const prof = element('a', 'Prof. Sangwoo Mo'); prof.href = 'faculty.html';
    note.append(prof, ' know.');
    list.replaceChildren(note, box);
  }
  async function unlock(key, focus) {
    const plaintext = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: decode(data.iv) }, key, decode(data.ciphertext));
    render(JSON.parse(new TextDecoder().decode(plaintext)));
    input.value = ''; form.hidden = true; list.hidden = false;
    submit.setAttribute('aria-expanded', 'true'); message.textContent = '';
    if (focus) list.querySelector('[role="tab"][aria-selected="true"]').focus();
  }
  submit.disabled = true;
  (async () => {
    try {
      const remembered = await savedAccess('readonly');
      if (remembered) {
        if (remembered.salt !== data.salt || remembered.iterations !== data.iterations) throw new Error('Access changed');
        await unlock(remembered.key, false);
        list.dataset.access = 'remembered';
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
      // No Lock button: access stays until the visitor clears browser data (2026-11-02).
      try {
        await savedAccess('readwrite', { key, salt: data.salt, iterations: data.iterations });
        list.dataset.access = 'remembered';
      } catch (_) {
        message.textContent = 'Unlocked for this visit. Your browser could not remember access.';
        list.dataset.access = 'session';
      }
    } catch (error) {
      message.textContent = error.message === 'unavailable' ? 'Use a browser with HTTPS support to unlock the list.' : 'Incorrect password. Please try again.';
      input.value = ''; input.focus();
    } finally { submit.disabled = false; }
  });
})();

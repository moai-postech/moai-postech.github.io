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
  // #term=2.5 lists everyone who took part in that term (Home cohort bars, Participation markers). Old #members-2-5 tab links open the same list.
  const termHash = n => '#term=' + n;
  const entryYear = member => /^\d{2}$/.test(member.entry_year) ? '20' + member.entry_year : String(member.entry_year);
  // Cohort, entry year, department and participation open the matching list, by the same #hash links as the Home department map (교수 2026-11-03).
  const listLink = (text, hash, className) => {
    const a = element('a', text, className); a.href = location.pathname + location.search + hash;  // <base href="/"> would send a bare #hash to the site root; keeping ?query keeps the click on this page, so an unlocked list stays unlocked
    return a;
  };
  const FILTERS = {
    dept: { label: v => v, of: p => departmentLabel(p.department), value: v => departmentLabel(v) },
    entry: { label: v => v + ' entry', of: entryYear, value: v => v },
    term: { label: v => v + '기', of: p => p.participation, value: v => Number(v) },
  };
  // Each term's student representative, by POSTECH ID (public on the Schedule page).
  const representatives = JSON.parse(document.getElementById('member-representatives').textContent || '{}');
  // '#' numbers the rows so each table shows how many people it lists (교수 2026-11-02).
  // The column holds the POSTECH ID only, so it is named that way; LinkedIn links sit right of it (교수 2026-11-03).
  // No Cohort column: the group heading above each table names the cohort (교수 2026-11-18).
  const LABELS = ['#', 'Entry', 'Department', 'Name', 'POSTECH ID', 'LinkedIn', 'Participation'];
  const NAME = 3, LINKEDIN = 5, PARTICIPATION = 6;
  function table(people, caption, start, rep) {
    const t = element('table', undefined, 'study-members-table');
    t.append(element('caption', caption, 'visually-hidden'));
    // Every group's table has the same columns and widths, so the columns line up down the page.
    const cols = element('colgroup');
    for (const name of ['n', 'year', 'department', 'name', 'email', 'linkedin', 'participation']) cols.append(element('col', undefined, 'sm-' + name));
    const head = element('thead'), header = element('tr');
    LABELS.forEach(label => { const th = element('th', label); th.scope = 'col'; header.append(th); });
    head.append(header); t.append(cols, head);
    const body = element('tbody');
    people.forEach((member, n) => {
      const id = member.email.split('@')[0];
      const row = element('tr', undefined, rep && id === rep ? 'is-representative' : undefined);
      const year = entryYear(member);
      const dept = departmentLabel(member.department);
      const values = [String(start + n + 1), year, dept, member.name, id];
      const links = { 1: '#entry=' + year, 2: '#dept=' + encodeURIComponent(dept) };
      values.forEach((value, index) => {
        const cell = element(index === NAME ? 'th' : 'td', links[index] || index === NAME ? undefined : value, index === 4 ? 'study-member-email' : index === 0 ? 'study-member-n' : undefined);
        if (links[index]) cell.append(listLink(value, links[index], 'study-member-link'));
        // The term's representative shows a small 대표 chip in the # column, so the Name column only needs to fit names (교수 2026-11-04: Name and POSTECH ID were too far apart).
        if (index === 0 && row.className) { cell.textContent = ''; cell.append(element('span', '대표', 'study-member-role')); }
        if (index === NAME) {
          cell.scope = 'row';
          // The POVIS photo travels inside the same ciphertext, so it shows on hover or focus once the list is open (교수 2026-11-03).
          // Without a photo anywhere, the card shows the same default profile figure so every name behaves alike (교수 2026-11-03).
          const name = element('span', value, 'study-member-name has-photo'); name.tabIndex = 0;
          if (member.photo) {
            const img = element('img', undefined, 'study-member-photo'); img.src = member.photo; img.alt = ''; img.loading = 'lazy';
            name.append(img);
          } else {
            const card = element('span', undefined, 'study-member-photo is-default');  // drawn by CSS so the name text stays clean
            name.append(card);
          }
          cell.append(name);
        }
        cell.dataset.label = LABELS[index]; row.append(cell);
      });
      const linkedin = element('td', undefined, 'study-member-linkedin'); linkedin.dataset.label = LABELS[LINKEDIN];
      if (member.linkedin) {
        const a = element('a', 'in', 'study-member-in'); a.href = 'https://www.linkedin.com/in/' + member.linkedin + '/';
        a.target = '_blank'; a.rel = 'noopener'; a.setAttribute('aria-label', member.name + ' on LinkedIn');
        linkedin.append(a);
      }
      row.append(linkedin);
      const cell = element('td'); cell.dataset.label = LABELS[PARTICIPATION];
      const markers = element('span', undefined, 'study-member-markers');
      for (const n of member.participation) markers.append(listLink(n + '기', termHash(n), 'study-member-marker'));
      cell.append(markers);
      row.append(cell); body.append(row);
    });
    t.append(body);
    return t;
  }
  function render(cohorts) {
    // The roster arrives in the sheet's row order (cohort, entry year, department, name).
    const ordered = [...cohorts].sort((a, b) => a.number - b.number);
    const people = ordered.flatMap(c => c.members.map(m => Object.assign({ cohort: c.number }, m)));
    // One list, no tabs: everyone grouped by the cohort they joined, cohort first and the term small beside it (교수 2026-11-18;
    // term tabs before repeated returning members in several tabs). #dept=산경, #entry=2020 and #term=3 narrow the same list, with a way back.
    const legacy = /^#members-(\d+(?:-\d+)?)$/.exec(location.hash);  // old term-tab links
    const match = legacy ? ['', 'term', legacy[1].replace('-', '.')] : /^#(dept|entry|term)=(.+)$/.exec(location.hash);
    const filter = match && FILTERS[match[1]], want = match && filter.value(decodeURIComponent(match[2]));
    const keep = p => { const v = filter.of(p); return Array.isArray(v) ? v.includes(want) : v === want; };
    const shown = match ? people.filter(keep) : people;
    const termOf = match && match[1] === 'term' ? ordered.find(c => c.number === want) : null;
    const rep = termOf && representatives[termOf.term];
    const sheet = list.closest('[data-members-sheet]');
    // The line above the groups: `Everyone · 39 members`, or the filter with Show everyone, then Members sheet (교수 2026-11-17, like Schedule's Sessions line).
    const note = element('p', undefined, 'study-member-filter');
    const head = element('span', match ? filter.label(want) : 'Everyone', 'group-heading');
    if (termOf && termOf.term) head.append(element('span', ' ' + termOf.term, 'study-member-count'));
    const noun = termOf ? ' participant' : ' member';  // a term list counts who took part that term, returning members included
    head.append(element('span', ' · ' + shown.length + noun + (shown.length === 1 ? '' : 's'), 'study-member-count'));
    note.append(head);
    if (match) {
      const all = element('a', 'Show everyone'); all.href = location.pathname;
      all.addEventListener('click', e => { e.preventDefault(); history.replaceState(null, '', location.pathname); render(cohorts); });
      note.append(all);
    }
    if (sheet) {
      const link = element('a', 'Members sheet ', 'course-sheet'); link.href = sheet.getAttribute('data-members-sheet');
      const arrow = element('span', '↗'); arrow.setAttribute('aria-hidden', 'true'); link.append(arrow);
      note.append(link);
    }
    const box = element('section', undefined, 'study-member-groups'); box.id = 'members-all';
    box.append(note);
    let count = 0;
    for (const c of ordered) {
      const group = shown.filter(p => p.cohort === c.number);
      if (!group.length) continue;
      if (rep) group.sort((a, b) => (b.email.split('@')[0] === rep) - (a.email.split('@')[0] === rep));  // a term list puts its representative first
      const section = element('div', undefined, 'study-member-group'); section.id = 'cohort-' + String(c.number).replace('.', '-');
      const h = element('h3', c.number + '기', 'group-heading');
      if (c.term) h.append(element('span', c.term));
      section.append(h, table(group, c.number + '기 members' + (c.term ? ', ' + c.term : ''), count, rep));
      count += group.length;
      box.append(section);
    }
    window.onhashchange = () => render(cohorts);
    // One line under the lists says where the photos come from and how to change one (교수 2026-11-03), so the list starts right under the title (교수 2026-11-18).
    const photoNote = element('p', 'Photos come from POVIS and LinkedIn to help everyone put names to faces. If you\u2019d like a different photo, just let ', 'study-member-photo-note');
    const prof = element('a', 'Prof. Sangwoo Mo'); prof.href = 'faculty.html';
    photoNote.append(prof, ' know.');
    list.replaceChildren(box, photoNote);
  }
  async function unlock(key, focus) {
    const plaintext = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: decode(data.iv) }, key, decode(data.ciphertext));
    render(JSON.parse(new TextDecoder().decode(plaintext)));
    input.value = ''; form.hidden = true; list.hidden = false;
    submit.setAttribute('aria-expanded', 'true'); message.textContent = '';
    if (focus) { const top = list.querySelector('.study-member-filter .group-heading'); top.tabIndex = -1; top.focus(); }
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

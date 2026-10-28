// Only aggregate statistics and encrypted data are public before unlocking.
(function () {
  'use strict';
  const form = document.getElementById('member-unlock-form');
  const input = document.getElementById('member-password');
  const list = document.getElementById('member-full-list');
  const lock = document.getElementById('lock-member-list');
  const message = document.getElementById('member-unlock-message');
  const submit = form.querySelector('button');
  const decode = value => Uint8Array.from(atob(value), c => c.charCodeAt(0));
  const element = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  function render(cohorts) {
    const fragment = document.createDocumentFragment();
    for (const cohort of cohorts) {
      const section = element('section', undefined, 'study-member-group');
      const heading = element('h3', cohort.number + '기 ');
      heading.append(element('span', cohort.term));
      section.append(heading);
      const table = element('table', undefined, 'study-members-table');
      const caption = element('caption', cohort.number + '기 members', 'visually-hidden');
      table.append(caption);
      const cols = element('colgroup');
      for (const name of ['name', 'department', 'year', 'email', 'participation']) cols.append(element('col', undefined, 'sm-' + name));
      table.append(cols);
      const head = element('thead'), header = element('tr');
      const labels = ['Name', 'Department', 'Entry year', 'POSTECH email', 'Participation'];
      for (const label of labels) { const th = element('th', label); th.scope = 'col'; header.append(th); }
      head.append(header); table.append(head);
      const body = element('tbody');
      for (const member of cohort.members) {
        const row = element('tr');
        const values = [member.name, member.department, member.entry_year, member.email.replace('@', ' [at] ')];
        values.forEach((value, index) => {
          const cell = element(index === 0 ? 'th' : 'td', value, index === 3 ? 'study-member-email' : undefined);
          if (index === 0) cell.scope = 'row';
          cell.dataset.label = labels[index]; row.append(cell);
        });
        const cell = element('td'); cell.dataset.label = labels[4];
        const markers = element('span', undefined, 'study-member-markers');
        for (const n of member.participation) markers.append(element('span', n + '기', 'study-member-marker'));
        cell.append(markers); row.append(cell); body.append(row);
      }
      table.append(body); section.append(table); fragment.append(section);
    }
    list.replaceChildren(fragment);
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    submit.disabled = true; message.textContent = '';
    try {
      if (!window.crypto || !window.crypto.subtle) throw new Error('unavailable');
      const data = JSON.parse(document.getElementById('member-encrypted-data').textContent);
      const keyMaterial = await crypto.subtle.importKey('raw', new TextEncoder().encode(input.value), 'PBKDF2', false, ['deriveKey']);
      const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt: decode(data.salt), iterations: data.iterations, hash: 'SHA-256' }, keyMaterial, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
      const plaintext = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: decode(data.iv) }, key, decode(data.ciphertext));
      render(JSON.parse(new TextDecoder().decode(plaintext)));
      input.value = ''; form.hidden = true; list.hidden = false; lock.hidden = false;
      submit.setAttribute('aria-expanded', 'true');
      message.textContent = 'Member list unlocked.';
      lock.focus();
    } catch (error) {
      message.textContent = error.message === 'unavailable' ? 'Use a browser with HTTPS support to unlock the list.' : 'Incorrect password. Please try again.';
      input.value = ''; input.focus();
    } finally { submit.disabled = false; }
  });
  lock.addEventListener('click', () => {
    list.hidden = true; list.replaceChildren(); lock.hidden = true; form.hidden = false;
    submit.setAttribute('aria-expanded', 'false'); message.textContent = ''; input.focus();
  });
})();

// POSTECH 필수 요소 검사: 빌드한 _site 의 모든 페이지에 정보기술팀 요구사항(POSTECH.md 의 P1~P8)이 그대로 있는지 본다.
// 요구사항과 검토 절차는 POSTECH.md. 디자인을 어떻게 바꾸든 이 검사가 통과해야 한다.
//
//   bundle exec jekyll build
//   node tools/check_postech.js           # 1280px 와 390px 에서 검사
//
// GitHub Actions 의 format 워크플로가 push 마다 돌린다.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { ROOT, SITE, serve, configBlock } = require('./lib/site');

const POSTECH = configBlock('postech');
const FOOTER = configBlock('footer');
const LAB = ['index', 'research', 'seminar', 'funding', 'publications', 'landscape',
  'faculty', 'students', 'mentees', 'teaching', 'talks', 'contact', 'news', '404'].map(n => n + '.html');
// 강의 사이트와 스터디 페이지(layouts/course.html): teaching/<id>/index.html 과 그 아래 페이지
const COURSE = [];
(function walk(dir) {
  for (const e of fs.readdirSync(path.join(SITE, dir), { withFileTypes: true })) {
    const rel = path.join(dir, e.name);
    if (e.isDirectory() && e.name !== 'slides') walk(rel);
    else if (e.name === 'index.html') COURSE.push(rel);
  }
})('teaching');

// 브라우저 안에서 도는 측정. 요소가 있고, 보이고, 링크가 맞고, 로고 비율이 원본과 같은지 본다.
function inspect({ kind, P, F }) {
  const out = [];
  const visible = e => e && e.getClientRects().length && getComputedStyle(e).visibility !== 'hidden';
  const sameUrl = (a, url) => a && a.href.replace(/\/$/, '') === new URL(url, location.href).href.replace(/\/$/, '');
  const home = new URL('/', location.href).href;
  const isHome = a => a && (a.href === home || a.href === home + 'index.html');
  const ratioOk = img => img && img.naturalWidth && Math.abs(img.getBoundingClientRect().width / img.getBoundingClientRect().height - img.naturalWidth / img.naturalHeight) / (img.naturalWidth / img.naturalHeight) < 0.03;
  const bold = e => e && parseInt(getComputedStyle(e).fontWeight, 10) >= 700;
  const need = (ok, id, msg) => { if (!ok) out.push(`${id} ${msg}`); };
  const links = sel => [...document.querySelectorAll(sel)];
  if (kind === 'lab') {
    const head = document.querySelector('header');
    const hp = head && [...head.querySelectorAll('a')].find(a => sameUrl(a, P.url) && a.querySelector('img'));
    const hpImg = hp && hp.querySelector('img');
    need(hp && visible(hpImg), 'P1', '머리글 좌상단에 POSTECH 워드마크(대표홈 링크)가 없다');
    need(!hpImg || hpImg.alt.trim(), 'P1', '머리글 POSTECH 워드마크에 alt 가 없다');
    need(!hpImg || ratioOk(hpImg), 'P8', '머리글 POSTECH 워드마크 비율이 원본과 다르다');
    const headLinks = head ? [...head.querySelectorAll('a')] : [];
    need(hp && headLinks.indexOf(hp) === 0, 'P1', 'POSTECH 워드마크가 머리글의 첫 요소(좌상단)가 아니다');
    need(headLinks.some(a => isHome(a) && a.textContent.includes('MOAI')), 'P2', '머리글에 연구실 이름(홈 링크)이 없다');
    const foot = document.querySelector('footer');
    const fl = foot ? [...foot.querySelectorAll('a')] : [];
    const fp = fl.find(a => sameUrl(a, P.url) && a.querySelector('img'));
    need(fp && visible(fp.querySelector('img')), 'P3', '꼬리말에 POSTECH 로고(대표홈 링크)가 없다');
    need(!fp || ratioOk(fp.querySelector('img')), 'P8', '꼬리말 POSTECH 로고 비율이 원본과 다르다');
    const priv = fl.find(a => sameUrl(a, P.privacy_url));
    need(priv && visible(priv), 'P4', '꼬리말에 개인정보 링크가 없다');
    need(!priv || priv.textContent.trim() === P.privacy_label, 'P4', `개인정보 링크 이름이 "${P.privacy_label}" 가 아니다`);
    need(!priv || bold(priv), 'P4', '개인정보 링크가 굵지 않다');
    need(fl.some(a => isHome(a) && a.textContent.includes('MOAI') && a.querySelector('img')), 'P5', '꼬리말에 연구실 로고·이름(홈 링크)이 없다');
    need(fl.some(a => sameUrl(a, F.department_url)), 'P5', '꼬리말에 학과 링크가 없다');
    const text = foot ? foot.textContent.replace(/\s+/g, ' ') : '';
    need(text.includes(F.address), 'P6', '꼬리말에 주소가 없다');
    need(text.includes(F.phone), 'P6', '꼬리말에 전화가 없다');
    need(text.includes('©'), 'P6', '꼬리말에 저작권 줄이 없다');
  } else {
    const foot = document.querySelector('footer');
    const fl = foot ? [...foot.querySelectorAll('a')] : [];
    need(fl.some(a => isHome(a)), 'P7', '강의 바닥 줄에 연구실 홈 링크가 없다');
    need(fl.some(a => sameUrl(a, P.url) && visible(a)), 'P7', '강의 바닥 줄에 POSTECH 대표홈 링크가 없다');
    const priv = fl.find(a => sameUrl(a, P.privacy_url));
    need(priv && visible(priv) && priv.textContent.trim() === P.privacy_label && bold(priv), 'P7', '강의 바닥 줄의 개인정보 링크(이름·굵게)가 맞지 않다');
  }
  return out;
}

(async () => {
  if (!fs.existsSync(SITE)) { console.error('_site 가 없다. 먼저 bundle exec jekyll build'); process.exit(2); }
  const problems = [];
  const cname = fs.existsSync(path.join(ROOT, 'CNAME')) ? fs.readFileSync(path.join(ROOT, 'CNAME'), 'utf8').trim() : '';
  if (cname !== 'moai.postech.ac.kr') problems.push(`P9 CNAME 이 moai.postech.ac.kr 가 아니다("${cname}")`);
  if (!/\/eng\//.test(POSTECH.url || '') || !/\/eng\//.test(POSTECH.privacy_url || '')) problems.push('P1·P4 _config.yml 의 POSTECH 링크가 영어판(/eng/)이 아니다');
  const srv = await serve(); const port = srv.address().port;
  const browser = await chromium.launch();
  for (const w of [1280, 390]) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    for (const [kind, list] of [['lab', LAB], ['course', COURSE]]) {
      for (const n of list) {
        await page.goto(`http://localhost:${port}/${n}`, { waitUntil: 'load' });
        for (const p of await page.evaluate(inspect, { kind, P: POSTECH, F: FOOTER })) problems.push(`${w}px ${n}: ${p}`);
      }
    }
    await page.close();
  }
  await browser.close(); srv.close();
  if (problems.length) {
    for (const p of problems) console.log('✗ ' + p);
    console.log(`POSTECH 필수 요소 검사 실패: ${problems.length}건. POSTECH.md 를 보고 고친다.`);
    process.exit(1);
  }
  console.log(`POSTECH 필수 요소 검사 통과: 연구실 ${LAB.length}개 · 강의 ${COURSE.length}개 페이지 × 1280·390px`);
})();

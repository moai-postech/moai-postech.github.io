// Prove that the contract catches the reported regressions, rather than merely matching current CSS.
const assert = require('assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { chromium } = require('playwright');
const { serve, templatePages } = require('./lib/site');
const { inspect, checkSources } = require('./check_design');
const { contract } = require('./lib/design-spec');
const { loadSyntheticDirectory } = require('./lib/design-fixture');

(async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'moai-discovery-'));
  try {
    const themed = '<link rel="stylesheet" href="assets/style.css?v=1">';
    fs.mkdirSync(path.join(tmp,'new-page'));
    fs.writeFileSync(path.join(tmp,'index.html'),themed);
    fs.writeFileSync(path.join(tmp,'new-page/index.html'),themed);
    fs.writeFileSync(path.join(tmp,'redirect.html'),'<meta http-equiv="refresh" content="0;url=/">');
    assert.deepEqual(templatePages(tmp),['index.html','new-page/index.html']);
  } finally { fs.rmSync(tmp,{recursive:true}); }
  assert.deepEqual(checkSources(),[]);
  const srv = await serve(); let browser;
  try {
    browser = await chromium.launch();
    const page = await browser.newPage({viewport:{width:1440,height:1000}});
    const base = `http://localhost:${srv.address().port}/`;
    async function load(file) { await page.goto(base+file); await page.evaluate(()=>document.fonts.ready); await page.mouse.move(0,0); }
    async function failures() { return (await page.evaluate(inspect,contract)).failures; }
    await load('index.html');
    await page.locator('.nav-group').first().hover();
    assert.deepEqual(await failures(),[], '드롭다운은 400 굵기로 통과해야 한다');
    await page.addStyleTag({content:'.site-nav .nav-menu a {font-weight:600 !important}'});
    assert((await failures()).some(f=>f.startsWith('dropdown-navigation: fontWeight')), '드롭다운이 상단 메뉴의 600을 상속하면 실패해야 한다');
    await load('students.html');
    assert.deepEqual(await failures(),[], '근거를 기록한 멤버 카드 조정은 기본 metadata 크기와 달라도 통과해야 한다');
    await page.addStyleTag({content:'.page-students .person-degree {font-size:14px !important}'});
    assert((await failures()).some(f=>f.includes('student-card-reading') && f.includes('fontSize')), '조정한 학력 글자를 다시 작게 만들면 실패해야 한다');
    await load('seminar.html');
    assert.deepEqual(await failures(),[], '세미나 정상 템플릿이 통과해야 한다');
    await page.addStyleTag({content:'.filter-link {font-weight:400 !important}'});
    assert((await failures()).some(f=>f.startsWith('toolbar-action: fontWeight')), 'Full schedule의 400 회귀를 검출해야 한다');
    await load('teaching/26f-data-engineering/index.html');
    assert.deepEqual(await failures(),[], '강의 정상 템플릿이 통과해야 한다');
    await page.addStyleTag({content:'.course-nav a[aria-current] {font-weight:400 !important}'});
    assert((await failures()).some(f=>f.startsWith('current-navigation: fontWeight')), '현재 메뉴의 굵기 회귀를 검출해야 한다');
    await load('teaching/ai-study/schedule/index.html');
    await page.addStyleTag({content:'.study-term-heading > a {font-weight:400 !important}'});
    assert((await failures()).some(f=>f.startsWith('toolbar-action: fontWeight')), '클래스명이 달라도 헤더의 동작 링크 회귀를 검출해야 한다');
    await load('publications.html');
    await page.addStyleTag({content:'.group-heading {line-height:1.2 !important}'});
    assert((await failures()).some(f=>f.startsWith('group-heading: lineHeight')), '같은 제목 역할의 행간 차이를 검출해야 한다');
    await load('index.html');
    await page.evaluate(()=>{const h=document.createElement('h5');h.textContent='Unassigned heading';document.querySelector('main').append(h);});
    assert((await failures()).some(f=>f.includes('제목 역할 0개')), '새로운 미지정 제목을 검출해야 한다');
    await load('index.html');
    await page.evaluate(()=>{const d=document.createElement('details');d.className='more-news';d.innerHTML='<summary>Earlier items</summary><p>Earlier content</p>';document.querySelector('main').append(d);});
    const fixture = await page.evaluate(inspect,contract);
    assert(fixture.counts.disclosure===1 && !fixture.failures.some(f=>f.startsWith('disclosure:')), '선택적 disclosure 템플릿도 검증해야 한다');
    await loadSyntheticDirectory(page,base);
    assert.deepEqual(await failures(),[], '가상 데이터로 실제 명단 UI를 잠금 해제한 상태도 계약을 따라야 한다');
    assert.equal(await page.locator('tbody tr').count(),1);
    await page.getByRole('button',{name:'Lock',exact:true}).click();
    await page.waitForFunction(() => document.querySelectorAll('tbody tr').length === 0);
    assert.equal(await page.locator('tbody tr').count(),0);
    await page.close();
  } finally { if(browser) await browser.close(); await new Promise(resolve=>srv.close(resolve)); }
  console.log('디자인 검사 회귀검증 통과: 새 페이지 자동 발견, Full schedule, 현재 메뉴, 묶음 행간, 미지정 제목, disclosure, 명단 잠금 해제·재잠금');
})().catch(e=>{console.error(e);process.exitCode=1;});

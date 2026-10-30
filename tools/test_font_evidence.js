// Regression: page-response bodies may disappear when navigating or closing a context.
const assert=require('assert/strict');
const {chromium}=require('playwright');
const {SITE}=require('./lib/site');
const {serveDirectory,installFontEvidence}=require('./visual_review');
(async()=>{
  const server=await serveDirectory(SITE),browser=await chromium.launch();
  const cache=new Map(),manifest={captureErrors:[]};
  try {
    for(let i=0;i<2;i++) {
      const context=await browser.newContext();await installFontEvidence(context,manifest,cache);
      const page=await context.newPage();
      for(const file of ['faculty.html','students.html','teaching/ai-study/index.html']) {
        await page.goto(`http://127.0.0.1:${server.address().port}/${file}`);
        assert(await page.evaluate(async()=>{await document.fonts.ready;return [...document.fonts].some(f=>/Pretendard/.test(f.family)&&f.status==='loaded')}));
      }
      await context.close();
    }
    assert.deepEqual(manifest.captureErrors,[]);assert(cache.size>0);
    for(const pending of cache.values())assert.match((await pending).sha256,/^[a-f0-9]{64}$/);
    console.log(`폰트 바이트 고정 검증 통과: 2개 context·6회 페이지 이동·${cache.size}개 실제 폰트`);
  } finally {await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});

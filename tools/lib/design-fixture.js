// Exercise the real protected-directory UI using invented data, without reading any private password.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { SITE } = require('./site');
const PASSWORD = 'design-fixture-only';
async function loadSyntheticDirectory(page, base) {
  const salt=Buffer.alloc(16,2), iv=Buffer.alloc(12,1), iterations=1000;
  const key=crypto.pbkdf2Sync(PASSWORD,salt,iterations,32,'sha256');
  const cipher=crypto.createCipheriv('aes-256-gcm',key,iv);
  const data=[{number:4,members:[{name:'Example Student',department:'Example department',entry_year:'2026',email:'example@postech.ac.kr',participation:[3,4]}]}];
  const ciphertext=Buffer.concat([cipher.update(JSON.stringify(data),'utf8'),cipher.final(),cipher.getAuthTag()]);
  const payload={salt:salt.toString('base64'),iv:iv.toString('base64'),iterations,ciphertext:ciphertext.toString('base64')};
  const routeUrl='**/teaching/ai-study/members/index.html?design-fixture=1';
  const html=fs.readFileSync(path.join(SITE,'teaching/ai-study/members/index.html'),'utf8')
    .replace(/(<script\b[^>]*id="member-encrypted-data"[^>]*>)[\s\S]*?(<\/script>)/,(_,a,b)=>a+JSON.stringify(payload)+b);
  await page.route(routeUrl,route=>route.fulfill({status:200,contentType:'text/html',body:html}));
  try {
    await page.goto(base+'teaching/ai-study/members/index.html?design-fixture=1');
    await page.evaluate(()=>document.fonts.ready);
    await page.locator('#member-password').fill(PASSWORD);
    await page.getByRole('button',{name:'Unlock',exact:true}).click();
    await page.locator('#member-full-list table').waitFor();
    await page.mouse.move(0,0);
  } finally { await page.unroute(routeUrl); }
}
module.exports={loadSyntheticDirectory};

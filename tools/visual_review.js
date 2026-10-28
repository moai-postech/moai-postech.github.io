#!/usr/bin/env node
const fs=require('fs'),path=require('path'),os=require('os');
const {spawnSync}=require('child_process');
const {ROOT,SITE,templatePages}=require('./lib/site');
const vr=require('./lib/visual-review');
const args=process.argv.slice(2),command=args.shift();
function arg(name,fallback) {const i=args.indexOf(name);return i<0?fallback:args[i+1];}
function write(file,value) {fs.writeFileSync(file,typeof value==='string'||Buffer.isBuffer(value)?value:JSON.stringify(value,null,2)+'\n');}
function safeRun(bin,argv,log) {
  const result=spawnSync(bin,argv,{cwd:ROOT,encoding:'utf8',maxBuffer:20e6});
  fs.writeFileSync(log,(result.stdout||'')+(result.stderr||'')+(result.error?.message||''));
  return result.status===null?1:result.status;
}
function copySite(dest) {
  const pages=templatePages();
  if(!pages.length)throw Error('공통 템플릿 페이지가 없다. 빌드를 확인한다.');
  const files=[];
  function copy(rel) {const to=path.join(dest,rel);fs.mkdirSync(path.dirname(to),{recursive:true});fs.copyFileSync(path.join(SITE,rel),to);files.push(rel);}
  for(const file of pages)copy(file);
  function assets(dir) {for(const e of fs.readdirSync(path.join(SITE,dir),{withFileTypes:true})){const rel=path.join(dir,e.name);if(e.isDirectory()){if(e.name!=='slides')assets(rel);}else if(/\.(css|js|svg|png|jpe?g|webp|gif|woff2?)$/.test(e.name))copy(rel);}}
  assets('');
  return [...new Set(files)].sort();
}
async function serveDirectory(dir) {
  return new Promise(resolve=>{const s=require('http').createServer((req,res)=>{try{let rel=decodeURIComponent(req.url.split('?')[0]).replace(/^\//,'');if(!rel||rel.endsWith('/'))rel+='index.html';const file=vr.relativeFile(dir,rel);if(!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);return res.end();}const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2'};res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});fs.createReadStream(file).pipe(res);}catch{res.writeHead(400);res.end();}}).listen(0,'127.0.0.1',()=>resolve(s));});
}
async function installFontEvidence(context, manifest, cache) {
  // Intercept font bytes before rendering. Page-response bodies can disappear on navigation.
  await context.route(/\.(woff2?|ttf|otf)(\?|$)/,async route=>{
    const url=route.request().url();
    try {
      if(!cache.has(url))cache.set(url,(async()=>{
        const response=await route.fetch({timeout:45000});
        if(!response.ok())throw Error(`HTTP ${response.status()}`);
        const body=await response.body(),headers={...response.headers()};
        for(const name of ['content-encoding','content-length','transfer-encoding'])delete headers[name];
        return {body,headers,sha256:vr.hash(body)};
      })());
      const font=await cache.get(url);
      await route.fulfill({status:200,headers:font.headers,body:font.body});
    } catch(e) {manifest.captureErrors.push(`폰트 바이트 고정 실패: ${url}: ${e.message}`);await route.abort().catch(()=>{});}
  });
}
async function capture(out,manifest) {
  const {chromium}=require('playwright');
  const server=await serveDirectory(path.join(out,'site'));
  // The synthetic directory helper reads the same freshly built HTML. No private password is used.
  const {loadSyntheticDirectory}=require('./lib/design-fixture');
  const base=`http://127.0.0.1:${server.address().port}/`;
  const browser=await chromium.launch();
  const fonts=new Map();
  const pageUnits=new Map(),stateUnits=new Map(),groups=new Map(vr.policy.comparisons.map(g=>[g.id,[]]));
  try {
    manifest.engine=browser.version();manifest.platform=process.platform;
    for(const width of vr.policy.widths) {
      const context=await browser.newContext({viewport:{width,height:vr.policy.height},deviceScaleFactor:1,reducedMotion:'reduce',locale:'en-US',timezoneId:'Asia/Seoul'});
      await context.addInitScript(({now})=>{const D=Date;window.Date=new Proxy(D,{construct:(t,a)=>Reflect.construct(t,a.length?a:[now]),apply:()=>new D(now).toString(),get:(t,k)=>k==='now'?()=>now:Reflect.get(t,k)});},{now:Date.parse(manifest.createdAt)});
      await installFontEvidence(context,manifest,fonts);
      const page=await context.newPage();
      for(const file of templatePages(path.join(out,'site'))) {
        await page.goto(base+file,{waitUntil:'domcontentloaded',timeout:45000});
        await page.evaluate(()=>document.fonts.ready);
        await page.mouse.move(0,0);
        const unknown=await page.locator('main button').evaluateAll(es=>es.filter(e=>!e.matches('.focus-tab,.filter-btn,.study-tablist button,.study-step[data-start],.study-unlock-fields button,.study-lock-button')).map(e=>e.outerHTML.slice(0,120)));
        const planned=await page.evaluate(({tallHeight})=>{
          const states=[{state:'default',full:true}];
          if(innerWidth>=768&&document.querySelector('.site-foot')&&document.documentElement.scrollHeight<=tallHeight)states.push({state:'tall-viewport',full:false});
          for(const selector of ['.focus-tab','.filter-btn','.study-tablist button']) [...document.querySelectorAll(selector)].forEach((e,i)=>{
            states.push({state:`${selector}:${i}`,full:selector==='.study-tablist button'});
            if(selector==='.study-tablist button'){const panel=document.getElementById(e.getAttribute('aria-controls'));[...panel.querySelectorAll('.study-step[data-start]')].forEach((_,j)=>states.push({state:`term:${i}:part:${j}`,full:false}));}
          });
          if(document.querySelector('details'))states.push({state:'details-open',full:true});
          if(innerWidth>680)[...document.querySelectorAll('.nav-group')].forEach((_,i)=>states.push({state:`dropdown:${i}`,full:false},{state:`dropdown-focus:${i}`,full:false}));
          for(const selector of ['.subnav a[aria-current]','.course-nav a[aria-current]','.filter-link','.course-sheet','.study-sheet','.section-next a','.study-unlock-fields input'])if([...document.querySelectorAll(selector)].some(e=>e.getClientRects().length))for(const action of ['hover','focus'])states.push({state:`${action}:${selector}`,full:false});
          if(document.querySelector('#member-unlock-form'))for(const state of ['password-error','synthetic-directory-unlocked','directory-relocked'])states.push({state,full:state==='synthetic-directory-unlocked'});
          return states;
        },{tallHeight:vr.policy.tallHeight});
        manifest.requiredCases.push(...planned.map(s=>({...s,id:vr.hash(`${file}|${width}|${s.state}`).slice(0,16),page:file,width})));
        if(unknown.length)manifest.captureErrors.push(`${file}: 캡처 상태를 정의하지 않은 버튼 ${unknown.join(';')}`);
        async function snap(state,full=false) {
          await page.evaluate(()=>document.fonts.ready);
          const id=vr.hash(`${file}|${width}|${state}`).slice(0,16);
          const entry={id,page:file,width,height:page.viewportSize().height,state,images:[],fontsLoaded:await page.evaluate(()=>[...document.fonts].some(f=>f.status==='loaded'&&/Pretendard/.test(f.family)))};
          async function image(kind,selector,options) {
            const imageId=id+'-'+vr.hash(kind+'|'+selector+'|'+(options?.tile??'')).slice(0,10),rel='images/'+imageId+'.png';
            await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
            await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].filter(e=>{const r=e.getBoundingClientRect();return r.bottom>0&&r.top<innerHeight&&r.right>0&&r.left<innerWidth;}).map(e=>e.decode().catch(()=>{})));});
            let buffer;
            if(selector)buffer=await page.locator(selector+':visible').first().screenshot({animations:'disabled',timeout:15000});
            else {const {tile,...shot}=options||{};buffer=await page.screenshot({animations:'disabled',...shot});}
            write(path.join(out,rel),buffer);
            entry.images.push({id:imageId,path:rel,kind,selector:selector||'',sha256:vr.hash(buffer),width:buffer.readUInt32BE(16),height:buffer.readUInt32BE(20)});
          }
          // Always keep an actual viewport. Scroll tiles overlap so sticky headers hide no text.
          await image('viewport','',{fullPage:false});
          for(const group of vr.policy.comparisons)for(const selector of group.selectors) {
            const target=page.locator(selector+':visible').first();
            if(await target.count()) {await image('component',selector);groups.get(group.id).push(id);}
          }
          if(full) {
            const dimensions=await page.evaluate(()=>({height:document.documentElement.scrollHeight,sticky:[...document.querySelectorAll('header')].filter(e=>getComputedStyle(e).position==='sticky').reduce((h,e)=>Math.max(h,e.getBoundingClientRect().height),0)}));
            const step=Math.max(200,vr.policy.height-dimensions.sticky-40);
            for(let y=0;y<dimensions.height;y+=step) {await page.evaluate(y=>scrollTo(0,y),y);await image('reading-tile','',{fullPage:false,tile:y});entry.images.at(-1).scrollY=await page.evaluate(()=>scrollY);if(y+vr.policy.height>=dimensions.height)break;}
          }
          manifest.cases.push(entry);
          const collection=state==='default'?pageUnits:stateUnits;
          if(!collection.has(file))collection.set(file,[]);collection.get(file).push(id);
          await page.evaluate(()=>scrollTo(0,0));await page.mouse.move(0,0);
        }
        await snap('default',true);
        if(planned.some(s=>s.state==='tall-viewport')){await page.setViewportSize({width,height:vr.policy.tallHeight});await snap('tall-viewport');await page.setViewportSize({width,height:vr.policy.height});}
        for(const selector of ['.focus-tab','.filter-btn','.study-tablist button']) {
          const controls=page.locator(selector);
          for(let i=0;i<await controls.count();i++) {
            await controls.nth(i).click();await page.mouse.move(0,0);await snap(`${selector}:${i}`,selector==='.study-tablist button');
            if(selector==='.study-tablist button') {const parts=page.locator('.study-panel:not([hidden]) .study-step[data-start]');for(let j=0;j<await parts.count();j++){await parts.nth(j).click();await page.mouse.move(0,0);await snap(`term:${i}:part:${j}`);}}
          }
        }
        if(await page.locator('details').count()){await page.locator('details').evaluateAll(es=>es.forEach(e=>e.open=true));await snap('details-open',true);}
        if(width>680) {const menus=page.locator('.nav-group');for(let i=0;i<await menus.count();i++){await page.evaluate(()=>scrollTo(0,0));await menus.nth(i).hover();await snap(`dropdown:${i}`);const trigger=menus.nth(i).locator(':scope > a');await trigger.focus();await snap(`dropdown-focus:${i}`);await trigger.evaluate(e=>e.blur());}}
        // Keyboard and hover states are photographed, not only measured for outline presence.
        for(const selector of ['.subnav a[aria-current]','.course-nav a[aria-current]','.filter-link','.course-sheet','.study-sheet','.section-next a','.study-unlock-fields input']) {
          const target=page.locator(selector+':visible').first();
          if(await target.count()) {await target.hover();await snap(`hover:${selector}`);await page.keyboard.press('Tab');await target.focus();await snap(`focus:${selector}`);await target.evaluate(e=>e.blur());}
        }
        if(file==='teaching/ai-study/members/index.html') {
          await page.locator('#member-password').fill('incorrect-visual-check');await page.getByRole('button',{name:'Unlock',exact:true}).click();await page.locator('#member-unlock-message').filter({hasText:'Incorrect password'}).waitFor();await snap('password-error');
          await loadSyntheticDirectory(page,base,path.join(out,'site'));await snap('synthetic-directory-unlocked',true);
          await page.getByRole('button',{name:'Lock',exact:true}).click();await snap('directory-relocked');
        }
        console.log(`캡처: ${width}px ${file}`);
      }
      await context.close();
    }

  } finally {await browser.close();await new Promise(resolve=>server.close(resolve));}
  manifest.fontResources=[];for(const [url,pending]of fonts){try{manifest.fontResources.push({url,sha256:(await pending).sha256});}catch{}}manifest.fontResources.sort((a,b)=>a.url.localeCompare(b.url));
  const uniqueImages=ids=>{const seen=new Set();return ids.filter(id=>{const im=manifest.cases.flatMap(c=>c.images).find(i=>i.id===id);if(!im||seen.has(im.sha256))return false;seen.add(im.sha256);return true;});};
  manifest.units=[...pageUnits].map(([file,ids])=>({id:'page:'+file,title:'페이지 '+file,caseIds:ids}));
  for(const [file,ids]of stateUnits)manifest.units.push({id:'states:'+file,title:'상태 '+file,caseIds:ids});
  for(const u of manifest.units)u.imageIds=uniqueImages(u.caseIds.flatMap(id=>manifest.cases.find(c=>c.id===id).images.map(i=>i.id)));
  for(const group of vr.policy.comparisons) {
    const ids=[...new Set(groups.get(group.id))];if(!ids.length)manifest.captureErrors.push('비교 묶음 누락: '+group.id);
    manifest.units.push({id:'comparison:'+group.id,title:group.title,caseIds:ids,imageIds:uniqueImages(ids.flatMap(id=>manifest.cases.find(c=>c.id===id).images.filter(i=>group.selectors.includes(i.selector)).map(i=>i.id)))});
  }
}
async function prepare() {
  const out=path.resolve(arg('--out',''));
  if(!arg('--out')||fs.existsSync(out))throw Error('--out에 새 폴더를 지정한다. 이전 검토 증거는 덮어쓰지 않는다.');
  const implementer=arg('--implementer');if(!implementer)throw Error('--implementer에 실제 구현자/에이전트 ID를 적는다.');
  if(out===ROOT||out.startsWith(SITE+path.sep)||out===SITE)throw Error('소스/빌드 폴더를 증거 폴더로 쓸 수 없음');
  fs.mkdirSync(path.join(out,'images'),{recursive:true});fs.mkdirSync(path.join(out,'logs'));
  const before=vr.sourceFingerprint(),manifest={schemaVersion:1,createdAt:new Date().toISOString(),implementer,commit:vr.git(['rev-parse','HEAD']),sourceFingerprint:before,sourceFiles:vr.inventory(),checks:[],requiredCases:[],cases:[],units:[],captureErrors:[],complete:false};
  write(path.join(out,'manifest.json'),manifest);
  const build=safeRun('bundle',['exec','jekyll','build'],path.join(out,'logs/build.log'));
  if(build!==0)throw Error('빌드 실패. '+path.join(out,'logs/build.log'));
  for(const name of vr.policy.requiredChecks) {const start=Date.now(),exitCode=safeRun(process.execPath,[`tools/${name}.js`,...(name==='check_design'?['--report',path.join(out,'logs/design-audit.json')]:[])],path.join(out,`logs/${name}.log`));manifest.checks.push({name,exitCode,durationMs:Date.now()-start});write(path.join(out,'manifest.json'),manifest);console.log(`${name}: ${exitCode===0?'통과':'실패'}`);}
  const changes=arg('--base')?vr.impact(arg('--base')):null;
  if(changes&&!changes.requiresVisual&&!changes.processChange&&!args.includes('--full')) {
    manifest.mode='automated-only';manifest.automationComplete=manifest.checks.every(c=>c.exitCode===0);manifest.digest=vr.manifestDigest(manifest);
    write(path.join(out,'manifest.json'),manifest);write(path.join(out,'index.html'),'<meta charset="utf-8"><h1>자동 검사 결과</h1><p>콘텐츠 갱신이다. 시각 검토 완료를 주장하지 않는다.</p><pre>'+JSON.stringify(manifest.checks,null,2)+'</pre>');
    if(!manifest.automationComplete)process.exitCode=1;return;
  }
  manifest.mode='frozen-visual';
  const files=copySite(path.join(out,'site'));manifest.frozenFiles=files.map(f=>({path:'site/'+f,sha256:vr.hash(fs.readFileSync(path.join(out,'site',f)))}));
  manifest.buildFingerprint=vr.normalizedBuild(path.join(out,'site'));
  try{await capture(out,manifest);}catch(e){manifest.captureErrors.push('캡처 실행 실패: '+e.message);}
  if(vr.sourceFingerprint()!==before)manifest.captureErrors.push('검수 중 소스 변경: 새 수정본을 다시 고정해야 함');
  manifest.complete=manifest.captureErrors.length===0;manifest.digest=vr.manifestDigest(manifest);
  const compare=arg('--compare-to');let previous;
  if(compare) {previous=JSON.parse(fs.readFileSync(path.join(compare,'manifest.json'),'utf8'));const errors=vr.validateBundle(compare,previous,previous.sourceFingerprint);if(errors.length)throw Error('이전 증거 손상: '+errors.join(';'));fs.mkdirSync(path.join(out,'before'),{recursive:true});for(const c of previous.cases)for(const i of c.images){const dest=path.join(out,'before',i.path);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.copyFileSync(vr.relativeFile(compare,i.path),dest);}}
  write(path.join(out,'manifest.json'),manifest);write(path.join(out,'review.json'),vr.reviewTemplate(manifest));write(path.join(out,'index.html'),vr.gallery(manifest,previous));
  const errors=vr.validateBundle(out,manifest,before);
  console.log(JSON.stringify({bundle:out,sourceFingerprint:before,cases:manifest.cases.length,units:manifest.units.length,visualReview:'pending',errors},null,2));
  if(errors.length)process.exitCode=1;
}
function verify() {
  const current=vr.sourceFingerprint(),bundle=arg('--bundle'),record=arg('--review');
  if(!bundle||!record)throw Error('verify --bundle <고정 캡처 폴더> --review <별도 검토 기록> 필요');
  const manifest=JSON.parse(fs.readFileSync(path.join(bundle,'manifest.json'),'utf8')),review=JSON.parse(fs.readFileSync(record,'utf8'));
  const errors=vr.validateLocalReview(bundle,review,current);
  if(errors.length)throw Error(errors.join('\n'));
  console.log('고정 수정본의 자동 검사·시각 검토 기록·실제 증거 파일 확인 통과. 미관의 자동 판정은 아님.');
}
function gate() {
  const changed=vr.impact(arg('--base')),current=vr.sourceFingerprint();
  if(!changed.requiresVisual){console.log(JSON.stringify({visualReview:'not-claimed',reason:changed.processChange?'검수 프로세스 변경, UI 변경 없음':'디자인 코드 변경 없음',changes:changed.files}));return;}
  const file=arg('--review',path.join(ROOT,'_qa/visual-review/reviews',current+'.json'));
  if(!fs.existsSync(file))throw Error('디자인 변경의 별도 시각 검토 기록이 없다. 수정본을 고정해 검토하고 '+path.relative(ROOT,file)+'에 기록한다.');
  const review=JSON.parse(fs.readFileSync(file,'utf8'));
  const candidateDir=arg('--candidate');let candidate;
  if(candidateDir)candidate=JSON.parse(fs.readFileSync(path.join(candidateDir,'manifest.json'),'utf8'));
  const errors=vr.validateReview(review,current,candidate);
  if(candidateDir)errors.push(...vr.validateBundle(candidateDir,candidate,current));
  if(process.env.GITHUB_ACTIONS!=='true') {
    const local=arg('--bundle')||review.localEvidence;const bundle=local?path.resolve(ROOT,local):null;
    if(!bundle)errors.push('로컬 pre-push에는 검토한 실제 캡처 폴더가 필요');
    else {try{const manifest=JSON.parse(fs.readFileSync(path.join(bundle,'manifest.json'),'utf8'));if(manifest.digest!==review.manifestDigest)errors.push('검토 기록과 로컬 이미지 묶음 불일치');errors.push(...vr.validateBundle(bundle,manifest,current));}catch(e){errors.push(e.message);}}
  }
  if(errors.length)throw Error([...new Set(errors)].join('\n'));
  console.log(JSON.stringify({visualReview:'record-validated',sourceFingerprint:current,reviewer:review.reviewer,limits:review.limits||[],evidence:process.env.GITHUB_ACTIONS==='true'?'별도 검토 기록 + CI 재빌드. 로컬 원본 이미지를 CI가 열람했다고 주장하지 않음':'실제 로컬 고정 이미지의 해시도 확인'}));
}
function record() {
  const bundle=path.resolve(arg('--bundle','')),file=arg('--review');if(!arg('--bundle')||!file)throw Error('record --bundle <폴더> --review <검토자가 작성한 JSON> 필요');
  const review=JSON.parse(fs.readFileSync(file,'utf8')),manifest=JSON.parse(fs.readFileSync(path.join(bundle,'manifest.json'),'utf8'));
  const errors=[...vr.validateBundle(bundle,manifest,vr.sourceFingerprint()),...vr.validateReview(review,vr.sourceFingerprint(),manifest)];
  if(errors.length)throw Error(errors.join('\n'));
  const relative=path.relative(ROOT,bundle);if(relative.startsWith('..')||path.isAbsolute(relative))throw Error('최종 증거는 저장소의 .agent-memory/visual-review 안에 보관한다.');
  review.localEvidence=relative;
  const dest=path.join(ROOT,'_qa/visual-review/reviews',review.sourceFingerprint+'.json');fs.mkdirSync(path.dirname(dest),{recursive:true});write(dest,review);console.log(path.relative(ROOT,dest));
}
function installHooks() {
  const custom=vr.git(['config','--get','core.hooksPath']);
  if(custom)throw Error('기존 core.hooksPath가 있다. 자동 덮어쓰기 대신 기존 훅에 .githooks/pre-push를 연결한다.');
  const common=path.resolve(ROOT,vr.git(['rev-parse','--git-common-dir'])),dest=path.join(common,'hooks/pre-push'),source=fs.readFileSync(path.join(ROOT,'.githooks/pre-push'));
  fs.mkdirSync(path.dirname(dest),{recursive:true});
  if(fs.existsSync(dest)&&!fs.readFileSync(dest).equals(source)&&!fs.readFileSync(dest,'utf8').includes('# Installed in the common Git directory')) {
    if(fs.existsSync(dest+'.before-visual-review'))throw Error('기존 훅 백업이 있다. 덮어쓰지 않고 연결 상태를 확인한다.');
    fs.copyFileSync(dest,dest+'.before-visual-review');
  }
  fs.writeFileSync(dest,source,{mode:0o755});fs.chmodSync(dest,0o755);console.log('공통 Git 디렉터리의 pre-push 검수 훅 설치 완료');
}
async function main(){if(command==='prepare')await prepare();else if(command==='verify')verify();else if(command==='gate')gate();else if(command==='record')record();else if(command==='install-hooks')installHooks();else if(command==='fingerprint')console.log(vr.sourceFingerprint());else if(command==='impact')console.log(JSON.stringify(vr.impact(arg('--base')),null,2));else if(command==='serve'){const s=await serveDirectory(path.resolve(arg('--bundle')));console.log(`http://127.0.0.1:${s.address().port}/`);}else throw Error('명령: prepare, verify, gate, record, install-hooks, fingerprint, impact, serve');}
if(require.main===module)main().catch(e=>{console.error(e.message);process.exitCode=1});
module.exports={capture,copySite,serveDirectory,installFontEvidence};

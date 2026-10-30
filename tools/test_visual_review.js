// Test false-completion paths. Fixtures are never real approvals or site evidence.
const assert=require('assert/strict'),fs=require('fs'),path=require('path'),os=require('os');
const {execFileSync,spawnSync}=require('child_process');
const vr=require('./lib/visual-review'),{ROOT}=require('./lib/site');
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'visual-review-tests-'));
assert.equal(vr.kind('contact.md'),'design');
assert.equal(vr.kind('assets/nested/widget.css'),'design');
assert.equal(vr.kind('_data/seminar.yml'),'content');
assert.equal(vr.kind('teaching/course/slides/deck.html'),'other');
assert.equal(vr.kind('README.md'),'other');
const clone=x=>JSON.parse(JSON.stringify(x));
try {
  const png=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jA9sAAAAASUVORK5CYII=','base64');
  fs.mkdirSync(path.join(tmp,'images'));fs.writeFileSync(path.join(tmp,'images/a.png'),png);
  const m={schemaVersion:1,createdAt:'2026-10-28T00:00:00Z',implementer:'implementation-agent',sourceFingerprint:'fixture',buildFingerprint:'built-fixture',fontResources:[{url:'https://example.invalid/font.woff2',sha256:'fixture-font-bytes'}],complete:true,captureErrors:[],checks:vr.policy.requiredChecks.map(name=>({name,exitCode:0})),requiredCases:[{id:'case',page:'index.html',width:1440,state:'default',full:true}],cases:[{id:'case',page:'index.html',width:1440,state:'default',fontsLoaded:true,images:[{id:'image',path:'images/a.png',sha256:vr.hash(png),kind:'reading-tile',width:1,height:1}]}],units:[{id:'page:index.html',caseIds:['case'],imageIds:['image'],title:'Fixture'}]};
  m.digest=vr.manifestDigest(m);fs.writeFileSync(path.join(tmp,'manifest.json'),JSON.stringify(m));
  assert.deepEqual(vr.validateBundle(tmp,m,'fixture'),[]);
  const r=vr.reviewTemplate(m);
  assert(vr.validateReview(r,'fixture',m).some(e=>e.includes('시각 검토 미완료')));
  Object.assign(r,{reviewer:'independent-review-agent',independence:'별도 fresh-context 검토',reviewedAt:'2026-10-28T01:00:00Z',verdict:'pass'});
  r.units=r.units.map(u=>({...u,verdict:'pass',observation:'Fixture only: actual-sized evidence inspected',evidence:['image']}));
  for(const k of Object.keys(r.rubric))r.rubric[k]={observation:'Fixture only: reviewer observation',evidence:['image']};
  assert.deepEqual(vr.validateLocalReview(tmp,r,'fixture'),[]);
  const self=clone(r);self.reviewer=self.implementer;assert(vr.validateReview(self,'fixture',m).some(e=>e.includes('다른 검토자')));
  const alias=clone(r);alias.reviewer=' IMPLEMENTATION-AGENT ';assert(vr.validateReview(alias,'fixture',m).some(e=>e.includes('다른 검토자')));
  const differentFont=clone(m);differentFont.fontResources[0].sha256='changed-font';assert(vr.validateReview(r,'fixture',differentFont).some(e=>e.includes('폰트 바이트')));
  assert(vr.validateReview(r,'changed',m).some(e=>e.includes('현재 수정본')));
  const missing=clone(r);missing.units[0].evidence=[];assert(vr.validateReview(missing,'fixture',m).some(e=>e.includes('실제 크기')));
  const cropped=clone(m);cropped.cases[0].images[0].kind='viewport';cropped.digest=vr.manifestDigest(cropped);assert(vr.validateBundle(tmp,cropped,'fixture').some(e=>e.includes('타일 누락')));
  const state=clone(m);state.requiredCases.push({id:'dropdown',state:'dropdown:0',page:'index.html',width:1440});state.digest=vr.manifestDigest(state);assert(vr.validateBundle(tmp,state,'fixture').some(e=>e.includes('화면 상태 누락')));
  const automatic=clone(r);automatic.capture.checks[0].exitCode=1;assert(vr.validateReview(automatic,'fixture',m).some(e=>e.includes('자동 검사 미통과')));
  const open=clone(r);open.findings=[{id:'too-bold',status:'open',observation:'Hierarchy competes',evidence:['image']}];assert(vr.validateReview(open,'fixture',m).some(e=>e.includes('미해결')));
  open.findings[0].status='resolved';assert(vr.validateReview(open,'fixture',m).some(e=>e.includes('확인 기록')));
  open.findings[0].verification='Fixture only: inspected corrected image';assert.deepEqual(vr.validateReview(open,'fixture',m),[]);
  const rebuilt=clone(m);rebuilt.buildFingerprint='different';assert(vr.validateReview(r,'fixture',rebuilt).some(e=>e.includes('재빌드')));
  const extra=clone(m);extra.cases.push({...clone(m.cases[0]),id:'new-case'});assert(vr.validateReview(r,'fixture',extra).some(e=>e.includes('화면 목록')));
  const early=clone(r);early.reviewedAt='2026-10-27T00:00:00Z';assert(vr.validateReview(early,'fixture',m).some(e=>e.includes('시각 기록')));
  fs.writeFileSync(path.join(tmp,'images/a.png'),'changed');assert(vr.validateBundle(tmp,m,'fixture').some(e=>e.includes('이미지 변경')));fs.writeFileSync(path.join(tmp,'images/a.png'),png);
  const minted=clone(m);minted.createdAt='2026-10-28T00:01:00Z';minted.digest=vr.manifestDigest(minted);fs.writeFileSync(path.join(tmp,'manifest.json'),JSON.stringify(minted));assert(vr.validateLocalReview(tmp,r,'fixture').some(e=>e.includes('묶음과 현재')));
  const html=vr.gallery(m);assert(html.includes('max-width:none')&&html.includes('시각 검토 대기')&&!html.includes('검토 통과'));
  const repo=path.join(tmp,'repo');fs.mkdirSync(repo);const g=a=>execFileSync('git',a,{cwd:repo,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
  g(['init']);fs.mkdirSync(path.join(repo,'_themes/wide'),{recursive:true});fs.writeFileSync(path.join(repo,'_themes/wide/a.css'),'a{font-weight:400}');g(['add','.']);g(['-c','user.name=Fixture','-c','user.email=fixture@example.invalid','commit','-m','fixture']);
  const original=vr.sourceFingerprint(repo);fs.writeFileSync(path.join(repo,'README.md'),'nonvisual documentation');assert.equal(vr.sourceFingerprint(repo),original);
  fs.writeFileSync(path.join(repo,'_themes/wide/new.css'),'a{font-weight:600}');assert(vr.impact('HEAD',repo).requiresVisual,'untracked design file must not bypass');assert.notEqual(vr.sourceFingerprint(repo),original);
  assert.throws(()=>vr.impact('0000000000000000000000000000000000000000',repo));
  const built=path.join(tmp,'build');fs.mkdirSync(built);fs.mkdirSync(path.join(built,'assets'));fs.writeFileSync(path.join(built,'assets/style.css'),'a{font-weight:400}');fs.writeFileSync(path.join(built,'index.html'),'<link href="assets/style.css?v=1">Last updated Oct 27, 2026');const h=vr.normalizedBuild(built);fs.writeFileSync(path.join(built,'index.html'),'<link href="assets/style.css?v=2">Last updated Oct 28, 2026');assert.equal(vr.normalizedBuild(built),h);fs.writeFileSync(path.join(built,'assets/style.css'),'a{font-weight:600}');assert.notEqual(vr.normalizedBuild(built),h);
  // 평소 push 는 막지 않고, 설치 전에 있던 훅만 그대로 돈다(전수 검사는 audit 워크플로).
  const hookSource=path.join(ROOT,'.githooks/pre-push');
  const hookRepo=path.join(tmp,'hook-repo');fs.mkdirSync(hookRepo);
  const hg=a=>execFileSync('git',a,{cwd:hookRepo,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
  hg(['init']);fs.writeFileSync(path.join(hookRepo,'README.md'),'checkout');hg(['add','.']);
  hg(['-c','user.name=Fixture','-c','user.email=fixture@example.invalid','commit','-m','fixture']);
  const head=hg(['rev-parse','HEAD']);
  const installed=path.join(hookRepo,'.git/hooks/pre-push');fs.copyFileSync(hookSource,installed);fs.chmodSync(installed,0o755);
  const hookRun=()=>spawnSync('sh',[installed],{cwd:hookRepo,encoding:'utf8',input:`refs/heads/main ${head} refs/heads/main ${head}\n`});
  assert.equal(hookRun().status,0,'main push must not wait for a visual review');
  const priorHook=installed+'.before-visual-review';fs.writeFileSync(priorHook,'#!/bin/sh\nexit 29;\n');fs.chmodSync(priorHook,0o755);
  assert.equal(hookRun().status,29,'existing push checks must still run');fs.unlinkSync(priorHook);
  // 옛 공통 훅이 부르는 gate 도 디자인 변경을 막지 않는다.
  const probe=path.join(ROOT,`_themes/wide/review-gate-probe-${process.pid}.css`);assert(!fs.existsSync(probe));
  try {fs.writeFileSync(probe,'/* verifier fixture, never committed */');
    const result=spawnSync(process.execPath,['tools/visual_review.js','gate','--base','HEAD'],{cwd:ROOT,encoding:'utf8',env:{...process.env,GITHUB_ACTIONS:''}});assert.equal(result.status,0);assert(result.stdout.includes('audit'));
  } finally {fs.unlinkSync(probe);}
  console.log('시각 검수 프로세스 회귀검증 통과: 미검토·자기 승인·누락 상태·누락 타일·소스 변경·이미지 변조·재빌드 불일치·미해결 문제·평소 push 비차단');
} finally {fs.rmSync(tmp,{recursive:true,force:true});}

// The last failed main push cannot hide an unreviewed design change.
(async()=>{
  const {deploymentBase}=require('./deployment_base');
  const api=async url=>url.startsWith('/deployments?')?[{id:2,sha:'failed-head'},{id:1,sha:'deployed-head'}]:url.includes('/2/')?[{state:'failure'}]:[{state:'success'}];
  assert.equal(await deploymentBase(api),'deployed-head');
  assert.equal(await deploymentBase(async()=>[]),vr.policy.initialDeployment);
  await assert.rejects(deploymentBase(async()=>{throw Error('HTTP 403')}),/403/);
})().catch(e=>{console.error(e);process.exitCode=1;});

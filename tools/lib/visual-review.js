// Review identity and evidence are attestations; CSS correctness is not an aesthetic approval.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');
const { ROOT } = require('./site');
const policy = require('../../_qa/visual-review/policy.json');
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const canonical = value => JSON.stringify(value, Object.keys(value).sort());
function git(args, root=ROOT) { if(args[0]==='config'&&args[1]==='--get'){try{return execFileSync('git',args,{cwd:root,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();}catch(e){if(e.status===1)return '';throw e;}} return execFileSync('git', args, {cwd:root,encoding:'utf8'}).trim(); }
function kind(file) {
  if (/^(tools\/.*\.(js|json)|_qa\/visual-review\/policy\.json|\.githooks\/|\.github\/workflows\/)/.test(file)) return 'process';
  if (/^(changelog|discussions|_qa|tools)\//.test(file) || /(^|\/)(AGENTS|README|TODO|POSTECH)\.md$/.test(file)) return 'other';
  // HTML/Markdown pages may introduce inline styles or layouts. Data-only sync stays automated.
  if (file==='_config.yml' || /^_plugins\//.test(file) || /^_themes\/.*\.(html|css|js|json)$/.test(file)) return 'design';
  if (!/(^|\/)(slides|project)\//.test(file) && /\.(html|css|js|svg|png|jpe?g|webp|gif|woff2?|ttf|md)$/.test(file)) return 'design';
  if (/^_data\/.*\.(ya?ml|json)$/.test(file)) return 'content';
  return 'other';
}
function inventory(root=ROOT) {
  return [...new Set(git(['ls-files','--cached','--others','--exclude-standard','-z'],root).split('\0').filter(Boolean))]
    .filter(f=>kind(f)!=='other').sort().map(file=>({file,sha256:fs.existsSync(path.join(root,file))?hash(fs.readFileSync(path.join(root,file))):'deleted'}));
}
function sourceFingerprint(root=ROOT) { return hash(JSON.stringify(inventory(root))); }
function normalizedBuild(site) {
  const files=[];
  function walk(dir) {
    for(const e of fs.readdirSync(path.join(site,dir),{withFileTypes:true})) {
      const rel=path.join(dir,e.name);
      if(e.isDirectory()) { if(e.name!=='slides') walk(rel); }
      else if(/\.(html|css|js)$/.test(e.name) && !rel.startsWith('assets/img/')) {
        const bytes=fs.readFileSync(path.join(site,rel));
        if(bytes.length>2e6) continue; // independently authored slide decks are outside the site template
        if(e.name.endsWith('.html')&&!/assets\/style\.css/.test(bytes.toString('utf8')))continue;
        const text=bytes.toString('utf8').replace(/(assets\/style\.css\?v=)\d+/g,'$1BUILD_TIME').replace(/Last updated [A-Z][a-z]{2} \d{1,2}, \d{4}/g,'Last updated BUILD_DATE');
        files.push({file:rel,sha256:hash(text)});
      }
    }
  }
  walk(''); return hash(JSON.stringify(files.sort((a,b)=>a.file<b.file?-1:a.file>b.file?1:0)));
}
function impact(base,root=ROOT) {
  if(!base || /^0+$/.test(base)) throw new Error('비교 기준 SHA가 필요하다. 추측해서 검토를 생략하지 않는다.');
  git(['rev-parse','--verify',base+'^{commit}'],root);
  const files=[...new Set([...git(['diff','--name-only',base,'--'],root).split('\n'),...git(['ls-files','--others','--exclude-standard'],root).split('\n')].filter(Boolean))];
  const classes=files.map(file=>({file,kind:kind(file)}));
  return {base, files:classes, requiresVisual:classes.some(x=>x.kind==='design'), processChange:classes.some(x=>x.kind==='process')};
}
function manifestDigest(manifest) { const m={...manifest};delete m.digest;return hash(JSON.stringify(m)); }
function relativeFile(root,rel) {
  if(!rel || path.isAbsolute(rel) || rel.split(/[\\/]/).includes('..')) throw new Error('검수 증거 경로가 잘못됐다: '+rel);
  return path.join(root,rel);
}
function validateBundle(dir, manifest, currentSource) {
  const failures=[];
  if(manifest.digest!==manifestDigest(manifest)) failures.push('manifest 변경/위조 또는 손상');
  if(manifest.sourceFingerprint!==currentSource) failures.push('검토 후 소스 변경: 수정본을 다시 고정해야 함');
  if(!manifest.fontResources?.length) failures.push('실제 폰트 바이트 근거 누락');
  if(!manifest.complete || manifest.captureErrors?.length) failures.push('화면 캡처 미완료');
  for(const check of policy.requiredChecks) if(!manifest.checks.some(c=>c.name===check && c.exitCode===0)) failures.push('자동 검사 미통과: '+check);
  if(!manifest.requiredCases?.length) failures.push('독립적으로 수집한 화면 계획 누락');
  for(const planned of manifest.requiredCases||[]) {const c=manifest.cases.find(c=>c.id===planned.id);if(!c)failures.push('화면 상태 누락: '+planned.state+' '+planned.page+' '+planned.width);else if(planned.full&&!c.images.some(i=>i.kind==='reading-tile'))failures.push('아래 내용의 실제 크기 타일 누락: '+c.id);}
  const frozen=path.join(dir,'site');
  if(fs.existsSync(frozen))for(const page of require('./site').templatePages(frozen))for(const width of policy.widths)if(!manifest.cases.some(c=>c.page===page&&c.width===width&&c.state==='default'))failures.push('페이지/화면 폭 누락: '+page+' '+width);
  if(!manifest.cases.length || !manifest.units.length) failures.push('검토할 실제 화면이 없음');
  for(const file of manifest.frozenFiles||[]) {try{const f=relativeFile(dir,file.path);if(!fs.existsSync(f)||hash(fs.readFileSync(f))!==file.sha256)failures.push('고정 빌드 변경/누락: '+file.path);}catch(e){failures.push(e.message);}}
  for(const c of manifest.cases) {
    if(!c.fontsLoaded) failures.push('실제 글꼴 로드 실패: '+c.id);
    if(!c.images.length) failures.push('캡처 누락: '+c.id);
    for(const image of c.images) {
      try { const f=relativeFile(dir,image.path);if(!fs.existsSync(f)||hash(fs.readFileSync(f))!==image.sha256) failures.push('이미지 변경/누락: '+image.path); }
      catch(e) {failures.push(e.message);}
    }
  }
  return [...new Set(failures)];
}
function reviewTemplate(manifest) {
  return {schemaVersion:1,sourceFingerprint:manifest.sourceFingerprint,manifestDigest:manifest.digest,
    implementer:manifest.implementer,reviewer:'',independence:'',reviewedAt:'',verdict:'pending',
    capture:manifest,
    rubric:Object.fromEntries(Object.keys(policy.rubric).map(k=>[k,{observation:'',evidence:[]}])) ,
    units:manifest.units.map(u=>({id:u.id,verdict:'pending',observation:'',evidence:[]})),findings:[],limits:[]};
}
function validateReview(review, currentSource, candidate) {
  const failures=[];
  if(review.schemaVersion!==1) failures.push('검토 기록 schema 불일치');
  if(review.sourceFingerprint!==currentSource) failures.push('검토 기록이 현재 수정본과 다름');
  if(!review.capture || review.capture.sourceFingerprint!==currentSource || review.manifestDigest!==review.capture.digest || review.capture.digest!==manifestDigest(review.capture)) failures.push('검토 기록과 고정 캡처의 연결이 깨짐');
  if(!review.reviewer?.trim() || review.reviewer.trim().toLowerCase()===review.implementer?.trim().toLowerCase() || review.implementer!==review.capture?.implementer) failures.push('구현자와 다른 검토자 기록 필요');
  if(!review.independence?.trim() || !Number.isFinite(Date.parse(review.reviewedAt)) || Date.parse(review.reviewedAt)<Date.parse(review.capture?.createdAt)) failures.push('독립 검토 방식과 검토 시각 기록 필요');
  if(!['pass','pass-with-notes'].includes(review.verdict)) failures.push('시각 검토 미완료');
  const capture=review.capture;
  if(!capture || !capture.complete || capture.captureErrors?.length) failures.push('불완전한 캡처를 승인할 수 없음');
  if(capture) for(const name of policy.requiredChecks) if(!capture.checks?.some(c=>c.name===name && c.exitCode===0)) failures.push('고정 수정본의 자동 검사 미통과: '+name);
  const imageIds=new Set((capture?.cases||[]).flatMap(c=>c.images.map(i=>i.id)));
  const allUnits=capture?.units||[];
  const rows=review.units||[];
  if(rows.length!==allUnits.length || new Set(rows.map(u=>u.id)).size!==rows.length) failures.push('검토 단위 누락/중복');
  for(const unit of allUnits) {
    const row=rows.find(r=>r.id===unit.id);
    const requiredImages=unit.imageIds||unit.caseIds.flatMap(id=>(capture.cases.find(c=>c.id===id)?.images||[]).filter(i=>i.kind!=='overview').map(i=>i.id));
    if(!row || !['pass','pass-with-notes'].includes(row.verdict) || !row.observation?.trim() || requiredImages.some(id=>!row.evidence?.includes(id))) failures.push('실제 크기 화면 검토 누락: '+unit.id);
  }
  for(const key of Object.keys(policy.rubric)) {
    const row=review.rubric?.[key];
    if(!row?.observation?.trim() || !row.evidence?.length || row.evidence.some(id=>!imageIds.has(id))) failures.push('검토 질문의 관찰·화면 근거 누락: '+key);
  }
  for(const finding of review.findings||[]) {
    if(!finding.id || !finding.observation || !finding.evidence?.length || finding.evidence.some(id=>!imageIds.has(id))) failures.push('문제 기록의 근거 누락');
    if(!['resolved','accepted'].includes(finding.status)) failures.push('미해결 문제: '+(finding.id||'?'));
    if(finding.status==='resolved' && !finding.verification?.trim()) failures.push('해결 뒤 확인 기록 필요: '+finding.id);
    if(finding.status==='accepted' && (!finding.rationale?.trim() || !finding.acceptedBy?.trim())) failures.push('의도적으로 남긴 판단의 이유·결정자 필요: '+finding.id);
  }
  if(candidate) {
    if(!candidate.complete||candidate.captureErrors?.length||policy.requiredChecks.some(n=>!candidate.checks?.some(c=>c.name===n&&c.exitCode===0)))failures.push('CI 후보 캡처/자동 검사 미완료');
    const fontIdentity=m=>JSON.stringify((m?.fontResources||[]).map(f=>({url:f.url,sha256:f.sha256})).sort((a,b)=>a.url.localeCompare(b.url)));
    if(!capture?.fontResources?.length||fontIdentity(candidate)!==fontIdentity(capture))failures.push('CI 실제 폰트 바이트가 검토본과 다름');
    if(candidate.sourceFingerprint!==currentSource || candidate.buildFingerprint!==capture?.buildFingerprint) failures.push('CI 재빌드가 검토한 입력/생성 문서와 다름');
    const a=(candidate.units||[]).map(u=>u.id).sort().join('\n'),b=allUnits.map(u=>u.id).sort().join('\n');
    if(a!==b || candidate.cases.map(c=>c.id).sort().join()!==(capture?.cases||[]).map(c=>c.id).sort().join()) failures.push('검토 이후 화면 목록이 달라짐');
  }
  return [...new Set(failures)];
}
function validateLocalReview(dir, review, currentSource) {
  try {const manifest=JSON.parse(fs.readFileSync(path.join(dir,'manifest.json'),'utf8'));return [...validateBundle(dir,manifest,currentSource),...validateReview(review,currentSource,manifest),...(manifest.digest!==review.manifestDigest?['검토한 이미지 묶음과 현재 묶음이 다름']:[])];}catch(e){return [e.message];}
}
const escape = x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function gallery(manifest, before) {
  const old=new Map((before?.cases||[]).flatMap(c=>c.images.map(i=>[i.id,i])));
  return `<!doctype html><html lang="ko"><meta charset="utf-8"><title>고정 수정본 시각 검토</title><style>body{font:16px/1.6 sans-serif;color:#172b40;background:#f3f6fa;margin:24px}header,section{background:white;padding:24px;margin-bottom:24px;border:1px solid #d8e0e8;border-radius:8px}.image{overflow:auto;border:1px solid #d8e0e8;margin:12px 0;padding:12px}img{max-width:none;vertical-align:top}small{color:#596574}.pair{display:flex;gap:24px;min-width:max-content}summary{cursor:pointer;font-weight:600}a{color:#a61955}</style><header><h1>고정 수정본 시각 검토</h1><p>자동 검사 통과는 시각 검토 완료가 아니다. 원본 크기로 읽고, 아래 질문에 화면 근거를 남긴다.</p><p>수정본: ${escape(manifest.sourceFingerprint)}<br>상태: ${manifest.complete?'캡처 완료, 시각 검토 대기':'캡처 미완료'}<br>구현자: ${escape(manifest.implementer)} / 생성: ${escape(manifest.createdAt)}</p>${Object.entries(policy.rubric).map(([k,v])=>`<p><b>${k}</b>: ${escape(v)}</p>`).join('')}<nav>${manifest.units.map(u=>`<a href="#${escape(u.id)}">${escape(u.title)}</a> · `).join('')}</nav></header>${manifest.units.map(u=>`<section id="${escape(u.id)}"><h2>${escape(u.title)}</h2>${u.caseIds.map(id=>{const c=manifest.cases.find(c=>c.id===id);return `<details><summary>${escape(c.page)} / ${c.width}px / ${escape(c.state)}</summary>${c.images.map(i=>`<p><b>${escape(i.kind)} ${escape(i.selector||'')}</b> <small>${escape(i.id)} · ${i.width}×${i.height}</small></p><div class="image"><div class="pair">${old.has(i.id)?`<figure><figcaption>이전</figcaption><img loading="lazy" src="before/${escape(old.get(i.id).path)}"></figure>`:''}<figure><figcaption>수정본</figcaption><a href="${escape(i.path)}"><img loading="lazy" src="${escape(i.path)}" width="${i.width}" height="${i.height}"></a></figure></div></div>`).join('')}</details>`;}).join('')}</section>`).join('')}<p>이 갤러리는 실제 화면 비교 도구다. 미관을 자동 판정하거나 독립 검토자의 실제 신원을 인증하지 않는다.</p></html>`;
}
module.exports={policy,hash,git,kind,inventory,sourceFingerprint,normalizedBuild,impact,manifestDigest,validateBundle,reviewTemplate,validateReview,validateLocalReview,gallery,relativeFile};

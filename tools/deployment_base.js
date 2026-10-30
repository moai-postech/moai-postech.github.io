// A failed deployment must not become the next comparison base.
const {policy}=require('./lib/visual-review');
async function deploymentBase(api) {
  for(let page=1;page<=10;page++) {
    const rows=await api(`/deployments?environment=github-pages&per_page=100&page=${page}`);
    for(const row of rows) {
      const statuses=await api(`/deployments/${row.id}/statuses?per_page=100`);
      if(statuses.some(s=>s.state==='success'))return row.sha;
    }
    if(rows.length<100)return policy.initialDeployment;
  }
  throw Error('성공 배포를 찾는 범위를 넘었다. 검토 기준을 추측하지 않는다.');
}
if(require.main===module) {
  const repo=process.env.GITHUB_REPOSITORY,token=process.env.GH_TOKEN;
  if(!repo||!token)throw Error('GITHUB_REPOSITORY와 GH_TOKEN 필요');
  deploymentBase(async suffix=>{
    const r=await fetch(`https://api.github.com/repos/${repo}${suffix}`,{headers:{Authorization:`Bearer ${token}`,Accept:'application/vnd.github+json'}});
    if(!r.ok)throw Error(`배포 이력 조회 실패: HTTP ${r.status}`);
    return r.json();
  }).then(sha=>console.log(sha)).catch(e=>{console.error(e.message);process.exitCode=1;});
}
module.exports={deploymentBase};

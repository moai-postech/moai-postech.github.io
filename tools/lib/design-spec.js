const base = require('../../_themes/wide/design-contract.json');
const pageDesign = require('../../_themes/wide/page-design.json');
const contract = { ...base, pageDesign };
function renderReview() {
  const cell = value => String(value).replaceAll('|','\\|').replaceAll('\n',' ');
  const lines = ['# 페이지별 디자인 검토','',
    '기본 템플릿을 먼저 적용하고, 정보량·배치·중요도에 따라 필요한 부분만 조정한다. 이 문서는 `page-design.json`에서 생성한다. 변경 뒤 `node tools/check_design.js --write-review`로 갱신한다.','',
    '## 공통 기본값의 가독성 조정','', '| 대상 | 조정 | 근거 |','| --- | --- | --- |'];
  for (const x of pageDesign.sharedDecisions) lines.push(`| ${cell(x.target)} | ${cell(x.change)} | ${cell(x.reason)} |`);
  lines.push('','## 페이지별 조정','', '| ID | 페이지 | 조정 | 근거 |','| --- | --- | --- | --- |');
  for (const x of pageDesign.adjustments) lines.push(`| ${x.id} | ${x.pages.map(p=>'`'+p+'`').join(', ')} | ${cell(x.change)} | ${cell(x.reason)} |`);
  lines.push('','## 전체 페이지 검토','', '| 페이지 | 템플릿 | 판단 | 근거 |','| --- | --- | --- | --- |');
  for (const x of pageDesign.reviews) lines.push(`| \`${x.page}\` | ${cell(x.template)} | ${cell(x.decision)} | ${cell(x.reason)} |`);
  lines.push('','상단 메뉴의 항목·순서·위치는 같은 문서 틀 안에서 유지한다. 페이지 조정은 해당 화면의 콘텐츠 영역에 한정하며, 글꼴·색 팔레트·기본 토큰을 공유한다.','');
  return lines.join('\n');
}
module.exports = { contract, renderReview };

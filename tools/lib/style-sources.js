// 소스만 보는 스타일 검사. 빌드와 브라우저가 없어도 돌아서 push 전 검사(tools/prepush.sh)와 check_design 이 같이 쓴다.
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { ROOT } = require('./site');

// Changing page content must not create a second styling surface.
function checkStyleSources() {
  const failures = [];
  const files = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '*.md', '*.html', '*.yml'], { cwd: ROOT, encoding: 'utf8' }).trim().split('\n');
  for (const file of files) {
    if (/^(_themes\/|tools\/|changelog\/|discussions\/|assets\/)/.test(file) || /\/slides\//.test(file)) continue;
    const source = fs.readFileSync(path.join(ROOT, file), 'utf8');
    if (/^---\r?\n[\s\S]*?\blayout:\s*(page|course)\b/.test(source) || file.startsWith('_data/')) {
      if (/<style\b|\bstyle\s*=\s*["']/i.test(source)) failures.push(`${file}: 콘텐츠에 style을 넣지 말고 공통 템플릿 역할을 사용`);
    }
  }
  for (const file of ['_themes/wide/includes/theme.css', '_themes/wide/includes/course/course.css']) {
    const source = fs.readFileSync(path.join(ROOT, file), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');  // 주석이 다음 선택자에 붙지 않게
    for (const m of source.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const size = m[2].match(/font-size:\s*([^;]+)/);
      if (size && !/^(var\(|inherit$)/.test(size[1].trim())) failures.push(`${file}: ${m[1].trim()} 글자 크기는 역할 토큰 사용`);
    }
    if (/font-weight:\s*(400|600|700)\b/.test(source)) failures.push(`${file}: 굵기 역할 토큰 대신 숫자 사용`);
  }
  return failures;
}

if (require.main === module) {
  const failures = checkStyleSources();
  for (const f of failures) console.error(f);
  if (failures.length) process.exitCode = 1; else console.log('스타일 소스 검사 통과');
}
module.exports = { checkStyleSources };

// 검사 도구가 같이 쓰는 것: 빌드한 _site 를 띄우는 작은 서버와 _config.yml 의 값 몇 개.
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const SITE = path.join(ROOT, '_site');
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.json': 'application/json', '.pdf': 'application/pdf' };

function serve() {
  return new Promise(resolve => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p.endsWith('/')) p += 'index.html';
      const f = path.join(SITE, p);
      if (!f.startsWith(SITE) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); }
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
      fs.createReadStream(f).pipe(res);
    }).listen(0, () => resolve(srv));
  });
}

// _config.yml 의 한 단계 블록(postech:, footer:) 안의 "key: value" 를 읽는다. YAML 라이브러리 없이 이 두 블록만.
function configBlock(name) {
  const lines = fs.readFileSync(path.join(ROOT, '_config.yml'), 'utf8').split('\n');
  const out = {}; let inside = false;
  for (const line of lines) {
    if (/^\S/.test(line)) { inside = line.startsWith(name + ':'); continue; }
    const m = inside && line.match(/^\s+([a-z_]+):\s*(.+?)\s*$/);
    if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  return out;
}

// Discover all pages rendered by the shared lab/course templates, including new pages.
// Slides, redirect stubs and embedded third-party content have their own document systems.
function templatePages(site = SITE) {
  const pages = [];
  function walk(dir) {
    for (const e of fs.readdirSync(path.join(site, dir), { withFileTypes: true })) {
      const rel = path.join(dir, e.name);
      if (e.isDirectory()) { if (!['assets', 'slides'].includes(e.name)) walk(rel); }
      else if (e.name.endsWith('.html') && /<link[^>]+href=["'](?:\/)?assets\/style\.css[?"']/.test(fs.readFileSync(path.join(site, rel), 'utf8'))) pages.push(rel);
    }
  }
  if (fs.existsSync(site)) walk('');
  return pages.sort();
}

module.exports = { ROOT, SITE, serve, configBlock, templatePages };

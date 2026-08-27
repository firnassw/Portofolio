const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
['logo', 'projek', 'sertifikat'].forEach(dir => {
  const src = path.join(process.cwd(), dir);
  const dest = path.join(publicDir, dir);
  if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
  }
});

const pagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
let page = fs.readFileSync(pagePath, 'utf8');
page = page.replace(/<!--([\s\S]*?)-->/g, '');
fs.writeFileSync(pagePath, page);

const cssPath = path.join(process.cwd(), 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');
css = css.replace(/url\(['"]?\.\/([^'"\)]+)['"]?\)/g, 'url(\"/$1\")');
fs.writeFileSync(cssPath, css);

console.log('Fixes applied successfully!');

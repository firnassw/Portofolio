const fs = require('fs');
const path = require('path');

// 1. Move directories to public
const publicDir = path.join(process.cwd(), 'public');
['logo', 'projek', 'sertifikat'].forEach(dir => {
  const src = path.join(process.cwd(), dir);
  const dest = path.join(publicDir, dir);
  if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
  }
});

// 2. Fix HTML comments in page.tsx
const pagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
let page = fs.readFileSync(pagePath, 'utf8');
page = page.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
fs.writeFileSync(pagePath, page);

// 3. Fix relative url() paths in globals.css
const cssPath = path.join(process.cwd(), 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');
css = css.replace(/url\(['"]?\.\/([^'"\)]+)['"]?\)/g, 'url(\"/$1\")');
fs.writeFileSync(cssPath, css);

console.log('Fixes applied successfully!');

const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
let page = fs.readFileSync(pagePath, 'utf8');


page = page.replace(/autoplay/g, 'autoPlay');
page = page.replace(/playsinline/g, 'playsInline');



page = page.replace(/style="([^"]+)"/g, (match, styleString) => {
  const parts = styleString.split(';');
  let styleObjStr = parts.filter(p => p.trim()).map(p => {
    let [key, val] = p.split(':');
    if (!key || !val) return '';
    key = key.trim();
    val = val.trim();
    return `"${key}": "${val}"`;
  }).filter(Boolean).join(', ');
  return `style={{ ${styleObjStr} } as React.CSSProperties}`;
});


page = page.replace(/onClick="([^"]+)"/gi, 'onClick={() => console.log("$1")}');

fs.writeFileSync(pagePath, page);
console.log('Fixed TS errors');

const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
let page = fs.readFileSync(pagePath, 'utf8');

page = page.replace(/<br\s*>/gi, '<br />');

page = page.replace(/<img([^>]+?)(?<!\/)>/gi, '<img$1 />');

fs.writeFileSync(pagePath, page);
console.log('Fixed self-closing tags');

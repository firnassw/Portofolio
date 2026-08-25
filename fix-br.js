const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
let page = fs.readFileSync(pagePath, 'utf8');

// Replace exactly <br> or <br > with <br />
page = page.replace(/<br\s*>/gi, '<br />');

// Also check for unclosed img tags
page = page.replace(/<img([^>]+?)(?<!\/)>/gi, '<img$1 />');

fs.writeFileSync(pagePath, page);
console.log('Fixed self-closing tags');

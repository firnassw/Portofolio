const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');


content = content.replace(/\{\/\*[\s\S]*?\*\/\}\s*\n?/g, '');


content = content.replace(/\/\*[\s\S]*?\*\/\s*\n?/g, '');



content = content.replace(/(?<!:)\/\/.*$/gm, '');

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Comments removed.');

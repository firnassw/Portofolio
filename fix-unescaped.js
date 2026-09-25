const fs = require('fs');

function replaceApos(filePath, linesToFix) {
  let lines = fs.readFileSync(filePath, 'utf-8').split('\n');
  for (const line of linesToFix) {
    lines[line - 1] = lines[line - 1].replace(/'/g, "&apos;");
  }
  fs.writeFileSync(filePath, lines.join('\n'));
}

replaceApos('src/app/page.tsx', [1093]);
replaceApos('src/components/ui/contact-card.tsx', [86, 88, 146]);
console.log('Fixed unescaped entities.');

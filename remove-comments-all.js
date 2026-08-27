const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    
    content = content.replace(/\{\/\*[\s\S]*?\*\/\}\s*\n?/g, '');

    
    content = content.replace(/\/\*[\s\S]*?\*\/\s*\n?/g, '');

    
    content = content.replace(/(?<!:)\/\/.*$/gm, '');

    fs.writeFileSync(filePath, content, 'utf8');
}

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            
            if (['node_modules', '.next', '.git', 'out', 'old-version'].includes(file)) continue;
            walk(fullPath);
        } else {
            
            if (/\.(js|mjs|ts|tsx)$/.test(file)) {
                processFile(fullPath);
            }
        }
    }
}

walk(process.cwd());
console.log('Comments removed from all files.');

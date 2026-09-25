const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function getFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

const publicDir = path.resolve(__dirname, '..', 'public');
const allFiles = getFiles(publicDir);
const hashes = {};
const duplicates = [];

for (const file of allFiles) {
  const buffer = fs.readFileSync(file);
  const hash = crypto.createHash('sha256').update(buffer).digest('hex');
  if (hashes[hash]) {
    duplicates.push([hashes[hash], file]);
  } else {
    hashes[hash] = file;
  }
}

console.log(JSON.stringify(duplicates, null, 2));

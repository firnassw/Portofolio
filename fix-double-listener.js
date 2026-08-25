const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// Replace the buggy double-event-listener toggle with a safe one
const oldLogic = `    const fmBox = document.getElementById('fm-box');
    const fmToggle = document.getElementById('fm-toggle');
    if (fmToggle && fmBox) {
      fmToggle.addEventListener('click', () => {
        fmBox.classList.toggle('is-open');
      });
    }`;

const newLogic = `    const fmBox = document.getElementById('fm-box');
    const fmToggle = document.getElementById('fm-toggle');
    
    // Define named function so we can remove it
    const toggleFmMenu = () => {
      if (fmBox) fmBox.classList.toggle('is-open');
    };
    
    if (fmToggle && fmBox) {
      // Remove any existing listener first to prevent double-firing in StrictMode
      fmToggle.removeEventListener('click', toggleFmMenu);
      fmToggle.addEventListener('click', toggleFmMenu);
    }`;

content = content.replace(oldLogic, newLogic);

fs.writeFileSync(pagePath, content);
console.log("Fixed double listener bug in page.tsx!");

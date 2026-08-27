const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

const oldFmLogic = `    const toggleFmMenu = () => {
      if (fmBox) fmBox.classList.toggle('is-open');
    };
    
    if (fmToggle && fmBox) {
      fmToggle.removeEventListener('click', toggleFmMenu);
      fmToggle.addEventListener('click', toggleFmMenu);
    }`;

const newFmLogic = `    if (fmToggle && fmBox) {
      fmToggle.onclick = () => {
        fmBox.classList.toggle('is-open');
      };
    }`;
content = content.replace(oldFmLogic, newFmLogic);

const oldTabsLogic = `    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {`;
const newTabsLogic = `    tabBtns.forEach(btn => {
      (btn as HTMLElement).onclick = () => {`;
content = content.replace(oldTabsLogic, newTabsLogic);

const oldThemeLogic = `    const themeCheckbox = document.getElementById('theme-checkbox');
    if (themeCheckbox) {
      themeCheckbox.addEventListener('change', (e) => {
        if ((e.target as HTMLInputElement).checked) {`;
const newThemeLogic = `    const themeCheckbox = document.getElementById('theme-checkbox');
    if (themeCheckbox) {
      themeCheckbox.onchange = (e) => {
        if ((e.target as HTMLInputElement).checked) {`;
content = content.replace(oldThemeLogic, newThemeLogic);

fs.writeFileSync(pagePath, content);
console.log("Fixed all double listener bugs by using onclick/onchange!");

const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// Replace style properties
content = content.replace(/style=\{\{\s*([^}]+)\s*\}\}\s*as\s*React\.CSSProperties/g, (match, p1) => {
  const newProps = p1.replace(/"([a-z]+)-([a-z]+)"\s*:/g, (m, p2, p3) => {
    return `"${p2}${p3.charAt(0).toUpperCase() + p3.slice(1)}":`;
  });
  return `style={{ ${newProps} } as React.CSSProperties}`;
});

// Also fix some specific ones like border-radius, font-weight
content = content.replace(/"border-radius"/g, '"borderRadius"');
content = content.replace(/"font-weight"/g, '"fontWeight"');
content = content.replace(/"font-size"/g, '"fontSize"');
content = content.replace(/"font-family"/g, '"fontFamily"');
content = content.replace(/"margin-bottom"/g, '"marginBottom"');
content = content.replace(/"margin-top"/g, '"marginTop"');
content = content.replace(/"text-align"/g, '"textAlign"');
content = content.replace(/"max-width"/g, '"maxWidth"');
content = content.replace(/"justify-content"/g, '"justifyContent"');
content = content.replace(/"align-self"/g, '"alignSelf"');
content = content.replace(/"--brand-color"/g, '"--brand-color"'); // Custom props are fine

fs.writeFileSync(pagePath, content);
console.log('Fixed inline styles in page.tsx');

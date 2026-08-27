const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');


const startMarker = `const projectsItems = [`;
const endMarker = `  }
];`;

if (content.includes(startMarker)) {
  const startIndex = content.indexOf(startMarker);
  
  let endIndex = content.indexOf(endMarker, startIndex) + endMarker.length;
  endIndex = content.indexOf(endMarker, endIndex) + endMarker.length;
  endIndex = content.indexOf(endMarker, endIndex) + endMarker.length;

  const extracted = content.substring(startIndex, endIndex);

  
  content = content.substring(0, startIndex) + content.substring(endIndex);

  
  const insertTarget = `export default function Home() {`;
  content = content.replace(insertTarget, extracted + '\n\n' + insertTarget);

  fs.writeFileSync(pagePath, content);
  console.log("Successfully moved data arrays out of useEffect!");
} else {
  console.log("Could not find start marker.");
}

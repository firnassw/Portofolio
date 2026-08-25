const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// The block to extract
const startMarker = `const projectsItems = [`;
const endMarker = `  }
];`;

if (content.includes(startMarker)) {
  const startIndex = content.indexOf(startMarker);
  // Find the last endMarker after startIndex. The third one because there are 3 arrays.
  let endIndex = content.indexOf(endMarker, startIndex) + endMarker.length;
  endIndex = content.indexOf(endMarker, endIndex) + endMarker.length;
  endIndex = content.indexOf(endMarker, endIndex) + endMarker.length;

  const extracted = content.substring(startIndex, endIndex);

  // Remove it from the current position
  content = content.substring(0, startIndex) + content.substring(endIndex);

  // Insert it before export default function Home()
  const insertTarget = `export default function Home() {`;
  content = content.replace(insertTarget, extracted + '\n\n' + insertTarget);

  fs.writeFileSync(pagePath, content);
  console.log("Successfully moved data arrays out of useEffect!");
} else {
  console.log("Could not find start marker.");
}

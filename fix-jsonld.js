const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf-8');
const script = `
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Wahid Firnas Portfolio",
            "url": "https://wahid-firnas.netlify.app",
            "author": {
              "@type": "Person",
              "name": "Wahid Firnas Atsal"
            }
          })
        }}
      />
`;
content = content.replace('</>', script + '    </>');
fs.writeFileSync('src/app/page.tsx', content);
console.log('JSON-LD injected');

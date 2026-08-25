const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// 1. Add Import
const importStatement = `import { Gallery6 } from "@/components/blocks/gallery6";\n`;
if (!content.includes('import { Gallery6 }')) {
  // Find the last import and insert after it
  const importsEnd = content.lastIndexOf('import ');
  const nextLineEnd = content.indexOf('\n', importsEnd);
  content = content.substring(0, nextLineEnd + 1) + importStatement + content.substring(nextLineEnd + 1);
}

// Data Arrays for Gallery6
const projectsData = `
const projectsItems = [
  {
    id: "proj-1",
    title: "TrueAttribute",
    summary: "Platform AI evidence-based yang menilai kesiapan kerja mahasiswa dari portofolio dan proyek Github.",
    url: "#",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "proj-2",
    title: "KostCare",
    summary: "Platform manajemen kesehatan dan keuangan mahasiswa. Pantau stamina, catat pengeluaran, dan terhubung real-time.",
    url: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    id: "proj-3",
    title: "MedikaLab",
    summary: "Sistem informasi laboratorium berbasis web (PHP/MySQL) untuk mengelola data pasien, antrean, rekam medis.",
    url: "#",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
  }
];
`;

const certsData = `
const certsItems = [
  {
    id: "cert-1",
    title: "Microsoft Foundations of IT Systems",
    summary: "Issuer: Microsoft | Year: 2026",
    url: "https://coursera.org",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "cert-2",
    title: "Introduction to Software Engineering",
    summary: "Issuer: IBM | Year: 2026",
    url: "https://coursera.org",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop",
  },
  {
    id: "cert-3",
    title: "Agile Development and Scrum",
    summary: "Issuer: IBM | Year: 2026",
    url: "https://coursera.org",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "cert-4",
    title: "AWS Cloud Practitioner",
    summary: "Issuer: Amazon Web Services | Year: 2025",
    url: "https://aws.amazon.com",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: "cert-5",
    title: "Google Data Analytics",
    summary: "Issuer: Google | Year: 2025",
    url: "https://coursera.org",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  }
];
`;

const lombaData = `
const lombaItems = [
  {
    id: "lomba-1",
    title: "Techsprint Innovation Cup",
    summary: "Organizer: Techsprint | Year: 2026",
    url: "#",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "lomba-2",
    title: "Peserta Lomba BMC",
    summary: "Organizer: UKMF Penelitian Reaction UNY | Year: 2026",
    url: "#",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  }
];
`;

// Insert the data inside the Home component before the return
if (!content.includes('projectsItems')) {
  const returnIndex = content.indexOf('return (');
  content = content.substring(0, returnIndex) + projectsData + certsData + lombaData + '\n  ' + content.substring(returnIndex);
}

// Replace Projects Tab Content
content = content.replace(
  /<div className="tab-content active" id="tab-projects">[\s\S]*?<!-- TAB CONTENT: CERTIFICATES -->/g,
  `<div className="tab-content active" id="tab-projects">
          <Gallery6 heading="Featured Projects" items={projectsItems} />
        </div>

        {/* TAB CONTENT: CERTIFICATES */}`
);

// Replace Certificates Tab Content
content = content.replace(
  /<div className="tab-content" id="tab-certificates">[\s\S]*?{\/\* TAB CONTENT: LOMBA \*\/}/g,
  `<div className="tab-content" id="tab-certificates">
          <Gallery6 heading="Certifications" items={certsItems} />
        </div>

        {/* TAB CONTENT: LOMBA */}`
);

// Replace Lomba Tab Content
content = content.replace(
  /<div className="tab-content" id="tab-lomba">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/g,
  `<div className="tab-content" id="tab-lomba">
          <Gallery6 heading="Competitions" items={lombaItems} />
        </div>
      </div>
    </section>`
);

fs.writeFileSync(pagePath, content);
console.log("Successfully replaced grids with Gallery6!");

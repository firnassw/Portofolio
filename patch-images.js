const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

const replacement = \`const projectsItems = [
  {
    id: "proj-1",
    title: "TrueAttribute",
    summary: "Platform AI evidence-based yang menilai kesiapan kerja mahasiswa dari portofolio dan proyek Github.",
    url: "#",
    image: "/projek/trueattribute.png",
  },
  {
    id: "proj-2",
    title: "KostCare",
    summary: "Platform manajemen kesehatan dan keuangan mahasiswa. Pantau stamina, catat pengeluaran, dan terhubung real-time.",
    url: "#",
    image: "/projek/kostcare.png",
  },
  {
    id: "proj-3",
    title: "MedikaLab",
    summary: "Sistem informasi laboratorium berbasis web (PHP/MySQL) untuk mengelola data pasien, antrean, rekam medis.",
    url: "#",
    image: "/projek/medikalab.png",
  }
];

const certsItems = [
  {
    id: "cert-1",
    title: "Microsoft Foundations of IT Systems",
    summary: "Issuer: Microsoft | Year: 2026",
    url: "https://coursera.org",
    image: "/sertifikat/coursera microsoft foundations of it systems, networking, and data protection.jpg",
  },
  {
    id: "cert-2",
    title: "Introduction to Software Engineering",
    summary: "Issuer: IBM | Year: 2026",
    url: "https://coursera.org",
    image: "/sertifikat/coursera introduction to software engineering.jpg",
  },
  {
    id: "cert-3",
    title: "Google Data Analytics",
    summary: "Issuer: Google | Year: 2025",
    url: "https://coursera.org",
    image: "/sertifikat/sertifikat-google.jpg",
  },
  {
    id: "cert-4",
    title: "SQL & Data Engineering",
    summary: "Issuer: RevoU / Tech | Year: 2025",
    url: "#",
    image: "/sertifikat/sertifikat-sql.jpg",
  },
  {
    id: "cert-5",
    title: "RevoU Mini Course",
    summary: "Issuer: RevoU | Year: 2025",
    url: "#",
    image: "/sertifikat/sertifikat-revou.jpg",
  }
];

const lombaItems = [
  {
    id: "lomba-1",
    title: "Techsprint Innovation Cup",
    summary: "Organizer: Techsprint | Year: 2026",
    url: "#",
    image: "/sertifikat/sertifikat-techsprint.jpg",
  },
  {
    id: "lomba-2",
    title: "Peserta Lomba BMC",
    summary: "Organizer: UKMF Penelitian Reaction UNY | Year: 2026",
    url: "#",
    image: "/sertifikat/sertifikat-lomba-2.jpg",
  }
];\`;

const startString = 'const projectsItems = [';
const endString = '];\n\nexport default function Home() {';

const startIndex = content.indexOf(startString);
const endIndex = content.indexOf(endString) + 2;

if (startIndex !== -1 && endIndex !== -1) {
    content = content.substring(0, startIndex) + replacement + content.substring(endIndex);
    fs.writeFileSync(pagePath, content);
    console.log("Successfully replaced Unsplash images with local images!");
} else {
    console.log("Could not find bounds.");
}

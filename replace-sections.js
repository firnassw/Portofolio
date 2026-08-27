const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let page = fs.readFileSync(pagePath, 'utf8');




const projekItems = [
  {
    id: "projek-1",
    title: "KostCare : Aplikasi Manajemen Pengelola Kos",
    summary: "Kostcare adalah sebuah aplikasi berbasis mobile dan website yang membantu pengguna/pemilik Kos untuk memanagement kos miliknya. Aplikasi ini dibangun dengan menggunakan React Native dan Laravel.",
    url: "#",
    image: "/img/projek/kostcare.png"
  },
  {
    id: "projek-2",
    title: "MedikaLab : Aplikasi Manajemen Inventori dan Pasien Pada Laboratorium",
    summary: "MedikaLab merupakan sebuah aplikasi manajemen rekam medis dan data inventori pada laboratorium klinik berbasis mobile dan website. Aplikasi ini dibangun dengan menggunakan framework Flutter, Firebase, dan Express.js.",
    url: "#",
    image: "/img/projek/medikalab.png"
  },
  {
    id: "projek-3",
    title: "TrueAttribute",
    summary: "A web platform to manage and track true attributes for various digital assets, built with modern web technologies.",
    url: "#",
    image: "/img/projek/trueattribute.png"
  }
];

const sertifikatItems = [
  {
    id: "cert-1",
    title: "IBM: Introduction to Data Analytics",
    summary: "IBM • Jul 2024 • ID: 7NNS2XSQS6L2",
    url: "https://www.coursera.org/account/accomplishments/verify/7NNS2XSQS6L2",
    image: "/img/Sertifikat/ibm1.png"
  },
  {
    id: "cert-2",
    title: "Google: Foundations of User Experience (UX) Design",
    summary: "Google • Jul 2024 • ID: PM6GSS4KXYF2",
    url: "https://www.coursera.org/account/accomplishments/verify/PM6GSS4KXYF2",
    image: "/img/Sertifikat/google.png"
  },
  {
    id: "cert-3",
    title: "Alibaba Cloud: ACA Cloud Computing Certification",
    summary: "Alibaba Cloud • Sep 2023",
    url: "https://xue.aliyun.com/certificate/certification/B3DA0C8158F24623BA77CA7A685DCA53",
    image: "/img/Sertifikat/alibaba.png"
  },
  {
    id: "cert-4",
    title: "Telkom Indonesia: UI/UX Design MSIB Batch 5",
    summary: "Yayasan Pendidikan Telkom • Des 2023",
    url: "#",
    image: "/img/Sertifikat/msib.png"
  },
  {
    id: "cert-5",
    title: "Skilvul: UI/UX Design Mastery",
    summary: "Skilvul • Okt 2023",
    url: "https://skilvul.com/courses/uiux-design-mastery/student/wahid_r6t4",
    image: "/img/Sertifikat/skillvul.png"
  }
];


const regexProjek = /<section id="projek"[^>]*>[\s\S]*?<\/section>/i;
const regexSertifikat = /<section id="sertifikat"[^>]*>[\s\S]*?<\/section>/i;

const regexLomba = /<section id="lomba"[^>]*>[\s\S]*?<\/section>/i;

let updatedPage = page.replace(regexProjek, `<div id="projek"><Gallery6 heading="Projek" demoUrl="#" items={projekItems} /></div>`);
updatedPage = updatedPage.replace(regexSertifikat, `<div id="sertifikat"><Gallery6 heading="Sertifikat" demoUrl="#" items={sertifikatItems} /></div>`);
updatedPage = updatedPage.replace(regexLomba, `<div id="lomba"><Gallery6 heading="Lomba & Kompetisi" demoUrl="#" items={[]} /></div>`); 


updatedPage = updatedPage.replace('export default function Home() {', `
const projekItems = ${JSON.stringify(projekItems, null, 2)};
const sertifikatItems = ${JSON.stringify(sertifikatItems, null, 2)};

export default function Home() {
`);

fs.writeFileSync(pagePath, updatedPage);
console.log("Replaced sections with Gallery6");

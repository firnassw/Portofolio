const fs = require('fs');
let content = fs.readFileSync('src/app/layout.tsx', 'utf-8');
content = content.replace(
  'title: "Portofolio Wahid Firnas Atsal",',
  'title: "Portofolio Wahid Firnas Atsal | UI/UX Designer & Frontend Developer",\n  alternates: {\n    canonical: "/",\n  },'
);
content = content.replace(
  'description: "Portofolio UI/UX, pengembangan web, dan showcase proyek 3D interaktif.",',
  'description: "Portofolio profesional Wahid Firnas Atsal, menampilkan keahlian dan proyek-proyek inovatif di bidang desain UI/UX, pengembangan web (frontend), analisis sistem, serta implementasi 3D interaktif.",'
);
fs.writeFileSync('src/app/layout.tsx', content);
console.log('Layout updated');

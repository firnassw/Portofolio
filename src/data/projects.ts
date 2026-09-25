export interface ProjectDetail {
  id: string;
  badge: string;
  title: string;
  summary: string; 
  description: string; 
  url: string;
  image: string;
  modelUrl?: string;
  thumbnailImage?: string; 
  metadata?: {
    period: string;
    role: string;
    tools: string;
    status: string;
  };
  about: string;
  featuresTitle?: string;
  features: string[];
  techStack: string[];
  challenge: string;
  solution: string;
  prototypeUrl?: string; 
}

export const projectsItems: ProjectDetail[] = [
  {
    id: "proj-1",
    badge: "PROTOTYPE — FIGMA",
    title: "TrueAttribute",
    summary: "Platform AI evidence-based yang menilai kesiapan kerja mahasiswa dari portofolio dan proyek Github.",
    description: "Platform AI evidence-based yang menilai kesiapan kerja mahasiswa dari portofolio dan proyek nyata, dilengkapi analisis gap skill dan progression tier.",
    url: "#",
    image: "/projek/trueattribute-presentation.png",
    thumbnailImage: "/projek/trueattribute.png",
    metadata: {
      period: "Juli - Agustus 2026",
      role: "Product Designer",
      tools: "Figma",
      status: "Prototype"
    },
    about: "TrueAttribute adalah solusi penghubung antara mahasiswa dan dunia kerja melalui penilaian portofolio berbasis AI. Platform ini membantu mahasiswa mengetahui kesiapan kerja, kekurangan skill, serta jalur peningkatan melalui sistem tier dan readiness score.",
    features: [
      "AI Portfolio Assessment",
      "Readiness Score & Skill Gap Analysis",
      "Tier Progression (Foundation → Intermediate → Market Ready)",
      "Candidate Readiness Card",
      "Gated Job Marketplace (akses berdasarkan tier)"
    ],
    techStack: ["Figma", "UI/UX Design", "Product Strategy", "Business Model Canvas", "Prototyping"],
    challenge: "Mahasiswa kesulitan membuktikan skill ke dunia kerja karena portofolio tidak terstruktur dan tidak ada standarisasi penilaian.",
    solution: "Membuat platform yang menilai portofolio dengan AI, memberi feedback dan progress tier agar mahasiswa lebih siap dan kompetitif di dunia kerja.",
    prototypeUrl: "https://www.figma.com/proto/yhb9UYTVKM4aS32BGzu15W/SkillAttribute-Mahasiswa?node-id=1-176&p=f&t=Wx7avajhT9ujUsc8-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A176&show-proto-sidebar=1"
  },
  {
    id: "proj-2",
    badge: "WEB PROJECT",
    title: "KostCare",
    summary: "Platform manajemen kesehatan dan keuangan mahasiswa. Pantau stamina, catat pengeluaran, dan terhubung real-time.",
    description: "Platform manajemen kesehatan dan keuangan mahasiswa yang dirancang khusus untuk mempermudah kehidupan di kos.",
    url: "#",
    image: "/projek/kostcare-detail.jpg",
    thumbnailImage: "/projek/kostcare.png",
    metadata: {
      period: "Maret - Mei 2026",
      role: "Fullstack Developer",
      tools: "React Native, Laravel",
      status: "Production"
    },
    about: "KostCare adalah aplikasi terintegrasi yang membantu anak kos mengelola pengeluaran dan memantau stamina kesehatan harian mereka dengan lebih baik. Aplikasi ini juga menghubungkan orang tua dengan kondisi anak mereka di perantauan.",
    features: [
      "Pencatatan Keuangan Harian",
      "Pemantauan Stamina & Kesehatan",
      "Portal Orang Tua",
      "Notifikasi Real-time",
      "Laporan Bulanan Terpadu"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "PHP Native", "MySQL", "Bootstrap 5", "Chart.js"],
    challenge: "Banyak mahasiswa yang kesulitan mengelola keuangan dan sering mengabaikan kesehatan mereka saat tinggal di kos.",
    solution: "Menghadirkan aplikasi all-in-one yang mudah digunakan untuk tracking pengeluaran sekaligus memiliki fitur pemantauan kesehatan dasar.",
    prototypeUrl: "https://github.com/firnassw/KostCare"
  },
  {
    id: "proj-3",
    badge: "WEB PROJECT",
    title: "MedikaLab",
    summary: "Sistem informasi laboratorium berbasis web (PHP/MySQL) untuk mengelola data pasien, antrean, rekam medis.",
    description: "Aplikasi manajemen rekam medis dan data inventori pada laboratorium klinik berbasis mobile dan website.",
    url: "#",
    image: "/projek/medikalab-detail.png",
    thumbnailImage: "/projek/medikalab.png",
    metadata: {
      period: "Maret - Mei 2026",
      role: "Backend Engineer",
      tools: "Flutter, Firebase, Express",
      status: "MVP"
    },
    about: "MedikaLab memberikan solusi end-to-end untuk klinik laboratorium, mulai dari pendaftaran pasien, pencatatan hasil rekam medis, hingga manajemen stok inventori bahan-bahan laboratorium secara efisien.",
    features: [
      "Manajemen Rekam Medis Digital",
      "Sistem Antrean Real-time",
      "Manajemen Inventori & Stok Laboratorium",
      "Integrasi Hasil Tes Pasien",
      "Dashboard Admin Terpusat"
    ],
    techStack: ["HTML5", "CSS3", "PHP Native", "MySQL", "SQL", "Google Fonts", "Font Awesome", "XAMPP"],
    challenge: "Pencatatan rekam medis dan pengelolaan stok bahan kimia di laboratorium masih banyak yang dilakukan secara manual sehingga rawan kesalahan dan lambat.",
    solution: "Mendigitalisasi seluruh proses operasional laboratorium dengan sistem web responsif yang aman dan mudah dioperasikan oleh tenaga medis.",
    prototypeUrl: "https://github.com/firnassw/MedikaLab"
  },
  {
    id: "proj-quiettab",
    badge: "PROTOTYPE - 3D MODEL",
    title: "QuietTab",
    summary: "Perangkat kontrol presentasi hands-free berbasis sensor vibrasi dan Bluetooth.",
    description: "QuietTap menghadirkan cara yang praktis dan minimalis untuk berpindah slide presentasi tanpa remote. Cukup ketuk meja dua kali, sensor akan membaca getaran dan mengirim sinyal ke laptop.",
    url: "#",
    image: "/projek/quiettab.jpg",
    modelUrl: "/quiettab.glb",
    thumbnailImage: "/projek/quiettab.jpg",
    about: "QuietTap bekerja dengan cara sensor vibrasi di dalam casing mendeteksi pola getaran saat pengguna mengetuk dua kali (double tap) pada permukaan meja. Data getaran tersebut kemudian diproses oleh chip ESP32 untuk memastikan pola itu valid. Setelah itu, ESP32 akan mengirim sinyal via Bluetooth ke laptop yang sudah terhubung sehingga perintah seperti mengganti slide presentasi langsung dieksekusi. Semuanya berlangsung dalam hitungan milidetik dan didukung oleh daya dari USB-C atau baterai internal 500mAh untuk penggunaan nirkabel penuh.",
    featuresTitle: "Manfaat QuietTap",
    features: [
      "Bebas bergerak tanpa harus memegang remote atau menyentuh laptop",
      "Kontak visual lebih baik karena tangan tidak sibuk dengan alat",
      "Kontrol tanpa suara, cukup dua ketukan di meja",
      "Desain ringkas dan mudah dibawa kemana saja",
      "Pengoperasian sederhana, tanpa perlu menghafal kombinasi tombol rumit",
      "Mengurangi gangguan teknis, seperti remote yang tidak responsif atau salah pencet saat presentasi"
    ],
    techStack: ["ESP32", "Fusion 360", "KiCad", "Bluetooth LE", "Piezo Sensor", "3D Printing", "Li-Po Battery"],
    challenge: "Presenter sering kesulitan mengontrol slide tanpa harus memegang remote atau terus-menerus menyentuh laptop, sehingga gerak mereka menjadi terbatas dan kontak visual dengan audiens pun terganggu. Terdapat kebutuhan akan cara yang lebih praktis dan minimalis untuk berpindah slide.",
    solution: "Menghadirkan kontrol hands-free melalui sensor vibrasi dan Bluetooth: cukup dengan mengetuk meja dua kali, sinyal langsung terkirim ke laptop untuk menjalankan perintah seperti mengganti slide. Dengan begitu, presenter bisa tetap bergerak bebas dan fokus menjaga interaksi dengan audiens tanpa perlu memegang alat tambahan."
  }
];

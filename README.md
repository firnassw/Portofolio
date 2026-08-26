# 🚀 My Personal Portfolio Website

Website portofolio pribadi yang modern dan interaktif, dibangun menggunakan ekosistem Next.js. Repositori ini memuat *source code* utama beserta berbagai utilitas *custom scripting* untuk otomatisasi migrasi, *patching* komponen, dan optimasi build.

---

## 🛠️ Tech Stack & Configuration

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Language:** TypeScript (`tsconfig.json`) / JavaScript
* **Styling:** Tailwind CSS / PostCSS (`postcss.config.mjs`, `components.json`)
* **Linter:** ESLint (`eslint.config.mjs`)
* **SEO & Analytics:** XML Sitemap, Robots.txt, & Google Search Console Verification

---

## 📁 Project Structure

Struktur direktori dirancang untuk memisahkan antara kode utama aplikasi (`src`), aset publik (`public`), versi *legacy* (`old-version`), dan kumpulan skrip utilitas di *root*.

```text
portofolio/
├── src/                # Direktori utama aplikasi Next.js (App Router, Components, dll.)
├── public/             # Aset statis (gambar, font, dll.)
├── old-version/        # Arsip versi portofolio sebelumnya
├── .next/              # Hasil kompilasi build Next.js (ter-generate otomatis)
├── node_modules/       # Dependensi proyek
│
# --- ⚙️ CONFIGURATION & SEO ---
├── next.config.js      # Konfigurasi Next.js
├── tsconfig.json       # Konfigurasi TypeScript
├── postcss.config.mjs  # Konfigurasi PostCSS (Tailwind)
├── components.json     # Konfigurasi UI Components (e.g., shadcn/ui)
├── sitemap.xml         # Peta situs untuk optimasi mesin pencari (SEO)
├── robots.txt          # Aturan crawling untuk mesin pencari
├── googlea56...html    # File verifikasi kepemilikan Google Search Console
│
# --- 🛠️ AUTOMATION & PATCH SCRIPTS ---
# Kumpulan skrip khusus untuk membersihkan, memperbaiki, dan memodifikasi
# kode secara otomatis (biasanya dijalankan sebelum atau saat proses build).
├── fix-*.js            # (e.g., fix-br.js, fix-ts.js, fix-build.js, fix-styles.js)
├── patch-*.js          # (e.g., patch-images.js, patch-logic.js, patch-gallery.js)
├── migrate.js          # Skrip utilitas untuk migrasi data/kode
├── inject-scripts.js   # Skrip untuk menyisipkan logic tertentu ke dalam komponen
└── replace-sections.js # Skrip utilitas untuk modifikasi batch pada section UI

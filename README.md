<div align="center">

  # Wahid Firnas Atsal — Personal Portfolio

  <p align="center">
    <strong>A high-performance, modern, and interactive portfolio crafted with Next.js 16, React 19, Tailwind CSS, and 3D web experiences.</strong>
  </p>

  <p align="center">
    <a href="https://wahid-firnas.netlify.app" target="_blank">
      <img src="https://img.shields.io/badge/Live_Demo-wahid--firnas.netlify.app-0078D4?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js_16-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-black?style=flat-square&logo=framer&logoColor=blue" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/3D_Model_Viewer-FF6F00?style=flat-square&logo=google&logoColor=white" alt="Model Viewer" />
    <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="License" />
  </p>

  ---

  [Live Demo](https://wahid-firnas.netlify.app) • [Projects](#featured-projects) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Contact](#contact)

</div>

<br />

## Overview

This repository hosts the source code for the personal portfolio of **Wahid Firnas Atsal** — an Information Systems student, UI/UX Designer, and Frontend Developer passionate about bridging the gap between intuitive user experiences and performant code.

Designed with a strong focus on aesthetics, smooth micro-interactions, responsive design, and modern web technologies including **Next.js 16 (App Router + Turbopack)**, **Tailwind CSS v4**, and **Interactive 3D Hardware Visualizations**.

---

## Key Features

- **Modern Architecture**: Powered by Next.js 16 (App Router) and React 19 for instantaneous page loads and optimal SEO.
- **Fluid Micro-Interactions**: Smooth animations, layout shifts, magnetic tabs, and interactive hover cards powered by **Framer Motion**.
- **Interactive 3D Hardware Showcase**: Integrated Google `@google/model-viewer` with Draco 3D compression, allowing visitors to inspect hardware prototypes directly in the browser.
- **Mobile-First & Responsive**: Layout tailored for smartphones, tablets, and desktop displays.
- **Dynamic Theme Switching**: Light and dark mode support with persistent state handling.
- **GitHub Stats Integration**: Live integration of GitHub streak counters, top languages breakdown, and contribution visualization.
- **SEO & Accessibility Ready**: Complete JSON-LD Schema markup, canonical metadata, OpenGraph cards, dynamic sitemap, and semantic HTML structure.

---

## Tech Stack

### Core Framework & Languages
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

### Styling & UI Components
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Component Primitives**: [Radix UI](https://www.radix-ui.com/), [shadcn/ui](https://ui.shadcn.com/), [Base UI](https://base-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousels**: [Embla Carousel](https://www.embla-carousel.com/)

### 3D & Animations
- **Motion & Transitions**: [Framer Motion](https://www.framer.com/motion/)
- **3D Rendering**: [@google/model-viewer](https://modelviewer.dev/) (with Draco decoder)

### Tooling & Optimization
- **Linting & Code Quality**: ESLint 9
- **Asset Optimization**: Imagemin (WebP, MozJPEG, Pngquant)

---

## Project Structure

```plaintext
Portofolio/
├── public/                 # Static assets (images, 3D Draco models, icons)
│   ├── kompresi/           # Compressed 3D GLB models
│   ├── projek/             # Project screenshots & thumbnails
│   └── sertifikat/         # Certificate images
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # Root layout, fonts, and global metadata
│   │   ├── page.tsx        # Main portfolio homepage
│   │   ├── globals.css     # Global theme tokens and typography
│   │   ├── project/[id]/   # Dynamic project showcase detail pages
│   │   ├── robots.ts       # Dynamic robots.txt generation
│   │   └── sitemap.ts      # Dynamic XML sitemap generator
│   ├── components/         # Modular React components
│   │   ├── blocks/         # High-level compound sections (Gallery, etc.)
│   │   └── ui/             # Reusable UI primitives (Tabs, Buttons, 3D Viewer)
│   ├── data/               # Structured content (projects, achievements, skills)
│   └── lib/                # Shared utilities & helpers (cn, formatting)
├── scripts/                # Asset optimization & utility scripts
├── next.config.ts          # Next.js build & security configuration
└── package.json            # Dependencies and npm scripts
```

---

## Featured Projects

| Project | Role / Type | Description | Preview |
|---|---|---|---|
| **TrueAttribute** | Product Designer / Prototype | AI evidence-based platform assessing student job readiness from portfolios & GitHub projects. | [Figma Prototype](https://www.figma.com/proto/yhb9UYTVKM4aS32BGzu15W/SkillAttribute-Mahasiswa) |
| **Student Command Center** | Fullstack Developer | Comprehensive academic management dashboard for assignments, schedules, and materials. | [Live Demo](https://student-commad-center.netlify.app/) |
| **QuietTap** | IoT / 3D Hardware Prototype | Hands-free presentation controller using vibration sensors, ESP32, and Bluetooth LE. | Interactive 3D Model |
| **KostCare** | Fullstack Developer | Integrated student health and expense tracking web platform. | [Live Demo](https://kostcare.gt.tc/?i=1) |
| **MedikaLab** | Fullstack / Backend | Laboratory information and medical records management system. | [Live Demo](https://medikalab.site.je/index.php) |

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (`v18.18.0` or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### 1. Clone the Repository

```bash
git clone https://github.com/firnassw/Portofolio.git
cd Portofolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js local development server with Turbopack |
| `npm run build` | Compiles and optimizes the project for production deployment |
| `npm run start` | Runs the production build server locally |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |
| `npm run compress-images` | Optimizes project media assets using Imagemin |

---

## Contact

Feel free to reach out for collaborations, project inquiries, or networking:

- **Portfolio**: [wahid-firnas.netlify.app](https://wahid-firnas.netlify.app)
- **LinkedIn**: [linkedin.com/in/wahid-firnas](https://www.linkedin.com/in/wahid-firnas/)
- **GitHub**: [@firnassw](https://github.com/firnassw)
- **Email**: [firnaswahid@gmail.com](mailto:firnaswahid@gmail.com) • [wahidfirnas7@gmail.com](mailto:wahidfirnas7@gmail.com)
- **Instagram**: [@f.rnass](https://instagram.com/f.rnass)

---

<div align="center">

  Designed and built by **Wahid Firnas Atsal**  
  © 2026 All rights reserved. Distributed under the [MIT License](LICENSE).

</div>

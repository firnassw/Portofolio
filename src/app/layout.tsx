 
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wahid-firnas.netlify.app'),
  title: "Portofolio Wahid Firnas Atsal | UI/UX Designer & Frontend Developer",
  description: "Portofolio profesional Wahid Firnas Atsal, menampilkan keahlian dan proyek-proyek inovatif di bidang desain UI/UX, pengembangan web (frontend), analisis sistem, serta implementasi 3D interaktif.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Portofolio Wahid Firnas",
    description: "Lihat proyek, sertifikat, dan keahlian UI/UX & web development.",
    url: "https://wahid-firnas.netlify.app",
    siteName: "Wahid Firnas Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Foto profil Wahid Firnas",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio Wahid Firnas Atsal | UI/UX Designer & Frontend Developer",
  alternates: {
    canonical: "/",
  },
    description: "Portofolio profesional Wahid Firnas Atsal, menampilkan keahlian dan proyek-proyek inovatif di bidang desain UI/UX, pengembangan web (frontend), analisis sistem, serta implementasi 3D interaktif.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" sizes="333x333" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased page-loaded">
        {children}
      </body>
    </html>
  );
}

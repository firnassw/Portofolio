
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Gallery6 } from "@/components/blocks/gallery6";
import DiscreteTabs from "@/components/ui/discrete-tab";
import { ContactCard } from "@/components/ui/contact-card";
import { AnimatedSocialIcons } from "@/components/ui/floating-action-button";
import { Code, Award, Trophy, Mail } from "lucide-react";
import { projectsItems } from "@/data/projects";


const projekItems = [
  {
    "id": "projek-1",
    "title": "KostCare : Aplikasi Manajemen Pengelola Kos",
    "summary": "Kostcare adalah sebuah aplikasi berbasis mobile dan website yang membantu pengguna/pemilik Kos untuk memanagement kos miliknya. Aplikasi ini dibangun dengan menggunakan React Native dan Laravel.",
    "url": "#",
    "image": "/img/projek/kostcare.png"
  },
  {
    "id": "projek-2",
    "title": "MedikaLab : Aplikasi Manajemen Inventori dan Pasien Pada Laboratorium",
    "summary": "MedikaLab merupakan sebuah aplikasi manajemen rekam medis dan data inventori pada laboratorium klinik berbasis mobile dan website. Aplikasi ini dibangun dengan menggunakan framework Flutter, Firebase, dan Express.js.",
    "url": "#",
    "image": "/img/projek/medikalab.png"
  },
  {
    "id": "projek-3",
    "title": "TrueAttribute",
    "summary": "A web platform to manage and track true attributes for various digital assets, built with modern web technologies.",
    "url": "#",
    "image": "/img/projek/trueattribute.png"
  }
];
const sertifikatItems = [
  {
    "id": "cert-1",
    "title": "IBM: Introduction to Data Analytics",
    "summary": "IBM • Jul 2024 • ID: 7NNS2XSQS6L2",
    "url": "https://www.coursera.org/account/accomplishments/verify/7NNS2XSQS6L2",
    "image": "/img/Sertifikat/ibm1.png"
  },
  {
    "id": "cert-2",
    "title": "Google: Foundations of User Experience (UX) Design",
    "summary": "Google • Jul 2024 • ID: PM6GSS4KXYF2",
    "url": "https://www.coursera.org/account/accomplishments/verify/PM6GSS4KXYF2",
    "image": "/img/Sertifikat/google.png"
  },
  {
    "id": "cert-3",
    "title": "Alibaba Cloud: ACA Cloud Computing Certification",
    "summary": "Alibaba Cloud • Sep 2023",
    "url": "https://xue.aliyun.com/certificate/certification/B3DA0C8158F24623BA77CA7A685DCA53",
    "image": "/img/Sertifikat/alibaba.png"
  },
  {
    "id": "cert-4",
    "title": "Telkom Indonesia: UI/UX Design MSIB Batch 5",
    "summary": "Yayasan Pendidikan Telkom • Des 2023",
    "url": "#",
    "image": "/img/Sertifikat/msib.png"
  },
  {
    "id": "cert-5",
    "title": "Skilvul: UI/UX Design Mastery",
    "summary": "Skilvul • Okt 2023",
    "url": "https://skilvul.com/courses/uiux-design-mastery/student/wahid_r6t4",
    "image": "/img/Sertifikat/skillvul.png"
  }
];



const certsItems = [
  {
    id: "cert-1",
    title: "Intro to Software Engineering",
    issuer: "RevoU",
    year: "2026",
    credentialId: "CCSE 230226-01-1-00073",
    url: "https://drive.google.com/file/d/1zfcwK4ZSKGUYXQYx2OqVi6Tbuk2I60SU/view",
    image: "/sertifikat/sertifikat-revou.jpg",
  },
  {
    id: "cert-2",
    title: "Learn SQL Basics for Data Science",
    issuer: "University of California, Davis",
    year: "2026",
    credentialId: "T44190JHUQAU",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/T44190JHUQAU",
    coursesUrl: "https://drive.google.com/file/d/1hwUOr38N77_jvICTc_DpJ2Xa166dbFy_/view",
    image: "/sertifikat/sertifikat-sql.jpg",
  },
  {
    id: "cert-3",
    title: "Google AI Professional Certificate",
    issuer: "Google",
    year: "2026",
    credentialId: "ZX66UYP1FBHJ",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/ZX66UYP1FBHJ",
    coursesUrl: "https://drive.google.com/file/d/1DKK4ES8R03UsKCEXKCFfqvsEakh2Md0J/view",
    image: "/sertifikat/sertifikat-google.jpg",
  },
  {
    id: "cert-4",
    title: "Generative AI for Business Analysts",
    issuer: "Vanderbilt University",
    year: "2026",
    credentialId: "DACMJCVVSAU0",
    url: "https://www.coursera.org/account/accomplishments/specialization/DACMJCVVSAU0",
    coursesUrl: "https://drive.google.com/file/d/1afWpGpnK5vwh2K9LLcE_Oiq5P9LVNEd-/view",
    image: "/sertifikat/coursera generative ai for business analysts.jpg",
  },
  {
    id: "cert-5",
    title: "Microsoft Business Analyst Professional Certificate",
    issuer: "Microsoft",
    year: "2026",
    credentialId: "K1T0U2E21NRR",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/K1T0U2E21NRR",
    coursesUrl: "https://drive.google.com/file/d/1vwIB4G_rcsj7CyWnTo9NVa6RZG8MSD9R/view",
    image: "/sertifikat/coursera microsoft business analyst.jpg",
  },
  {
    id: "cert-6",
    title: "Microsoft Foundations of IT Systems, Networking, and Data Protection",
    issuer: "Microsoft",
    year: "2026",
    credentialId: "HIQFV1RINKY1",
    url: "https://www.coursera.org/account/accomplishments/specialization/HIQFV1RINKY1",
    coursesUrl: "https://drive.google.com/file/d/1MvMBv3eP-4NzBQATvMVWG6eGkQdvhcSX/view",
    image: "/sertifikat/coursera microsoft foundations of it systems, networking, and data protection.jpg",
  },
  {
    id: "cert-7",
    title: "Introduction to Software Engineering",
    issuer: "IBM",
    year: "2026",
    credentialId: "3HM6O1B7AFW3",
    url: "https://www.coursera.org/account/accomplishments/verify/3HM6O1B7AFW3",
    image: "/sertifikat/coursera introduction to software engineering.jpg",
  },
  {
    id: "cert-8",
    title: "Introduction to Business Analysis",
    issuer: "LinkedIn Learning",
    year: "2026",
    credentialId: "81e81652ab94c61f998e15ef30930926dabfc1e521de768c79faaabb5420edbb",
    url: "https://www.linkedin.com/learning/certificates/81e81652ab94c61f998e15ef30930926dabfc1e521de768c79faaabb5420edbb?trk=share_certificate",
    image: "/sertifikat/sertifikat-business-analysis.jpg",
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
];

const glowMenuItems = [
  {
    icon: Code,
    label: "Projects",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: Award,
    label: "Certificates",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: Trophy,
    label: "Lomba",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  }
];

const GithubIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const aboutSocialIcons = [
  { Icon: GithubIcon, href: "https://github.com/firnassw" },
  { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/wahid-firnas/" },
  { Icon: Mail, href: "mailto:wahidfirnas7@gmail.com" },
  { Icon: InstagramIcon, href: "https://instagram.com/f.rnass" }
];

export default function Home() {
    const [activeTab, setActiveTab] = useState<string>("Projects");

    useEffect(() => {
      
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 50);
    }, [activeTab]);

    useEffect(() => {
    
    document.body.classList.add('page-loaded');

    const hasVisited = sessionStorage.getItem('hasVisited');
    const preloader = document.getElementById('preloader');
    
    if (preloader) {
      if (hasVisited) {
        
        preloader.style.display = 'none';
      } else {
        
        sessionStorage.setItem('hasVisited', 'true');
        setTimeout(() => {
          preloader.classList.add('hidden');
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 800);
        }, 500); 
      }
    }

    const root = document.documentElement;

    const themeCheckbox = document.getElementById('theme-checkbox');
    if (themeCheckbox) {
      themeCheckbox.onchange = (e) => {
        if ((e.target as HTMLInputElement).checked) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      };
    }

    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    function closeMenu() {
      if(mobileNav) mobileNav.classList.remove('open');
      if(menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Buka menu');
      }
    }
    function openMenu() {
      if(mobileNav) mobileNav.classList.add('open');
      if(menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.setAttribute('aria-label', 'Tutup menu');
      }
    }

    if (menuToggle && mobileNav) {
      menuToggle.addEventListener('click', () => {
        const isOpen = mobileNav.classList.contains('open');
        isOpen ? closeMenu() : openMenu();
      });

      mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
      });
    }

    const reveals = document.querySelectorAll('[data-reveal]');
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('in-view');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    const fmBox = document.getElementById('fm-box');
    const fmToggle = document.getElementById('fm-toggle');
    
    
    if (fmToggle && fmBox) {
      fmToggle.onclick = (e) => {
        e.stopPropagation();
        fmBox.classList.toggle('is-open');
      };
    }

    
    const fmLinks = document.querySelectorAll('.fm-link');
    fmLinks.forEach(link => {
      const text = link.getAttribute('data-text');
      if (!text) return;

      let wrap = link.querySelector('.fm-text-wrap');
      
      if (!wrap) {
         wrap = document.createElement('span');
         wrap.className = 'fm-text-wrap';
         link.innerHTML = '';
         link.appendChild(wrap);
      } else {
         wrap.innerHTML = '';
      }
      
      const chars = text.split('');
      const charElements: HTMLElement[] = [];
      
      chars.forEach((char, i) => {
        const charSpan = document.createElement('span');
        charSpan.className = 'fm-char';
        
        const innerSpan = document.createElement('span');
        innerSpan.className = 'fm-char-inner';
        
        const topSpan = document.createElement('span');
        topSpan.className = 'fm-char-span';
        topSpan.textContent = char;
        
        const bottomSpan = document.createElement('span');
        bottomSpan.className = 'fm-char-span';
        bottomSpan.textContent = char;
        bottomSpan.setAttribute('aria-hidden', 'true');
        
        innerSpan.appendChild(topSpan);
        innerSpan.appendChild(bottomSpan);
        charSpan.appendChild(innerSpan);
        wrap?.appendChild(charSpan);
        
        charElements.push(innerSpan);
      });
  
      
      let animating = false;
      let pendingLeave = false;
      const lockDuration = 30 * chars.length + 300;
  
      link.addEventListener('mouseenter', () => {
        pendingLeave = false;
        if (animating) return;
        animating = true;
        
        charElements.forEach((el, i) => {
          el.style.transitionDuration = '800ms';
          el.style.transitionDelay = (30 * i) + 'ms';
          el.classList.add('hovered');
        });
  
        setTimeout(() => {
          animating = false;
          if (pendingLeave) {
            pendingLeave = false;
            charElements.forEach(el => {
              el.classList.remove('hovered');
            });
          }
        }, lockDuration);
      });
  
      link.addEventListener('mouseleave', () => {
        if (animating) {
          pendingLeave = true;
        } else {
          charElements.forEach(el => {
            el.classList.remove('hovered');
          });
        }
      });
      
      
      link.addEventListener('click', () => {
        if (fmBox) fmBox.classList.remove('is-open');
      });
    });

    
    if (fmBox) {
      fmBox.onclick = (e) => {
        if (!fmBox.classList.contains('is-open')) {
          fmBox.classList.add('is-open');
        }
      };
    }
    
    
    const mousedownListener = (e: MouseEvent) => {
      if (fmBox && fmBox.classList.contains('is-open') && !fmBox.contains(e.target as Node) && fmToggle && !fmToggle.contains(e.target as Node)) {
        fmBox.classList.remove('is-open');
      }
    };
    document.removeEventListener('mousedown', mousedownListener);
    document.addEventListener('mousedown', mousedownListener);


    const blurChars = document.querySelectorAll('.blur-text-char') as NodeListOf<HTMLElement>;
    const blurWords = document.querySelectorAll('.blur-text-word span') as NodeListOf<HTMLElement>;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.filter = 'blur(0px)';
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    blurChars.forEach((el, i) => {
      el.style.transitionDelay = (i * 50) + 'ms';
      observer.observe(el);
    });

    blurWords.forEach((el, i) => {
      el.style.transitionDelay = (i * 150) + 'ms';
      observer.observe(el);
    });

    
    const PROXIMITY = 64;
    const INACTIVE_ZONE = 0.01;
  
    let animationFrameId: number | null = null;
    let lastMouseX = 0;
    let lastMouseY = 0;
  
    const updateGlows = () => {
      const wrappers = document.querySelectorAll('.glow-wrapper');
      if (!wrappers.length) return;
  
      let needsUpdate = false;
  
      wrappers.forEach((wrapper) => {
        const el = wrapper as HTMLElement;
        const rect = el.getBoundingClientRect();
        const center = [rect.left + rect.width * 0.5, rect.top + rect.height * 0.5];
        const distanceFromCenter = Math.hypot(lastMouseX - center[0], lastMouseY - center[1]);
        const inactiveRadius = 0.5 * Math.min(rect.width, rect.height) * INACTIVE_ZONE;
  
        if (distanceFromCenter < inactiveRadius) {
          el.style.setProperty("--active", "0");
          return;
        }
  
        const isActive =
          lastMouseX > rect.left - PROXIMITY &&
          lastMouseX < rect.right + PROXIMITY &&
          lastMouseY > rect.top - PROXIMITY &&
          lastMouseY < rect.bottom + PROXIMITY;
  
        el.style.setProperty("--active", isActive ? "1" : "0");
  
        if (isActive) {
          needsUpdate = true;
          const currentAngle = parseFloat(el.style.getPropertyValue("--start")) || 0;
          let targetAngle = (180 * Math.atan2(lastMouseY - center[1], lastMouseX - center[0])) / Math.PI + 90;
  
          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          
          
          const smoothedAngle = currentAngle + angleDiff * 0.15;
          el.style.setProperty("--start", String(smoothedAngle));
        }
      });
  
      if (needsUpdate) {
        animationFrameId = requestAnimationFrame(updateGlows);
      } else {
        animationFrameId = null;
      }
    };
  
    const handleMoveOrScroll = (e: Event) => {
      if (e && e.type === 'pointermove') {
        lastMouseX = (e as PointerEvent).clientX;
        lastMouseY = (e as PointerEvent).clientY;
      }
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateGlows);
      }
    };
  
    document.addEventListener('pointermove', handleMoveOrScroll);
    window.addEventListener('scroll', handleMoveOrScroll, { passive: true });


    (window as any).openSkillsModal = function(title: string, skills: string[]) {
      const modal = document.getElementById('skillsModal');
      const titleEl = document.getElementById('skillsModalTitle');
      const listEl = document.getElementById('skillsModalList');
      
      if (modal && titleEl && listEl) {
        titleEl.textContent = `Skills for ${title}`;
        listEl.innerHTML = '';
        
        skills.forEach(skill => {
          const li = document.createElement('li');
          li.innerHTML = `<span class="material-symbols-outlined skill-icon">check_circle</span> <span class="skill-name">${skill}</span>`;
          listEl.appendChild(li);
        });
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    };

    (window as any).closeSkillsModal = function() {
      const modal = document.getElementById('skillsModal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    };

    
    const modalClickListener = (e: MouseEvent) => {
      const modal = document.getElementById('skillsModal');
      if (e.target === modal) {
        (window as any).closeSkillsModal();
      }
    };
    window.addEventListener('click', modalClickListener);

    
    const modalKeydownListener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        (window as any).closeSkillsModal();
      }
    };
    window.addEventListener('keydown', modalKeydownListener);

    
    setTimeout(() => {
      blurChars.forEach((el) => {
        el.style.filter = 'blur(0px)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
      blurWords.forEach((el) => {
        el.style.filter = 'blur(0px)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
      reveals.forEach((reveal) => {
        reveal.classList.add('in-view');
      });
    }, 1500);

    


  return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };

    return () => {
      document.removeEventListener('pointermove', handleMoveOrScroll);
      window.removeEventListener('scroll', handleMoveOrScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      
  <div id="preloader" className="preloader">
    <video src="./logo/preloader.mp4" autoPlay loop muted playsInline className="preloader-video"></video>
  </div>
  <a className="skip-link" href="#main">Langsung ke konten</a>

  <header className="site-header" id="site-header">
    <div className="header-inner">
      <a href="#top" className="brand">
        <img src="./logo/logo.png" alt="WF Logo" className="brand-logo" />
      </a>

      <label className="theme-switch" id="theme-switch-label">
        <input type="checkbox" id="theme-checkbox" className="theme-switch__checkbox" />
        <div className="theme-switch__container">
          <div className="theme-switch__clouds"></div>
          <div className="theme-switch__stars-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z"
                fill="currentColor" />
            </svg>
          </div>
          <div className="theme-switch__circle-container">
            <div className="theme-switch__sun-moon-container">
              <div className="theme-switch__moon">
                <div className="theme-switch__spot"></div>
                <div className="theme-switch__spot"></div>
                <div className="theme-switch__spot"></div>
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  </header>

  <div id="top"></div>

  <main id="main">
    <h1 className="sr-only">Wahid Firnas Atsal</h1>

    <section className="hero hero-centered">

      <div className="hero-name-container">
        <div className="blur-text-line">
          <span className="blur-text-char">W</span>
          <span className="blur-text-char">A</span>
          <span className="blur-text-char">H</span>
          <span className="blur-text-char">I</span>
          <span className="blur-text-char">D</span>
        </div>
        <div className="blur-text-line">
          <span className="blur-text-char">F</span>
          <span className="blur-text-char">I</span>
          <span className="blur-text-char">R</span>
          <span className="blur-text-char">N</span>
          <span className="blur-text-char">A</span>
          <span className="blur-text-char">S</span>
        </div>

        <div className="hero-floating-avatar">
          <img src="./logo/foto kecil.png" alt="Profile" loading="lazy" />
        </div>
      </div>

      <div className="hero-tagline-wrapper">
        <p className="hero-tagline blur-text-word">
          <span>Designing</span>&nbsp;
          <span>human</span>&nbsp;
          <span>experiences</span>&nbsp;
          <span>in</span>&nbsp;
          <span>code.</span>
        </p>
      </div>

      <a href="#about" className="hero-scroll-btn" aria-label="Scroll down">
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </a>
    </section>

    <section className="section section-tint" id="about">
      <div className="section-inner">
        <div className="about-photo-wrapper">
          <div className="about-photo glass-card" data-reveal>
            <img src="./logo/foto besar.jpeg" alt="Foto profil" loading="lazy" />
          </div>
          <div className="floating-badge badge-tr" data-reveal>
            IS &bull; UPN Veteran YK
          </div>
          <div className="floating-badge badge-bl" data-reveal>
            <div className="badge-dot"></div>
            <div className="badge-text">
              <strong>Open to Collaborate</strong>
              <span>Yogyakarta, Indonesia</span>
            </div>
          </div>
        </div>

        <div className="about-content" data-reveal>
          <h2 className="section-title">About Me</h2>
          <div className="title-rule"></div>
          <div className="section-text flex flex-col gap-4">
            <p>
              Hi, I’m Wahid — a Information Systems student who’s interested in how technology can be turned into useful and meaningful solutions.
            </p>
            <p>
              I’m currently exploring UI/UX, Web Development, and Business Analysis, while working on different projects to improve my skills and understand what I enjoy most. I like learning by building, experimenting, and improving things step by step.
            </p>
            <p>
              I’m still growing and figuring out my direction, but I’m always open to new experiences, ideas, and opportunities to learn.
            </p>
            
            <div className="mt-4">
              <AnimatedSocialIcons icons={aboutSocialIcons} iconSize={20} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-[1200px] mx-auto mt-8 px-4 md:px-8">
        <div className="marquee-wrapper">
          <div className="marquee-content animate-marquee">
            {[...Array(2)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {[...Array(4)].map((_, repeatIndex) => (
                  <React.Fragment key={`repeat-${repeatIndex}`}>
                    <div className="about-card glass-card" aria-hidden={setIndex === 1}>
                      <span className="material-symbols-outlined">design_services</span>
                      <span>UI/UX Design</span>
                    </div>
                    <div className="about-card glass-card" aria-hidden={setIndex === 1}>
                      <span className="material-symbols-outlined">code</span>
                      <span>Web Development</span>
                    </div>
                    <div className="about-card glass-card" aria-hidden={setIndex === 1}>
                      <span className="material-symbols-outlined">analytics</span>
                      <span>System Analysis</span>
                    </div>
                    <div className="about-card glass-card" aria-hidden={setIndex === 1}>
                      <span className="material-symbols-outlined">school</span>
                      <span>Continuous Learning</span>
                    </div>
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section" id="skills">
      <div className="section-inner" style={{ "maxWidth": "1200px", "margin": "0 auto", "padding": "4rem 20px" } as React.CSSProperties}>
        <div className="section-head-center" data-reveal style={{ "textAlign": "center", "marginBottom": "3rem" } as React.CSSProperties}>
          <h2 className="section-title"
            style={{ "fontSize": "2.5rem", "color": "var(--color-on-surface)", "marginBottom": "1rem", "fontWeight": "700", "fontFamily": "'Space Grotesk', sans-serif" } as React.CSSProperties}>
            Creative & Tech Stack</h2>
          <div className="title-rule-center"
            style={{ "width": "50px", "height": "3px", "background": "#8B5CF6", "borderRadius": "2px", "margin": "0 auto" } as React.CSSProperties}></div>
        </div>

        <div className="tech-stack-grid" data-reveal>
          <div className="tech-card" style={{ "--brand-color": "#E34F26" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>html</span></div>
            <div className="tech-title">HTML5</div>
            <div className="tech-subtitle">FRONTEND</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#1572B6" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>css</span></div>
            <div className="tech-title">CSS3</div>
            <div className="tech-subtitle">FRONTEND</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#F7DF1E" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>javascript</span></div>
            <div className="tech-title">JavaScript</div>
            <div className="tech-subtitle">FRONTEND</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#7952B3" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>view_quilt</span></div>
            <div className="tech-title">Bootstrap</div>
            <div className="tech-subtitle">CSS FRAMEWORK</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#777BB4" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>php</span></div>
            <div className="tech-title">PHP</div>
            <div className="tech-subtitle">BACKEND</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#FF2D20" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>diamond</span></div>
            <div className="tech-title">Laravel</div>
            <div className="tech-subtitle">WEB FRAMEWORK</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#00E676" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>api</span></div>
            <div className="tech-title">REST API</div>
            <div className="tech-subtitle">WEB SERVICE</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#4479A1" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>dns</span></div>
            <div className="tech-title">MySQL</div>
            <div className="tech-subtitle">DATABASE</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#F29111" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>database</span></div>
            <div className="tech-title">SQL</div>
            <div className="tech-subtitle">DATABASE</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#F2C811" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>bar_chart</span></div>
            <div className="tech-title">Power BI</div>
            <div className="tech-subtitle">DATA ANALYTICS</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#0078D4" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>account_tree</span></div>
            <div className="tech-title">Power Automate</div>
            <div className="tech-subtitle">WORKFLOW</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#742774" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>app_shortcut</span></div>
            <div className="tech-title">Power Apps</div>
            <div className="tech-subtitle">LOW CODE APP</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#217346" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>table_view</span></div>
            <div className="tech-title">Microsoft Excel</div>
            <div className="tech-subtitle">SPREADSHEET</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#F24E1E" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>draw</span></div>
            <div className="tech-title">Figma</div>
            <div className="tech-subtitle">UI/UX DESIGN</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#F05032" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>alt_route</span></div>
            <div className="tech-title">Git</div>
            <div className="tech-subtitle">VERSION CONTROL</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#181717" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>hub</span></div>
            <div className="tech-title">GitHub</div>
            <div className="tech-subtitle">VERSION CONTROL</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#007ACC" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>code</span></div>
            <div className="tech-title">VS Code</div>
            <div className="tech-subtitle">CODE EDITOR</div>
          </div>
          <div className="tech-card" style={{ "--brand-color": "#FF6C37" } as React.CSSProperties}>
            <div className="tech-icon"><span className="material-symbols-outlined"
                style={{ "color": "var(--brand-color)", "fontSize": "32px" } as React.CSSProperties}>send</span></div>
            <div className="tech-title">Postman</div>
            <div className="tech-subtitle">API TESTING</div>
          </div>
        </div>

      </div>
    </section>

    <section className="section section-tint" id="experience">
      <div className="section-inner">
        <div className="section-head-left" data-reveal>
          <h2 className="section-title">Experience &amp; Education</h2>
          <div className="title-rule-left"></div>
          <p className="section-desc">The educational journey that has shaped me.</p>
        </div>

        <ol className="timeline">
          <li className="timeline-item" data-reveal>
            <div className="timeline-logo-wrap">
              <img src="./logo/upn-logo.png" alt="UPN Logo" />
            </div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-content-head">
                <span className="timeline-date date-green"><span className="material-symbols-outlined">school</span> 2025
                  &ndash; SEKARANG</span>
                <span className="timeline-building date-green"><span
                    className="material-symbols-outlined">account_balance</span></span>
              </div>
              <h3 className="timeline-title">Universitas Pembangunan Nasional Veteran Yogyakarta</h3>
              <p className="timeline-degree"><span className="material-symbols-outlined">menu_book</span> Bachelor of Computer
                Science, Information Systems</p>
              <hr className="timeline-divider" />
              <p className="timeline-skills"><span className="material-symbols-outlined star-icon"
                  style={{ color: "#0E7D6A" }}>star</span> <strong>Skills:</strong> Analytical Skills, Information Systems,
                <span className="skills-more-link" onClick={() => (window as any).openSkillsModal('Universitas Pembangunan Nasional Veteran Yogyakarta', ['Analytical Skills', 'Information Systems', 'MySQL', 'PHP', 'C++', 'SQL', 'Website Building', 'HTML', 'JavaScript', 'Databases', 'Web Development', 'Cascading Style Sheets (CSS)'])}>+10 skills</span></p>
            </div>
          </li>

          <li className="timeline-item" data-reveal>
            <div className="timeline-logo-wrap">
              <img src="https://upload.wikimedia.org/wikipedia/id/a/a4/SMA_Negeri_9_Yogyakarta.png" alt="SMA N 9 Logo" />
            </div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-content-head">
                <span className="timeline-date date-blue"><span className="material-symbols-outlined">school</span> 2022 &ndash;
                  2025</span>
                <span className="timeline-building date-blue"><span
                    className="material-symbols-outlined">account_balance</span></span>
              </div>
              <h3 className="timeline-title">SMA Negeri 9 Yogyakarta</h3>
              <p className="timeline-degree"><span className="material-symbols-outlined">menu_book</span> Informatics</p>
              <hr className="timeline-divider" />
              <p className="timeline-skills"><span className="material-symbols-outlined star-icon"
                  style={{ color: "#3B5CD7" }}>star</span> <strong>Skills:</strong> Analytical Skills, MySQL, 
                <span className="skills-more-link" onClick={() => (window as any).openSkillsModal('SMA Negeri 9 Yogyakarta', ['Analytical Skills', 'MySQL', 'PHP', 'Website Building', 'HTML', 'Web Development', 'Cascading Style Sheets (CSS)'])}>+5 skills</span></p>
            </div>
          </li>

          <li className="timeline-item" data-reveal>
            <div className="timeline-logo-wrap">
              <img src="https://mediascanter.id/wp-content/uploads/2026/03/pawitikra.png" alt="SMP N 5 Logo" />
            </div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-content-head">
                <span className="timeline-date date-purple"><span className="material-symbols-outlined">school</span> 2019
                  &ndash; 2022</span>
                <span className="timeline-building date-purple"><span
                    className="material-symbols-outlined">account_balance</span></span>
              </div>
              <h3 className="timeline-title">SMP Negeri 5 Yogyakarta</h3>
              <p className="timeline-degree" style={{ display: "none" }}></p>
              <hr className="timeline-divider" />
              <p className="timeline-skills"><span className="material-symbols-outlined star-icon"
                  style={{ color: "#6D28D9" }}>star</span> <strong>Skills:</strong> Analytical Skills, Problem Solving, 
                <span className="skills-more-link" onClick={() => (window as any).openSkillsModal('SMP Negeri 5 Yogyakarta', ['Analytical Skills', 'Problem Solving', 'Teamwork', 'Self Learning'])}>+2 skills</span></p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section className="section" id="github-activity">
      <div className="section-inner">
        <div className="section-head-center" data-reveal style={{ textAlign: "center", marginBottom: "3rem" } as React.CSSProperties}>
          <h2 className="section-title" style={{ display: "inline-flex", alignItems: "center", justifyItems: "center", gap: "10px" } as React.CSSProperties}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHub Activity
          </h2>
          <p className="section-subtitle">
            A glimpse into my open-source contributions and coding activity.
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#18181B] rounded-[24px] p-6 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg w-full flex flex-col items-center">
              <h3 className="text-[18px] font-bold mb-4 self-start" style={{ color: 'var(--color-on-surface)' }}>Top Languages</h3>
              <img 
                src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=firnassw&layout=compact&theme=transparent&hide_border=true&title_color=0078D4&text_color=475569" 
                alt="Top Languages" 
                className="w-full max-w-[400px] object-contain light-img"
              />
              <img 
                src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=firnassw&layout=compact&theme=transparent&hide_border=true&title_color=3B82F6&text_color=94a3b8" 
                alt="Top Languages" 
                className="w-full max-w-[400px] object-contain dark-img"
              />
            </div>

            <div className="bg-white dark:bg-[#18181B] rounded-[24px] p-6 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg w-full flex flex-col items-center">
              <h3 className="text-[18px] font-bold mb-4 self-start" style={{ color: 'var(--color-on-surface)' }}>GitHub Streak</h3>
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=firnassw&theme=transparent&hide_border=true&title_color=0078D4&text_color=475569&icon_color=0078D4&date_format=j%20M%5B%20Y%5D" 
                alt="GitHub Streak" 
                className="w-full max-w-[550px] object-contain light-img"
              />
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=firnassw&theme=transparent&hide_border=true&title_color=3B82F6&text_color=94a3b8&icon_color=3B82F6&date_format=j%20M%5B%20Y%5D" 
                alt="GitHub Streak" 
                className="w-full max-w-[550px] object-contain dark-img"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-[#18181B] rounded-[24px] p-6 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg w-full flex flex-col">
            <h3 className="text-[18px] font-bold mb-4" style={{ color: 'var(--color-on-surface)' }}>Contribution Graph</h3>
            <div className="w-full overflow-x-auto text-center whitespace-nowrap pb-2">
              <img 
                src="https://raw.githubusercontent.com/firnassw/firnassw/output/github-contribution-grid-snake.svg" 
                alt="GitHub Contribution Snake" 
                className="inline-block min-w-[880px] w-[880px] max-w-none h-auto light-img"
              />
              <img 
                src="https://raw.githubusercontent.com/firnassw/firnassw/output/github-contribution-grid-snake-dark.svg" 
                alt="GitHub Contribution Snake" 
                className="inline-block min-w-[880px] w-[880px] max-w-none h-auto dark-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-tint" id="showcase">
      <div className="section-inner">
        <div className="section-head-center" data-reveal style={{ "textAlign": "center", "marginBottom": "2rem" } as React.CSSProperties}>
          <h2 className="section-title"
            style={{ "fontSize": "2.5rem", "color": "var(--color-on-surface)", "marginBottom": "0.5rem", "fontWeight": "700" } as React.CSSProperties}>
            Portfolio Showcase</h2>
          <p className="section-desc" style={{ "maxWidth": "600px", "margin": "0 auto", "color": "var(--color-on-surface-variant)" } as React.CSSProperties}>
            Explore my journey through projects, certifications, and competitions. Each section represents a milestone
            in my continuous learning path.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm font-medium opacity-80" style={{ color: 'var(--color-primary)' }}>
            <span className="material-symbols-outlined animate-bounce">ads_click</span>
            <span>Klik pada kartu untuk melihat detail selengkapnya</span>
          </div>
        </div>

        <div className="tab-nav-container w-full max-w-full flex justify-center mb-8 px-2" data-reveal>
          <DiscreteTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        <div className={`tab-content ${activeTab === "Projects" ? "active" : ""}`} id="tab-projects">
          <div className="projects-grid">
            {projectsItems.map((project) => (
              <Link href={`/project/${project.id}`} key={project.id} className="block group">
                <article className="portfolio-card glow-wrapper h-full transition-transform duration-300 hover:-translate-y-2">
                  <div className="glow-effect">
                    <div className="glow-border"></div>
                  </div>
                  <div className="portfolio-thumb">
                    <img src={project.thumbnailImage || project.image} alt={`${project.title} Preview`} />
                  </div>
                  <div className="portfolio-body">
                    <div className={`portfolio-badge ${project.badge.includes('WEB') ? 'badge-web' : ''}`}>
                      <span className="material-symbols-outlined">
                        {project.badge.includes('WEB') ? 'language' : 'schedule'}
                      </span> {project.badge}
                    </div>
                    <h3 className="portfolio-title">{project.title}</h3>
                    <div className="desc-wrapper">
                      <p className="portfolio-desc">{project.summary}</p>
                    </div>
                    <div className="portfolio-chips">
                      {project.techStack.slice(0, 5).map((tech, i) => (
                        <span key={i} className="chip-outline">{tech}</span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="chip-outline">+{project.techStack.length - 5}</span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        <div className={`tab-content ${activeTab === "Certificates" ? "active" : ""}`} id="tab-certificates">
          <Gallery6 heading="Certifications" items={certsItems} />
        </div>

        <div className={`tab-content ${activeTab === "Lomba" ? "active" : ""}`} id="tab-lomba">
          <Gallery6 heading="Competitions" items={lombaItems} />
        </div>
      </div>
    </section>

    <section className="section section-tint contact-hero-section" id="contact">
      <div className="section-inner contact-grid-new">
        <div className="contact-content-container w-full">
          <div className="flex items-center justify-center gap-2 px-4 py-1.5 mb-6 mx-auto w-fit rounded-full bg-[#EEF2FF] dark:bg-[#4F46E5]/10 text-[#4F46E5] dark:text-[#818cf8] text-[13px] font-semibold">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] dark:bg-[#818cf8]" />
            Let's Connect
          </div>
          <h2 className="text-[40px] md:text-[48px] font-extrabold text-center text-gray-900 dark:text-white mb-4 tracking-tight">Contact Me</h2>
          
          <ContactCard
            avatarUrl="/profile.jpg"
            name="Wahid Firnas"
            socialLinks={[
              { id: 'email', icon: Mail, label: 'Email', href: 'mailto:firnaswahid@gmail.com' },
              { id: 'github', icon: GithubIcon, label: 'GitHub', href: 'https://github.com/firnassw' },
              { id: 'linkedin', icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/wahid-firnas/' },
              { id: 'instagram', icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/firnassw/' },
            ]}
            actionButton={{
              text: 'Send a Message',
              href: 'mailto:firnaswahid@gmail.com',
              target: '_blank'
            }}
          />
        </div> 
      </div> 
    </section>

  </main>

  <footer className="site-footer section-tint" style={{ "padding": "20px var(--margin-mobile) 0" } as React.CSSProperties}>
    <div className="footer-card">
      <div className="fc-top">
        <div className="fc-col fc-left">
          <img src="./logo/logo.png" alt="WF Logo" className="fc-logo dark-invert" />
          <p className="fc-desc">Thank you for visiting my portfolio.<br />I am always open to new opportunities
            and<br />meaningful collaborations.</p>
        </div>

        <div className="fc-v-divider"></div>

        <div className="fc-col fc-middle">
          <nav className="fc-nav">
            <a href="#top">Beranda</a>
            <a href="#about">Tentang Saya</a>
            <a href="#projects">Proyek</a>
            <a href="#experience">Pengalaman</a>
            <a href="#certificates">Sertifikat &amp; Penghargaan</a>
            <a href="#contact">Kontak</a>
          </nav>
        </div>

        <div className="fc-v-divider"></div>

        <div className="fc-col fc-right">
          <div className="fc-socials">
            <a href="https://github.com/firnassw" target="_blank" aria-label="GitHub"><svg
                className="social-icon dark-invert" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg></a>
            <a href="https://www.linkedin.com/in/wahid-firnas/" target="_blank" aria-label="LinkedIn"><svg
                className="social-icon dark-invert" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg></a>
            <a href="mailto:wahidfirnas7@gmail.com" aria-label="Email"><svg className="social-icon dark-invert"
                viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg></a>
            <a href="https://instagram.com/f.rnass" target="_blank" aria-label="Instagram"><svg
                className="social-icon dark-invert" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg></a>
          </div>
        </div>
      </div>

      <div className="fc-h-divider"></div>

      <div className="fc-bottom">
        <p>&copy; 2026 Wahid Firnas Atsal. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <div className="skills-modal-overlay" id="skillsModal" aria-hidden="true">
    <div className="skills-modal-container">
      <div className="skills-modal-header">
        <h3 id="skillsModalTitle">Skills</h3>
        <button className="skills-modal-close" onClick={() => (window as any).closeSkillsModal()} aria-label="Close modal"><span className="material-symbols-outlined">close</span></button>
      </div>
      <div className="skills-modal-body">
        <ul id="skillsModalList" className="skills-list">
        </ul>
      </div>
    </div>
  </div>

  <button className="back-to-top" id="back-to-top" aria-label="Kembali ke atas">
    <span className="material-symbols-outlined">arrow_upward</span>
  </button>

  <div id="fm-container" className="fm-wrapper">
    <div className="fm-box" id="fm-box">
      <div className="fm-bg-yellow"></div>
      <div className="fm-bg-dark"></div>

      <div className="fm-bottom-bar" id="fm-toggle">
        <div className="fm-hamburger">
          <span className="fm-line fm-line-1"></span>
          <span className="fm-line fm-line-2"></span>
        </div>
      </div>

      <div className="fm-items">
        <a href="#top" className="fm-link" data-text="HOME"></a>
        <a href="#experience" className="fm-link" data-text="EXPERIENCE"></a>
        <a href="#showcase" className="fm-link" data-text="PORTFOLIO"></a>
        <a href="#contact" className="fm-link" data-text="CONTACT"></a>
      </div>
    </div>
  </div>

  

    </>
  );
}

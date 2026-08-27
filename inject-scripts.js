const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
let page = fs.readFileSync(pagePath, 'utf8');

const newUseEffect = `  useEffect(() => {
    
    document.body.classList.add('page-loaded');

    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 800);
      }, 500); 
    }

    const root = document.documentElement;

    const themeCheckbox = document.getElementById('theme-checkbox');
    if (themeCheckbox) {
      themeCheckbox.addEventListener('change', (e) => {
        if ((e.target as HTMLInputElement).checked) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      });
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
      fmToggle.addEventListener('click', () => {
        fmBox.classList.toggle('active');
      });
    }

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

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);`;


const regex = /useEffect\(\(\) => \{[\s\S]*?\}, \[\]\);/m;
if (page.match(regex)) {
  page = page.replace(regex, newUseEffect);
  fs.writeFileSync(pagePath, page);
  console.log('Replaced useEffect successfully');
} else {
  console.log('Could not find useEffect block to replace');
}

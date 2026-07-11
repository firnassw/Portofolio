/* ============================================================
   IS PORTFOLIO â€” SCRIPT
   Menu mobile, smooth scroll, active nav, reveal animation,
   form kontak, tombol back-to-top
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Tahun otomatis di footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Menu mobile ---------- */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  function closeMenu() {
    mobileNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Buka menu');
  }

  function openMenu() {
    mobileNav.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Tutup menu');
  }

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    });

    // Tutup menu saat salah satu link diklik
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Tutup menu dengan tombol Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Tutup menu jika klik di luar area nav
    document.addEventListener('click', (e) => {
      const clickedInsideNav = mobileNav.contains(e.target) || menuToggle.contains(e.target);
      if (!clickedInsideNav && mobileNav.classList.contains('open')) closeMenu();
    });
  }

  /* ---------- Smooth scroll dengan offset header ---------- */
  const header = document.getElementById('site-header');

  function scrollToTarget(targetEl) {
    if (!targetEl) return;
    const headerHeight = header ? header.offsetHeight : 0;
    const top = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight + 1;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id.length <= 1) return; // href="#"
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        scrollToTarget(target);
        history.pushState(null, '', id);
      }
    });
  });

  /* ---------- Highlight nav link aktif saat scroll ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => sectionObserver.observe(section));
  }

  /* ---------- Reveal animation saat elemen masuk viewport ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (revealEls.length) {
    if (prefersReducedMotion) {
      revealEls.forEach(el => el.classList.add('in-view'));
    } else {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      revealEls.forEach(el => revealObserver.observe(el));
    }
  }

  /* ---------- Tombol back-to-top ---------- */
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 480);
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});

  // ============ LIQUID MORPH FLOATING MENU ============
  const fmBox = document.getElementById('fm-box');
  const fmToggle = document.getElementById('fm-toggle');
  const fmLinks = document.querySelectorAll('.fm-link');

  if (fmBox && fmToggle) {
    // Setup text characters for hover effect
    fmLinks.forEach(link => {
      const text = link.getAttribute('data-text');
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
      const charElements = [];
      
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
        wrap.appendChild(charSpan);
        
        charElements.push(innerSpan);
      });

      // Hover logic
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
      
      // Close menu when a link is clicked
      link.addEventListener('click', () => {
        fmBox.classList.remove('is-open');
      });
    });

    // Open/close logic
    fmBox.addEventListener('click', (e) => {
      if (!fmBox.classList.contains('is-open')) {
        fmBox.classList.add('is-open');
      }
    });

    fmToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      fmBox.classList.toggle('is-open');
    });

    // Close on outside click
    document.addEventListener('mousedown', (e) => {
      if (fmBox.classList.contains('is-open') && !fmBox.contains(e.target)) {
        fmBox.classList.remove('is-open');
      }
    });
  }


/* ---------- NEW HERO & DARK MODE ---------- */
document.addEventListener('DOMContentLoaded', () => {
  /* Theme Toggle */
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
    });
  }

  /* BlurText Intersection Observer */
  const blurChars = document.querySelectorAll('.blur-text-char');
  const blurWords = document.querySelectorAll('.blur-text-word span');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.filter = 'blur(0px)';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
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
});


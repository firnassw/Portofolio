/* ============================================================
   IS PORTFOLIO — SCRIPT
   Menu mobile, smooth scroll, active nav, reveal animation,
   form kontak, tombol back-to-top
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Preloader ---------- */
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('hidden');
      document.body.classList.add('page-loaded');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 800); // Wait for sliding transition
    }
  });
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
  /* Theme Toggle (Sky Toggle) */
  const themeCheckbox = document.getElementById('theme-checkbox');
  if (themeCheckbox) {
    themeCheckbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
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

  /* Portfolio Showcase Tabs */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      // Hide all contents
      tabContents.forEach(c => c.classList.remove('active'));

      // Add active class to clicked button
      btn.classList.add('active');
      // Show target content
      const targetId = btn.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
    });
  });

  /* Glowing Effect (Border Beam) */
  const PROXIMITY = 64;
  const INACTIVE_ZONE = 0.01;

  let animationFrameId = null;
  let lastMouseX = 0;
  let lastMouseY = 0;

  const updateGlows = () => {
    const wrappers = document.querySelectorAll('.glow-wrapper');
    if (!wrappers.length) return;

    let needsUpdate = false;

    wrappers.forEach(wrapper => {
      const rect = wrapper.getBoundingClientRect();
      const center = [rect.left + rect.width * 0.5, rect.top + rect.height * 0.5];
      const distanceFromCenter = Math.hypot(lastMouseX - center[0], lastMouseY - center[1]);
      const inactiveRadius = 0.5 * Math.min(rect.width, rect.height) * INACTIVE_ZONE;

      if (distanceFromCenter < inactiveRadius) {
        wrapper.style.setProperty("--active", "0");
        return;
      }

      const isActive =
        lastMouseX > rect.left - PROXIMITY &&
        lastMouseX < rect.right + PROXIMITY &&
        lastMouseY > rect.top - PROXIMITY &&
        lastMouseY < rect.bottom + PROXIMITY;

      wrapper.style.setProperty("--active", isActive ? "1" : "0");

      if (isActive) {
        needsUpdate = true;
        const currentAngle = parseFloat(wrapper.style.getPropertyValue("--start")) || 0;
        let targetAngle = (180 * Math.atan2(lastMouseY - center[1], lastMouseX - center[0])) / Math.PI + 90;

        const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
        
        // Smooth interpolation (lerp) towards the target angle
        const smoothedAngle = currentAngle + angleDiff * 0.15;
        wrapper.style.setProperty("--start", String(smoothedAngle));
      }
    });

    if (needsUpdate) {
      animationFrameId = requestAnimationFrame(updateGlows);
    } else {
      animationFrameId = null;
    }
  };

  const handleMoveOrScroll = (e) => {
    if (e && e.type === 'pointermove') {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    }
    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(updateGlows);
    }
  };

  document.addEventListener('pointermove', handleMoveOrScroll);
  window.addEventListener('scroll', handleMoveOrScroll, { passive: true });

  /* Show More / Show Less Certificates */
  const btnShowMoreCert = document.getElementById('btn-show-more-cert');
  const btnShowLessCert = document.getElementById('btn-show-less-cert');
  
  if (btnShowMoreCert && btnShowLessCert) {
    const certCards = document.querySelectorAll('#cert-grid .cert-card');
    
    // Hide certs from index 6 onwards initially
    if (certCards.length > 6) {
      for (let i = 6; i < certCards.length; i++) {
        certCards[i].style.display = 'none';
      }
      btnShowMoreCert.style.display = 'inline-flex';
    }

    btnShowMoreCert.addEventListener('click', () => {
      for (let i = 6; i < certCards.length; i++) {
        certCards[i].style.display = ''; // Restore original display (flex)
      }
      btnShowMoreCert.style.display = 'none';
      btnShowLessCert.style.display = 'inline-flex';
    });

    btnShowLessCert.addEventListener('click', () => {
      for (let i = 6; i < certCards.length; i++) {
        certCards[i].style.display = 'none';
      }
      btnShowLessCert.style.display = 'none';
      btnShowMoreCert.style.display = 'inline-flex';
      
      const certGrid = document.getElementById('cert-grid');
      if (certGrid) {
        const headerOffset = 100;
        const elementPosition = certGrid.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
           top: offsetPosition,
           behavior: "smooth"
        });
      }
    });
  }
});

/* ---------- Read More Toggle ---------- */
window.toggleReadMore = function(btn) {
  const desc = btn.previousElementSibling;
  if (desc && desc.classList.contains('portfolio-desc')) {
    desc.classList.toggle('expanded');
    if (desc.classList.contains('expanded')) {
      btn.textContent = 'Tutup deskripsi';
    } else {
      btn.textContent = 'Baca selengkapnya';
    }
  }
};

window.addEventListener('load', () => {
  document.querySelectorAll('.portfolio-desc').forEach(desc => {
    // If text doesn't overflow 3 lines, hide the button
    if (desc.scrollHeight <= desc.clientHeight || desc.scrollHeight <= 68) {
      const btn = desc.nextElementSibling;
      if (btn && btn.classList.contains('read-more-btn')) {
        btn.style.display = 'none';
      }
    }
  });
});

/* ---------- SKILLS MODAL ---------- */
window.openSkillsModal = function(title, skills) {
  const modal = document.getElementById('skillsModal');
  const titleEl = document.getElementById('skillsModalTitle');
  const listEl = document.getElementById('skillsModalList');
  
  if (modal && titleEl && listEl) {
    titleEl.textContent = `Skills for ${title}`;
    listEl.innerHTML = '';
    
    skills.forEach(skill => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="material-symbols-outlined skill-icon">check_circle</span>
        <span class="skill-text">${skill}</span>
      `;
      listEl.appendChild(li);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeSkillsModal = function() {
  const modal = document.getElementById('skillsModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
  const modal = document.getElementById('skillsModal');
  if (e.target === modal) {
    closeSkillsModal();
  }
});

// Close modal with Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSkillsModal();
  }
});

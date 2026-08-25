const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// The logic we need to insert
const logicToInsert = `    // Setup text characters for hover effect on fmLinks
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
        if (fmBox) fmBox.classList.remove('is-open');
      });
    });

    // Also allow clicking fmBox itself to open if it's not already open
    if (fmBox) {
      fmBox.onclick = (e) => {
        if (!fmBox.classList.contains('is-open')) {
          fmBox.classList.add('is-open');
        }
      };
    }
    
    // Close on outside click
    const mousedownListener = (e: MouseEvent) => {
      if (fmBox && fmBox.classList.contains('is-open') && !fmBox.contains(e.target as Node) && fmToggle && !fmToggle.contains(e.target as Node)) {
        fmBox.classList.remove('is-open');
      }
    };
    document.removeEventListener('mousedown', mousedownListener);
    document.addEventListener('mousedown', mousedownListener);
`;

const anchorPoint = `    if (fmToggle && fmBox) {
      fmToggle.onclick = () => {
        fmBox.classList.toggle('is-open');
      };
    }`;

content = content.replace(anchorPoint, anchorPoint + '\n\n' + logicToInsert);

fs.writeFileSync(pagePath, content);
console.log("Injected fm-link text population logic!");

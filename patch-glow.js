const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

const logicToInsert = `    /* Glowing Effect (Border Beam) */
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
          
          // Smooth interpolation (lerp) towards the target angle
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
`;

// Insert it right after the Intersection Observer logic
const anchorPoint = `        });
      },
      { threshold: 0.1 }
    );
    blurChars.forEach(el => observer.observe(el));
    blurWords.forEach(el => observer.observe(el));`;

if (content.includes(anchorPoint)) {
    content = content.replace(anchorPoint, anchorPoint + '\n\n' + logicToInsert);
    fs.writeFileSync(pagePath, content);
    console.log("Injected glow effect logic!");
} else {
    console.log("Anchor point not found!");
}

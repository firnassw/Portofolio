const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');


content = content.replace(/onClick=\{\(\) => console\.log\("openSkillsModal\((.*?)\)"\)\}/g, 'onClick={() => (window as any).openSkillsModal($1)}');


content = content.replace(/onClick=\{\(\) => console\.log\("closeSkillsModal\(\)"\)\}/g, 'onClick={() => (window as any).closeSkillsModal()}');


const logicToInject = `
    (window as any).openSkillsModal = function(title: string, skills: string[]) {
      const modal = document.getElementById('skillsModal');
      const titleEl = document.getElementById('skillsModalTitle');
      const listEl = document.getElementById('skillsModalList');
      
      if (modal && titleEl && listEl) {
        titleEl.textContent = \`Skills for \${title}\`;
        listEl.innerHTML = '';
        
        skills.forEach(skill => {
          const li = document.createElement('li');
          li.innerHTML = \`<span class="material-symbols-outlined skill-icon">check_circle</span> <span class="skill-name">\${skill}</span>\`;
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

    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        
        tabBtns.forEach(b => b.classList.remove('active'));
        
        tabContents.forEach(c => c.classList.remove('active'));

        
        btn.classList.add('active');
        
        const targetId = btn.getAttribute('data-tab');
        if (targetId) {
          const targetEl = document.getElementById(targetId);
          if (targetEl) targetEl.classList.add('active');
        }
      });
    });
`;


content = content.replace('

fs.writeFileSync(pagePath, content);
console.log("Successfully injected tabs and modals logic!");

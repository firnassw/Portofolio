const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'old-version', 'index.html');
const cssPath = path.join(__dirname, 'old-version', 'style.css');
const pagePath = path.join(__dirname, 'src', 'app', 'page.tsx');
const globalsPath = path.join(__dirname, 'src', 'app', 'globals.css');

let html = fs.readFileSync(htmlPath, 'utf8');

// Extract everything inside <body>...</body>
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
  console.error("Could not find body tag");
  process.exit(1);
}

let bodyHtml = bodyMatch[1];

// Remove the old floating menu script at the bottom
bodyHtml = bodyHtml.replace(/<script[^>]*><\/script>/g, '');

// Convert to JSX
let jsx = bodyHtml
  .replace(/class=/g, 'className=')
  .replace(/onclick=/gi, 'onClick=')
  .replace(/tabindex=/gi, 'tabIndex=')
  .replace(/for=/gi, 'htmlFor=')
  .replace(/stroke-width=/gi, 'strokeWidth=')
  .replace(/stroke-linecap=/gi, 'strokeLinecap=')
  .replace(/stroke-linejoin=/gi, 'strokeLinejoin=')
  .replace(/fill-rule=/gi, 'fillRule=')
  .replace(/clip-rule=/gi, 'clipRule=')
  .replace(/viewbox=/gi, 'viewBox=')
  .replace(/xmlns:xlink=/gi, 'xmlnsXlink=');

// Fix self-closing tags
jsx = jsx.replace(/<img([^>]*[^\/])>/gi, '<img$1 />');
jsx = jsx.replace(/<hr([^>]*[^\/])>/gi, '<hr$1 />');
jsx = jsx.replace(/<br([^>]*[^\/])>/gi, '<br$1 />');
jsx = jsx.replace(/<input([^>]*[^\/])>/gi, '<input$1 />');
jsx = jsx.replace(/<meta([^>]*[^\/])>/gi, '<meta$1 />');
jsx = jsx.replace(/<link([^>]*[^\/])>/gi, '<link$1 />');

// Style attribute string to object (hacky but works for the specific ones we have)
jsx = jsx.replace(/style="color:\s*([^;"]+);?"/g, 'style={{ color: "$1" }}');
jsx = jsx.replace(/style="display:\s*([^;"]+);?"/g, 'style={{ display: "$1" }}');

// Comment out the old "Projek", "Sertifikat", "Lomba" sections to replace them
// We will just replace them with Gallery6 imports.
// But doing this reliably with regex is hard, so we'll just inject the Gallery6 demo for now.

const pageTsx = `
"use client";

import { useEffect } from 'react';
import { Gallery6 } from "@/components/blocks/gallery6";

export default function Home() {
  useEffect(() => {
    // Ported from script.js
    const root = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        root.classList.toggle('dark');
      });
    }

    const reveals = document.querySelectorAll('[data-reveal]');
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
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
  }, []);

  return (
    <>
      ${jsx}
    </>
  );
}
`;

fs.writeFileSync(pagePath, pageTsx);

// Process CSS
let oldCss = fs.readFileSync(cssPath, 'utf8');
let globalsCss = fs.readFileSync(globalsPath, 'utf8');

// Just append the old CSS to the end of globals CSS
// But we need to make sure :root variables are available
fs.writeFileSync(globalsPath, globalsCss + "\n\n" + oldCss);

console.log("Migration script complete");

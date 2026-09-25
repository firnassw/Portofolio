"use client";

import { useEffect, useRef, useState } from "react";

interface ModelViewerProps {
  src: string;
  alt: string;
  className?: string;
}

export function ModelViewer({ src, alt, className = "" }: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Ensure model-viewer uses local Draco decoders to bypass Adblockers and strict CSPs!
    (window as any).ModelViewerElement = (window as any).ModelViewerElement || {};
    (window as any).ModelViewerElement.dracoDecoderLocation = '/draco/';

    // Load script dynamically on mount to avoid Next.js SSR / script tag issues
    if (!document.querySelector('script[src="/model-viewer.min.js"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = '/model-viewer.min.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className={`w-full h-full min-h-[300px] rounded-xl overflow-hidden relative ${className}`}>
      {mounted && (
        <div 
          ref={containerRef}
          className="w-full h-full absolute inset-0"
          dangerouslySetInnerHTML={{
            __html: `
              <model-viewer
                src="${src}"
                alt="${alt}"
                auto-rotate
                camera-controls
                shadow-intensity="1.5"
                shadow-softness="1.2"
                exposure="1.2"
                tone-mapping="aces"
                environment-image="neutral"
                camera-orbit="0deg 75deg 105%"
                interaction-prompt="none"
                style="width: 100%; height: 100%; display: block; background-color: transparent; outline: none;"
              ></model-viewer>
            `
          }}
        />
      )}
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";



interface ModelViewerProps {
  src: string;
  alt: string;
  className?: string;
}

export function ModelViewer({ src, alt, className = "" }: ModelViewerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Import model-viewer dynamically on the client side to prevent SSR issues
    import('@google/model-viewer').then(() => {
      setIsMounted(true);
    }).catch((err) => console.error("Error loading model-viewer", err));
  }, []);

  if (!isMounted) {
    return (
      <div className={`w-full h-full min-h-[300px] flex items-center justify-center bg-muted/20 animate-pulse rounded-xl ${className}`}>
        <span className="text-muted-foreground text-sm font-medium">Loading 3D Model...</span>
      </div>
    );
  }

  return (
    <div className={`w-full h-full min-h-[300px] rounded-xl overflow-hidden bg-muted/10 relative ${className}`}>
      {/* @ts-expect-error - Custom web component not in JSX intrinsic elements */}
      <model-viewer
        src={src}
        alt={alt}
        auto-rotate="true"
        auto-rotate-delay="0"
        rotation-per-second="30deg"
        camera-controls="true"
        shadow-intensity="1.5"
        shadow-softness="1.2"
        exposure="1.2"
        tone-mapping="aces"
        environment-image="neutral"
        camera-orbit="0deg 75deg 105%"
        interaction-prompt="none"
        loading="lazy"
        style={{ width: '100%', height: '100%', outline: 'none', cursor: 'grab' }}
      />
      
    </div>
  );
}

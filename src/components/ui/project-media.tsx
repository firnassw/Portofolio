 
"use client";

import { useState, useEffect } from "react";
import Image from 'next/image'
import { ModelViewer } from "./model-viewer";
import { FlowButton } from "./flow-button";
import { X } from "lucide-react";

interface ProjectMediaProps {
  image: string;
  modelUrl?: string;
  title: string;
  badge: string;
  prototypeUrl?: string;
}

export function ProjectMedia({ image, modelUrl, title, badge, prototypeUrl }: ProjectMediaProps) {
  const [viewMode, setViewMode] = useState<"3D" | "2D">(modelUrl ? "3D" : "2D");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    if (isLightboxOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  return (
    <>
      <div className="relative w-full rounded-[24px] overflow-hidden shadow-sm border border-gray-200/50 dark:border-gray-800 mb-6 bg-[#0B0F19] aspect-video flex flex-col group">
        
        {/* Toggle Controls */}
        {modelUrl && (
          <div className="absolute top-4 left-4 z-20 flex bg-background/80 backdrop-blur-md rounded-full border border-border p-1 shadow-sm opacity-100 transition-opacity">
            <button 
              onClick={() => setViewMode("3D")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full flex items-center gap-1.5 transition-colors ${viewMode === "3D" ? "bg-white dark:bg-zinc-800 text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              <span className={`w-2 h-2 rounded-full transition-colors ${viewMode === "3D" ? "bg-blue-500 animate-pulse" : "bg-transparent"}`}></span>
              3D Interactive
            </button>
            <button 
              onClick={() => setViewMode("2D")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full flex items-center gap-1.5 transition-colors ${viewMode === "2D" ? "bg-white dark:bg-zinc-800 text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              2D Image
            </button>
          </div>
        )}

        {/* Media Content */}
        <div className="flex-1 w-full h-full relative">
          {viewMode === "3D" && modelUrl ? (
            <ModelViewer src={modelUrl} alt={`${title} 3D Model`} />
          ) : (
            <div 
              className="w-full h-full cursor-zoom-in relative"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Image 
                src={image} 
                alt={`${title} Preview`}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
               width={800} height={600} loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 bg-black/60 text-white text-sm px-4 py-2 rounded-full backdrop-blur-md transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  Klik untuk perbesar
                </span>
              </div>
            </div>
          )}
        </div>

        {prototypeUrl && (
          <div className="absolute bottom-5 right-5 z-20">
            <a href={prototypeUrl} target="_blank" rel="noopener noreferrer">
              <FlowButton text={badge === 'WEB PROJECT' ? 'Lihat Kode' : 'Lihat Prototype di Figma'} />
            </a>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(false);
            }}
            aria-label="Tutup"
          >
            <X className="w-6 h-6" />
          </button>
          
          <Image
                          src={image}
                          alt={`${title} Fullscreen`}
                          className="max-w-full max-h-full object-contain cursor-zoom-out drop-shadow-2xl animate-in zoom-in-95 duration-300"
                          width={800}
                          height={600}
                          loading="lazy"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsLightboxOpen(false);
                          }}
                        />
        </div>
      )}
    </>
  );
}

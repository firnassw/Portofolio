"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, Landmark, CalendarDays, BadgeCheck, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary?: string;
  url: string;
  image: string;
  issuer?: string;
  year?: string;
  credentialId?: string;
  coursesUrl?: string;
}

export interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "Gallery",
  demoUrl = "#",
  items = [],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    carouselApi.on("reInit", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
      carouselApi.off("reInit", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="pt-0 pb-8 md:pb-12">
      <div className="container">
        <div className="mb-4 flex flex-col justify-between md:mb-6 md:flex-row md:items-end lg:mb-6">
          <div>
            <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h2>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto border-[#0078D4] text-[#0078D4] hover:bg-[#0078D4] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto border-[#0078D4] text-[#0078D4] hover:bg-[#0078D4] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative w-full"
        >
          <CarouselContent className="-ml-4 pb-4 pt-1">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="group flex flex-col justify-between block bg-white dark:bg-[#1a1b26] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 h-full overflow-hidden glow-wrapper">
                  <div className="glow-effect">
                    <div className="glow-border"></div>
                  </div>
                  
                  {/* Image Section (Edge to Edge) */}
                  <div 
                    className="w-full aspect-[16/9] border-b border-gray-100 dark:border-gray-800 relative overflow-hidden bg-white dark:bg-white flex items-center justify-center p-4 cursor-pointer"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain object-center transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="line-clamp-2 break-words text-xl font-bold text-gray-900 dark:text-white leading-snug">
                      {item.title}
                    </h3>
                    
                    {item.summary && !item.issuer && (
                      <p className="mt-4 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
                        {item.summary}
                      </p>
                    )}

                    {/* Bottom Group (Metadata + Footer) */}
                    <div className="mt-auto pt-8">
                      {/* Metadata Section */}
                      {(item.issuer || item.year || item.credentialId) && (
                        <div className="space-y-3.5 mb-8">
                          {item.issuer && (
                            <div className="flex items-center text-[0.9rem] text-gray-600 dark:text-gray-400">
                              <Landmark className="w-[18px] h-[18px] mr-3 text-[#0E7D6A] dark:text-teal-400 shrink-0" />
                              <span className="translate-y-[1px]">Issuer: {item.issuer}</span>
                            </div>
                          )}
                          {item.year && (
                            <div className="flex items-center text-[0.9rem] text-gray-600 dark:text-gray-400">
                              <CalendarDays className="w-[18px] h-[18px] mr-3 text-[#0E7D6A] dark:text-teal-400 shrink-0" />
                              <span className="translate-y-[1px]">Year: {item.year}</span>
                            </div>
                          )}
                          {item.credentialId && (
                            <div className="flex items-center text-[0.9rem] text-gray-600 dark:text-gray-400">
                              <BadgeCheck className="w-[18px] h-[18px] mr-3 text-[#0E7D6A] dark:text-teal-400 shrink-0" />
                              <span className="truncate translate-y-[1px]">Credential ID: {item.credentialId}</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Footer Links */}
                      <div className="flex flex-wrap items-center gap-5 pt-1">
                        <a href={item.url} target="_blank" rel="noreferrer" className="flex items-center text-[0.9rem] font-semibold text-[#0078D4] hover:text-[#005a9e] dark:text-[#3B82F6] dark:hover:text-[#60a5fa] transition-colors">
                          {item.credentialId ? "View Credential" : "View Details"} <ArrowUpRight className="ml-1 w-4 h-4" />
                        </a>
                        {item.coursesUrl && (
                          <a href={item.coursesUrl} target="_blank" rel="noreferrer" className="flex items-center text-[0.9rem] font-semibold text-[#0078D4] hover:text-[#005a9e] dark:text-[#3B82F6] dark:hover:text-[#60a5fa] transition-colors">
                            Courses <ArrowUpRight className="ml-1 w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6 md:p-12 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button fixed to top right of the screen */}
          <button 
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white bg-gray-900/60 hover:bg-black border border-white/20 backdrop-blur-md transition-all p-3 rounded-full shadow-2xl z-[110] flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
            aria-label="Close modal"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          {/* Inner container to constrain image */}
          <div className="relative w-full h-full max-w-6xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Certificate Preview" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export { Gallery6 };

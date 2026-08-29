'use client';
import { ArrowRight, ExternalLink } from 'lucide-react';

export  function FlowButton({ text = "Modern Button" }: { text?: string }) {
  return (
    <button className="group relative flex items-center gap-1 overflow-hidden rounded-[14px] bg-[#A5B4FC] pl-6 pr-12 py-3 text-[13.5px] font-semibold text-[#111111] shadow-xl cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.95]">
      {/* Left arrow (arr-2) */}
      <ArrowRight 
        className="absolute w-4 h-4 left-[-25%] stroke-[#111111] fill-none z-[9] group-hover:left-5 group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />

      {/* Text */}
      <span className="relative z-[1] transition-all duration-[800ms] ease-out group-hover:translate-x-4 group-hover:text-white">
        {text}
      </span>

      {/* Circle */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#4F46E5] rounded-[50%] opacity-0 group-hover:w-[600px] group-hover:h-[600px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>

      {/* Right arrow (arr-1) */}
      <ExternalLink 
        className="absolute w-4 h-4 right-5 stroke-[#111111] fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />
    </button>
  );
}

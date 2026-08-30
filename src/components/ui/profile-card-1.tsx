"use client";

import React, { useState } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, Instagram } from 'lucide-react';

export const GlassmorphismProfileCard = ({
  avatarUrl,
  name,
  title,
  bio,
  socialLinks = [],
  actionButton,
}: {
  avatarUrl: string;
  name: string;
  title: string;
  bio: string;
  socialLinks?: any[];
  actionButton: any;
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-md mx-auto my-8">
      <div 
        className="relative flex flex-col items-center p-8 rounded-[2rem] border transition-all duration-500 ease-out backdrop-blur-xl bg-white/40 dark:bg-[#18181B]/40 border-gray-200/50 dark:border-white/10"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div className="w-24 h-24 mb-4 rounded-full p-1 border-2 border-gray-200 dark:border-white/20">
          <img 
            src={avatarUrl} 
            alt={`${name}'s Avatar`}
            className="w-full h-full rounded-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = `https://placehold.co/96x96/6366f1/white?text=${name.charAt(0)}`; }}
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{name}</h2>
        <p className="text-sm sm:text-base font-medium text-[#4F46E5] dark:text-[#6366f1] mb-5">{title}</p>
        <p className="text-center text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-sm">{bio}</p>

        <div className="w-1/2 h-px my-6 rounded-full bg-gray-200 dark:bg-gray-800" />

        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((item) => (
            <SocialButton key={item.id} item={item} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} />
          ))}
        </div>

        <ActionButton action={actionButton} />
      </div>
      
      <div className="absolute inset-0 rounded-[2rem] -z-10 transition-all duration-500 ease-out blur-2xl opacity-30 bg-gradient-to-r from-indigo-500/50 to-purple-500/50 dark:opacity-20" />
    </div>
  );
};

const SocialButton = ({ item, setHoveredItem, hoveredItem }: any) => (
  <div className="relative">
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-out group overflow-hidden bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
      aria-label={item.label}
    >
      <div className="relative z-10 flex items-center justify-center">
        <item.icon size={20} className="transition-all duration-200 ease-out text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100" />
      </div>
    </a>
    <Tooltip item={item} hoveredItem={hoveredItem} />
  </div>
);

const ActionButton = ({ action }: any) => (
  <a
    href={action.href}
    target={action.target || "_blank"}
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 mt-8 rounded-full font-semibold text-sm sm:text-base backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.03] active:scale-95 group bg-[#4F46E5] hover:bg-[#4338CA] text-white"
    style={{ boxShadow: '0 4px 20px rgba(79, 70, 229, 0.3)' }}
  >
    <span>{action.text}</span>
    {action.icon ? (
      <action.icon size={16} className="transition-transform duration-300 ease-out group-hover:scale-110" />
    ) : (
      <ArrowUpRight size={16} className="transition-transform duration-300 ease-out group-hover:rotate-45" />
    )}
  </a>
);

const Tooltip = ({ item, hoveredItem }: any) => (
  <div 
    role="tooltip"
    className={`absolute -top-12 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg backdrop-blur-md border text-xs font-medium whitespace-nowrap transition-all duration-300 ease-out pointer-events-none bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 border-gray-800 dark:border-gray-200 ${hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
  >
    {item.label}
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-900 dark:bg-gray-100 border-b border-r border-gray-800 dark:border-gray-200" />
  </div>
);

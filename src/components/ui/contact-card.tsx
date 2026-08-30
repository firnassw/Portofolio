"use client";

import React from 'react';
import { Mail, Github, Linkedin, Instagram, Navigation, Code2, Lightbulb, ArrowUpRight } from 'lucide-react';

export const ContactCard = ({
  avatarUrl,
  name,
  socialLinks = [],
  actionButton,
}: {
  avatarUrl: string;
  name: string;
  socialLinks?: any[];
  actionButton: any;
}) => {
  return (
    <div className="relative w-full max-w-[900px] mx-auto my-8">
      <div 
        className="flex flex-col md:flex-row bg-white dark:bg-[#18181B] rounded-[2.5rem] border border-gray-100 dark:border-gray-800 transition-all duration-500 ease-out shadow-[0_8px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.2)] overflow-hidden"
      >
        {/* Left Column: Profile Info */}
        <div className="flex-1 p-8 sm:p-10 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800">
          <div className="w-28 h-28 mb-5 rounded-full p-1.5 border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-[#18181B] shadow-sm relative">
            <img 
              src={avatarUrl} 
              alt={`${name}'s Avatar`}
              className="w-full h-full rounded-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = `https://placehold.co/112x112/6366f1/white?text=${name.charAt(0)}`; }}
            />
          </div>

          <h3 className="text-[28px] font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
          
          <div className="flex flex-col gap-1 mb-6">
            <p className="text-[15px] font-semibold text-[#4F46E5] dark:text-[#6366f1]">Information Systems Student</p>
            <p className="text-[15px] font-medium text-[#4F46E5] dark:text-[#6366f1]">Web Developer &bull; Aspiring Business Analyst</p>
          </div>

          <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400 max-w-[320px] mb-8">
            I build practical digital solutions with a focus on technology, data, and user experience.
          </p>

          <div className="w-full max-w-[280px] h-px bg-gray-100 dark:bg-gray-800 mb-8" />

          <div className="flex items-center justify-center gap-4 w-full">
            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 transition-all duration-300 group-hover:bg-white dark:group-hover:bg-gray-800 group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] group-hover:text-[#4F46E5] dark:group-hover:text-[#6366f1] group-hover:-translate-y-1">
                  <item.icon size={22} />
                </div>
                <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Features & Action */}
        <div className="flex-1 p-8 sm:p-12 flex flex-col justify-between bg-gray-50/50 dark:bg-[#18181B]/50">
          <div className="flex flex-col gap-4 mb-10">
            {/* Feature 1 */}
            <div className="flex items-center p-4 sm:p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#18181B] shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EEF2FF] dark:bg-[#4F46E5]/10 text-[#4F46E5] dark:text-[#818cf8] shrink-0">
                <Navigation size={22} className="ml-[-2px] mt-[2px]" />
              </div>
              <div className="w-px h-14 sm:h-16 bg-gray-100 dark:bg-gray-800 mx-4 sm:mx-5 shrink-0" />
              <div className="flex flex-col flex-1">
                <h4 className="text-[15px] sm:text-[16px] font-bold text-gray-900 dark:text-white mb-1">Let's Collaborate</h4>
                <div className="w-6 h-[2px] bg-[#4F46E5] rounded-full mb-2" />
                <p className="text-[13px] sm:text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  I'm open to exciting projects, internships, and collaborative opportunities.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center p-4 sm:p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#18181B] shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EEF2FF] dark:bg-[#4F46E5]/10 text-[#4F46E5] dark:text-[#818cf8] shrink-0">
                <Code2 size={22} />
              </div>
              <div className="w-px h-14 sm:h-16 bg-gray-100 dark:bg-gray-800 mx-4 sm:mx-5 shrink-0" />
              <div className="flex flex-col flex-1">
                <h4 className="text-[15px] sm:text-[16px] font-bold text-gray-900 dark:text-white mb-1">Tech & Problem Solver</h4>
                <div className="w-6 h-[2px] bg-[#4F46E5] rounded-full mb-2" />
                <p className="text-[13px] sm:text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  Passionate about web development, data, and solving real-world problems.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center p-4 sm:p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#18181B] shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EEF2FF] dark:bg-[#4F46E5]/10 text-[#4F46E5] dark:text-[#818cf8] shrink-0">
                <Lightbulb size={22} />
              </div>
              <div className="w-px h-14 sm:h-16 bg-gray-100 dark:bg-gray-800 mx-4 sm:mx-5 shrink-0" />
              <div className="flex flex-col flex-1">
                <h4 className="text-[15px] sm:text-[16px] font-bold text-gray-900 dark:text-white mb-1">Always Learning</h4>
                <div className="w-6 h-[2px] bg-[#4F46E5] rounded-full mb-2" />
                <p className="text-[13px] sm:text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  Continuously exploring new technologies to build better solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <a
              href={actionButton.href}
              target={actionButton.target || "_blank"}
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full gap-2 px-6 py-4 rounded-full font-semibold text-[15px] transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] group bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-[0_8px_25px_rgba(79,70,229,0.25)]"
            >
              <span>{actionButton.text}</span>
              <ArrowUpRight size={18} className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="text-[12px] text-gray-400 dark:text-gray-500 mt-4 font-medium">
              I'll get back to you as soon as possible!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

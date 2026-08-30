"use client";

import { SetStateAction, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Code, Award, Trophy } from 'lucide-react';

const TABS = [
  { id: "Projects", title: "Projects", icon: Code },
  { id: "Certificates", title: "Certificates", icon: Award },
  { id: "Lomba", title: "Lomba", icon: Trophy },
];

export function DiscreteTabs({ 
  activeTab, 
  setActiveTab 
}: { 
  activeTab: string;
  setActiveTab: (val: string) => void;
}) {
  return (
    <div className="flex gap-3 sm:gap-4 items-center">
      {TABS.map((tab) => (
        <Button
          key={tab.id}
          title={tab.title}
          ButtonIcon={tab.icon as any}
          isActive={activeTab === tab.id}
          setActiveButton={setActiveTab as any}
        />
      ))}
    </div>
  );
}

function Button({
  title,
  ButtonIcon,
  isActive,
  setActiveButton,
}: {
  title: string;
  ButtonIcon: React.ComponentType<any>;
  isActive: boolean;
  setActiveButton: (val: string) => void;
}) {
  const [showShine, setShowShine] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isActive && isLoaded) {
      setShowShine(true);
      const timer = setTimeout(() => setShowShine(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isActive, isLoaded]);

  const activeColor = "text-[#4F46E5] dark:text-[#6366f1]";

  return (
    <motion.div
      layoutId={"button-id-" + title}
      transition={{
        layout: {
          type: "spring",
          damping: 20,
          stiffness: 230,
          mass: 1.2,
          ease: [0.215, 0.61, 0.355, 1],
        },
      }}
      onClick={() => {
        setActiveButton(title);
        setIsLoaded(true);
      }}
      className="w-fit h-fit flex"
      style={{ willChange: "transform" }}
    >
      <motion.div
        layout
        transition={{
          layout: {
            type: "spring",
            damping: 20,
            stiffness: 230,
            mass: 1.2,
          },
        }}
        className={cn(
          "flex items-center gap-1.5 bg-white dark:bg-[#18181B] outline outline-1 outline-gray-200 dark:outline-gray-800 shadow-sm transition-colors duration-200 ease-out p-3 cursor-pointer",
          isActive && activeColor,
          isActive ? "px-4" : "px-3"
        )}
        style={{
          borderRadius: "25px",
        }}
      >
        <motion.div
          layoutId={"icon-id" + title}
          className="shrink-0 flex items-center justify-center"
          style={{ willChange: "transform" }}
        >
          <ButtonIcon size={18} className={isActive ? activeColor : "text-gray-500 dark:text-gray-400"} />
        </motion.div>
        {isActive && (
          <motion.div
            className="flex items-center"
            initial={isLoaded ? { opacity: 0, filter: "blur(4px)" } : false}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: isLoaded ? 0.2 : 0,
              ease: [0.86, 0, 0.07, 1],
            }}
          >
            <motion.span
              layoutId={"text-id-" + title}
              className="text-sm font-medium whitespace-nowrap relative inline-block"
              style={{ willChange: "transform" }}
            >
              {title}
            </motion.span>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default DiscreteTabs;

"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 z-20 bg-black/10 dark:bg-white/10">
      <div
        className="h-full bg-black dark:bg-gradient-to-r dark:from-[#F2A93C] dark:to-[#2DD4BF] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
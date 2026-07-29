"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / height) * 100;

      setProgress(progress);
    };

    window.addEventListener("scroll", updateScroll);

    updateScroll();

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-transparent">
      <div
        className="h-full bg-violet-500 transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
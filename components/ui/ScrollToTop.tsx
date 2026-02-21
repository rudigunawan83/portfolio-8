"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop(): React.ReactElement | null {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const lenis = (window as any).__lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      // use Lenis for a cinematic smooth scroll when available
      try {
        lenis.scrollTo(0, { duration: 1.2 });
        return;
      } catch (e) {
        // fall through to native fallback
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={handleClick}
        aria-label="Scroll to top"
        className="w-12 h-12 rounded-full bg-[#A3FF12] text-black flex items-center justify-center shadow-xl transform-gpu transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>
    </motion.div>
  );
}

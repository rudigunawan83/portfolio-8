"use client";

import React from "react";
import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  // use a spring for a smoother cinematic feel
  const scaleX = useSpring(scrollYProgress, { damping: 20, stiffness: 120 });

  return (
    <div aria-hidden className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none">
      <motion.div className="origin-left h-full bg-[#A3FF12] transform-gpu" style={{ scaleX }} />
    </div>
  );
}

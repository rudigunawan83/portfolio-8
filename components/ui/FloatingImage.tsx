"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type FloatingImageProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
  rotate?: number; // initial rotation in degrees
  hoverRotate?: number; // rotation on hover
  ariaLabel?: string;
};

export default function FloatingImage({
  src,
  alt = "decor",
  width,
  height,
  className = "",
  rotate = 0,
  hoverRotate = 0,
  ariaLabel,
}: FloatingImageProps) {
  return (
    <motion.div
      aria-label={ariaLabel}
      initial={false}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.05, rotate: hoverRotate }}
      className={className}
    >
      <div className="relative">
        <div className="absolute -inset-2 rounded-full bg-[#A3FF12]/6 blur-2xl -z-10" />
        <div className="rounded-lg shadow-2xl overflow-hidden scale-95 opacity-90">
          <Image src={src} alt={alt} width={width} height={height} className="object-cover w-full h-full" />
        </div>
      </div>
    </motion.div>
  );
}

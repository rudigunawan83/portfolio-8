"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FeatureItemProps {
  text: string;
  textColor?: string; // tailwind color class for text
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export default function FeatureItem({ text, textColor = "text-white" }: FeatureItemProps) {
  return (
    <motion.li
      variants={itemVariants}
      className="flex flex-col text-left"
    >
      <div className="flex items-center">
        <div className="mr-3 flex items-center justify-center w-5 h-5">
          <Image src="/frame.png" alt="frame" width={18} height={18} className="object-contain" />
        </div>
        <span className={`${textColor} text-sm font-medium`}>{text}</span>
      </div>

      <div className="my-5 h-[1px] bg-white/10 w-full" />
    </motion.li>
  );
}

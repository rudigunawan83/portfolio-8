"use client";

import React, { MouseEventHandler } from "react";
import { motion, Variants } from "framer-motion";

type IntroLineProps = {
  text: string;
  className?: string;
};

function IntroLine({ text, className = "" }: IntroLineProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="inline-block w-16 h-[1px] bg-white/30" aria-hidden />
      <p className="text-sm tracking-wide text-gray-300">{text}</p>
    </div>
  );
}

type AnimatedHeadingProps = {
  lines?: [string, string, string];
  className?: string;
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AnimatedHeading({ lines = ["BUILDING FAST &", "INTERACTIVE WEB", "EXPERIENCES."], className = "" }: AnimatedHeadingProps) {
  return (
    <motion.h1 variants={container} className={`display-heading font-extrabold uppercase leading-[0.9] tracking-tight ${className}`}>
      <motion.span variants={item} className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
        {lines[0]}
      </motion.span>

      <motion.span variants={item} className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        <span className="text-green-400">{lines[1].replace("INTERACTIVE","INTERACTIVE")}</span>
      </motion.span>

        <motion.span variants={item} className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
        {lines[2]}
      </motion.span>
    </motion.h1>
  );
}

type GlowButtonProps = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

function GlowButton({ children, onClick, className = "" }: GlowButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`rounded-full px-6 py-3 md:px-10 md:py-5 font-semibold text-black bg-[rgba(163,255,18,1)] shadow-[0_0_40px_rgba(163,255,18,0.5)] transition-transform duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default function HeroLeft() {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center max-w-7xl px-4 sm:px-6 lg:px-12">
      <div className="space-y-6">
        <IntroLine text="Hi, I am Edwin Anderson Frontend Developer" />

        <AnimatedHeading className="text-white" />

        <motion.p variants={item} className="max-w-xl text-lg text-gray-400 mt-6 leading-relaxed">
          Bridging creativity and functionality to deliver stunning, user-friendly web applications
        </motion.p>

        <div className="mt-10">
          <GlowButton>HIRE ME</GlowButton>
        </div>
      </div>
    </div>
  );
}

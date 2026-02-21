"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import GradientButton from "../ui/GradientButton";
import AnimatedSection from "../ui/AnimatedSection";
import { ReactElement } from "react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

export default function Hero(): ReactElement {
  return (
    <AnimatedSection id="home" className="relative overflow-hidden bg-black" variants={container}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 pb-24 pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <motion.div variants={container} className="flex flex-col gap-6">
            <motion.div variants={item} className="flex items-center gap-4">
              <span className="inline-block h-px w-12 bg-zinc-700" />
              <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">Hi, I am Edwin Anderson Frontend Developer</p>
            </motion.div>

            <h1 className="display-heading text-white">
              <motion.span variants={item} className="block">BUILDING FAST &amp;</motion.span>
              <motion.span variants={item} className="block text-[#91FF02] drop-shadow-[0_0_30px_rgba(145,255,2,0.25)]">INTERACTIVE</motion.span>
              <motion.span variants={item} className="block">WEB EXPERIENCES.</motion.span>
            </h1>

            <motion.p variants={item} className="max-w-lg text-lg text-zinc-300">
              Bridging creativity and functionality to deliver stunning, user-friendly web applications
            </motion.p>

            <motion.div variants={item} className="flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <GradientButton className="w-[300px] h-[56px] rounded-full p-2 text-sm font-semibold justify-center gap-0 shadow-[0_8px_30px_rgba(16,185,129,0.18)] ring-4 ring-[#91FF02]/10">
                  HIRE ME
                </GradientButton>
              </motion.div>
            </motion.div>

            <div className="mt-6">
              <Image src="/group-1.png" alt="group" width={120} height={48} className="object-contain" />
            </div>
          </motion.div>

          <motion.div variants={item} className="relative flex items-center justify-end">
            <motion.div className="relative w-full max-w-[420px] md:max-w-[660px] h-auto overflow-hidden ml-auto">
              <Image src="/profile-image.png" alt="Profile image" width={660} height={874} className="w-full h-auto object-cover" priority />

              {/* green half-overlay - hide on small screens */}
              <div className="hidden md:block pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-[#91FF02]/40 mix-blend-screen" />

            </motion.div>

            {/* decorative tiles bottom-left */}
            <div className="pointer-events-none hidden md:grid absolute left-6 bottom-6 grid-cols-3 gap-2">
              <div className="h-6 w-6 bg-green-900/60" />
              <div className="h-6 w-6 bg-green-900/60" />
              <div className="h-6 w-6 bg-transparent" />
              <div className="h-6 w-6 bg-transparent" />
              <div className="h-6 w-6 bg-green-900/60" />
              <div className="h-6 w-6 bg-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

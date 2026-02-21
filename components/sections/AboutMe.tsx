"use client";

import React from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import type { ReactElement } from "react";
import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";

const headingContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const headingLine: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const labelVariant: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const paraVariant: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

export default function AboutMe(): ReactElement {
  const { scrollY } = useScroll();
  const leftY = useTransform(scrollY, [0, 1000], [0, -80]);
  const rightY = useTransform(scrollY, [0, 1000], [0, -120]);
  const midY = useTransform(scrollY, [0, 1000], [0, -60]);
  return (
    <AnimatedSection id="aboutme" className="relative bg-black py-32 px-6" variants={headingContainer}>
      <section>
      <div className="max-w-7xl mx-auto text-center relative">
        <motion.p variants={labelVariant} className="text-xs uppercase tracking-widest text-[#A3FF12] mb-6">
          ABOUT ME
        </motion.p>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:block relative">
            {/* LEFT IMAGE */}
            <motion.div
              initial={{ rotate: -8 }}
              style={{ y: leftY, transform: "translateZ(0)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, rotate: -6 }}
              className="absolute left-[-60px] top-[15%] z-10 w-[240px] will-change-transform"
            >
              <Image
                src="/image-left.png"
                alt="left decor"
                width={240}
                height={180}
                className="object-cover rounded-lg shadow-2xl scale-[0.95] opacity-90"
              />
            </motion.div>

            {/* RIGHT IMAGE (TOP) */}
            <motion.div
              initial={{ rotate: 6 }}
              style={{ y: rightY, transform: "translateZ(0)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, rotate: 8 }}
              className="absolute right-[-60px] top-[10%] z-10 w-[240px] will-change-transform"
            >
              <Image
                src="/image-right.png"
                alt="right decor"
                width={240}
                height={180}
                className="object-cover rounded-lg shadow-2xl scale-[0.95] opacity-90"
              />
            </motion.div>

            {/* BOTTOM IMAGE removed from global positioning - will be anchored to the word "EXPERIENCES" */}
          </div>
          <motion.div variants={headingContainer} className="relative z-20 text-center">
            <h2 className="font-bold uppercase leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto">
              <motion.span variants={headingLine} className="block text-white">
                CRAFTING SEAMLESS
              </motion.span>

              <motion.span variants={headingLine} className="block text-[#A3FF12]">
                HIGH-PERFORMANCE WEB
              </motion.span>

              <motion.span variants={headingLine} className="block text-white">
                <span className="relative inline-block">
                  EXPERIENCES
                  <motion.div
                    initial={{ rotate: 0 }}
                    style={{ y: midY }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.03, rotate: -6 }}
                    className="absolute left-full ml-4 bottom-[-20px] w-[117px] z-10 hidden lg:block will-change-transform"
                  >
                    <Image
                      src="/image-mid.png"
                      alt="decorative"
                      width={117}
                      height={88}
                      className="object-cover rounded-none shadow-2xl scale-[0.95] opacity-100"
                    />
                  </motion.div>
                </span>
              </motion.span>
            </h2>
          </motion.div>
        </div>

        <motion.p variants={paraVariant} className="text-zinc-400 text-sm leading-relaxed max-w-2xl mx-auto mt-8 z-20">
          I love turning designs into interactive, high-performance websites. With a keen eye for detail and a deep understanding of frontend technologies, I create smooth and visually appealing user experiences.
        </motion.p>

        
      </div>
      </section>
    </AnimatedSection>
  );
}

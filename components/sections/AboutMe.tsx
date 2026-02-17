"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import type { ReactElement } from "react";

const labelVariant: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const headingContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const headingLine: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const paraVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const floatAnim: any = {
  animate: { y: [0, -8, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

export default function AboutMe(): ReactElement {
  return (
    <section className="relative bg-black py-32 px-6">
      <div className="mx-auto max-w-7xl text-center relative z-10">
        <motion.p variants={labelVariant} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-xs tracking-widest text-[#A3FF12] uppercase mb-6">
          ABOUT ME
        </motion.p>

        <motion.div variants={headingContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="inline-block font-bold uppercase leading-tight tracking-tight text-center">
            <motion.span variants={headingLine} className="block text-4xl md:text-5xl lg:text-6xl text-white">
              CRAFTING SEAMLESS
            </motion.span>

            <motion.span variants={headingLine} className="block text-4xl md:text-5xl lg:text-6xl text-[#A3FF12]">
              HIGH-PERFORMANCE WEB
            </motion.span>

            <motion.span variants={headingLine} className="block text-4xl md:text-5xl lg:text-6xl text-white">
              EXPERIENCES
            </motion.span>
          </h2>
        </motion.div>

        <motion.p variants={paraVariant} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-zinc-400 text-base leading-relaxed max-w-3xl mx-auto mt-8">
          I love turning designs into interactive, high-performance websites. With a keen eye for detail and a deep understanding of frontend technologies, I create smooth and visually appealing user experiences.
        </motion.p>
      </div>

      {/* Left decorative image */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={floatAnim.transition}
        whileHover={{ scale: 1.03 }}
        className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 opacity-90 rounded-lg shadow-2xl overflow-hidden rotate-2 z-0"
      >
        <Image src="/image-left.png" alt="left decor" width={180} height={120} className="rounded-lg object-cover" />
      </motion.div>

      {/* Right decorative image */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={floatAnim.transition}
        whileHover={{ scale: 1.03 }}
        className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 opacity-90 rounded-lg shadow-2xl overflow-hidden -rotate-2 z-0"
      >
        <Image src="/image-right.png" alt="right decor" width={180} height={120} className="rounded-lg object-cover" />
      </motion.div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FeatureItem from "../ui/FeatureItem";
import ScrollReveal from "../ui/ScrollReveal";

const LEFT_FEATURES = [
  "React Expert",
  "Precise Website Implementation",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Responsive Website Development",
  "UI Design Proficiency (Figma)",
];

const RIGHT_FEATURES = [
  "Basic React Knowledge",
  "Inconsistent Design Translation",
  "Little to No TypeScript Knowledge",
  "Unstructured Code",
  "Inconsistent Responsiveness",
  "No Design Skills",
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};

export default function WhyChooseMe(): React.ReactElement {
  return (
    <ScrollReveal>
      <section id="why" className="bg-black py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="mb-4">
          <span className="text-xs tracking-widest uppercase text-[#A3FF12]">WORKING</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase mb-16">WHY CHOOSE ME?</h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* LEFT COLUMN */}
          <div>
            <motion.div
              whileHover={{ y: -6, scale: 1.06, rotate: -2 }}
              transition={{ duration: 0.25 }}
              className="mx-auto w-20 h-20 rounded-full overflow-hidden mb-6 cursor-pointer"
            >
              <Image
                src="/profile-left.png"
                alt="Left profile"
                width={80}
                height={80}
                className="w-full h-full object-cover border border-white/10"
              />
            </motion.div>

            <h3 className="text-lg uppercase text-white font-semibold mb-6">WORKING WITH ME</h3>

            <motion.ul className="space-y-0" variants={containerVariants}>
              {LEFT_FEATURES.map((f) => (
                <FeatureItem key={f} text={f} textColor="text-white" />
              ))}
            </motion.ul>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <motion.div
              whileHover={{ y: -6, scale: 1.06, rotate: 2 }}
              transition={{ duration: 0.25 }}
              className="mx-auto w-20 h-20 rounded-full overflow-hidden mb-6 cursor-pointer"
            >
              <Image
                src="/profile-right.png"
                alt="Right profile"
                width={80}
                height={80}
                className="w-full h-full object-cover border border-white/10"
              />
            </motion.div>

            <h3 className="text-lg uppercase text-white font-semibold mb-6">ANOTHER TALENT</h3>

            <motion.ul className="space-y-0" variants={containerVariants}>
              {RIGHT_FEATURES.map((f) => (
                <FeatureItem key={f} text={f} textColor="text-zinc-400" />
              ))}
            </motion.ul>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="rounded-full px-10 py-4 bg-[#A3FF12] text-black font-semibold mt-16 shadow-[0_0_40px_rgba(163,255,18,0.4)] transition-transform"
          >
            HIRE ME
          </motion.button>
        </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

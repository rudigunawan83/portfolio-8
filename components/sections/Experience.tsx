"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";

type Experience = {
  id: number;
  year: string;
  role: string;
  company: string;
  description: string;
};

const experiences: Experience[] = [
  {
    id: 1,
    year: "2020 - 2022",
    role: "Frontend Developer",
    company: "Upwork",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences",
  },
  {
    id: 2,
    year: "2018 - 2020",
    role: "Frontend Developer",
    company: "Trello",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.",
  },
  {
    id: 3,
    year: "2016 - 2018",
    role: "Frontend Developer",
    company: "Zoom",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.",
  },
  {
    id: 4,
    year: "2014 - 2016",
    role: "Frontend Developer",
    company: "Zapier",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
};

const cardVariantLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const cardVariantRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function Experience(): React.ReactElement {
  return (
    <ScrollReveal>
      <section id="experience" className="bg-black py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="mb-4">
          <span className="text-xs tracking-widest uppercase text-[#A3FF12]">EXPERIENCE</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase mb-20">PROFESSIONAL WORK</h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerVariants}
          className="relative"
        >
          {/* vertical timeline line (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/10" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isRight = idx % 2 === 0; // 0 -> right, 1 -> left

              return (
                <div key={exp.id} className="relative lg:grid lg:grid-cols-[1fr_auto_1fr] items-center">
                  {/* LEFT SLOT (align to right) */}
                  <div className="lg:flex lg:justify-end lg:pr-8">
                    {idx % 2 === 1 ? (
                      <motion.div
                        variants={cardVariantLeft}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.25 }}
                        className="max-w-lg w-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm text-left hover:border-[#A3FF12] hover:shadow-[0_8px_30px_rgba(163,255,18,0.06)] transition-all"
                      >
                        <div className="flex items-start">
                          <div>
                            <div className="text-zinc-400 text-sm mb-2">{exp.year}</div>
                            <div className="text-white font-semibold text-lg mb-3">{exp.role}</div>
                          </div>

                          <div className="ml-auto flex items-center">
                            <Image
                              src={`/${exp.company.toLowerCase()}.png`}
                              alt={exp.company}
                              width={80}
                              height={28}
                              className="object-contain"
                            />
                          </div>
                        </div>

                        <p className="text-zinc-400 text-sm leading-relaxed mt-4">{exp.description}</p>
                      </motion.div>
                    ) : (
                      <div className="hidden lg:block" />
                    )}
                  </div>

                  {/* CENTER SLOT: circle */}
                  <div className="flex justify-center">
                    <motion.div
                      variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                      className="relative z-10 flex items-center justify-center"
                    >
                      <div className="relative w-8 h-8 rounded-full border border-[#A3FF12] text-[#A3FF12] text-sm flex items-center justify-center bg-black">
                        {exp.id}
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#A3FF12]" />
                      </div>
                    </motion.div>
                  </div>

                  {/* RIGHT SLOT (align to left) */}
                  <div className="lg:flex lg:justify-start lg:pl-8">
                    {isRight ? (
                      <motion.div
                        variants={cardVariantRight}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.25 }}
                        className="max-w-lg w-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm text-left hover:border-[#A3FF12] hover:shadow-[0_8px_30px_rgba(163,255,18,0.06)] transition-all"
                      >
                        <div className="flex items-start">
                          <div>
                            <div className="text-zinc-400 text-sm mb-2">{exp.year}</div>
                            <div className="text-white font-semibold text-lg mb-3">{exp.role}</div>
                          </div>

                          <div className="ml-auto flex items-center">
                            <Image
                              src={`/${exp.company.toLowerCase()}.png`}
                              alt={exp.company}
                              width={80}
                              height={28}
                              className="object-contain"
                            />
                          </div>
                        </div>

                        <p className="text-zinc-400 text-sm leading-relaxed mt-4">{exp.description}</p>
                      </motion.div>
                    ) : (
                      <div className="hidden lg:block" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
}

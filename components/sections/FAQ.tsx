"use client";

import React from "react";
import AnimatedSection from "../ui/AnimatedSection";
import ScrollReveal from "../ui/ScrollReveal";
import FAQItem from "../ui/FAQItem";
import { motion, Variants } from "framer-motion";

type FAQItemType = {
  id: number;
  question: string;
  answer: string;
};

const FAQ_ITEMS: FAQItemType[] = [
  {
    id: 1,
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React, Next.js, TypeScript, Tailwind CSS, and accessibility-focused, high-performance web applications.",
  },
  {
    id: 2,
    question: "Do you work on both design and development?",
    answer:
      "I focus primarily on frontend development, translating UI/UX designs into responsive and interactive web experiences while collaborating with designers.",
  },
  {
    id: 3,
    question: "Can you optimize an existing website for better performance?",
    answer:
      "Yes — I can analyze, debug, and optimize websites for speed, accessibility, and SEO using best practices like lazy loading and code splitting.",
  },
  {
    id: 4,
    question: "Do you take freelance or contract-based projects?",
    answer: "Yes, I'm open to freelance, contract, and full-time opportunities depending on scope and fit.",
  },
  {
    id: 5,
    question: "How do you approach a new project?",
    answer:
      "I start with discovery and requirements, propose an architecture, and deliver iterative milestones with testing and clear communication.",
  },
  {
    id: 6,
    question: "How can we collaborate?",
    answer: "You can reach out via email, LinkedIn, or GitHub and we can set up a brief discovery call to discuss your needs.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function FAQ(): React.ReactElement {
  return (
    <ScrollReveal>
      <section id="faq" className="bg-black py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="mb-4">
          <span className="text-xs tracking-widest uppercase text-[#A3FF12]">FAQ</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase mb-20">FREQUENTLY ASKED QUESTIONS</h2>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={containerVariants}>
          <div className="space-y-6">
            {Array.from({ length: Math.ceil(FAQ_ITEMS.length / 2) }).map((_, rowIdx) => {
              const left = FAQ_ITEMS[rowIdx * 2];
              const right = FAQ_ITEMS[rowIdx * 2 + 1];

              return (
                <div key={rowIdx} className="relative">
                  {/* row container */}
                  <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 items-start">
                    {/* vertical divider for this row (desktop) */}
                    <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[1px] bg-white/10 z-0 pointer-events-none" />

                    <motion.div variants={itemVariants} className="px-4 pb-0 relative z-30">
                      {left && <FAQItem question={left.question} answer={left.answer} />}
                    </motion.div>

                    <motion.div variants={itemVariants} className="px-4 pb-0 relative z-30">
                      {right && <FAQItem question={right.question} answer={right.answer} />}
                    </motion.div>
                  </div>

                  {/* full-width horizontal divider under row (desktop) */}
                  {rowIdx < Math.ceil(FAQ_ITEMS.length / 2) - 1 && (
                    <div className="hidden lg:block col-span-2 relative my-4">
                      <div className="absolute inset-0 flex justify-center pointer-events-none">
                        <div className="w-12 h-6 bg-black z-10" />
                      </div>
                      <div className="relative h-[1px] bg-white/10 z-20" />
                    </div>
                  )}
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

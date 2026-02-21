"use client";

import React from "react";
import AnimatedSection from "../ui/AnimatedSection";
import ScrollReveal from "../ui/ScrollReveal";
import PortfolioCard from "../ui/PortfolioCard";
import { motion, Variants } from "framer-motion";

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const ITEMS: PortfolioItem[] = [
  { id: 1, title: "Dashboard SaaS Task Management", description: "Design & Implementation", image: "/selected-work-1.png" },
  { id: 2, title: "Mobile Finance App", description: "UI/UX & Frontend", image: "/selected-work-2.png" },
  { id: 3, title: "Dark Dashboard Kit", description: "Component library", image: "/selected-work-3.png" },
  { id: 4, title: "E-commerce Landing", description: "Performance optimization", image: "/selected-work-4.png" },
  { id: 5, title: "Analytics Dashboard", description: "Data visualization & UX", image: "/selected-work-5.png" },
  { id: 6, title: "Marketing Website", description: "Landing & Conversion", image: "/selected-work-6.png" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Portfolio(): React.ReactElement {
  return (
    <ScrollReveal>
      <section id="portfolio" className="bg-black py-32">
        <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 text-center">
          <span className="text-xs tracking-widest uppercase text-[#A3FF12]">PORTFOLIO</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase text-center mb-20">SELECTED WORK</h2>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {ITEMS.map((it) => (
              <motion.div key={it.id} variants={itemVariants}>
                <PortfolioCard title={it.title} subtitle={it.description} imageSrc={it.image} href="#" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
}

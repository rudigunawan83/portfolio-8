"use client";

import React from "react";
import AnimatedSection from "../ui/AnimatedSection";
import ScrollReveal from "../ui/ScrollReveal";
import TestimonialCard from "../ui/TestimonialCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  role?: string;
  company?: string;
  companyLogo?: string;
  message: string;
};

const DATA: Testimonial[] = [
  {
    id: 1,
    name: "Thom Haye",
    role: "Project Manager",
    company: "Upwork",
    companyLogo: "/upwork.png",
    message:
      "“Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!”",
  },
  {
    id: 2,
    name: "Emily Carter",
    role: "Head of Product",
    company: "Trello",
    companyLogo: "/trello.png",
    message:
      "”An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!”",
  },
  {
    id: 3,
    name: "Sarah Lee",
    role: "Engineering Manager",
    company: "Zapier",
    companyLogo: "/zapier.png",
    message:
      "”An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!”",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Lead Developer",
    company: "Zoom",
    companyLogo: "/zoom.png",
    message:
      "A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Testimonials(): React.ReactElement {
  return (
    <ScrollReveal>
      <section id="testimonials" className="bg-black py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="mb-4">
          <span className="text-xs tracking-widest uppercase text-[#A3FF12]">TESTIMONIALS</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase mb-20">PEOPLE SAYS ABOUT ME</h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {DATA.map((d) => (
            <motion.div key={d.id} variants={itemVariants}>
              <TestimonialCard
                name={d.name}
                role={d.role}
                company={d.company}
                companyLogo={d.companyLogo}
                message={d.message}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonials"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#A3FF12] hover:text-[#A3FF12] transition-colors"
          >
            <ArrowLeft />
          </button>

          <button
            aria-label="Next testimonials"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#A3FF12] hover:text-[#A3FF12] transition-colors"
          >
            <ArrowRight />
          </button>
        </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

"use client";

import AnimatedSection from "../ui/AnimatedSection";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import type { ReactElement } from "react";

type Service = {
  id: string;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    id: "custom-dev",
    title: "Custom Website Development",
    description: "Building responsive, fast, and scalable websites tailored to your needs.",
  },
  {
    id: "perf-opt",
    title: "Web Performance Optimization",
    description: "Enhancing website speed, SEO, and overall performance for better UX.",
  },
  {
    id: "maint",
    title: "Website Maintenance & Debugging",
    description: "Fixing bugs, improving UI, and ensuring smooth performance over time.",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

type ServiceItemProps = {
  index: number;
  service: Service;
};

function ServiceItem({ index, service }: ServiceItemProps): ReactElement {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article variants={item} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 220, damping: 22 }} className="p-6 bg-white/2 rounded-lg">
      <div className="flex items-center gap-6 mb-6">
        <div className="text-zinc-500 text-sm tracking-wide font-medium">{number}</div>
        <div className="flex-1 h-[1px] bg-white/10" />
      </div>

      <div className="mb-4 mt-0">
        <Image src="/monitor.png" alt="monitor" width={28} height={28} className="object-contain" />
      </div>

      <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
    </motion.article>
  );
}

export default function Services(): ReactElement {
  return (
    <AnimatedSection id="services" className="bg-black py-28" variants={container}>
      <section>
        <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto w-full lg:w-[1200px] rounded-none flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div className="flex-1">
            <div className="text-xs tracking-widest text-[#A3FF12] font-medium mb-4">SERVICE</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight uppercase">
              MY SERVICE
              <br />
              EXPERTISE
            </h2>
          </div>

          <div className="w-1/2 flex items-start justify-end">
              <p className="text-zinc-400 w-full text-[15px] sm:text-[16px] leading-7 tracking-normal text-left lg:text-right mt-0 clamp-3 max-w-prose">
                Creating modern, intuitive, and visually consistent
                <br />
                web experiences that align with industry trends
                <br />
                and user expectations.
              </p>
          </div>
        </div>
        <motion.div variants={container} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-16">
          {SERVICES.map((s, i) => (
            <ServiceItem key={s.id} index={i} service={s} />
          ))}
        </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}

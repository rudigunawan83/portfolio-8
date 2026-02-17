"use client";

import AnimatedSection from "../ui/AnimatedSection";
import { motion, Variants } from "framer-motion";
import { Monitor } from "lucide-react";
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
    <motion.article
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="p-6"
    >
      <div className="text-zinc-500 text-sm tracking-wide font-medium">{number}</div>
      <div className="w-full h-[1px] bg-white/10 my-6" />

      <div className="mb-4">
        <Monitor size={22} className="text-[#A3FF12]" />
      </div>

      <h3 className="text-white text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">{service.description}</p>
    </motion.article>
  );
}

export default function Services(): ReactElement {
  return (
    <AnimatedSection id="services" className="bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 mb-12 items-start">
          <div>
            <div className="text-xs tracking-widest text-[#A3FF12] font-medium mb-4">SERVICE</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight uppercase">
              MY SERVICE
              <br />
              EXPERTISE
            </h2>
          </div>

          <div>
            <p className="text-zinc-400 max-w-md text-base leading-relaxed">
              Creating modern, intuitive, and visually consistent web experiences that align with industry trends and user expectations.
            </p>
          </div>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {SERVICES.map((s, i) => (
            <ServiceItem key={s.id} index={i} service={s} />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

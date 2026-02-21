"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import StarRating from "./StarRating";

type Props = {
  name: string;
  role?: string;
  company?: string;
  companyLogo?: string;
  message: string;
};

export default function TestimonialCard({ name, role, company, companyLogo, message }: Props) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-white/10 bg-black p-8 hover:border-[#A3FF12] hover:shadow-[0_8px_30px_rgba(163,255,18,0.06)] transition-all text-left"
      role="article"
      aria-label={`Testimonial from ${name}`}
      tabIndex={0}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold text-white">{name}</div>
          {role && <div className="text-sm text-zinc-400">{role}</div>}
        </div>

        <div className="flex items-center justify-center">
          {companyLogo ? (
            <div className="w-20 h-8 relative">
              <Image src={companyLogo} alt={company ?? "company"} fill className="object-contain" />
            </div>
          ) : (
            <div className="text-sm font-semibold text-white">{company}</div>
          )}
        </div>
      </div>

      <div className="mt-4">
        <StarRating />
      </div>

      <p className="mt-4 text-sm text-zinc-300 leading-relaxed">{message}</p>
    </motion.article>
  );
}

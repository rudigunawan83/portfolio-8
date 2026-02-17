"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  name: string;
  role?: string;
  text: string;
  avatar: string;
};

export default function TestimonialCard({ name, role, text, avatar }: Props) {
  return (
    <motion.blockquote
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="rounded-2xl border border-white/6 bg-white/3 p-6"
      role="article"
      aria-label={`Testimonial from ${name}`}
      tabIndex={0}
    >
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full" aria-hidden="true">
          <Image src={avatar} alt={`${name} avatar`} fill className="object-cover" />
        </div>

        <div>
          <div className="text-sm font-semibold text-white">{name}</div>
          {role && <div className="text-xs text-zinc-400">{role}</div>}
        </div>
      </div>

      <p className="mt-4 text-sm text-zinc-300">{text}</p>
    </motion.blockquote>
  );
}

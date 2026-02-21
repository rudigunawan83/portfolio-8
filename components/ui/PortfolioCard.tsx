"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  href?: string;
  tags?: string[];
};

export default function PortfolioCard({ title, subtitle, imageSrc, href = "#", tags = [] }: Props) {
  return (
    <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.35 }} className="group relative rounded-2xl text-left">
      <Link href={href} className="block">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <div className="relative w-full aspect-[4/3] transition-transform duration-500 group-hover:scale-105">
              <Image src={imageSrc} alt={title} fill className="object-cover" />
              {/* dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          </div>

          {/* Visit button overlapping bottom of image */}
          <div className="absolute left-1/2 -bottom-7 -translate-x-1/2 z-10">
            <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-white/10 shadow-sm pointer-events-auto">
                <span className="text-black text-sm font-semibold">Visit</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-left">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {subtitle && <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{subtitle}</p>}
        </div>
      </Link>
    </motion.article>
  );
}

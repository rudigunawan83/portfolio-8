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
    <motion.article
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/2 to-transparent"
    >
      <Link href={href} className="block">
        <div className="relative h-56 w-full">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-zinc-300">{subtitle}</p>}

          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="rounded-full bg-white/3 px-3 py-1 text-xs text-zinc-200">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}

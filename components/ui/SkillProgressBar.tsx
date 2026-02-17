"use client";

import { motion, useReducedMotion } from "framer-motion";
import React, { useEffect, useState } from "react";

type Props = {
  name: string;
  percent: number; // 0-100
  className?: string;
};

export default function SkillProgressBar({ name, percent, className = "" }: Props) {
  const pct = Math.max(0, Math.min(100, Math.round(percent)));
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-200">{name}</span>
        <span className="text-sm font-medium text-zinc-400">{pct}%</span>
      </div>

      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/5"
      >
        {reduce || !mounted ? (
          <div className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-500" style={{ width: `${pct}%` }} />
        ) : (
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-500"
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />
        )}
      </div>
    </div>
  );
}

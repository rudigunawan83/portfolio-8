"use client";

import React from "react";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  delay?: number;
  className?: string;
}>;

export default function ScrollReveal({ children, delay = 0, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = PropsWithChildren<{
  id?: string;
  className?: string;
}>;

export default function AnimatedSection({ id, className = "", children }: Props) {
  const shouldReduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render static markup on server and until the client mounts.
  if (shouldReduce || !mounted) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

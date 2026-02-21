"use client";

import { PropsWithChildren, useEffect } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

type Props = PropsWithChildren<{
  id: string;
  className?: string;
  variants?: any;
}>;

const defaultVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function AnimatedSection({ id, className = "", children, variants = defaultVariants }: Props) {
  const shouldReduce = useReducedMotion();
  const controls = useAnimation();

  useEffect(() => {
    // ensure we don't render initial motion styles on the server
    // set the hidden state on the client and then play the section's visible animation
    controls.set("hidden");

    const startKey = variants && typeof variants === "object"
      ? // prefer common variant names used across the codebase
        (variants.hasOwnProperty("show") ? "show" : "visible")
      : "visible";

    controls.start(startKey as any);

    const handler = (e: any) => {
      if (!e?.detail) return;
      if (e.detail === id) {
        controls.set("hidden");
        const startKey2 = variants && typeof variants === "object" ? (variants.hasOwnProperty("show") ? "show" : "visible") : "visible";
        setTimeout(() => controls.start(startKey2 as any), 50);
      }
    };

    window.addEventListener("replay-section", handler as EventListener);
    return () => window.removeEventListener("replay-section", handler as EventListener);
  }, [controls, id]);

  if (shouldReduce) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section id={id} className={className} initial={false} animate={controls} variants={variants}>
      {children}
    </motion.section>
  );
}

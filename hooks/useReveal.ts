"use client";

import { useInView } from "react-intersection-observer";
import { useMemo } from "react";
import type { RefObject } from "react";

export default function useReveal(delay = 0) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const variants = useMemo(() => ({
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
    },
  }), [delay]);

  return { ref, inView, variants };
}

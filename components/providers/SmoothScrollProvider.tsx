"use client";

import React, { PropsWithChildren, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

type Props = PropsWithChildren<{}>;

export default function SmoothScrollProvider({ children }: Props) {
  const lenisRef = useRef<any | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1 - Math.pow(1 - t, 4)),
      smooth: true,
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}

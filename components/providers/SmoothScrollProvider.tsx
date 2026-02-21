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
    // expose Lenis instance for imperative scroll control (e.g. ScrollToTop)
    try {
      (window as any).__lenis = lenis;
    } catch (e) {
      // ignore SSR or environment restrictions
    }

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      lenisRef.current = null;
      try {
        delete (window as any).__lenis;
      } catch (e) {
        /* ignore */
      }
    };
  }, []);

  return <>{children}</>;
}

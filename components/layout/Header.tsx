"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: { label: string; id: string }[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "aboutme" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "portfolio" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

export default function Header(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveSection(id);
            }
          });
        },
        { threshold: [0.5] }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function handleClick(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });

    // dispatch replay after a short delay to allow scroll to start
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("replay-section", { detail: id }));
    }, 500);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/40 border-b border-white/10 h-20" role="banner">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-32">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-block h-1 w-8 rounded bg-gradient-to-r from-[#91FF02] to-[#7CF400]" aria-hidden="true" />
          <span className="text-lg font-semibold tracking-wide text-[#91FF02]">
            Edwin Anderson
            <span className="text-[#91FF02]">.</span>
          </span>
        </Link>

        <motion.nav layout className="hidden items-center gap-6 md:flex" role="navigation" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`relative px-2 py-1 text-sm transition-colors duration-300 ${isActive ? "text-[#A3FF12]" : "text-zinc-400 hover:text-white"}`}
              >
                {item.label}

                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#A3FF12]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.nav>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((s) => !s)}
            className="rounded-md bg-white/5 p-2 text-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
          >
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-2 w-full border-t border-white/5"
          >
            <div className="mx-auto flex max-w-3xl flex-col gap-3 px-4 py-4">
              {NAV_ITEMS.map((n) => (
                <button
                  key={n.id}
                  onClick={() => {
                    handleClick(n.id);
                    setOpen(false);
                  }}
                  className="text-zinc-300 text-left w-full"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

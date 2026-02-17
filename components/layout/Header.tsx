"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  label: string;
  href: string;
};

const NAV: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#home");

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash || "#home");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

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

        <nav className="hidden items-center gap-6 md:flex" role="navigation" aria-label="Main navigation">
          {NAV.map((n) => {
            const isActive = activeHash === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`relative text-sm transition-colors duration-200 ${isActive ? "text-green-400" : "text-white/80 hover:text-green-400"}`}
              >
                {n.label}
                {isActive && <span className="absolute -bottom-3 left-0 h-0.5 w-full bg-green-400 rounded" />}
              </Link>
            );
          })}
        </nav>

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
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-zinc-300">
                  {n.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

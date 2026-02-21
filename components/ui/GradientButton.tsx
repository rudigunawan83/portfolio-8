"use client";

import React from "react";
import { cva } from "class-variance-authority";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "default" | "ghost";
};

const button = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#91FF02] to-[#7CF400] text-black hover:scale-105",
        ghost: "bg-white/5 text-white hover:bg-white/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export default function GradientButton({ children, className = "", variant, ...rest }: Props) {
  return (
    <button {...rest} className={`${button({ variant })} ${className}`}> 
      {children}
    </button>
  );
}

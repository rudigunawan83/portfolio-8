"use client";

import * as React from "react";
import { cva } from "class-variance-authority";

const shadButton = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-green-400 to-green-500 text-black hover:brightness-95",
        ghost: "bg-transparent text-white hover:bg-white/5",
        outline: "border border-white/6 text-white bg-transparent",
      },
      size: {
        sm: "px-3 py-1.5",
        md: "px-4 py-2",
        lg: "px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant, size, ...props }, ref) => {
    return <button ref={ref} className={`${shadButton({ variant, size })} ${className}`} {...props} />;
  }
);

Button.displayName = "Button";

export default Button;

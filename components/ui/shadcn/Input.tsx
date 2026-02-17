"use client";

import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full rounded-md border border-white/6 bg-white/3 px-4 py-3 text-white placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-green-400 ${className}`}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;

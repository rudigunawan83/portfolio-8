import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className = "", ...props }: CardProps) {
  return <div className={`rounded-2xl border border-white/6 bg-white/3 p-6 ${className}`} {...props} />;
}

export default Card;

"use client";

import React from "react";

type Props = {
  count?: number;
  size?: number;
  color?: string;
  className?: string;
};

export default function StarRating({ count = 5, size = 18, color = "#F59E0B", className = "" }: Props) {
  const stars = Array.from({ length: count });

  return (
    <div className={`flex items-center gap-2 ${className}`} aria-hidden="true">
      {stars.map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            fill={color}
          />
        </svg>
      ))}
    </div>
  );
}

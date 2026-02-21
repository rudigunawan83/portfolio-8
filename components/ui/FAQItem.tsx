"use client";

import React from "react";
import Image from "next/image";

type Props = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: Props) {
  return (
    <div className="pb-12 relative text-left">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <Image src="/frame.png" alt="frame" width={20} height={20} />
        </div>

        <div>
          <div className="text-white font-semibold text-lg leading-snug">{question}</div>
          <p className="text-zinc-400 text-sm leading-relaxed mt-4 max-w-xl">{answer}</p>
        </div>
      </div>

      {/* per-item separator: visible on mobile, hidden on lg where row divider is used */}
      <div className="mt-6 h-[1px] bg-white/10 relative z-0 lg:hidden" />
    </div>
  );
}

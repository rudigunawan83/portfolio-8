"use client";

import * as Accordion from "@radix-ui/react-accordion";
import AnimatedSection from "../ui/AnimatedSection";

const FAQ_ITEMS = [
  {
    id: "q1",
    q: "What technologies do you specialize in?",
    a: "I specialize in Next.js, React, TypeScript, Tailwind CSS, performance optimizations and accessible UI.",
  },
  {
    id: "q2",
    q: "Do you work on both design and development?",
    a: "Yes — I can translate Figma designs into pixel-accurate, production-ready code and collaborate with designers.",
  },
  {
    id: "q3",
    q: "How do you approach new projects?",
    a: "I start with requirements, propose an architecture, create milestones and deliver iterative, tested increments.",
  },
];

export default function FAQ(): JSX.Element {
  return (
    <AnimatedSection id="faq" className="bg-black/90 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Frequently asked questions</h2>
          <p className="mt-2 text-lg text-zinc-300">Common questions about process, timelines and technologies.</p>
        </div>

        <Accordion.Root type="single" defaultValue={FAQ_ITEMS[0].id} collapsible className="w-full">
          <div className="grid gap-4 md:grid-cols-2">
            {FAQ_ITEMS.map((it) => (
              <Accordion.Item key={it.id} value={it.id} className="overflow-hidden rounded-lg border border-white/6">
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="w-full cursor-pointer bg-transparent px-5 py-4 text-left text-white">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{it.q}</span>
                      <span className="ml-4 text-sm text-zinc-400">+</span>
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-5 pb-5 pt-0 text-zinc-300">
                  <div className="pt-3">{it.a}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </div>
        </Accordion.Root>
      </div>
    </AnimatedSection>
  );
}

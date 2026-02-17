"use client";

import AnimatedSection from "../ui/AnimatedSection";
import SkillProgressBar from "../ui/SkillProgressBar";

const SKILLS = [
  { name: "HTML/CSS", percent: 98 },
  { name: "React / Next.js", percent: 95 },
  { name: "TypeScript", percent: 92 },
  { name: "Performance", percent: 90 },
  { name: "Accessibility", percent: 88 },
];

export default function Skills(): JSX.Element {
  return (
    <AnimatedSection id="skills" className="bg-black/80 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Skills that bring ideas to life</h2>
          <p className="mt-2 text-lg text-zinc-300">
            A selection of skills I use to build maintainable, high-performance
            frontends.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <div key={s.name} className="space-y-3">
              <SkillProgressBar name={s.name} percent={s.percent} />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

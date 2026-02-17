import AnimatedSection from "../ui/AnimatedSection";

export default function WhyChooseMe(): JSX.Element {
  return (
    <AnimatedSection id="why" className="bg-black/90 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Why choose me?</h2>
          <p className="mt-2 text-lg text-zinc-300">
            I deliver pixel-accurate implementations with a strong focus on
            performance, accessibility and maintainability.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-3 w-3 rounded-full bg-green-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">React & Next.js Expertise</h3>
                  <p className="mt-1 text-sm text-zinc-300">Modern patterns, App Router, SSR/ISR and optimized images.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-3 w-3 rounded-full bg-green-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Performance First</h3>
                  <p className="mt-1 text-sm text-zinc-300">Lighthouse-focused, code-splitting and runtime optimizations.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-3 w-3 rounded-full bg-green-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Accessible & Maintainable</h3>
                  <p className="mt-1 text-sm text-zinc-300">Semantic markup, ARIA, and clean TypeScript interfaces.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-white/5 bg-white/2 p-6">
              <h4 className="text-sm font-semibold text-green-400">Working with me</h4>
              <p className="mt-2 text-sm text-zinc-300">Clear communication, planning, and timely deliveries — I treat your product like my own.</p>
            </div>

            <div className="rounded-lg border border-white/5 bg-white/2 p-6">
              <h4 className="text-sm font-semibold text-green-400">Another talent</h4>
              <p className="mt-2 text-sm text-zinc-300">I bridge design & engineering, shipping production-ready UIs with smooth interactions.</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

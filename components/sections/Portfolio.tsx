import AnimatedSection from "../ui/AnimatedSection";
import PortfolioCard from "../ui/PortfolioCard";

const ITEMS = [
  { title: "Dashboard SaaS Task Management", subtitle: "Design & Implementation", image: "/portfolio-1.svg", href: "#" },
  { title: "Mobile Finance App", subtitle: "UI/UX & Frontend", image: "/portfolio-2.svg", href: "#" },
  { title: "Dark Dashboard Kit", subtitle: "Component library", image: "/portfolio-3.svg", href: "#" },
  { title: "E-commerce Landing", subtitle: "Performance optimization", image: "/portfolio-4.svg", href: "#" },
];

export default function Portfolio(): JSX.Element {
  return (
    <AnimatedSection id="portfolio" className="bg-black/90 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Selected work</h2>
          <p className="mt-2 text-lg text-zinc-300">A selection of projects showcasing design and engineering.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <PortfolioCard key={it.title} title={it.title} subtitle={it.subtitle} imageSrc={it.image} href={it.href} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

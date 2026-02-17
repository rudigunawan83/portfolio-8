import AnimatedSection from "../ui/AnimatedSection";
import TestimonialCard from "../ui/TestimonialCard";

const DATA = [
  {
    name: "Thomas R",
    role: "Product Owner, Upwork",
    text: "Outstanding frontend developer — delivered a pixel-perfect UI and improved performance significantly.",
    avatar: "/avatar-1.svg",
  },
  {
    name: "Emily C",
    role: "Design Lead, Trello",
    text: "Great collaboration and attention to detail. Ship quality code and thoughtful interactions.",
    avatar: "/avatar-2.svg",
  },
  {
    name: "Michael D",
    role: "Engineering, Zoom",
    text: "Fast, communicative and delivered exactly what we needed — highly recommended.",
    avatar: "/avatar-3.svg",
  },
];

export default function Testimonials(): JSX.Element {
  return (
    <AnimatedSection id="testimonials" className="bg-black/90 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-white">People says about me</h2>
          <p className="mt-2 text-lg text-zinc-300">Selected feedback from clients and teammates.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map((d) => (
            <TestimonialCard key={d.name} name={d.name} role={d.role} text={d.text} avatar={d.avatar} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

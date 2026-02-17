import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Skills from "../components/sections/Skills";
import AboutMe from "../components/sections/AboutMe";
import WhyChooseMe from "../components/sections/WhyChooseMe";
import Portfolio from "../components/sections/Portfolio";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Services />
      <AboutMe />
      <Skills />
      <WhyChooseMe />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}

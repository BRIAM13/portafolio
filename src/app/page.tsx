import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

import CodeBackground from "../components/CodeBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-background min-h-screen font-sans text-white relative overflow-hidden">
      <CodeBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

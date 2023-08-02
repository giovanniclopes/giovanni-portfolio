import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Statistics from "../components/Statistics";
import WelcomeSection from "../components/WelcomeSection";

export default function Home() {
  return (
    <div className="h-max mb-5">
      <main className="flex flex-col justify-center items-center mt-60 mbl:mt-48">
        <WelcomeSection />
        <Statistics />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

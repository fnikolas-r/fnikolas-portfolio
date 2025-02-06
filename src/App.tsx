import About from "./section/About";
import ContactMe from "./section/ContactMe";
import EducationAndExperience from "./section/Experience";
import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import Projects from "./section/Projects";
import Skills from "./section/Skills";

export default function App() {
  return <main className="max-w-6xl mx-auto">
    <h1 className="text-2xl text-white">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <EducationAndExperience/>
      <ContactMe/>
    </h1>
  </main>
}
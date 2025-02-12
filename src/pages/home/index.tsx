import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import EducationAndExperience from "./Experience";
import ContactMe from "./ContactMe";
import BaseTemplate from "../base.template";

function Home() {
  return (
    <BaseTemplate>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <EducationAndExperience />
      <ContactMe />
    </BaseTemplate>
  );
}

export default Home;

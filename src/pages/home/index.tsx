import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import EducationAndExperience from "./Experience";
import ContactMe from "./ContactMe";
import BaseTemplate from "../base.template";
import SimpleModals from "../../components/SimpleModals";
import { useState } from "react";

function Home() {
  const [isOpen, setOpen] = useState(false);
  const openModal =()=> {setOpen(true)}
  const closeModal =()=> setOpen(false)
  const [modalChildren, setModalChildren] = useState<React.ReactNode>(<></>)
  
  return (
    <BaseTemplate>
      <SimpleModals isOpen={isOpen} onClose={closeModal}>{modalChildren}</SimpleModals>
      <Hero />
      <About />
      <Skills/>
      <Projects modalHandler={[openModal, setModalChildren]}/>
      <EducationAndExperience />
      <ContactMe />
    </BaseTemplate>
  );
}

export default Home;

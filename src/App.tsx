import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from "./section/About";
import ContactMe from "./section/ContactMe";
import EducationAndExperience from "./section/Experience";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import Projects from "./section/Projects";
import Skills from "./section/Skills";
import { ToastContainer, toast } from 'react-toastify';


export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <main className="max-w-6xl mx-auto text-white">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <EducationAndExperience />
          <ContactMe />
          <Footer />
          <ToastContainer/>
      </main>
    </QueryClientProvider>
  );
}

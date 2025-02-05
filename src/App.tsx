import About from "./section/About";
import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import Skills from "./section/Skills";

export default function App() {
  return <main className="max-w-6xl mx-auto">
    <h1 className="text-2xl text-white">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
    </h1>
  </main>
}
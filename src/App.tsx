import Hero from "./section/Hero";
import Navbar from "./section/Navbar";

export default function App() {
  return <main className="max-w-6xl mx-auto">
    <h1 className="text-2xl text-white">
      <Navbar/>
      <Hero/>
    </h1>
  </main>
}
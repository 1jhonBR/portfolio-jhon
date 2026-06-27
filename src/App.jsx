import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;

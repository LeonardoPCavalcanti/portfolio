import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Cursor from './components/ui/Cursor';
import LightsOutToggle from './components/ui/LightsOutToggle';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

/**
 * Portfólio de página única: todas as seções são âncoras de scroll suave.
 * O cursor customizado e o toggle "lights out" são overlays globais.
 */
export default function App() {
  return (
    <>
      <Cursor />
      <Header />

      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <LightsOutToggle />
    </>
  );
}

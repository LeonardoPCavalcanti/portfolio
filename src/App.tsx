import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Projects from './components/sections/Projects';
import Research from './components/sections/Research';
import Stack from './components/sections/Stack';
import Experience from './components/sections/Experience';
import Faq from './components/sections/Faq';
import Contact from './components/sections/Contact';

/**
 * Página única: topo laranja, seções em papel claro, uma faixa preta.
 * Todo conteúdo vem de src/data em PT e EN; nada de skill sem evidência.
 */
export default function App() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Stats />
        <Projects />
        <Research />
        <Stack />
        <Experience />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

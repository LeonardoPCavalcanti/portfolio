import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import FocusAreas from './components/sections/FocusAreas';
import Projects from './components/sections/Projects';
import References from './components/sections/References';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

/**
 * Portfólio de página única no estilo editorial da wibify.agency.
 * As seções são âncoras de scroll suave; a navegação é uma pílula de vidro
 * flutuante. O fio condutor é acadêmico: cada projeto e cada referência
 * existem para compartilhar conhecimento com quem visita o perfil.
 */
export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FocusAreas />
        <Projects />
        <References />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

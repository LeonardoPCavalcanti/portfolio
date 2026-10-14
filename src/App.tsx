import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Projects from './components/sections/Projects';
import Research from './components/sections/Research';
import Stack from './components/sections/Stack';

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
      </main>
    </>
  );
}

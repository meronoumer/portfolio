import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Research } from '@/components/sections/Research';
import { Projects } from '@/components/sections/Projects';
import { Leadership } from '@/components/sections/Leadership';
import { Skills } from '@/components/sections/Skills';
import { EducationCertifications } from '@/components/sections/EducationCertifications';
import { Contact } from '@/components/sections/Contact';

function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Research />
        <Projects />
        <Leadership />
        <Skills />
        <EducationCertifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

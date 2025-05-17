// src/pages/index.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoIAm from '@/components/WhoIAm';
import Projects from '@/components/Projects';
import PersonalBrand from '@/components/PersonalBrand';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FootprintTrail from '@/components/FootprintTrail';


export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <FootprintTrail />
      <Navbar />
      <Hero />
      <WhoIAm />
      <Projects />
      <PersonalBrand />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Quién soy' },
  { id: 'brand', label: 'Marca personal' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'contact', label: 'Contacto' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = 'home';

      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.offsetTop;
          if (scrollY >= offsetTop - 200) {
            current = section.id;
          }
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar al cargar

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // Marcar como activa al hacer clic
    }
  };

  return (
    <motion.nav
      className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="pointer-events-auto bg-white/80 backdrop-blur-md shadow-xl shadow-gray-300/40 rounded-2xl px-6 py-3 w-[95%] max-w-6xl flex justify-center">
        <ul className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base text-black font-semibold justify-center">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <motion.button
                onClick={() => handleScrollTo(id)}
                aria-label={`Ir a ${label}`}
                className={`px-4 py-2 rounded-full transition-all duration-300 focus:outline-none ${
                  activeSection === id
                    ? 'bg-[#56A6A6] text-white shadow-md'
                    : 'bg-transparent text-black'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

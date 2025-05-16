'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'whoiam', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'contact', label: 'Contacto' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let visibleSectionId = activeSection;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            visibleSectionId = entry.target.id;
          }
        });

        if (visibleSectionId !== activeSection) {
          setActiveSection(visibleSectionId);
        }
      },
      {
        rootMargin: '0px 0px -70% 0px',
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="pointer-events-auto bg-white/80 backdrop-blur-md shadow-xl shadow-gray-300/40 rounded-2xl px-6 py-3 max-w-3xl w-[90%] flex justify-center">
        <ul className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base text-black font-semibold">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <motion.button
                onClick={() => handleScrollTo(id)}
                aria-label={`Ir a ${label}`}
                aria-current={activeSection === id ? 'page' : undefined}
                className="px-4 py-2 rounded-full focus:outline-none"
                whileHover={{ scale: 1.1, boxShadow: '0 4px 15px rgba(72, 187, 120, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{
                  backgroundColor: activeSection === id ? '#14B8A6' : 'transparent',
                  color: activeSection === id ? 'white' : 'black',
                  boxShadow: activeSection === id ? '0 4px 10px rgba(20, 184, 166, 0.5)' : 'none',
                }}
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

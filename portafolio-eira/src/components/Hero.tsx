'use client';

import Image from 'next/image';
import logo from '../../public/logo.svg';
import patitas from '../../public/patitas.svg';
import TextPressure from "@/blocks/TextAnimations/TextPressure/TextPressure";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-white to-gray-50 relative"
    >
      {/* Patitas SVG izquierda */}
      <motion.div
        className="absolute left-0 top-95 w-[400px] h-[800px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Image
          src={patitas}
          alt="Huellas de pájaro izquierda"
          fill
          style={{ 
            objectFit: 'contain',
            transform: 'rotate(-10deg) translate(15%, -10%)'
          }}
          priority
        />
      </motion.div>

      {/* Patitas SVG derecha */}
      <motion.div
        className="absolute right-0 top-65 w-[400px] h-[800px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <Image
          src={patitas}
          alt="Huellas de pájaro derecha"
          fill
          style={{ 
            objectFit: 'contain',
            transform: 'rotate(-90deg) translate(-15%, -10%)' // Rotación opuesta
          }}
          priority
        />
      </motion.div>

      {/* Contenido existente */}
      <motion.div
        className="w-full max-w-6xl flex flex-col items-center text-center " // Aumentado max-w y gap
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* Título animado */}
        <motion.h1
          className="text-9xl md:text-[20rem] font-extrabold" // Aumentado más el tamaño
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <TextPressure
            text={'Hola, soy'}
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#000000"
            strokeColor="#ff0000"
            minFontSize={150} // Aumentado significativamente
            className="text-9xl md:text-[20rem]" // Aumentado para coincidir
          />
        </motion.h1>

        {/* Logo animado */}
        <motion.div
          className="w-60 h-60 md:w-96 md:h-96 relative" // Aumentado tamaño del logo
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
        >
          <Image
            src={logo}
            alt="Mi logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </motion.div>

        {/* Profesión */}
        <motion.p
          className="text-2xl md:text-[24px] text-black font-light font-poppins" // Cambiado a Poppins Light y tamaño fijo
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Marketing Designer & Strategic Thinker
        </motion.p>
      </motion.div>
    </section>
  );
}

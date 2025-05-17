'use client';

import Image from 'next/image';
import logo from '../../public/logo.svg';
import patitas from '../../public/patitas.svg';
import TextPressure from "@/blocks/TextAnimations/TextPressure/TextPressure";
import { motion } from 'framer-motion';
import FallingLeaves from '@/components/FallingLeaves';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[110vh] md:min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-white to-white relative -mt-24 md:mt-0" // Aumentado height en móvil y más margin top negativo
    >
      <FallingLeaves />
      {/* Patitas SVG izquierda */}
      <motion.div
        className="absolute -left-18 md:left-[-4rem] top-[70%] md:top-110 w-[250px] md:w-[400px] h-[500px] md:h-[800px]" // Ajustado left para móvil
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Image
          src={patitas}
          alt="Huellas de pájaro izquierda"
          fill
          className="object-contain scale-[0.7] md:scale-80 rotate-[-10deg] translate-x-[15%] translate-y-[-10%]"
          priority
        />
      </motion.div>

      {/* Patitas SVG derecha */}
      <motion.div
        className="absolute -right-18 md:right-[-4rem] top-[70%] md:top-110 w-[250px] md:w-[400px] h-[500px] md:h-[800px]" // Ajustado right para móvil
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <Image
          src={patitas}
          alt="Huellas de pájaro derecha"
          fill
          className="object-contain scale-[0.7] md:scale-80 rotate-[-100deg] translate-x-[-15%] translate-y-[-10%]"
          priority
        />
      </motion.div>

      {/* Contenido principal */}
      <motion.div
        className="w-full max-w-6xl flex flex-col items-center text-center -mt-16 md:mt-0" // Añadido margin top negativo solo en móvil
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* Título animado */}
        <motion.h1
  className="text-[3rem] md:text-[8rem] lg:text-[10vw] font-extrabold"
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
    minFontSize={60} // Más grande para pantallas pequeñas
    className="text-[5.5rem] md:text-[8rem] lg:text-[8vw]"
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
          className="text-2xl md:text-[24px] text-black font-[300] font-poppins"
          style={{ fontFamily: 'Poppins, sans-serif' }}
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

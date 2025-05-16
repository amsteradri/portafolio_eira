'use client';

import Image from 'next/image';
import logo from '../../public/logo.png';
import TextPressure from "@/blocks/TextAnimations/TextPressure/TextPressure";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-8"
    >
      <motion.div
        className="max-w-6xl w-full flex flex-col items-start mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-8 w-full relative">
          
          {/* Texto animado */}
          <motion.div
            className="flex flex-col leading-none min-w-[300px] max-w-[500px] sm:min-w-[300px] sm:max-w-[500px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <h1 className="text-7xl md:text-7xl font-extrabold text-center sm:text-left">
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
                minFontSize={30}
                className="text-3xl"
              />
            </h1>
            <motion.p
              className="text-3xl md:text-2xl text-black font-semibold mt-2 text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Marketing Designer & Strategic Thinker
            </motion.p>
          </motion.div>

          {/* Logo */}
          <motion.div
            className="
              pointer-events-none 
              sm:absolute sm:right-[8rem] sm:top-[100%] sm:-translate-y-40 sm:w-[34rem] sm:h-[34rem]
              w-60 h-60 mt-8 sm:mt-0 sm:self-start
            "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.9, ease: 'easeOut' }}
          >
            <Image
              src={logo}
              alt="Mi logo"
              width={344}
              height={344}
              style={{ objectFit: 'contain' }}
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

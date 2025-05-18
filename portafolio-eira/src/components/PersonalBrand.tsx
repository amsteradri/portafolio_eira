import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '../../public/logo.svg';

export default function PersonalBrand() {
  const firstRowTags = [
    "Cuervo: Influencia nórdica",
    "Minimalismo",
    "Limpio",
  ];

  const secondRowTags = [
    "Geométrico",
    "Estético",
    "Mítico"
  ];

  return (
    <section id="brand" className="min-h-screen py-12 md:py-20 px-2 md:px-8 bg-white ">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <motion.div 
          className="w-[25rem] h-[25rem] md:w-[500px] md:h-[500px] relative mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src={logo}
            alt="Logo Eira Utrera"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Tags */}
        <div className="flex flex-col gap-6 md:gap-6 w-full">
          {/* Tags en móvil: 2 columnas, desktop: 3 columnas */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[...firstRowTags, ...secondRowTags].map((tag, index) => (
              <motion.span
                key={index}
                className="bg-[#56A6A6] text-white px-4 md:px-8 py-4 md:py-3 rounded-full text-[13px] md:text-base text-center flex items-center justify-center min-h-[4rem] md:min-h-0"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

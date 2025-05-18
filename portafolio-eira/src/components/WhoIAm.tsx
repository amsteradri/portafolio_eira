import Image from 'next/image';
import { motion } from 'framer-motion';
import eira from '../../public/eira.svg';

export default function WhoIAm() {
  return (
    <section id="about" className="py-12 md:py-40 px-4 md:px-8 bg-white mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Contenido del lado izquierdo */}
        <div className="flex-1 space-y-6 w-full">
          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#56A6A6] text-white px-4 py-1 rounded-full text-sm style={{ fontFamily: 'Poppins, sans-serif' }}">
              21
            </span>
            <span className="bg-[#56A6A6] text-white px-4 py-1 rounded-full text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Barcelona
            </span>
            <span className="bg-[#56A6A6] text-white px-4 py-1 rounded-full text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Estudiante de Marketing&Publicidad
            </span>
          </div>

          {/* Título */}
          <h2 className="text-5xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Soy Eira Utrera
          </h2>

          {/* Párrafos */}
          <div className="space-y-4 text-gray-700">
            <p style={{ fontFamily: 'Poppins, sans-serif' }}>
              Tengo 21 años y estoy construyendo mi camino en el mundo del diseño gráfico y el marketing.
            </p>
            <p style={{ fontFamily: 'Poppins, sans-serif' }}>
              Me apasiona crear identidades visuales con intención y pensar estrategias que conecten marcas con personas.
            </p>
            <p style={{ fontFamily: 'Poppins, sans-serif' }}>
              Me gusta observar, analizar y buscar soluciones que comuniquen de forma clara, coherente y con personalidad.
            </p>
            <p style={{ fontFamily: 'Poppins, sans-serif' }}>
              Me mueve la estética, pero también el pensamiento estratégico. Disfruto tanto de crear como de entender el porqué detrás de cada decisión visual.
            </p>
            <p style={{ fontFamily: 'Poppins, sans-serif' }}>
              Aunque estoy empezando, tengo claro lo que busco: trabajar con autenticidad, cuidar cada proceso y aprender constantemente. Valoro lo simple, lo bien hecho y lo que tiene sentido.
            </p>
          </div>
        </div>

        {/* Imagen - ajustada para móvil */}
        <motion.div 
          className="w-full md:flex-1 mt-[-5rem] md:mb-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full aspect-[3/4] max-w-[280px] md:max-w-md mx-auto">
            <Image
              src={eira}
              alt="Eira Utrera"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

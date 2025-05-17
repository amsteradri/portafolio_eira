import { motion } from 'framer-motion';

// src/components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-8 bg-white border-t-2 border-[#56A6A6]">
      <div className="max-w-4xl mx-auto mt-15">
        {/* Título y correo */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-lg font-semibold mb-6 bg-[#56A6A6] text-white py-2 px-6 rounded-full inline-block"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Contacto
          </motion.h2>
          <motion.a
            href="mailto:eirautrera@gmail.com"
            className="text-[#56A6A6] hover:text-[#458585] transition-colors text-lg block"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            eirautrera@gmail.com
          </motion.a>
        </div>

        {/* Formulario */}
        <motion.form
          className="max-w-2xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            {/* Nombre */}
            <div>
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-6 py-3 rounded-full border-2 border-[#56A6A6] focus:outline-none focus:border-[#458585] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-3 rounded-full border-2 border-[#56A6A6] focus:outline-none focus:border-[#458585] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                required
              />
            </div>

            {/* Mensaje */}
            <div>
              <textarea
                placeholder="Mensaje"
                rows={5}
                className="w-full px-6 py-3 rounded-3xl border-2 border-[#56A6A6] focus:outline-none focus:border-[#458585] transition-colors resize-none"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                required
              />
            </div>
          </div>

          {/* Botón enviar */}
          <motion.button
            type="submit"
            className="w-full bg-[#56A6A6] text-white py-3 px-8 rounded-full hover:bg-[#458585] transition-colors"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Enviar mensaje
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-8 bg-white ">
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
          ref={form}
          onSubmit={handleSubmit}
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
                name="user_name" // Importante: debe coincidir con tu template
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
                name="user_email" // Importante: debe coincidir con tu template
                placeholder="Email"
                className="w-full px-6 py-3 rounded-full border-2 border-[#56A6A6] focus:outline-none focus:border-[#458585] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                required
              />
            </div>

            {/* Mensaje */}
            <div>
              <textarea
                name="message" // Importante: debe coincidir con tu template
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
            disabled={isSubmitting}
            className={`w-full py-3 px-8 rounded-full transition-colors ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#56A6A6] hover:bg-[#458585]'
            } text-white`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </motion.button>

          {/* Mensajes de estado */}
          {submitStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 text-center mt-4"
            >
              ¡Mensaje enviado con éxito!
            </motion.p>
          )}
          
          {submitStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-600 text-center mt-4"
            >
              Error al enviar el mensaje. Por favor, inténtalo de nuevo.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

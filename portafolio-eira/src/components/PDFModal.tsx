import { motion, AnimatePresence } from 'framer-motion';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

export default function PDFModal({ isOpen, onClose, pdfUrl }: PDFModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4" // Cambiado aquí
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white/90 rounded-lg p-4 w-full max-w-4xl max-h-[90vh] flex flex-col shadow-xl" // Añadido shadow y fondo semi-transparente
          >
            <div className="flex justify-between items-center mb-4">
              <a
                href={pdfUrl}
                download
                className="bg-[#56A6A6] text-white px-4 py-2 rounded-full hover:bg-[#458585] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Descargar PDF
              </a>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-auto">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={pdfUrl} />
              </Worker>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
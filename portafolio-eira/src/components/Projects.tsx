import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import kataraktaLogo from '../../public/projects/katarakta.svg';
import studioLogo from '../../public/projects/505studio-logo.svg';
import financetrustLogo from '../../public/projects/financetrust-logo.svg';
import kanangaLogo from '../../public/projects/kananga-logo.svg';
import aestheticlabLogo from '../../public/projects/aestheticlab-logo.svg';
import splashLogo from '../../public/projects/123splash.svg';
import PDFModal from './PDFModal';

const projects = [
	{
		id: 1,
		name: 'Katarakta',
		description:
			'Marca de botellas filtrantes inspirada en la naturaleza de los Pirineos.',
		logo: kataraktaLogo,
		pdf: '/pdfs/katarakta.pdf', // Añade la ruta a tu PDF
	},
	{
		id: 2,
		name: '505 Studio',
		description:
			'Branding estudio creativo a medio camino entre Madrid y Barcelona',
		logo: studioLogo,
	},
	{
		id: 3,
		name: 'FinanceTrust',
		description: 'Creación de marca financiera',
		logo: financetrustLogo,
		pdf: '/pdfs/financetrust.pdf',
	},
	{
		id: 4,
		name: 'Kananga',
		description: 'Creación de una campaña transmedia de una PIME de safaris',
		logo: kanangaLogo,
		pdf: '/pdfs/kananga.pdf',
	},
	{
		id: 5,
		name: 'Aestheticlab',
		description: 'Creación de marca de ropa streetwear',
		logo: aestheticlabLogo,
		pdf: '/pdfs/aestheticlab.pdf',
	},
	{
		id: 6,
		name: '1,2,3 Splash',
		description: 'Creación y ejecución de un evento del Club Natación Barcelona ',
		logo: splashLogo,
		pdf: '/pdfs/123splash.pdf',
	},
];

export default function Projects() {
	const [selectedPDF, setSelectedPDF] = useState<string | null>(null);

	return (
		// Sección principal de proyectos
		<section id="projects" className="min-h-screen py-15 px-8 bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
					{projects.map((project) => (
						<motion.div
							key={project.id}
							className="flex flex-col items-center p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow relative"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
						>
							{/* Logo del proyecto */}
							<div className="w-50 h-50 relative mb-5">
								<Image
									src={project.logo}
									alt={`${project.name} logo`}
									fill
									className="object-contain"
								/>
							</div>

							{/* Contenido del proyecto */}
							<div className="w-full mt-8">
								{/* Nombre del proyecto */}
								<div className="w-full bg-[#56A6A6] text-white py-2 px-4 rounded-full text-center mb-4">
									<h3
										className="font-poppins text-lg"
										style={{ fontFamily: 'Poppins, sans-serif' }}
									>
										{project.name}
									</h3>
								</div>
								{/* Descripción del proyecto */}
								<p
									className="text-center text-gray-600 font-poppins text-sm"
									style={{ fontFamily: 'Poppins, sans-serif' }}
								>
									{project.description}
								</p>
							</div>

							{/* Botones de acción */}
							{project.pdf && (
								<button
									onClick={() => setSelectedPDF(project.pdf)}
									className="mt-4 text-[#56A6A6] hover:text-[#458585] underline"
									style={{ fontFamily: 'Poppins, sans-serif' }}
								>
									Ver proyecto completo
								</button>
							)}

							{project.name === '505 Studio' && (
								<a
									href="https://505-studio.vercel.app/"
									target="_blank"
									rel="noopener noreferrer"
									className="mt-4 text-[#56A6A6] hover:text-[#458585] font-poppins text-md underline"
									style={{ fontFamily: 'Poppins, sans-serif' }}
								>
									Visita la página web
								</a>
							)}
						</motion.div>
					))}
				</div>
			</div>

			{/* Modal del PDF */}
			<PDFModal
				isOpen={!!selectedPDF}
				onClose={() => setSelectedPDF(null)}
				pdfUrl={selectedPDF || ''}
			/>
		</section>
	);
}

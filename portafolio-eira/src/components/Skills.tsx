import Image from 'next/image';
import { motion } from 'framer-motion';

// Definimos las habilidades con sus niveles
const skills = [
	{
		name: 'Adobe Xd',
		level: 25,
		icon: '/skills/xd.svg',
	},
	{
		name: 'Adobe Illustrator',
		level: 75,
		icon: '/skills/ai.svg',
	},
	{
		name: 'Adobe Photoshop',
		level: 70,
		icon: '/skills/ps.svg',
	},
	{
		name: 'Adobe InDesign',
		level: 45,
		icon: '/skills/id.svg',
	},
	{
		name: 'Adobe Premiere',
		level: 60,
		icon: '/skills/pr.svg',
	},
	{
		name: 'Figma',
		level: 30,
		icon: '/skills/figma.svg',
	},
];

export default function Skills() {
	return (
		<section
			id="skills"
			className="min-h-screen py-20 px-8 bg-white border-t-2 border-[#56A6A6]"
		>
			<div className="max-w-5xl mx-auto mt-10">
				{/* Título */}
				<motion.h2
					className="text-lg font-semibold mb-10 bg-[#56A6A6] text-white py-2 px-6 rounded-full inline-block" // Reducido tamaño y padding
					style={{ fontFamily: 'Poppins, sans-serif' }}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Estudiante de Marketing & Publicidad
				</motion.h2>

				{/* Grid de habilidades */}
				<div className="grid grid-cols-1 gap-12">
					{skills.map((skill, index) => (
						<motion.div
							key={skill.name}
							className="flex items-center gap-6"
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							{/* Icono */}
							<div className="w-16 h-16 relative">
								<Image
									src={skill.icon}
									alt={skill.name}
									fill
									className="object-contain"
								/>
							</div>

							{/* Barra de progreso */}
							<div className="flex-1 relative"> {/* Quitamos el flex y gap-4 del contenedor padre */}
								<motion.div
									className="h-4 bg-[#56A6A6] rounded-full"
									initial={{ width: 0 }}
									whileInView={{ width: `${skill.level}%` }}
									transition={{ duration: 1, delay: index * 0.1 }}
									viewport={{ once: true }}
								/>
								<motion.span
									className="absolute text-xl font-bold text-[#56A6A6]" // Aumentado tamaño y peso
									style={{
										left: `${skill.level}%`,
										top: '50%',
										transform: 'translateY(-50%)',
										marginLeft: '8px' // Espaciado desde el final de la barra
									}}
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
									viewport={{ once: true }}
								>
									{skill.level}%
								</motion.span>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

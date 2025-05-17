'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
	{ id: 'home', label: 'Inicio' },
	{ id: 'about', label: 'Quién soy' },
	{ id: 'projects', label: 'Proyectos' },
	{ id: 'brand', label: 'Marca personal' },
	{ id: 'skills', label: 'Habilidades' },
	{ id: 'contact', label: 'Contacto' },
];

export default function Navbar() {
	const [activeSection, setActiveSection] = useState<string>('home');
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			let current = 'home';

			for (let section of sections) {
				const el = document.getElementById(section.id);
				if (el) {
					const offsetTop = el.offsetTop;
					if (scrollY >= offsetTop - 200) {
						current = section.id;
					}
				}
			}

			if (current !== activeSection) {
				setActiveSection(current);
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Llamar al cargar

		return () => window.removeEventListener('scroll', handleScroll);
	}, [activeSection]);

	const handleScrollTo = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setActiveSection(id); // Marcar como activa al hacer clic
		}
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<motion.nav
			className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: 'easeOut' }}
		>
			<div className="pointer-events-auto md:bg-white/80 md:backdrop-blur-md md:shadow-xl md:shadow-gray-300/40 rounded-2xl px-6 py-3 w-[95%] max-w-6xl">
				{/* Botón hamburguesa para móvil */}
				<button
					className="md:hidden absolute left-6 top-4 z-50"
					onClick={toggleMenu}
					aria-label="Toggle menu"
				>
					<div className="w-6 h-5 flex flex-col justify-between">
						<span
							className={`w-full h-0.5 bg-[#56A6A6] transform transition-all duration-300 ${
								isMenuOpen ? 'rotate-45 translate-y-2' : ''
							}`}
						/>
						<span
							className={`w-full h-0.5 bg-[#56A6A6] transition-all duration-300 ${
								isMenuOpen ? 'opacity-0' : ''
							}`}
						/>
						<span
							className={`w-full h-0.5 bg-[#56A6A6] transform transition-all duration-300 ${
								isMenuOpen ? '-rotate-45 -translate-y-2' : ''
							}`}
						/>
					</div>
				</button>

				{/* Menú para desktop */}
				<ul className="hidden md:flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base text-black font-semibold justify-center">
					{sections.map(({ id, label }) => (
						<li key={id}>
							<motion.button
								onClick={() => handleScrollTo(id)}
								aria-label={`Ir a ${label}`}
								className={`px-4 py-2 rounded-full transition-all duration-300 focus:outline-none ${
									activeSection === id
										? 'bg-[#56A6A6] text-white shadow-md'
										: 'bg-transparent text-black'
								}`}
								whileTap={{ scale: 0.95 }}
								style={{ fontFamily: 'Poppins, sans-serif' }}
							>
								{label}
							</motion.button>
						</li>
					))}
				</ul>

				{/* Menú móvil */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-40"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
						>
							<ul className="flex flex-col items-center justify-center h-screen gap-6 text-lg">
								{sections.map(({ id, label }) => (
									<motion.li
										key={id}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -20 }}
										transition={{ duration: 0.3 }}
									>
										<button
											onClick={() => {
												handleScrollTo(id);
												setIsMenuOpen(false);
											}}
											className={`px-6 py-3 rounded-full transition-all duration-300 focus:outline-none ${
												activeSection === id
													? 'bg-[#56A6A6] text-white shadow-md'
													: 'bg-transparent text-black'
											}`}
											style={{ fontFamily: 'Poppins, sans-serif' }}
										>
											{label}
										</button>
									</motion.li>
								))}
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
}

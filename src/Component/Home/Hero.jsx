import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import altierhub from '../../assets/altier-hub.webp';
import gearhub from '../../assets/gear-hub.webp';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    // Estados para controlar el hover (la división 65/35)
    const [activeSide, setActiveSide] = useState(null); // 'gear' | 'atelier' | null

    // Nuevo estado para controlar el click (expansión al 100%)
    const navigate = useNavigate();

    const [selectedSide, setSelectedSide] = useState(null); // 'gear' | 'atelier' | null

    // Función para manejar el click y la expansión
    const handleSelection = (side) => {
        // Si ya hay uno seleccionado, no hacemos nada (evita doble click molesto)
        if (selectedSide) return;

        setSelectedSide(side);

        // Aquí podrías añadir un pequeño delay y luego navegar a la tienda real
        // setTimeout(() => { navigate(`/${side}`); }, 1200); 
    };

    return (
        // Nota: Cambié p-45 por p-12 o p-10 (p-45 no es una clase estándar de Tailwind por defecto, pero si la tienes configurada en tu tailwind.config.js, puedes volver a ponerla).
        <motion.section
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="relative flex h-screen w-full overflow-hidden bg-black font-sans pt-44 pb-10 pr-10 pl-10">

            {/* --- LADO WOLF GEAR --- */}
            <motion.section
                onMouseEnter={() => { if (!selectedSide) setActiveSide('gear'); }}
                onMouseLeave={() => { if (!selectedSide) setActiveSide(null); }}
                onClick={() => handleSelection('gear')}
                initial={false}
                animate={{
                    width: selectedSide === 'gear' ? '100%' : selectedSide === 'atelier' ? '0%' : (activeSide === 'gear' ? '65%' : activeSide === 'atelier' ? '35%' : '50%')
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-center justify-center overflow-hidden border-r border-white/5 ${selectedSide ? 'cursor-default' : 'cursor-pointer'}`} >

                <div className={`absolute inset-0 transition-opacity duration-1000 ${selectedSide === 'gear' || activeSide === 'gear' ? 'opacity-100' : 'opacity-30'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-black z-10" />
                    {/* CORRECCIÓN AQUÍ: Uso de style={{ backgroundImage: ... }} */}
                    <div
                        className="w-full h-full rounded-l-2xl bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
                        style={{ backgroundImage: `url(${gearhub})` }}
                    />
                </div>

                <AnimatePresence>
                    {selectedSide !== 'atelier' && (
                        <motion.div exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.4 }} className="relative z-20 text-center px-6" >
                            <motion.h2 animate={{ scale: activeSide === 'gear' || selectedSide === 'gear' ? 1.1 : 1 }} className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase">
                                Wolf <span className="text-red-600">Gear</span>
                            </motion.h2>
                            <AnimatePresence>
                                {(activeSide === 'gear' || selectedSide === 'gear') && (
                                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="mt-6" >
                                        <p className="text-gray-300 text-lg md:text-xl font-light tracking-widest uppercase">Engineered for the Fearless</p>
                                        <button onClick={() => navigate('/gear')} className="mt-8 px-10 py-4 bg-red-600 text-white text-lg font-bold hover:bg-white hover:text-black transition-colors duration-300 transform hover:scale-105">
                                            {selectedSide === 'gear' ? 'Cargando Rendimiento...' : 'Entrar a la Pista'}
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.section>

            {/* --- LADO WOLF ATELIER --- */}
            <motion.section
                onMouseEnter={() => { if (!selectedSide) setActiveSide('atelier'); }}
                onMouseLeave={() => { if (!selectedSide) setActiveSide(null); }}
                onClick={() => handleSelection('atelier')}
                initial={false}
                animate={{
                    width: selectedSide === 'atelier' ? '100%' : selectedSide === 'gear' ? '0%' : (activeSide === 'atelier' ? '65%' : activeSide === 'gear' ? '35%' : '50%')
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-center justify-center overflow-hidden ${selectedSide ? 'cursor-default' : 'cursor-pointer'}`}>

                <div className={`absolute inset-0 transition-opacity duration-1000 ${selectedSide === 'atelier' || activeSide === 'atelier' ? 'opacity-100' : 'opacity-30'}`}>
                    <div className="absolute inset-0 bg-gradient-to-bl from-amber-900/30 to-black z-10" />
                    {/* CORRECCIÓN AQUÍ: Uso de style={{ backgroundImage: ... }} */}
                    <div
                        className="w-full h-full rounded-r-2xl bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
                        style={{ backgroundImage: `url(${altierhub})` }}
                    />
                </div>

                <AnimatePresence>
                    {selectedSide !== 'gear' && (
                        <motion.div exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.4 }} className="relative z-20 text-center px-6">
                            <motion.h2 animate={{ scale: activeSide === 'atelier' || selectedSide === 'atelier' ? 1.1 : 1 }} className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-white tracking-tight">
                                Wolf <span className="text-amber-200">Atelier</span>
                            </motion.h2>
                            <AnimatePresence>
                                {(activeSide === 'atelier' || selectedSide === 'atelier') && (
                                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="mt-6">
                                        <p className="text-amber-100/70 text-lg md:text-xl font-light tracking-widest uppercase">Curated Excellence</p>
                                        <button onClick={() => navigate('/altier')} className="mt-8 px-10 py-4 border border-amber-200 text-amber-200 text-lg font-medium hover:bg-amber-200 hover:text-black transition-colors duration-300 transform hover:scale-105">
                                            {selectedSide === 'atelier' ? 'Preparando Colección...' : 'Descubrir el Lujo'}
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.section>

        </motion.section>
    );
};

export default Hero;
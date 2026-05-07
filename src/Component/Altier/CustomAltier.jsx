import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hammer, Ruler, Palette, ChevronRight, Info, Box, ShoppingCart } from 'lucide-react';
import NavbarAtelier from './NavbarAltier';

const CustomizerAtelier = () => {
    const [selectedColor, setSelectedColor] = useState('Carbon');
    const [material, setMaterial] = useState('Heavy Cotton');
    const [accessories, setAccessories] = useState(1); // Estado para los accesorios

    const colors = [
        { name: 'Carbon', class: 'bg-neutral-900' },
        { name: 'Blood', class: 'bg-neutral-800' },
        { name: 'Concrete', class: 'bg-neutral-700' },
    ];

    return (
        <>
            <NavbarAtelier />
            <section className="min-h-screen bg-black text-neutral-200 selection:bg-[#D4AF37] selection:text-black flex flex-col justify-center overflow-x-hidden font-sans">
                <div className="max-w-[1600px] mx-auto px-6 py-24 md:py-32">

                    {/* HEADER */}
                    <div className="mb-20 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-neutral-800 pb-8">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.4em] uppercase">
                                    Atelier Customization
                                </span>
                                <div className="h-[1px] w-12 bg-[#D4AF37]/50"></div>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none text-neutral-500">
                                Diseña <span className={`transition-all duration-700 ease-in-out ${selectedColor === 'Carbon' ? 'text-white' : 'text-neutral-500'}`}>Tu</span> Gear
                            </h2>
                        </div>
                    </div>

                    {/* GRID PRINCIPAL */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">

                        {/* COLUMNA IZQUIERDA: SELECTOR DE COLOR */}
                        <div className="lg:col-span-3 flex flex-col gap-6 border-r border-neutral-800 pr-8">
                            <div>
                                <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <Hammer className="w-4 h-4 text-neutral-400" />
                                    Base de Material
                                </h3>
                                <div className="relative flex flex-col gap-3">
                                    {colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color.name)}
                                            className={`group relative flex items-center gap-4 px-4 py-4 outline-none transition-all duration-300 rounded-sm ${selectedColor === color.name ? 'bg-neutral-900 border border-neutral-700' : 'bg-transparent border border-transparent'
                                                }`}
                                        >
                                            <div className={`w-6 h-6 rounded-sm transition-all duration-500 ${selectedColor === color.name ? 'ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-black' : ''} ${color.class}`}></div>

                                            <span className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 ${selectedColor === color.name ? 'text-white' : 'text-neutral-500'
                                                }`}>
                                                {color.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-10">
                                <button className="group flex items-center gap-3 text-[10px] font-bold text-[#D4AF37] hover:text-white transition-colors tracking-widest uppercase">
                                    <Info className="w-4 h-4" />
                                    Specs Técnicas
                                    <ChevronRight className="w-4 h-4 -translate-x-1 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* COLUMNA CENTRAL: PREVIEW */}
                        <div className="lg:col-span-6 relative bg-neutral-950 rounded-sm border border-neutral-800 p-8 flex flex-col items-center justify-center min-h-[500px] overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(#D4AF37 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>

                            <motion.div
                                key={selectedColor}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative z-10 w-full max-w-sm"
                            >
                                <div className="aspect-[4/5] bg-neutral-900 rounded-sm relative flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-neutral-800 overflow-hidden">
                                    <div className="absolute top-4 right-4 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
                                        <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-[0.2em]">Active_Build</span>
                                    </div>

                                    {/* Simulación de la prenda */}
                                    <div className={`w-2/3 h-3/4 shadow-2xl transition-colors duration-700 ${selectedColor === 'Carbon' ? 'bg-neutral-800' :
                                        selectedColor === 'Blood' ? 'bg-zinc-800' : 'bg-neutral-700'
                                        }`} style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}>
                                        <div className="w-full h-full border-t border-[#D4AF37]/30"></div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* COLUMNA DERECHA: CONTROLES */}
                        <div className="lg:col-span-3 space-y-6 flex flex-col">
                            <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-sm">
                                <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <Palette className="w-4 h-4 text-[#D4AF37]" />
                                    Personalización
                                </h3>

                                <div className="space-y-4">
                                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono">Hardware_Slots</span>
                                    <div className="flex gap-3">
                                        {[1, 2, 3].map((i) => (
                                            <button
                                                key={i}
                                                onClick={() => setAccessories(i)}
                                                className={`w-10 h-10 border transition-all flex items-center justify-center ${accessories === i ? 'border-[#D4AF37] bg-neutral-800' : 'border-neutral-800 bg-black'
                                                    }`}
                                            >
                                                <span className={`text-xs font-mono ${accessories === i ? 'text-[#D4AF37]' : 'text-neutral-600'}`}>0{i}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-neutral-800">
                                    <div className="flex justify-between items-end mb-4">
                                        <span className="text-[10px] text-neutral-500 uppercase font-mono">Estimate_Build</span>
                                        <span className="text-xl font-bold text-white font-mono">$185.00</span>
                                    </div>
                                    <button className="w-full bg-[#D4AF37] hover:bg-white text-black py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3">
                                        <ShoppingCart size={14} />
                                        Añadir al Inventario
                                    </button>
                                </div>
                            </div>

                            <div className="bg-neutral-950 border border-neutral-800 p-4 rounded-sm flex items-center gap-4">
                                <div className="w-10 h-10 border border-neutral-800 flex items-center justify-center">
                                    <Box size={16} className="text-neutral-600" />
                                </div>
                                <div>
                                    <p className="text-[9px] text-neutral-500 uppercase tracking-widest leading-tight">Envío Estándar</p>
                                    <p className="text-[10px] text-white font-bold uppercase">7-10 Días Laborales</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default CustomizerAtelier;
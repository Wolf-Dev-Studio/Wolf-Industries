import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Hammer, Ruler, Palette, ChevronRight, Info } from 'lucide-react';

const CustomizerGear = () => {
    const [selectedColor, setSelectedColor] = useState('Carbon');
    const [material, setMaterial] = useState('Heavy Cotton');

    const colors = [
        { name: 'Carbon', class: 'bg-neutral-800' },
        { name: 'Blood', class: 'bg-red-700' },
        { name: 'Concrete', class: 'bg-neutral-400' },
    ];

    return (
        <section className="py-20 bg-[#121212] border-t border-neutral-800">
            <div className="max-w-[1600px] mx-auto px-6">

                {/* HEADER DE SECCIÓN */}
                <div className="mb-12 flex items-end justify-between border-b-4 border-red-600 pb-4">
                    <div>
                        <span className="text-red-600 font-black text-xs tracking-[0.5em] uppercase">Workshop // Custom Lab</span>
                        <h2 className="text-6xl font-black italic uppercase tracking-tighter">DISEÑA TU <span className="text-neutral-500 text-outline">GEAR_</span></h2>
                    </div>
                    <div className="text-right hidden md:block">
                        <span className="text-neutral-600 font-mono text-[10px] uppercase tracking-widest">Build Status: Operational</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* 1. PANEL DE PREVIEW (Lado Izquierdo - Grande) */}
                    <div className="lg:col-span-8 bg-neutral-900 border border-neutral-800 relative h-[600px] flex items-center justify-center overflow-hidden group">
                        {/* Metadata decorativa */}
                        <div className="absolute top-6 left-6 font-mono text-[10px] text-neutral-600 space-y-1">
                            <p>VIEW_ANGLE: FRONT_01</p>
                            <p>RENDER_QUALITY: ULTRA_HD</p>
                            <p>SCALE: 1:1</p>
                        </div>

                        {/* Imagen de Prenda (Aquí iría el render según el estado) */}
                        <motion.div
                            key={selectedColor}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative z-10 w-full h-full flex items-center justify-center p-12"
                        >
                            {/* Placeholder de Hoodie con el color seleccionado */}
                            <div className={`w-80 h-96 transition-colors duration-500 shadow-2xl relative ${selectedColor === 'Blood' ? 'bg-red-800' : selectedColor === 'Concrete' ? 'bg-neutral-500' : 'bg-neutral-800'
                                }`}>
                                {/* Logo de Wolf simulado */}
                                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-white/10 font-black text-6xl italic italic select-none">WOLF</div>
                            </div>
                        </motion.div>

                        {/* Marcas de Enfoque (Look Técnico) */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-600/30"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-600/30"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-600/30"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-600/30"></div>
                    </div>

                    {/* 2. PANEL DE CONFIGURACIÓN (Lado Derecho) */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Selector de Color */}
                        <div className="bg-neutral-900 border border-neutral-800 p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Palette size={18} className="text-red-600" />
                                <h3 className="font-black uppercase italic tracking-widest text-sm text-white">Chasis_Color</h3>
                            </div>
                            <div className="flex gap-4">
                                {colors.map((c) => (
                                    <button
                                        key={c.name}
                                        onClick={() => setSelectedColor(c.name)}
                                        className={`w-12 h-12 rounded-none border-2 transition-all ${selectedColor === c.name ? 'border-red-600 scale-110' : 'border-transparent hover:border-neutral-500'
                                            } ${c.class}`}
                                    />
                                ))}
                            </div>
                            <p className="mt-4 text-[10px] text-neutral-500 font-mono uppercase">Seleccionado: {selectedColor}_Division</p>
                        </div>

                        {/* Selector de Material */}
                        <div className="bg-neutral-900 border border-neutral-800 p-6">
                            <div className="flex items-center gap-2 mb-4 text-white">
                                <Hammer size={18} className="text-red-600" />
                                <h3 className="font-black uppercase italic tracking-widest text-sm">Engine_Specs (Tejido)</h3>
                            </div>
                            <div className="space-y-2">
                                {['Heavy Cotton (450GSM)', 'Ripstop Nylon', 'Tech_Fleece'].map((mat) => (
                                    <button
                                        key={mat}
                                        onClick={() => setMaterial(mat)}
                                        className={`w-full text-left p-3 text-xs font-bold uppercase tracking-widest transition-all ${material === mat ? 'bg-red-600 text-white' : 'bg-neutral-800 text-neutral-500 hover:text-white'
                                            }`}
                                    >
                                        {mat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Card de Stats Técnicos */}
                        <div className="bg-neutral-800/30 border border-neutral-800 p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                                    <Info size={14} className="text-red-600" /> Performance_Stats
                                </h3>
                            </div>
                            <div className="space-y-3">
                                <StatBar label="Durability" value={95} />
                                <StatBar label="Thermal" value={80} />
                                <StatBar label="Agility" value={65} />
                            </div>
                        </div>

                        {/* Botón Final de Forja */}
                        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 flex items-center justify-center gap-4 transition-all group overflow-hidden relative">
                            <span className="font-black text-xl uppercase italic z-10">FORJAR MI GEAR</span>
                            <ChevronRight className="z-10 group-hover:translate-x-2 transition-transform" />
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

// Sub-componente para las barras de progreso técnicas
const StatBar = ({ label, value }) => (
    <div className="space-y-1">
        <div className="flex justify-between text-[10px] font-mono uppercase text-neutral-500">
            <span>{label}</span>
            <span>{value}%</span>
        </div>
        <div className="h-1 bg-neutral-800 overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                className="h-full bg-red-600"
            />
        </div>
    </div>
);

export default CustomizerGear;
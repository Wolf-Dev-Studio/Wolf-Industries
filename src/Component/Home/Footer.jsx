import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-black via-black to-gray-900 text-white p-12">
            {/* Línea divisoria sutil que no llega a los bordes del marco */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/50 to-transparent mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

                {/* Columna 1: Brand & Slogan */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-black tracking-tighter uppercase">
                        Wolf <span className="text-slate-700">Industries</span>
                    </h3>
                    <p className="text-gray-500 font-light max-w-xs leading-relaxed">
                        Elevando el estándar del rendimiento y el lujo automotriz.
                        Ingeniería para los que no conocen el miedo.
                    </p>
                </div>

                {/* Columna 2: Navegación Estilo Galería */}
                <div className="flex flex-col gap-4 text-sm tracking-[0.2em] uppercase font-medium">
                    <a href="#" className="hover:text-red-600 transition-colors duration-300 w-fit">Gear Hub</a>
                    <a href="#" className="hover:text-amber-200 transition-colors duration-300 w-fit">Atelier</a>
                    <a href="#" className="hover:text-gray-400 transition-colors duration-300 w-fit">Historia</a>
                    <a href="#" className="hover:text-gray-400 transition-colors duration-300 w-fit">Contacto</a>
                </div>

                {/* Columna 3: Newsletter o Redes con Estilo */}
                <div className="flex flex-col gap-6">
                    <span className="text-xs text-gray-600 uppercase tracking-widest">Suscríbete al legado</span>
                    <div className="flex border-b border-white/20 pb-2">
                        <input
                            type="email"
                            placeholder="EMAIL@WOLF.COM"
                            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-700"
                        />
                        <button className="text-xs hover:text-red-600 transition-all">→</button>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 flex justify-between items-center text-[10px] text-white tracking-[0.3em] uppercase">
                <span>© 2026 Wolf Industries Group</span>
                <span>Built by Wolf Dev Studio</span>
            </div>
        </footer>
    );
};

export default Footer;
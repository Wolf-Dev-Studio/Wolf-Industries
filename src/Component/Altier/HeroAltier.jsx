import React from 'react';
import { motion } from 'framer-motion';
import HeroAltier from "../../assets/HeroAltier.webp";

const Atelier = () => {
    return (
        <div className="bg-black min-h-screen overflow-hidden">
            <main className="pl-20 h-screen relative">
                {/* Fondo con imagen en Blanco y Negro (Grayscale) */}
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale opacity-50"
                    style={{ backgroundImage: `url(${HeroAltier})` }} // Foto placeholder de carro clásico/elegante
                />

                {/* Overlay oscuro sutil para que el dorado resalte más */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Contenedor del Texto Dorado */}
                <div className="relative h-full flex flex-col justify-center items-center text-center px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif tracking-widest text-[#D4AF37] mb-6 uppercase drop-shadow-lg">
                            Ingeniería Textil
                        </h1>
                        <p className="text-white/80 font-light tracking-widest text-lg md:text-2xl uppercase max-w-2xl mx-auto border-t border-[#D4AF37]/50 pt-6">
                            La excelencia definida en cada detalle
                        </p>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default Atelier;
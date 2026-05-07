import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const AboutSection = () => {
    return (
        <>
            <Navbar />
            <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] text-gray-400 font-sans relative overflow-hidden">

                {/* Fondo ambiental */}
                <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-slate-800/30 to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Cabecera Principal */}
                    <div className="text-center mb-20 mt-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-slate-500 text-xs tracking-[0.3em] uppercase mb-3 font-semibold">Sobre la Marca</h2>
                            <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight mb-6">
                                El arte del <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">espacio vacío</span>
                            </h1>
                            <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-slate-400">
                                Creemos que la verdadera elegancia reside en la ausencia de lo superfluo.
                                Nuestra marca nace de una obsesión por la simplicidad y la perfección en los detalles.
                            </p>
                        </motion.div>
                    </div>

                    {/* Contenido Alternado (Texto - Imagen) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-start">

                        {/* SECCIÓN 1: TEXTO */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div>
                                <h3 className="text-2xl text-white font-bold mb-4">Nuestra Esencia</h3>
                                <div className="w-12 h-0.5 bg-slate-800 mb-6" />
                                <p className="text leading-7 text-slate-400 font-light">
                                    <span className="text-white font-bold">Wolf Atelier</span> nace como un puente entre la tradición artesanal y la visión contemporánea. Es un espacio diseñado para conectar con la esencia del diseño italiano, donde la nobleza de una pieza de lino fino convive en armonía con estructuras más robustas y técnicas; entendemos que en la maestría de cada detalle reside la verdadera identidad de quien viste nuestra arquitectura textil.
                                </p>
                            </div>
                            <div className="w-12 h-0.5 bg-slate-800" />
                            <div>
                                <p className="text leading-7 text-slate-400 font-light">
                                    Bajo el sello de <span className="text-white font-bold">Wolf Gear</span>, la durabilidad se convierte en una declaración de principios. Nuestra historia se escribe a través de materiales de alta ingeniería y tejidos de gramaje superior, creados para aquellos que exigen una armadura que resista el paso del tiempo sin sacrificar la sofisticación del corte clásico.
                                </p>
                            </div>
                        </motion.div>

                        {/* SECCIÓN 1: IMAGEN (Imagen 1) */}
                        <motion.div
                            className="relative w-full h-[450px] rounded-sm overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1493975620873-1c13a89d0415?q=80&w=1000&auto=format&fit=crop"
                                alt="Minimalismo blanco"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                            />
                            <div className="absolute bottom-6 left-6">
                                <p className="text-xs text-white font-light tracking-widest opacity-60">LA ORIGEN</p>
                                <h4 className="text-lg text-white font-light">Pureza Visual</h4>
                            </div>
                        </motion.div>

                        {/* SECCIÓN 2: IMAGEN */}
                        <motion.div
                            className="relative w-full h-[300px] lg:h-[400px] rounded-sm overflow-hidden mt-12 lg:mt-0"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1600607686582-a7f9a5b2793e?q=80&w=1000&auto=format&fit=crop"
                                alt="Estructura"
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-700 ease-out"
                            />
                            <div className="absolute bottom-6 left-6">
                                <p className="text-xs text-white font-light tracking-widest opacity-60">ESTRUCTURA</p>
                                <h4 className="text-lg text-white font-light">Arquitectura</h4>
                            </div>
                        </motion.div>

                        {/* SECCIÓN 2: TEXTO */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="w-12 h-0.5 bg-slate-800 mb-6" />
                            <p className="text-sm leading-7 text-slate-400 font-light">
                                A lo largo de los años, la marca ha evolucionado, pero el núcleo de su identidad permanece inalterado. No es una tendencia pasajera, sino un retorno a las raíces clásicas, reinterpretadas para la era moderna.
                            </p>
                            <div className="w-12 h-0.5 bg-slate-800 mb-6" />
                            <div>
                                <p className="text-sm leading-7 text-slate-400 font-light">
                                    Nos alejamos de lo común. Cada pieza cuenta una historia de resistencia y sofisticación, diseñada para quienes entienden que el verdadero lujo es la ausencia de necesidad.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Frase de Cierre */}
                    <motion.div
                        className="text-center mt-24 pt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <div className="w-16 h-[1px] bg-slate-800 mx-auto mb-8" />
                        <h2 className="text-3xl md:text-4xl text-white font-light tracking-widest italic">
                            "Menos es, en definitiva, <br /> más que la suma de todas las cosas."
                        </h2>
                        <div className="w-16 h-[1px] bg-slate-800 mx-auto mt-6" />
                    </motion.div>

                </div>
            </section>
        </>
    );
};

export default AboutSection;
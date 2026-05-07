import React from 'react';
import { motion } from 'framer-motion';
import { useState } from "react";


const Bienvenida = () => {
    const [showBanner, setShowBanner] = useState(true);


    return (

        <section>
            {showBanner && (
                <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3.5 }}
                    className="fixed top-23 left-40 right-40 sm:left-60 sm:right-60 lg:left-92 lg:right-92 rounded-xl z-40 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-500/50 px-6 py-3 shadow-md"
                >
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-center sm:text-left">
                        <p className="text-xs sm:text-sm leading-6 text-white">
                            Las funciones de compra y transacciones son simuladas; no se realizan ventas reales a través de este dominio técnico.
                        </p>
                    </div>
                    <div className="flex justify-end w-full sm:w-auto">
                        <button onClick={() => setShowBanner(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                            <span className="sr-only">Cerrar</span>
                            <svg className="h-5 w-5 text-[#1a1a1a]" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            )
            }
            <div className="absolute top-40 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 0.6, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-white text-xs md:text-sm uppercase tracking-[0.7em]"
                >
                    Elige tu estilo
                </motion.p>
            </div>
        </section>
    )
}

export default Bienvenida

import React from 'react';
import { motion } from 'framer-motion';

const Bienvenida = () => {
    return (
        <div className="absolute top-32 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
            <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-white text-xs md:text-sm uppercase tracking-[0.7em]"
            >
                Elige tu estilo
            </motion.p>
        </div>
    )
}

export default Bienvenida

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wind, Droplets, BoxSelect } from 'lucide-react';

const SpecGridGear = () => {
    const specs = [
        {
            id: '01',
            title: 'Heavy Duty 450GSM',
            desc: 'Algodón americano de máxima densidad. Estructura rígida que mantiene la forma.',
            icon: <BoxSelect size={32} />,
            tag: 'MATERIAL'
        },
        {
            id: '02',
            title: 'Reinforced Seams',
            desc: 'Costuras dobles con hilo de nylon industrial. Cero desgarros en uso intensivo.',
            icon: <ShieldCheck size={32} />,
            tag: 'DURABILITY'
        },
        {
            id: '03',
            title: 'Weather Proof',
            desc: 'Tratamiento hidrofóbico sutil. Resiste llovizna y viento urbano sin perder frescura.',
            icon: <Droplets size={32} />,
            tag: 'PROTECTION'
        },
        {
            id: '04',
            title: 'Oversized Aero',
            desc: 'Corte diseñado para el movimiento. Volumen estratégico inspirado en el techwear.',
            icon: <Wind size={32} />,
            tag: 'FIT'
        }
    ];

    return (
        <section className="bg-[#121212] py-24 px-6">
            <div className="max-w-[1600px] mx-auto">

                {/* Banner de Categoría */}
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-[2px] w-20 bg-red-600"></div>
                    <span className="text-red-600 font-mono text-xs font-black tracking-[0.5em] uppercase">
                        Technical_Specifications // Build_Quality
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-neutral-800">
                    {specs.map((spec, index) => (
                        <motion.div
                            key={spec.id}
                            whileHover={{ backgroundColor: '#1a1a1a' }}
                            className={`p-10 border-neutral-800 flex flex-col justify-between h-[350px] transition-all group ${index !== specs.length - 1 ? 'lg:border-r' : ''
                                } border-b lg:border-b-0`}
                        >
                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <div className="text-red-600 group-hover:scale-110 transition-transform duration-300">
                                        {spec.icon}
                                    </div>
                                    <span className="text-[10px] font-mono text-neutral-600 font-bold tracking-widest uppercase">
                                        ID_{spec.id}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-black uppercase italic text-white mb-3 group-hover:text-red-600 transition-colors">
                                        {spec.title}
                                    </h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                                        {spec.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6">
                                <span className="px-3 py-1 bg-neutral-800 text-[10px] font-black text-neutral-400 tracking-tighter uppercase">
                                    {spec.tag}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Cierre Visual */}
                <div className="mt-8 flex justify-end">
                    <p className="text-[9px] text-neutral-700 font-mono uppercase tracking-[0.4em]">
                        Wolf Industries // Quality Control Passed // 2026
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SpecGridGear;
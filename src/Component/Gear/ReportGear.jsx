import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Maximize2, Share2 } from 'lucide-react';

const FieldReportGear = () => {
    const images = [
        { id: 1, url: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070', size: 'md:col-span-2 md:row-span-2', label: 'Urban_Infiltration' },
        { id: 2, url: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071', size: 'md:col-span-1 md:row-span-1', label: 'Concrete_Jungle' },
        { id: 3, url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920', size: 'md:col-span-1 md:row-span-1', label: 'Tech_Flex' },
        { id: 4, url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976', size: 'md:col-span-2 md:row-span-1', label: 'Night_Ops' },
    ];

    return (
        <section className="bg-[#121212] py-20 px-6 border-t border-neutral-800">
            <div className="max-w-[1600px] mx-auto">

                {/* Encabezado Estilo "Expediente" */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-red-600">
                            <Camera size={18} />
                            <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em]">Visual_Archive // Community_Log</span>
                        </div>
                        <h2 className="text-5xl font-black uppercase italic tracking-tighter">FIELD <span className="text-red-600">REPORTS_</span></h2>
                    </div>
                    <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest max-w-xs border-l-2 border-neutral-800 pl-4">
                        Capturas reales de la manada en el asfalto. Usa #WolfGear para ser reportado.
                    </p>
                </div>

                {/* Galería Estilo "Mosaico Técnico" */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                    {images.map((img) => (
                        <motion.div
                            key={img.id}
                            className={`relative overflow-hidden group border border-neutral-800 ${img.size}`}
                            whileHover={{ borderColor: '#dc2626' }}
                        >
                            <img
                                src={img.url}
                                alt={img.label}
                                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            />

                            {/* Overlay de Datos */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-red-600 font-mono text-[8px] block tracking-widest">ID: 00{img.id}_CAPTURE</span>
                                        <h4 className="text-white font-black uppercase italic text-sm">{img.label}</h4>
                                    </div>
                                    <div className="flex gap-2">
                                        <Maximize2 size={16} className="text-white hover:text-red-600 cursor-pointer" />
                                        <Share2 size={16} className="text-white hover:text-red-600 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action Social */}
                <div className="mt-12 bg-neutral-900 border border-neutral-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6 group cursor-pointer">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-red-600 flex items-center justify-center text-white">

                        </div>
                        <div>
                            <h3 className="text-2xl font-black uppercase italic group-hover:text-red-500 transition-colors">Únete al despliegue visual</h3>
                            <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-widest">Sigue @WolfGear_Ind en Instagram // 50k+ Operativos</p>
                        </div>
                    </div>
                    <button className="bg-white text-black font-black px-10 py-4 uppercase italic hover:bg-red-600 hover:text-white transition-all transform hover:skew-x-[-10deg]">
                        FOLLOW_WOLF
                    </button>
                </div>

            </div>
        </section>
    );
};

export default FieldReportGear;
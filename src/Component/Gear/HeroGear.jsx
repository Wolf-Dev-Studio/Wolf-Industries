import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Zap, ArrowRight, BarChart3 } from 'lucide-react';

const Gear = () => {
    return (
        <div className="bg-[#121212] min-h-screen text-white font-sans selection:bg-red-600">

            <main className="pt-28 px-6 max-w-[1600px] mx-auto pb-20">

                {/* --- HERO SECTION: CONCRETE & STREET --- */}
                <section className="relative mb-16">
                    <div className="relative border-l-[10px] border-red-600 pl-8 py-12 bg-neutral-800/30">
                        <span className="text-red-600 font-black text-xs tracking-[0.4em] uppercase mb-2 block">
                            Wolf Gear // Urban Division
                        </span>
                        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.8] mb-6">
                            STREET <br /> <span className="text-white">AUTHORITY</span>
                        </h1>

                        <div className="flex flex-col md:flex-row md:items-center gap-8">
                            <p className="text-neutral-400 max-w-sm text-sm font-medium leading-relaxed uppercase tracking-wider">
                                La mejor selección de Nike, Adidas y Streetwear premium. Curaduría exclusiva para los que dominan el asfalto.
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-red-600 hover:bg-red-700 text-white font-black px-10 py-4 uppercase italic transition-all flex items-center gap-2 shadow-lg">
                                    VER CATÁLOGO <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- GRID BENTO: URBAN DROPS --- */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 auto-rows-[320px]">

                    {/* Caja 1: Nike Air Max (Main Item) */}
                    <div className="md:col-span-2 md:row-span-2 border border-neutral-800 bg-neutral-900 relative overflow-hidden group">
                        <div
                            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay sólido, no neón */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                        <div className="absolute bottom-0 left-0 p-10 z-10">
                            <div className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 inline-block mb-4 uppercase tracking-widest">
                                Top Tier Drops
                            </div>
                            <h2 className="text-5xl font-black uppercase italic leading-none mb-2">Nike Air Max <br /> Heritage</h2>
                            <p className="text-neutral-400 text-sm tracking-widest mb-6">EL ICONO DE LA CULTURA URBANA.</p>
                            <button className="flex items-center gap-2 text-white font-bold border-b-2 border-red-600 pb-1 hover:text-red-500 transition-colors uppercase text-xs tracking-[0.2em]">
                                Comprar Ahora_
                            </button>
                        </div>
                    </div>

                    {/* Caja 2: Adidas Originals Section */}
                    <div className="md:col-span-2 border border-neutral-800 bg-neutral-900 p-8 flex items-center group cursor-pointer relative overflow-hidden">
                        <div className="flex-1 z-10">
                            <span className="text-red-600 font-bold text-xs uppercase tracking-[0.3em]">Adidas Core</span>
                            <h3 className="text-4xl font-black uppercase italic mt-2 mb-4">Originals <br /> Tracksuits</h3>
                            <p className="text-neutral-500 text-xs max-w-[200px] uppercase font-bold">Estilo clásico, comodidad absoluta.</p>
                        </div>
                        <div className="w-1/2 h-full absolute right-0 top-0 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1511746015383-94bc35821748?q=80&w=2070"
                                className="h-full w-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                                alt="Adidas Apparel"
                            />
                        </div>
                    </div>

                    {/* Caja 3: Accesorios / Gorras */}
                    <div className="border border-neutral-800 bg-neutral-800/40 p-6 flex flex-col justify-between group hover:border-neutral-600 transition-all">
                        <div className="flex justify-between items-center">
                            <ShoppingBag size={20} className="text-red-600" />
                            <span className="text-[10px] text-neutral-500 font-bold uppercase">Accesorios</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-black uppercase italic group-hover:text-red-600 transition-colors">Headwear</h3>
                            <p className="text-neutral-500 text-[10px] uppercase mt-1">Gorras, Beanies y más.</p>
                        </div>
                    </div>

                    {/* Caja 4: Info de Stock / Técnica */}
                    <div className="border border-neutral-800 bg-[#1a1a1a] p-6 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <BarChart3 size={20} className="text-neutral-400" />
                            <div className="text-right">
                                <span className="text-[10px] text-red-600 font-bold block">LIVE STOCK</span>
                                <span className="text-xl font-mono font-bold">98%</span>
                            </div>
                        </div>
                        <div className="text-xs text-neutral-500 font-bold uppercase tracking-widest leading-none">
                            <span className="text-white">Envíos nacionales</span> <br />
                            Caracas - 24 Horas
                        </div>
                    </div>

                </div>

                {/* --- FOOTER BANNER --- */}
                <div className="mt-12 flex justify-between items-center border-t border-neutral-800 pt-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-600 flex items-center justify-center">
                            <Zap className="text-white fill-current" size={24} />
                        </div>
                        <h4 className="text-lg font-black uppercase italic">Únete a la manada. <span className="text-neutral-600">Wolf Gear Membership.</span></h4>
                    </div>
                    <p className="text-[10px] text-neutral-600 font-mono hidden md:block">
                        © 2026 WOLF INDUSTRIES // ALL RIGHTS RESERVED
                    </p>
                </div>

            </main>
        </div>
    );
};

export default Gear;
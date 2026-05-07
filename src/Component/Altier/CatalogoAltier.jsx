import React, { useState, useEffect } from 'react';
import NavbarAtelier from './NavbarAltier';
// import { supabase } from '../lib/supabaseClient'; 

const AtelierCatalog = () => {
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filters = ['All', 'Season I', 'Essentials', 'Limited', 'Archive'];

    useEffect(() => {
        // Simulación de carga para no estresar el procesador
        const timer = setTimeout(() => {
            const atelierMock = [
                { id: 1, title: 'OVERSIZED MANTRA TEE', price: 120, collection: 'Essentials', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800' },
                { id: 2, title: 'ARCHITECT TROUSERS', price: 340, collection: 'Season I', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800' },
                { id: 3, title: 'MONOLITH COAT', price: 580, collection: 'Limited', img: 'https://images.unsplash.com/photo-1539533377285-30138d017442?auto=format&fit=crop&q=80&w=800' },
                { id: 4, title: 'CARGO STRUCTURE', price: 210, collection: 'Season I', img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800' },
            ];
            setCollections(atelierMock);
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    const filteredItems = selectedFilter === 'All'
        ? collections
        : collections.filter(item => item.collection === selectedFilter);

    return (
        <>
            <NavbarAtelier />
            <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] py-20 px-8 font-light tracking-tight">

                {/* Navigation / Header */}
                <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-end mb-24 border-b border-zinc-800/50 pb-8">
                    <div>
                        <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-2">Luxury Collection</h2>
                        <h1 className="text-5xl md:text-6xl font-extralight tracking-tighter text-white">
                            WOLF <span className="text-[#D4AF37] italic font-serif">ATELIER</span>
                        </h1>
                    </div>

                    <div className="flex gap-8 mt-8 md:mt-0 overflow-x-auto no-scrollbar">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setSelectedFilter(f)}
                                className={`text-xs uppercase tracking-widest transition-colors duration-500 pb-1 ${selectedFilter === f ? 'border-b border-white text-white' : 'text-zinc-600 hover:text-zinc-300'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Showcase Grid */}
                <div className="max-w-screen-2xl mx-auto">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="w-4 h-4 bg-white rounded-full animate-ping"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-20 gap-x-12">
                            {filteredItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`group cursor-pointer transition-all duration-700 ${index % 3 === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
                                        }`}
                                >
                                    {/* Image Container con aspect ratio de revista */}
                                    <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 shadow-2xl">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-1000 ease-out"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
                                    </div>

                                    {/* Typography Layer */}
                                    <div className="mt-6 flex justify-between items-start">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">{item.collection}</p>
                                            <h3 className="text-lg font-light tracking-widest text-zinc-200 group-hover:text-white transition-colors">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <span className="font-serif italic text-zinc-400">${item.price}</span>
                                    </div>

                                    {/* Botón Minimalista */}
                                    <button className="mt-4 text-[10px] uppercase tracking-[0.4em] text-zinc-600 border-b border-transparent group-hover:border-zinc-500 group-hover:text-zinc-300 transition-all pb-1">
                                        View Details
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer Branding sutil */}
                <div className="mt-40 text-center opacity-20 hover:opacity-100 transition-opacity duration-1000">
                    <p className="text-[10px] tracking-[1em] uppercase">Built for the modern wolf</p>
                </div>
            </div>
        </>
    );
};

export default AtelierCatalog;
import React from 'react';
import { Zap, Globe, ArrowUpRight, Mail, Phone } from 'lucide-react';

const FooterGear = () => {
    return (
        <footer className="bg-[#0d0d0d] border-t-4 border-red-600 pt-16 pb-8 px-6 text-white font-sans">
            <div className="max-w-[1600px] mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* 1. BRAND MANIFESTO (Col 4) */}
                    <div className="md:col-span-4 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-red-600 p-1">
                                <Zap size={24} fill="currentColor" />
                            </div>
                            <span className="text-3xl font-black italic tracking-tighter uppercase">WOLF<span className="text-red-600">GEAR</span></span>
                        </div>
                        <p className="text-neutral-500 text-sm leading-relaxed max-w-xs uppercase font-bold tracking-tight">
                            Diseñado en las calles, forjado para la resistencia. No es moda, es equipamiento para el depredador urbano.
                        </p>
                        <div className="flex gap-4">
                            {[].map((Icon, i) => (
                                <a key={i} href="#" className="p-3 border border-neutral-800 hover:border-red-600 hover:text-red-600 transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. NAVIGATION (Col 2) */}
                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-600">Inventory_</h4>
                        <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-neutral-400">
                            <li className="hover:text-white cursor-pointer transition-colors">Drops_01</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Collections</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Custom Lab</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Archive</li>
                        </ul>
                    </div>

                    {/* 3. SUPPORT (Col 2) */}
                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-600">Support_</h4>
                        <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-neutral-400">
                            <li className="hover:text-white cursor-pointer transition-colors">Shipping_Policy</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Returns</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Sizing_Chart</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                        </ul>
                    </div>

                    {/* 4. NEWSLETTER (Col 4) */}
                    <div className="md:col-span-4 space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-600">Intelligence_Join</h4>
                        <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">
                            Suscríbete para recibir alertas de drops críticos y acceso anticipado.
                        </p>
                        <div className="flex border-b-2 border-neutral-800 focus-within:border-red-600 transition-all py-2">
                            <input
                                type="email"
                                placeholder="EMAIL_ADDRESS"
                                className="bg-transparent flex-1 outline-none text-xs font-mono placeholder:text-neutral-700"
                            />
                            <button className="text-red-600 font-black text-xs italic flex items-center gap-1 hover:translate-x-1 transition-transform">
                                ENLIST <ArrowUpRight size={14} />
                            </button>
                        </div>
                    </div>

                </div>

                {/* BOTTOM METADATA */}
                <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-8 text-[9px] font-mono text-neutral-700 uppercase tracking-[0.2em]">
                        <span className="flex items-center gap-2"><Globe size={10} /> HQ: CARACAS_VZLA</span>
                        <span>OS: WOLF_CORE_V2</span>
                        <span className="text-neutral-800">LAT: 10.4806° N // LON: 66.9036° W</span>
                    </div>

                    <div className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">
                        © 2026 WOLF INDUSTRIES // <span className="text-red-900/50">PROTECTED BY THE PACK</span>
                        <span> // Built by Wolf Dev Studio</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default FooterGear;
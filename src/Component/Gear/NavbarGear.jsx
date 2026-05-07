import { useNavigate } from 'react-router-dom';
import { Layers, Tag, Scissors, ShoppingCart, Zap, Menu } from 'lucide-react';

const NavbarGear = () => {
    const navigate = useNavigate();
    return (
        <nav className="fixed top-0 w-full bg-[#121212]/95 backdrop-blur-sm border-b-2 border-red-600/30 px-8 py-5 flex justify-between items-center z-50">
            {/* LOGO: Más agresivo */}
            <div className="flex items-center gap-3 group cursor-pointer">
                <div className="bg-red-600 p-1 transform group-hover:rotate-90 transition-transform duration-300">
                    <Zap className="text-white" size={22} fill="currentColor" />
                </div>
                <span className="text-white font-black italic tracking-tighter text-2xl uppercase">
                    WOLF<span className="text-red-600">GEAR</span>
                </span>
            </div>

            {/* LINKS: Urban Style */}
            <div className="hidden md:flex items-center gap-12">
                <a href="#" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-all font-bold text-xs uppercase tracking-[0.2em] group">
                    <Layers size={16} className="text-red-600 group-hover:scale-110 transition-transform" />
                    Drops_01
                </a>
                <button onClick={() => navigate('/gear/catalog')} className="flex items-center gap-2 text-neutral-400 hover:text-white transition-all font-bold text-xs uppercase tracking-[0.2em] group">
                    <Tag size={16} className="text-red-600" />
                    Collections
                </button>
                <button onClick={() => navigate('/gear/customs')} className="flex items-center gap-2 text-neutral-400 hover:text-white transition-all font-bold text-xs uppercase tracking-[0.2em] group">
                    <Scissors size={16} className="text-red-600" />
                    Customs
                </button>
            </div>

            {/* ACTIONS: Cart & Menu */}
            <div className="flex items-center gap-6">
                <div className="relative cursor-pointer group">
                    <ShoppingCart size={22} className="text-white group-hover:text-red-600 transition-colors" />
                    <span className="absolute -top-2 -right-2 bg-white text-black font-black text-[9px] w-4 h-4 flex items-center justify-center">
                        2
                    </span>
                </div>
                <button className="md:hidden text-white">
                    <Menu size={24} />
                </button>
            </div>

            {/* Decoración inferior de metadata (Sutil) */}
            <div className="absolute bottom-0 right-8 transform translate-y-full pt-1">
                <span className="text-[8px] text-neutral-600 font-mono tracking-[0.3em] uppercase">
                    Status: High_Voltage // Auth_Required
                </span>
            </div>
        </nav>
    );
};

export default NavbarGear;
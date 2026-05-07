import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, LayoutGrid, ShoppingCart, Hammer, Archive, ChevronRight } from 'lucide-react';

const NavbarAtelier = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { icon: <Home size={22} />, text: 'Inicio', route: '/atelier' },
        { icon: <LayoutGrid size={22} />, text: 'Catálogo', route: '/atelier/catalogo' },
        { icon: <Hammer size={22} />, text: 'Customs', route: '/atelier/customs' },
        { icon: <ShoppingCart size={22} />, text: 'Carrito', route: '/atelier/cart' },
        { icon: <User size={22} />, text: 'Perfil', route: '/profile' },
    ];

    return (
        <motion.nav
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ x: -100 }}
            animate={{ x: 0, width: isHovered ? '240px' : '80px', backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.4)' }}
            transition={{ duration: 1.5, width: isHovered ? '240px' : '80px', backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.4)' }}
            className="fixed left-0 top-0 h-screen backdrop-blur-xl border-r border-white/10 flex flex-col py-8 z-50 overflow-hidden shadow-2xl transition-colors duration-500">
            {/* Logo Sección */}
            <div className="flex items-center px-6 mb-12 cursor-pointer" onClick={() => navigate('/')}>
                <div className="min-w-[32px] h-8 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    <span className="text-black font-black text-xs">W</span>
                </div>
                {isHovered && (<motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="ml-4 font-serif text-[#D4AF37] text-xl tracking-[0.2em] uppercase">Atelier</motion.span>)}
            </div>

            {/* Items del Menú */}
            <div className="flex flex-col gap-4 flex-1">
                {menuItems.map((item, index) => (
                    <div key={index} onClick={() => navigate(item.route)} className="flex items-center h-12 px-7 cursor-pointer group hover:bg-white/5 transition-all duration-300">
                        <div className="text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                            {item.icon}
                        </div>
                        {isHovered && (<motion.span initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="ml-6 text-white/70 group-hover:text-white font-light tracking-[0.1em] text-sm whitespace-nowrap uppercase"> {item.text}</motion.span>)}
                    </div>
                ))}
            </div>

            {/* Indicador Inferior */}
            <div className="px-8 text-white/20 flex justify-center">
                <ChevronRight className={`transition-transform duration-700 ${isHovered ? 'rotate-180' : ''}`} size={20} />
            </div>
        </motion.nav>
    );
};

export default NavbarAtelier;
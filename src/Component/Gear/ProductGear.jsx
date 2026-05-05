import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, ArrowUpRight } from 'lucide-react';

const ProductForgeGear = () => {
const products = [
{
id: 'G-01',
name: 'V8 Heavy Hoodie',
price: '85.00',
category: 'UPPER_BODY',
img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974',
specs: '450GSM / Cotton'
},
{
id: 'G-02',
name: 'Ripstop Cargo',
price: '110.00',
category: 'LOWER_BODY',
img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972',
specs: 'Water_Resist'
},
{
id: 'G-03',
name: 'Interstate Tee',
price: '45.00',
category: 'BASE_LAYER',
img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080',
specs: 'Breathable_Mesh'
},
{
id: 'G-04',
name: 'Tactical Beanie',
price: '30.00',
category: 'HEADWEAR',
img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1974',
specs: 'Thermal_Isolation'
}
];

return (
<section className="bg-[#121212] py-24 px-6 border-t border-neutral-800">
    <div className="max-w-[1600px] mx-auto">

        {/* Header con Filtros Rápidos */}
        <div
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-neutral-800 pb-8">
            <div>
                <span
                    className="text-red-600 font-mono text-[10px] font-black tracking-[0.4em] uppercase mb-2 block">Available_Supply
                    // Drop_01</span>
                <h2 className="text-6xl font-black uppercase italic tracking-tighter text-white">THE <span
                        className="text-red-600">INVENTORY_</span></h2>
            </div>

            <div className="flex gap-4 font-mono text-[10px]">
                {['ALL', 'TOPS', 'BOTTOMS', 'ACCESSORIES'].map(filter => (
                <button key={filter}
                    className="border border-neutral-700 px-4 py-2 hover:bg-red-600 hover:border-red-600 transition-all uppercase font-bold text-neutral-400 hover:text-white">
                    {filter}
                </button>
                ))}
            </div>
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                className="bg-neutral-900 border border-neutral-800 group relative flex flex-col overflow-hidden">
                {/* Etiqueta de ID */}
                <div className="absolute top-0 left-0 bg-red-600 text-white text-[9px] font-black px-3 py-1 z-20">
                    {product.id}
                </div>

                {/* Imagen del Producto */}
                <div className="relative h-80 overflow-hidden bg-black">
                    <img src={product.img} alt={product.name}
                        className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Botón rápido de añadir */}
                    <button
                        className="absolute bottom-4 right-4 bg-white text-black p-3 hover:bg-red-600 hover:text-white transition-all transform translate-y-12 group-hover:translate-y-0 shadow-xl">
                        <Plus size={20} strokeWidth={3} />
                    </button>
                </div>

                {/* Info del Producto */}
                <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <span
                                className="text-red-600 text-[8px] font-black uppercase tracking-widest">{product.category}</span>
                            <h3 className="text-xl font-black uppercase italic text-white leading-none mt-1">
                                {product.name}</h3>
                        </div>
                        <span className="text-lg font-mono font-bold text-white">${product.price}</span>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-neutral-800">
                        <span className="text-[10px] text-neutral-600 font-mono uppercase">{product.specs}</span>
                        <button
                            className="text-white hover:text-red-600 flex items-center gap-1 text-[10px] font-black uppercase italic transition-all">
                            DETAILS
                            <ArrowUpRight size={14} />
                        </button>
                    </div>
                </div>

                {/* Línea decorativa inferior (Carga) */}
                <div className="h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-500" />
            </motion.div>
            ))}
        </div>

        {/* Botón de carga infinita / Ver más */}
        <div className="mt-16 flex justify-center">
            <button
                className="border-2 border-neutral-800 px-12 py-4 text-sm font-black uppercase italic tracking-widest text-neutral-500 hover:border-red-600 hover:text-white transition-all group">
                LOAD_MORE_EQUIPMENT <span
                    className="text-red-600 group-hover:translate-y-1 inline-block transition-transform">↓</span>
            </button>
        </div>

    </div>
</section>
);
};

export default ProductForgeGear;
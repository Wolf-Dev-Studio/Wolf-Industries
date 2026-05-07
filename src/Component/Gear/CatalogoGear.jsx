import React, { useState, useEffect } from 'react';
// Asegúrate de importar tu cliente de Supabase correctamente
// import { supabase } from '../lib/supabaseClient'; 

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');

    // Categorías hardcodeadas para los filtros (ajusta según tu base de datos)
    const categories = ['All', 'Apparel', 'Footwear', 'Accessories', 'Hardware'];

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            // Asumiendo que tu tabla se llama 'gear_products'
            // const { data, error } = await supabase
            //   .from('gear_products')
            //   .select('*');

            // if (error) throw error;

            // SIMULACIÓN DE DATOS (Borra esto y descomenta lo de arriba cuando conectes Supabase)
            const mockData = [
                { id: 1, name: 'Wolf Tactical Hoodie', price: 85.00, category: 'Apparel', image: 'https://via.placeholder.com/400x500/18181b/ffffff?text=Hoodie' },
                { id: 2, name: 'Apex Track Pants', price: 65.00, category: 'Apparel', image: 'https://via.placeholder.com/400x500/18181b/ffffff?text=Pants' },
                { id: 3, name: 'Titanium Carabiner', price: 25.00, category: 'Hardware', image: 'https://via.placeholder.com/400x500/18181b/ffffff?text=Carabiner' },
                { id: 4, name: 'Stealth Runners', price: 120.00, category: 'Footwear', image: 'https://via.placeholder.com/400x500/18181b/ffffff?text=Runners' },
                { id: 5, name: 'Operator Cap', price: 30.00, category: 'Accessories', image: 'https://via.placeholder.com/400x500/18181b/ffffff?text=Cap' },
                { id: 6, name: 'Duffel Bag V2', price: 95.00, category: 'Accessories', image: 'https://via.placeholder.com/400x500/18181b/ffffff?text=Bag' },
            ];
            setProducts(mockData);

        } catch (error) {
            console.error('Error fetching catalog:', error.message);
        } finally {
            setLoading(false);
        }
    };

    // Lógica de filtrado ultrarrápida (del lado del cliente)
    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">

            {/* Header y Filtros */}
            <div className="max-w-7xl mx-auto mb-10">
                <h1 className="text-4xl font-bold tracking-tight text-white mb-6 uppercase">
                    Wolf Gear <span className="text-zinc-500 font-light">Arsenal</span>
                </h1>

                <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 border ${activeCategory === category
                                    ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-500 hover:text-zinc-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid de Productos */}
            <div className="max-w-7xl mx-auto">
                {loading ? (
                    /* Skeletons de carga (Efecto de pulsación que no consume tanta CPU) */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="animate-pulse flex flex-col gap-4">
                                <div className="bg-zinc-900 w-full h-80 rounded-sm"></div>
                                <div className="h-4 bg-zinc-900 rounded w-3/4"></div>
                                <div className="h-4 bg-zinc-900 rounded w-1/4"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Renderizado del Catálogo */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group relative flex flex-col bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-colors duration-300 overflow-hidden"
                            >
                                {/* Imagen del producto */}
                                <div className="w-full h-80 bg-zinc-900 relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out opacity-80 group-hover:opacity-100"
                                        loading="lazy" // Optimización vital para la PC
                                    />
                                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 text-xs text-zinc-300 border border-zinc-800 uppercase tracking-widest">
                                        {product.category}
                                    </div>
                                </div>

                                {/* Info y Botón de Acción */}
                                <div className="p-5 flex flex-col flex-grow justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">
                                            {product.name}
                                        </h3>
                                        <p className="mt-1 text-zinc-400 font-mono text-sm">
                                            ${product.price.toFixed(2)}
                                        </p>
                                    </div>

                                    {/* Este botón lo vas a conectar luego con la lógica del Carrito de Ghost */}
                                    <button className="mt-6 w-full bg-zinc-900 text-zinc-300 border border-zinc-800 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-95">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Catalog;
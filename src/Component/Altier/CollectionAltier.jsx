import { useState, useRef } from 'react';

// Datos simulados (Puedes conectar esto a tu API real)
const collectionProducts = [
    { id: 1, name: 'Aire Premium', price: '129.00', image: 'https://placehold.co/600x600/111/333?text=Aire+Premium' },
    { id: 2, name: 'Clima Eco', price: '89.00', image: 'https://placehold.co/600x600/111/333?text=Clima+Eco' },
    { id: 3, name: 'Vibras', price: '299.00', image: 'https://placehold.co/600x600/111/333?text=Vibras' },
];

function Collection() {
    const [selected, setSelected] = useState(null);
    const ref = useRef();

    const handleSelect = (product) => {
        setSelected(product);
        console.log(`Seleccionado: ${product.name}`);
        // Aquí dispararías tu router: window.location.href = `/product/${product.id}`;
    };

    return (
        <section className="bg-[#0a0a0a] text-neutral-200 py-20 px-4 md:px-8" ref={ref}>
            <div className="container mx-auto max-w-7xl">

                {/* Header de Sección */}
                <div className="mb-16 text-center md:text-left border-b border-slate-700 pb-6">
                    <span className="block text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase mb-3">
                        Colección de Temporada
                    </span>
                    <h2 className="text-4xl md:text-6xl font-thin tracking-tighter text-white">
                        COLECCIÓN <span className="italic text-neutral-500">EXCLUSIVA</span>
                    </h2>
                    <p className="mt-4 text-sm text-neutral-500 font-light max-w-xl mx-auto md:mx-0 leading-relaxed">
                        Piezas diseñadas meticulosamente. Calidad, funcionalidad y elegancia en cada detalle.
                    </p>
                </div>

                {/* Grid de Productos */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16">

                    {collectionProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group relative cursor-pointer h-[500px] md:h-[600px] w-full"
                            onClick={() => handleSelect(product)}
                        >
                            {/* Contenedor de la Imagen con Efecto Hover */}
                            <div className="absolute inset-0 overflow-hidden bg-neutral-900">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />

                                {/* Overlay sutil */}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                            </div>

                            {/* Contenido de Texto (Aparece solo en hover o siempre sutil) */}
                            <div className="absolute top-0 left-0 w-full p-6 md:p-8 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                <div className="border border-neutral-800 bg-neutral-950/80 backdrop-blur-sm p-4 w-max">
                                    <div className="flex flex-col items-start space-y-2">
                                        <h3 className="text-2xl font-serif text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                                            {product.name}
                                        </h3>
                                        <span className="text-xs font-mono text-neutral-400 tracking-widest border-b border-neutral-800 pb-1">
                                            $ {product.price} USD
                                        </span>
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-white transition-colors">
                                            Seleccionar
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Indicador de interactividad (pequeño punto en esquina) */}
                            <div className="absolute bottom-6 right-6 p-2 rounded-full border border-neutral-800 group-hover:bg-neutral-100 group-hover:border-white transition-all duration-500">
                                <svg className="w-4 h-4 text-neutral-600 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Footer de la sección */}
                <div className="mt-24 text-center md:text-left">
                    <button className="group inline-flex items-center text-sm tracking-[0.2em] text-neutral-500 hover:text-[#D4AF37] transition-colors duration-300">
                        VER TODOS LOS PRODUCTOS
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Collection;
import { useEffect, useRef } from 'react';

function SocialProof() {
    const ref = useRef();

    useEffect(() => {
        // Lógica simple de scroll si se desea, 
        // pero para el lujo estático, lo dejamos sutil.
    }, []);

    return (
        // Contenedor Principal: Fondo oscuro pero cálido (no negro puro)
        <section className="bg-[#0a0a0a] text-neutral-200 py-16 md:py-24 overflow-hidden relative">

            {/* Elemento Decorativo: Linea divisoria elegante */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-neutral-800/50"></div>

            <div ref={ref} className="container mx-auto px-4 md:px-8 relative z-10">

                {/* Encabezado Principal */}
                <div className="mb-12 text-center">
                    <h2 className="text-sm font-serif tracking-[0.3em] text-neutral-500 uppercase mb-2">
                        Patrimonio y estándares
                    </h2>
                    <div className="h-[2px] w-12 bg-neutral-700 mx-auto mb-4"></div>
                    <p className="text-xl md:text-2xl font-light tracking-wider text-neutral-300 max-w-lg mx-auto leading-relaxed">
                        RECONOCIMIENTO DE LÍDERES DE LA INDUSTRIA
                    </p>
                </div>

                {/* Grid de Logos/Textos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-center">

                    {/* Item 1: AMAZING -> EXCELLENCE */}
                    <div className="group text-center">
                        <div className="mb-4 group-hover:text-[#D4AF37] transition-colors duration-500 ease-out">
                            <span className="text-3xl md:text-4xl font-thin tracking-wide text-neutral-100 group-hover:text-[#D4AF37]">
                                EXCELENCIA
                            </span>
                        </div>
                        <div className="w-12 h-[1px] bg-neutral-800 mx-auto group-hover:bg-[#D4AF37]/50 transition-colors duration-500"></div>
                        <p className="mt-4 text-neutral-500 font-light text-xs uppercase tracking-[0.15em] group-hover:text-neutral-400 transition-colors duration-500">
                            Mantiene su forma
                        </p>
                    </div>

                    {/* Item 2: BESTSELLER -> ICONIC */}
                    <div className="group text-center">
                        <div className="mb-4 group-hover:text-[#D4AF37] transition-colors duration-500 ease-out">
                            <span className="text-3xl md:text-4xl font-thin tracking-wide text-neutral-100 group-hover:text-[#D4AF37]">
                                ICÓNICO
                            </span>
                        </div>
                        <div className="w-12 h-[1px] bg-neutral-800 mx-auto group-hover:bg-[#D4AF37]/50 transition-colors duration-500"></div>
                        <p className="mt-4 text-neutral-500 font-light text-xs uppercase tracking-[0.15em] group-hover:text-neutral-400 transition-colors duration-500">
                            Diseño atemporal
                        </p>
                    </div>

                    {/* Item 3: REVOLUTIONARY -> ARCHITECTURE */}
                    <div className="group text-center">
                        <div className="mb-4 group-hover:text-[#D4AF37] transition-colors duration-500 ease-out">
                            <span className="text-3xl md:text-4xl font-thin tracking-wide text-neutral-100 group-hover:text-[#D4AF37]">
                                ARCHITECTURE
                            </span>
                        </div>
                        <div className="w-12 h-[1px] bg-neutral-800 mx-auto group-hover:bg-[#D4AF37]/50 transition-colors duration-500"></div>
                        <p className="mt-4 text-neutral-500 font-light text-xs uppercase tracking-[0.15em] group-hover:text-neutral-400 transition-colors duration-500">
                            Engineered for longevity
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default SocialProof;
import { useState } from 'react';

function Offer() {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Acceso activado para: ' + formData.name);
    };

    const discountCode = "WOOLF20";

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-black">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/5 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-12">
                    {/* Header Section */}
                    <div className="lg:w-5/12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium tracking-widest uppercase mb-6 animate-fade-in-up bg-red-950/10 backdrop-blur-md">
                            Exclusive Offer
                        </span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-neutral-100 tracking-tight mb-6 font-serif">
                            ELEVATE YOUR <span className="text-[#D4AF37] font-serif italic tracking-wide">STATUS</span>
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Utiliza el código de invitación para desbloquear acceso inmediato a nuestro catálogo premium y beneficios exclusivos.
                        </p>
                    </div>

                    {/* Right: Code Display (Visual Weight) */}
                    <div className="lg:w-5/12 w-full text-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative bg-neutral-950 p-8 rounded-2xl border border-white/5 backdrop-blur-sm shadow-2xl">
                                <p className="text-neutral-600 text-xs uppercase tracking-[0.2em] mb-4">Código de Invitación</p>
                                <div className="flex items-center justify-center space-x-3 mb-2">
                                    <span className="text-3xl md:text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-400">
                                        {discountCode}
                                    </span>
                                    <span className="text-3xl text-[#D4AF37]/80 font-light">↓</span>
                                </div>
                                <p className="text-neutral-500 text-sm font-medium">
                                    <span className="text-neutral-600">Válido hasta </span>
                                    <span className="text-neutral-400"> {new Date().toLocaleDateString()}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="relative lg:mt-0">
                    <div className="absolute inset-0 bg-[#D4AF37]/5 blur-[80px] rounded-full opacity-30 -z-10"></div>

                    <div className="bg-neutral-900/30 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl max-w-md mx-auto relative overflow-hidden">
                        {/* Top highlight line */}
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Input */}
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-neutral-500 group-focus-within:text-[#D4AF37] transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0v-1.5m-5 5a2.5 2.5 0 005 0v-1.5a2.5 2.5 0 00-5 0v1.5m-7.5-6h2.25m-2.25 6h2.25" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder=" "
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="peer w-full bg-transparent border border-neutral-800 text-white rounded-xl pl-12 pr-4 py-4 outline-none transition-all duration-300 placeholder:text-neutral-700 focus:border-[#D4AF37]/50 focus:shadow-[inset_0_0_0_1px_rgba(220,38,38,0.3)] focus:text-[#D4AF37] group-hover:border-neutral-700"
                                    autoComplete="off"
                                />
                                <label
                                    className="absolute left-12 top-3 text-neutral-500 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 pointer-events-none bg-transparent"
                                >
                                    Correo Electrónico
                                </label>
                            </div>

                            {/* Name Input */}
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-neutral-500 group-focus-within:text-[#D4AF37] transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10a3.5 3.5 0 01-7 0M9 21a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder=" "
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="peer w-full bg-transparent border border-neutral-800 text-white rounded-xl pl-12 pr-4 py-4 outline-none transition-all duration-300 placeholder:text-neutral-700 focus:border-red-500/50 focus:shadow-[inset_0_0_0_1px_rgba(220,38,38,0.3)] focus:text-red-50 group-hover:border-neutral-700"
                                    autoComplete="off"
                                />
                                <label
                                    className="absolute left-12 top-3 text-neutral-500 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 pointer-events-none bg-transparent"
                                >
                                    Nombre Completo
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="group relative w-full bg-[#D4AF37] hover:bg-[#D4AF37]/70 text-white font-medium rounded-xl px-6 py-4 overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(220,38, display:none">
                                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                                    <svg className="h-5 w-5 text-neutral-500 group-focus-within:text-[#D4AF37] transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10a3.5 3.5 0 01-7 0M9 21a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Offer;
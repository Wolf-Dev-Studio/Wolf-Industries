function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">WOLF ATELIER</h3>
                        <p className="text-gray-400 text-sm">Diseñamos moda con actitud.</p>
                        <div className="flex space-x-4 mt-6">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition"
                                aria-label="Twitter"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">ENLACES RÁPIDOS</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-red-500 transition">Inicio</a></li>
                            <li><a href="#" className="hover:text-red-500 transition">Novedades</a></li>
                            <li><a href="#" className="hover:text-red-500 transition">Tienda</a></li>
                            <li><a href="#" className="hover:text-red-500 transition">Términos</a></li>
                            <li><a href="#" className="hover:text-red-500 transition">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">SERVICIOS</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-red-500 transition">Envío a todo el país</a></li>
                            <li><a href="#" className="hover:text-red-500 transition">Garantía</a></li>
                            <li><a href="#" className="hover:text-red-500 transition">Devoluciones</a></li>
                        </ul>
                    </div>
                    {/* Contact Information */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">INFORMACIÓN</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><i className="fas fa-map-marker-alt mr-2"></i>Venezuela</li>
                            <li><i className="fas fa-phone mr-2"></i>+58 4240000000</li>
                            <li><i className="fas fa-envelope mr-2"></i>[EMAIL_ADDRESS]</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; 2026 Wolf Industries. Todos los derechos reservados.</p>
                    <span>Built by Wolf Dev Studio</span>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition">Política de Privacidad</a>
                        <a href="#" className="hover:text-white transition">Términos de Servicio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
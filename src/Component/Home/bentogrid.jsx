import { motion } from 'framer-motion';
import BusinessAltier from "../../assets/business-altier.webp"
import RelojAltier from "../../assets/reloj-altier.webp"
import RelojGear from "../../assets/reloj-gear.webp"
import ShirtAltier from "../../assets/shirt-altier.webp"
import ShoesGear from "../../assets/Shoes-gear.webp"
import Shoes2 from "../../assets/Shoes2.webp"

const WolfBentoSideBySide = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };


    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 md:px-10">
            {/* Grid Principal: 2 Columnas Grandes */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch"
            >

                {/* --- LADO GEAR (Izquierda) --- */}
                <div className="flex flex-col">
                    <div className="mb-6 ml-4">
                        <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">
                            Wolf <span className="text-red-600">Gear</span>
                        </h2>
                        <span className="text-white font-mono text-[10px] uppercase tracking-[0.4em]">Urban Infrastructure</span>
                    </div>

                    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[600px] flex-grow">
                        <motion.div variants={itemVariants} className="col-span-2 row-span-1 bg-zinc-900 rounded-[2rem] border border-white/50 overflow-hidden relative group">
                            <img src={ShoesGear} className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" alt="Main Gear" />
                        </motion.div>

                        <motion.div variants={itemVariants} className="col-span-1 bg-zinc-900 rounded-[2rem] border border-white/50 overflow-hidden">
                            <img src={Shoes2} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt="Detail" />
                        </motion.div>

                        <motion.div variants={itemVariants} className="col-span-1 bg-zinc-900 rounded-[2rem] border border-white/50 overflow-hidden">
                            <img src={RelojGear} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt="Detail" />
                        </motion.div>
                    </div>
                </div>

                {/* --- LADO ATELIER (Derecha) --- */}
                <div className="flex flex-col">
                    <div className="mb-6 ml-4 text-right xl:text-left">
                        <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">
                            Wolf <span className="text-amber-200">Atelier</span>
                        </h2>
                        <span className="text-white font-mono text-[10px] uppercase tracking-[0.4em]">Bespoke Luxury</span>
                    </div>

                    {/* Invertimos el layout para que no se vea igual al de la izquierda */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[600px] flex-grow">
                        <motion.div variants={itemVariants} className="col-span-1 bg-zinc-900 rounded-[2rem] border border-white/50 overflow-hidden">
                            <img src={RelojAltier} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt="Detail" />
                        </motion.div>

                        <motion.div variants={itemVariants} className="col-span-1 bg-amber-200/5 rounded-[2rem] border border-white/50 overflow-hidden">
                            <img src={ShirtAltier} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt="Detail" />
                        </motion.div>

                        <motion.div variants={itemVariants} className="col-span-2 row-span-1 bg-zinc-900 rounded-[2rem] border border-white/50 overflow-hidden relative group">
                            <img src={BusinessAltier} className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" alt="Main Atelier" />
                        </motion.div>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default WolfBentoSideBySide;
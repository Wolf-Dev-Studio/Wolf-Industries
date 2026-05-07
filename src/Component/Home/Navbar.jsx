import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <motion.section
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className='fixed flex p-6 border-b-2 border-white/10 rounded-b-2xl justify-between w-full max-w-7xl mx-auto top-0 left-0 right-0 z-50 bg-gray-700/50'>
            <motion.div className='flex items-center justify-between'>
                <motion.h1
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className='text-3xl font-bold text-white uppercase'>Wolf Industries</motion.h1>
            </motion.div>
            <motion.nav className='flex items-center justify-between'>
                <motion.ul className='flex items-center gap-10 justify-between'>
                    <motion.li
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                        className='text-xl font-bold text-white uppercase cursor-pointer hover:text-gray-400 transition-colors duration-300'>Gear</motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2.5 }}
                        className='text-xl font-bold text-white uppercase cursor-pointer hover:text-gray-400 transition-colors duration-300'>Atelier</motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3 }}
                        onClick={() => navigate('/history')}
                        className='text-xl font-bold text-white uppercase cursor-pointer hover:text-gray-400 transition-colors duration-300'>Historia</motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 4 }}
                        onClick={() => navigate('/login')}
                        className='text-xl font-bold text-white uppercase cursor-pointer hover:text-gray-400 transition-colors duration-300'>Login</motion.li>
                </motion.ul>
            </motion.nav>
        </motion.section>
    )
}

export default Navbar
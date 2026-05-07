import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Home/Navbar';
import bg from "/src/assets/BGLogin.webp";

const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <Navbar />
            <div style={{ backgroundImage: `url(${bg})` }} className="min-h-screen grayscale w-full bg-cover bg-center bg-no-repeat text-gray-400 flex items-center justify-center p-4 md:p-8 font-sans selection:bg-slate-700 selection:text-white">

                {/* Fondo decorativo sutil */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-slate-700/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-600/10 rounded-full blur-[80px]" />
                </div>

                <motion.div
                    layout
                    className="relative z-10 w-full max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}>

                    {/* Tarjeta Principal */}
                    <motion.div
                        className="relative bg-[#131313] border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl"
                        whileHover={{ scale: 1.001 }}
                        transition={{ duration: 0.3 }} >
                        {/* Capa decorativa interna */}
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/40 to-transparent pointer-events-none" />

                        {/* Header */}
                        <div className="relative flex flex-col items-center text-center py-8 px-6">

                            <h1 className="text-2xl font-light tracking-[0.2em] text-white mb-2">
                                {isLogin ? 'Bienvenido de nuevo' : 'Únete a la Familia'}
                            </h1>
                            <p className="text-xs text-slate-500 tracking-[0.1em] uppercase">
                                {isLogin ? 'Inicia Sesión' : 'Registrate'}
                            </p>

                            <motion.button
                                onClick={() => setIsLogin(!isLogin)}
                                className="mt-6 group relative flex items-center gap-2 text-xs font-semibold tracking-wider text-white"
                            >
                                <span className="group-hover:text-slate-300 transition-colors">
                                    {isLogin ? 'Crear Cuenta' : 'Iniciar Sesión'}
                                </span>
                                <span className="group-hover:text-slate-600 transition-colors">
                                    {isLogin ? '→' : '←'}
                                </span>
                            </motion.button>
                        </div>

                        {/* Formulario */}
                        <motion.form
                            className="relative px-8 pb-8"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}>
                            <AnimatePresence mode="wait">
                                {!isLoading && (
                                    <motion.div
                                        key="form-container"
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {isLogin ? (
                                            <div className="space-y-5">
                                                <div>
                                                    <label className="text-xs font-bold text-slate-500 mb-1 block">Nombre de Usuario</label>
                                                    <div className="relative group">
                                                        <input
                                                            type="text"
                                                            placeholder="tu usuario"
                                                            className="w-full bg-transparent border-b border-slate-700 py-2 text-white text-sm focus:outline-none focus:border-slate-500 transition-colors peer"
                                                        />
                                                        <span className="absolute right-4 top-2.5 text-slate-600 transition-colors peer-focus:text-slate-500">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-xs font-bold text-slate-500 mb-1 block">Contraseña</label>
                                                    <div className="relative">
                                                        <input
                                                            type="password"
                                                            placeholder="••••••••"
                                                            className="w-full bg-transparent border-b border-slate-700 py-2 text-white text-sm focus:outline-none focus:border-slate-500 transition-colors peer"
                                                        />
                                                        <span className="absolute right-4 top-2.5 text-slate-600 transition-colors peer-focus:text-slate-500">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="space-y-5">
                                                <div>
                                                    <label className="text-xs font-bold text-slate-500 mb-1 block">Nombre de Usuario</label>
                                                    <div className="relative group">
                                                        <input
                                                            type="text"
                                                            placeholder="tu usuario"
                                                            className="w-full bg-transparent border-b border-slate-700 py-2 text-white text-sm focus:outline-none focus:border-slate-500 transition-colors peer"
                                                        />
                                                        <span className="absolute right-4 top-2.5 text-slate-600 transition-colors peer-focus:text-slate-500">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-xs font-bold text-slate-500 mb-1 block">Email</label>
                                                    <div className="relative group">
                                                        <input
                                                            type="email"
                                                            placeholder="ejemplo@ejemplo.com"
                                                            className="w-full bg-transparent border-b border-slate-700 py-2 text-white text-sm focus:outline-none focus:border-slate-500 transition-colors peer"
                                                        />
                                                        <span className="absolute right-4 top-2.5 text-slate-600 transition-colors peer-focus:text-slate-500 peer-valid:text-slate-400">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-xs font-bold text-slate-500 mb-1 block">Crear Contraseña</label>
                                                    <div className="relative">
                                                        <input
                                                            type="password"
                                                            placeholder="••••••••"
                                                            className="w-full bg-transparent border-b border-slate-700 py-2 text-white text-sm focus:outline-none focus:border-slate-500 transition-colors peer"
                                                        />
                                                        <span className="absolute right-4 top-2.5 text-slate-600 transition-colors peer-focus:text-slate-500">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <input type="checkbox" id="remember" className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-white focus:ring-0 focus:ring-offset-0" />
                                                    <label htmlFor="remember" className="text-xs text-slate-400 cursor-pointer select-none">
                                                        Recordar por 30 días
                                                    </label>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <a href="#" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">¿Olvidaste tu contraseña?</a>
                                                    <span className="text-xs text-slate-500">Ya tienes cuenta? </span>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Botón de Acción */}
                            <motion.button
                                className="w-full mt-8 bg-white text-black font-bold text-sm py-3 px-4 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m9 7H8" />
                                </svg>
                                {isLoading ? (
                                    <span className="loading-dots">Conectando...</span>
                                ) : (
                                    isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'
                                )}
                            </motion.button>
                        </motion.form>
                        <div className="flex justify-between w-full max-w-md p-4 opacity-40">
                            <a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Términos</a>
                            <a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Privacidad</a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}

export default LoginRegister;
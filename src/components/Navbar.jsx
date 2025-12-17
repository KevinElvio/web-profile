import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navbar({ activeSection }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-gray-700">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-2xl font-bold text-white"
                        >
                            K<span className="text-yellow-400">.</span>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {['home', 'about', 'experience', 'projects', 'skills'].map((item) => (
                                <motion.button
                                    key={item}
                                    className={`capitalize px-3 py-2 rounded-lg transition-all ${activeSection === item
                                        ? 'text-yellow-400 bg-yellow-400/10'
                                        : 'text-gray-300 hover:text-yellow-400'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item}
                                </motion.button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden text-gray-300"
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <div className="space-y-1">
                                <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                                <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                                <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                            </div>
                        </motion.button>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="md:hidden mt-4 space-y-2"
                            >
                                {['home', 'about', 'experience', 'projects', 'skills'].map((item) => (
                                    <motion.button
                                        key={item}
                                        className={`block w-full text-left capitalize px-4 py-3 rounded-lg transition-all ${activeSection === item
                                            ? 'text-yellow-400 bg-yellow-400/10'
                                            : 'text-gray-300 hover:text-yellow-400'
                                            }`}
                                        whileHover={{ x: 10 }}
                                    >
                                        {item}
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
    );   
}

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ activeSection, onNavigate, sections }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigate = (sectionId) => {
        onNavigate(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full z-50 px-4 pt-4">
            <div className="mx-auto max-w-6xl rounded-2xl border border-slate-700/60 bg-slate-900/75 backdrop-blur-xl shadow-[0_10px_40px_rgba(2,6,23,0.5)]">
                    <div className="flex items-center justify-between px-4 py-3 md:px-6">
                        <button
                            type="button"
                            className="text-lg md:text-xl font-bold text-slate-100 tracking-wide"
                            onClick={() => handleNavigate('home')}
                        >
                            K<span className="text-sky-400">.</span>
                        </button>

                        <div className="hidden md:flex items-center gap-2">
                            {sections.map((item) => (
                                <motion.button
                                    key={item.id}
                                    type="button"
                                    onClick={() => handleNavigate(item.id)}
                                    className={`capitalize px-4 py-2 rounded-lg text-sm transition-all ${activeSection === item.id
                                        ? 'text-sky-300 bg-sky-300/10'
                                        : 'text-slate-300 hover:text-sky-300 hover:bg-slate-700/40'
                                        }`}
                                    whileHover={{ y: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </div>

                        <motion.button
                            type="button"
                            className="md:hidden text-slate-300"
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            aria-label="Toggle menu"
                        >
                            <div className="space-y-1.5">
                                <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                                <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                                <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                            </div>
                        </motion.button>
                    </div>

                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="md:hidden border-t border-slate-700/60 px-3 py-3"
                            >
                                {sections.map((item) => (
                                    <motion.button
                                        key={item.id}
                                        type="button"
                                        onClick={() => handleNavigate(item.id)}
                                        className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${activeSection === item.id
                                            ? 'text-sky-300 bg-sky-300/10'
                                            : 'text-slate-300 hover:bg-slate-700/40 hover:text-sky-300'
                                            }`}
                                        whileHover={{ x: 4 }}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
    );   
}

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired
}


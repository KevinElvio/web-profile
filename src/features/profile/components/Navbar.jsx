import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ activeSection, onNavigate, sections }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleNavigate = (sectionId) => { onNavigate(sectionId); setIsMenuOpen(false); };

    return (
        <nav className="fixed top-0 z-50 w-full px-4 pt-4">
            <div className="mx-auto max-w-6xl border-[3px] border-[#17120d] bg-[#fff8e7] shadow-[5px_5px_0_#17120d]">
                <div className="flex items-center justify-between px-4 py-3 md:px-6">
                    <button type="button" className="text-xl font-black text-[#17120d]" onClick={() => handleNavigate('home')}>K<span className="text-[#e85d04]">.</span></button>
                    <div className="hidden items-center gap-2 md:flex">{sections.map((item) => <motion.button key={item.id} type="button" onClick={() => handleNavigate(item.id)} className={`border-2 border-[#17120d] px-3 py-1.5 text-sm font-black ${activeSection === item.id ? 'bg-[#ff9f1c]' : 'bg-white hover:bg-[#ffe08a]'}`} whileTap={{ scale: 0.96 }}>{item.label}</motion.button>)}</div>
                    <button type="button" className="text-2xl font-black md:hidden" onClick={() => setIsMenuOpen((prev) => !prev)} aria-label="Toggle menu">{isMenuOpen ? '×' : '☰'}</button>
                </div>
                <AnimatePresence>{isMenuOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="border-t-[3px] border-[#17120d] p-3 md:hidden">{sections.map((item) => <button key={item.id} type="button" onClick={() => handleNavigate(item.id)} className={`mb-2 block w-full border-2 border-[#17120d] px-4 py-2 text-left font-black ${activeSection === item.id ? 'bg-[#ff9f1c]' : 'bg-white'}`}>{item.label}</button>)}</motion.div>}</AnimatePresence>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    activeSection: PropTypes.string.isRequired,
    onNavigate: PropTypes.func.isRequired,
    sections: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, label: PropTypes.string.isRequired })).isRequired
};

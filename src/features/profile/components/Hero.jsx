import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function Hero({ heroRef, dataUser, onNavigate }) {
    const fullName = dataUser?.name?.trim() || 'Kevin Elvio';
    const [firstName, ...restNames] = fullName.split(' ');
    const lastName = restNames.join(' ') || 'Elvio';

    return (
        <section ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden px-6 py-28 sm:px-8 lg:px-12">
            <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-accent2 opacity-70 blur-3xl" />
            <div className="relative mx-auto w-full max-w-6xl">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
                    <span className="comic-sticker mb-6 inline-block -rotate-2 bg-accent2">OPEN TO NEW OPPORTUNITIES!</span>
                    <h1 className="comic-title mb-6 text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
                        {firstName} <span className="text-accent">{lastName}</span>
                    </h1>
                    <p className="mb-8 max-w-2xl text-lg font-medium leading-relaxed text-body sm:text-xl">
                        {dataUser?.title || 'Backend-focused developer who enjoys building reliable APIs and practical digital products.'}
                    </p>
                    <div className="mb-9 flex flex-wrap gap-3">
                        {['AI', 'Backend', 'Frontend', 'Clean Architecture'].map((skill) => (
                            <span key={skill} className="comic-tag">{skill}</span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <motion.a href="https://www.linkedin.com/in/kevin-elvio-403486255/" target="_blank" rel="noreferrer" className="comic-button bg-accent2" whileHover={{ scale: 1.04, rotate: -1 }} whileTap={{ scale: 0.96 }}>Linkedin</motion.a>
                        <motion.button type="button" onClick={() => onNavigate('projects')} className="comic-button bg-card" whileHover={{ scale: 1.04, rotate: 1 }} whileTap={{ scale: 0.96 }}>View Projects</motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

Hero.propTypes = {
    heroRef: PropTypes.object.isRequired,
    dataUser: PropTypes.shape({ name: PropTypes.string, title: PropTypes.string, email: PropTypes.string }),
    onNavigate: PropTypes.func.isRequired
};

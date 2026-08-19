import { motion } from 'framer-motion'
import PropTypes from 'prop-types';

export default function Hero({ heroRef, dataUser, onNavigate }) {
    const fullName = dataUser?.name?.trim() || 'Kevin Elvio';
    const [firstName, ...restNames] = fullName.split(' ');
    const lastName = restNames.join(' ') || 'Elvio';

    return (
        <section ref={heroRef} className="relative min-h-screen overflow-hidden pt-28 flex items-center justify-center px-6">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-sky-300/15 blur-3xl" />
                <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="grid items-center gap-12 lg:grid-cols-[1.2fr,0.8fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <span className="inline-flex items-center rounded-full border border-sky-300/30 bg-sky-300/10 px-4 py-2 text-sm tracking-wide text-sky-200 mb-6">
                            Open to new opportunities
                        </span>
                        <motion.h1
                            className="text-5xl md:text-7xl font-black text-slate-50 mb-6 leading-[1.05]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {firstName}{' '}
                            <motion.span className="text-sky-300" whileHover={{ opacity: 0.95 }}>
                                {lastName}
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {dataUser?.title || 'Backend-focused developer who enjoys building reliable APIs and practical digital products.'}
                        </motion.p>

                        <motion.div
                            className="mb-8 flex flex-wrap gap-3 justify-center lg:justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {['AI', 'Backend', 'Frontend', 'Clean Architecture'].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-slate-600/70 bg-slate-900/40 px-4 py-1.5 text-sm text-slate-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.button
                                type="button"
                                className="bg-sky-400 text-slate-950 px-8 py-3 rounded-xl font-semibold hover:bg-sky-300 transition-all shadow-lg shadow-sky-500/20"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a href="https://www.linkedin.com/in/kevin-elvio-403486255/" target="_blank" rel="noreferrer">
                                    Contact Me
                                </a>
                            </motion.button>

                            <motion.button
                                type="button"
                                className="border border-slate-500/80 text-slate-100 px-8 py-3 rounded-xl font-semibold hover:border-sky-300 hover:text-sky-200 transition-all"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                          onClick={() => onNavigate('projects')}
                            >
                                View Projects
                            </motion.button>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

Hero.propTypes = {
  heroRef: PropTypes.object.isRequired,
    dataUser: PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        email: PropTypes.string
    }),
    onNavigate: PropTypes.func.isRequired
}

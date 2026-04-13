import { motion } from 'framer-motion'
import PropTypes from 'prop-types';

export default function Hero({ heroRef, dataUser, onNavigate }) {
    const fullName = dataUser?.name?.trim() || 'Kevin Elvio';
    const [firstName, ...restNames] = fullName.split(' ');
    const lastName = restNames.join(' ') || 'Elvio';
    const initials = `${firstName[0] || 'K'}${lastName[0] || 'E'}`;

    return (
        <section ref={heroRef} className="min-h-screen pt-28 flex items-center justify-center px-6">
            <div className="container mx-auto">
                <div className="grid items-center gap-12 lg:grid-cols-[1.25fr,0.75fr]">
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

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 rounded-3xl bg-sky-400/10 blur-2xl" />
                        <div className="relative rounded-3xl border border-slate-700/60 bg-slate-900/70 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.6)]">
                            <div className="rounded-2xl border border-slate-700/40 bg-slate-900/60 p-5">
                                <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-5xl font-bold text-sky-300">
                                    {dataUser?.image ? (
                                        <img
                                            src={dataUser.image}
                                            alt={fullName}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    ) : (
                                        initials
                                    )}
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="text-slate-200 font-semibold">{fullName}</p>
                                    <p className="text-sm text-slate-400 mt-1">{dataUser?.email || 'Available for collaboration'}</p>
                                </div>
                            </div>
                        </div>
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
        image: PropTypes.string,
        email: PropTypes.string
    }),
    onNavigate: PropTypes.func.isRequired
}

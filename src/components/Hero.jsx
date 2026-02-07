import { motion } from 'framer-motion'
import PropTypes from 'prop-types';

export default function Hero({ heroRef, dataUser }) {
    
    return (
        <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-white mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {dataUser?.name?.split(' ')[0] || "Kevin"}{' '}
                            <motion.span
                                className="text-white bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: 'linear-gradient(to right, #facc15, #fb923c)',
                                    backgroundSize: '200% 100%',
                                    backgroundPosition: '0%',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                                animate={{
                                    backgroundPosition: ['0%', '100%'],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                }}
                            >
                                {dataUser?.name?.split(' ')[1] || "Elvio"}
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-gray-300 mb-8 max-w-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >{dataUser?.title || "Full Stack Developer & Designer passionate about crafting interactive, aesthetic, and scalable web experiences."}</motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.button
                                className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/25"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Me
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

Hero.propTypes = {
  heroRef: PropTypes.object.isRequired
}

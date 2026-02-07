import { motion } from 'framer-motion'
import PropTypes from 'prop-types';


export default function About({ aboutRef, dataUser }) {
    return (
        <section ref={aboutRef} className="py-20 px-6 my-60">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-white mb-8 text-center">
                        About <span className="text-yellow-400">Me</span>
                    </h2>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
                        <p className="text-lg text-gray-300 leading-relaxed text-center">
                            {dataUser?.description || '|| I am a Junior Backend Developer with a strong interest in backend system development, data processing, and the practical application of machine learning. I enjoy working with programming logic, building APIs, and integrating backend services with frontend applications.'}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

About.propTypes = {
  aboutRef: PropTypes.object.isRequired
}
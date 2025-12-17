import { motion } from 'framer-motion'

export default function About({ aboutRef }) {
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
                            I&#39;m a web developer who believes that bug-free code can save the world.
                            For over 3 years, I&#39;ve been playing around with design and experimenting with new technologies — because if I stop coding, my brain might just timeout.
                            Sometimes the results are awesome, sometimes... it&#39;s just a 500 error 😒
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
import { motion } from 'framer-motion'
import PropTypes from 'prop-types';


export default function About({ aboutRef, dataUser }) {
    return (
        <section ref={aboutRef} className="py-24 px-6 my-20">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid gap-6 lg:grid-cols-[0.85fr,1.15fr]"
                >
                    <div className="rounded-3xl border border-slate-700/50 bg-slate-900/70 p-8 backdrop-blur-sm">
                        <h2 className="text-4xl font-bold text-slate-100 mb-4">
                            About <span className="text-sky-300">Me</span>
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Passionate about designing scalable backend systems and translating ideas into practical products.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="rounded-xl border border-slate-700/60 bg-slate-950/40 p-4">
                                <p className="text-xs uppercase tracking-wider text-slate-400">Email</p>
                                <p className="text-slate-200 mt-1 break-all">{dataUser?.email || 'Not provided yet'}</p>
                            </div>

                            <div className="rounded-xl border border-slate-700/60 bg-slate-950/40 p-4">
                                <p className="text-xs uppercase tracking-wider text-slate-400">Current Focus</p>
                                <p className="text-slate-200 mt-1">{dataUser?.title || 'Building reliable backend services and API integrations'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-700/50 bg-slate-900/70 p-8 backdrop-blur-sm">
                        <p className="text-lg text-slate-300 leading-relaxed">
                            {dataUser?.description || '|| I am a Junior Backend Developer with a strong interest in backend system development, data processing, and the practical application of machine learning. I enjoy working with programming logic, building APIs, and integrating backend services with frontend applications.'}
                        </p>

                        <div className="mt-8 grid sm:grid-cols-2 gap-4">
                            <div className="rounded-xl border border-sky-300/30 bg-sky-300/5 p-4">
                                <p className="text-slate-100 font-semibold">API Engineering</p>
                                <p className="text-sm text-slate-400 mt-1">Crafting maintainable endpoints and service layers.</p>
                            </div>

                            <div className="rounded-xl border border-sky-300/30 bg-sky-300/5 p-4">
                                <p className="text-slate-100 font-semibold">Product Mindset</p>
                                <p className="text-sm text-slate-400 mt-1">Turning technical decisions into user-facing value.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

About.propTypes = {
    aboutRef: PropTypes.object.isRequired,
    dataUser: PropTypes.shape({
        email: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
    })
}
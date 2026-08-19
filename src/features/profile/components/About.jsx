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
                            {dataUser?.description || ''}
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
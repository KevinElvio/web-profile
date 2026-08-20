import { motion } from 'framer-motion';
import { FiArrowUpRight, FiBriefcase, FiGithub, FiMail, FiMapPin } from 'react-icons/fi';
import PropTypes from 'prop-types';

export default function About({ aboutRef, dataUser, github }) {
    const details = [
        { label: 'Email', value: dataUser?.email || 'Email belum tersedia', href: dataUser?.email ? `mailto:${dataUser.email}` : null, icon: FiMail, color: 'bg-white' },
        { label: 'Current Focus', value: dataUser?.title || 'Building reliable backend services', icon: FiBriefcase, color: 'bg-[#ffe08a]' },
        { label: 'Location', value: 'Indonesia', icon: FiMapPin, color: 'bg-[#ff9f1c]' },
        { label: 'GitHub', value: github ? 'Visit profile' : 'Belum tersedia', href: github || null, icon: FiGithub, color: 'bg-white' }
    ];

    return (
        <section ref={aboutRef} className="relative px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <p className="mb-3 font-black uppercase tracking-[0.2em] text-[#e85d04]">Get to know me</p>
                    <h2 className="comic-title mb-6 text-4xl sm:text-6xl">ABOUT <span className="text-[#e85d04]">ME</span></h2>
                    <p className="max-w-2xl text-lg font-medium leading-8 text-[#392b20]">{dataUser?.description || 'Saya suka mengubah ide menjadi produk digital yang berguna. Fokus saya ada pada aplikasi yang rapi, mudah digunakan, dan dapat diandalkan dari awal hingga berkembang.'}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
                    {details.map((detail) => {
                        const Icon = detail.icon;
                        const card = <><div className="mb-8 flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center border-2 border-[#17120d] bg-[#fff8e7] text-xl"><Icon /></span>{detail.href && <FiArrowUpRight className="text-xl" />}</div><p className="text-xs font-black uppercase tracking-[0.12em] text-[#6b3b12]">{detail.label}</p><p className="mt-2 break-words text-sm font-black leading-snug sm:text-base">{detail.value}</p></>;
                        const className = `comic-card block min-h-44 p-4 sm:p-5 ${detail.color} ${detail.href ? 'cursor-pointer transition-transform hover:-translate-y-1 hover:rotate-1 focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#e85d04]' : ''}`;
                        return detail.href ? <motion.a key={detail.label} href={detail.href} target="_blank" rel="noreferrer" className={className} whileTap={{ scale: 0.96 }}>{card}</motion.a> : <div key={detail.label} className={className}>{card}</div>;
                    })}
                </motion.div>
            </div>
        </section>
    );
}

About.propTypes = {
    aboutRef: PropTypes.object.isRequired,
    dataUser: PropTypes.shape({ email: PropTypes.string, title: PropTypes.string, description: PropTypes.string }),
    github: PropTypes.string
};

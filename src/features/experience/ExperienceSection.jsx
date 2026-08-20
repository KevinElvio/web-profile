import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { ReadExperience } from './api';
import { useEffect, useMemo, useState } from 'react';
import { formatDate } from '../../shared/lib/DateHelper';

export default function ExperienceSection({ experienceRef }) {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    ReadExperience().then((data) => setExperience(data?.data?.data || [])).catch(console.log);
  }, []);

  const sortedExperience = useMemo(() => [...experience].sort((a, b) => new Date(b?.start_date || 0) - new Date(a?.start_date || 0)), [experience]);

  return (
    <section ref={experienceRef} className="comic-section px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center"><p className="comic-kicker">Perjalanan karier</p><h2 className="comic-title text-4xl sm:text-6xl">WORK <span className="text-[#e85d04]">EXPERIENCE</span></h2></div>
        {sortedExperience.length === 0 ? <div className="comic-card bg-white p-8 text-center font-black">Experience data is being updated.</div> : <div className="comic-timeline">
          {sortedExperience.map((exp, index) => {
            const period = exp?.still_working ? `${formatDate(exp?.start_date)} - Sekarang` : `${formatDate(exp?.start_date)} - ${formatDate(exp?.end_date)}`;
            return <motion.article key={`${exp?.company}-${index}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`comic-timeline-item ${index % 2 ? 'comic-timeline-right' : ''}`}>
              <span className="comic-timeline-dot" />
              <div className={`comic-card p-6 sm:p-7 ${index % 3 === 1 ? 'bg-[#ff9f1c]' : index % 3 === 2 ? 'bg-[#ffe08a]' : 'bg-white'}`}>
                <span className="comic-date">{period}</span><h3 className="mt-4 text-2xl font-black">{exp?.company}</h3><p className="mt-1 font-bold text-[#e85d04]">{exp?.position}</p><p className="mt-4 leading-relaxed text-[#392b20]">{exp?.description_job}</p>
              </div>
            </motion.article>;
          })}
        </div>}
      </div>
    </section>
  );
}

ExperienceSection.propTypes = { experienceRef: PropTypes.object.isRequired };

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { ReadExperience } from '../services/experienceService';
import { useState, useEffect } from 'react';
import { formatDate } from '../helper/DateHelper';

export default function ExperienceSection({ experienceRef }) {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const data = await ReadExperience();
        setExperience(data?.data?.data || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchExperience();
  }, []);

  return (
    <section ref={experienceRef} className="py-24 px-6 my-20">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-slate-100 mb-12 text-center"
        >
          Work <span className="text-sky-300">Experience</span>
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-6">
          {experience.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-600/70 bg-slate-900/40 p-8 text-center text-slate-400">
              Experience data is being updated.
            </div>
          )}

          {experience?.map((exp, index) => {
            const period = exp?.still_working
              ? `${formatDate(exp?.start_date)} - Sekarang`
              : `${formatDate(exp?.start_date)} - ${formatDate(exp?.end_date)}`;

            return (
              <motion.div
                key={`${exp?.company || 'company'}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="rounded-3xl border border-slate-700/60 bg-slate-900/70 p-8 backdrop-blur-sm hover:border-sky-300/40 transition-all"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-sky-300">{exp?.company}</h3>
                  <span className="text-slate-300 bg-slate-800 px-4 py-1.5 rounded-full text-sm border border-slate-700/60">
                    {period}
                  </span>
                </div>

                <p className="text-slate-300 mb-5 leading-relaxed">{exp?.description_job}</p>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-sky-300/10 text-sky-200 px-3 py-1.5 rounded-full text-sm border border-sky-300/25">
                    {exp?.position}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

ExperienceSection.propTypes = {
  experienceRef: PropTypes.object.isRequired
}


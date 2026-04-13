import { motion } from "framer-motion";
import Logo from "./Logo";
import PropTypes from 'prop-types';
import { readSkill } from "../services/skillService";
import { useState, useEffect } from 'react';

export default function Skills({ skillsRef }) {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await readSkill();
        setSkills(data?.data?.data || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section ref={skillsRef} className="py-24 px-6 my-20">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-slate-100 mb-12 text-center"
        >
          Technical <span className="text-sky-300">Skills</span>
        </motion.h2>

        {skills.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-600/70 bg-slate-900/40 p-8 text-center text-slate-400 mb-6">
            Skill data is currently empty.
          </div>
        )}

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={`${skill?.name || 'skill'}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-4 text-center hover:border-sky-300/45 transition-all"
            >
              <div className="flex justify-center items-center mb-3 min-h-[64px]">
                <Logo domain={skill?.link_image} alt={skill?.name} />
              </div>

              <div>
                <p className="text-sm font-medium text-slate-200 truncate">{skill?.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

Skills.propTypes = {
  skillsRef: PropTypes.object.isRequired
}



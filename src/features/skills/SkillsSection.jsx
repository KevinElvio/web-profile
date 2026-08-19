import { motion } from "framer-motion";
import Logo from "../../shared/ui/Logo";
import PropTypes from 'prop-types';
import { readSkill } from "./api";
import { useState, useEffect, useMemo } from 'react';

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

  const marqueeSkills = useMemo(() => {
    if (skills.length === 0) return [];
    return [...skills, ...skills];
  }, [skills]);

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

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.50, delay: 1.50 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-sky-400/10 blur-2xl" />
          <div className="relative rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/90 to-slate-900/50 p-7 shadow-[0_20px_70px_rgba(15,23,42,0.6)] backdrop-blur-sm">
            {/* <div className="mb-5 flex items-center justify-between border-b border-slate-700/60 pb-4">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Tech Stack Stream</p>
              <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs text-emerald-200">Open to work</span>
            </div> */}

            <div className="space-y-6">
              <div className="group/stream overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950/55 py-4">
                <div className="flex w-max gap-3 px-3 [animation:skillMarquee_26s_linear_infinite] group-hover/stream:[animation-play-state:paused]">
                  {marqueeSkills.map((skill, index) => (
                    <div
                      key={`${skill?.id || skill?.name || 'skill'}-main-${index}`}
                      className="flex items-center gap-3 rounded-xl border border-slate-600/70 bg-slate-900/80 px-4 py-2 text-slate-100"
                    >
                      <div className="h-8 w-8 overflow-hidden rounded-md bg-slate-800 flex items-center justify-center">
                        <Logo domain={skill?.link_image} alt={skill?.name} className="h-6 w-6 object-contain" />
                      </div>
                      <p className="text-sm font-medium whitespace-nowrap">{skill?.name || 'Skill'}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="group/stream overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950/55 py-4">
                <div className="flex w-max gap-3 px-3 [animation:skillMarqueeReverse_22s_linear_infinite] group-hover/stream:[animation-play-state:paused]">
                  {marqueeSkills.map((skill, index) => (
                    <div
                      key={`${skill?.id || skill?.name || 'skill'}-sub-${index}`}
                      className="flex items-center gap-3 rounded-xl border border-sky-300/30 bg-slate-900/85 px-4 py-2 text-slate-100"
                    >
                      <div className="h-7 w-7 overflow-hidden rounded-md bg-slate-800 flex items-center justify-center">
                        <Logo domain={skill?.link_image} alt={skill?.name} className="h-5 w-5 object-contain" />
                      </div>
                      <p className="text-xs font-medium uppercase tracking-wide whitespace-nowrap text-sky-100">{skill?.name || 'Skill'}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

Skills.propTypes = {
  skillsRef: PropTypes.object.isRequired
}



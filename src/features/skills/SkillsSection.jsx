import { motion } from 'framer-motion';
import Logo from '../../shared/ui/Logo';
import PropTypes from 'prop-types';
import { readSkill } from './api';
import { useEffect, useMemo, useState } from 'react';

export default function Skills({ skillsRef }) {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    readSkill().then((data) => setSkills(data?.data?.data || [])).catch(console.log);
  }, []);

  const marqueeSkills = useMemo(() => [...skills, ...skills], [skills]);

  return (
    <section ref={skillsRef} className="comic-section overflow-hidden px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <p className="comic-kicker">Toolbox</p>
          <h2 className="comic-title text-4xl sm:text-6xl">TECHNICAL <span className="text-[#e85d04]">SKILLS</span></h2>
          <p className="mx-auto mt-6 max-w-2xl font-medium leading-7 text-[#392b20]">Teknologi yang saya gunakan untuk membangun produk digital.</p>
        </motion.div>
      </div>
      {skills.length === 0 ? <div className="comic-card mx-auto max-w-xl bg-white p-8 text-center font-bold">Skills akan tampil di sini.</div> : <div className="space-y-5">
        <div className="comic-marquee"><div className="comic-marquee-track">{marqueeSkills.map((skill, index) => <SkillCard key={`${skill?.id || skill?.name}-${index}`} skill={skill} color={index % 3} />)}</div></div>
        <div className="comic-marquee"><div className="comic-marquee-track comic-marquee-reverse">{marqueeSkills.map((skill, index) => <SkillCard key={`${skill?.id || skill?.name}-reverse-${index}`} skill={skill} color={(index + 1) % 3} />)}</div></div>
      </div>}
    </section>
  );
}

function SkillCard({ skill, color }) {
  const colors = ['#ffffff', '#ff9f1c', '#ffe08a'];
  return <div className="comic-marquee-card" style={{ backgroundColor: colors[color] }}><div className="flex h-11 w-11 items-center justify-center border-2 border-[#17120d] bg-[#fff8e7] p-2"><Logo domain={skill?.link_image} alt={skill?.name} className="h-full w-full object-contain" /></div><p className="whitespace-nowrap font-black">{skill?.name || 'Skill'}</p></div>;
}

SkillCard.propTypes = { skill: PropTypes.object, color: PropTypes.number.isRequired };
Skills.propTypes = { skillsRef: PropTypes.object.isRequired };

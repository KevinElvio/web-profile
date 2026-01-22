import { motion } from "framer-motion";
import Logo from "./Logo";
import PropTypes from 'prop-types';
import { readSkill } from "../services/skillService";
import { useState, useEffect } from 'react';
export default function Skills({ skillsRef }) {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const fetchSkills = async ()  =>{
      try {
        const data = await readSkill();
        setSkills(data.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchSkills()
  } ,[])

  return (
    <section ref={skillsRef} className="py-20 px-6 my-40">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Technical <span className="text-yellow-400">Skills</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-4 sm:grid-cols-6 grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="mb-6">

              <div className="flex justify-between items-center mb-2">
                <span><Logo domain={skill.link_image} alt={skill.name}/></span>
              </div>
              <div className="">
                <motion.div />
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



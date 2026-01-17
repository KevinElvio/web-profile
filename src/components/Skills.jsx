import { motion } from "framer-motion";
import Logo from "./Logo";
import PropTypes from 'prop-types';
export default function Skills({ skillsRef }) {
  const skills = [
    { domain: <Logo domain="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" /> },
    { domain: <Logo domain="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" /> },


  ];
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
                <span>{skill.domain}</span>
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



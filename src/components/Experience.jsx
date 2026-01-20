import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { ReadExperience } from '../services/experienceService';
import { useState, useEffect } from 'react';

export default function ExperienceSection({ experienceRef }) {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const data = await ReadExperience();
        setExperience(data.data.data)
        console.log(data.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchExperience()
  }, [])
  // const experiences = [
  //   {
  //     role: "Frontend Developer",
  //     company: "PT Digital Kreatif",
  //     period: "2023 - Present",
  //     description: "Building interactive dashboards and animation-driven web experiences using React and GSAP.",
  //     achievements: ["Improved performance by 40%", "Led UI/UX redesign", "Mentored 2 junior developers"]
  //   },
  //   {
  //     role: "UI Designer",
  //     company: "Freelance",
  //     period: "2021 - 2023",
  //     description: "Designed landing pages, brand kits, and product interfaces for startups.",
  //     achievements: ["Completed 50+ projects", "95% client satisfaction", "Awarded 'Best Design 2022'"]
  //   }
  // ];

  return (
    <section ref={experienceRef} className="py-20 px-6 my-40">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Work <span className="text-yellow-400">Experience</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience?.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-yellow-400">{exp?.position}</h3>
                <span className="text-gray-400 bg-gray-700 px-4 py-1 rounded-full">
                  {exp?.start_date}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{exp?.description_job}</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-sm">
                  {exp?.company}
                </span>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

ExperienceSection.propTypes = {
  experienceRef: PropTypes.object.isRequired
}


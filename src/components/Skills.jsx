import { motion } from "framer-motion";
export default function Skills({ skillsRef }) {
  const skills = [
    { name: "React / Next.js", level: 90, color: "#61DAFB" },
    { name: "Tailwind CSS", level: 85, color: "#06B6D4" },
    { name: "Node.js", level: 75, color: "#339933" },
    { name: "GSAP Animation", level: 80, color: "#88CE02" },
    { name: "UI/UX Design", level: 70, color: "#FF6B6B" },
    { name: "Git & Deployment", level: 85, color: "#F05032" },
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

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-white">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className="h-3 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


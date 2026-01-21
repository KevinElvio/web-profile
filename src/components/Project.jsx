import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { readProject } from '../services/projectService';
import { useState, useEffect } from 'react';

export default function Project({ projectRef }) {
  const [project, setProject] = useState([]);
  useEffect(() => {
    const fetchProject = () => {
      try {
        const data = readProject()
        setProject(data.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchProject()
  }, [])

  const projects = [
        {
            title: "Portfolio Website",
            description: "Modern, responsive portfolio with smooth animations and interactive elements.",
            tech: ["React", "Framer Motion", "Tailwind"],
            image: "/project1.jpg",
            githubLink: "https://example.com/project-1",
        },
        {
            title: "Dashboard App",
            description: "Real-time analytics dashboard with data visualization and dark mode.",
            tech: ["Next.js", "Chart.js", "TypeScript"],
            image: "/project2.jpg",
            githubLink: "https://example.com/project-1",
        },
        {
            title: "E-Commerce UI",
            description: "Beautiful e-commerce interface with seamless user experience and animations.",
            tech: ["React", "GSAP", "Styled Components"],
            image: "/project3.jpg",
            githubLink: "https://example.com/project-1",
        }
    ];
  return (
    <section ref={projectRef} className="py-20 px-6 my-80">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Featured <span className="text-yellow-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all group"
            >
              <div className="h-48 bg-gradient-to-br from-purple-600 to-yellow-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  <h5 className='font-bold mt-5'>Github Link : <a className='text-blue-400' href={project.githubLink}>{project.githubLink}</a></h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

Project.propTypes = {
  projectRef: PropTypes.object.isRequired
}


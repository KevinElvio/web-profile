import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { readProject } from '../services/projectService';
import { useState, useEffect } from 'react';

export default function Project({ projectRef }) {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await readProject();
        setProject(data?.data?.data || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProject();
  }, []);

  return (
    <section ref={projectRef} className="py-24 px-6 my-20">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-slate-100 mb-12 text-center"
        >
          Featured <span className="text-sky-300">Projects</span>
        </motion.h2>

        {projects.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-600/70 bg-slate-900/40 p-8 text-center text-slate-400 mb-6">
            Projects will be listed here soon.
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={`${project?.title || 'project'}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900/75 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/70 hover:border-sky-300/45 transition-all group"
            >
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 relative overflow-hidden">
                <img
                  src={project?.image}
                  alt={project?.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-all" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-2">{project?.title}</h3>
                <p className="text-slate-300 mb-4 line-clamp-4">{project?.description}</p>

                <div className="flex flex-wrap gap-2">
                  {(project?.techUsed || []).map((tech, i) => (
                    <span
                      key={`${tech?.name || 'tech'}-${i}`}
                      className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-700"
                    >
                      {tech?.name}
                    </span>
                  ))}
                </div>

                {project?.githubLink && (
                  <h5 className="font-semibold mt-5 text-slate-200">
                    Github Link:{' '}
                    <a
                      className="text-sky-300 hover:text-sky-200 transition-colors break-all"
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.githubLink}
                    </a>
                  </h5>
                )}
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


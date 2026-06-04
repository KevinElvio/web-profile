import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { readProject } from '../services/projectService';
import { useState, useEffect } from 'react';

export default function Project({ projectRef }) {
  const [projects, setProject] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

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

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

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
              className="bg-slate-900/75 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/70 hover:border-sky-300/45 transition-all group cursor-pointer"
              onClick={() => openModal(project)}
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
                      onClick={(e) => e.stopPropagation()}
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

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-slate-700"
            >
              {selectedProject?.image && (
                <div className="h-56 bg-gradient-to-br from-slate-700 to-slate-900 relative overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject?.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="flex justify-between items-start px-6 py-4 border-b border-slate-700">
                <h3 className="text-2xl font-semibold text-slate-100">
                  {selectedProject?.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-slate-400 hover:text-red-400 transition-colors text-3xl leading-none cursor-pointer"
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>

              <div className="px-6 py-5 text-slate-300 text-sm leading-relaxed">
                <p className="whitespace-pre-line">
                  {selectedProject?.description || 'No description provided.'}
                </p>

                {selectedProject?.techUsed?.length > 0 && (
                  <div className="mt-5">
                    <h4 className="text-slate-100 font-semibold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techUsed.map((tech, i) => (
                        <span
                          key={`modal-tech-${i}`}
                          className="bg-slate-800 text-slate-200 px-3 py-1 rounded-full text-xs border border-slate-700"
                        >
                          {tech?.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject?.githubLink && (
                  <div className="mt-5">
                    <h4 className="text-slate-100 font-semibold mb-1">Github Link:</h4>
                    <a
                      className="text-sky-300 hover:text-sky-200 transition-colors break-all"
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {selectedProject.githubLink}
                    </a>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3 px-6 py-4 bg-slate-800/50 border-t border-slate-700 rounded-b-2xl">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-100 text-sm font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

Project.propTypes = {
  projectRef: PropTypes.object.isRequired
}

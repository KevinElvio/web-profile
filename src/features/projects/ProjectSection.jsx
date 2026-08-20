import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { readProject } from './api';
import { useEffect, useState } from 'react';

export default function Project({ projectRef }) {
  const [projects, setProject] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => { readProject().then((data) => setProject(data?.data?.data || [])).catch(console.log); }, []);
  useEffect(() => { document.body.style.overflow = selectedProject ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [selectedProject]);

  return (
    <section ref={projectRef} className="comic-section px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-6xl"><div className="mb-12 text-center"><p className="comic-kicker">Pilihan karya</p><h2 className="comic-title text-4xl sm:text-6xl">FEATURED <span className="text-[#e85d04]">PROJECTS</span></h2></div>
        {projects.length === 0 ? <div className="comic-card bg-white p-8 text-center font-black">Projects will be listed here soon.</div> : <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <motion.button key={`${project?.title}-${index}`} type="button" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -8, rotate: index % 2 ? 1 : -1 }} onClick={() => setSelectedProject(project)} className={`comic-card overflow-hidden text-left ${index % 3 === 1 ? 'bg-[#ff9f1c]' : index % 3 === 2 ? 'bg-[#ffe08a]' : 'bg-white'}`}>
          <div className="h-48 border-b-[3px] border-[#17120d] bg-[#ffe08a]">{project?.image && <img src={project.image} alt={project.title} className="h-full w-full object-cover" loading="lazy" />}</div><div className="p-6"><h3 className="text-xl font-black">{project?.title}</h3><p className="mt-3 line-clamp-3 text-sm font-medium leading-relaxed text-[#392b20]">{project?.description}</p><div className="mt-5 flex flex-wrap gap-2">{(project?.techUsed || []).map((tech, i) => <span key={`${tech?.name}-${i}`} className="comic-tech">{tech?.name}</span>)}</div></div>
        </motion.button>)}</div>}
      </div>
      <AnimatePresence>{selectedProject && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"><motion.div initial={{ scale: .9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .9, y: 20 }} onClick={(event) => event.stopPropagation()} className="comic-modal max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-[#fff8e7]">{selectedProject.image && <img src={selectedProject.image} alt={selectedProject.title} className="max-h-[50vh] w-full border-b-[3px] border-[#17120d] object-contain" />}<div className="p-6"><div className="flex items-start justify-between gap-4"><h3 className="text-2xl font-black">{selectedProject.title}</h3><button type="button" onClick={() => setSelectedProject(null)} className="text-3xl font-black">×</button></div><p className="mt-5 whitespace-pre-line leading-relaxed text-[#392b20]">{selectedProject.description}</p>{selectedProject.githubLink && <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="comic-button mt-6 inline-block bg-[#ff9f1c]">Open GitHub</a>}</div></motion.div></motion.div>}</AnimatePresence>
    </section>
  );
}
Project.propTypes = { projectRef: PropTypes.object.isRequired };

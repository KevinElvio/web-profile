// import About from "./layouts/About";
// import Biodata from "./layouts/Biodata";
// import Experience from "./layouts/Experience";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import Project from "./layouts/Project";
// import Skills from "./layouts/Skills";

// import { StrictMode } from 'react';

// function LandingPage() {
//     return (
//         <StrictMode>
//             <Navbar />
//             <Biodata />
//             <About />
//             <Project />
//             <Skills />
//             <Experience />
//             <Footer />
//         </StrictMode>
//     );
// }

// export default LandingPage;


import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const biodataRef = useRef(null);
    const experienceRef = useRef(null);
    const projectRef = useRef(null);
    const skillsRef = useRef(null);

    const isHeroInView = useInView(heroRef, { threshold: 0.5 });
    const isAboutInView = useInView(aboutRef, { threshold: 0.5 });
    const isBiodataInView = useInView(biodataRef, { threshold: 0.5 });
    const isExperienceInView = useInView(experienceRef, { threshold: 0.5 });
    const isProjectInView = useInView(projectRef, { threshold: 0.5 });
    const isSkillsInView = useInView(skillsRef, { threshold: 0.5 });

    useEffect(() => {
        if (isHeroInView) setActiveSection('home');
        else if (isAboutInView) setActiveSection('about');
        else if (isBiodataInView) setActiveSection('biodata');
        else if (isExperienceInView) setActiveSection('experience');
        else if (isProjectInView) setActiveSection('project');
        else if (isSkillsInView) setActiveSection('skills');
    }, [isHeroInView, isAboutInView, isBiodataInView, isExperienceInView, isProjectInView, isSkillsInView]);

    const floatingElements = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        size: Math.random() * 4 + 1
    }));

    const skills = [
        { name: "React / Next.js", level: 90, color: "#61DAFB" },
        { name: "Tailwind CSS", level: 85, color: "#06B6D4" },
        { name: "Node.js", level: 75, color: "#339933" },
        { name: "GSAP Animation", level: 80, color: "#88CE02" },
        { name: "UI/UX Design", level: 70, color: "#FF6B6B" },
        { name: "Git & Deployment", level: 85, color: "#F05032" },
    ];

    const projects = [
        {
            title: "Portfolio Website",
            description: "Modern, responsive portfolio with smooth animations and interactive elements.",
            tech: ["React", "Framer Motion", "Tailwind"],
            image: "/project1.jpg"
        },
        {
            title: "Dashboard App",
            description: "Real-time analytics dashboard with data visualization and dark mode.",
            tech: ["Next.js", "Chart.js", "TypeScript"],
            image: "/project2.jpg"
        },
        {
            title: "E-Commerce UI",
            description: "Beautiful e-commerce interface with seamless user experience and animations.",
            tech: ["React", "GSAP", "Styled Components"],
            image: "/project3.jpg"
        }
    ];


    const experiences = [
        {
            role: "Frontend Developer",
            company: "PT Digital Kreatif",
            period: "2023 - Present",
            description: "Building interactive dashboards and animation-driven web experiences using React and GSAP.",
            achievements: ["Improved performance by 40%", "Led UI/UX redesign", "Mentored 2 junior developers"]
        },
        {
            role: "UI Designer",
            company: "Freelance",
            period: "2021 - 2023",
            description: "Designed landing pages, brand kits, and product interfaces for startups.",
            achievements: ["Completed 50+ projects", "95% client satisfaction", "Awarded 'Best Design 2022'"]
        }
    ];

    return (
        <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-200 min-h-screen font-sans overflow-hidden relative">
            {/* Floating Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                {floatingElements.map((dot) => (
                    <motion.div
                        key={dot.id}
                        className="absolute rounded-full bg-purple-500 opacity-20"
                        style={{
                            width: dot.size,
                            height: dot.size,
                            left: `${dot.x}%`,
                            top: `${dot.y}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 3 + dot.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-2xl font-bold text-white"
                        >
                            K<span className="text-yellow-400">.</span>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {['home', 'about', 'experience', 'projects', 'skills'].map((item) => (
                                <motion.button
                                    key={item}
                                    className={`capitalize px-3 py-2 rounded-lg transition-all ${activeSection === item
                                        ? 'text-yellow-400 bg-yellow-400/10'
                                        : 'text-gray-300 hover:text-yellow-400'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item}
                                </motion.button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden text-gray-300"
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <div className="space-y-1">
                                <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                                <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                                <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                            </div>
                        </motion.button>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="md:hidden mt-4 space-y-2"
                            >
                                {['home', 'about', 'experience', 'projects', 'skills'].map((item) => (
                                    <motion.button
                                        key={item}
                                        className={`block w-full text-left capitalize px-4 py-3 rounded-lg transition-all ${activeSection === item
                                            ? 'text-yellow-400 bg-yellow-400/10'
                                            : 'text-gray-300 hover:text-yellow-400'
                                            }`}
                                        whileHover={{ x: 10 }}
                                    >
                                        {item}
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>

            {/* Hero Section */}
            <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 text-center md:text-left"
                        >
                            <motion.h1
                                className="text-5xl md:text-7xl font-bold text-white mb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Kevin{' '}
                                <motion.span
                                    className="text-yellow-400 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                                    animate={{
                                        backgroundPosition: ['0%', '100%'],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: 'reverse',
                                    }}
                                    style={{
                                        backgroundSize: '200% 100%',
                                    }}
                                >
                                    Elvio
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                className="text-xl text-gray-300 mb-8 max-w-2xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Full Stack Developer & Designer passionate about crafting interactive,
                                aesthetic, and scalable web experiences.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <motion.button
                                    className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/25"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact Me
                                </motion.button>
                                <motion.button
                                    className="border border-yellow-500 text-yellow-500 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500/10 transition-all"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Download CV
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex-1 flex justify-center"
                        >
                            <div className="relative">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-30"
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                                <motion.img
                                    src="/Kevin.png"
                                    alt="Profile"
                                    className="relative rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl w-64 md:w-80 border-2 border-gray-800"
                                    whileHover={{ y: -20, rotate: 2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section ref={aboutRef} className="py-20 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold text-white mb-8 text-center">
                            About <span className="text-yellow-400">Me</span>
                        </h2>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
                            <p className="text-lg text-gray-300 leading-relaxed text-center">
                                I&#39;m a web developer who believes that bug-free code can save the world.
                                For over 3 years, I&#39;ve been playing around with design and experimenting with new technologies — because if I stop coding, my brain might just timeout.
                                Sometimes the results are awesome, sometimes... it&#39;s just a 500 error 😒
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Section */}
            <section ref={experienceRef} className="py-20 px-6">
                <div className="container mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-white mb-12 text-center"
                    >
                        Work <span className="text-yellow-400">Experience</span>
                    </motion.h2>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <h3 className="text-2xl font-semibold text-yellow-400">{exp.role}</h3>
                                    <span className="text-gray-400 bg-gray-700 px-4 py-1 rounded-full">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-gray-300 mb-4">{exp.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.achievements.map((achievement, i) => (
                                        <span
                                            key={i}
                                            className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-sm"
                                        >
                                            {achievement}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section ref={projectRef} className="py-20 px-6">
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
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section ref={skillsRef} className="py-20 px-6">
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

            {/* Footer */}
            <footer className="py-8 border-t border-gray-700 bg-gray-900/80 backdrop-blur-md">
                <div className="container mx-auto px-6 text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-500"
                    >
                        © 2025 Kevin Elvio. All Rights Reserved.
                    </motion.p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Skills from '../components/Skills';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    // const biodataRef = useRef(null);
    const experienceRef = useRef(null);
    const projectRef = useRef(null);
    const skillsRef = useRef(null);

    const isHeroInView = useInView(heroRef, { threshold: 0.5 });
    const isAboutInView = useInView(aboutRef, { threshold: 0.5 });
    // const isBiodataInView = useInView(biodataRef, { threshold: 0.5 });
    const isExperienceInView = useInView(experienceRef, { threshold: 0.5 });
    const isProjectInView = useInView(projectRef, { threshold: 0.5 });
    const isSkillsInView = useInView(skillsRef, { threshold: 0.5 });

    useEffect(() => {
        if (isHeroInView) setActiveSection('home');
        else if (isAboutInView) setActiveSection('about');
        // else if (isBiodataInView) setActiveSection('biodata');
        else if (isExperienceInView) setActiveSection('experience');
        else if (isProjectInView) setActiveSection('projects');
        else if (isSkillsInView) setActiveSection('skills');
    }, [isHeroInView, isAboutInView, isExperienceInView, isProjectInView, isSkillsInView]);

    const floatingElements = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        size: Math.random() * 4 + 1
    }));

    

    

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-200 min-h-screen font-sans overflow-hidden relative">
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
            <Navbar activeSection={activeSection}/>

            {/* Hero Section */}
            <Hero heroRef={heroRef}/>

            {/* About Section */}
            <About aboutRef={aboutRef}/>

            {/* Experience Section */}
            <Experience experienceRef={experienceRef} />

            {/* Projects Section */}
            <Project projectRef={projectRef} />
            

            {/* Skills Section */}
            <Skills skillsRef={skillsRef} />

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
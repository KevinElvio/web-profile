import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from '../experience/ExperienceSection';
import Project from '../projects/ProjectSection';
import Skills from '../skills/SkillsSection';
import { ReadUser } from './api';
import { ReadContact } from '../contact/api';


const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [User, setUser] = useState({
        name: '',
        email: '',
        title: '',
        description: '',
        image: ''
    });
    const [contact, setContact] = useState({ github: '' });
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectRef = useRef(null);
    const skillsRef = useRef(null);

    const isHeroInView = useInView(heroRef, { amount: 0.45 });
    const isAboutInView = useInView(aboutRef, { amount: 0.45 });
    const isExperienceInView = useInView(experienceRef, { amount: 0.45 });
    const isProjectInView = useInView(projectRef, { amount: 0.45 });
    const isSkillsInView = useInView(skillsRef, { amount: 0.45 });

    const sections = useMemo(
        () => [
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: 'Skills' }
        ],
        []
    );

    useEffect(() => {
        if (isHeroInView) setActiveSection('home');
        else if (isAboutInView) setActiveSection('about');
        else if (isExperienceInView) setActiveSection('experience');
        else if (isProjectInView) setActiveSection('projects');
        else if (isSkillsInView) setActiveSection('skills');
    }, [isHeroInView, isAboutInView, isExperienceInView, isProjectInView, isSkillsInView]);

    const handleNavigate = useCallback((sectionId) => {
        const sectionMap = {
            home: heroRef,
            about: aboutRef,
            experience: experienceRef,
            projects: projectRef,
            skills: skillsRef
        };

        sectionMap[sectionId]?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, []);

    useEffect(() => {
        const fetchBioUser = async () => {
            try {
                const [userResult, contactResult] = await Promise.allSettled([ReadUser(), ReadContact()]);
                if (userResult.status === 'fulfilled') {
                    setUser(userResult.value.data.data[0]);
                }
                if (contactResult.status === 'fulfilled') {
                    setContact(contactResult.value?.data?.data?.[0] || { github: '' });
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchBioUser()
    }, [])


    return (
        <div className="comic-page relative min-h-screen overflow-hidden bg-[#fff8e7] text-[#17120d]">
            <div className="pointer-events-none absolute inset-0 opacity-30 [background-size:18px_18px] [background-image:radial-gradient(#17120d_1px,transparent_1px)]" />

            <div className="relative z-10">
                <Navbar
                    activeSection={activeSection}
                    onNavigate={handleNavigate}
                    sections={sections}
                />
                <Hero
                    heroRef={heroRef}
                    dataUser={User}
                    onNavigate={handleNavigate}
                />

                <About
                    aboutRef={aboutRef}
                    dataUser={User}
                    github={contact.github}
                />

                <Experience experienceRef={experienceRef} />

                <Project projectRef={projectRef} />

                <Skills skillsRef={skillsRef} />

                <footer className="py-10 border-t border-slate-700/50 bg-slate-950/60 backdrop-blur-md">
                    <div className="container mx-auto px-6 text-center">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-slate-400"
                        >
                            © 2026 Kevin Elvio. Crafted with React and purpose.
                        </motion.p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Portfolio;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
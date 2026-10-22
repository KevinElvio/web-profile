import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from '../experience/ExperienceSection';
import Project from '../projects/ProjectSection';
import Skills from '../skills/SkillsSection';
import { ReadUser, ReadPortfolio } from './api';
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
    const [experiences, setExperiences] = useState([]);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
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
                const portfolioResult = await ReadPortfolio();
                const data = portfolioResult?.data?.data || {};
                if (Array.isArray(data.user) && data.user.length) {
                    setUser(data.user[0]);
                } else if (data.user) {
                    setUser(data.user);
                }
                if (Array.isArray(data.contact) && data.contact.length) {
                    setContact(data.contact[0] || { github: '' });
                } else if (data.contact) {
                    setContact(data.contact);
                }
                setExperiences(data.experiences || []);
                setProjects(data.projects || []);
                setSkills(data.skills || []);
            } catch (error) {
                console.log(error);
                // Fallback to individual calls if aggregate fails
                try {
                    const [userResult, contactResult] = await Promise.allSettled([ReadUser(), ReadContact()]);
                    if (userResult.status === 'fulfilled') setUser(userResult.value.data.data[0]);
                    if (contactResult.status === 'fulfilled') setContact(contactResult.value?.data?.data?.[0] || { github: '' });
                } catch (e) {
                    console.log(e);
                }
            }
        }

        fetchBioUser()
    }, [])


    return (
        <div className="comic-page relative min-h-screen overflow-hidden bg-page text-ink">
            <div className="pointer-events-none absolute inset-0 opacity-30 [background-size:18px_18px] [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)]" />

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

                <Experience experienceRef={experienceRef} experiences={experiences} />

                <Project projectRef={projectRef} projects={projects} />

                <Skills skillsRef={skillsRef} skills={skills} />

                <footer className="py-10 border-t border-borderc/50 bg-card/60 backdrop-blur-md">
                    <div className="container mx-auto px-6 text-center">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-body"
                        >
                            © 2026 Kevin Elvio.
                        </motion.p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Portfolio;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
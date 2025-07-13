import About from "./layouts/About";
import Biodata from "./layouts/Biodata";
import Experience from "./layouts/Experience";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Project from "./layouts/Project";
import Skills from "./layouts/Skills";

import { StrictMode } from 'react';

function LandingPage() {
    return (
        <StrictMode>
            <Navbar />
            <Biodata />
            <About />
            <Project />
            <Skills />
            <Experience />
            <Footer />
        </StrictMode>
    );
}

export default LandingPage;
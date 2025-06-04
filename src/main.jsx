import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Biodata from './pages/layouts/Biodata.jsx'
import Project from './pages/layouts/Project.jsx'
import Skills from './pages/layouts/Skills.jsx'
import Experience from './pages/layouts/Experience.jsx'
import Footer from './components/Footer.jsx'
import About from './pages/layouts/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Biodata />
    <About />
    <Project />
    <Skills />
    <Experience />
    <Footer />
  </StrictMode>,
)

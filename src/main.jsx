import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import Biodata from './Biodata.jsx'
import Project from './Project.jsx'
import Skills from './Skills.jsx'
import Experience from './Experience.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Biodata/>
    <About/>
    <Project/>
    <Skills/>
    <Experience/>
    <Footer/>
  </StrictMode>,
)

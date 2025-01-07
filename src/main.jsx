import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import Biodata from './Biodata.jsx'
import Project from './Project.jsx'
import Skills from './Skills.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Biodata/>
    <Project/>
    <Skills/>
  </StrictMode>,
)

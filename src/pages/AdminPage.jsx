import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../shared/lib/theme.jsx';
import {
  FiUser,
  FiMail,
  FiBriefcase,
  FiFolder,
  FiAward,
  FiLogOut,
} from 'react-icons/fi';

import AboutSection from '../features/profile/ProfileAdminPanel.jsx';
import ContactSection from '../features/contact/ContactAdminPanel.jsx';
import ExperienceSection from '../features/experience/ExperienceAdminPanel.jsx';
import ProjectsSection from '../features/projects/ProjectsAdminPanel.jsx';
import SkillsSection from '../features/skills/SkillsAdminPanel.jsx';
import Cookies from 'js-cookie';


const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    contact: {
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      github: ''
    },
    cv: {
      file: null,
      fileName: ''
    },
    experiences: [],
    projects: [],
    skills: []
  });




  const handleInputChange = (setter, field, value) => {
    setter(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayAdd = (section, newItem) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const handleArrayUpdate = (section, index, updatedItem) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index ? updatedItem : item
      )
    }));
  };

  const handleArrayDelete = (section, index) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const handleImageUpload = (event, setter, field) => {
    const file = event.target.files[0];

    if (file) {
      handleInputChange(setter, 'image', file);
      const reader = new FileReader();
      reader.onload = (e) => {
        handleInputChange(setter, field, e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const logout = () => {
    Cookies.remove('token')
    navigate('/login')
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      {/* Sidebar (flush left, collapsible) */}
      <aside
        className={`sticky top-0 h-screen shrink-0 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 ${
          sidebarOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          {sidebarOpen && <span className="text-lg font-bold text-gray-800 dark:text-gray-100">Admin</span>}
          <button
            type="button"
            onClick={() => setSidebarOpen((o) => !o)}
            aria-label="Toggle sidebar"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            {sidebarOpen ? '«' : '»'}
          </button>
        </div>
        <nav className="p-2 space-y-1">
          {[
            { id: 'about', name: 'About', icon: FiUser },
            { id: 'contact', name: 'Contact', icon: FiMail },
            { id: 'experience', name: 'Experience', icon: FiBriefcase },
            { id: 'projects', name: 'Project', icon: FiFolder },
            { id: 'skills', name: 'Skill', icon: FiAward },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              title={!sidebarOpen ? item.name : undefined}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
              } ${sidebarOpen ? '' : 'justify-center'}`}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {sidebarOpen && <span className="truncate">{item.name}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main area */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Welcome Admin</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">Kelola konten web profile</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
            <button
              onClick={logout}
              disabled={isLoading}
              className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <span>{isLoading ? 'Proses...' : 'Logout'}</span>
              <FiLogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        <main className="p-6">
          <div className="max-w-6xl">
            <div className="bg-white rounded-2xl shadow-md p-6 dark:bg-gray-800">
              {activeTab === 'about' && (
                <AboutSection onChange={handleInputChange} onImageUpload={handleImageUpload} />
              )}
              {activeTab === 'contact' && <ContactSection onChange={handleInputChange} />}
              {activeTab === 'experience' && (
                <ExperienceSection data={formData.experiences} onAdd={handleArrayAdd} onUpdate={handleArrayUpdate} onDelete={handleArrayDelete} />
              )}
              {activeTab === 'projects' && (
                <ProjectsSection data={formData.projects} onAdd={handleArrayAdd} onUpdate={handleArrayUpdate} onDelete={handleArrayDelete} onImageUpload={handleImageUpload} />
              )}
              {activeTab === 'skills' && (
                <SkillsSection data={formData.skills} onAdd={handleArrayAdd} onUpdate={handleArrayUpdate} onDelete={handleArrayDelete} onImageUpload={handleImageUpload} />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
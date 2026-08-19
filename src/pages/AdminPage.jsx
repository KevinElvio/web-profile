import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md px-6 pt-8 pb-12 mb-6 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome Admin</h1>
            <p className="text-gray-600">Kelola konten web profile</p>
          </div>
          <button
            onClick={logout}
            disabled={isLoading}
            className="bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <span>{isLoading ? 'Proses...' : 'Logout'}</span>
            <FiLogOut className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <nav className="space-y-2">
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
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeTab === item.id
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'about' && (
                <AboutSection
                  onChange={handleInputChange}
                  onImageUpload={handleImageUpload}
                />
              )}

              {activeTab === 'contact' && (
                <ContactSection
                  onChange={handleInputChange}
                />
              )}

              {activeTab === 'experience' && (
                <ExperienceSection
                  data={formData.experiences}
                  onAdd={handleArrayAdd}
                  onUpdate={handleArrayUpdate}
                  onDelete={handleArrayDelete}
                />
              )}

              {activeTab === 'projects' && (
                <ProjectsSection
                  data={formData.projects}
                  onAdd={handleArrayAdd}
                  onUpdate={handleArrayUpdate}
                  onDelete={handleArrayDelete}
                  onImageUpload={handleImageUpload}
                />
              )}

              {activeTab === 'skills' && (
                <SkillsSection
                  data={formData.skills}
                  onAdd={handleArrayAdd}
                  onUpdate={handleArrayUpdate}
                  onDelete={handleArrayDelete}
                  onImageUpload={handleImageUpload}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
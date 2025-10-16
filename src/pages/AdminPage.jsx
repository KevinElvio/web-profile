import { useState, useEffect } from 'react';
import { 
  FiImage, 
  FiUser, 
  FiFileText, 
  FiMail, 
  FiBriefcase, 
  FiFolder, 
  FiAward,
  FiSave,
  // FiUpload,
  // FiTrash2,
  // FiEdit
} from 'react-icons/fi';

import AboutSection from '../components/Admin/AboutAdminComponent.jsx';
import ContactSection from '../components/Admin/ContactAdminComponent.jsx';
import CVSection from '../components/Admin/CVAdminComponent.jsx';
import ExperienceSection from '../components/Admin/ExperienceAdminComponent.jsx';
import ProjectsSection from '../components/Admin/ProjectAdminComponent.jsx';
import SkillsSection from '../components/Admin/SkillAdminComponent.jsx';
import ImageGallerySection from '../components/Admin/GalleryAdminComponent.jsx';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isLoading, setIsLoading] = useState(false);

  // Initial state untuk semua data
  const [formData, setFormData] = useState({
    about: {
      title: '',
      description: '',
      image: ''
    },
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

  // Temporary state untuk form input
  const [tempData, setTempData] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    // Load data dari localStorage atau API
    loadData();
  }, []);

  const loadData = () => {
    // Simulasi load data
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  };

  const saveData = () => {
    setIsLoading(true);
    // Simpan ke localStorage atau API
    localStorage.setItem('profileData', JSON.stringify(formData));
    setTimeout(() => {
      setIsLoading(false);
      alert('Data berhasil disimpan!');
    }, 1000);
  };

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
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

  const handleImageUpload = (event, section, field) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        handleInputChange(section, field, e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = (event, section) => {
    const file = event.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        [section]: {
          file: URL.createObjectURL(file),
          fileName: file.name
        }
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600">Kelola konten web profile Anda</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <nav className="space-y-2">
                {[
                  { id: 'about', name: 'Tentang Saya', icon: FiUser },
                  { id: 'contact', name: 'Kontak', icon: FiMail },
                  { id: 'cv', name: 'CV', icon: FiFileText },
                  { id: 'experience', name: 'Pengalaman', icon: FiBriefcase },
                  { id: 'projects', name: 'Proyek', icon: FiFolder },
                  { id: 'skills', name: 'Skill', icon: FiAward },
                  { id: 'images', name: 'Gambar', icon: FiImage }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </nav>

              <button
                onClick={saveData}
                disabled={isLoading}
                className="w-full mt-6 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <FiSave className="w-5 h-5" />
                <span>{isLoading ? 'Menyimpan...' : 'Simpan Semua'}</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'about' && (
                <AboutSection 
                  data={formData.about}
                  onChange={handleInputChange}
                  onImageUpload={handleImageUpload}
                />
              )}

              {activeTab === 'contact' && (
                <ContactSection 
                  data={formData.contact}
                  onChange={handleInputChange}
                />
              )}

              {activeTab === 'cv' && (
                <CVSection 
                  data={formData.cv}
                  onFileUpload={handleFileUpload}
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

              {activeTab === 'images' && (
                <ImageGallerySection 
                  data={formData}
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
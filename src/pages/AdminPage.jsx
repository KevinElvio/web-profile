import { useState, useEffect, Navigate } from 'react';
import {
  FiImage,
  FiUser,
  FiFileText,
  FiMail,
  FiBriefcase,
  FiFolder,
  FiAward,
  FiSave,
  FiLogOut,
} from 'react-icons/fi';

import AboutSection from '../components/Admin/AboutAdminComponent.jsx';
import ContactSection from '../components/Admin/ContactAdminComponent.jsx';
import CVSection from '../components/Admin/CVAdminComponent.jsx';
import ExperienceSection from '../components/Admin/ExperienceAdminComponent.jsx';
import ProjectsSection from '../components/Admin/ProjectAdminComponent.jsx';
import SkillsSection from '../components/Admin/SkillAdminComponent.jsx';
import ImageGallerySection from '../components/Admin/GalleryAdminComponent.jsx';
import { useUser } from '../components/context/UserContext.jsx';
import { FailedNotif, SuccessNotif } from '../components/notification/Notification.jsx';
import Cookies from 'js-cookie';
import { ReadUser, UpdateUser } from '../services/userService.jsx';
import { data } from 'autoprefixer';


const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser } = useUser();

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

  const [formDataAbout, setFormDataAbout] = useState({
    title: '',
    description: '',
    image: ''
  });

  // Temporary state untuk form input
  // const [tempData, setTempData] = useState({});
  // const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    loadDataAbout();
  }, []);

  const loadDataAbout = async () => {
    try {
      const savedData = await ReadUser();
      if (savedData) {
        setFormDataAbout(savedData.data.data);
      }
    } catch (error) {
      FailedNotif('Error', error)
      console.log(error);

    }
  };

  const saveDataAbout = async () => {
    try {
      await UpdateUser(formDataAbout);
      SuccessNotif('Success', 'Berhasil Update About')
    } catch (error) {
      FailedNotif('Error', error)
    }
  }

  // const saveData = () => {
  //   setIsLoading(true);
  //   // Simpan ke localStorage atau API
  //   localStorage.setItem('profileData', JSON.stringify(formData));
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     alert('Data berhasil disimpan!');
  //   }, 1000);
  // };

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
      const reader = new FileReader();
      reader.onload = (e) => {
        handleInputChange(setter, field, e.target.result);
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

  const logout = () => {
    Cookies.remove('token')
    setUser(null);
    <Navigate to="/login" replace />
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
                  data={formDataAbout}
                  onChange={handleInputChange}
                  onImageUpload={handleImageUpload}
                  saveDataAbout={saveDataAbout}
                  setFormDataAbout={setFormDataAbout}
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

import { useState } from 'react';
import { FiPlus, FiEdit, FiTrash2, FiUpload } from 'react-icons/fi';

const SkillsSection = ({ data, onAdd, onUpdate, onDelete, onImageUpload }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    level: 'Pemula', // Pemula, Menengah, Mahir, Expert
    category: 'Technical', // Technical, Soft Skills, Tools
    image: ''
  });

  const levels = ['Pemula', 'Menengah', 'Mahir', 'Expert'];
  const categories = ['Technical', 'Soft Skills', 'Tools'];

  const resetForm = () => {
    setFormData({
      name: '',
      level: 'Pemula',
      category: 'Technical',
      image: ''
    });
    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      onUpdate('skills', editingIndex, formData);
    } else {
      onAdd('skills', formData);
    }
    resetForm();
  };

  const handleEdit = (index, skill) => {
    setFormData(skill);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Pemula': return 'bg-green-100 text-green-800';
      case 'Menengah': return 'bg-blue-100 text-blue-800';
      case 'Mahir': return 'bg-purple-100 text-purple-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Technical': return 'border-l-blue-500';
      case 'Soft Skills': return 'border-l-green-500';
      case 'Tools': return 'border-l-purple-500';
      default: return 'border-l-gray-500';
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Upload */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Icon Skill
            </label>
            <div className="flex items-center space-x-4">
              {formData.image && (
                <img 
                  src={formData.image} 
                  alt="Skill preview" 
                  className="w-16 h-16 object-cover rounded-lg border"
                />
              )}
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        setFormData(prev => ({ ...prev, image: e.target.result }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="hidden"
                  id="skillImage"
                />
                <label
                  htmlFor="skillImage"
                  className="cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <FiUpload className="w-4 h-4" />
                  <span>Upload Icon</span>
                </label>
              </div>
            </div>
          </div> */}

          {/* Skill Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nama Skill
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Contoh: React.js"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Link Skill
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Contoh: https://react.js"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Level */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tingkat Kemampuan
            </label>
            <select
              value={formData.level}
              onChange={(e) => setFormData(prev => ({ ...prev, level: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div> */}

          {/* Category */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kategori
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div> */}
        </div>

        <div className="flex space-x-3 mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <FiPlus className="w-4 h-4" />
            <span>{isEditing ? 'Update' : 'Tambah'} Skill</span>
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Batal
            </button>
          )}
        </div>
      </form>

      {/* Skills List by Category */}
      {categories.map(category => {
        const categorySkills = data.filter(skill => skill.category === category);
        if (categorySkills.length === 0) return null;

        return (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categorySkills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`border-l-4 ${getCategoryColor(skill.category)} bg-white border border-gray-200 rounded-lg p-4`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      {skill.image && (
                        <img 
                          src={skill.image} 
                          alt={skill.name}
                          className="w-10 h-10 object-cover rounded"
                        />
                      )}
                      <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(index, skill)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FiEdit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onDelete('skills', index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsSection;
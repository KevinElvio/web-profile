
import { useState } from 'react';
import { FiPlus, FiEdit, FiTrash2, FiUpload } from 'react-icons/fi';
import { createSkill, deleteSkill, readSkill, updateSkill } from '../../services/skillService';
import { FailedNotif, SuccessNotif } from '../notification/Notification';
import { useEffect } from 'react';

const SkillsSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    link_image: '',
  });
  const [data, setData] = useState()

  const resetForm = () => {
    setFormData({
      name: '',
      link_image: ''
    });
    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateSkill(editingIndex, formData);
      SuccessNotif('Success','Berhasil update data' )
      loadDataSkill();
    } else {
      await createSkill(formData);
      SuccessNotif('Success','Berhasil membuat data' );
      loadDataSkill();
    }
    resetForm();
  };

  const handleEdit = (index, skill) => {
    setFormData(skill);
    setIsEditing(true);
    setEditingIndex(index);
  };

  useEffect(() => {
    loadDataSkill()
  }, [])

  const loadDataSkill = async () => {
    try {
      const res = await readSkill();
      setData(res.data.data);
    } catch (error) {
      FailedNotif('Error', error)
    }
  }


  const onDelete = async (editingIndex) => {
    try {
      await deleteSkill(editingIndex);
      SuccessNotif('Success','Berhasil menghapus data' );
      loadDataSkill()
    } catch (error) {
      FailedNotif('Error', error)
    }
  }

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
              type="link"
              value={formData.link_image}
              onChange={(e) => setFormData(prev => ({ ...prev, link_image: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Contoh: https://react.js"
              required
            />
          </div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data?.map((skill, index) => (
          <div key={skill.id || index} className="p-2 border rounded-lg hover:shadow-sm transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-3">
                {skill.link_image && (
                  <img
                    src={skill.link_image}
                    alt={skill.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                )}
                <h4 className="font-semibold text-gray-800">{skill.name}</h4>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(skill.id, skill)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FiEdit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDelete(skill.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
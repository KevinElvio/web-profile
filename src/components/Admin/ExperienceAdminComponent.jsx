// ExperienceSection.jsx
import React, { useState } from 'react';
import { FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';

const ExperienceSection = ({ data, onAdd, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
    current: false
  });

  const resetForm = () => {
    setFormData({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
      current: false
    });
    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      onUpdate('experiences', editingIndex, formData);
    } else {
      onAdd('experiences', formData);
    }
    resetForm();
  };

  const handleEdit = (index, experience) => {
    setFormData(experience);
    setIsEditing(true);
    setEditingIndex(index);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Pengalaman Kerja</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Perusahaan
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Posisi
            </label>
            <input
              type="text"
              value={formData.position}
              onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal Mulai
            </label>
            <input
              type="month"
              value={formData.startDate}
              onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal Selesai
            </label>
            <input
              type="month"
              value={formData.endDate}
              onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
              disabled={formData.current}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
            />
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="current"
                checked={formData.current}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  current: e.target.checked,
                  endDate: e.target.checked ? '' : prev.endDate
                }))}
                className="mr-2"
              />
              <label htmlFor="current" className="text-sm text-gray-700">
                Masih bekerja di sini
              </label>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Deskripsi Pekerjaan
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="flex space-x-3">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <FiPlus className="w-4 h-4" />
            <span>{isEditing ? 'Update' : 'Tambah'} Pengalaman</span>
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

      {/* List */}
      <div className="space-y-4">
        {data.map((experience, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {experience.position}
                </h3>
                <p className="text-gray-600">{experience.company}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(index, experience)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FiEdit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onDelete('experiences', index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-2">
              {experience.startDate} - {experience.current ? 'Sekarang' : experience.endDate}
            </p>
            <p className="text-gray-700">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
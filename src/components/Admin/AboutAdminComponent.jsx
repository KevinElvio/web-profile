// AboutSection.jsx
import React from 'react';
import { FiUpload, FiSave } from 'react-icons/fi';

const AboutSection = ({data, onChange, onImageUpload }) => {


  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Tentang Saya</h2>

      <div className="space-y-6">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Foto Profil
          </label>
          <div className="flex items-center space-x-4">
            {data.image && (
              <img
                src={data.image}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
              />
            )}
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => onImageUpload(e, 'about', 'image')}
                className="hidden"
                id="profileImage"
              />
              <label
                htmlFor="profileImage"
                className="cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <FiUpload className="w-4 h-4" />
                <span>Upload Foto</span>
              </label>
            </div>
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Judul
          </label>
          <input
            type="text"
            value={data.title || ''}
            onChange={(e) => onChange('about', 'title', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Contoh: Full Stack Developer"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Deskripsi
          </label>
          <textarea
            value={data.description || ''}
            onChange={(e) => onChange('about', 'description', e.target.value)}
            rows={8}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tulis deskripsi tentang diri Anda..."
          />
        </div>
        <div className='flex justify-end'>
          <button
            // onClick={saveData}
            // disabled={isLoading}
            className="mt-6 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <FiSave className="w-5 h-5" />
            <span>{'Simpan'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
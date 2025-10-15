// ImageGallerySection.jsx
import React from 'react';
import { FiUpload, FiTrash2 } from 'react-icons/fi';

const ImageGallerySection = ({ data, onImageUpload }) => {
  // Collect all images from different sections
  const allImages = [
    { section: 'Profile', src: data.about.image, field: 'image' },
    ...data.projects.map((project, index) => ({
      section: `Project: ${project.title}`,
      src: project.image,
      field: `projects[${index}].image`
    })),
    ...data.skills.map((skill, index) => ({
      section: `Skill: ${skill.name}`,
      src: skill.image,
      field: `skills[${index}].image`
    }))
  ].filter(item => item.src); // Only include items with images

  const handleDeleteImage = (section, field) => {
    // Implement delete logic based on your state structure
    console.log('Delete image from:', section, field);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Galeri Gambar</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Upload Gambar Baru
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ImageUploadCard 
            title="Foto Profil"
            onUpload={(e) => onImageUpload(e, 'about', 'image')}
          />
          <ImageUploadCard 
            title="Gambar Proyek"
            onUpload={(e) => {
              // Handle project image upload separately
              console.log('Project image upload');
            }}
          />
          <ImageUploadCard 
            title="Icon Skill"
            onUpload={(e) => {
              // Handle skill image upload separately
              console.log('Skill image upload');
            }}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Semua Gambar ({allImages.length})
        </h3>
        
        {allImages.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Belum ada gambar yang diupload</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allImages.map((image, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={image.src} 
                  alt={`From ${image.section}`}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-700 truncate">
                    {image.section}
                  </p>
                  <button
                    onClick={() => handleDeleteImage(image.section, image.field)}
                    className="mt-2 text-red-600 hover:text-red-800 text-sm flex items-center space-x-1"
                  >
                    <FiTrash2 className="w-3 h-3" />
                    <span>Hapus</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ImageUploadCard = ({ title, onUpload }) => {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      <input
        type="file"
        accept="image/*"
        onChange={onUpload}
        className="hidden"
        id={`upload-${title}`}
      />
      <label
        htmlFor={`upload-${title}`}
        className="cursor-pointer block"
      >
        <FiUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-sm font-medium text-gray-700">{title}</p>
        <p className="text-xs text-gray-500 mt-1">Click to upload</p>
      </label>
    </div>
  );
};

export default ImageGallerySection;
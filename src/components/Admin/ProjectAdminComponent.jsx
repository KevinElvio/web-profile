// ProjectsSection.jsx
import { useEffect } from 'react';
import { useState } from 'react';
import { FiPlus, FiEdit, FiTrash2, FiUpload } from 'react-icons/fi';
import { createProject, deleteProject, readProject, updateProject } from '../../services/projectService';
import { FailedNotif, SuccessNotif } from '../notification/Notification';

const ProjectsSection = ({ onAdd, onUpdate, onImageUpload }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techUsed: '',
    // projectUrl: '',
    githubLink: '',
    image: ''
  });

  const [data, setData] = useState([])

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      techUsed: '',
      // projectUrl: '',
      githubLink: '',
      image: ''
    });
    setIsEditing(false);
    setEditingIndex(null);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const projectData = {
  //     ...formData,
  //     techUsed: formData.techUsed.split(',').map(tech => tech.trim())
  //   };

  //   if (isEditing) {
  //     await updateProject(editingIndex, projectData)
  //     SuccessNotif('Success', 'Berhasil Update data')
  //   } else {
  //     await createProject(projectData)
  //     SuccessNotif('Success', 'Berhasil Buat data')
      
  //   }
  //   resetForm();
  // };

  const handleEdit = (index, project) => {
    setFormData({
      ...project,
      techUsed: project.techUsed.map(item => item.name).join(', ')
    });
    setIsEditing(true);
    setEditingIndex(index);
  };

  useEffect(() => {
    LoadDataProject()
  }, [])

  const LoadDataProject = async () => {
    try {
      const data = await readProject();
      setData(data.data.data);
    } catch (error) {
      FailedNotif('Error', error)
    }
  }

  const onDelete = async (id) => {
    try {
      if (id) {
        await deleteProject(id)
        return;
      }
      FailedNotif('Error', 'Gagal Delete Data')
    } catch (error) {
      FailedNotif('Error', error)
    }
  }

  const submitData = async (e) => {
    const payload = new FormData();
    
    try {
      e.preventDefault();
      payload.append('title', formData.title);
      payload.append('description', formData.description);
      payload.append('techUsed', formData.techUsed);
      payload.append('githubLink', formData.githubLink);
      payload.append('userId',1);

      if (formData.image instanceof File) {
        payload.append('image', formData.image);
      }
      console.log(payload);

      if(isEditing){
        await updateProject(editingIndex, payload)
        SuccessNotif('Success', 'Berhasil Update data')
        return;
      }
      await createProject(payload)
      SuccessNotif('Success', 'Berhasil membuat data')
      return;
    } catch (error) {
      FailedNotif('Error', error)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Proyek</h2>

      {/* Form */}
      <form className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gambar Proyek
          </label>
          <div className="flex items-center space-x-4">
            {formData.image && (
              <img
                src={formData.image}
                alt="Project preview"
                className="w-20 h-20 object-cover rounded-lg border"
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
                id="projectImage"
              />
              <label
                htmlFor="projectImage"
                className="cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <FiUpload className="w-4 h-4" />
                <span>Upload Gambar</span>
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Judul Proyek
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Teknologi (pisahkan dengan koma)
            </label>
            <input
              type="text"
              value={formData.techUsed}
              onChange={(e) => setFormData(prev => ({ ...prev, techUsed: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="React, Node.js, MongoDB"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL Proyek
            </label>
            <input
              type="url"
              value={formData.projectUrl}
              onChange={(e) => setFormData(prev => ({ ...prev, projectUrl: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div> */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL GitHub
            </label>
            <input
              type="url"
              value={formData.githubLink}
              onChange={(e) => setFormData(prev => ({ ...prev, githubLink: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Deskripsi Proyek
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
            onClick={submitData}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <FiPlus className="w-4 h-4" />
            <span>{isEditing ? 'Update' : 'Tambah'} Proyek</span>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            {project?.image && (
              <img
                src={import.meta.env.VITE_API_IMG + project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-800">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(index, project)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FiEdit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(project.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-gray-700 mb-3 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-1 mb-3">
                {project.techUsed.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3 text-sm">
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    GitHub: <span className='text-blue-500'>{project.githubLink}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
import Select from "react-select";
import { useEffect } from 'react';
import { useState } from 'react';
import { FiPlus, FiEdit, FiTrash2, FiUpload } from 'react-icons/fi';
import { createProject, deleteProject, readProject, updateProject } from '../../services/projectService';
import { FailedNotif, SuccessNotif } from '../notification/Notification';
import { readSkill } from '../../services/skillService';

const ProjectsSection = () => {
  const [skill, setSkill] = useState([])
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techUsed: '',
    githubLink: '',
    image: ''
  });

  const [data, setData] = useState([])

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      techUsed: '',
      githubLink: '',
      image: ''
    });
    setIsEditing(false);
    setEditingIndex(null);
  };


  const options = skill.map((item) => ({
    value: item.id,
    label: item.name
  }));

  const handleEdit = (index, project) => {
    setFormData({
      ...project,
      techUsed: project.techUsed.map(item => item.id).join(', ')
    });
    setIsEditing(true);
    setEditingIndex(index);

  };

  const handleSelectChange = (selectedOptions) => {
    const values = selectedOptions ? selectedOptions.map(opt => opt.value).join(', ') : '';

    setFormData({
      ...formData,
      techUsed: values
    });
  };

  useEffect(() => {
    LoadDataProject()
  }, [])

  const LoadDataProject = async () => {
    try {
      const data = await readProject();
      const dataSkill = await readSkill();
      setData(data.data.data);
      setSkill(dataSkill.data.data);
    } catch (error) {
      FailedNotif('Error', error)
    }
  }

  const onDelete = async (id) => {
    try {
      if (id) {
        await deleteProject(id)
        SuccessNotif('Success', 'Berhasil menghapus data')
        await LoadDataProject();
        return;
      }
      FailedNotif('Error', 'Gagal Delete Data')
    } catch (error) {
      FailedNotif('Error', error)
    }
  }

  const submitData = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    const { name, size } = formData.image;

    try {
      payload.append('title', formData.title);
      payload.append('description', formData.description);
      payload.append('techUsed', formData.techUsed);
      payload.append('githubLink', formData.githubLink);
      payload.append('userId', 1);

      if (formData.image instanceof File) {
        const response = await fetch('http://localhost:4000/prepare-upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fileName: name,
            fileSize: size,
          })
        });
        const uploadData = await response.json()
        const signedUrl = uploadData.url
      
        payload.append('image', formData.image);
        const uploadResponse = await fetch(signedUrl, {
          method: "PUT",
          body: payload
        })
        
        const imageData = await uploadResponse.json()
        const imageUrl = imageData.url
        if(imageUrl){
          payload.append('image', imageUrl);
        }
        else{
          console.log("GAGAL BANG");
          
        }
      }

      if (isEditing) {
        await updateProject(editingIndex, payload)
        SuccessNotif('Success', 'Berhasil Update data')
        await LoadDataProject();
        resetForm();
        return;
      } else {
        if (!(formData.image instanceof File)) {
          FailedNotif('Error', 'Gambar wajib diunggah untuk proyek baru');
          return;
        }
        await createProject(payload);
        await LoadDataProject();
        SuccessNotif('Success', 'Berhasil membuat data');
        resetForm();
      }
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
                    setFormData(prev => ({
                      ...prev,
                      image: file,
                      preview: URL.createObjectURL(file)
                    }));
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

        <div className="grid grid-cols-1 gap-4 mb-4">
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
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-800">
              Teknologi
            </label>

            <Select
              isMulti
              options={options}
              className="text-sm"
              value={options.filter(opt =>
                formData.techUsed.includes(opt.value)
              )}
              onChange={handleSelectChange}
            />
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                src={project.image}
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
                    onClick={() => handleEdit(project.id, project)}
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
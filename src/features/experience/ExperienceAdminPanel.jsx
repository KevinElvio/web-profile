import { useEffect, useState } from 'react';
import { FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';
import { FailedNotif, SuccessNotif } from '../../shared/ui/Notification';
import { AddExperience, ReadExperience, UpdateExperience, DeleteExperience } from './api';

const initialExperience = {
  userId: 1,
  company: '',
  position: '',
  start_date: '',
  end_date: '',
  description: '',
  still_working: false,
  image: ''
};

const ExperienceSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(initialExperience);
  const [experiences, setExperiences] = useState([]);

  const loadExperiences = async () => {
    try {
      const response = await ReadExperience();
      setExperiences(response.data.data);
    } catch (error) {
      FailedNotif('Error', error);
    }
  };

  useEffect(() => {
    loadExperiences();
  }, []);

  const resetForm = () => {
    setFormData(initialExperience);
    setIsEditing(false);
    setEditingId(null);
  };

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleEdit = (experience) => {
    setFormData({ ...initialExperience, ...experience });
    setIsEditing(true);
    setEditingId(experience.id);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (isEditing) {
        await UpdateExperience(editingId, formData);
        SuccessNotif('Success', 'Berhasil Update Experience');
      } else {
        await AddExperience(formData);
        SuccessNotif('Success', 'Berhasil Tambah Experience');
      }
      await loadExperiences();
      resetForm();
    } catch (error) {
      FailedNotif('Error', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await DeleteExperience(id);
      SuccessNotif('Success', 'Berhasil Delete Experience');
      await loadExperiences();
    } catch (error) {
      FailedNotif('Error', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Pengalaman Kerja</h2>

      <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Perusahaan</label>
            <input type="text" value={formData.company} onChange={(event) => updateField('company', event.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Posisi</label>
            <input type="text" value={formData.position} onChange={(event) => updateField('position', event.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Mulai</label>
            <input type="date" value={formData.start_date} onChange={(event) => updateField('start_date', event.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Selesai</label>
            <input type="date" value={formData.end_date} onChange={(event) => updateField('end_date', event.target.value)} disabled={formData.still_working} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100" />
            <div className="flex items-center mt-2">
              <input type="checkbox" id="still_working" checked={formData.still_working} onChange={(event) => setFormData((current) => ({ ...current, still_working: event.target.checked, end_date: event.target.checked ? '' : current.end_date }))} className="mr-2" />
              <label htmlFor="still_working" className="text-sm text-gray-700">Masih bekerja di sini</label>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi Pekerjaan</label>
          <textarea value={formData.description} onChange={(event) => updateField('description', event.target.value)} rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
        </div>

        <div className="flex space-x-3">
          <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <FiPlus className="w-4 h-4" />
            <span>{isEditing ? 'Update' : 'Tambah'} Pengalaman</span>
          </button>
          {isEditing && <button type="button" onClick={resetForm} className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors">Batal</button>}
        </div>
      </form>

      <div className="space-y-4">
        {experiences.map((experience) => (
          <div key={experience.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{experience.position}</h3>
                <p className="text-gray-600">{experience.company}</p>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(experience)} className="text-blue-600 hover:text-blue-800"><FiEdit className="w-5 h-5" /></button>
                <button onClick={() => handleDelete(experience.id)} className="text-red-600 hover:text-red-800"><FiTrash2 className="w-5 h-5" /></button>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-2">{experience.start_date} - {experience.still_working ? 'Sekarang' : experience.end_date}</p>
            <p className="text-gray-700">{experience.description_job}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;

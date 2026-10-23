
import { useState } from 'react';
import { FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';
import { createSkill, deleteSkill, readSkill, updateSkill } from './api';
import { FailedNotif, SuccessNotif } from '../../shared/ui/Notification';
import { useEffect } from 'react';

const SkillsSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    link_image: '',
  });
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loadingData, setLoadingData] = useState(false)
  const LIMIT = 10

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
    setIsSubmitting(true);
    try {
      if (isEditing) {
        await updateSkill(editingIndex, formData);
        SuccessNotif('Success','Berhasil update data' );
      } else {
        await createSkill(formData);
        SuccessNotif('Success','Berhasil membuat data' );
      }
      await loadDataSkill(page);
      resetForm();
    } catch (error) {
      FailedNotif('Error', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (index, skill) => {
    setFormData(skill);
    setIsEditing(true);
    setEditingIndex(index);
  };

  useEffect(() => {
    loadDataSkill(page)
  }, [page])

  const loadDataSkill = async (p = page) => {
    setLoadingData(true)
    try {
      const res = await readSkill({ page: p, limit: LIMIT });
      if (res.status === 404) {
        setData([]);
        setTotalPages(1);
      } else {
        setData(res.data.data);
        if (res.data.meta) setTotalPages(res.data.meta.totalPages);
      }
    } catch (error) {
      if (error?.response?.status === 404) {
        setData([]);
        setTotalPages(1);
      } else {
        FailedNotif('Error', error)
      }
    } finally {
      setLoadingData(false)
    }
  }


  const onDelete = async (editingIndex) => {
    try {
      await deleteSkill(editingIndex);
      SuccessNotif('Success','Berhasil menghapus data' );
      loadDataSkill(page)
    } catch (error) {
      FailedNotif('Error', error)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Skills</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Skill Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nama Skill
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Contoh: React.js"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Link Skill
            </label>
            <input
              type="url"
              value={formData.link_image}
              onChange={(e) => setFormData(prev => ({ ...prev, link_image: e.target.value }))}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Contoh: https://react.js"
              required
            />
          </div>
        </div>

        <div className="flex space-x-3 mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 disabled:opacity-50"
          >
            <FiPlus className="w-4 h-4" />
            <span>{isSubmitting ? 'Menyimpan...' : (isEditing ? 'Update' : 'Tambah') + ' Skill'}</span>
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
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">{skill.name}</h4>
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

      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page <= 1 || loadingData}
          className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 dark:text-gray-300 disabled:opacity-50 dark:bg-gray-700 dark:text-gray-200"
        >
          Prev
        </button>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          Halaman {page} dari {totalPages}
        </span>
        <button
          type="button"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page >= totalPages || loadingData}
          className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 dark:text-gray-300 disabled:opacity-50 dark:bg-gray-700 dark:text-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SkillsSection;
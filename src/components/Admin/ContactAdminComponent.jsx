import { FiSave } from 'react-icons/fi';
import { useEffect } from 'react';
import { useState } from 'react';
import { ReadContact, UpdateContact } from '../../services/contactSevice';
import { ReadUser } from '../../services/userService';
import { FailedNotif, SuccessNotif } from '../notification/Notification';


const ContactSection = ({ onChange }) => {
  const [data, setData] = useState({
    email: '',
    number: '',
    github: '',
    linkedin: '',
    instagram: '',
    cv: '',
  })

  const fields = [
    { key: 'email', label: 'Email', type: 'email' },
    { key: 'number', label: 'Telepon', type: 'tel' },
    { key: 'instagram', label: 'Instagram', type: 'url' },
    { key: 'linkedin', label: 'LinkedIn', type: 'url' },
    { key: 'github', label: 'GitHub', type: 'url' }
  ];


  useEffect(() => {
    loadContact();
  }, [])

  const loadContact = async () => {
    try {
      const data = await ReadContact();
      const userEmail = await ReadUser();
      setData({ ...data.data.data[0], email: userEmail.data.data.email });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  const saveData = async () => {


    try {
      const payload = {
      email: data.email,
      number: data.number,
      instagram: data.instagram,
      linkedin: data.linkedin,
      github: data.github
    };
      await UpdateContact(1, payload)
      SuccessNotif('Success', 'Berhasil Update Contact');
      loadContact();
    } catch (error) {
      FailedNotif('Error', 'Gagal Update Contact')
      console.log(error);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              value={data[field.key] || ''}
              onChange={(e) => onChange(setData, field.key, e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={`Masukkan ${field.label.toLowerCase()}`}
            />
          </div>
        ))}
        <div className='flex justify-end'>
          <button
            onClick={saveData}
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

export default ContactSection;
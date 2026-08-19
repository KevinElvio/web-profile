import { useEffect, useState } from 'react';
import { FiSave } from 'react-icons/fi';
import { ReadContact, UpdateContact } from './api';
import { ReadUser } from '../profile/api';
import { FailedNotif, SuccessNotif } from '../../shared/ui/Notification';

const fields = [
  { key: 'email', label: 'Email', type: 'email' },
  { key: 'number', label: 'Telepon', type: 'tel' },
  { key: 'instagram', label: 'Instagram', type: 'url' },
  { key: 'linkedin', label: 'LinkedIn', type: 'url' },
  { key: 'github', label: 'GitHub', type: 'url' }
];

const ContactSection = () => {
  const [contact, setContact] = useState({
    email: '',
    number: '',
    github: '',
    linkedin: '',
    instagram: ''
  });

  const loadContact = async () => {
    try {
      const [contactResponse, userResponse] = await Promise.all([ReadContact(), ReadUser()]);
      const savedContact = contactResponse.data.data[0] ?? {};
      setContact({ ...savedContact, email: userResponse.data.data.email });
    } catch (error) {
      FailedNotif('Error', error);
    }
  };

  useEffect(() => {
    loadContact();
  }, []);

  const updateField = (field, value) => {
    setContact((current) => ({ ...current, [field]: value }));
  };

  const saveContact = async () => {
    try {
      const { id, email, number, instagram, linkedin, github } = contact;
      await UpdateContact(id || 1, { email, number, instagram, linkedin, github });
      SuccessNotif('Success', 'Berhasil Update Contact');
      await loadContact();
    } catch (error) {
      FailedNotif('Error', 'Gagal Update Contact');
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
            <input type={field.type} value={contact[field.key] || ''} onChange={(event) => updateField(field.key, event.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder={`Masukkan ${field.label.toLowerCase()}`} />
          </div>
        ))}
        <div className='flex justify-end'>
          <button onClick={saveContact} className="mt-6 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50">
            <FiSave className="w-5 h-5" />
            <span>Simpan</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

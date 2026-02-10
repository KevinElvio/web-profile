// ContactSection.jsx
import { number } from 'prop-types';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ContactSection = ({onChange }) => {
  const [data, setData] = useState({
    number: '',
    github: '',
    linkedin: '',
    instagram: '',
    cv: '',
  })

  const fields = [
    { key: 'email', label: 'Email', type: 'email' },
    { key: 'phone', label: 'Telepon', type: 'tel' },
    { key: 'address', label: 'Alamat', type: 'text' },
    { key: 'linkedin', label: 'LinkedIn', type: 'url' },
    { key: 'github', label: 'GitHub', type: 'url' }
  ];


  useEffect(()=> {
    
  }, [])

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
              onChange={(e) => onChange('contact', field.key, e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={`Masukkan ${field.label.toLowerCase()}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
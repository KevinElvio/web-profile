
import { useState } from 'react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <span className="text-xl font-bold text-orange-600">Kevin Elvio</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-orange-600">Beranda</a>
          <a href="#" className="text-gray-600 hover:text-orange-600">Tentang Saya</a>
          <a href="#" className="text-gray-600 hover:text-orange-600">Portfolio</a>
          <a href="#" className="text-gray-600 hover:text-orange-600">Skill</a>
          <a href="#" className="text-gray-600 hover:text-orange-600">Pengalaman</a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#" className="block px-4 py-2 text-gray-600 hover:text-orange-600">Beranda</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:text-orange-600">Tentang Saya</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:text-orange-600">Portfolio</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:text-orange-600">Skill</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:text-orange-600">Pengalaman</a>
        </div>
      )}
    </nav>
  );
}

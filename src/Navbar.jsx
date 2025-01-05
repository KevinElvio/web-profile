
import { useState } from 'react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">

        <div className="text-2xl font-bold text-orange-600">Kevin Elvio</div>

        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-orange-600">Beranda</a>
          <a href="#about" className="text-gray-700 hover:text-orange-600">Tentang Saya</a>
          <a href="#portfolio" className="text-gray-700 hover:text-orange-600">Portfolio</a>
          <a href="#skills" className="text-gray-700 hover:text-orange-600">Skill</a>
          <a href="#experience" className="text-gray-700 hover:text-orange-600">Pengalaman</a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
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

      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <a href="#home" className="block px-4 py-2 text-gray-700 hover:text-orange-600">Beranda</a>
          <a href="#about" className="block px-4 py-2 text-gray-700 hover:text-orange-600">Tentang Saya</a>
          <a href="#portfolio" className="block px-4 py-2 text-gray-700 hover:text-orange-600">Portfolio</a>
          <a href="#skills" className="block px-4 py-2 text-gray-700 hover:text-orange-600">Skill</a>
          <a href="#experience" className="block px-4 py-2 text-gray-700 hover:text-orange-600">Pengalaman</a>
        </nav>
      )}
    </header>
  );
}

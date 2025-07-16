const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="p-4 text-center font-bold text-xl border-b border-gray-800">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
          Dashboard
        </a>
        <a href="/projects" className="block py-2 px-4 rounded hover:bg-gray-700">
          Projects
        </a>
        <a href="/messages" className="block py-2 px-4 rounded hover:bg-gray-700">
          Skill
        </a>
        <a href="/settings" className="block py-2 px-4 rounded hover:bg-gray-700">
          Experience
        </a>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <button className="w-full bg-red-600 py-2 px-4 rounded hover:bg-red-700">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

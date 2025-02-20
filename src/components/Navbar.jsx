import { Link } from "react-router-dom";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <nav className="bg-teal-700 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="p-3 bg-teal-800 rounded hover:bg-teal-950 transition-colors text-2xl"
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
        <span className="text-2xl font-bold">ByeGluten!</span>
      </div>

      {/*Barra de búsqueda y enlaces */}
      <div className="flex items-center gap-6">
        <input
          type="text"
          placeholder="Buscar..."
          className="p-2 rounded bg-teal-800 text-white placeholder-gray-300 focus:outline-none focus:bg-teal-950 ml-auto"
        />

        <div className="flex gap-4">
          <Link
            to="/"
            className="px-4 py-2 bg-teal-800 rounded hover:bg-teal-950 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 bg-teal-800 rounded hover:bg-teal-950 transition-colors"
          >
            About
          </Link>
          <Link
            to="/suggestions"
            className="px-4 py-2 bg-teal-800 rounded hover:bg-teal-950 transition-colors"
          >
            Sugerencias
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

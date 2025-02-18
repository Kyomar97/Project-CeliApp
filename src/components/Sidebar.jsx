import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Add PropTypes for type checking

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  if (!isSidebarOpen) return null;

  return (
    <>
      {/* Sidebar */}
      <aside className="bg-lime-300 text-white w-64 p-4 fixed h-[calc(100vh-8rem)] mt-20 mb-20 left-0 z-50 overflow-y-auto transition-transform duration-300 ease-in-out">
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-2 right-4 text-lg font-semibold text-lime-500 hover:text-lime-800 transition-colors"
          aria-label="Close sidebar"
        >
          X
        </button>

        {/* Sidebar navigation */}
        <nav>
          <ul className="space-y-3 mt-8">
            <li className="border-b border-lime-500 pb-3">
              <Link
                to="/"
                onClick={() => setSidebarOpen(false)}
                className="block py-3 text-lg font-semibold hover:bg-lime-400 hover:text-white rounded-md px-3 transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="border-b border-lime-500 pb-3">
              <Link
                to="/about"
                onClick={() => setSidebarOpen(false)}
                className="block py-3 text-lg font-semibold hover:bg-lime-400 hover:text-white rounded-md px-3 transition-colors"
              >
                About
              </Link>
            </li>
            <li className="border-b border-lime-500 pb-3">
              <Link
                to="/suggestions"
                onClick={() => setSidebarOpen(false)}
                className="block py-3 text-lg font-semibold hover:bg-lime-400 hover:text-white rounded-md px-3 transition-colors"
              >
                Sugerencias
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

// Add PropTypes for type checking
Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default Sidebar;

import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Add PropTypes for type checking

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  if (!isSidebarOpen) return null;

  return (
    <>
      {/* Sidebar */}
      <aside className="bg-teal-500 text-white w-64 p-4 fixed h-[calc(100vh-8rem)] mt-20 mb-20 left-0 z-50 overflow-y-auto transition-transform duration-300 ease-in-out">
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-2 right-4 text-lg font-semibold text-teal-900 hover:text-teal-700 transition-colors"
          aria-label="Close sidebar"
        >
          X
        </button>

        {/* Sidebar navigation */}
        <nav>
          <ul className="space-y-3 mt-8">
            <li className="border-b border-teal-900 pb-3">
              <Link
                to="/"
                onClick={() => setSidebarOpen(false)}
                className="block py-3 text-lg font-bold hover:bg-teal-700 hover:text-teal-100 rounded-md px-3 transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="border-b border-teal-800 pb-3">
              <Link
                to="/about"
                onClick={() => setSidebarOpen(false)}
                className="block py-3 text-lg font-bold hover:bg-teal-700 hover:text-teal-100 rounded-md px-3 transition-colors"
              >
                About
              </Link>
            </li>
            <li className="border-b border-teal-800 pb-3">
              <Link
                to="/suggestions"
                onClick={() => setSidebarOpen(false)}
                className="block py-3 text-lg font-bold hover:bg-teal-700 hover:text-teal-100 rounded-md px-3 transition-colors"
              >
                Suggestions
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

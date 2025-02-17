import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-200 h-screen p-4 shadow-lg">
      <ul className="space-y-4">
        <li>
          <Link
            to="/"
            className="block bg-white p-4 rounded-lg shadow-md hover:bg-gray-300 text-gray-800 text-center"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="block bg-white p-4 rounded-lg shadow-md hover:bg-gray-300 text-gray-800 text-center"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/create"
            className="block bg-white p-4 rounded-lg shadow-md hover:bg-gray-300 text-gray-800 text-center"
          >
            Add Recipe
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

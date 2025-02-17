import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Imagen-logo-recipe-book.jpg";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="App Logo" className="h-10 w-10 mr-2" />
        <span className="text-xl font-bold">Gourmet Lab</span>
      </Link>
    </nav>
  );
};

export default Navbar;

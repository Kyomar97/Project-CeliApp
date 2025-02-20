// Homepage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">Bienvenido a la Homepage</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div
          className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow text-center"
          onClick={() => handleCardClick("/productos")}
        >
          <h2 className="text-2xl font-semibold">Productos</h2>
        </div>
        <div
          className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow text-center"
          onClick={() => handleCardClick("/restaurantes")}
        >
          <h2 className="text-2xl font-semibold">Restaurantes</h2>
        </div>
        <div
          className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow text-center"
          onClick={() => handleCardClick("/consejos")}
        >
          <h2 className="text-2xl font-semibold">Consejos</h2>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

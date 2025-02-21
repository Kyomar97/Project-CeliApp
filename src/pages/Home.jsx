import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  // URLs de imágenes de fondo para cada columna
  const backgroundImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtw9qn1CnCFFTOuinT8sDDbAzx3c9R_viM8g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZRHs8TlUmLNHIyNXJyoul7cDFNsH5sQBEQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfytJZfAtHU2SGWvulxx_51OJjecsWqOJPtg&s",
  ];

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen "
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZvbmRvfGVufDB8fDB8fHww)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl text-white font-bold mb-4 mt-8">
        Bienvenido/a a ByeGluten!
      </h1>
      <p className="text-lg text-gray-700 font-bold mb-8 text-center">
        "Porque comer bien es un derecho, no un reto.😊"
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {["Productos", "Restaurantes", "Consejos"].map((title, index) => (
          <div
            key={index}
            className="relative rounded-lg cursor-pointer overflow-hidden group"
            onClick={() => handleCardClick(`/${title.toLowerCase()}`)}
            style={{ minHeight: "300px" }} // Altura mínima aumentada
          >
            {/* Imagen de fondo */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${backgroundImages[index]})` }}
            ></div>
            {/* Overlay para oscurecer la imagen al hacer hover */}
            <div className="absolute inset-0 bg-opacity-60 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
            {/* Contenido de la columna */}
            <div className="relative flex items-center justify-center h-full p-6">
              <h2 className="text-2xl font-semibold text-white text-center">
                {title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;

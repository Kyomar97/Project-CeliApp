import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  // URLs de imágenes de fondo para cada columna
  const backgroundImages = [
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfytJZfAtHU2SGWvulxx_51OJjecsWqOJPtg&s",
  ];

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZvbmRvfGVufDB8fDB8fHww)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl font-bold mb-4 mt-12">
        Bienvenido/a a ByeGluten!
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        "La mejor manera de predecir el futuro es crearlo."
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
            <div className="absolute inset-0 bg-opacity-5 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
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

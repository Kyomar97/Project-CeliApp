// RestaurantPage.jsx
import React, { useEffect, useState } from "react";
import { getFood } from "../api/Index";

const RestaurantPage = () => {
  const [food, setFood] = useState([]);
  const [expandedId, setExpandedId] = useState(null); // Estado para controlar qué elemento está expandido

  useEffect(() => {
    getFood()
      .then((data) => {
        if (data && data) {
          setFood(data); // Asegúrate de que data.food_locations sea el array correcto
        } else {
          console.error(
            "La respuesta del servidor no tiene la estructura esperada:",
            data
          );
        }
      })
      .catch((error) => {
        console.error("Error al obtener los restaurantes:", error);
      });
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id); // Alternar entre expandir y colapsar
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Restaurantes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {food.map((currentFood) => (
          <div
            key={currentFood.id}
            className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => toggleExpand(currentFood.id)} // Alternar la descripción al hacer clic
          >
            <h3 className="text-xl font-semibold">{currentFood.name}</h3>
            <p className="text-gray-600">{currentFood.location}</p>
            {expandedId === currentFood.id && ( // Mostrar la descripción si está expandido
              <p className="text-gray-600 mt-2">{currentFood.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;

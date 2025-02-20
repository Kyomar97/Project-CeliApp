import React, { useEffect, useState } from "react";
import { deleteFood, getFood } from "../api/Index";
import UpdateForm from "../components/UpdateForm";

const RestaurantPage = () => {
  const [food, setFood] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [editingId, setEditingId] = useState(null); // ✅ Estado para mostrar el formulario de edición

  const setInitialFood = () => {
    getFood()
      .then((data) => {
        if (data) {
          setFood(data);
        } else {
          console.error(
            "La respuesta del servidor no tiene la estructura esperada:",
            data
          );
        }
      })
      .catch((error) =>
        console.error("Error al obtener los restaurantes:", error)
      );
  };

  useEffect(() => {
    setInitialFood();
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const buttonDelete = (current) => {
    deleteFood(current)
      .then(() => {
        console.log("Restaurante eliminado");
        setInitialFood();
      })
      .catch((error) => console.error("No se eliminó", error));
  };

  const startEditing = (id) => {
    setEditingId(id); // ✅ Mostrar el formulario de edición
  };

  const closeForm = () => {
    setEditingId(null); // ✅ Cerrar el formulario de edición
    setInitialFood(); // ✅ Actualizar la lista de restaurantes después de editar
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Restaurantes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {food.map((currentFood) => (
          <div
            key={currentFood.id}
            className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => toggleExpand(currentFood.id)}
          >
            <h3 className="text-xl font-semibold">{currentFood.name}</h3>
            <p className="text-gray-600">{currentFood.location}</p>

            {expandedId === currentFood.id && (
              <div>
                <p className="text-gray-600 mt-2">{currentFood.description}</p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    buttonDelete(currentFood.id);
                  }}
                  className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    startEditing(currentFood.id);
                  }}
                  className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition ml-2"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {editingId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <UpdateForm idUpdate={editingId} onClose={closeForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantPage;

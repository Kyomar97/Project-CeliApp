import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, updateFood } from "../api/Index";
import { useNavigate } from "react-router-dom";

const UpdateForm = ({ idUpdate, onClose }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("restaurant");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [whereToBuy, setWhereToBuy] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const setInitialFood = () => {
    if (!idUpdate) return; // Evitar llamadas innecesarias si el id no es válido

    axios
      .get(`${API_URL}/food_locations/${idUpdate}`)
      .then((resp) => {
        const oneFood = resp.data;
        setName(oneFood.name);
        setType(oneFood.type);
        setLocation(oneFood.location);
        setDescription(oneFood.description);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  };

  useEffect(() => {
    setInitialFood();
  }, [idUpdate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedItem = { name, type, location, description };

    updateFood(idUpdate, updatedItem)
      .then(() => {
        console.log("Restaurante actualizado con éxito");
        onClose(); // ✅ Oculta el formulario después de enviar
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-2">Editar Restaurante</h1>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tipo:
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          >
            <option value="restaurant">Restaurante</option>
            <option value="product">Producto</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ciudad:
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {type === "restaurant" && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Dirección:
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
        )}

        {type === "product" && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ¿Dónde conseguirlo?
            </label>
            <input
              type="text"
              value={whereToBuy}
              onChange={(e) => setWhereToBuy(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Descripción:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            rows="4"
            required
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;

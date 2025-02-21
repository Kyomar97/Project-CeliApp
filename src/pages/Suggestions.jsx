import React, { useState } from "react";
import axios from "axios";
import { API_URL, createFood } from "../api/Index";
import { Navigate, useNavigate } from "react-router-dom";

const Suggestions = ({ onAdd }) => {
  // Estados para manejar los campos del formulario
  const [name, setName] = useState("");
  const [type, setType] = useState("restaurant"); // 'restaurant' o 'product'
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [whereToBuy, setWhereToBuy] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      name,
      type,
      location,
      description,
    };
    createFood(newItem)
      .then((response) => {
        console.log("Personaje agregado:", response);
        navigate("/restaurantes");
      })
      .catch((err) => {
        setError(err.message);
        setSubmitted(false);
      });
  };

  /* const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear el objeto con los datos del formulario
    const newItem = {
      name,
      type,
      location,
      address,
      whereToBuy,
      description,
    };

    try {
      
      const response = await axios.post(`${API_URL}/items`, newItem, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Llamar a la función onAdd para actualizar la lista en la página Home
      onAdd(response.data);

      // Limpiar el formulario y mostrar mensaje de éxito
      setName("");
      setType("restaurant");
      setLocation("");
      setAddress("");
      setWhereToBuy("");
      setDescription("");
      setSubmitted(true);
      setError(null);
    } catch (err) {
      setError(err.message);
      setSubmitted(false);
    }
  }; */

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Suggestions</h1>
      <p>
        Aquí puedes dejar tus sugerencias de restaurantes o productos sin
        gluten.
      </p>

      {submitted ? (
        <p className="mt-4 text-green-600">¡Gracias por tu recomendación!</p>
      ) : (
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

          {/* Campo de Ciudad */}
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

          {/* Campo de Dirección (solo visible para restaurantes) */}
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
                required={type === "restaurant"}
              />
            </div>
          )}

          {/* Campo de Dónde conseguirlo (solo visible para productos) */}
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
                placeholder="Ej: Supermercado XYZ, Tienda Online ABC"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Recomendación:
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default Suggestions;

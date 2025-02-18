import React, { useState } from "react";

const Suggestions = () => {
  // Estados para manejar los campos del formulario
  const [name, setName] = useState("");
  const [type, setType] = useState("restaurant"); // 'restaurant' o 'product'
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [whereToBuy, setWhereToBuy] = useState(""); // Nuevo campo: Dónde conseguirlo
  const [recommendation, setRecommendation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar los datos a una API o manejarlos localmente
    console.log({ name, type, city, address, whereToBuy, recommendation });
    setSubmitted(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Sugerencias</h1>
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
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
              value={recommendation}
              onChange={(e) => setRecommendation(e.target.value)}
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

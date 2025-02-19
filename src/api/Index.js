import axios from "axios"; //RECUERDA IMPORTAR SIEMPRE LO QUE NECESITES USAR

const API_URL = "http://localhost:5005";

// READ (.GET) (Permite mostrar la información almacenada en el servidor)
export const getItems = async () => {
  try {
    const response = await API_URL.get("/items");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
};

// CREATE (.POST) (Añadir un elemento al servidor)
export const createItem = async (item) => {
  try {
    const response = await API_URL.post("/items", item);
    return response.data;
  } catch (error) {
    console.error("Error al crear el elemento:", error);
    throw error;
  }
};

// UPDATE (.PUT) (Permite modificar un elemento ya existente en el servidor)
export const updateItem = async (id, updatedItem) => {
  try {
    const response = await API_URL.put(`/items/${id}`, updatedItem);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el elemento:", error);
    throw error;
  }
};

// DELETE (.DELETE) (Permite eliminar cualquier elemento del servidor)
export const deleteItem = async (id) => {
  try {
    const response = await API_URL.delete(`/items/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el elemento:", error);
    throw error;
  }
};

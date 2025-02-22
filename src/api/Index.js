import axios from "axios"; //RECUERDA IMPORTAR SIEMPRE LO QUE NECESITES USAR

export const API_URL = `${import.meta.env.VITE_API_URL}`;

// READ (.GET) (Permite mostrar la información almacenada en el servidor)
export const getFood = async () => {
  try {
    const response = await axios.get(`${API_URL}/food_locations`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
};
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
};
export const getGeneralTips = async () => {
  try {
    const response = await axios.get(`${API_URL}/general_tips`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
};

// CREATE (.POST) (Añadir un elemento al servidor)
export const createFood = async (food) => {
  try {
    const response = await axios.post(`${API_URL}/food_locations`, food);
    return response.data;
  } catch (error) {
    console.error("Error al crear el elemento:", error);
    throw error;
  }
};
export const createProducts = async (products) => {
  try {
    const response = await axios.post("/products", products);
    return response.data;
  } catch (error) {
    console.error("Error al crear el elemento:", error);
    throw error;
  }
};
export const createGeneralTips = async (tips) => {
  try {
    const response = await axios.post("/general_tips", tips);
    return response.data;
  } catch (error) {
    console.error("Error al crear el elemento:", error);
    throw error;
  }
};

// UPDATE (.PUT) (Permite modificar un elemento ya existente en el servidor)
export const updateFood = async (id, updatedFood) => {
  try {
    const response = await axios.put(
      `${API_URL}/food_locations/${id}`,
      updatedFood
    );
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el elemento:", error);
    throw error;
  }
};
export const updateProducts = async (id, updateProducts) => {
  try {
    const response = await axios.put(`/updateProducts/${id}`, updateProducts);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el elemento:", error);
    throw error;
  }
};
export const updateGeneralTips = async (id, updateGeneralTips) => {
  try {
    const response = await axios.put(`/general_tips/${id}`, updateGeneralTips);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el elemento:", error);
    throw error;
  }
};

// DELETE (.DELETE) (Permite eliminar cualquier elemento del servidor)
export const deleteFood = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/food_locations/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el elemento:", error);
    throw error;
  }
};
export const deleteProducts = async (id) => {
  try {
    const response = await axios.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el elemento:", error);
    throw error;
  }
};
export const deleteGeneralTips = async (id) => {
  try {
    const response = await axios.delete(`/general_tips/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el elemento:", error);
    throw error;
  }
};

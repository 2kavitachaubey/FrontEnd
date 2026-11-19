import axios from "axios";

// One axios instance so the base URL lives in a single place
const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
});

export const getAllProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

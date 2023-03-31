import process from "process";
import axios from "axios";

const Api = axios.create({
  baseURL: "http://192.168.0.108:5000/api/v1",
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: { id: 3, name: "Evangelista", email: "teste@gmail.com" },
    };
  },
  singin: async (email: string, password: string) => {
    return {
      user: { id: 3, name: "Evangelista", email: "teste@gmail.com" },
      token: "123123123123",
    };
  },
  signout: async () => {
    return { status: true };
  },
  getProductCategories: async () => {
    const response = await Api.get("/get-product-categories");
    return response.data;
  },
  getListProducts: async () => {
    const response = await Api.get("/get-products");
    return response.data;
  },
  getProductInfo: async (product: string) => {
    const response = await Api.get(`/get-products/${product}`);
    return response.data;
  },
  getKeywords: async () => {
    const response = await Api.get("/get-keywords");
    return response.data;
  },
  getProductsByKeyword: async (keyword: string) => {
    const response = await Api.get(`/get-products-by-keyword/${keyword}`);
    return response.data;
  },
});

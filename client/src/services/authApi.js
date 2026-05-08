import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const signupApi = (userData) => {
  return API.post("/auth/register", userData);
};

export const loginApi = (userData) => {
  return API.post("/auth/login", userData);
};

export default API;
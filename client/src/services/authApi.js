import axios from "axios";

const AUTH_URL = "http://localhost:5000/auth";

export const signupApi = (userData) => {
  return axios.post(`${AUTH_URL}/register`, userData);
};

export const loginApi = (userData) => {
  return axios.post(`${AUTH_URL}/login`, userData);
};
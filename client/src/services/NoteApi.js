import axios from "axios";

const API_URL = "http://localhost:5000/notes";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getNotes = () => {
  return axios.get(API_URL, getAuthHeader());
};

export const createNote = (note) => {
  return axios.post(API_URL, note, getAuthHeader());
};

export const updateNoteApi = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data, getAuthHeader());
};

export const deleteNoteApi = (id) => {
  return axios.delete(`${API_URL}/${id}`, getAuthHeader());
};
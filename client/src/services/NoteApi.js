import axios from "axios";

const API_URL = "http://localhost:5000/notes";

export const getNotes = () => {
  return axios.get(API_URL);
};

export const createNote = (note) => {
  return axios.post(API_URL, note);
};

export const updateNoteApi = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};

export const deleteNoteApi = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
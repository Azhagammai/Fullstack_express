import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const getAllUsers = async () => {
  const res = await axios.get(`${BASE_URL}/users`);
  return res.data;
};

export const createUser = async (userData) => {
  const res = await axios.post(`${BASE_URL}/users`, userData);
  return res.data;
};

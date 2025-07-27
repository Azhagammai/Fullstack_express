// Example: src/services/userService.js
import axios from 'axios';

export const registerUser = async (userData) => {
  const response = await axios.post('http://localhost:5000/api/users/register', userData);
  return response.data;
};
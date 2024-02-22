// api.js

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // Assuming your backend server is running locally
  timeout: 5000, // Timeout set to 5 seconds
});

const api = {
  signUp: async (username, email, password) => {
    console.log('comes here...');
    try {
      const response = await axiosInstance.post("/api/auth/signup", { username, email, password });
      console.log('response::', response);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  login: async (username, password) => {
    try {
      const response = await axiosInstance.post("/login", { username, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add more API calls as needed...
};

export default api;

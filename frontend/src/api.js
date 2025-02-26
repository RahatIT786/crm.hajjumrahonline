import axios from "axios";
// Get CSRF cookie first

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Use Laravel backend URL
  withCredentials: true, // If needed for authentication
});


export default api;

import axios from "axios";


//console.log(import.meta.env.VITE_BASE_URL);
export const API = axios.create({
  baseURL:  import.meta.env.VITE_BASE_URL || "http://localhost:3000/api",
 
});
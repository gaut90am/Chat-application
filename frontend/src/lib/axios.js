import axios from "axios";

const BASE_URL = "https://chat-application-mtpc.onrender.com";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
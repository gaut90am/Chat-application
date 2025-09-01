import axios from "axios";

const BASE_URL = "https://chat-application-mtpc.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
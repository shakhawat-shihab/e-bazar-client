import axios from "axios";
// import { useSelector } from "react-redux";
// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_BACKEND,
// });

const axiosInstanceToken = axios.create({
  //   baseURL: import.meta.env.VITE_BACKEND,
  baseURL: "http://localhost:8000/api",
});

axiosInstanceToken.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { axiosInstanceToken };

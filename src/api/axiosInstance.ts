import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.log("Erro na resposta da API:", error?.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;

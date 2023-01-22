import axios from 'axios';
import Cookies from 'universal-cookie';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_KEY });

axiosInstance.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response && error.response.data)
);

export default axiosInstance;

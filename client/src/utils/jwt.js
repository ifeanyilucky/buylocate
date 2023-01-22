import jwtDecode from 'jwt-decode';
import axiosInstance from './axios';

let decoded;
const isValidToken = (token) => {
  if (!token) {
    return false;
  }

  decoded = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  return decoded.exp > currentTime;
};
const setSession = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.clear();
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession, decoded };

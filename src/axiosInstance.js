import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
});

axiosInstance.interceptors.response.use(
  (response) => {
    response.id = 'emrah';
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      console.log('redirect to login');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

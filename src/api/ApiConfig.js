import axios from 'axios';

// Create an instance of axios
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token in every request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('id_token');
    console.log(token);
    //console.log(localStorage.getItem('token'));
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
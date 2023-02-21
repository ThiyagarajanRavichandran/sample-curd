import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3004/'//process.env.REACT_APP_REST_API_URL,
});

/**
 * @description Used to Handle Request interceptor for API calls
 * @return {Promise}-Return a Promise function
 * */
instance.interceptors.request.use(
    async (config) => {
      return config;
    },
    (error) => {
      Promise.reject(error);
    },
  );
  
  /**
   * @description Used to Handle Response interceptor for API calls
   * @return {Promise}-Return a Promise function
   * */
  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    async (error) => {
      return Promise.reject(error);
    },
  );
  export default instance;
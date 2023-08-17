import axios from 'axios';

const service = axios.create({
  baseURL: 'https://hoca-ai-be-app-tnm6sqb3za-uc.a.run.app/v1',
  headers: {
    'Content-type': 'application/json'
  }
});

service.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = 'bearer ' + JSON.parse(localStorage.getItem('accessToken') || '').token;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default service;

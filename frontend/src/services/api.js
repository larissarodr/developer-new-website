import axios from 'axios';

const api = axios.create({
  baseURL: 'http://developer.inf.br/appTest'
});

export default api;
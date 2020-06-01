import axios from 'axios';

const api = axios.create({
  baseURL: 'http://developer.inf.br/api'
});

export default api;
import axios from 'axios';

const api = axios.create({
  baseURL:'http://<IP na REDE>:3333'
});

export default api;
import axios from 'axios';
import BASE_URI from '../constants';

const api = axios.create({
  baseURL: BASE_URI,
});

export const post = async (uri, options = {}) => {
  const { body = {} } = options;
  const response = await api.post(uri, body);
  return response;
};

export const get = async (uri) => {
  const response = await api.get(uri);
  return response;
};

export default api;

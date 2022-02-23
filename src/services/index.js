import { post } from '../api';
import BASE_URI from '../constants';

export const loginService = async (credentials) => {
  const response = await post(`${BASE_URI}v1/users/login`, { credentials });
  return response.data;
};

export const registerService = async (credentials) => {
  const response = await post(`${BASE_URI}v1/users/login`, { credentials });
  return response.data;
};

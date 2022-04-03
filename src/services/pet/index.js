import BASE_URI from '../../constants';
import { post, get } from '../../api';

export const createDogService = async (credentials) => {
  const response = await post(`${BASE_URI}v1/dogs`, { body: credentials });
  return response.data;
};

export const allDogService = async () => {
  const response = await get(`${BASE_URI}v1/dogs`);
  return response.data;
};

export const myDogService = async (userId) => {
  const response = await get(`${BASE_URI}v1/users/${userId}/dogs`);
  return response.data;
};

import BASE_URI from '../../constants';
import { post, get, put } from '../../api';

export const createDogService = async (credentials, userId) => {
  const response = await post(`${BASE_URI}/v1/users/${userId}/dogs`, { body: credentials });
  return response.data;
};

export const allDogService = async () => {
  const response = await get(`${BASE_URI}/v1/dogs`);
  return response.data;
};

export const myDogService = async (userId) => {
  const response = await get(`${BASE_URI}/v1/users/${userId}/dogs`);
  return response.data;
};

export const getDogBreedsService = async () => {
  const response = await get(`${BASE_URI}/v1/breeds`);
  return response.data;
};

export const getSelectedPetService = async (credentials) => {
  const { userId, petId } = credentials;
  const response = await get(`${BASE_URI}/v1/users/${userId}/dogs/${petId}`);
  return response.data;
};

export const updatePetService = async (credentials, userId) => {
  const { dog: { id } } = credentials;
  const response = await put(`${BASE_URI}/v1/users/${userId}/dogs/${id}`, { body: credentials });
  return response.data;
};

export const getPetPhotosService = async (credentials) => {
  const { petId } = credentials;
  const response = await get(`${BASE_URI}/v1/dogs/${petId}/photos`);
  return response.data;
};

import { post } from '../../api';
import BASE_URI from '../../constants';

export const loginService = async (credentials) => {
  const response = await post(`${BASE_URI}v1/users/login`, { body: credentials });
  const token = response.headers.authorization.split(' ')[1];
  return { token, user: response.data };
};

export const registerService = async (credentials) => {
  const response = await post(`${BASE_URI}v1/users`, { body: credentials });
  const token = response.headers.authorization.split(' ')[1];
  return { token, user: response.data };
};

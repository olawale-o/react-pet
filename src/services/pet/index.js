import BASE_URI from '../../constants';
import { post } from '../../api';

const createDogService = async (credentials) => {
  const response = await post(`${BASE_URI}v1/dogs`, { body: credentials });
  return response.data;
};

export default createDogService;

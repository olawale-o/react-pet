import { normalize } from 'normalizr';
import petSchema from './petSchema';

const normalizeMyPets = (data) => {
  const { entities: { dogs: pets, photos }, result } = normalize(data, [petSchema]);
  return { pets, photos, petIds: result };
};

export default normalizeMyPets;

import { normalize } from 'normalizr';
import petSchema from './petSchema';
import photoSchema from './photoSchema';

export const normalizeMyPets = (data) => {
  const { entities: { dogs: pets, photos }, result } = normalize(data, [petSchema]);
  return { pets, photos, petIds: result };
};

export const normalizePhotos = (data) => {
  const { entities: { photos } } = normalize(data, [photoSchema]);
  return photos;
};

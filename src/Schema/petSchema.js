import { schema } from 'normalizr';
import photoSchema from './photoSchema';

const petSchema = new schema.Entity('dogs', {
  images: [photoSchema],
});

export default petSchema;

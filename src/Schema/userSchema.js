import { schema } from 'normalizr';
import petSchema from './petSchema';

const userSchema = new schema.Entity('users', {
  dogs: [petSchema],
});

export default userSchema;

const BASE_URI = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://fathomless-ravine-75093.herokuapp.com';

export { default as genders } from './gender';
export { default as breedTypes } from './breed';
export { default as petColors } from './pet_colors';
export default BASE_URI;

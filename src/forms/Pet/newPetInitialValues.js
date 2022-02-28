import newPetModel from './newPetModel';

const {
  formField: {
    petName,
    petColor,
    petGender,
    petWeight,
  },
} = newPetModel;

export default {
  [petName.name]: '',
  [petColor.name]: '',
  [petGender.name]: '',
  [petWeight.name]: 10,
};

import newPetModel from './newPetModel';

const {
  formField: {
    petName,
    petColor,
    petGender,
    petWeight,
    petDescription,
    petBreed,
    petImages,
  },
} = newPetModel;

export default {
  [petName.name]: '',
  [petColor.name]: '',
  [petGender.name]: '',
  [petWeight.name]: 10,
  [petDescription.name]: '',
  [petBreed.name]: '',
  [petImages.name]: [],
};

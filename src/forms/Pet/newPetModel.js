export default {
  name: 'newPetModel',
  formField: {
    petName: {
      name: 'petName',
      error: {
        required: 'Pet name is required',
      },
    },
    petColor: {
      name: 'petColor',
      error: {
        required: 'Pet color is required',
      },
    },
    petGender: {
      name: 'petGender',
      error: {
        required: 'Pet gender is required',
      },
    },
    petWeight: {
      name: 'petWeight',
      error: {
        required: 'Pet weight is required',
      },
    },
  },
};

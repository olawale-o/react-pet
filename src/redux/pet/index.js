export const ADDPET = 'pet/pet/ADDPET';
export const ALLPET = 'pet/pet/ALLPET';

const initialState = {
  myPets: null,
};

export const addPet = (payload) => ({
  type: ADDPET,
  payload,
});

export const allPets = (payload) => ({
  type: ALLPET,
  payload,
});

const petReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ALLPET:
      return { ...state, myPets: action.payload };
    case ADDPET:
      return { ...state, myPets: state.myPets.concat(action.payload) };
    default:
      return state;
  }
};

export default petReducer;

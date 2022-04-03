export const ADDPET = 'pet/pet/ADDPET';
export const ALLPET = 'pet/pet/ALLPET';
export const MYPETS = 'pet/pet/MYPETS';

const initialState = {
  myPets: null,
  allPets: null,
};

export const addPet = (payload) => ({
  type: ADDPET,
  payload,
});

export const allPets = (payload) => ({
  type: ALLPET,
  payload,
});

export const myPets = (payload) => ({
  type: MYPETS,
  payload,
});

const petReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ALLPET:
      return { ...state, allPets: action.payload };
    case MYPETS:
      return { ...state, myPets: action.payload };
    case ADDPET:
      return { ...state, myPets: state.myPets.concat(action.payload) };
    default:
      return state;
  }
};

export default petReducer;

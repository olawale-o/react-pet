export const ADDPET = 'pet/pet/ADDPET';
export const ALLPET = 'pet/pet/ALLPET';
export const MYPETS = 'pet/pet/MYPETS';
export const BREEDS = 'pet/pet/BREEDS';
export const SELECTEDPET = 'pet/pet/PET';
export const LOADING = 'pet/pet/LOADING';
export const PETPHOTOS = 'pet/pet/photos';

const initialState = {
  loading: false,
  myPets: null,
  allPets: null,
  selectedPet: null,
  breeds: null,
  photos: [],
  petIds: [],
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

export const allBreeds = (payload) => ({
  type: BREEDS,
  payload,
});

export const selectedPet = (payload) => ({
  type: SELECTEDPET,
  payload,
});

export const selectedPetPhotos = (payload) => ({
  type: PETPHOTOS,
  payload,
});

export const setLoading = (payload) => ({
  type: LOADING,
  payload,
});

const petReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ALLPET:
      return {
        ...state,
        allPets: action.payload.pets,
        petIds: [...new Set(state.petIds.concat(action.payload.petIds))],
      };
    case MYPETS:
      return {
        ...state,
        myPets: action.payload.pets,
        petIds: action.payload.petIds,
        photos: action.payload.photos,
      };
    case ADDPET:
      return { ...state, myPets: state.myPets.concat(action.payload) };
    case BREEDS:
      return { ...state, breeds: action.payload };
    case SELECTEDPET:
      return { ...state, selectedPet: action.payload };
    case LOADING:
      return { ...state, loading: action.payload };
    case PETPHOTOS:
      return {
        ...state,
        photos: { ...state.photos, ...action.payload },
      };
    default:
      return state;
  }
};

export default petReducer;

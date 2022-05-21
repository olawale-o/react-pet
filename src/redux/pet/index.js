export const ADDPET = 'pet/pet/ADDPET';
export const ALLPET = 'pet/pet/ALLPET';
export const MYPETS = 'pet/pet/MYPETS';
export const BREEDS = 'pet/pet/BREEDS';
export const SELECTEDPET = 'pet/pet/PET';
export const LOADING = 'pet/pet/LOADING';
export const PETPHOTOS = 'pet/pet/PHOTOS';
export const SET_PHOTO = 'pet/pet/PHOTO';
export const SET_PET_META = 'pet/pet/SET_PET_META';

const initialState = {
  loading: false,
  myPets: null,
  allPets: null,
  selectedPet: null,
  breeds: null,
  photos: [],
  petIds: [],
  myPetIds: [],
  searchMeta: {},
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

export const setPhoto = (payload) => ({
  type: SET_PHOTO,
  payload,
});

export const setPETMETA = (payload) => ({
  type: SET_PET_META,
  payload,
});

const petReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ALLPET:
      return {
        ...state,
        searchMeta: action.payload.meta,
        allPets: action.payload.pets,
        petIds: action.payload.petIds,
      };
    case MYPETS:
      return {
        ...state,
        myPets: action.payload.pets,
        myPetIds: action.payload.petIds,
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
    case SET_PHOTO: {
      const { dog } = action.payload;
      const { myPets, allPets } = state;
      myPets[dog.id].pic_url = dog.pic_url;
      allPets[dog.id].pic_url = dog.pic_url;
      return {
        ...state,
        myPets,
        allPets,
      };
    }
    default:
      return state;
  }
};

export default petReducer;

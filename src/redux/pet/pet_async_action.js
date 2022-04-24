import { setError, setLoading } from '../global';
import {
  addPet,
  allPets,
  myPets,
  allBreeds,
  selectedPet,
} from '.';

export const createPet = (data, service, push, userId) => (
  async function onPetCreate(dispatch) {
    dispatch(setLoading());
    try {
      const { data: { dog } } = await service(data, userId);
      dispatch(addPet(dog));
      dispatch(setLoading());
      push(`/${dog.owner_id}/pets`);
    } catch (e) {
      dispatch(setError(e.response.data.error));
      dispatch(setLoading());
    }
  }
);

export const getAllPets = (service) => (
  async function onAllPets(dispatch) {
    dispatch(setLoading());
    try {
      const { data: { dogs } } = await service();
      dispatch(allPets(dogs));
      dispatch(setLoading());
    } catch (e) {
      dispatch(setError(e.response.data.error));
      dispatch(setLoading());
    }
  }
);

export const getMyPets = (service, userId) => (
  async function onMyPets(dispatch) {
    dispatch(setLoading());
    try {
      const { data: { dogs } } = await service(userId);
      dispatch(myPets(dogs));
      dispatch(setLoading());
    } catch (e) {
      dispatch(setError(e.response.data.error));
    }
  }
);

export const getAllBreeds = (service) => (
  async function onAllBreeds(dispatch) {
    dispatch(setLoading());
    try {
      const { data: { breeds } } = await service();
      dispatch(allBreeds(breeds));
      dispatch(setLoading());
    } catch (e) {
      dispatch(setError(e.response.data.error));
      dispatch(setLoading());
    }
  }
);

export const getSelectedPet = (credential, service) => (
  async function onSelectedPet(dispatch) {
    dispatch(setLoading());
    try {
      const { data: { dog } } = await service(credential);
      dispatch(selectedPet(dog));
      dispatch(setLoading());
    } catch (e) {
      dispatch(setError(e.response.data.error));
      dispatch(setLoading());
    }
  }
);

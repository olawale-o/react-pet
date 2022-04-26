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
      push(`/${dog.owner_id}/pets`);
    } catch (e) {
      dispatch(setError(e.response.data.error));
    } finally {
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
    } catch (e) {
      dispatch(setError(e.response.data.error));
    } finally {
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
    } catch (e) {
      dispatch(setError(e.response.data.error));
    } finally {
      dispatch(setLoading());
    }
  }
);

export const getAllBreeds = (service) => (
  async function onAllBreeds(dispatch) {
    dispatch(setLoading());
    try {
      const { data: { breeds } } = await service();
      dispatch(allBreeds(breeds));
    } catch (e) {
      dispatch(setError(e.response.data.error));
    } finally {
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
    } catch (e) {
      dispatch(setError(e.response.data.error));
    } finally {
      dispatch(setLoading());
    }
  }
);

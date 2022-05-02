import { setError } from '../global';
import {
  addPet,
  allPets,
  myPets,
  allBreeds,
  selectedPet,
  setLoading,
} from '.';

export const createPet = (data, service, push, userId) => (
  async function onPetCreate(dispatch) {
    dispatch(setLoading(true));
    try {
      const { data: { dog } } = await service(data, userId);
      dispatch(addPet(dog));
      push(`/${dog.owner_id}/pets`);
    } catch (e) {
      dispatch(setError(e.response.data.error));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const getAllPets = (service) => (
  async function onAllPets(dispatch) {
    dispatch(setLoading(true));
    try {
      const { data: { dogs } } = await service();
      dispatch(allPets(dogs));
    } catch (e) {
      dispatch(setError(e.response.data.error));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const getMyPets = (service, userId) => (
  async function onMyPets(dispatch) {
    dispatch(setLoading(true));
    try {
      const { data: { dogs } } = await service(userId);
      dispatch(myPets(dogs));
    } catch (e) {
      dispatch(setError(e.response.data.error));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const getAllBreeds = (service) => (
  async function onAllBreeds(dispatch) {
    dispatch(setLoading(true));
    try {
      const { data: { breeds } } = await service();
      dispatch(allBreeds(breeds));
    } catch (e) {
      dispatch(setError(e.response.data.error));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const getSelectedPet = (credential, service) => (
  async function onSelectedPet(dispatch) {
    dispatch(setLoading(true));
    try {
      const { data: { dog } } = await service(credential);
      dispatch(selectedPet(dog));
    } catch (e) {
      dispatch(setError(e.response.data.error));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const updatePet = (data, service, userId) => (
  async function onUpdatePet(dispatch) {
    dispatch(setLoading(true));
    try {
      const { data: { dog } } = await service(data, userId);
      dispatch(selectedPet(dog));
    } catch (e) {
      dispatch(setError(e.response.data.error));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

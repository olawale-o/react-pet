import { setError } from '../global';
import {
  addPet,
  allPets,
  myPets,
  allBreeds,
  selectedPet,
  setLoading,
  selectedPetPhotos,
  setPhoto,
} from '.';

import { normalizeMyPets, normalizePhotos, normalizeAllPets } from '../../Schema/normalizers';

export const createPet = (data, service, push, userId) => (
  async function onPetCreate(dispatch) {
    dispatch(setLoading(true));
    try {
      const { data: { dog } } = await service(data, userId);
      dispatch(addPet(dog));
      push(`/${dog.owner_id}/pets`);
    } catch (e) {
      dispatch(setError(e.response.data));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const getAllPets = (service, credential) => (
  async function onAllPets(dispatch) {
    dispatch(setLoading(true));
    try {
      const { data: { dogs, result_metadata: meta } } = await service(credential);
      const { pets, petIds } = normalizeAllPets(dogs);
      dispatch(allPets({ pets, petIds, meta }));
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
      const { data: { owner: { dogs } } } = await service(userId);
      const { pets, petIds, photos } = normalizeMyPets(dogs);
      dispatch(myPets({ pets, petIds, photos }));
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

export const getSelectedPet = (credential) => (
  async function onSelectedPet(dispatch) {
    dispatch(setLoading(true));
    try {
      dispatch(selectedPet(credential));
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

export const getPetPhotos = (service, credential) => (
  async function onPetPhotos(dispatch) {
    dispatch(setLoading(true));
    try {
      const { data: { photos } } = await service(credential);
      const images = normalizePhotos(photos);
      dispatch(selectedPetPhotos(images));
    } catch (e) {
      dispatch(setError(e.response.data.error));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const setProfilePhoto = (credential, service, cb) => (
  async function onSetProfilePhoto(dispatch) {
    dispatch(setLoading(true));
    try {
      const { data: { dog } } = await service(credential);
      setPhoto(dog);
      cb(-1);
    } catch (e) {
      dispatch(setError(e.response.data.error));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

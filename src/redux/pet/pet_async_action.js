import { setError } from '../global';
import { addPet, allPets, myPets } from '.';

export const createPet = (data, service, push) => (
  async function onPetCreate(dispatch) {
    try {
      const { data: { dog } } = await service(data);
      dispatch(addPet(dog));
      push(`/${dog.owner_id}/pets`);
    } catch (e) {
      dispatch(setError(e.response.data.error));
    }
  }
);

export const getAllPets = (service) => (
  async function onAllPets(dispatch) {
    try {
      const { data: { dogs } } = await service();
      dispatch(allPets(dogs));
    } catch (e) {
      dispatch(setError(e.response.data.error));
    }
  }
);

export const getMyPets = (service, userId) => (
  async function onMyPets(dispatch) {
    try {
      const { data: { dogs } } = await service(userId);
      dispatch(myPets(dogs));
    } catch (e) {
      dispatch(setError(e.response.data.error));
    }
  }
);

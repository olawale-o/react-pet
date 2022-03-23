import { setError } from '../global';
import { addPet, allPets } from '.';

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

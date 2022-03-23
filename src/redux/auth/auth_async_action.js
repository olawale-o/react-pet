import { setError } from '../global';
import { setUser, setToken } from '.';

export const authenticate = (data, service, push) => (
  async function login(dispatch) {
    try {
      const { token, user } = await service(data);
      dispatch(setUser(user));
      dispatch(setToken(token));
      push(`/${user.id}/pets`);
    } catch (e) {
      dispatch(setError(e.response.data.error));
    }
  }
);

export const logOut = () => (
  async function handleLogOut() {
    console.log('logout');
  }
);

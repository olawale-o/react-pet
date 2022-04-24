import { setError, setLoading } from '../global';
import { setUser, setToken } from '.';

export const authenticate = (data, service, push) => (
  async function login(dispatch) {
    dispatch(setLoading());
    try {
      const { token, user } = await service(data);
      dispatch(setUser(user));
      dispatch(setToken(token));
      dispatch(setLoading());
      push(`/${user.id}/pets`);
    } catch (e) {
      dispatch(setError(e.response.data.error));
      dispatch(setLoading());
    }
  }
);

export const logOut = () => (
  async function handleLogOut() {
    console.log('logout');
  }
);

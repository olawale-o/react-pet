
import { setError } from '../global/global';
import { setUser, setToken } from './auth';

export const authenticate = (data, service, push) => (
  async function login(dispatch) {
    try {
      const response = await service(data);
      const { user, token } = response;
        dispatch(setUser(user));
        dispatch(setToken(token));
        push('/dashboard');
    } catch (e) {
      dispatch(setError(e));
    }
  }
);

export const logOut = () => (
  async function handleLogOut() {
    console.log('logout');
  }
);

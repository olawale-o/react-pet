
import { setError } from '../global/global';
import { setUser, setToken } from './auth';

export const authenticate = (data, cb, push) => (
  async function login(dispatch) {
    try {
      const response = await cb(data);
      const { user, token, success } = response;
      if (!success) {
        dispatch(setError(response.message));
      } else {
        dispatch(setUser(user));
        dispatch(setToken(token));
        push('/dashboard');
      }
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

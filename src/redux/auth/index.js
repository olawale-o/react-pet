export const SETUSER = 'auth/auth/SETUSER';
export const SETTOKEN = 'auth/auth/SETTOKEN';

const initialState = {
  user: null,
  token: null,
};

export const setUser = (payload) => ({
  type: SETUSER,
  payload,
});

export const setToken = (payload) => ({
  type: SETTOKEN,
  payload,
});

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SETUSER:
      return { ...state, user: action.payload };
    case SETTOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default authReducer;

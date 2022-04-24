export const LOADING = 'global/global/LOADING';
export const ERROR = 'global/global/SETUSER';

const initialState = {
  loading: false,
  error: null,
};

export const setLoading = () => ({
  type: LOADING,
});

export const setError = (payload) => ({
  type: ERROR,
  payload,
});

const globalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    case LOADING:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};

export default globalReducer;

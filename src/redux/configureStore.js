import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth';
import petReducer from './pet';
import composedEnhancers from './enhancers';
import globalReducer from './global';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  global: globalReducer,
  auth: authReducer,
  pet: petReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

const configureStore = createStore(persistedReducer, composedEnhancers);
const persistor = persistStore(configureStore);

export { configureStore, persistor };

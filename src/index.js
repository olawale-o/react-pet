import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { configureStore, persistor } from './redux/configureStore';
import api from './api';
import { getDogBreedsService } from './services/pet';
import { getAllBreeds } from './redux/pet/pet_async_action';

const store = configureStore;

store.dispatch(getAllBreeds(getDogBreedsService));

api.interceptors.request.use((config) => {
  const { auth: { token } } = store.getState();
  const requestConfig = { ...config };
  if (token) {
    requestConfig.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use((response) => response, (error) => {
  throw error;
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

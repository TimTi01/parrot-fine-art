import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { picturesApi } from './api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// This is just store, like store in Redux
const store = configureStore({
  reducer: {
    [picturesApi.reducerPath]: picturesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(picturesApi.middleware),
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
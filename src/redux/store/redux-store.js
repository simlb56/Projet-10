import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../slices/rootReducer';

// Configure the Redux store
export const store = configureStore({
  reducer: rootReducer, // Définit le root reducer pour gérer l'état global
  devTools: true // Active Redux DevTools pour le débogage
});

export default store;

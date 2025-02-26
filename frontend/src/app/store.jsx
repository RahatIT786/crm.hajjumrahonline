import { configureStore } from '@reduxjs/toolkit';
import pnrReducer from '../features/pnr/PnrSlice';

export const store = configureStore({
  reducer: {
    pnr: pnrReducer, // Registering the PNR slice
  },
});

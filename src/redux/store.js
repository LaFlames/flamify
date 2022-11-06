import { configureStore } from '@reduxjs/toolkit';
import { shazamCoreApi } from './services/shazam-core';
import playerReducer from './features/player-slice';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

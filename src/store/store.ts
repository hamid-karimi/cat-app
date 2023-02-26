import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import imageSlice from './slices/imageSlice';
import categorySlice from './slices/categorySlice';

export const store = configureStore({
  reducer: {
    category: categorySlice,
    image: imageSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

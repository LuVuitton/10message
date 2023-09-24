import { apiSlice } from '@/app/api/stack.api';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
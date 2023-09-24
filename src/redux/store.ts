import { profileSlice } from './../app/api/profile.api';

import { stackSlice } from '@/app/api/stack.api';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    [stackSlice.reducerPath]: stackSlice.reducer,
    [profileSlice.reducerPath]:profileSlice.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([stackSlice.middleware, profileSlice.middleware ])
});
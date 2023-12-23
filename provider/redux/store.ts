// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filters';
import paginationSliceReducer from './paginationSlice';
import charactersSliceReducer from './charactersSlice'

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    paginationSlice: paginationSliceReducer,
    charactersSlice: charactersSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

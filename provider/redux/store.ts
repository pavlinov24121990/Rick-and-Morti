// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filters';
import paginationSliceReducer from './paginationSlice';
import charactersSliceReducer from './charactersSlice'
import locationsReducer from './locations'

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    paginationSlice: paginationSliceReducer,
    charactersSlice: charactersSliceReducer,
    locations: locationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

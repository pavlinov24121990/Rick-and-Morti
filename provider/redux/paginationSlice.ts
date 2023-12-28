import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaginationState {
  currentPage: number;
  loadMoreValid: boolean;
  loadMore: number;
  loadMoreLocations: number;
  currentPageLocations: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  loadMoreValid: true,
  loadMore: 12,
  loadMoreLocations: 12,
  currentPageLocations: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setCurrentPageLocations: (state, action: PayloadAction<number>) => {
      state.currentPageLocations = action.payload;
    },
    setLoadMoreValid: (state, action: PayloadAction<boolean>) => {
      state.loadMoreValid = action.payload;
    },
     setLoadMore: (state, action: PayloadAction<number>) => {
      state.loadMore = action.payload;
    },
     setLoadMoreLocations: (state, action: PayloadAction<number>) => {
      state.loadMoreLocations = action.payload;
    },
  },
});

export const { setCurrentPage, setLoadMoreValid, setLoadMore, setLoadMoreLocations, setCurrentPageLocations } = paginationSlice.actions;
export default paginationSlice.reducer;

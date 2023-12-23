import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaginationState {
  currentPage: number;
  loadMoreValid: boolean;
  loadMore: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  loadMoreValid: true,
  loadMore: 12,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setLoadMoreValid: (state, action: PayloadAction<boolean>) => {
      state.loadMoreValid = action.payload;
    },
     setLoadMore: (state, action: PayloadAction<number>) => {
      state.loadMore = action.payload;
    },
  },
});

export const { setCurrentPage, setLoadMoreValid, setLoadMore } = paginationSlice.actions;
export default paginationSlice.reducer;

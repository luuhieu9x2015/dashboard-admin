import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { ListParams, ListResponse, PaginationParams, uploaderModel } from 'models';

export interface UploaderState {
  loading: boolean;
  list: uploaderModel[];
  filter: ListParams;
  pagination: PaginationParams;
}

const initialState: UploaderState = {
  loading: false,
  list: [],
  filter: {
    perpage: 2,
  },
  pagination: {
    page: 1,
  },
};

const uploaderSlice = createSlice({
  name: 'uploader',
  initialState,
  reducers: {
    fetchUploaderList(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchUploaderListSuccess(state, action: PayloadAction<ListResponse<uploaderModel>>) {
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    fetchUploaderListFailed(state) {
      state.loading = false;
    },

    setFilter(state, action: PayloadAction<ListParams>) {
      state.filter = action.payload;
    },

    setFilterWithDebounce(state, action: PayloadAction<ListParams>) {},
  },
});

// Actions
export const uploaderActions = uploaderSlice.actions;

// Selectors
export const selectUploaderList = (state: RootState) => state.uploader.list;
export const selectUploaderLoading = (state: RootState) => state.uploader.loading;
export const selectUploaderFilter = (state: RootState) => state.uploader.filter;
export const selectUploaderPagination = (state: RootState) => state.uploader.pagination;


// Reducer
const uploaderReducer = uploaderSlice.reducer;
export default uploaderReducer;

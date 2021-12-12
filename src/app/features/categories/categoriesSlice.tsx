import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { ListParams, ListResponse, PaginationParams, categoriesModel } from 'models';

export interface CategoriesState {
  loading: boolean;
  list: categoriesModel[];
  filter: ListParams;
  pagination: PaginationParams;
}

const initialState: CategoriesState = {
  loading: false,
  list: [],
  filter: {
    perpage: 2,
  },
  pagination: {
    page: 1,
  },
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchCategoriesList(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchCategoriesListSuccess(state, action: PayloadAction<ListResponse<categoriesModel>>) {
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    fetchCategoriesListFailed(state) {
      state.loading = false;
    },

    setFilter(state, action: PayloadAction<ListParams>) {
      state.filter = action.payload;
    },

    setFilterWithDebounce(state, action: PayloadAction<ListParams>) {},
  },
});

// Actions
export const categoriesActions = categoriesSlice.actions;

// Selectors
export const selectCategoriesList = (state: RootState) => state.categories.list;
export const selectCategoriesLoading = (state: RootState) => state.categories.loading;
export const selectCategoriesFilter = (state: RootState) => state.categories.filter;
export const selectCategoriesPagination = (state: RootState) => state.categories.pagination;

export const selectCategoriesOptions = createSelector(selectCategoriesList, (res) =>
  res.map((res) => ({
    label: res.name,
    value: res.id,
  }))
);

// Reducer
const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { ListParams, ListResponse, PaginationParams, productsModel } from 'models';

export interface ProductsState {
  loading: boolean;
  list: productsModel[];
  filter: ListParams;
  pagination: PaginationParams;
}

const initialState: ProductsState = {
  loading: false,
  list: [],
  filter: {
  },
  pagination: {
    page: 1,
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsList(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchProductsListSuccess(state, action: PayloadAction<ListResponse<productsModel>>) {
      console.log('products');
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    fetchProductsListFailed(state) {
      state.loading = false;
    },

    setFilter(state, action: PayloadAction<ListParams>) {
      state.filter = action.payload;
    },

    setFilterWithDebounce(state, action: PayloadAction<ListParams>) {},
  },
});

// Actions
export const productsActions = productsSlice.actions;

// Selectors
export const selectProductsList = (state: RootState) => state.products.list;
export const selectProductsLoading = (state: RootState) => state.products.loading;
export const selectProductsFilter = (state: RootState) => state.products.filter;
export const selectProductsPagination = (state: RootState) => state.products.pagination;

// Reducer
const productsReducer = productsSlice.reducer;
export default productsReducer;

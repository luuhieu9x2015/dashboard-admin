import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { ListParams, ListResponse, PaginationParams, customersModel } from 'models';

export interface CustomersState {
  loading: boolean;
  list: customersModel[];
  filter: ListParams;
  pagination: PaginationParams;
}

const initialState: CustomersState = {
  loading: false,
  list: [],
  filter: {
    perpage: 2,
  },
  pagination: {
    page: 1,
  },
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    fetchCustomersList(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchCustomersListSuccess(state, action: PayloadAction<ListResponse<customersModel>>) {
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    fetchCustomersListFailed(state) {
      state.loading = false;
    },

    setFilter(state, action: PayloadAction<ListParams>) {
      state.filter = action.payload;
    },

    setFilterWithDebounce(state, action: PayloadAction<ListParams>) {},
  },
});

// Actions
export const customersActions = customersSlice.actions;

// Selectors
export const selectCustomersList = (state: RootState) => state.customers.list;
export const selectCustomersLoading = (state: RootState) => state.customers.loading;
export const selectCustomersFilter = (state: RootState) => state.customers.filter;
export const selectCustomersPagination = (state: RootState) => state.customers.pagination;


// Reducer
const customersReducer = customersSlice.reducer;
export default customersReducer;

import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { ListParams, ListResponse, PaginationParams, usersModel } from 'models';

export interface UsersState {
  loading: boolean;
  list: usersModel[];
  filter: ListParams;
  pagination: PaginationParams;
}

const initialState: UsersState = {
  loading: false,
  list: [],
  filter: {
    perpage: 2,
  },
  pagination: {
    page: 1,
  },
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersList(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchUsersListSuccess(state, action: PayloadAction<ListResponse<usersModel>>) {
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    fetchUsersListFailed(state) {
      state.loading = false;
    },

    setFilter(state, action: PayloadAction<ListParams>) {
      state.filter = action.payload;
    },

    setFilterWithDebounce(state, action: PayloadAction<ListParams>) {},
  },
});

// Actions
export const usersActions = usersSlice.actions;

// Selectors
export const selectUsersList = (state: RootState) => state.users.list;
export const selectUsersLoading = (state: RootState) => state.users.loading;
export const selectUsersFilter = (state: RootState) => state.users.filter;
export const selectUsersPagination = (state: RootState) => state.users.pagination;


// Reducer
const usersReducer = usersSlice.reducer;
export default usersReducer;

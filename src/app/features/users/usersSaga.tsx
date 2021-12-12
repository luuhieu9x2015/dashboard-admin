import { PayloadAction } from '@reduxjs/toolkit';
import { ListParams, ListResponse, usersModel } from 'models';
import { call, debounce, put, takeLatest } from 'redux-saga/effects';
import { usersActions } from './usersSlice';
import usersApi from 'api/usersApi';

function* fetchUsersList(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<usersModel> = yield call(usersApi.getAll, action.payload);
    yield put(usersActions.fetchUsersListSuccess(response));
    
  } catch (error) {
    console.log('Failed to fetch users list', error);
    yield put(usersActions.fetchUsersListFailed());
  }
}

function* handleSearchDebounce(action: PayloadAction<ListParams>) {
  yield put(usersActions.setFilter(action.payload));
}

export default function* usersSaga() {
  yield takeLatest(usersActions.fetchUsersList, fetchUsersList);

  yield debounce(100, usersActions.setFilterWithDebounce.type, handleSearchDebounce);
}

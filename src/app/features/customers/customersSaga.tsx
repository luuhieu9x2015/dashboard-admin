import { PayloadAction } from '@reduxjs/toolkit';
import { ListParams, ListResponse, customersModel } from 'models';
import { call, debounce, put, takeLatest } from 'redux-saga/effects';
import { customersActions } from './customersSlice';
import customersApi from 'api/customersApi';

function* fetchCustomersList(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<customersModel> = yield call(customersApi.getAll, action.payload);
    yield put(customersActions.fetchCustomersListSuccess(response));
    
  } catch (error) {
    console.log('Failed to fetch customers list', error);
    yield put(customersActions.fetchCustomersListFailed());
  }
}

function* handleSearchDebounce(action: PayloadAction<ListParams>) {
  yield put(customersActions.setFilter(action.payload));
}

export default function* customersSaga() {
  yield takeLatest(customersActions.fetchCustomersList, fetchCustomersList);

  yield debounce(100, customersActions.setFilterWithDebounce.type, handleSearchDebounce);
}

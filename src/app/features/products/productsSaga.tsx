import { PayloadAction } from '@reduxjs/toolkit';
import { ListParams, ListResponse, productsModel } from 'models';
import { call, debounce, put, takeLatest } from 'redux-saga/effects';
import { productsActions } from './productsSlice';
import productsApi from 'api/productsApi';

function* fetchProductsList(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<productsModel> = yield call(productsApi.getAll, action.payload);
    yield put(productsActions.fetchProductsListSuccess(response));

  } catch (error) {
    console.log('Failed to fetch products list', error);
    yield put(productsActions.fetchProductsListFailed());
  }
}

function* handleSearchDebounce(action: PayloadAction<ListParams>) {
  yield put(productsActions.setFilter(action.payload));
}

export default function* productsSaga() {
  yield takeLatest(productsActions.fetchProductsList, fetchProductsList);

  yield debounce(100, productsActions.setFilterWithDebounce.type, handleSearchDebounce);
}

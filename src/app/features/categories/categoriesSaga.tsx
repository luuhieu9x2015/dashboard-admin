import { PayloadAction } from '@reduxjs/toolkit';
import { ListParams, ListResponse, categoriesModel } from 'models';
import { call, debounce, put, takeLatest } from 'redux-saga/effects';
import { categoriesActions } from './categoriesSlice';
import categoriesApi from 'api/categoriesApi';

function* fetchCategoriesList(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<categoriesModel> = yield call(categoriesApi.getAll, action.payload);
    yield put(categoriesActions.fetchCategoriesListSuccess(response));
    
  } catch (error) {
    console.log('Failed to fetch categories list', error);
    yield put(categoriesActions.fetchCategoriesListFailed());
  }
}

function* handleSearchDebounce(action: PayloadAction<ListParams>) {
  yield put(categoriesActions.setFilter(action.payload));
}

export default function* categoriesSaga() {
  yield takeLatest(categoriesActions.fetchCategoriesList, fetchCategoriesList);

  yield debounce(100, categoriesActions.setFilterWithDebounce.type, handleSearchDebounce);
}

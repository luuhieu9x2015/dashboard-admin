import { PayloadAction } from '@reduxjs/toolkit';
import { ListParams, ListResponse, uploaderModel } from 'models';
import { call, debounce, put, takeLatest } from 'redux-saga/effects';
import { uploaderActions } from './uploaderSlice';
import uploaderApi from 'api/uploaderApi';

function* fetchUploaderList(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<uploaderModel> = yield call(uploaderApi.getAll, action.payload);
    yield put(uploaderActions.fetchUploaderListSuccess(response));
    
  } catch (error) {
    console.log('Failed to fetch img list', error);
    yield put(uploaderActions.fetchUploaderListFailed());
  }
}

function* handleSearchDebounce(action: PayloadAction<ListParams>) {
  yield put(uploaderActions.setFilter(action.payload));
}

export default function* customersSaga() {
  yield takeLatest(uploaderActions.fetchUploaderList, fetchUploaderList);

  yield debounce(100, uploaderActions.setFilterWithDebounce.type, handleSearchDebounce);
}

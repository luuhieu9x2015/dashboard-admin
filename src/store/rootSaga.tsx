
import categoriesSaga from 'app/features/categories/categoriesSaga';
import productsSaga from 'app/features/products/productsSaga';
import usersSaga from 'app/features/users/usersSaga';
import uploaderSaga from 'app/features/uploader/uploaderSaga';
import authSaga from 'app/features/auth/authSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([authSaga(),uploaderSaga(), usersSaga(), productsSaga(), categoriesSaga()]);
}

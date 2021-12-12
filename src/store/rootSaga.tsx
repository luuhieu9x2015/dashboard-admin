
import categoriesSaga from 'app/features/categories/categoriesSaga';
import productsSaga from 'app/features/products/productsSaga';
import usersSaga from 'app/features/users/usersSaga';
import uploaderSaga from 'app/features/uploader/uploaderSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([uploaderSaga(), usersSaga(), productsSaga(), categoriesSaga()]);
}

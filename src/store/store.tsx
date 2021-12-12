import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { history } from 'utils';
import counterReducer from '../app/features/counter/counterSlice';
import rootSaga from './rootSaga';
import productsReducer from 'app/features/products/productsSlice';
import categoriesReducer from 'app/features/categories/categoriesSlice';
import usersReducer from 'app/features/users/usersSlice';
import customersReducer from 'app/features/customers/customersSlice';
import uploaderReducer from 'app/features/uploader/uploaderSlice';
import authReducer from 'app/features/auth/authSlice';


const rootReducer = combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
  users: usersReducer,
  categories: categoriesReducer,
  products: productsReducer,
  customers: customersReducer,
  uploader: uploaderReducer,
  auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

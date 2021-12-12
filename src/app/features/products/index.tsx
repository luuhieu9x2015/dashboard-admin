import { useAppDispatch } from 'store/hooks';
import React, { useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductEdit from './pages/ProductEdit';
import ProductsList from './pages/ProductsList';
import { categoriesActions } from '../categories/categoriesSlice';
// import ListPage from './pages/ListPage';


export default function Products() {
  const match = useRouteMatch();

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(categoriesActions.fetchCategoriesList());
  // }, [dispatch]);

  return (
    <Switch>
      <Route path={match.path} exact>
        <ProductsList />
      </Route>

      <Route path={`${match.path}/add`}>
        <ProductEdit />
      </Route>

      <Route path={`${match.path}/:productId`}>
        <ProductEdit />
      </Route>
    </Switch>
  );
}

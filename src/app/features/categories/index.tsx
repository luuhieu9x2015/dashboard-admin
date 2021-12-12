import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CategoriesList from './pages/CategoriesList';
import CategoryEdit from './pages/CategoryEdit';


export default function Categories() {
  const match = useRouteMatch();

  

  return (
    <Switch>
      <Route path={match.path} exact>
        <CategoriesList />
      </Route>

      <Route path={`${match.path}/add`}>
        <CategoryEdit />
      </Route>

      <Route path={`${match.path}/:categoryId`}>
        <CategoryEdit />
      </Route>
    </Switch>
  );
}

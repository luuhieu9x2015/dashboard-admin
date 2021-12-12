import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CustomerEdit from './pages/CustomerEdit';
import CustomersList from './pages/CustomersList';


export default function Customers() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={match.path} exact>
        <CustomersList />
      </Route>

      <Route path={`${match.path}/add`}>
        <CustomerEdit />
      </Route>

      <Route path={`${match.path}/:customerId`}>
        <CustomerEdit />
      </Route>
    </Switch>
  );
}

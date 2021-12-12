import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import UsersEdit from './pages/UserEdit';
import UsersList from './pages/UsersList';


export default function Users() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={match.path} exact>
        <UsersList />
      </Route>

      <Route path={`${match.path}/add`}>
        <UsersEdit />
      </Route>

      <Route path={`${match.path}/:userId`}>
        <UsersEdit />
      </Route>
    </Switch>
  );
}

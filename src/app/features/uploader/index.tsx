import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import UploaderEdit from './pages/UploaderEdit';
import UploaderList from './pages/UploaderList';


export default function Uploader() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={match.path} exact>
        <UploaderList />
      </Route>

      <Route path={`${match.path}/add`}>
        <UploaderEdit />
      </Route>

      <Route path={`${match.path}/:uploaderId`}>
        <UploaderEdit />
      </Route>
    </Switch>
  );
}

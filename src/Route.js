import React from 'react';
import { Route, Switch } from 'react-router-dom';

const route = () => (
  <Switch>
    <Route path="/" render={() => <h1>Landing page</h1>} exact />
  </Switch>
);

export default route;

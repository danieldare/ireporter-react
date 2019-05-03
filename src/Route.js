import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const route = () => (
  <Switch>
    <Route path="/" render={() => <h1>Landing page</h1>} exact />
    <Route path="/login" component={Login} exact />
    <Route path="/register" component={Register} exact />
  </Switch>
);

export default route;

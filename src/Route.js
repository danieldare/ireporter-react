import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import HomePage from './components/HomePage/HomePage';
import CreateIncident from './components/createIncident/createIncident';

const route = () => (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/dashboard" component={Dashboard} exact />
    <Route path="/login" component={Login} exact />
    <Route path="/create-redflag" component={CreateIncident} exact />
    <Route path="/create-intervention" component={CreateIncident} exact />
    <Route path="/register" component={Register} exact />
  </Switch>
);

export default route;

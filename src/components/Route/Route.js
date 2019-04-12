import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Auth/Login';
import HomePage from '../HomePage/HomePage';
import About from '../About/About';
import Error from '../Error/Error';
import Register from '../Auth/Register';
import Dashboard from '../Dashboard/Dashboard';
import CreateRedflag from '../createRecord/createRedflag';
import CreateIntervention from '../createRecord/CreateIntervention';
import viewRedflag from '../ViewRecord/viewRedflag';
import viewIntervention from '../ViewRecord/viewIntervention';
import viewOneRedflag from '../OneRecord/viewOneRedflag';
import Profile from '../Profile/Profile';

const route = () => (
  <div>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/create-redflag" component={CreateRedflag} exact />
      <Route path="/create-intervention" component={CreateIntervention} exact />
      <Route path="/view-redflag" component={viewRedflag} exact />
      <Route path="/view-intervention" component={viewIntervention} exact />
      <Route path="/view-oneredflag" component={viewOneRedflag} exact />
      <Route path="/about" component={About} exact />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/profile" component={Profile} exact />
      <Route path="/error" component={Error} exact />
    </Switch>
  </div>
);

export default route;

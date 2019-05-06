import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import HomePage from './components/HomePage/HomePage';
import CreateIncident from './components/createIncident/createIncident';
import ViewIncident from './components/ViewIncident/viewIncident';
import viewSingleRecord from './components/viewSingleRecord/viewSingleRecord';
import Profile from './components/Profile/Profile';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const route = () => (
    <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <ProtectedRoute path="/dashboard" component={Dashboard} exact />
        <ProtectedRoute
            path="/create-redflag"
            component={CreateIncident}
            exact
        />
        <ProtectedRoute path="/view-redflag" component={ViewIncident} exact />
        <ProtectedRoute
            path="/view-intervention"
            component={ViewIncident}
            exact
        />
        <ProtectedRoute
            path="/create-intervention"
            component={CreateIncident}
            exact
        />
        <ProtectedRoute
            path="/view-single-redflag"
            component={viewSingleRecord}
        />
        <ProtectedRoute
            path="/view-single-intervention"
            component={viewSingleRecord}
        />
        <ProtectedRoute path="/profile" component={Profile} exact />
    </Switch>
);

export default route;

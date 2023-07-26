import React from 'react';
import { Route, Switch } from 'react-router';
import { App as TodoApp } from 'app/containers/App';
import {Login} from 'app/containers/App/Login/index'
import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={TodoApp} />
    <Route path="/login" component={Login} />
    
  </Switch>
));

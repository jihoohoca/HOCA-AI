import React from 'react';
import { Route, Switch } from 'react-router';
import {Login as AppLogin} from 'app/containers/App/login'
import { App as TodoApp } from 'app/containers/App';
import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/login" component={AppLogin} />
    <Route path="/" component={TodoApp} />
  </Switch>
  
));

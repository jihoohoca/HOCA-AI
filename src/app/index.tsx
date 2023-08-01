import React from 'react';
import { Route, Switch } from 'react-router';
import {Login as AppLogin} from 'app/containers/App/login/login'
import { App as TodoApp } from 'app/containers/App';
import { SignUp as AppSignUp } from './containers/App/signup/signup';
import { HomePage as HomePageApp} from './containers/App/homepage';
import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/login" component={AppLogin} />
    <Route path="/signup" component={AppSignUp} />
    <Route path="/home" component={HomePageApp} />
    <Route path="/" component={TodoApp} />
  </Switch>
  
));

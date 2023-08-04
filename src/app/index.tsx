import React from 'react';
import { Route, Switch } from 'react-router';
import {Login as AppLogin} from 'app/containers/App/login/login'
import { App as TodoApp } from 'app/containers/App';
import { ChatGPT1 as ChatGPT1App } from 'app/containers/App/chatgpt1'
import { SignUp as AppSignUp } from './containers/App/signup/signup';
import { HomePage as HomePageApp} from './containers/App/homepage/homepage';
import { ChatGPT2 as ChatGPT2App} from './containers/App/chatgpt2';
import { ChatBase as ChatBaseApp} from './containers/App/chatbase';
import { ChatBase4 as ChatBaseApp4 } from './containers/App/chatbase4';
import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/login" component={AppLogin} />
    <Route path="/chatgpt1"  component={ChatGPT1App} />
    <Route path="/chatgpt2"  component={ChatGPT2App} />
    <Route path="/signup" component={AppSignUp} />
    <Route path="/chatbase" component={ChatBaseApp}></Route>
    <Route path="/chatbase4" component={ChatBaseApp4} />
    <Route path="/home" component={HomePageApp} />
    <Route path="/" component={TodoApp} />
  </Switch>
  
));

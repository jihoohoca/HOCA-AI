import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'app/store';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Login as AppLogin } from 'app/containers/App/login/login';
import { ChatGPT1 as ChatGPT1App } from 'app/containers/App/chatgpt1';
import { SignUp as AppSignUp } from './containers/App/signup/signup';
import { HomePage as HomePageApp } from './containers/App/homepage/homepage';
import { ChatGPT2 as ChatGPT2App } from './containers/App/chatgpt2';
import { ChatBase as ChatBaseApp } from './containers/App/chatbase';
import { ChatBase4 as ChatBaseApp4 } from './containers/App/chatbase4';


// prepare store
const store = configureStore();
export interface Props {}
const App: FC<Props> = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/login" element={<AppLogin />} />
        <Route path="/chatgpt1" element={<ChatGPT1App />} />
        <Route path="/chatgpt2" element={<ChatGPT2App />} />
        <Route path="/signup" element={<AppSignUp />} />
        <Route path="/chatbase" element={<ChatBaseApp />}></Route>
        <Route path="/chatbase4" element={<ChatBaseApp4 />} />
        <Route path="/" element={<HomePageApp />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;


import { Footer } from 'app/components/Login/Footer';
import { Header } from 'app/components/Login/Header';
import { Body } from 'app/components/Login/body';
import { RouteComponentProps } from 'react-router';
import React from 'react';

export namespace Login {
  export interface Props extends RouteComponentProps<void> {}
}
export const Login = () => {  
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  };
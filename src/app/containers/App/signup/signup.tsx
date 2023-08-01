
import { RouteComponentProps } from 'react-router';
import React from 'react';
import { Header } from 'app/components/SignUp/Header';
import { Footer } from 'app/components/SignUp/Footer';
import { Body } from 'app/components/SignUp/Body';
export namespace SignUp {
    export interface Props extends RouteComponentProps<void> {}
  }
  export const SignUp = () => {  
      return (
        <div>
          <Header/>
          <Body/>
          <Footer/>
        </div>
      );
    };
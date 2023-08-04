
import { RouteComponentProps } from 'react-router';
import React from 'react';
import { Header } from 'app/components/ChatBase4/ChatGPTMain/Header';
import style from './style.css'
import { Body } from '../ChatGPTMain/Body';


export namespace ChatGPTMain{
  export interface Props extends RouteComponentProps<void> {}
}
export const ChatGPTMain = () => {  
    return (
      <div className={style.chatgptmain}>
        <Header></Header>
        <Body></Body>
      </div>
    );
  };
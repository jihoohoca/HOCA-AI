
import { RouteComponentProps } from 'react-router';
import React from 'react';
import { Header } from 'app/components/ChatGPT1/ChatGPTMain/Header';
import style from './style.css'


export namespace ChatGPTMain{
  export interface Props extends RouteComponentProps<void> {}
}
export const ChatGPTMain = () => {  
    return (
      <div className={style.chatgptmain}>
        <Header></Header>
      </div>
    );
  };
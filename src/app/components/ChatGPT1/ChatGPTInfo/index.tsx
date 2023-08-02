
import { RouteComponentProps } from 'react-router';
import React from 'react';
import { Header } from 'app/components/ChatGPT1/ChatGPTInfo/Header';
import style from './style.css'
import { Body } from 'app/components/ChatGPT1/ChatGPTInfo/Body';
import { Footer } from 'app/components/ChatGPT1/ChatGPTInfo/Footer';


export namespace ChatGPTInfor{
  export interface Props extends RouteComponentProps<void> {}
}
export const ChatGPTInfo = () => {  
    return (
      <div className={style.chatgptinfor}>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  };
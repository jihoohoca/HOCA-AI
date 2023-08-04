
import { RouteComponentProps } from 'react-router';
import React from 'react';
import { Header } from 'app/components/ChatBase4/ChatGPTInfor/Header'
import style from './style.css'
import { Body } from 'app/components/ChatGPT1/ChatGPTInfor/Body';
import { Footer } from 'app/components/ChatGPT1/ChatGPTInfor/Footer';


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
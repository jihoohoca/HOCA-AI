
import React from 'react';
import { Header } from 'app/components/ChatGPT1/ChatGPTInfor/Header';
import style from './style.css'
import { Body } from 'app/components/ChatGPT1/ChatGPTInfor/Body';
import { Footer } from 'app/components/ChatGPT1/ChatGPTInfor/Footer';


export const ChatGPTInfo = () => {  
    return (
      <div className={style.chatgptinfor}>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  };
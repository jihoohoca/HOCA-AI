
import { Body } from 'app/components/ChatGPT1/ChatGPTInfor/Body';
import { Footer } from 'app/components/ChatGPT1/ChatGPTInfor/Footer';
import { Header } from 'app/components/ChatGPT1/ChatGPTInfor/Header';
import React from 'react';
import style from './style.css';


export const ChatGPTInfo = () => {

    return (
      <div className={style.chatgptinfor}>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  };
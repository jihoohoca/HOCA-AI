import React from 'react';
import { Header } from 'app/components/ChatGPT1/ChatGPTMain/Header';
import style from './style.css'
import { Body } from '../ChatGPTMain/Body';
import { Footer } from '../ChatGPTMain/Footer';

export const ChatGPTMain = () => {
    return (
      <div className={style.chatgptmain}>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  };

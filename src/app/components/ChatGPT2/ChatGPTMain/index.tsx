import React from 'react';
import style from './style.css'
import { Body } from '../ChatGPTMain/Body';
import { Footer } from '../ChatGPTMain/Footer';

export const ChatGPTMain = () => {  
    return (
      <div className={style.chatgptmain}>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  };
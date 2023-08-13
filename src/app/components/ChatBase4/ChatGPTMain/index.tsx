import React from 'react';
import { Header } from 'app/components/ChatBase4/ChatGPTMain/Header';
import style from './style.css'
import { Body } from '../ChatGPTMain/Body';

export const ChatGPTMain = () => {  
    return (
      <div className={style.chatgptmain}>
        <Header></Header>
        <Body></Body>
      </div>
    );
  };
import React from 'react';
import {ChatGPTInfo} from 'app/components/ChatBase/ChatGPTInfor'
import { DataSource } from 'app/components/ChatBase/DataSource';
import style from './style.css'


export const ChatBase = () => {  
    return (
      <div className={style.chatbase}>
        <ChatGPTInfo></ChatGPTInfo>
        <DataSource></DataSource>
      </div>
    );
  };
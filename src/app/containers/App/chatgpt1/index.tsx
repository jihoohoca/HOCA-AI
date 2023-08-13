import React from 'react';
import { ChatGPTInfo } from 'app/components/ChatGPT1/ChatGPTInfor';
import { ChatGPTMain } from 'app/components/ChatGPT1/ChatGPTMain';
import style from './style.css';

export const ChatGPT1 = () => {
  return (
    <div className={style.chatgpt1}>
      <ChatGPTInfo></ChatGPTInfo>
      <ChatGPTMain></ChatGPTMain>
    </div>
  );
};

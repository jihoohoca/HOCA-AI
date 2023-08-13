import React from 'react';
import { ChatGPTInfo } from 'app/components/ChatGPT2/ChatGPTInfor';
import { ChatGPTMain } from 'app/components/ChatGPT2/ChatGPTMain';
import style from './style.css';

export const ChatGPT2 = () => {
  return (
    <div className={style.chatgpt2}>
      <ChatGPTInfo></ChatGPTInfo>
      <ChatGPTMain></ChatGPTMain>
    </div>
  );
};

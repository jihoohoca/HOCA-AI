import React from 'react';
import { ChatGPTInfo } from 'app/components/ChatBase4/ChatGPTInfor';
import { ChatGPTMain } from 'app/components/ChatBase4/ChatGPTMain';
import style from './style.css';

export const ChatBase4 = () => {
  return (
    <div className={style.chatgpt1}>
      <ChatGPTInfo></ChatGPTInfo>
      <ChatGPTMain></ChatGPTMain>
    </div>
  );
};

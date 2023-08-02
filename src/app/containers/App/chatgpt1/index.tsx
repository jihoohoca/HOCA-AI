
import { RouteComponentProps } from 'react-router';
import React from 'react';
import {ChatGPTInfo} from 'app/components/ChatGPT1/ChatGPTInfor'
import { ChatGPTMain } from 'app/components/ChatGPT1/ChatGPTMain';
import style from './style.css'


export namespace ChatGPT1 {
  export interface Props extends RouteComponentProps<void> {}
}
export const ChatGPT1 = () => {  
    return (
      <div className={style.chatgpt1}>
        <ChatGPTInfo></ChatGPTInfo>
        <ChatGPTMain></ChatGPTMain>
      </div>
    );
  };
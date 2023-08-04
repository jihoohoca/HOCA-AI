
import { RouteComponentProps } from 'react-router';
import React from 'react';
import {ChatGPTInfo} from 'app/components/ChatBase/ChatGPTInfor'
import { DataSource } from 'app/components/ChatBase/DataSource';
import style from './style.css'


export namespace ChatBase {
  export interface Props extends RouteComponentProps<void> {}
}
export const ChatBase = () => {  
    return (
      <div className={style.chatbase}>
        <ChatGPTInfo></ChatGPTInfo>
        <DataSource></DataSource>
      </div>
    );
  };
import React from 'react';
import style from './style.css'
export const Footer = () => {
  return (
    <div>
          <div className={style.button_input}>
            <input className={style.input_message} placeholder="Send a message"></input>
          </div>
    </div>
  );
};
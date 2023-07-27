import React from 'react';
import style from './style.css';
export const Footer = () => {
  return (
    <footer>
      <div className={style.text}>
        <a>Terms of use</a>
        &ensp; <span>|</span> &ensp;
        <a>Privacy policy</a>
      </div>
    </footer>
  );
};
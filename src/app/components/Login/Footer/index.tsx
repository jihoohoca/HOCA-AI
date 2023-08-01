import React from 'react';
import style from './style.css';
export const Footer = () => {
  return (
    <footer>
      <div className={style.text}>
        <span>Terms of use</span>
        &ensp; <span>|</span> &ensp;
        <span>Privacy policy</span>
      </div>
    </footer>
  );
};

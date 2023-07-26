import React from 'react';
import style from './style.css';
import frame from '../../../images/Frame.png';
export const Header = () => {
  return (
    <header className={style.header}>
      <img src={frame} />
    </header>
  );
};

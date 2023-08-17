import React from 'react';
import style from '../style.css';

interface CardFieldProps {
  title: string;
  content: string;
  click?: any;
}

export const CardField = ({ title, content, click }: CardFieldProps): JSX.Element => {
  return (
    <div onClick={click} className={style.card}>
      <span className={style.titleCard}>{title}</span>
      <hr className={style.divider} />
      <div className={style.content}>{content}</div>
    </div>
  );
};

import React from 'react';
import style from '../style.css';

interface CardFieldProps {
  title: string;
  content: string;
}

export const CardField = ({ title, content }: CardFieldProps): JSX.Element => {
  return (
    <div className={style.card}>
      <span className={style.titleCard}>{title}</span>
      <hr className={style.divider} />
      <div className={style.content}>{content}</div>
    </div>
  );
};

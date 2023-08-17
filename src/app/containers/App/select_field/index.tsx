import { FooterHoca } from 'app/components/FooterHoca';
import React from 'react';
import { Field } from './field';
import style from './style.css';


export const SelectField = (): JSX.Element => {
  return (
    <div className={style.wapper}>
      <div className={style.field}>
        <Field />
      </div>
      <div className={style.footer}>
        <FooterHoca />
      </div>
    </div>
  );
};

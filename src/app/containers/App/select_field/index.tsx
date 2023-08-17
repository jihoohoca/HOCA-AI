import { FooterHoca } from 'app/components/FooterHoca';
import React from 'react';
import { Field } from './field';
import { useSelectField } from './hooks';
import style from './style.css';

export const SelectField = (): JSX.Element => {
  const { fields, clickField } = useSelectField();

  return (
    <div className={style.wapper}>
      <div className={style.field}>
        <Field click={clickField} items={fields}/>
      </div>
      <div className={style.footer}>
        <FooterHoca />
      </div>
    </div>
  );
};

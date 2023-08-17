import React from 'react';
import { CardField } from './components/card';
import style from './style.css';
import Frame from '../../../images/Frame.png';
import { Button } from 'app/components/Button';
import { FieldModel } from 'app/models/FieldModel';

interface FieldProps {
  items: FieldModel[];
  click?: any;
}

export const Field = ({ items, click }: FieldProps): JSX.Element => {
  return (
    <>
      <div className={style.wapperField}>
        <div className={style.layer}>
          <Button click={() => {}} stylePros={style.borderButton} styleText={style.textButton} text={'New chatbot +'} />
          <img src={Frame} className={style.logo} />
          <div className={style.flexContainer}>
            {items.map((item: FieldModel) => {
              return <CardField click={click} title={item.name} content={item.description} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

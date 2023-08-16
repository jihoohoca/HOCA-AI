import React from 'react';
import { CardField } from './components/card';
import style from './style.css';
import Frame from '../../../images/Frame.png';
import { Button } from 'app/components/Button';

export const Field = (): JSX.Element => {
  return (
    <>
      <div className={style.wapperField}>
        <div className={style.layer}>
          <Button click={() => {}} stylePros={style.borderButton} styleText={style.textButton} text={'New chatbot +'} />
          <img src={Frame} className={style.logo} />
          <div className={style.flexContainer}>
            <CardField
              title="CHATGPT"
              content="Interact with our flagship language models in a conversational interface"
            />
            <CardField
              title="CHATGPT"
              content="Interact with our flagship language models in a conversational interface"
            />
            <CardField
              title="CHATGPT"
              content="Interact with our flagship language models in a conversational interface"
            />
          </div>
        </div>
      </div>
    </>
  );
};

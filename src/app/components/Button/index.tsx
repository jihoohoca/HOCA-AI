import React from 'react';

interface ButtonProps {
  stylePros?: any;
  click: any;
  styleText?: any;
  text: string
}

export const Button = ({ stylePros, click, styleText, text }: ButtonProps): JSX.Element => {
  return (
    <div className={stylePros}>
      <div onClick={click} className={styleText}>
          {text}
      </div>
    </div>
  );
};

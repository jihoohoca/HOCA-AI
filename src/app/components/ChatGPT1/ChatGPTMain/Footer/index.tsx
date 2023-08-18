import React, { useState } from 'react';
import style from './style.css'
export const Footer = () => {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState('');
  function handleChange(e:any) {
    setText(e.target.value);
  }

  const handleKeyPress = (e:any) => {
    if (e.key === 'Enter') {
       setSubmitted(text)
    }
  }
  return (
    <div>
          <div className={style.button_input}>
            <input onChange={handleChange} type="submit" className={style.input_message} placeholder="Send a message"></input>
          </div>
    </div>
  );
};
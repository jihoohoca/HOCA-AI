import React from 'react';
import style from './style.css';
import google from '../../../images/google.png';
import microsoft from '../../../images/microsoft.png';
import apple from '../../../images/apple.png';

export const Body = () => {
  return (
    <body>
      <form>
        <div className={style.welcome}>Welcome Back</div>

        <div>
          <input type="text" className={style.input_address} placeholder="Email address"></input>
        </div>

        <div className={style.continute}>
          <div className={style.text}>Continue</div>
        </div>

        <div className={style.signup}>
          Don't have an account? &nbsp; <span className={style.link_signup}>Sign up</span>
        </div>

      <div className= {style.horizontal_or}>
        <div className={style.horizontal}></div>
        <div className={style.or}>OR</div>
        <div className={style.horizontal}></div>
      </div>
       

        <div className={style.button_google}>
          <div className={style.button_img}>
            <img src={google} alt="" />
          </div>
          <div className={style.button_text}>Continue With Google</div>
        </div>

        <div className={style.button_microsoft_apple}>
          <div className={style.button_img}>
            <img src={microsoft} alt="" />
          </div>
          <div className={style.button_text}>Continue With Microsoft</div>
        </div>
        <div className={style.button_microsoft_apple}>
          <div className={style.button_img}>
            <img src={apple} alt="" />
          </div>
          <div className={style.button_text}>Continue With Apple</div>
        </div>
      </form>
    </body>
  );
};

import React from 'react';
import style from './style.css';
import google from '../../../images/google.png';
import microsoft from '../../../images/microsoft.png';
import apple from '../../../images/apple.png';

export const Body = () => {
  return (
    <body>
      <form>
        <h1>Welcome Back</h1>
        <div className="address">
          <input type="text" placeholder="Email address" required />
        </div>

        <div className={style.continute}>
          <div className={style.text}>Continue</div>
        </div>

        <div className={style.sigup}>
          Don't have an account? &nbsp; <a>Sigup</a>
        </div>

        <div className={style.textOr}>OR</div>
        <div className={style.blank}></div>

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

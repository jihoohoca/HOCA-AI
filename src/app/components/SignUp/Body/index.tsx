import React from 'react';
import style from './style.css';
import google from '../../../images/google.png';
import microsoft from '../../../images/microsoft.png';
import apple from '../../../images/apple.png';
import check from '../../../images/check right.png'

export const Body = () => {
  return (
    <body>
      <form>
        <h1>Create your account</h1>
  
        <div className={style.notification}>
          <div className={style.first_line}>Note that phone verification may be required for</div>
          <div className={style.second_line}>signup.Your number will only be used to verify</div>
          <div className={style.third_line}>your identity for security purposes.</div>
        </div>

        <div>
          <input className={style.address} type="text" placeholder="Email address" required />
        </div>

        <div>
          <input className={style.password} type="password" placeholder="Password" required />
        </div>

        <div>
          <div className={style.line_1}>Your password must contain:</div>

          <div>
            <li className={style.line_2}> At least 1 upper case</li>
          </div>
        </div>

        <div className={style.line_3}>
        <img src={check}></img> <span className={style.text_line_3}>At least 8 characters</span>
        </div>


        <div className={style.continute}>
          <div className={style.text}>Continue</div>
        </div>

        <div className={style.sigup}>
        Already have an account? &nbsp; <a>Log in</a>
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

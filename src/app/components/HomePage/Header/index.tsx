import React from 'react';
import Frame from '../../../images/Frame.png'
import Arrow from '../../../images/arrow down.svg'
import Frame2 from '../../../images/Frame-2.svg'
import style from './style.css'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={style.navigation}>
        <div><img className={style.navigation_image_frame} src={Frame}/>
        <div><img className={style.navigation_image_frame} src={Frame2}/></div>
        </div>
        <div className={style.navigation_general}>
        <div className={style.navigation_text}>Research</div>
        <img className={style.navigation_image} src={Arrow}/>
        <div className={style.navigation_text}>Product</div>
        <img  className={style.navigation_image} src={Arrow}/>
        <div className={style.navigation_text}>Developers</div>
        <img  className={style.navigation_image} src={Arrow}/>
        <div className={style.navigation_text}>Safety</div>
        <img className={style.navigation_image} src={Arrow}/>
        <div className={style.navigation_text}>Company</div>
        <img className={style.navigation_image} src={Arrow}/>
        <div>
        <input className={style.navigation_search} type="text" placeholder="Seach" required />
        <Link to='/login' className={style.navigation_button }>Log in</Link>
        <Link to='signup' className={style.navigation_signup }>Sign up</Link>
        </div>
        </div>
        

    </div>
  );
};
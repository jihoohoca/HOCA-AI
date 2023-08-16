import React from 'react';
import style from './style.css';
import setting from '../../../../images/more-horizontal.png'
import { useSelector } from 'react-redux';
import { RootState } from 'app/reducers';
export const Footer = () => {

  const auth: any = useSelector((state: RootState) => state.auths);

  return (
    <div>
     <div className={style.test}>
     <div className={style.blank}></div>
        <div className={style.avatar_account}>
            <div className={style.avatar}></div>
            <div className={style.account}>{auth[0]?.email || ""}</div>
            <div className={style.setting}><img src={setting}></img></div>
        </div>
     </div>
    </div>
  );
};
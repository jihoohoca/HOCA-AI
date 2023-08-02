import React from 'react';
import style from './style.css';
import Frame from '../../../images/Frame.png';
import Frame2 from '../../../images/Frame-2.svg';
import Map from '../../../images/image 1.png'
export const Footer = () => {
  return (
    <>
    <div className={style.container}>
      <div>
      <div>
        <img className={style.navigation_image_frame} src={Frame} />
        <div>
          <img className={style.navigation_image_frame} src={Frame2} />
        </div>
      </div>
      <br></br>
      <div>주식회사 호카</div>
      <br></br>
      <div>
        <div className={style.container_information}>
          <div>CEO</div>
          <p>Park Hyung Jun</p>
        </div>
        <div className={style.container_information} >
          <div>E-Mail</div>
          <p className={style.information_line2} >jun@hoca.dev</p>
        </div>
        <div className={style.container_information} >
          <div>Tel</div>
          <p className={style.information_line3}>02 ) 598-3373</p>
        </div>
        <div className={style.container_information}>
          <div>Phone</div>
          <p className={style.information_line4}>010-4787-3373</p>
        </div>
        <div className={style.container_information}>
          <div>Business</div>
          <p className={style.information_line5}>132 87 02761</p>
        </div>
        <div className={style.container_information}>
          <div>address</div>
          <p className={style.information_line6}>(402) 39, Banpo-daero 21-gil, Seocho-gu, Seoul</p>
        </div>
      </div>
      </div>
      <div className={style.image_map}>
        <img src={Map}></img>
      </div>
    </div>
    <div className={style.horizontal}></div>
    <div className={style.text_final}><div>ⓒ 2022 HOCA COMPANY. ALL RIGHTS RESERVED..</div></div>
    </>
  );
};

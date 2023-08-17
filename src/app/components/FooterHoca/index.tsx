import React from 'react';
import style from './style.css';
import Frame from '../../images/Frame.png';
import Frame2 from '../../images/Frame-2.svg';
import Map from '../../images/image 1.png';

export const FooterHoca = (): JSX.Element => {
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
          <table>
            <tr>
              <td>CEO</td>
              <td>Park Hyung Jun</td>
            </tr>
            <tr>
              <td>E-Mail</td>
              <td>jun@hoca.dev</td>
            </tr>
            <tr>
              <td>Tel</td>
              <td>(02 ) 598-3373</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>010-4787-3373</td>
            </tr>
            <tr>
              <td>Business</td>
              <td>Business</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>(402) 39, Banpo-daero 21-gil, Seocho-gu, Seoul</td>
            </tr>
          </table>
        </div>
        <div className={style.image_map}>
          <img src={Map}></img>
        </div>
      </div>
      <div className={style.horizontal}></div>
      <div className={style.text_final}>
        <div>ⓒ 2022 HOCA COMPANY. ALL RIGHTS RESERVED..</div>
      </div>
    </>
  );
};

import React from 'react';
import style from './style.css'
import avatar from '../../../../images/Ellipse 35.svg'

export const Body = () => {
  return (
    <div>
      <div className={style.infor_input_user}>
      <div className={style.avatar_user}><img className={style.avatar} src={avatar}></img></div>
      <div className={style.input_user}>Write a paragraph more than 400 word about me as a senior graphic
         designer and UI designer. I'm a graphic designer with 4 year experience, get A bachelor's degree as a graphic designer.
          My strong skill is about layout, typography, branding and logo design. I have an ability to meet design deadline on time.</div>
      </div>

      <div className={style.chatgpt_answer_user}>
      <div className={style.avatar_user}><img className={style.avatar} src={avatar}></img></div>
      <div className={style.input_user}>You are a seasoned graphic designer 
      with a strong passion for design and a solid foundation of knowledge 
      and experience. With a bachelor's degree in graphic design and 4 years 
      of professional experience, you have honed your skills in layout, 
      typography, branding, and logo design. Your attention to detail and 
      ability to create visually appealing designs has earned you recognition 
      in your field. You understand the importance of effective communication 
      in the design process and have a great ability to work with clients and team members to produce
       designs that meet their needs. You have a natural talent for creating cohesive and well-balanced designs that communicate 
       your clients' messages in a clear and compelling way. In addition, you are highly organized and able to meet deadlines, making you an indispensable 
       member of any design team. Whether working on a large-scale
        branding project or a simple logo design, you bring your passion and creativity to every project, ensuring that each design is not only visually stunning, but also
         functional and effective. With your skills, experience, and positive attitude, you are sure to continue making a lasting impact in the world of graphic design.</div>
  
      </div>


    </div>
  );
};

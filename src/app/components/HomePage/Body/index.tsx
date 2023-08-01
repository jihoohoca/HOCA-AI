import React from 'react';
import style from './style.css';

export const Body = () => {
  return (
    <>
      <div className={style.background}></div>
      <div className={style.intro}>
        <div className={style.introducing}>INTRODUCING</div>
        <div className={style.chatGPT}>CHATGPT</div>
      </div>
      <div className={style.text_intro}>
        <div>We’ve trained a model called ChatGPT which interacts</div>
        <div>in a conversational way. The dialogue format makes it</div>
        <div>possible for ChatGPT to answer followup questions, </div>
        <div>admit its mistakes, challenge incorrect premises, and</div>
        <div>and reject inappropriate requests.</div>
        <div>
          <button className={style.navigation_button}>Try chatGPT</button>
        </div>
      </div>
      <div className={style.cybord_hand}></div>
      <div className={style.explore}>
        <div className={style.learn_more}>
          <div className={style.vertical}></div>
          <div className={style.text_learn_more}>
            <div>Pioneering research</div> <div>on the path to AGI</div>
            <div className={style.button_learn_more}>Learn more</div>
          </div>
        </div>

        <div className={style.learn_more}>
          <div className={style.vertical}></div>
          <div className={style.text_learn_more}>
            <div>Transforming work</div> <div> and creativity with AI</div>
            <div className={style.button_explore}>Explore our products</div>
          </div>
        </div>

        <div className={style.learn_more}>
          <div className={style.vertical}></div>
          <div className={style.text_learn_more}>
            <div>Join us in shaping the </div> <div>future of technology</div>
            <div className={style.button_future}>View careers</div>
          </div>
        </div>
      </div>
      <div className={style.safe_responsibility}>
        <div className={style.safety}>
          <h3>Safety & responsibility</h3>

          <div className={style.text_safe_responsibility}>
            <div>Our work to create safe and beneficial AI</div>
            <div>requires a deep understanding of the</div>
            <div>potential risks and benefits, as well as careful</div>
            <div> consideration of the impact.</div>
          </div>
          <div className={style.button_safety}>Learn about safety</div>
        </div>

        <div className={style.safety_image}></div>
      </div>

      <div className={style.product}>
        <h3 className={style.product_left}> Product</h3>
        <div className={style.product_right}>
          <div>Our API platform offers our latest models and</div>
          <div>guides for safety best practices.</div>
          <div className={style.button_explore}>Explore our products</div>
        </div>
      </div>

      <div className={style.arrow}>
        <div className={style.arrow_left}></div>
        <div className={style.arrow_right}></div>
      </div>

      <div className={style.container}>
        <div>
          <div className={style.chatGPT4}></div>
          <div className={style.text_chatGPT4}>
            <div>GPT-4 API general availability and</div>
            <div>deprecation of older models in the</div>
            <div>Completions API</div>
            <div className={style.time}>Jul 6, 2023</div>
          </div>
        </div>
        <div>
          <div className={style.function_calling}></div>
          <div>
            <div>Function calling and other API</div>
            <div>updates</div>
            <div className={style.time}>Jun 13, 2023</div>
          </div>
        </div>
        <div>
          <div className={style.app_ios}></div>
          <div>Introducing the ChatGPT app for</div>
          <div>iOS</div>
          <div className={style.time}>May 18, 2023</div>
        </div>
      </div>

      <div className={style.container_open_AI}>
      <div className={style.open_AI_left}>
        <div>
          <h3>Careers at OpenAI </h3>
        </div>
        <div>
          <div>Developing safe and beneficial AI requires</div>
          <div>people from a wide range of disciplines and</div>
          <div>backgrounds.</div>
        </div>
        <div className={style.button_future}>View careers</div>
      </div>
      <div className={style.open_ai_image}></div>
      </div>
      <div className={style.background_team}>
        <div className={style.background_black}></div>
        <div className={style.background_green}></div>
      </div>
      <div className={style.text_team}>
        <div className={style.quotation_marks_1}>“</div>
        <div>I encourage my team to keep</div>
        <div>learning. Ideas in different topics</div>
        <div>or fields can often inspire new</div>
        <div>ideas and broaden the potential</div>
        <div>solution space.  <div className={style.quotation_marks_2}>”</div></div>
      </div>
      <div className={style.business_employee}></div>
    </>
  );
};

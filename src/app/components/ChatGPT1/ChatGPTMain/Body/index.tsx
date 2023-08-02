import React from 'react';
import Sun from '../../../../images/sun.svg';
import Zap from '../../../../images/zap.svg';
import Triangle from '../../../../images/alert-triangle.svg';
import style from './style.css';
import Arrow from '../../../../images/arrow-right-short.svg';
export const Body = () => {
  return (
    <div className={style.container}>
      <div className={style.example}>
        <div>
          <img src={Sun}></img>
        </div>
        <div>Examples</div>
        <div>
          <button className={style.button_example}>
            "Explain quantum computing in simple terms" <img src={Arrow}></img>{' '}
          </button>
        </div>

        <div>
          <button className={style.button_example}>
            "Got any creative ideas for a 10 year old’s birthday?"<img src={Arrow}></img>{' '}
          </button>
        </div>

        <div>
          <button className={style.button_example}>
            "How do I make an HTTP request in Javascript?"<img src={Arrow}></img>{' '}
          </button>
        </div>
      </div>
      <div className={style.capabilities}>
        <div>
          <img src={Zap}></img>
        </div>
        <div>Capabilities</div>
        <div>
          <button className={style.button_capabilities}>Remembers what user said earlier in the conversation</button>
        </div>
        <div>
          <div>
            <button className={style.button_capabilities}>Allows user to provide follow-up corrections</button>
          </div>
          <div>
            <button className={style.button_capabilities}>Trained to decline inappropriate requests</button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src={Triangle}></img>
        </div>
        <div>Limitations</div>
        <div>
          <button className={style.button_limitations}>May occasionally generate incorrect information</button>
        </div>
        <div>
          <button className={style.button_limitations}>
            May occasionally produce harmful instructions or biased content
          </button>
        </div>
        <div>
          <button className={style.button_limitations}>Limited knowledge of world and events after 2021</button>
        </div>
      </div>
    </div>
  );
};
